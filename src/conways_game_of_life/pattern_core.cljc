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
  (every? number? s))

(defn parse-int
  [number-string]
  (js/parseInt number-string)
  )

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

(comment
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
                 []))
       ))


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

(defn is-file [f] (.isFile f))

(defn read-dir
  []
  (let [d (clojure.java.io/file "/Users/erkan/Downloads/jslife/")
        files (file-seq d)]
    (->>
      (filter is-file files)
      (reduce (fn [acc f]
                (assoc acc (keyword (.getName f)) (slurp f))
                ) {}))
    )
  )



(comment
  (read-dir)
  (rle-pattern->coords "#Cp150+15N gun\n                #CDavid Bell, 6/04\n                x = 114, y = 105, rule = B3/S23\n                27bo$26bobo3$26b3o$26b3o$27bo3$27bo$26b3o$26b3o3$26bobo$27bo$11bobbob\n                oobobbo$10boobbo4bobboo3boo$11bobboboobobbo3bobo$28bo7$92boo$91bobo$o\n                bboboobobbo81bo$4oboob4o$obboboobobbo3$14b3o$$13bo3bo$13bo3bo$$14b3o\n                42bobobbobo$55boobobbobbobboboo$59bobobbobo$14b3o$$13bo3bo74bobboo$13b\n                o3bo73bobobbo$33bo57bobobo$14b3o15bobo55booboboo$31booboo53bobboo3bo$\n                35bo52b3o3boobbo$20boo13bobo50b3obboobobo$19bobbo13boboo48b3o3boobo$\n                14bobbobbobo8boobo3bobo48bobboo$14b5oboboo6boo5b4o19bobo27boobob5o$20b\n                oobbo8bo27boo28bobobbobbo$16boboo3b3o6bo3bo24bo29bobbo$15boboboobb3o6b\n                o59boo$15bobboo3b3o6bo3bo24boo$16bo3boobbo8bo27boo$17booboboo6boo5b4o\n                56b3o$18bobobo8boobo3bobo$17bobbobo13boboo56bo3bo$17boobbo13bobo58bo3b\n                o$35bo$31booboo61b3o$32bobo12bobobbobo$33bo9boobobbobbobboboo$47bobobb\n                obo42b3o$$96bo3bo$70boo24bo3bo$70bobo20bo$70bo20bobo3b3o$92boo$$102bo\n                bboboobobbo$102b4oboob4o$102bobboboobobbo10$91bobboboobobbo$90boobbo4b\n                obboo$91bobboboobobbo$86bo$85bobo3$85b3o$85b3o$86bo3$86bo$85b3o$85b3o\n                3$85bobo$86bo!")
  (rle-pattern->coords "o$b2o$2o19$8bo$6bobo$7b2o19$13bobo$14b2o$14bo17$24bo$23b3o$23bob2o$24b\no2bo$25b2o$25bo2$22b2o$21bo2$20bobo2bo$20bob3obo$19b3ob2obo$20bobo$20b\n3o$21bo8$29bo$27bobo$28b2o19$34bobo$35b2o$35bo!")
  (rle-pattern->coords "19boo$19boo$44boo$44boo3$20bo$20bo$19bobo23bo$18booboo20booboo$17bo5bo\n$20bo21bo5bo$8boo7boo3boo$7bobo32booboboo$6b3o$6boo10b4o$6boo10bobboo\n24bo$7bobo9boboo21bobbo$8bo38bo$20boo21boo$21bo21bo$5boo3boo31bobo$5b\noo3boo32boo$15booboboo$7b3o5bo5bo5bo$7b3o6bo3bo7bo15boo3boo$8bo8b3o6b\n3o15bo5bo$37bo$37bobo5bo3bo$37boo7b3o3$10bo22boo$11boo20boo26boo$10boo\n6boo6boo33boo$18boo6boo$5b3o38boo$4bo3bo37boo$3bo5bo17boo$3bo5bo15bob\noo$6bo10bobo5bo$3bo4bo9boo5bo$7bo9bo7bobbo$6bo10boo7boo7boo$bbo13bobo\n12boo4b4o5b3o$bbobo13bo12boobboob3o7bo$3bo31bo11bo5boo$25bo26bobo$19bo\n6boo26bo$19b3o3boo$ooboboo15bo$9b3o9boo$o5bo4bo44boo$10bo45boo$booboo$\n3bo$$24bo29bo$5bo17b3o26bobo$4bobo15b5o12bo13boo$3bo3bo13boo3boo11boo$\n3b5o30bobo$bboo3boo$3b5o40boo$4b3o16b3o22boo$5bo17b3o18bo6boo$44bo6b3o\n5boo$21boo28boo6boo$22bo17boo6boo$19b3o17bobo6boo$19bo19bo$38boo$bboo\n11boobbo$3bo7boobboo3bo$3o8boo7bo24boo$o5boo8b4o15boo4boobobboboo$6boo\n26boo5bo4bobboo$29bo6bo8bo8boo$27b3o12bobo9boo$26bo5bo$26boo4b3o$6bo\n28bo19bo$4booboo25boo18b3o$53bo3bo$3bo5bo45bo$52bo5bo$3booboboo3boo22b\no14bo5bo$24bo12bo15bo3bo$16bo6b3o10bobo15b3o$9boo11b5o8booboo$8bobo10b\noo3boo6bo5bo9boo$9bo27bo11boo$8boo24boo3boo10bo$8b3o10boo$9boo9bo$7bo\n15bo15b3o$20bobbo15boboo$20booboo16boo$22boo16boo11bo$8bo29bobo11b3o$\n7b3o26boobbo11b3o$6b5o8boo3boo$5boo3boo7boo3boo24boo3boo$6b5o9b5o25boo\n3boo$6bo3bo10bobo$7bobo$8bo12b3o13b5o11bo$36bob3obo9bobo$37bo3bo9boo$\n7boo29b3o10boo$7boo30bo11b3o$52bobo$21boo30boo$21boo$39boo$39boo!")
  (rle-pattern->coords "#Cp120(124) sliding gun; moves 1 cell per period\n#CBy Dietrich Leithner and Dean Hickerson\nx = 63, y = 116, rule = B3/S23\n19boo$19boo$44boo$44boo3$20bo$20bo$19bobo23bo$18booboo20booboo$17bo5bo\n$20bo21bo5bo$8boo7boo3boo$7bobo32booboboo$6b3o$6boo10b4o$6boo10bobboo\n24bo$7bobo9boboo21bobbo$8bo38bo$20boo21boo$21bo21bo$5boo3boo31bobo$5b\noo3boo32boo$15booboboo$7b3o5bo5bo5bo$7b3o6bo3bo7bo15boo3boo$8bo8b3o6b\n3o15bo5bo$37bo$37bobo5bo3bo$37boo7b3o3$10bo22boo$11boo20boo26boo$10boo\n6boo6boo33boo$18boo6boo$5b3o38boo$4bo3bo37boo$3bo5bo17boo$3bo5bo15bob\noo$6bo10bobo5bo$3bo4bo9boo5bo$7bo9bo7bobbo$6bo10boo7boo7boo$bbo13bobo\n12boo4b4o5b3o$bbobo13bo12boobboob3o7bo$3bo31bo11bo5boo$25bo26bobo$19bo\n6boo26bo$19b3o3boo$ooboboo15bo$9b3o9boo$o5bo4bo44boo$10bo45boo$booboo$\n3bo$$24bo29bo$5bo17b3o26bobo$4bobo15b5o12bo13boo$3bo3bo13boo3boo11boo$\n3b5o30bobo$bboo3boo$3b5o40boo$4b3o16b3o22boo$5bo17b3o18bo6boo$44bo6b3o\n5boo$21boo28boo6boo$22bo17boo6boo$19b3o17bobo6boo$19bo19bo$38boo$bboo\n11boobbo$3bo7boobboo3bo$3o8boo7bo24boo$o5boo8b4o15boo4boobobboboo$6boo\n26boo5bo4bobboo$29bo6bo8bo8boo$27b3o12bobo9boo$26bo5bo$26boo4b3o$6bo\n28bo19bo$4booboo25boo18b3o$53bo3bo$3bo5bo45bo$52bo5bo$3booboboo3boo22b\no14bo5bo$24bo12bo15bo3bo$16bo6b3o10bobo15b3o$9boo11b5o8booboo$8bobo10b\noo3boo6bo5bo9boo$9bo27bo11boo$8boo24boo3boo10bo$8b3o10boo$9boo9bo$7bo\n15bo15b3o$20bobbo15boboo$20booboo16boo$22boo16boo11bo$8bo29bobo11b3o$\n7b3o26boobbo11b3o$6b5o8boo3boo$5boo3boo7boo3boo24boo3boo$6b5o9b5o25boo\n3boo$6bo3bo10bobo$7bobo$8bo12b3o13b5o11bo$36bob3obo9bobo$37bo3bo9boo$\n7boo29b3o10boo$7boo30bo11b3o$52bobo$21boo30boo$21boo$39boo$39boo!"))

