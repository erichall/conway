(ns conways-game-of-life.hashlife
  (:require [conways-game-of-life.quadtree :as q]))

(defn horizontal-forward
  [w e]
  (q/make-node (:ne w) (:nw e) (:se w) (:sw e)))

(defn vertical-forward
  [n s]
  (q/make-node (:sw n) (:se n) (:nw s) (:ne s)))

(defn center-forward
  [nw ne se sw]
  (q/make-node (:se nw) (:sw ne) (:ne sw) (:nw se)))

(defn next-generation
  [tree]
  {:pre [(not (nil? tree))]}
  (println (:depth tree))
  (cond
    (= (:depth tree) 2) tree
    :else
    (let [{:keys [nw ne se sw]} tree
          n00 (next-generation nw)
          n01 (-> (horizontal-forward nw ne) next-generation)
          n02 (next-generation ne)

          n10 (-> (vertical-forward nw se) next-generation)
          n11 (-> (center-forward nw ne se sw) next-generation)
          n12 (-> (vertical-forward ne se) next-generation)

          n20 (next-generation sw)
          n21 (-> (horizontal-forward se sw) next-generation)
          n22 (next-generation se)

          t1 (-> (q/make-node n00 n01 n10 n11) next-generation)
          t2 (-> (q/make-node n01 n02 n11 n12) next-generation)
          t3 (-> (q/make-node n10 n11 n20 n21) next-generation)
          t4 (-> (q/make-node n11 n12 n21 n22) next-generation)

          center-node (q/make-node t1 t2 t3 t4)
          ]

      center-node
      )))

(comment
  (let [tree (q/empty-tree {:depth  3
                            :bounds {:x 4 :y 4}})]
    (-> (q/insert tree {:x 1 :y 0 :data {:alive? true}})
        (q/insert {:x 0 :y 0 :data {:alive? true}})
        (q/insert {:x 0 :y 1 :data {:alive? true}})
        (q/insert {:x 1 :y 1 :data {:alive? true}})
        next-generation
        )
    )
  )

;; S1
;; ____x___________
;; ____x___________
;; ____x___________
;; ________________
;; ________________
;; ________________
;; ________________
;; ________________
;; ________________
;;
;; -->>>>> 1 gen
;; S2
;; ________________
;; ___xxx__________
;; ________________
;; ________________
;; ________________
;; ________________
;; ________________
;; ________________
;; ________________

