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
  ([nw ne se sw] (make-node nw ne se sw (:depth nw)))
  ([nw ne se sw depth]
   {:depth      (inc depth)
    :population (+ (or (:population nw) 0)
                   (or (:population ne) 0)
                   (or (:population se) 0)
                   (or (:population sw) 0))
    :nw         nw
    :ne         ne
    :se         se
    :sw         sw}))

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
  [bounds w h d]
  (if (= d 0)
    {:x (- (:x bounds) w) :y (- (:y bounds) h) :width 0 :height 0}
    {:x (- (:x bounds) w) :y (- (:y bounds) h) :width w :height h}))
(defn ne-split
  [bounds w h d]
  (if (= d 0)
    {:x (+ (:x bounds) 0) :y (- (:y bounds) h) :width 0 :height 0}
    {:x (+ (:x bounds) w) :y (- (:y bounds) h) :width w :height h}))
(defn se-split
  [bounds w h d]
  (if (= d 0)
    {:x (+ (:x bounds) 0) :y (+ (:y bounds) 0) :width 0 :height 0}
    {:x (+ (:x bounds) w) :y (+ (:y bounds) h) :width w :height h}))
(defn sw-split
  [bounds w h d]
  (if (= d 0)
    {:x (- (:x bounds) w) :y (+ (:y bounds) 0) :width 0 :height 0}
    {:x (- (:x bounds) w) :y (+ (:y bounds) h) :width w :height h}))

(defn in-bounds?
  "Check if a given cell is within a boundary."
  [{:keys [x y width height]} cell]
  (if (nil? x)
    false
    (and (>= (:x cell) (- x width))
         (<= (:x cell) (+ x width))
         (>= (:y cell) (- y height))
         (<= (:y cell) (+ y height)))))

(defn insert
  [tree cell]
  (println (:depth tree) (:bounds tree))
  (when (= (:depth tree) 0)
    (println "NOW ITSSS ZERO")
    (println "x "
             (get-in tree [:bounds :x])
             (get-in tree [:bounds :y])
             )
    )
  (cond
    (not (in-bounds? (:bounds tree) cell))
    (do
      (println "NOT IN BOUNDS " (:bounds tree))
      tree)

    (and (= (:depth tree) 0)
         (= (get-in tree [:bounds :x]) (:x cell))
         (= (get-in tree [:bounds :y]) (:y cell)))
    (do
      (println "CELL :: " cell (in-bounds? (:bounds tree) cell) " bb :: " (:bounds tree))
      cell)

    (= (:depth tree) 0)
    tree

    (nil? (:nw tree))
    (let [next-depth (dec (:depth tree))
          w (if (= 0 next-depth)
              1
              (/ (:width (:bounds tree)) 2))
          b (if (= 0 next-depth)
              (-> (assoc (:bounds tree) :width 0)
                  (assoc :height 0))
              (:bounds tree))
          nw-b (nw-split b w w next-depth)
          ne-b (ne-split b w w next-depth)
          se-b (se-split b w w next-depth)
          sw-b (sw-split b w w next-depth)
          nw (node nw-b next-depth)
          ne (node ne-b next-depth)
          se (node se-b next-depth)
          sw (node sw-b next-depth)
          new-node (-> (assoc tree :nw nw)
                       (assoc :ne ne)
                       (assoc :se se)
                       (assoc :sw sw))]
      (insert new-node cell)
      )

    (in-bounds? (get (:nw tree) :bounds) cell)
    (do
      (println "We just go in here and never come up... " (:depth tree) (:bounds tree))
      (assoc tree :nw (insert (:nw tree) cell)))

    (in-bounds? (get (:ne tree) :bounds) cell)
    (assoc tree :ne (insert (:ne tree) cell))

    (in-bounds? (get (:se tree) :bounds) cell)
    (assoc tree :se (insert (:se tree) cell))

    (in-bounds? (get (:sw tree) :bounds) cell)
    (assoc tree :sw (insert (:sw tree) cell))

    :else
    (do
      (println "Warning nothing..." tree)
      tree)
    )
  )


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
         :bounds {:x      4
                  :y      4
                  :width  4
                  :height 4}}
        ;(insert {:x 0 :y 0 :data {:i 0}})
        ;(insert {:x 1 :y 0 :data {:i 1}})
        (insert {:x 2 :y 0 :data {:i 2}})
        )
    )

  (bound-by-depth {:x 4 :y 4} 3)

  (quot 8 8)
  )


