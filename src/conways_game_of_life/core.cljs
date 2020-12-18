(ns conways-game-of-life.core
  (:require
    [cljs.core.async :as async]
    [reagent.core :as r]
    [reagent.dom :as rd]))

(def blinker #{[1 0] [1 1] [1 2]})
(def shapes {
             :blinker #{[1 0] [1 1] [1 2]}
             :glider  #{[0 0] [2 0] [1 1] [1 2] [2 1]}
             })

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
(def grid-size 10)
(def initial-state
  {:states [{:cell-size     30                              ;; px
             :grid-size     grid-size
             :grid          (:glider shapes)
             :seed          1
             :initial-seed? false
             :running?      false
             :toroidal?     true
             }]})

(defn get-state
  [app-state-atom]
  (-> @app-state-atom
      :states
      last))

(defn pprint-grid [grid] (cljs.pprint/pprint grid))
(defn px [v] (str v "px"))

(defn wrap
  [a size]
  (mod (+ a size) size))

(defn neighbours
  "Find the 8 members of a given x,y coordinates.
   The grid is considered to be a toroidal so edges wraps around.

   XXX
   X.X
   XXX

   "
  [{:keys [grid-size toroidal?]} [x y]]
  (let [size (/ grid-size 2)]
    (for [dx [-1 0 1]
          dy [-1 0 1]
          :when (not (= [0 0] [dx dy]))]
      (if toroidal?
        [(wrap (+ dx x) size) (wrap (+ dy y) size)]
        [(+ dx x) (+ dy y)]))))

(defn alive?
  [cell-state]
  (= 1 cell-state))

(defn dead?
  [cell-state]
  (= 0 cell-state))

(defn world
  [{:keys [state trigger-event]}]
  (let [{:keys [grid grid-size cell-size]} state]
    [:div {:style {:display               "inline-grid"
                   :grid-gap              "1px"
                   :grid-template-columns (str "repeat(" (int (/ grid-size 2)) "," cell-size "px)")
                   :background-color      "white"
                   :border                "1px solid black"}}
     (for [y (range (/ grid-size 2))
           x (range (/ grid-size 2))]
       [:div {:key      (str "cell-" x "-" y)
              :on-click (fn [] (trigger-event :toggle-cell {:cell [x y]}))
              :style    {:outline    ".5px solid lightgray"
                         :display    "inline-block"
                         :margin     "0px"
                         :background (if (grid [x y]) "black" "white")
                         :min-width  (px cell-size)
                         :min-height (px cell-size)}}])]))

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
   [world {:state         state
           :trigger-event trigger-event}]])

(defn inc-grid
  [{:keys [grid] :as state}]
  (-> (for [[loc n-neighbours] (->> grid
                                    (mapcat (partial neighbours state))
                                    frequencies)
            :when (or (= n-neighbours 3)                    ;; bring back to life
                      (and (= n-neighbours 2) (grid loc)))] ;; it's alive with 2 bros
        loc))
  set)

(defn tick
  [{:keys [seed] :as state}]
  (let [state (->> (inc-grid state)
                   (assoc state :grid))]
    (assoc state :seed (next-seed seed 1))))

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
                                        state)))
     :toggle-cell (mutate! app-state-atom (fn [{:keys [grid] :as state}]
                                            (let [cell (:cell data)]
                                              (update-in state [:grid] (if (grid cell) disj conj) cell)
                                              )))
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
            )
        bb #{[1 1] [0 0]}]
    (bb [1])
    )


  (-> (get-state app-state-atom)
      :grid
      (set-initial-shape blinker)
      )
  )