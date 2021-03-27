(ns conways-game-of-life.view)

(defn px [v] (str v "px"))
(defn cell-color
  [{:keys [grid]} [x y]]
  (if (grid [x y]) "black" "white"))

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
    [:button {:on-click (fn [] (trigger-event :hashlife-step))} "Hashlife step"]

    [:span {:style {:margin-left "20px"}} (:fps state) " fps"]]])


