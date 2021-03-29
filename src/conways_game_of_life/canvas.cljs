(ns conways-game-of-life.canvas)

(defonce ctx-atom (atom nil))
(defonce img-data-atom (atom nil))
(defonce canvas-data-atom (atom nil))

(defn random-id
  []
  (str "_" (.substr (.toString (.random js/Math) 36) 2 9)))

(defn- ctx-invoke
  [ctx fn args]
  (let [res (apply js-invoke ctx fn args)]
    (if res
      res
      ctx)))

(defn- width [] (aget @ctx-atom "canvas" "width"))
(defn- height [] (aget @ctx-atom "canvas" "height"))

(defn get-canvas-id [] (aget @ctx-atom "canvas" "id"))
(defn canvas [] (aget @ctx-atom "canvas"))

(defn mouse-xy
  [js-event]
  (let [
        target (aget js-event "target")
        rect (.getBoundingClientRect target)
        x (- (.-clientX js-event) (.-left rect))
        y (- (.-clientY js-event) (.-top rect))]
    {:x x :y y}))

(defn resize-canvas
  []
  (let [canvas (.-canvas @ctx-atom)
        css-to-real-pixels (or (.-devicePixelRatio js/window) 1)
        d-width (Math/floor (* (.-clientWidth canvas) css-to-real-pixels))
        d-height (Math/floor (* (.-clientHeight canvas) css-to-real-pixels))]
    (when-not (or (= (.-width canvas) d-width)
                  (= (.-height canvas) d-height))
      (aset canvas "style" "height" (str (height) "px"))
      (aset canvas "style" "width" (str (width) "px"))

      (set! (.-height canvas) d-height)
      (set! (.-width canvas) d-width)

      (.scale @ctx-atom css-to-real-pixels css-to-real-pixels)
      )))

(defn- create-dom-canvas!
  [width height id target]
  (let [canvas? (js-invoke js/document "getElementById" id)]
    (when-not canvas?
      (let [canvas (js/document.createElement "canvas")]
        (do
          (.setAttribute canvas "id" id)
          (.setAttribute canvas "height" (str height "px"))
          (.setAttribute canvas "width" (str width "px"))
          (.appendChild target canvas))
        canvas))))


(defn create-canvas
  ([h w] (create-canvas h w "black"))
  ([h w color]
   (let [canvas (create-dom-canvas! w h (random-id) js/document.body)]
     (reset! ctx-atom (.getContext canvas "2d" (clj->js "alpha" false)))

     (aset canvas "style" "background" color)

     ;; TODO is this the only way to not blurr lines...?!?!?
     (.setTransform @ctx-atom 1, 0, 0, 1, 0.5, 0.5)

     ;; TODO might not be the best thing to create this here?
     ;(reset! canvas-data-atom (.getImageData @ctx-atom 0 0 w h))
     )))

(defn- begin-path
  [ctx]
  (.beginPath ctx)
  ctx)

(defn- close-path
  [ctx]
  (.closePath ctx)
  ctx)

(defn stroke
  [& _]
  (.stroke @ctx-atom))

;; color
(defn fill-style
  [color]
  (aset @ctx-atom "fillStyle" color))

(defn stroke-style
  [color]
  (aset @ctx-atom "strokeStyle" color))


(defn- js-fill [ctx] (.fill ctx))
(defn- js-rect [ctx & args] (ctx-invoke ctx "rect" args))
(defn- js-move-to [ctx & args] (ctx-invoke ctx "moveTo" args))
(defn- js-line-to [ctx & args] (ctx-invoke ctx "lineTo" args))
(defn- js-translate [ctx & args] (ctx-invoke ctx "translate" args))
(defn- js-arc [ctx & args] (ctx-invoke ctx "arc" args))
(defn- js-fill-rect [ctx & args] (ctx-invoke ctx "fillRect" args))
(defn- js-stroke [ctx & args] (ctx-invoke ctx "stroke" args))

(defn translate
  [x y]
  (js-translate @ctx-atom x y))

(defn put-img-data
  [img-data]
  (.putImageData @ctx-atom img-data 0 0))

(defn draw-pixel
  [x y r g b a]
  (let [i (* (+ x (* y (width))) 4)
        img-data @img-data-atom]
    (aset img-data "data" (+ i 0) r)
    (aset img-data "data" (+ i 1) g)
    (aset img-data "data" (+ i 2) b)
    (aset img-data "data" (+ i 3) a)))

(defn draw-rect
  [x y w h r g b a]
  (doseq [xx (range x (+ x w))]
    (doseq [yy (range y (+ y h))]
      (draw-pixel xx yy r g b a)))
  ;(put-img-data @img-data-atom)
  )

(defn one-d->two-d
  [i w]
  [(mod i w) (Math/floor (/ i w))])

(def alive-mask 1)
(defn alive?
  [cell]
  (= (bit-and cell alive-mask) 1))

(defn draw-rects
  [view]
  (doseq [i (range 0 (.-length view))]
    (let [cell (aget view i)
          [x y] (one-d->two-d i 8)
          alive-color (if (alive? cell) 255 0)]
      (draw-rect (+ (* x 50) 2)
                 (+ (* y 50) 2)
                 49 49
                 alive-color alive-color alive-color alive-color)
      )
    )
  (put-img-data @img-data-atom)
  )


(defn white-img
  []
  (let [canvas-data @canvas-data-atom]
    (doseq [i (range (.-length (.-data canvas-data)))]
      (aset canvas-data "data" i 255))))

(defn empty-img!
  []
  (let [ctx @ctx-atom
        img-data (.createImageData ctx (width) (height))]
    (reset! img-data-atom img-data)
    (put-img-data img-data)))


(defn clear-canvas
  []
  (.clearRect @ctx-atom 0 0 (width) (height)))

(defn fill
  []
  (js-fill @ctx-atom))

;; shapes
(defn rect
  [x y w h & opt]
  (doto @ctx-atom
    begin-path
    (js-rect x y w h))
  (when (get-in opt [0 :fill?])
    (js-fill @ctx-atom))

  ;; default stroke if not batching
  (when-not (get-in opt [0 :batch?])
    (js-stroke @ctx-atom))
  )

(defn line
  [x1 y1 x2 y2]
  (doto @ctx-atom
    begin-path
    ;(js-translate 0.5 0.5)
    (js-move-to x1 y1)
    (js-line-to x2 y2)
    js-stroke))

(defn arc
  [x y r start-angle stop-angle]
  (doto @ctx-atom
    begin-path
    ;(js-translate 0.5 0.5)
    (js-arc x y r start-angle stop-angle)
    stroke))

(defn circle
  [x y r]
  (arc x y r 0 (* 2 Math/PI)))


(defn fill-rect
  [x y h w color]
  (fill-style color)
  (js-fill-rect @ctx-atom x y w h))


(defn background
  [color]
  (fill-rect 0 0 (width) (height) color))

(comment

  )
