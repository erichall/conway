(ns conways-game-of-life.core
  (:require
    ;[conways-game-of-life.canvas-core :as c]
    [conways-game-of-life.bitbit :as b]
    [conways-game-of-life.canvas :as c]
    [conways-game-of-life.shapes :refer [shapes]]
    [conways-game-of-life.view :refer [game-of-life cell-color]]
    [conways-game-of-life.gol :refer [inc-grid]]
    [conways-game-of-life.hashlife :as hl]
    [conways-game-of-life.util :refer [random-int
                                       get-state
                                       set-initial-shape
                                       running?
                                       next-seed]]
    [cljs.core.async :as async]
    [reagent.core :as r]
    [reagent.dom :as rd]))

(enable-console-print!)

(defonce render-atom (atom nil))
(when (nil? @render-atom)
  (reset! render-atom {:last-timestamp 0
                       :fps            0}))

(defonce app-state-atom (atom nil))
(def grid-size 160)                                         ;; px
(def initial-state
  {:states [{:cell-size   2                                 ;; px
             :grid-size   grid-size
             ;:grid        (:heavy shapes)
             ;:grid        (:glider shapes)
             :grid        (:131c31climber shapes)
             ;:grid        (:144p24 shapes)
             :world-width 128
             :seed        1
             :running?    false
             :toroidal?   false
             :fps         0
             :view        nil
             }]})



(defn mutate!
  [app-state-atom pure-fn & mutate-args]
  (swap! app-state-atom (fn [app-state]
                          (let [current-state (last (:states app-state))
                                next-state (apply pure-fn (conj mutate-args current-state))]
                            (if (some? next-state)
                              ; (update app-state :states (fn [states] (conj states next-state)))
                              (update app-state :states (fn [states] [next-state]))

                              app-state)))
         (get-state app-state-atom)))

(defn tick
  [{:keys [seed] :as state}]
  (let [state (->> (inc-grid state)
                   (assoc state :grid))]
    (assoc state :seed (next-seed seed 1))))

(defn simulate
  ([trigger-event timestamp]
   (when (running? app-state-atom)
     ;(swap! render-atom (fn [state]
     ;                     (let [seconds-passed (/ (- timestamp (:last-timestamp @render-atom)) 1000)]
     ;                       (-> (assoc state :last-timestamp timestamp)
     ;                           (assoc :fps (Math/round (/ 1 seconds-passed)))))))
     ;
     (trigger-event :tick {:fps (:fps @render-atom)})
     (js/requestAnimationFrame (fn raf-fn [timestamp] (simulate trigger-event timestamp)))))
  ([trigger-event] (simulate trigger-event 0)))

(defn handle-event!
  ([name] (handle-event! name nil))
  ([name data]
   (let [{:keys [world-width cell-size view]} (get-state app-state-atom)]
     (condp = name
       :tick (let [v (-> (b/step view)
                         (c/draw-rects world-width cell-size))]
               (mutate! app-state-atom (fn view-swap [state] (assoc state :view v))))
       :start (do (mutate! app-state-atom (fn [state] (assoc state :running? true)))
                  (simulate handle-event!))
       :stop (mutate! app-state-atom (fn [state] (assoc state :running? false)))
       :toggle-cell (mutate! app-state-atom (fn [{:keys [grid] :as state}]
                                              (let [cell (:cell data)]
                                                (update-in state [:grid] (if (grid cell) disj conj) cell)
                                                )))
       :click (mutate! app-state-atom (fn [{:keys [grid cell-size] :as state}]
                                        (let [
                                              ;context @c/canvas-atom
                                              ;cell (c/xy->cell (merge (c/relative-cord (:canvas context) data)
                                              ;                        {:cell-size (:cell-size (get-state app-state-atom))}))
                                              ;state (update-in state [:grid] (if (grid cell) disj conj) cell)
                                              ]
                                          ;(c/draw-cell! {:ctx        (:ctx context)
                                          ;               :cell       (mapv #(* cell-size %) cell)
                                          ;               :size       cell-size
                                          ;               :fill-color (cell-color state cell)})
                                          ;state
                                          )))

       nil))))

(defn canvas-handler!
  [context]
  (fn [name data]
    (condp = name
      :click
      nil)))

(defn render
  [{:keys [world-width cell-size] :as state}]

  (c/create-canvas 1024 1024)
  (c/resize-canvas)
  ;(c/empty-img!)

  ;(println js/window.he)

  (let [view (->> (b/uint-8-view (* world-width world-width))
                  (b/pattern->view (:grid (get-state app-state-atom))))]

    (mutate! app-state-atom (fn [state] (assoc state :view view)))

    (c/stroke-style "#fff")

    (-> view
        ;    b/step
        ;    b/step
        ;    b/step
        ;    b/step
        (c/draw-rects world-width cell-size)
        )
    ;(println (b/step view))
    )


  (rd/render [game-of-life {:state         state
                            :trigger-event handle-event!}]
             (. js/document (getElementById "app"))))

(when (nil? @app-state-atom)
  (reset! app-state-atom initial-state)


  (add-watch app-state-atom
             :game-loop
             (fn [_ _ _ _]
               ;(render (get-state app-state-atom))
               )))

(defn init! [] (render (get-state app-state-atom)))
(defn reload! [] (render (get-state app-state-atom)))


(comment
  (reset! app-state-atom initial-state)
  ;; 1976.845000 msecs
  (time (handle-event! :tick)))
