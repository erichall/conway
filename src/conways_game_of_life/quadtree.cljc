(ns conways-game-of-life.quadtree
  (:require [clojure.pprint :refer [pprint]]
            [clojure.test :refer [is deftest]]
            ))

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
  {:test (fn []
           ;; nw bounds {:x 2, :y 2, :w 2} in 8x8, x,y = 0,0. 3,0. 3,0. 3,3
           (let [b {:x 2 :y 2 :width 2}]
             (is (= (in-bounds? b {:x 0 :y 0}) true))
             (is (= (in-bounds? b {:x 3 :y 0}) true))
             (is (= (in-bounds? b {:x 0 :y 3}) true))
             (is (= (in-bounds? b {:x 3 :y 3}) true))
             (is (= (in-bounds? b {:x 4 :y 0}) false))
             (is (= (in-bounds? b {:x 4 :y 4}) false))
             (is (= (in-bounds? b {:x 0 :y 4}) false)))

           ;; ne bounds {:x 6, :y 2, :w 2} x,y = 3,0. 7,0. 7,3. 3,3
           (let [b {:x 6 :y 2 :width 2}]
             (is (= (in-bounds? b {:x 4 :y 0}) true))
             (is (= (in-bounds? b {:x 7 :y 0}) true))
             (is (= (in-bounds? b {:x 7 :y 3}) true))
             (is (= (in-bounds? b {:x 4 :y 3}) true))
             (is (= (in-bounds? b {:x 3 :y 3}) false))
             (is (= (in-bounds? b {:x 3 :y 0}) false))
             (is (= (in-bounds? b {:x 8 :y 0}) false))
             (is (= (in-bounds? b {:x 4 :y 4}) false)))

           ;; se bounds {:x 6 :y 6, w: 2} x,y = 4,4. 7,4, 7,7. 4,7
           (let [b {:x 6 :y 6 :width 2}]
             (is (= (in-bounds? b {:x 4 :y 4}) true))
             (is (= (in-bounds? b {:x 7 :y 4}) true))
             (is (= (in-bounds? b {:x 7 :y 7}) true))
             (is (= (in-bounds? b {:x 4 :y 7}) true))
             (is (= (in-bounds? b {:x 3 :y 4}) false))
             (is (= (in-bounds? b {:x 4 :y 3}) false))
             (is (= (in-bounds? b {:x 8 :y 8}) false))
             (is (= (in-bounds? b {:x 3 :y 7}) false)))
           ;; sw bounds {:x 2 :y 6, :w 2} x,y = 0,4. 3,4. 3,7. 0.7
           (let [b {:x 2 :y 6 :width 2}]
             (is (= (in-bounds? b {:x 0 :y 4}) true))
             (is (= (in-bounds? b {:x 3 :y 4}) true))
             (is (= (in-bounds? b {:x 3 :y 7}) true))
             (is (= (in-bounds? b {:x 0 :y 7}) true))
             (is (= (in-bounds? b {:x 3 :y 3}) false))
             (is (= (in-bounds? b {:x 4 :y 4}) false))
             (is (= (in-bounds? b {:x 0 :y 3}) false))
             (is (= (in-bounds? b {:x 4 :y 7}) false)))

           ;; a nw super square as in hashlife
           ;; bounds {:x 3, :y 3, :w 2}, x,y = 1,1 4,1 4,4, 1,4
           (let [b {:x 3 :y 3 :width 2}]
             (is (= (in-bounds? b {:x 1 :y 1}) true))
             (is (= (in-bounds? b {:x 4 :y 1}) true))
             (is (= (in-bounds? b {:x 4 :y 4}) true))
             (is (= (in-bounds? b {:x 1 :y 4}) true))
             (is (= (in-bounds? b {:x 0 :y 0}) false))
             (is (= (in-bounds? b {:x 1 :y 0}) false))
             (is (= (in-bounds? b {:x 1 :y 5}) false))
             (is (= (in-bounds? b {:x 5 :y 4}) false)))

           ;; a ne super square as in hashlife for 8x8
           ;; bounds {:x 5 :y 3 :w 2} x,y = 3,1 6,1 6,4 3,4
           (let [b {:x 5 :y 3 :width 2}]
             (is (= (in-bounds? b {:x 3 :y 1}) true))
             (is (= (in-bounds? b {:x 6 :y 1}) true))
             (is (= (in-bounds? b {:x 6 :y 4}) true))
             (is (= (in-bounds? b {:x 3 :y 4}) true))
             (is (= (in-bounds? b {:x 2 :y 1}) false))
             (is (= (in-bounds? b {:x 3 :y 5}) false))
             (is (= (in-bounds? b {:x 7 :y 1}) false))
             (is (= (in-bounds? b {:x 6 :y 5}) false)))

           ;; a se super square as in hashlife for 8x8
           ;; bounds {:x 5 :y 5, w: 2} x,y = 3,3 3,6 6,3 6,6
           (let [b {:x 5 :y 5 :width 2}]
             (is (= (in-bounds? b {:x 3 :y 3}) true))
             (is (= (in-bounds? b {:x 3 :y 6}) true))
             (is (= (in-bounds? b {:x 6 :y 3}) true))
             (is (= (in-bounds? b {:x 6 :y 6}) true))
             (is (= (in-bounds? b {:x 3 :y 2}) false))
             (is (= (in-bounds? b {:x 7 :y 3}) false))
             (is (= (in-bounds? b {:x 6 :y 7}) false))
             (is (= (in-bounds? b {:x 2 :y 6}) false)))

           ;; a sw super squuare as in hashlife for 8x8
           ;; bounds {:x 3 :y 5 :w 2} x,y = 1,3 4,3 4,6 1,6
           (let [b {:x 3 :y 5 :width 2}]
             (is (= (in-bounds? b {:x 1 :y 3}) true))
             (is (= (in-bounds? b {:x 4 :y 3}) true))
             (is (= (in-bounds? b {:x 4 :y 6}) true))
             (is (= (in-bounds? b {:x 1 :y 6}) true))
             (is (= (in-bounds? b {:x 3 :y 2}) false))
             (is (= (in-bounds? b {:x 7 :y 3}) false))
             (is (= (in-bounds? b {:x 6 :y 7}) false))
             (is (= (in-bounds? b {:x 1 :y 2}) false))))}
  [{:keys [x y width] :or {width 0}} cell]
  (println x y width cell)
  (if (nil? x)
    false
    (and (>= (:x cell) (- x width))
         (< (:x cell) (+ x width))
         (>= (:y cell) (- y width))
         (< (:y cell) (+ y width)))))

(defn tree=cell
  [tree cell]
  (and (= (get-in tree [:bounds :x]) (:x cell))
       (= (get-in tree [:bounds :y]) (:y cell))))

(defn bounds=cell
  [bounds cell]
  (and (= (:x bounds) (:x cell))
       (= (:y bounds) (:y cell))))

(defn insert-struggle
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
          n (insert-struggle (merge tree (make-node {:bounds (memo-nw-split b w next-depth)
                                                     :depth  next-depth}
                                                    {:bounds (memo-ne-split b w next-depth)
                                                     :depth  next-depth}
                                                    {:bounds (memo-se-split b w next-depth)
                                                     :depth  next-depth}
                                                    {:bounds (memo-sw-split b w next-depth)
                                                     :depth  next-depth}
                                                    (:depth tree))) cell)
          ]
      n)

    :else
    (merge tree {:nw (insert-struggle (:nw tree) cell)
                 :ne (insert-struggle (:ne tree) cell)
                 :se (insert-struggle (:se tree) cell)
                 :sw (insert-struggle (:sw tree) cell)})))

(defn insert
  [tree cell]
  (cond
    (= (:depth tree) 0)
    (if (and (= (get-in tree [:bounds :x]) (:x cell))
             (= (get-in tree [:bounds :y]) (:y cell)))
      cell
      tree)

    (not (in-bounds? (:bounds tree) cell))
    tree

    (nil? (:nw tree))
    (let [next-depth (dec (:depth tree))
          w (/ (:width (:bounds tree)) 2)
          b (:bounds tree)]
      (merge tree {:nw (-> (nw-split b w next-depth)
                           (node next-depth)
                           (insert cell))
                   :ne (-> (ne-split b w next-depth)
                           (node next-depth)
                           (insert cell))
                   :se (-> (se-split b w next-depth)
                           (node next-depth)
                           (insert cell))
                   :sw (-> (sw-split b w next-depth)
                           (node next-depth)
                           (insert cell))})
      )

    :else
    (merge tree {:nw (insert (:nw tree) cell)
                 :ne (insert (:ne tree) cell)
                 :se (insert (:se tree) cell)
                 :sw (insert (:sw tree) cell)})
    ))

(defn insert-cells
  [tree cells]
  (reduce (fn [tree cell]
            ;(println "INSERTING CELL " cell "INTO")
            ;(pprint tree)
            (insert tree cell)) tree cells))


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

(defn find-leaf
  "Find a leaf in a tree according to pred"
  [tree pred]
  (cond
    (nil? tree) nil

    (or (= (:depth tree) 0) (nil? (:depth tree)))
    (if (pred tree)
      tree
      nil)

    :else
    (or (find-leaf (:nw tree) pred)
        (find-leaf (:ne tree) pred)
        (find-leaf (:se tree) pred)
        (find-leaf (:sw tree) pred)))
  )

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


