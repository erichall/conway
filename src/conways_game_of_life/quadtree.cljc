(ns conways-game-of-life.quadtree)

(defn not-nil? [x] (not (nil? x)))

(defn make-leaf
  [alive?]
  {:depth      0
   :alive?     alive?
   :population (if alive? 1 0)
   :nw         nil
   :ne         nil
   :se         nil
   :sw         nil})

(defn make-node
  [nw ne se sw]
  {:pre  [(not-nil? nw) (not-nil? ne) (not-nil? se) (not-nil? sw)]
   :post [(> (:depth % 0))]}
  (let [population (+ (:population nw) (:population ne) (:population se) (:population sw))]
    ;; let's start with giving the root node a hardcoded depth and see what that takes us
    ;; so we always decrement the depth where leaf nodes will have 0 as depth
    {:depth      (- (:depth nw) 1)
     :alive?     (> population 0)
     :population population
     :nw         nw
     :ne         ne
     :se         se
     :sw         sw}))

(defn nw?
  [])

;; TODO figure out how to deal with bounds, we just need them for inserting cells into the tree I think.
(defn insert
  [tree cell]
  (cond
    (zero? (:depth tree))

    )
  )


