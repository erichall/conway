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
  (loop [lines (s/split-lines rle)
         pattern ""]
    (if (empty? lines)
      pattern
      (let [line (first lines)]
        (if (or (s/starts-with? line "#") (is-header? line))
          (recur (rest lines) pattern)
          (recur (rest lines) (str pattern line)))))))

(defn decode-pattern
  "Decode a rle pattern"
  {:test (fn []
           (is (= (decode-pattern "bo$2bo$3o")
                  "bo$bbo$ooo"))
           (is (= (decode-pattern "12W1B12W3B24W1B14W")
                  "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW")))}
  [pattern]
  (loop [pattern (->> (split-but-keep pattern "\\d+")
                      (mapv (fn [p] (if (is-digit? p)
                                      p
                                      (s/split p #""))))
                      (reduce (fn [acc p]
                                (if (vector? p)
                                  (into [] (concat acc p))
                                  (conj acc p))) []))
         decode ""
         run-count 0]
    (if (empty? pattern)
      decode
      (let [p (first pattern)]
        (if (is-digit? p)
          (recur (rest pattern) decode (parse-int p))
          (let [tag (first (s/trim p))
                rep-c (repeat-str tag (max 1 run-count))]
            (recur (rest pattern) (str decode rep-c) 0)))))))

(decode-pattern "bo$2bo$3o!")

(is-digit? "$")
(> (count "$") 1)
(rest '("$" "o$" "bo$" "2" "bo$" "3" "o!"))

(->> (split-but-keep "bo$20bo$3o" "\\d+")
     (mapv (fn [p] (if (is-digit? p)
                     p
                     (s/split p #""))))
     (reduce (fn [acc p]
               (if (vector? p)
                 (into [] (concat acc p))
                 (conj acc p)
                 )
               ) [])
     )


(s/split "abc" #"")

; b	dead cell
; o	alive cell
; $	end of line
;; x.x
;; xx.
;; ...
;; [1 0], [2 1] [0 2] [1 2] [2 2]
(defn rle-pattern->coords
  "Converts a rle encoded string into a set of coordinates for living cells."
  {:test (fn []
           (is (= (rle-pattern->coords "#C This is a glider.\nx = 3, y = 3\nbo$2bo$3o!\n")
                  #{[1 0] [2 1] [0 2] [1 2] [2 2]}))
           )}
  [rle]
  (let [patterns (-> (rle-pattern rle)
                     decode-pattern
                     (s/split #"\$"))]
    (->>
      (count patterns)
      range
      (mapv vector patterns)
      (reduce (fn [acc [line i]]
                (concat acc (keep-indexed (fn [j c]
                                            (when (= (str c) "o")
                                              [j i]))
                                          line))) [])
      set)))



(rle-pattern->coords "o$b2o$2o19$8bo$6bobo$7b2o19$13bobo$14b2o$14bo17$24bo$23b3o$23bob2o$24b\no2bo$25b2o$25bo2$22b2o$21bo2$20bobo2bo$20bob3obo$19b3ob2obo$20bobo$20b\n3o$21bo8$29bo$27bobo$28b2o19$34bobo$35b2o$35bo!")