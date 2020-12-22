(ns conways-game-of-life.canvas-core
  (:require [cljs.core.async :as a]))

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

    ;(println x y)
    (set! (.-fillStyle ctx) fill-color)
    ;(println x y)
    (.fillRect ctx x y size size)

    ;; batch??
    (when-not batch?
      (.fill ctx))

    ;(set! (.-lineWidth ctx) 0.5)
    ;(set! (.-strokeStyle ctx) "gray")
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

  (.stroke ctx)
  (.fill ctx)
  )

;(defn set-canvas-height! [canvas h] (set! (.-height canvas) h))
;(defn set-canvas-width! [canvas w] (set! (.-width canvas) w))

(defn draw-grid-lines!
  [{:keys [ctx width height cell-size]}]

  (set! (.-lineWidth ctx) 0.5)
  (set! (.-strokeStyle ctx) "gray")

  (doall
    (for [x (range (Math/ceil (/ width cell-size)))]
      (do
        (.beginPath ctx)
        (.moveTo ctx (* x cell-size) 0)
        (.lineTo ctx (* x cell-size) height)
        (.stroke ctx))))

  (doall
    (for [y (range (Math/ceil (/ height cell-size)))]
      (do
        (.beginPath ctx)
        (.moveTo ctx 0 (* y cell-size))
        (.lineTo ctx width (* y cell-size))
        (.stroke ctx)
        )
      )
    )

  )

(defn draw-grid!
  [{:keys [width height context cell-size cell-color-fn]}]

  (let [height (+ 0 height)
        width (+ 0 width)]


    (set! (.-height (:canvas context)) height)
    (set! (.-width (:canvas context)) width)

    (.translate (:ctx context) 0.5 0.5)

    (doall
      (for [y (range height)
            x (range width)]

        (draw-cell! {:ctx        (:ctx context)
                     :cell       [(* cell-size x) (* cell-size y)]
                     :size       cell-size
                     :fill-color (cell-color-fn [x y])})))

    (draw-grid-lines! {:ctx       (:ctx context)
                       :width     width
                       :height    height
                       :cell-size cell-size}))
  )


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
