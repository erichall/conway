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
  ;; TODO, to handle a toroidal grid, we must pad the world so we can keep this simple?
  [x y]
  (for [dx dd
        dy dd
        :when (not (and (= dx 0) (= dy 0)))]
    [(+ x dx) (+ y dy)]))

(defn dec-neighbour
  [cell]
  (let [n (bit-shift-left (- (bit-shift-right cell 1) 1) 1)]
    (bit-xor n (get-cell-state cell))))

(defn inc-neighbour
  [cell]
  (let [n (bit-shift-left (+ (bit-shift-right cell 1) 1) 1)]
    (bit-xor n (get-cell-state cell))))

(defn dec-neighbours
  [view neighbours world-width]
  (reduce (fn [view neighbour]
            (let [nx (first neighbour)
                  ny (second neighbour)
                  ni (two-d->one-d nx ny world-width)]
              (write-value view ni (dec-neighbour (get-cell view ni)))))
          view neighbours))

(defn inc-neighbours
  [view neighbours world-width]
  (reduce (fn [view neighbour]
            (let [nx (first neighbour)
                  ny (second neighbour)
                  ni (two-d->one-d nx ny world-width)]
              (write-value view ni (inc-neighbour (get-cell view ni)))))
          view neighbours))

(defn kill-cell
  "Set the cell state to 0 and decrement the counter for each neighbour."
  [view i]
  (let [w (world-width view)
        [x y] (one-d->two-d i 8)                            ;; TODO the 8 width
        neighbours (get-neighbourhood-coordinates x y)]
    (-> (write-value view i 0)
        (dec-neighbours neighbours w))))

(defn awake-cell
  "Set the cell to 1 and increment the counter for each neighbour."
  [view i]
  (let [w (world-width view)
        [x y] (one-d->two-d i 8)                            ;; TODO the 8 width
        neighbours (get-neighbourhood-coordinates x y)]
    (-> (write-value view i 0)
        (inc-neighbours neighbours world-width))))

(defn step
  [view]
  (let [tmp-view (.slice view)]                             ;; this is the not modified view that we operate with
    (doseq [i (range 0 (.-length view))]
      (let [cell (get-cell tmp-view i)]
        ;; off-cell with no neighbours, we just skip  this
        (when (not= cell 0)
          (let [c (bit-shift-right cell 1)]
            (if (alive? cell)
              ;; it's alive, we should kill it if it does not have 2 or 3 neighbours
              (when (and (not= c 2) (not= c 3))
                (kill-cell view cell))
              ;; otherwise the cell is off, it should turn on if it has 3 alive neighbours
              (when (= c 3)
                (awake-cell view i)
                )
              )
            )))
      ))
  view
  )

(defn pattern->view
  "`pattern` list of tuples with x,y coordinates,
  assign these coordinates into the `view` to turn these
  cells alive. Assume the world is square"
  [pattern view]
  (let [w (world-width view)]
    (reduce (fn [view [x y]]
              (let [i (two-d->one-d x y w)
                    n (get-neighbourhood-coordinates x y)
                    v (->> (set-cell-state view 1)
                           (write-value view i))]
                (inc-neighbours v n w))) view pattern)))

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

(defn pprint-view
  [view]
  (let [w (into (sorted-map)
                (second
                  (reduce (fn [[r s] i]
                            (if (= (mod i 8) 0)
                              [(inc r) (assoc s (keyword (str (inc r))) (aget view i))]
                              [r (assoc s (keyword (str r)) (str (get s (keyword (str r))) " " (aget view i)))])
                            ) [0 {}] (range 64))))]
    (doseq [l w]
      (println (val l))
      )
    )
  )

;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]


