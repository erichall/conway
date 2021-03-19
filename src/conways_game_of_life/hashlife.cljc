(ns conways-game-of-life.hashlife
  (:require [conways-game-of-life.quadtree :as q]
            [clojure.pprint :refer [pprint]]))

(def dx [-1 0 1])
(def dy [-1 0 1])

(defn neighbours
  [{:keys [x y]}]
  (for [dx dx
        dy dy
        :when (not (= [0 0] [dx dy]))]
    [(+ dx x) (+ dy y)]))

(neighbours {:x 0 :y 0})
(def t {:bounds {:x 2, :y 2, :width 2}, :depth 2, :nw {:bounds {:x 1, :y 1, :width 1}, :depth 1, :nw {:x 0, :y 0, :data {:i 0, :alive? true}}, :ne {:x 1, :y 0, :data {:i 1, :alive? true}}, :se {:x 1, :y 1, :data {:i 9, :alive? true}}, :sw {:x 0, :y 1, :data {:i 8, :alive? true}}}, :ne {:bounds {:x 3, :y 1, :width 1}, :depth 1, :nw {:x 2, :y 0, :data {:i 2, :alive? true}}, :ne {:x 3, :y 0, :data {:i 3, :alive? true}}, :se {:x 3, :y 1, :data {:i 11, :alive? true}}, :sw {:x 2, :y 1, :data {:i 10, :alive? true}}}, :se {:bounds {:x 3, :y 3, :width 1}, :depth 1, :nw {:x 2, :y 2, :data {:i 18, :alive? true}}, :ne {:x 3, :y 2, :data {:i 19, :alive? true}}, :se {:x 3, :y 3, :data {:i 27, :alive? true}}, :sw {:x 2, :y 3, :data {:i 26, :alive? true}}}, :sw {:bounds {:x 1, :y 3, :width 1}, :depth 1, :nw {:x 0, :y 2, :data {:i 16, :alive? true}}, :ne {:x 1, :y 2, :data {:i 17, :alive? true}}, :se {:x 1, :y 3, :data {:i 25, :alive? true}}, :sw {:x 0, :y 3, :data {:i 24, :alive? true}}}})
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

(defn base-case
  [tree survive? birth?]
  (println (tree->cells tree))
  (get-center tree)
  )

(defn node->list
  [tree]
  [(:nw tree) (:ne tree) (:se tree) (:sw tree)])

(defn tree->cells
  [tree]
  (loop [[node & nodes] (node->list tree)
         cells #{}]
    (cond
      (= (:depth node) 1) (recur nodes (filter some? (conj cells (:nw node) (:ne node) (:se node) (:sw node))))
      node (recur (concat nodes (node->list node)) cells)
      :else cells)))

(defn horizontal-forward
  [w e]
  (q/make-node (:ne w) (:nw e) (:se w) (:sw e)))

(defn vertical-forward
  [n s]
  (q/make-node (:sw n) (:se n) (:nw s) (:ne s)))

(defn center-forward
  [nw ne se sw]
  (q/make-node (:se nw) (:sw ne) (:ne sw) (:nw se)))

(defn centered-subnode
  [nw ne se sw]
  (q/make-node (:se nw) (:sw ne) (:ne sw) (:nw se)))

(defn centered-sub-sub
  [nw ne se sw]
  (q/make-node (get-in nw [:se :se]) (get-in ne [:sw :sw]) (get-in sw [:ne :ne]) (get-in se [:nw :nw])))

(defn centered-horizontal
  [w e]
  (q/make-node (get-in w [:ne :se]) (get-in e [:nw :sw]) (get-in w [:se :ne]) (get-in e [:sw :nw])))

(defn centered-vertical
  [n s]
  (q/make-node (get-in n [:sw :se]) (get-in n [:se :sw]) (get-in s [:nw :ne]) (get-in s [:ne :nw])))


(defn find-nw [tree] (:nw tree))

(defn find-nn [tree] (q/make-node (get-in tree [:nw :ne]) (get-in tree [:ne :nw]) (get-in tree [:ne :sw]) (get-in tree [:nw :se]) (- (:depth tree) 1)))
(defn find-ne [tree] (:ne tree))
(defn find-ww [tree] (q/make-node (get-in tree [:nw :sw]) (get-in tree [:nw :se]) (get-in tree [:sw :ne]) (get-in tree [:sw :nw]) (- (:depth tree) 1)))
(defn find-cc [tree] (q/make-node (get-in tree [:nw :se]) (get-in tree [:ne :sw]) (get-in tree [:se :nw]) (get-in tree [:sw :ne]) (- (:depth tree) 1)))
(defn find-ee [tree] (q/make-node (get-in tree [:ne :sw]) (get-in tree [:ne :se]) (get-in tree [:se :ne]) (get-in tree [:se :nw]) (- (:depth tree) 1)))
(defn find-sw [tree] (:sw tree))
(defn find-ss [tree] (q/make-node (get-in tree [:sw :ne]) (get-in tree [:se :nw]) (get-in tree [:se :sw]) (get-in tree [:sw :se]) (- (:depth tree) 1)))
(defn find-se [tree] (:se tree))

(defn next-generation
  [tree]
  {:pre [(not (nil? tree))]}
  (cond
    (= (:depth tree) 2) tree
    :else
    (let [{:keys [nw ne se sw]} tree
          n00 (centered-subnode (:nw nw) (:ne nw) (:se nw) (:sw nw))
          n01 (centered-horizontal nw ne)
          n02 (centered-subnode (:nw ne) (:ne ne) (:se ne) (:sw ne))

          n10 (centered-vertical nw sw)
          n11 (centered-sub-sub nw ne se sw)
          n12 (centered-vertical ne se)

          n20 (centered-subnode (:nw sw) (:ne sw) (:se sw) (:sw sw))
          n21 (centered-horizontal sw se)
          n22 (centered-subnode (:nw se) (:ne se) (:se se) (:sw se))

          t1 (-> (q/make-node n00 n01 n10 n11)
                 next-generation)
          t2 (-> (q/make-node n01 n02 n11 n12)
                 next-generation)
          t3 (-> (q/make-node n10 n11 n20 n21)
                 next-generation)
          t4 (-> (q/make-node n11 n12 n21 n22)
                 next-generation)

          center-node (q/make-node t1 t2 t3 t4)
          ]
      center-node
      )))

(defn next-generation-v2
  [tree]
  {:pre [(not (nil? tree))]}
  (cond
    (= (:depth tree) 2) (get-center tree)
    :else
    (let [{:keys [nw ne se sw depth]} tree
          n11 (q/make-node (get-in tree [:sw :sw]) (get-in tree [:sw :se]) (get-in tree [:sw :nw]) (get-in tree [:sw :ne]))
          n21 (q/make-node (get-in tree [:sw :nw]) (get-in tree [:sw :ne]) (get-in tree [:nw :sw]) (get-in tree [:nw :se]))
          n31 (q/make-node (get-in tree [:nw :sw]) (get-in tree [:nw :se]) (get-in tree [:nw :nw]) (get-in tree [:nw :ne]))

          n12 (q/make-node (get-in tree [:sw :se]) (get-in tree [:se :sw]) (get-in tree [:sw :ne]) (get-in tree [:se :nw]))
          n22 (q/make-node (get-in tree [:sw :ne]) (get-in tree [:se :nw]) (get-in tree [:nw :se]) (get-in tree [:ne :sw]))
          n32 (q/make-node (get-in tree [:nw :se]) (get-in tree [:ne :sw]) (get-in tree [:nw :ne]) (get-in tree [:ne :nw]))

          n13 (q/make-node (get-in tree [:se :sw]) (get-in tree [:se :se]) (get-in tree [:se :nw]) (get-in tree [:se :ne]))
          n23 (q/make-node (get-in tree [:se :nw]) (get-in tree [:se :ne]) (get-in tree [:ne :sw]) (get-in tree [:ne :se]))
          n33 (q/make-node (get-in tree [:ne :sw]) (get-in tree [:ne :se]) (get-in tree [:ne :nw]) (get-in tree [:ne :ne]))

          ;; now these are the 9 aux nodes
          r11 (next-generation-v2 n11)
          r12 (next-generation-v2 n12)
          r13 (next-generation-v2 n13)

          r21 (next-generation-v2 n21)
          r22 (next-generation-v2 n22)
          r23 (next-generation-v2 n23)

          r31 (next-generation-v2 n31)
          r32 (next-generation-v2 n32)
          r33 (next-generation-v2 n33)

          t1 (-> (q/make-node r11 r12 r21 r22 (dec depth))
                 next-generation-v2
                 )
          t2 (-> (q/make-node r12 r13 r22 r23 (dec depth))
                 next-generation-v2
                 )
          t3 (-> (q/make-node r21 r22 r31 r32 (dec depth))
                 next-generation-v2
                 )
          t4 (-> (q/make-node r22 r23 r32 r33 (dec depth))
                 next-generation-v2
                 )

          ;_ (println "THIS IS t1")
          ;_ (println (:depth t1))

          ]
      (q/make-node t1 t2 t3 t4)
      )))

(defn next-generation-v3
  [tree]
  {:pre [(not (nil? tree))]}
  (cond
    (= (:depth tree) 2) (get-center tree)
    :else
    (let [{:keys [nw ne se sw depth]} tree
          n00 (next-generation-v3 nw)
          n01 (-> (horizontal-forward nw ne)
                  next-generation-v3)
          n02 (next-generation-v3 ne)

          n10 (-> (vertical-forward nw sw)
                  next-generation-v3)
          n11 (-> (center-forward nw ne se sw)
                  next-generation-v3)
          n12 (-> (vertical-forward ne se)
                  next-generation-v3)

          n20 (next-generation-v3 sw)
          n21 (-> (horizontal-forward sw se)
                  next-generation-v3)
          n22 (next-generation-v3 se)

          t0 (-> (q/make-node n00 n01 n10 n11 (dec depth)) next-generation-v3)
          t1 (-> (q/make-node n01 n02 n11 n12 (dec depth)) next-generation-v3)
          t2 (-> (q/make-node n10 n11 n20 n21 (dec depth)) next-generation-v3)
          t3 (-> (q/make-node n11 n12 n21 n22 (dec depth)) next-generation-v3)
          ]

      (q/make-node t0 t1 t2 t3)
      )))


(defn next-generation-v4
  [tree]
  {:pre [(not (nil? tree))]}
  (cond
    (= (:depth tree) 2) tree
    :else
    (let [{:keys [nw ne se sw depth]} tree
          n00 (next-generation-v4 nw)
          n01 (q/make-node (get-in tree [:nw :sw]) (get-in tree [:nw :se]) (get-in tree [:sw :ne]) (get-in tree [:sw :nw]))
          n02 (next-generation-v4 sw)

          n10 (q/make-node (get-in tree [:nw :ne]) (get-in tree [:ne :nw]) (get-in tree [:nw :se]) (get-in tree [:ne :sw]))
          n11 (q/make-node (get-in tree [:nw :se]) (get-in tree [:ne :sw]) (get-in tree [:se :nw]) (get-in tree [:sw :ne]))
          n12 (q/make-node (get-in tree [:sw :ne]) (get-in tree [:se :nw]) (get-in tree [:se :sw]) (get-in tree [:sw :se]))


          n20 (next-generation-v4 ne)
          n21 (q/make-node (get-in tree [:ne :sw]) (get-in tree [:ne :se]) (get-in tree [:se :ne]) (get-in tree [:se :nw]))
          n22 (next-generation-v4 se)

          sub-aux-nw (q/make-node n00 n10 n11 n01)
          sub-aux-ne (q/make-node n10 n20 n21 n11)
          sub-aux-se (q/make-node n11 n21 n22 n12)
          sub-aux-sw (q/make-node n01 n11 n12 n02)
          ]

      (q/make-node
        (get-center sub-aux-nw)
        (get-center sub-aux-ne)
        (get-center sub-aux-se)
        (get-center sub-aux-sw)
        )
      )))

(defn next-generation-v5
  "This is gosper final iteration."
  [tree]
  {:pre [(not (nil? tree))]}
  (cond
    (= (:depth tree) 2) tree
    :else
    (let [{:keys [nw ne se sw depth]} tree
          n00 (next-generation-v5 nw)
          n01 (horizontal-forward nw ne)
          n02 (next-generation-v5 ne)

          n10 (vertical-forward nw sw)
          n11 (center-forward nw ne se sw)
          n12 (vertical-forward ne se)

          n20 (next-generation-v5 sw)
          n21 (horizontal-forward sw se)
          n22 (next-generation-v5 se)

          t1 (-> (q/make-node n00 n01 n10 n11) next-generation-v5)
          t2 (-> (q/make-node n01 n02 n11 n12) next-generation-v5)
          t3 (-> (q/make-node n10 n11 n20 n21) next-generation-v5)
          t4 (-> (q/make-node n11 n12 n21 n22) next-generation-v5)
          ]

      (q/make-node t1 t2 t3 t4)
      )))

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
          ;; first find all n-1 sub-squares then calculate the n-2 results
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
          nw (-> (q/make-node nw nn cc ww sub-depth) next-generation-v6)
          ne (-> (q/make-node nn ne ee cc sub-depth) next-generation-v6)
          sw (-> (q/make-node ww cc ss sw sub-depth) next-generation-v6)
          se (-> (q/make-node cc ee se ss sub-depth) next-generation-v6)
          calc (q/make-node nw ne se sw)
          ]

      (swap! db-v6 assoc (hash tree) calc)

      calc

      )))

(def memo-next-generation-v6 (memoize next-generation-v6))





(defn cell-generator
  [n]
  (sort (fn [a b] (compare (get-in a [:data :i])
                           (get-in b [:data :i])))
        (-> (mapv (fn [i]
                    (mapv (fn [j]
                            (let [ii (+ j (* i n))]
                              {:x j :y i :data {:i      ii
                                                :alive? (or (= ii 18)
                                                            (= ii 20)
                                                            (= ii 27)
                                                            (= ii 28)
                                                            (= ii 35)
                                                            )}})) (range n))
                    ) (range n))
            flatten))
  )

(defn ->1d
  [x y w]
  (+ x (* y w)))

(def glider
  #{{:x 2 :y 2 :data {:i (->1d 2 2 8)}}
    {:x 4 :y 2 :data {:i (->1d 4 2 8)}}
    {:x 3 :y 3 :data {:i (->1d 3 3 8)}}
    {:x 4 :y 3 :data {:i (->1d 4 3 8)}}
    {:x 3 :y 4 :data {:i (->1d 3 4 8)}}})

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
                     ;[
                     ;{:x 0 :y 0 :data {:i (->1d 0 0 8)}}
                     ;{:x 1 :y 0 :data {:i (->1d 1 0 8)}}
                     ;{:x 1 :y 1 :data {:i (->1d 2 0 8)}}
                     ;{:x 0 :y 1 :data {:i (->1d 0 1 8)}}
                     ;;;
                     ;{:x 2 :y 0 :data {:i (->1d 2 0 8)}}
                     ;{:x 3 :y 0 :data {:i (->1d 3 0 8)}}
                     ;{:x 3 :y 1 :data {:i (->1d 3 1 8)}}
                     ;{:x 2 :y 1 :data {:i (->1d 2 1 8)}}
                     ;]
                     ;(cell-generator cells)
                     glider
                     )]
    ;(tree->cells tree)

    (reset! db-v6 {})
    ;(centered-horizontal (:nw tree) (:ne tree))
    (-> tree
        ;next-generation
        next-generation-v6
        ;tree->cells
        ;count
        )

    )

  (println (count (keys @db-v6)))

  )

