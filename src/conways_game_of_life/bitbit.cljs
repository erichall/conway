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
  (/ (.-length view) 8))                                    ;; TODO for now..

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

;(println "INC 0 -> 2" (inc-neighbour 0) (bit-shift-right (inc-neighbour 0) 1))
;(println "INC 1 -> 4" (inc-neighbour 2) (bit-shift-right (inc-neighbour 2) 1))
;(println "INC 2 -> 6" (inc-neighbour 4) (bit-shift-right (inc-neighbour 4) 1))
;(println "INC 3 -> 8" (inc-neighbour 6) (bit-shift-right (inc-neighbour 6) 1))
;(println "INC 4 -> 10" (inc-neighbour 8) (bit-shift-right (inc-neighbour 8) 1))
;(println "INC 5 -> 12" (inc-neighbour 10) (bit-shift-right (inc-neighbour 10) 1))
;(println "INC 6 -> 14" (inc-neighbour 12) (bit-shift-right (inc-neighbour 12) 1))
;(println "INC 7 -> 16" (inc-neighbour 14) (bit-shift-right (inc-neighbour 14) 1))
;; 0 -> 00000 inc-n -> 00010 2
;; 1 -> 00010 inc-n -> 00100 4
;; 2 -> 00100 inc-n -> 00110 6
;; 3 -> 00110 inc-n -> 01000 8
;; 4 -> 01000 inc-n -> 01010 10
;; 5 -> 01010 inc-n -> 01100 12
;; 6 -> 01100 inc-n -> 01110 14
;; 7 -> 01110 inc-n -> 10000 16
;; 8 -> 10000 inc-n -> should-not-happen
(defn wrap
  [a size]
  (mod (+ a size) size))

(defn dec-neighbours
  [mutating-view fixed-view neighbours world-width]
  (reduce (fn [mutating-view neighbour]
            (let [nx (wrap (first neighbour) world-width)
                  ny (wrap (second neighbour) world-width)
                  ni (two-d->one-d nx ny world-width)
                  cell (get-cell fixed-view ni)]
              (write-value mutating-view ni (dec-neighbour cell))))
          mutating-view neighbours))


(defn inc-neighbours
  [mutating-view fixed-view neighbours world-width]
  (reduce (fn [mutating-view neighbour]
            (let [nx (wrap (first neighbour) world-width)
                  ny (wrap (second neighbour) world-width)
                  ni (two-d->one-d nx ny world-width)]
              (write-value mutating-view ni (inc-neighbour (get-cell fixed-view ni)))))
          mutating-view neighbours))

(defn kill-cell
  "Set the cell state to 0 and decrement the counter for each neighbour."
  [mutating-view fixed-view i]
  (let [w (world-width mutating-view)
        [x y] (one-d->two-d i w)
        neighbours (get-neighbourhood-coordinates x y)
        cell (get-cell fixed-view i)]
    (-> mutating-view
        (write-value i (bit-and cell (bit-not 0x01)))
        (dec-neighbours fixed-view neighbours w))))

(defn awake-cell
  "Set the cell to 1 and increment the counter for each neighbour."
  [mutating-view fixed-view i]
  (let [w (world-width mutating-view)
        [x y] (one-d->two-d i w)
        neighbours (get-neighbourhood-coordinates x y)
        cell (get-cell fixed-view i)]
    (-> mutating-view
        (write-value i (bit-or cell 0x01))
        (inc-neighbours fixed-view neighbours w))))

(defn pprint-view
  [view]
  (let [w (into (sorted-map)
                (second
                  (reduce (fn [[r s] i]
                            (if (= (mod i 8) 0)
                              [(inc r) (assoc s (keyword (str (inc r))) (aget view i))]
                              [r (assoc s (keyword (str r)) (str (get s (keyword (str r))) " " (aget view i)))])
                            ) [0 {}] (range 64))))]
    (println (reduce (fn [s l] (str s (val l) "\n")) "" w))))


(defn step
  [mutating-view]
  (let [fixed-view (.slice mutating-view)]                  ;; this is the not modified view that we operate with
    (doseq [i (range 0 (.-length mutating-view))]
      (let [cell (get-cell fixed-view i)]
        ;; off-cell with no neighbours, we just skip  this
        (when (not= cell 0)
          (let [c (bit-shift-right cell 1)]
            (if (alive? cell)
              ;; it's alive, we should kill it if it does not have 2 or 3 neighbours
              (when (and (not= c 2) (not= c 3))
                (println "Kill cell" (one-d->two-d i 8))
                (kill-cell mutating-view fixed-view i)
                (pprint-view mutating-view)
                )
              ;; otherwise the cell is off, it should turn on if it has 3 alive neighbours
              (when (= c 3)
                (println "Awake cell " (one-d->two-d i 8))
                (awake-cell mutating-view fixed-view i)
                (pprint-view mutating-view)
                )
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
          (inc-neighbours view view n w))
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


;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]


