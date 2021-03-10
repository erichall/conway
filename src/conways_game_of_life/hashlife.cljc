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

(def super-tree-paths
  [[:nw :nw :sw]                                            ;; 18
   [:nw :ne :se]                                            ;; 19
   [:nw :ne :sw]                                            ;; 20
   [:ne :ne :se]                                            ;; 21

   [:se :nw :se]                                            ;; 26
   [:ne :se :nw]                                            ;; 27
   [:nw :sw :ne]                                            ;; 28
   [:ne :sw :nw]                                            ;; 29

   [:nw :se :sw]                                            ;; 34
   [:ne :se :se]                                            ;; 35
   [:nw :sw :sw]                                            ;; 36
   [:ne :sw :se]                                            ;; 37

   [:se :se :ne]                                            ;; 42
   [:se :sw :nw]                                            ;; 43
   [:se :sw :ne]                                            ;; 44
   [:sw :sw :nw]                                            ;; 45
   ])

(def super-tree-neighbours
  {18 [[:nw :nw :nw]                                        ;; 9
       [:nw :nw :ne]                                        ;; 10
       [:nw :ne :nw]                                        ;; 11
       [:nw :nw :se]                                        ;; 17
       [:nw :ne :se]                                        ;; 19
       [:nw :se :nw]                                        ;; 25
       [:nw :se :ne]                                        ;; 26
       [:nw :sw :sw]]                                       ;; 27
   19 [[:nw :nw :ne]                                        ;; 10
       [:nw :ne :nw]                                        ;; 11
       [:nw :ne :ne]                                        ;; 12
       [:nw :nw :sw]                                        ;; 18
       [:nw :ne :sw]                                        ;; 20
       [:nw :se :ne]                                        ;; 26
       [:ne :se :nw]                                        ;; 27
       [:ne :se :nw]]                                       ;; 28
   20 [[:nw :ne :nw]                                        ;; 11
       [:nw :ne :nw]                                        ;; 12
       [:ne :ne :nw]                                        ;; 13
       [:ne :nw :se]                                        ;; 19
       [:ne :ne :se]                                        ;; 21
       [:nw :sw :nw]                                        ;; 27
       [:nw :sw :ne]                                        ;; 28
       [:ne :sw :nw]]                                       ;; 29
   21 [[:nw :ne :ne]                                        ;; 12
       [:ne :ne :nw]                                        ;; 13
       [:ne :ne :ne]                                        ;; 14
       [:ne :nw :sw]                                        ;; 20
       [:ne :ne :sw]                                        ;; 22
       [:ne :se :ne]                                        ;; 28
       [:ne :sw :nw]                                        ;; 29
       [:ne :sw :ne]]                                       ;; 30
   })

(defn super-tree->grid
  "Converts the 'super-tree' consisting of the 9 arbitrary squares
   0    1      2     3     4     5       6     7
   8    9      10    11    12    13      14    15
   16   17    |18    19    20    21|     22    23
   24   25    |26    27    28    29|     30    31
   32   33    |34    35    36    37|     38    39
   40   41    |42    43    44    45|     46    47
   48   49     50    51    52    53      54    55
   56   57     58    59    60    61      62    63

16x16 ->> 8x8
   0    1   2   3    4   5   6   7   8   9   10  11   12  13  14  15
   16   17  18  19   20  21  22  23  24  25  26  27   28  29  30  31
   32   33  34  35   36  37  38  39  40  41  42  43   44  45  46  47
   48   49  50  51   52  53  54  55  56  57  58  59   60  61  62  63
   64   65  66  67  |68  69  70  71  72  73  74  75 | 76  77  78  79
   80   81  82  83  |84  85  86  87  88  89  90  91 | 92  93  94  95
   96   97  98  99  |100 101 102 103 104 105 106 107| 108 109 110 111
   112  113 114 115 |116 117 118 119 120 121 121 122| 123 124 125 126
   127  128 129 130 |131 132 133 134 135 136 137 138| 139 140 141 142
   143  144 145 146 |147 148 149 150 151 152 153 154| 155 156 157 158
   159  160 161 162 |163 164 165 166 167 168 169 170| 171 172 173 174
   175  176 177 178 |179 180 181 182 183 184 185 186| 187 188 189 190
   191  192 193 194  195 196 197 198 199 200 201 202  203 204 205 206
   207  208 209 210  211 212 213 214 215 216 217 218  219 220 221 222
   223  224 225 226  227 228 229 230 231 232 233 234  235 236 237 238
   239  241 242 243  244 245 246 247 248 249 250 251  252 253 254 255
  "
  [super-tree]
  (map (fn [p] (get-in super-tree p)) super-tree-paths))

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
    (next-generation tree)

    ;(centered-horizontal (:nw tree) (:ne tree))

    )

  )





