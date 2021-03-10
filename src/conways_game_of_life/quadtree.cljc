(ns conways-game-of-life.quadtree
  (:require [clojure.pprint :refer [pprint]
             ]))

(defn not-nil? [x] (not (nil? x)))
(defn two-pow
  "computes 2 ^ n"
  [n]
  (bit-shift-left 1 n))

(defn make-leaf
  [alive?]
  {:depth      0
   :alive?     alive?
   :population (if alive? 1 0)})

(defn make-node
  ([nw ne se sw] (make-node nw ne se sw (inc (or (:depth nw) 0))))
  ([nw ne se sw depth]
   {:depth depth
    :nw    nw
    :ne    ne
    :se    se
    :sw    sw}))

(defn node
  [bounds depth]
  {:bounds bounds
   :depth  depth})

(defn bound-by-depth
  "Calculate the boundary from root node to a given depth"
  [root-bounds depth]
  (/ (:x root-bounds) (two-pow (- 3 depth))))

;Bounds is centered around a 2x2
;    nw  ne
;    sw  se
(defn nw? [^long b cell] (and (= (- b 1) (:x cell)) (= (- b 1) (:y cell))))
(defn ne? [^long b cell] (and (= b (:x cell)) (= (- b 1) (:y cell))))
(defn se? [^long b cell] (and (= b (:x cell)) (= b (:y cell))))
(defn sw? [^long b cell] (and (= (- b 1) (:x cell)) (= b (:y cell))))

(defn nw-split
  [bounds w d]
  (if (= d 0)
    {:x (- (:x bounds) 1) :y (- (:y bounds) 1)}
    {:x (- (:x bounds) w) :y (- (:y bounds) w) :width w}))
(defn ne-split
  [bounds w d]
  (if (= d 0)
    {:x (:x bounds) :y (- (:y bounds) 1)}
    {:x (+ (:x bounds) w) :y (- (:y bounds) w) :width w}))
(defn se-split
  [bounds w d]
  (if (= d 0)
    {:x (:x bounds) :y (:y bounds)}
    {:x (+ (:x bounds) w) :y (+ (:y bounds) w) :width w}))
(defn sw-split
  [bounds w d]
  (if (= d 0)
    {:x (- (:x bounds) 1) :y (:y bounds)}
    {:x (- (:x bounds) w) :y (+ (:y bounds) w) :width w}))

(defn in-bounds?
  "Check if a given cell is within a boundary."
  [{:keys [x y width] :or {width 0}} cell]
  (if (nil? x)
    false
    (and (>= (:x cell) (- x width))
         (<= (:x cell) (+ x width))
         (>= (:y cell) (- y width))
         (<= (:y cell) (+ y width)))))

(defn insert
  [tree cell]
  (cond
    (not (in-bounds? (:bounds tree) cell))
    tree

    (= (:depth tree) 0)
    (if (and (= (get-in tree [:bounds :x]) (:x cell))
             (= (get-in tree [:bounds :y]) (:y cell)))
      cell
      tree)

    (nil? (:nw tree))
    (let [next-depth (dec (:depth tree))
          w (/ (:width (:bounds tree)) 2)
          b (:bounds tree)]
      (-> (merge tree {:nw (-> (nw-split b w next-depth)
                               (node next-depth))
                       :ne (-> (ne-split b w next-depth)
                               (node next-depth))
                       :se (-> (se-split b w next-depth)
                               (node next-depth))
                       :sw (-> (sw-split b w next-depth)
                               (node next-depth))})
          (insert cell)))

    :else
    (merge tree {:nw (insert (:nw tree) cell)
                 :ne (insert (:ne tree) cell)
                 :se (insert (:se tree) cell)
                 :sw (insert (:sw tree) cell)})
    ))


(def empty-node
  {:nw (make-leaf false)
   :ne (make-leaf false)
   :se (make-leaf false)
   :sw (make-leaf false)})

(defn empty-tree
  "Creates a empty tree of depth n that fits a square board of 2^tree-depth x 2^tree-depth cells."
  [tree]
  (cond
    (= 1 (:depth tree))
    (merge tree empty-node)

    :else
    (let [next-depth (dec (:depth tree))]
      (-> tree
          (assoc :population 0)
          (assoc :nw (empty-tree {:depth next-depth}))
          (assoc :ne (empty-tree {:depth next-depth}))
          (assoc :se (empty-tree {:depth next-depth}))
          (assoc :sw (empty-tree {:depth next-depth}))))))

(comment

  (let [tree (empty-tree {:depth  3
                          :bounds {:x 4 :y 4}})]
    (-> {:depth  3
         :bounds {:x     4
                  :y     4
                  :width 4}}
        (insert {:x 0 :y 0 :data {:i 0}})
        (insert {:x 1 :y 0 :data {:i 1}})
        (insert {:x 2 :y 0 :data {:i 2}})
        (insert {:x 3 :y 0 :data {:i 2}})
        )
    )

  (bound-by-depth {:x 4 :y 4} 3)

  (quot 8 8)
  )


