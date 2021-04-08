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
(def memo-width (memoize width))
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
(defn scale
  [x-scale y-scale]
  (.scale @ctx-atom x-scale y-scale))

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

      (scale css-to-real-pixels css-to-real-pixels))))

(defn set-canvas-wh!
  [w h]
  (let [canvas (.-canvas @ctx-atom)]
    (.setAttribute canvas "height" h)
    (.setAttribute canvas "width" w)))

(defn- create-dom-canvas!
  [width height id target]
  (let [canvas? (js-invoke js/document "getElementById" id)]
    (when-not canvas?
      (let [canvas (js/document.createElement "canvas")]
        (do
          (.setAttribute canvas "id" id)
          (.setAttribute canvas "height" height)
          (.setAttribute canvas "width" width)
          (.appendChild target canvas))
        canvas))))


(defn create-canvas
  ([h w] (create-canvas h w "black"))
  ([h w color]
   (let [canvas (create-dom-canvas! w h (random-id) js/document.body)]
     (reset! ctx-atom (.getContext canvas "2d" (clj->js "alpha" false)))

     (aset canvas "style" "background" color)
     ;; center it
     (aset canvas "style" "position" "absolute")
     (aset canvas "style" "top" "0")
     (aset canvas "style" "bottom" "0")
     (aset canvas "style" "left" "0")
     (aset canvas "style" "right" "0")
     (aset canvas "style" "margin" "auto")

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
  (.putImageData @ctx-atom
                 img-data
                 0                                          ;; x
                 0                                          ;; y
                 ;; dirty-x
                 ;; dirty-y
                 ;; dirty-width
                 ;; dirty-height
                 ))

(defn draw-image
  [img x y]
  (.drawImage @ctx-atom img x y))

(defn pixel-offset-index [x y w] (* (+ x (* y w)) 4))
;(def memo-pixel-offset-index (memoize pixel-offset-index))

(defn draw-pixel
  [x y r g b a w img-data]
  (let [i (pixel-offset-index x y w)]
    (aset img-data "data" (+ i 0) r)
    (aset img-data "data" (+ i 1) g)
    (aset img-data "data" (+ i 2) b)
    (aset img-data "data" (+ i 3) a)))

(defn get-range
  [s e]
  (range s (+ s e)))
;(def memo-get-range (memoize get-range))

(defn draw-rect
  [x y w h r g b a]
  (let [canvas-width (width)
        img-data @img-data-atom]
    (doseq [xx (range x (+ x w))]
      (doseq [yy (range y (+ y h))]
        (draw-pixel xx yy r g b a canvas-width
                    img-data
                    )))))


(defn one-d->two-d
  [i w]
  [(mod i w) (Math/floor (/ i w))])

(def alive-mask 1)
(defn alive?
  [cell]
  (= (bit-and cell alive-mask) 1))

(defn rect
  [x y w h & opt]
  (doto @ctx-atom
    begin-path
    (js-rect x y w h)
    js-fill
    )

  (js-stroke @ctx-atom)
  )

(defn clear-canvas
  []
  (.clearRect @ctx-atom 0 0 (width) (height)))

(defn draw-rects
  [view width size]

  (clear-canvas)


  (areduce view i _ 0
           (let [cell (aget view i)
                 [x y] (one-d->two-d i width)]
             (when (alive? cell)
               (rect (* x (+ size 1)) (* y (+ size 1)) size size {:fill "#fff"}))))
  view)

(defn white-img
  []
  (let [canvas-data @canvas-data-atom]
    (doseq [i (range (.-length (.-data canvas-data)))]
      (aset canvas-data "data" i 255))))

(defn create-img-data
  ([] (create-img-data nil))
  ([{:keys [width height] :or {width (width) height (height)}}]
   (.createImageData @ctx-atom width height)))

(defn empty-img!
  []
  (let [img-data (create-img-data)]
    (reset! img-data-atom img-data)
    (put-img-data img-data)))



(defn fill
  []
  (js-fill @ctx-atom))

;; shapes


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
