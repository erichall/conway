(ns conways-game-of-life.hashlife
  (:require [conways-game-of-life.quadtree :as q]
            [clojure.pprint :refer [pprint]]))

(def dx [-1 0 1])
(def dy [-1 0 1])

(defn neighbours
  [{:keys [x y] :as c}]
  (for [dx dx
        dy dy
        :when (not (= [0 0] [dx dy]))]
    [(+ dx x) (+ dy y)]))

(def dead 0)

(defn alive
  [cell]
  (- cell dead))

(defn life
  [nw nn ne
   ww cc ee
   sw ss se]
  (let [count (+ (alive nw) (alive nn) (alive ne)
                 (alive ww) 0 (alive ee)
                 (alive sw) (alive ss) (alive se))]
    (if (= count 2)
      (= cc 1)
      (= count 3))))

(defn depth-two->matrix
  "Casts a depth 2 tree into a 2d matrix"
  [{:keys [nw ne se sw]}]
  [[(:nw nw) (:ne nw) (:nw ne) (:ne ne)]
   [(:sw nw) (:se nw) (:sw ne) (:se ne)]
   [(:nw sw) (:ne sw) (:nw se) (:ne se)]
   [(:sw sw) (:se sw) (:sw se) (:se se)]])

(defn depth-two->list
  [{:keys [nw ne se sw]}]
  [(:nw nw) (:ne nw) (:nw ne) (:ne ne)
   (:sw nw) (:se nw) (:sw ne) (:se ne)
   (:nw sw) (:ne sw) (:nw se) (:ne se)
   (:sw sw) (:se sw) (:sw se) (:se se)])

(comment
  (frequencies (mapcat neighbours (depth-two->list t)))

  (depth-two->list t)

  (map (fn [row]
         (map (fn [cell]

                ) row)
         ) t)
  )

(defn to-1d
  [{:keys [x y]}]
  (+ (* 3 (Math/abs x)) (Math/abs y)))

(defn get-cell
  [c x y]
  (if (get-in c [(Math/min (Math/max y 0) 8) (Math/min (Math/max x 0) 8) :data :alive?])
    1
    0))

(defn list->center
  "From a list with cells of depth two, return the center cells"
  [l]
  [(nth l 5) (nth l 6)
   (nth l 9) (nth l 10)])

(defn get-center
  [{:keys [nw ne se sw]}]
  (q/make-node (:se nw) (:sw ne) (:nw se) (:ne sw)))


(defn node->list
  [tree]
  [(:nw tree) (:ne tree) (:se tree) (:sw tree)])

;(defn tree->cells
;  [tree]
;  (loop [[node & nodes] (node->list tree)
;         cells #{}]
;    (cond
;      (= (:depth node) 1) (recur nodes (filter some? (conj cells (:nw node) (:ne node) (:se node) (:sw node))))
;      node (recur (concat nodes (node->list node)) cells)
;      :else cells)))

(defn tree->cells
  ([tree] (tree->cells tree nil []))
  ([{:keys [nw ne se sw depth] :as tree} path cells]
   (cond
     (nil? tree) cells
     (= depth 1) (conj cells
                       (if (or (nil? nw) (nil? (:x nw))) [] (assoc nw :path (conj path :nw)))
                       (if (or (nil? ne) (nil? (:x ne))) [] (assoc ne :path (conj path :ne)))
                       (if (or (nil? se) (nil? (:x se))) [] (assoc se :path (conj path :se)))
                       (if (or (nil? sw) (nil? (:x sw))) [] (assoc sw :path (conj path :sw))))
     :else (filter some? (concat cells
                                 (tree->cells nw (conj path :nw) cells)
                                 (tree->cells ne (conj path :ne) cells)
                                 (tree->cells se (conj path :se) cells)
                                 (tree->cells sw (conj path :sw) cells))))))

(conj nil :pop)

(defn base-case
  [tree survive? birth?]
  (let [cells (tree->cells tree)
        p (map (fn [cell]
                 (let [n (->> (neighbours cell)
                              (map (fn [ne] (q/find-leaf tree (fn [{:keys [x y]}]
                                                                (and (= x (first ne))
                                                                     (= y (second ne)))))))
                              (filter (fn [c] (get-in c [:data :alive?])))
                              count)
                       live? (or (= n 3)
                                 (and (= n 2)
                                      (get-in cell [:data :alive?])))]
                   (assoc-in cell [:data :alive?] live?))) cells)
        ]
    ;(println "We do insert these again " p (:depth tree) (:bounds tree))
    (let [c (reduce (fn [t cell]
                      (assoc-in t (reverse (:path cell)) cell))
                    {:depth  (:depth tree)
                     :bounds (:bounds tree)}
                    p)]
      (get-center c)
      ))
  )

(defn find-nw [tree] (:nw tree))
(defn find-nn [tree] (-> (q/make-node (get-in tree [:nw :ne]) (get-in tree [:ne :nw]) (get-in tree [:ne :sw]) (get-in tree [:nw :se]) (- (:depth tree) 1))
                         (assoc :bounds (:bounds tree))))
(defn find-ne [tree] (:ne tree))
(defn find-ww [tree] (-> (q/make-node (get-in tree [:nw :sw]) (get-in tree [:nw :se]) (get-in tree [:sw :ne]) (get-in tree [:sw :nw]) (- (:depth tree) 1))
                         (assoc :bounds (:bounds tree))))
(defn find-cc [tree] (-> (q/make-node (get-in tree [:nw :se]) (get-in tree [:ne :sw]) (get-in tree [:se :nw]) (get-in tree [:sw :ne]) (- (:depth tree) 1))
                         (assoc :bounds (:bounds tree))))
(defn find-ee [tree] (-> (q/make-node (get-in tree [:ne :sw]) (get-in tree [:ne :se]) (get-in tree [:se :ne]) (get-in tree [:se :nw]) (- (:depth tree) 1))
                         (assoc :bounds (:bounds tree))))
(defn find-sw [tree] (:sw tree))
(defn find-ss [tree] (-> (q/make-node (get-in tree [:sw :ne]) (get-in tree [:se :nw]) (get-in tree [:se :sw]) (get-in tree [:sw :se]) (- (:depth tree) 1))
                         (assoc :bounds (:bounds tree))))
(defn find-se [tree] (:se tree))

(defonce db-v6 (atom {}))
(defn next-generation-v6
  [tree]
  {:pre [(not (nil? tree))]}
  (cond
    ;; cache
    (get @db-v6 tree) (get @db-v6 tree)

    (= (:depth tree) 2) (base-case tree nil nil)
    :else
    (let [
          sub-depth (- (:depth tree) 1)
          b (:bounds tree)
          w (/ (:width (:bounds tree)) 2)
          ;; first find all n-1 sub-squares then calculate the n-2 results
          ;; these are all the 9 2x2 squares...
          nw (-> (find-nw tree) next-generation-v6)
          nn (-> (find-nn tree) next-generation-v6)
          ne (-> (find-ne tree) next-generation-v6)

          ww (-> (find-ww tree) next-generation-v6)
          cc (-> (find-cc tree) next-generation-v6)
          ee (-> (find-ee tree) next-generation-v6)

          sw (-> (find-sw tree) next-generation-v6)
          ss (-> (find-ss tree) next-generation-v6)
          se (-> (find-se tree) next-generation-v6)

          ;; now, construct the overlapping n-1 squares and calculate theirs n-2 results
          ;; these are the 4x4 squares.


          nw (-> (q/make-node nw nn cc ww sub-depth) next-generation-v6)
          ne (-> (q/make-node nn ne ee cc sub-depth) next-generation-v6)
          sw (-> (q/make-node ww cc ss sw sub-depth) next-generation-v6)
          se (-> (q/make-node cc ee se ss sub-depth) next-generation-v6)

          calc (-> (q/make-node nw ne se sw)
                   (assoc :bounds (assoc b :width w)))
          ]

      (swap! db-v6 assoc (hash tree) calc)

      calc

      )))

(def memo-next-generation-v6 (memoize next-generation-v6))

(defn cell-generator
  [n alive-cells]
  (sort (fn [a b] (compare (get-in a [:data :i])
                           (get-in b [:data :i])))
        (-> (mapv (fn [i]
                    (mapv (fn [j]
                            (let [ii (+ j (* i n))]
                              {:x j :y i :data {:i      ii
                                                :alive? (some (fn [c] (= [j i] c)) alive-cells)}})) (range n))
                    ) (range n))
            flatten)))

(defn grow-tree
  "Grows a tree upwards, make it one depth deeper if that makes sense?"
  [tree]
  (let [cells (tree->cells tree)
        deeper-tree {:depth  (inc (:depth tree))
                     :bounds {:x     (get-in tree [:bounds :x])
                              :y     (get-in tree [:bounds :y])
                              :width (* 2 (get-in tree [:bounds :width]))}}]
    ;(q/insert-cells deeper-tree cells)
    deeper-tree
    ))



(defn ->1d
  [x y w]
  (+ x (* y w)))

(def glider
  [{:x 2 :y 2 :data {:i (->1d 2 2 8)}}
   {:x 4 :y 2 :data {:i (->1d 4 2 8)}}
   {:x 3 :y 3 :data {:i (->1d 3 3 8)}}
   {:x 4 :y 3 :data {:i (->1d 4 3 8)}}
   {:x 3 :y 4 :data {:i (->1d 3 4 8)}}])

(defn step
  [{:keys [depth world-width center cells]}]
  (->> (cell-generator world-width cells)
       (q/insert-cells {:depth depth :bounds {:x center :y center :width center}})
       next-generation-v6
       tree->cells
       (filter (fn [{:keys [data]}]
                 (println "Alive?" data)
                 (:alive? data)))
       (map (fn [{:keys [x y]}] [x y]))))

(comment
  ;; 8x8    --> depth = 3
  ;; 16x16  --> depth = 4
  ;; 32x32  --> depth = 5
  (let [depth 3
        c 4
        cells 8
        tree (reduce (fn [tree cell]
                       (q/insert tree cell)
                       ) {:depth  depth
                          :bounds {:x      c
                                   :y      c
                                   :width  c
                                   :height c}}
                     (cell-generator cells)
                     ;glider
                     )]

    (reset! db-v6 {})
    (-> tree
        next-generation-v6
        )
    )

  (pprint @db-v6)


  (reduce (fn [a {:keys [x y] :as c}]
            (if (nil? x)
              a
              (assoc a [x y] c))
            ) {}
          (tree->cells
            (q/insert-cells {:depth  3
                             :bounds {:x     4
                                      :y     4
                                      :width 4}} glider)
            ))

  (q/insert-cells {:depth  3
                   :bounds {:x     4
                            :y     4
                            :width 4}} glider)


  (let [nw-tree {:bounds {:x 2, :y 2, :width 2},
                 :depth  2,
                 :nw     {:bounds     {:x 1, :y 1, :width 1},
                          :population 0,
                          :depth      1,
                          :nw         {:x 0, :y 0, :data {:i 0, :alive? false}},
                          :ne         {:x 1, :y 0, :data {:i 1, :alive? false}},
                          :se         {:x 1, :y 1, :data {:i 9, :alive? false}},
                          :sw         {:x 0, :y 1, :data {:i 8, :alive? false}}},
                 :ne     {:bounds     {:x 3, :y 1, :width 1},
                          :population 0,
                          :depth      1,
                          :nw         {:x 2, :y 0, :data {:i 2, :alive? false}},
                          :ne         {:x 3, :y 0, :data {:i 3, :alive? false}},
                          :se         {:x 3, :y 1, :data {:i 11, :alive? false}},
                          :sw         {:x 2, :y 1, :data {:i 10, :alive? false}}},
                 :se     {:bounds     {:x 3, :y 3, :width 1},
                          :population 0,
                          :depth      1,
                          :nw         {:x 2, :y 2, :data {:i 18, :alive? true}},
                          :ne         {:x 3, :y 2, :data {:i 19, :alive? false}},
                          :se         {:x 3, :y 3, :data {:i 27, :alive? true}},
                          :sw         {:x 2, :y 3, :data {:i 26, :alive? false}}},
                 :sw     {:bounds     {:x 1, :y 3, :width 1},
                          :population 0,
                          :depth      1,
                          :nw         {:x 0, :y 2, :data {:i 16, :alive? false}},
                          :ne         {:x 1, :y 2, :data {:i 17, :alive? false}},
                          :se         {:x 1, :y 3, :data {:i 25, :alive? false}},
                          :sw         {:x 0, :y 3, :data {:i 24, :alive? false}}}}]
    ;(tree->cells nw-tree)
    ;(reverse '(1 2 3))

    (->
      (q/insert-cells {:depth  3
                       :bounds {:x     4
                                :y     4
                                :width 4}} glider)
      grow-tree
      )

    )


  (println (count (keys @db-v6)))

  )

