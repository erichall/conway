(ns conways-game-of-life.canvas-core
  (:require [cljs.core.async :as a]))

(defonce canvas-atom (atom nil))
(def initial-state {:width  500
                    :height 500})

(when (nil? @canvas-atom)
  (reset! canvas-atom initial-state))

(defn add-event!
  [canvas event-name]
  (let [chan (a/chan)]
    (.addEventListener canvas event-name (fn [evt] (a/put! chan {:name (keyword event-name) :data evt})) false)
    chan))

(defn relative-cord
  [canvas evt]
  (let [left (+ (.-offsetLeft canvas)
                (.-clientLeft canvas))
        top (+ (.-offsetTop canvas)
               (.-clientTop canvas))]
    {:x (- (.-pageX evt) left)
     :y (- (.-pageY evt) top)}))

(defn canvas-handler
  [handler chans]
  (let [c (a/merge chans)]
    (a/go-loop
      []
      (let [{:keys [name data]} (a/<! c)]
        (handler name data)
        (recur)))))

(defn get-canvas-context
  [id]
  (let [canvas (.getElementById js/document id)]
    {:canvas canvas
     :width  (.-width canvas)
     :height (.-height canvas)
     :ctx    (.getContext canvas "2d" (clj->js "alpha" false))}))

(defn draw-cell!
  [{:keys [ctx size cell fill-color batch?]}]
  (let [[x y] cell]
    ;; batch??
    (when-not batch?
      (.beginPath ctx))

    (.rect ctx x y size size)
    (set! (.-fillStyle ctx) fill-color)

    ;; batch??
    (when-not batch?
      (.fill ctx))

    ;(set! (.-lineWidth ctx) 0.5)
    ;(set! (.-strokeStyle ctx) "black")
    ;(.stroke ctx)
    ))

(defn draw-cells!
  [{:keys [size cell-color-fn ctx] :as args}]

  (.beginPath ctx)
  (doall
    (for [cell (:cells args)
          :let [canvas-cell (mapv #(* size %) cell)]]
      (draw-cell! (-> (assoc args :cell canvas-cell)
                      (assoc :batch true)
                      (assoc :fill-color (cell-color-fn cell))))))

  (.fill ctx)
  )

;(defn set-canvas-height! [canvas h] (set! (.-height canvas) h))
;(defn set-canvas-width! [canvas w] (set! (.-width canvas) w))

(defn draw-grid!
  [{:keys [width height context cell-size cell-color-fn]}]
  (set! (.-height (:canvas context)) (+ 1 (* height cell-size)))
  (set! (.-width (:canvas context)) (+ 1 (* width cell-size)))

  (doall
    (for [y (range height)
          x (range width)]
      (draw-cell! {:ctx        (:ctx context)
                   :cell       [(* cell-size x) (* cell-size y)]
                   :size       cell-size
                   :fill-color (cell-color-fn [x y])}))))


(defn xy->cell
  [{:keys [cell-size x y]}]
  [(Math/floor (/ x cell-size)) (Math/floor (/ y cell-size))])

(defn create-dom-canvas!
  [width height id target]
  (let [canvas? (js-invoke js/document "getElementById" id)]
    (when-not canvas?
      (let [canvas (js/document.createElement "canvas")]
        (do
          (.setAttribute canvas "id" id)
          (.setAttribute canvas "height" height)
          (.setAttribute canvas "width" width)
          (.appendChild target canvas))))))
