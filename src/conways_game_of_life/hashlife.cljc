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
  (loop [nodes (node->list tree)
         cells #{}]
    (cond
      (not (nil? (:x (first nodes)))) (recur (rest nodes) (conj cells [(:x (first nodes)) (:y (first nodes))]))
      (not (nil? (:nw (first nodes)))) (recur (concat (rest nodes) (node->list (first nodes))) cells)
      (first nodes) (do
                      (recur nodes cells))
      :else cells
      ;; its a bug
      )))

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
  (let [tree (reduce (fn [tree cell]
                       (q/insert tree cell)
                       ) {:depth  3
                          :bounds {:x      4
                                   :y      4
                                   :width  4
                                   :height 4}} (cell-generator 8))]
    (tree->cells (next-generation tree))

    ;(centered-horizontal (:nw tree) (:ne tree))

    )

  )





