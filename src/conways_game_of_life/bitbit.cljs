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
  (bit-shift-left cell 1))

(defn get-cell
  [view i]
  (aget view i))

(defn value->binary
  [v]
  (.toString v 2))

(defn two-d->one-d
  [x y w]
  (+ (* w y) x))

(def alive-mask 1)
(defn alive?
  [cell]
  (= (bit-and cell alive-mask) 1))

(defn world-width
  [view]
  (/ (.-length view) 8))

(def dd [-1 0 1])
(defn get-neighbourhood-coordinates
  ;; TODO, to handle a toroidal grid, we must pad the world so we can keep this simple?
  [x y]
  (for [dx dd
        dy dd
        :when (not (and (= dx 0) (= dy 0)))]
    [(+ x dx) (+ y dy)]))

(defn decrement-neighbour
  [cell]
  (let [n (bit-shift-left (- (bit-shift-right cell 1) 1) 1)]
    (bit-xor n (get-cell-state cell))))

(defn decrement-neighbours
  [view neighbours world-width]
  (reduce (fn [view neighbour]
            (let [nx (first neighbour)
                  ny (second neighbour)
                  ni (two-d->one-d nx ny world-width)]
              (write-value view ni (decrement-neighbour (get-cell view ni))))
            ) view neighbours))

(defn kill-cell
  "Set the cell state to 0 and decrement the counter for each neighbour."
  [view x y]
  (let [w (world-width view)
        i (two-d->one-d x y w)
        neighbours (get-neighbourhood-coordinates x y)]
    (write-value view i 0)
    (reduce (fn [view neighbour]
              (let [nx (first neighbour)
                    ny (second neighbour)
                    ni (two-d->one-d nx ny w)]
                (write-value view ni (decrement-neighbour (get-cell view ni))))
              ) view neighbours)
    )
  )

(defn pattern->view
  "`pattern` list of tuples with x,y coordinates,
  assign these coordinates into the `view` to turn these
  cells alive. Assume the world is square"
  [pattern view]
  (let [w (world-width view)]
    (reduce (fn [view [x y]]
              (let [i (two-d->one-d x y w)]
                (->> (set-cell-state view 1)
                     (write-value view i)))) view pattern)))

;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]
;; [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000] [00000000]


