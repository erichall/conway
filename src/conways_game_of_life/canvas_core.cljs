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

(def canvas (.getElementById js/document "conway-canvas"))
(def initial-state
  {:canvas canvas
   :width  (.-width canvas)
   :height (.-height canvas)
   :ctx    (.getContext canvas "2d" (clj->js "alpha" false))})
(defonce canvas-atom (atom nil))

(when (nil? @canvas-atom)
  (reset! canvas-atom initial-state))


(defn draw-cell!
  [{:keys [ctx size cell fill-color batch?]}]
  (let [[x y] cell]

    ;; batch??
    (when-not batch?
      (.beginPath ctx))

    (set! (.-fillStyle ctx) fill-color)
    (.fillRect ctx (+ 0.5 x) (+ 0.5 y) (- size 1) (- size 1))

    ;; batch??
    (when-not batch?
      (.fill ctx))

    ;(set! (.-lineWidth ctx) 0.5)
    ;(set! (.-strokeStyle ctx) "gray")
    ))

(defn draw-cells!
  [{:keys [size cell-color-fn context] :as args}]
  (let [ctx (:ctx context)]

    ;(.beginPath ctx)
    (js/console.log (:image-data context))

    (doall
      (for [cell (:cells args)
            :let [canvas-cell (mapv #(* size %) cell)]]
        (draw-cell! (-> (assoc args :cell canvas-cell)
                        (assoc :ctx ctx)
                        (assoc :batch true)
                        (assoc :fill-color (cell-color-fn cell))))))

    ;(.stroke ctx)
    (.fill ctx))
  )

;(defn set-canvas-height! [canvas h] (set! (.-height canvas) h))
;(defn set-canvas-width! [canvas w] (set! (.-width canvas) w))

(defn draw-grid-lines!
  [{:keys [ctx width height cell-size]}]

  (set! (.-lineWidth ctx) 1)
  (set! (.-strokeStyle ctx) "gray")

  (doall
    (for [x (range 0.5 width cell-size)]
      (do
        (.moveTo ctx x 0)
        (.lineTo ctx x height)
        ;(.stroke ctx)
        )))

  (doall
    (for [y (range 0.5 height cell-size)]
      (do
        (.moveTo ctx 0 y)
        (.lineTo ctx width y)
        ;(.stroke ctx)
        )
      )
    )

  (.stroke ctx)
  )

(defn draw-grid!
  [{:keys [width height context cell-size cell-color-fn]}]

  (let [height (+ 1 height)
        width (+ 1 width)
        canvas (:canvas context)
        _ (println context)
        ctx (:ctx context)]

    (set! (.-height canvas) height)
    (set! (.-width canvas) width)

    (swap! canvas-atom (fn [state] (-> (assoc state :width width)
                                       (assoc :height height))))

    (set! (.-border (.-style canvas)) "dotted 1px blue")

    ;(.translate (:ctx context) 0.5 0.5)

    ;;"Elapsed time: 1272.370000 msecs"
    (.beginPath ctx)

    (time
      (doall
        (for [y (range height)
              x (range width)]

          (draw-cell! {:ctx        ctx
                       :cell       [(* cell-size x) (* cell-size y)]
                       :batch      true
                       :size       cell-size
                       :fill-color (cell-color-fn [x y])}))))

    (draw-grid-lines! {:ctx       ctx
                       :width     width
                       :height    height
                       :cell-size cell-size})

    (.fill ctx)
    )

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

