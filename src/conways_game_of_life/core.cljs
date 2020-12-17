(ns conways-game-of-life.core
  (:require
    [cljs.core.async :as async]
    [reagent.core :as r]
    [reagent.dom :as rd]))

;(enable-console-print!)

(def blinker [[1 0] [1 1] [1 2]])

(defn vec2d
  [rows cols init]
  (mapv (fn [y] (mapv (fn [x] (init x y)) (range cols))) (range rows)))

(defn pseudo-random
  [seed]
  (let [x (* (Math/sin (inc seed))
             10000)]
    (- x (Math/floor x))))

(defn random-int
  [seed max]
  [(pseudo-random seed) (Math/round (mod seed max))])

(defn next-seed
  [seed max]
  (let [[seed _] (random-int seed max)]
    seed))

(defn seed-grid
  [{:keys [seed grid] :as state}]
  (let [seed-atom (atom seed)
        state (->> (mapv (fn [i]
                           (mapv (fn [cell]
                                   (let [[seed random] (random-int @seed-atom 1)]
                                     (reset! seed-atom seed)
                                     (assoc cell :cell-state random)))
                                 i)) grid)
                   (assoc state :grid))]
    (assoc state :seed @seed-atom)))


(defn set-initial-shape
  [grid shape]
  (reduce (fn [grid [x y]]
            (assoc-in grid [y x :cell-state] 1)) grid shape))

(defonce app-state-atom (atom nil))
(def grid-size 50)
(def initial-state
  {:states [{:cell-size     30                              ;; px
             :grid-size     grid-size
             :grid          (-> (vec2d (/ grid-size 2) (/ grid-size 2)
                                       (fn [x y]
                                         {:x          x
                                          :y          y
                                          :cell-state 0     ;; 0 = dead, 1 = alive
                                          }))
                                (set-initial-shape blinker))
             :seed          1
             :initial-seed? false
             :running?      false
             }]})

(defn get-state
  [app-state-atom]
  (-> @app-state-atom
      :states
      last))

(defn pprint-grid [grid] (cljs.pprint/pprint grid))
(defn px [v] (str v "px"))

(defn wrap
  [a max-a]
  (cond
    (< a 0) (- max-a a 1)
    (> a max-a) (mod a (inc max-a))
    :else a))

(defn neighbours
  "Find the 8 members of a given x,y coordinates.
   The grid is considered to be a toroidal so edges wraps around.

   XXX
   X.X
   XXX

   "
  [grid x y]
  (let [rows (-> grid count dec)
        cols (-> grid first count dec)]
    (for [i (range (dec y) (+ 2 y))
          j (range (dec x) (+ 2 x))
          :when (not (and (= i y) (= j x)))]
      [(wrap i rows) (wrap j cols)])))

(defn alive?
  [cell-state]
  (= 1 cell-state))

(defn dead?
  [cell-state]
  (= 0 cell-state))

(defn world
  [{:keys [state]}]
  (let [{:keys [grid grid-size cell-size]} state]
    [:div {:style {:display               "inline-grid"
                   :grid-gap              "1px"
                   :grid-template-columns (str "repeat(" (int (/ grid-size 2)) "," cell-size "px)")
                   :background-color      "white"
                   :border                "1px solid black"}}
     (map (fn [{:keys [cell-state x y]}]
            [:div {:key   (str "cell-" x "-" y)
                   :style {:outline    ".5px solid lightgray"
                           :display    "inline-block"
                           :margin     "0px"
                           :background (if (alive? cell-state) "black" "white")
                           :min-width  (px cell-size)
                           :min-height (px cell-size)}}]) (flatten grid))]))

(defn mutate!
  [app-state-atom pure-fn & mutate-args]
  (swap! app-state-atom (fn [app-state]
                          (let [current-state (last (:states app-state))
                                next-state (apply pure-fn (conj mutate-args current-state))]
                            (if (some? next-state)
                              (update app-state :states (fn [states] (conj states next-state)))
                              app-state)))
         (get-state app-state-atom)))

(defn game-of-life
  [{:keys [state trigger-event]}]
  [:div
   [:div {:style {:display     "block"
                  :margin      "10px"
                  :margin-left "0px"}}
    [:button {:on-click (fn [] (trigger-event :seed))} "seed"]
    [:button {:on-click (fn [] (trigger-event :tick))} "tick"]
    [:button {:on-click (fn [] (trigger-event :start))} "start"]
    [:button {:on-click (fn [] (trigger-event :stop))} "stop"]]
   [world {:state state}]
   ])

(defn neighbours->cell-states
  [grid neighbours]
  (mapv (fn [[x y]] (-> (get-in grid [y x]) :cell-state)) neighbours))

(defn four-rule
  "
  Any live cell with fewer than two live neighbours dies, as if by underpopulation.
  Any live cell with two or three live neighbours lives on to the next generation.
  Any live cell with more than three live neighbours dies, as if by overpopulation.
  Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  "
  [grid cell]
  (let [{:keys [x y cell-state]} cell
        cell-states-sum (->> (neighbours grid x y)
                             (neighbours->cell-states grid)
                             (apply +)
                             )]
    (cond
      ;; solitude
      (and (alive? cell-state)
           (< cell-states-sum 2)) (assoc cell :cell-state 0)

      ;; overpopulation
      (and (alive? cell-state)
           (> cell-states-sum 3)) (assoc cell :cell-state 0)

      (and (alive? cell-state)
           (or (= cell-states-sum 2)
               (= cell-states-sum 3))) cell

      (and (dead? cell-state)
           (= cell-states-sum 3)) (assoc cell :cell-state 1)

      :else cell)))

(defn tick
  "
   if the sum of all nine fields in a given neighbourhood is three, the inner field state for the next generation will be life;
   if the all-field sum is four, the inner field retains its current state;
   and every other sum sets the inner field to death.
   "
  [{:keys [seed grid] :as state}]
  (let [state (->> (mapv (fn [i]
                           (mapv (fn [{:keys [x y cell-state] :as cell}]
                                   (let [cell-states-sum (->> (neighbours grid x y)
                                                              (neighbours->cell-states grid)
                                                              (apply +)
                                                              )]

                                     ;(println cell-states-sum)
                                     (condp = cell-states-sum
                                       3 (assoc cell :cell-state 1)
                                       4 cell
                                       (assoc cell :cell-state 0)
                                       )
                                     ;(four-rule grid cell)

                                     )) i)) grid)
                   (assoc state :grid))]
    (assoc state :seed (next-seed seed 1))
    ))

(defonce render-atom (atom nil))
(when (nil? @render-atom)
  (reset! render-atom {:last-timestamp 0
                       :x-sec          250
                       :delta          0
                       :fps            0
                       }))

(defn simulate
  []
  (let [id (atom nil)]
    (reset! id (js/requestAnimationFrame
                 (fn h [timestamp]
                   (when (:running? (get-state app-state-atom))

                     (reset! id (js/requestAnimationFrame h))

                     (when (>= (- timestamp (:last-timestamp @render-atom))
                               (:x-sec @render-atom))

                       (let [delta (/ (- timestamp (:last-timestamp @render-atom))
                                      1000)]
                         (swap! render-atom assoc :last-timestamp timestamp)
                         (swap! render-atom assoc :delta (/ 1 delta))

                         )


                       (mutate! app-state-atom tick)
                       )
                     )
                   )))
    )
  )

(defn handle-event!
  ([name data]
   (condp = name
     :tick (mutate! app-state-atom tick)
     :seed (mutate! app-state-atom seed-grid)
     :start (mutate! app-state-atom (fn [state]
                                      (let [state (assoc state :running? true)]
                                        (js/requestAnimationFrame simulate)
                                        state
                                        )
                                      ))
     :stop (mutate! app-state-atom (fn [state] (assoc state :running? false)))
     nil))
  ([name] (handle-event! name nil)))

(defn render
  [state]
  (rd/render [game-of-life {:state         state
                            :trigger-event handle-event!}]
             (. js/document (getElementById "app"))))

(when (nil? @app-state-atom)
  (reset! app-state-atom initial-state)

  (when (:initial-seed? (get-state app-state-atom))
    (mutate! app-state-atom seed-grid))

  (add-watch app-state-atom
             :game-loop
             (fn [_ _ _ _]
               (render (get-state app-state-atom))
               )))


(defn init! [] (render (get-state app-state-atom)))
(defn reload! [] (render (get-state app-state-atom)))


(comment
  (let [a (for [x [-1 0 1]
                y [-1 0 1]
                :when (not (and (= x 0) (= y 0)))]
            [x y]
            )]
    )

  (-> (get-state app-state-atom)
      :grid
      (set-initial-shape blinker)
      )
  )