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

(defn node->list
  [tree]
  [(:nw tree) (:ne tree) (:se tree) (:sw tree)])

(defn tree->cells
  [tree]
  (loop [[node & nodes] (node->list tree)
         cells #{}]
    (cond
      (not (nil? (get-in node [:cell :x]))) (recur nodes (conj cells [(get-in node [:cell :x])
                                                                      (get-in node [:cell :y])
                                                                      (get-in node [:cell :data :i])]))
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
    (= (:depth tree) 2) tree
    :else
    (let [{:keys [nw ne se sw]} tree
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

          t1 (-> (q/make-node r11 r12 r21 r22) next-generation-v2)
          t2 (-> (q/make-node r11 r13 r22 r23) next-generation-v2)
          t3 (-> (q/make-node r21 r22 r31 r32) next-generation-v2)
          t4 (-> (q/make-node r22 r23 r32 r33) next-generation-v2)

          ]
      (q/make-node t1 t2 t3 t4)
      )))



(defn cell-generator
  [n]
  (sort (fn [a b] (compare (get-in a [:data :i])
                           (get-in b [:data :i])))
        (-> (mapv (fn [i]
                    (mapv (fn [j] {:x j :y i :data {:i      (+ j (* i n))
                                                    :alive? true}}) (range n))
                    ) (range n))
            flatten))
  )

(comment
  ;; 8x8    --> depth = 3
  ;; 16x16  --> depth = 4
  ;; 32x32  --> depth = 5
  (let [tree (reduce (fn [tree cell]
                       (q/insert tree cell)
                       ) {:depth  4
                          :bounds {:x      8
                                   :y      8
                                   :width  8
                                   :height 8}} (cell-generator 16))]
    ;(tree->cells tree)

    ;(centered-horizontal (:nw tree) (:ne tree))
    (-> tree
        next-generation-v2
        ;tree->cells
        ;count
        )

    )

  )





