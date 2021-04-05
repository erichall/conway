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

(defn canvas-worker
  [canvas]
  (let [worker (js/Worker. "worker.js")
        chan (async/chan)
        offscreen-canvas (.transferControlToOffscreen canvas)]
    (.. worker (addEventListener "message" (fn [e]
                                             (js/console.log "Master worker got -- " e)
                                             (async/put! chan e)
                                             )))
    ;(.. worker (postMessage offscreen-canvas ) (array offscreen-canvas))
    (js-invoke worker "postMessage" (js-obj "canvas" offscreen-canvas) (array offscreen-canvas))

    chan))


(defonce render-atom (atom nil))
(when (nil? @render-atom)
  (reset! render-atom {:last-timestamp 0
                       :fps            0}))

(defonce app-state-atom (atom nil))
(def grid-size 160)                                         ;; px
(def initial-state
  {:states [{:cell-size     10                              ;; px
             :grid-size     grid-size
             ;:grid          (:heavy shapes)
             :grid          (:heavy shapes)
             :canvas-id     "conway-canvas"
             :seed          1
             :initial-seed? false
             :running?      false
             :toroidal?     false
             :fps           0
             :view          nil
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
     (swap! render-atom (fn [state]
                          (let [seconds-passed (/ (- timestamp (:last-timestamp @render-atom)) 1000)]
                            (-> (assoc state :last-timestamp timestamp)
                                (assoc :fps (Math/round (/ 1 seconds-passed)))))))

     (trigger-event :tick {:fps (:fps @render-atom)})
     (js/requestAnimationFrame (fn [timestamp] (simulate trigger-event timestamp)))))
  ([trigger-event] (simulate trigger-event 0)))

(defn handle-event!
  ([name] (handle-event! name nil))
  ([name data]
   (condp = name
     :tick (-> (b/step (:view @app-state-atom))
               c/draw-rects)
     :seed (mutate! app-state-atom seed-grid)
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
     :initialize-canvas (let [
                              ;{:keys [canvas] :as context} @c/canvas-atom
                              ;{:keys [grid-size cell-size]} (get-state app-state-atom)
                              ]
                          ;(c/draw-grid! {:width         (/ grid-size 2)
                          ;               :height        (/ grid-size 2)
                          ;               :context       context
                          ;               :cell-size     cell-size
                          ;               :cell-color-fn (fn [cell] (cell-color (get-state app-state-atom) cell))})
                          ;(c/canvas-handler handle-event! [(c/add-event! canvas "click")])
                          )
     :hashlife-step (do
                      (println (:grid (get-state app-state-atom)))
                      (println (hl/step {:depth       3
                                         :world-width 8
                                         :center      4
                                         :cells       (:grid (get-state app-state-atom))
                                         })))
     nil)))

(defn canvas-handler!
  [context]
  (fn [name data]
    (condp = name
      :click
      nil)))

(defn render
  [state]

  (c/create-canvas 4096 4096)
  (c/resize-canvas)
  (c/empty-img!)

  (let [view (->> (b/uint-8-view (* 32 32))
                  (b/pattern->view (:grid (get-state app-state-atom))))]

    (swap! app-state-atom assoc :view view)

    (-> view
        ;    b/step
        ;    b/step
        ;    b/step
        ;    b/step
        c/draw-rects
        )
    ;(println (b/step view))
    )


  (rd/render [game-of-life {:state         state
                            :trigger-event handle-event!}]
             (. js/document (getElementById "app"))))

(when (nil? @app-state-atom)
  (reset! app-state-atom initial-state)

  (when (:initial-seed? (get-state app-state-atom))
    (mutate! app-state-atom seed-grid))

  (handle-event! :initialize-canvas)

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
