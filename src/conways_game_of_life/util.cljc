(ns conways-game-of-life.util)

(defn get-state
  [app-state-atom]
  (-> @app-state-atom
      :states
      last))

(defn vec2d
  [rows cols init]
  (mapv (fn [y] (mapv (fn [x] (init x y)) (range cols))) (range rows)))

(defn pseudo-random
  [seed]
  (let [x (* (Math/sin (inc seed))
             10000)]
    (- x (Math/floor x))))

(defn random-int
  [seed max]
  [(pseudo-random seed) (Math/round (mod seed max))])

(defn next-seed
  [seed max]
  (let [[seed _] (random-int seed max)]
    seed))


(defn set-initial-shape
  [grid shape]
  (reduce (fn [grid [x y]] (assoc-in grid [y x :cell-state] 1)) grid shape))

(defn running?
  [app-state-atom]
  (:running? (get-state app-state-atom)))
