(ns conways-game-of-life.pattern-core
  (:require [clojure.test :refer [is]]
            [clojure.string :as s]))

(defn map-keys
  [m f]
  (zipmap (map f (keys m)) (vals m)))

(defn split-but-keep
  "Split a string but keeps the separator."
  [s sep]
  (-> (re-pattern (str "[^" sep "]+|" sep))
      (re-seq s)))

(defn repeat-str
  [s x]
  (s/join "" (repeat x s)))

(defn is-digit?
  [s]
  (every? #(Character/isDigit %) s))

(defn parse-int
  [number-string]
  (try
    (Integer/parseInt number-string)
    (catch Exception _ number-string)))

(defn is-header?
  "Test if line fulfills the line requirement, x = a, y = b, (rule = ..)?"
  [line]
  (and (re-find #"x = \d+" line) (re-find #"y = \d+" line)))

(defn rle-header
  {:test (fn []
           (is (= (rle-header "#C This is a glider.\nx = 3, y = 3\nbo$2bo$3o!\n")
                  "x = 3, y = 3")))}
  [rle]
  (->> (s/split-lines rle)
       (filter is-header?)
       first))

(defn rle-header->map
  "Get xy coordinates from a rle string"
  {:test (fn []
           (is (= (rle-header->map "#C This is a glider.\nx = 3, y = 3\nbo$2bo$3o!\n")
                  {:x 3 :y 3}))
           (is (= (rle-header->map "#C This is a glider.\nx = 3, y = 1, rule = B3/S23\nbo$2bo$3o!\n")
                  {:x 3 :y 1 :rule "B3/S23"}))
           (is (= (rle-header->map "#C This is a glider.\nbo$2bo$3o!\n")
                  nil)))}
  [rle]
  (when-let [header (rle-header rle)]
    (->> (s/split header #",")
         (mapv (fn [c] (->> (s/split c #"=")
                            (mapv s/trim)
                            (mapv parse-int))))
         (into {})
         (#(map-keys % keyword)))))

(defn rle-pattern
  "Get the rle pattern from a rle program"
  {:test (fn []
           (is (= (rle-pattern "#C This is a glider.\nx = 3, y = 3\nbo$2bo$3o!\n")
                  "bo$2bo$3o!")))}
  [rle]
  (loop [lines (s/split-lines rle)]
    (if (empty? lines)
      nil
      (let [line (first lines)]
        (if (or (s/starts-with? line "#") (is-header? line))
          (recur (rest lines))
          line)))))

(defn decode-pattern
  "Decode a rle pattern"
  {:test (fn []
           (is (= (decode-pattern "12W1B12W3B24W1B14W")
                  "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW")))}
  [pattern]
  (loop [pattern (split-but-keep pattern "\\d+")
         decode ""
         c 0]
    (if (empty? pattern)
      decode
      (let [p (first pattern)]
        (if (is-digit? p)
          (recur (rest pattern) decode (parse-int p))
          (let [rep-c (repeat-str (first p) (max 1 c))]
            (if (> 1 (count p))
              (recur (cons (s/join (rest p)) pattern) (str decode rep-c) 0)
              (recur (rest pattern) (str decode rep-c) 0))))))))

;; $	end of line
(defn rle-pattern->coords
  "Converts a rle encoded string into a set of coordinates for living cells."
  {:test (fn []
           (is (= (rle-pattern->coords "#C This is a glider.\nx = 3, y = 3\nbo$2bo$3o!\n")
                  #{[0 0] [2 0] [1 1] [1 2] [2 1]}))
           )}
  [rle]
  (let [pattern (rle-pattern rle)]

    )

  )
