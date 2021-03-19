(ns conways-game-of-life.quadtree
  (:require [clojure.pprint :refer [pprint]
             ]))

(defn not-nil? [x] (not (nil? x)))
(defn two-pow
  "computes 2 ^ n"
  [n]
  (bit-shift-left 1 n))

(defn make-leaf
  [cell alive?]
  {:cell       cell
   :depth      0
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
  {:bounds     bounds
   :population 0
   :depth      depth})

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
(def memo-nw-split (memoize nw-split))
(def memo-ne-split (memoize ne-split))
(def memo-se-split (memoize se-split))
(def memo-sw-split (memoize sw-split))

(defn in-bounds?
  "Check if a given cell is within a boundary."
  [{:keys [x y width] :or {width 0}} cell]
  (if (nil? x)
    false
    (and (>= (:x cell) (- x width))
         (<= (:x cell) (+ x width))
         (>= (:y cell) (- y width))
         (<= (:y cell) (+ y width)))))

(defn tree=cell
  [tree cell]
  (and (= (get-in tree [:bounds :x]) (:x cell))
       (= (get-in tree [:bounds :y]) (:y cell))))

(defn bounds=cell
  [bounds cell]
  (and (= (:x bounds) (:x cell))
       (= (:y bounds) (:y cell))))

(defn insert
  [tree cell]
  (cond
    (not (in-bounds? (:bounds tree) cell))
    tree

    (= (:depth tree) 1)
    (let [w (/ (:width (:bounds tree)) 2)
          b (:bounds tree)]
      (cond
        (bounds=cell (memo-nw-split b w 0) cell) (assoc tree :nw cell)
        (bounds=cell (memo-ne-split b w 0) cell) (assoc tree :ne cell)
        (bounds=cell (memo-se-split b w 0) cell) (assoc tree :se cell)
        (bounds=cell (memo-sw-split b w 0) cell) (assoc tree :sw cell)
        :else tree))

    (= (:depth tree) 0)
    (if (tree=cell tree cell)
      cell
      nil)

    (nil? (:nw tree))
    (let [next-depth (dec (:depth tree))
          w (/ (:width (:bounds tree)) 2)
          b (:bounds tree)
          n (insert (merge tree (make-node {:bounds (memo-nw-split b w next-depth)
                                            :depth  next-depth}
                                           {:bounds (memo-ne-split b w next-depth)
                                            :depth  next-depth}
                                           {:bounds (memo-se-split b w next-depth)
                                            :depth  next-depth}
                                           {:bounds (memo-sw-split b w next-depth)
                                            :depth  next-depth}
                                           (:depth tree))) cell)
          ]
      n
      )

    :else
    (merge tree {:nw (insert (:nw tree) cell)
                 :ne (insert (:ne tree) cell)
                 :se (insert (:se tree) cell)
                 :sw (insert (:sw tree) cell)})
    ))


(def empty-node
  {:nw (make-leaf nil false)
   :ne (make-leaf nil false)
   :se (make-leaf nil false)
   :sw (make-leaf nil false)})

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


