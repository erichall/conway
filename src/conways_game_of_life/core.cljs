(ns conways-game-of-life.core
  (:require
    [conways-game-of-life.canvas-core :as c]
    [cljs.core.async :as async]
    [reagent.core :as r]
    [reagent.dom :as rd]))

(enable-console-print!)

(def blinker #{[1 0] [1 1] [1 2]})
(def shapes {
             :blinker       #{[1 0] [1 1] [1 2]}
             :glider        #{[0 0] [2 0] [1 1] [1 2] [2 1]}
             :144p24        #{[8 11]
                              [17 25]
                              [12 12]
                              [3 32]
                              [13 3]
                              [7 23]
                              [16 34]
                              [10 34]
                              [12 24]
                              [11 2]
                              [7 11]
                              [21 10]
                              [18 32]
                              [16 32]
                              [3 22]
                              [21 11]
                              [14 31]
                              [4 12]
                              [6 26]
                              [1 22]
                              [22 12]
                              [17 2]
                              [0 22]
                              [16 5]
                              [4 32]
                              [8 3]
                              [6 31]
                              [24 23]
                              [13 12]
                              [10 9]
                              [5 4]
                              [15 3]
                              [18 2]
                              [6 3]
                              [4 25]
                              [17 0]
                              [19 22]
                              [12 8]
                              [1 12]
                              [17 23]
                              [7 3]
                              [12 2]
                              [18 27]
                              [4 2]
                              [13 24]
                              [3 12]
                              [13 2]
                              [18 10]
                              [1 13]
                              [12 1]
                              [16 2]
                              [18 11]
                              [15 31]
                              [9 3]
                              [23 12]
                              [20 11]
                              [19 7]
                              [5 29]
                              [15 33]
                              [9 30]
                              [11 34]
                              [23 23]
                              [6 5]
                              [12 30]
                              [5 30]
                              [7 24]
                              [5 2]
                              [2 13]
                              [23 11]
                              [10 2]
                              [1 11]
                              [3 33]
                              [11 12]
                              [11 30]
                              [6 33]
                              [8 2]
                              [5 26]
                              [16 0]
                              [6 29]
                              [10 11]
                              [18 1]
                              [15 1]
                              [7 22]
                              [11 3]
                              [21 24]
                              [15 5]
                              [18 8]
                              [8 33]
                              [20 26]
                              [2 12]
                              [6 1]
                              [5 8]
                              [14 11]
                              [6 11]
                              [10 1]
                              [5 5]
                              [11 1]
                              [15 29]
                              [16 30]
                              [8 30]
                              [5 9]
                              [21 23]
                              [19 27]
                              [22 11]
                              [17 10]
                              [9 2]
                              [7 31]
                              [5 32]
                              [5 21]
                              [11 7]
                              [9 1]
                              [6 9]
                              [23 10]
                              [5 34]
                              [17 32]
                              [3 11]
                              [3 1]
                              [12 3]
                              [13 16]
                              [16 29]
                              [17 24]
                              [19 8]
                              [6 12]
                              [13 30]
                              [14 3]
                              [16 10]
                              [5 0]
                              [16 4]
                              [12 16]
                              [13 33]
                              [10 30]
                              [4 34]
                              [12 25]
                              [3 23]
                              [10 3]
                              [2 22]
                              [22 23]
                              [11 24]
                              [3 2]
                              [18 33]
                              [14 9]
                              [17 34]
                              [11 16]
                              [4 0]}
             :131c31climber #{[20 75]
                              [23 63]
                              [7 23]
                              [26 73]
                              [28 86]
                              [21 75]
                              [24 61]
                              [0 0]
                              [36 106]
                              [8 21]
                              [20 73]
                              [23 73]
                              [1 1]
                              [20 74]
                              [22 71]
                              [23 72]
                              [25 62]
                              [20 72]
                              [14 43]
                              [36 105]
                              [15 43]
                              [22 74]
                              [22 75]
                              [23 68]
                              [35 107]
                              [29 84]
                              [6 22]
                              [22 72]
                              [20 71]
                              [25 65]
                              [21 69]
                              [8 22]
                              [24 62]
                              [27 85]
                              [13 42]
                              [26 63]
                              [24 73]
                              [21 76]
                              [8 23]
                              [22 68]
                              [34 105]
                              [23 62]
                              [14 44]
                              [15 42]
                              [29 86]
                              [0 2]
                              [19 73]
                              [2 1]
                              [27 64]
                              [26 72]
                              [21 73]
                              [1 2]
                              [25 66]
                              [26 65]
                              [25 71]
                              [29 85]
                              [24 64]
                              [24 72]
                              [35 106]
                              [25 63]}
             :heavy         (set (for [x (range 0 200)
                                       y (range 0 200)]
                                   [x y]))
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

(defn cell-color
  [{:keys [grid]} [x y]]
  (if (grid [x y]) "black" "white"))

(defonce app-state-atom (atom nil))
(def grid-size 500)
(def initial-state
  {:states [{:cell-size     5                               ;; px
             :grid-size     grid-size
             :grid          (:heavy shapes)
             :canvas-id     "conway-canvas"
             :seed          1
             :initial-seed? false
             :running?      false
             :toroidal?     true
             :fps           0
             }]})

(defn get-state
  [app-state-atom]
  (-> @app-state-atom
      :states
      last))

(defn px [v] (str v "px"))

(defn wrap
  [a size]
  (mod (+ a size) size))

(def dx [-1 0 1])
(def dy [-1 0 1])

(defn neighbours
  "Find the 8 members of a given x,y coordinates.
   The grid is considered to be a toroidal so edges wraps around.

   XXX
   X.X
   XXX

   "
  [size toroidal? [x y]]
  (for [dx dx
        dy dy
        :when (not (= [0 0] [dx dy]))]
    (if toroidal?
      [(wrap (+ dx x) size) (wrap (+ dy y) size)]
      [(+ dx x) (+ dy y)])))

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
                         :background (cell-color state [x y])
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
    [:button {:on-click (fn [] (trigger-event :stop))} "stop"]
    [:span {:style {:margin-left "20px"}} (:fps state) " fps"]
    ]
   ;[world {:state         state
   ;        :trigger-event trigger-event}]
   ])

(defn inc-grid
  [{:keys [grid grid-size toroidal?] :as state}]
  (let [size (/ grid-size 2)
        neighbours (fn [cell] (neighbours size toroidal? cell))]
    (-> (for [[cell n-neighbours] (->> grid
                                       (mapcat neighbours)
                                       frequencies)
              :when (or (= n-neighbours 3)                  ;; bring back to life
                        (and (= n-neighbours 2) (grid cell)))] ;; it's alive with 2 bros
          cell)
        set)))

(defn fast-inc-grid
  [{:keys [grid grid-size toroidal?] :as state}]
  (let [size (/ grid-size 2)]
    (loop [grid grid
           n-checks #{}]
      ;(if (empty? grid))
      ;(let [area (neighbours size toroidal?)])

      ))

  )

(defn tick
  [{:keys [seed] :as state}]
  (let [state (->> (inc-grid state)
                   (assoc state :grid))]
    (assoc state :seed (next-seed seed 1))))

(defn running?
  [app-state-atom]
  (:running? (get-state app-state-atom)))

(defonce render-atom (atom nil))
(when (nil? @render-atom)
  (reset! render-atom {:last-timestamp 0
                       :fps            0
                       }))

(defn simulate
  ([trigger-event timestamp]
   (when (running? app-state-atom)

     (swap! render-atom (fn [state]
                          (let [seconds-passed (/ (- timestamp (:last-timestamp @render-atom)) 1000)]
                            (-> (assoc state :last-timestamp timestamp)
                                (assoc :fps (Math/round (/ 1 seconds-passed)))))))

     (trigger-event :tick {:fps (:fps @render-atom)})
     (js/requestAnimationFrame (fn [timestamp] (simulate trigger-event timestamp)))
     ))
  ([trigger-event] (simulate trigger-event 0)))

(defn handle-event!
  ([name data]
   (condp = name
     :tick (mutate! app-state-atom (fn [state]
                                     (let [prev-grid (:grid state)
                                           {:keys [grid-size cell-size grid] :as next-state} (tick state)
                                           context (c/get-canvas-context (:canvas-id next-state))]
                                       (c/draw-cells! {:ctx           (:ctx context)
                                                       :cells         (clojure.set/union grid prev-grid)
                                                       :size          cell-size
                                                       :cell-color-fn (fn [cell] (cell-color next-state cell))})
                                       (if (:fps data)
                                         (assoc next-state :fps (:fps data))
                                         next-state)
                                       )))
     :seed (mutate! app-state-atom seed-grid)
     :start (do (mutate! app-state-atom (fn [state] (assoc state :running? true)))
                (simulate handle-event!))
     :toggle-cell (mutate! app-state-atom (fn [{:keys [grid] :as state}]
                                            (let [cell (:cell data)]
                                              (update-in state [:grid] (if (grid cell) disj conj) cell)
                                              )))
     :stop (mutate! app-state-atom (fn [state] (assoc state :running? false)))
     nil))
  ([name] (handle-event! name nil)))

(defn canvas-handler!
  [context]
  (fn [name data]
    (condp = name
      :click (mutate! app-state-atom (fn [{:keys [grid cell-size] :as state}]
                                       (let [cell (c/xy->cell (merge (c/relative-cord (:canvas context) data)
                                                                     {:cell-size (:cell-size (get-state app-state-atom))}))
                                             state (update-in state [:grid] (if (grid cell) disj conj) cell)]
                                         (c/draw-cell! {:ctx        (:ctx context)
                                                        :cell       (mapv #(* cell-size %) cell)
                                                        :size       cell-size
                                                        :fill-color (cell-color state cell)})
                                         state)))
      nil)))

(defn render
  [state]
  (rd/render [game-of-life {:state         state
                            :trigger-event handle-event!}]
             (. js/document (getElementById "app"))))

(when (nil? @app-state-atom)
  (reset! app-state-atom initial-state)

  (when (:initial-seed? (get-state app-state-atom))
    (mutate! app-state-atom seed-grid))

  (let [{:keys [canvas] :as context} (c/get-canvas-context "conway-canvas")
        handler (canvas-handler! context)
        {:keys [grid-size cell-size]} (get-state app-state-atom)]
    (c/draw-grid! {:width         (/ grid-size 2)
                   :height        (/ grid-size 2)
                   :context       context
                   :cell-size     cell-size
                   :cell-color-fn (fn [cell] (cell-color (get-state app-state-atom) cell))})
    (c/canvas-handler handler [(c/add-event! canvas "click")]))

  (add-watch app-state-atom
             :game-loop
             (fn [_ _ _ _]
               (render (get-state app-state-atom))
               )))

(defn init! []
  (render (get-state app-state-atom))



  ;(create-dom-canvas! 200 200 "game-of-life-canvas" (.getElementById js/document "app"))
  ;(let [{:keys [ctx] :as c} (get-canvas-context-from-id "game-of-life-canvas")]
  ;  (draw-grid! 30 30 c 30)
  ;  )
  )

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