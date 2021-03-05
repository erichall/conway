(ns conways-game-of-life.hashlife
  (:require [conways-game-of-life.quadtree :refer [make-node make-leaf]]))

(defn horizontal-forward
  [w e]
  (make-node (:ne w) (:nw e) (:se w) (:sw e)))

(defn vertical-forward
  [n s]
  (make-node (:sw n) (:se n) (:nw s) (:ne s)))

(defn center-forward
  [nw ne se sw]
  (make-node (:se nw) (:sw ne) (:ne sw) (:nw se)))

(defn next-generation
  [tree]
  (cond
    (= (:depth tree) 2) (println "WE SHOULD DO THE NAIVE NOW" tree)
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

          t1 (-> (make-node n00 n01 n10 n11) next-generation)
          t2 (-> (make-node n01 n02 n11 n12) next-generation)
          t3 (-> (make-node n10 n11 n20 n21) next-generation)
          t4 (-> (make-node n11 n12 n21 n22) next-generation)

          center-node (make-node t1 t2 t3 t4)]

      center-node
      )))

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

