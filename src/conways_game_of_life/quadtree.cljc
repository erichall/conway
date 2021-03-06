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

(defn nw-split [bounds w] {:x (- (:x bounds) w) :y (- (:y bounds) w)})
(defn ne-split [bounds w] {:x (+ (:x bounds) w) :y (- (:y bounds) w)})
(defn se-split [bounds w] {:x (+ (:x bounds) w) :y (+ (:y bounds) w)})
(defn sw-split [bounds w] {:x (- (:x bounds) w) :y (+ (:y bounds) w)})

(defn insert
  ([tree cell] (insert tree (:bounds tree) cell))
  ([tree root-bounds cell]
   (let [bound-at-depth (bound-by-depth root-bounds (:depth tree))]
     (cond
       (and (= 1 (:depth tree)) (nw? bound-at-depth cell))
       (assoc tree :nw (make-leaf true))

       (and (= 1 (:depth tree)) (ne? bound-at-depth cell))
       (assoc tree :ne (make-leaf true))

       (and (= 1 (:depth tree)) (se? bound-at-depth cell))
       (assoc tree :se (make-leaf true))

       (and (= 1 (:depth tree)) (sw? bound-at-depth cell))
       (assoc tree :sw (make-leaf true))

       (> (:depth tree) 1)
       (let [nw (insert (:nw tree) root-bounds cell)]
         (if (= nw (:nw tree))
           (let [ne (insert (:ne tree) root-bounds cell)]
             (if (= ne (:ne tree))
               (let [se (insert (:se tree) root-bounds cell)]
                 (if (= se (:se tree))
                   (assoc tree :sw (insert (:sw tree) root-bounds cell))
                   (assoc tree :se se)))
               (assoc tree :ne ne)))
           (assoc tree :nw nw)))

       :else
       tree
       ))))


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
    (-> (insert tree {:x 1 :y 0 :data {:alive? true}})
        (insert {:x 0 :y 0 :data {:alive? true}})
        (insert {:x 0 :y 1 :data {:alive? true}})
        (insert {:x 1 :y 1 :data {:alive? true}})
        )
    )

  (bound-by-depth {:x 4 :y 4} 3)
  )


