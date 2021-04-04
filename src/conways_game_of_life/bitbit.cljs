(ns conways-game-of-life.bitbit)

(defn uint-8-view
  [size]
  (let [buffer (js/ArrayBuffer. size)]
    (js/Uint8Array. buffer)))

(defn write-value
  "Mutates `view` by `value` at `index` and returns the view.
  WARNING, it __mutates__ the view."
  [view index value]
  (aset view index value)
  view)

(defn set-bit
  "Sets the bit at `position` in `value` to `bit-value`"
  [value position bit-value]
  (let [mask (bit-shift-left 1 position)]
    (bit-or
      (bit-and value (bit-not mask))
      (bit-shift-left bit-value position))))

(defn get-bit
  [value position]
  (let [b (bit-and value (bit-shift-left 1 position))]
    (if (= b 0) 0 1)))

(defn set-cell-state
  "First of the 8 bit value is the cell-state"
  [uint-8-value cell-state]
  (set-bit uint-8-value 0 cell-state))

(defn get-cell-state
  [cell]
  (get-bit cell 0))

(defn get-cell
  [view i]
  (aget view i))

(defn value->binary
  [v]
  (.toString v 2))

(defn two-d->one-d
  [x y w]
  (+ (* w y) x))

(defn one-d->two-d
  [i w]
  [(mod i w) (Math/floor (/ i w))])

(def alive-mask 1)
(defn alive?
  [cell]
  (= (bit-and cell alive-mask) 1))

(defn world-width
  [view]
  (Math/sqrt (.-length view)))

(def dd [-1 0 1])
(defn get-neighbourhood-coordinates
  [x y]
  (for [dx dd
        dy dd
        :when (not (and (= dx 0) (= dy 0)))]
    [(+ x dx) (+ y dy)]))

(defn dec-neighbour
  [cell]
  (- cell 2))

(defn inc-neighbour
  [cell]
  (+ cell 2))

(defn wrap
  [a size]
  (mod (+ a size) size))

(defn pprint-view
  [view]
  (let [w (into (sorted-map)
                (second
                  (reduce (fn [[r s] i]
                            (if (= (mod i (world-width view)) 0)
                              [(inc r) (assoc s (keyword (str (inc r))) (str " [" (bit-shift-right (aget view i) 1) ", " (get-cell-state (aget view i)) " , " (aget view i) "]"))]
                              [r (assoc s (keyword (str r)) (str (get s (keyword (str r))) " [" (bit-shift-right (aget view i) 1) ", " (get-cell-state (aget view i)) ", " (aget view i) "]"))])
                            ) [0 {}] (range (.-length view)))))]
    (println (reduce (fn [s l] (str s (val l) "\n")) "" w))))

(defn neighbour-operator
  [view neighbours world-width operator-fn]
  (reduce (fn [view neighbour]
            (let [nx (wrap (first neighbour) world-width)
                  ny (wrap (second neighbour) world-width)
                  ni (two-d->one-d nx ny world-width)
                  cell (get-cell view ni)]
              (write-value view ni (operator-fn cell))))
          view neighbours))

(defn dec-neighbours
  [view neighbours world-width]
  (neighbour-operator view
                      neighbours
                      world-width
                      (fn [cell] (dec-neighbour cell))))

(defn inc-neighbours
  [view neighbours world-width]
  (neighbour-operator view
                      neighbours
                      world-width
                      (fn [cell] (inc-neighbour cell))))

(defn alive-neighbours
  [view neighbours]
  (reduce (fn [c n]
            (if (-> (get-cell view (two-d->one-d (first n) (second n) (world-width view)))
                    alive?)
              (inc c)
              c)) 0 neighbours))

(defn kill-cell
  "Set the cell state to 0 and decrement the counter for each neighbour."
  [view cell i]
  (let [w (world-width view)
        [x y] (one-d->two-d i w)
        neighbours (get-neighbourhood-coordinates x y)
        alive-c (alive-neighbours view neighbours)]
    (-> view
        (write-value i (bit-and cell (bit-not 0x01)))
        (write-value i (bit-shift-left alive-c 1))
        (dec-neighbours neighbours w))))

(defn awake-cell
  "Set the cell to 1 and increment the counter for each neighbour."
  [view i]
  (let [w (world-width view)
        [x y] (one-d->two-d i w)
        neighbours (get-neighbourhood-coordinates x y)
        alive-c (alive-neighbours view neighbours)]
    (-> view
        (write-value i (bit-shift-left alive-c 1))
        (write-value i (set-cell-state (get-cell view i) 1))
        (inc-neighbours neighbours w))))

(defn step
  [mutating-view]

  ;(pprint-view mutating-view)

  (let [fixed-view (.slice mutating-view)]                  ;; this is the not modified view that we operate with
    (doseq [i (range 0 (.-length mutating-view))]
      (let [cell (get-cell fixed-view i)]
        ;; off-cell with no neighbours, we just skip  this
        (when (not= cell 0)
          (let [c (bit-shift-right cell 1)]
            (if (alive? cell)
              ;; it's alive, we should kill it if it does not have 2 or 3 neighbours
              (when (and (not= c 2) (not= c 3))
                (kill-cell mutating-view cell i))
              ;; otherwise the cell is off, it should turn on if it has 3 alive neighbours
              (when (= c 3)
                (awake-cell mutating-view i))
              )
            )))
      ))
  ;; return the mutated view
  mutating-view
  )

(defn pattern->view
  "`pattern` list of tuples with x,y coordinates,
  assign these coordinates into the `view` to turn these
  cells alive. Assume the world is square"
  [pattern view]
  (let [w (world-width view)
        view (reduce (fn [view [x y]]
                       (let [i (two-d->one-d x y w)]
                         (->> (set-cell-state view 1)
                              (write-value view i)))) view pattern)
        fixed-view (.slice view)]
    (doseq [i (range (.-length view))]
      (let [[x y] (one-d->two-d i w)
            n (get-neighbourhood-coordinates x y)
            cell (get-cell fixed-view i)]
        (when (= cell 1)
          (inc-neighbours view n w))
        )))
  view)

(defn view->pattern
  "Returns the alive cells as x,y coordinates, dead ones are excluded"
  [view]
  (let [pattern (transient [])
        w (world-width view)]
    (persistent!
      (reduce (fn [pattern i]
                (let [s (get-cell-state (get-cell view i))]
                  (if (= 1 s)
                    (conj! pattern (one-d->two-d i w))
                    pattern))
                ) pattern (range (.-length view))))
    ))

