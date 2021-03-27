(ns conways-game-of-life.shapes)

(def blinker #{[1 0] [1 1] [1 2]})
(def shapes {
             :blinker        #{[1 0] [1 1] [1 2]}
             :blinker-offset #{[6 4] [6 5] [6 6]}
             :glider         #{[0 0] [2 0] [1 1] [1 2] [2 1]}
             :144p24         #{[8 11]
                               [17 25]
                               [12 12]
                               [3 32]
                               [13 3]
                               [7 23]
                               [16 34]
                               [10 34]
                               [12 24]
                               [11 2]
                               [7 11]
                               [21 10]
                               [18 32]
                               [16 32]
                               [3 22]
                               [21 11]
                               [14 31]
                               [4 12]
                               [6 26]
                               [1 22]
                               [22 12]
                               [17 2]
                               [0 22]
                               [16 5]
                               [4 32]
                               [8 3]
                               [6 31]
                               [24 23]
                               [13 12]
                               [10 9]
                               [5 4]
                               [15 3]
                               [18 2]
                               [6 3]
                               [4 25]
                               [17 0]
                               [19 22]
                               [12 8]
                               [1 12]
                               [17 23]
                               [7 3]
                               [12 2]
                               [18 27]
                               [4 2]
                               [13 24]
                               [3 12]
                               [13 2]
                               [18 10]
                               [1 13]
                               [12 1]
                               [16 2]
                               [18 11]
                               [15 31]
                               [9 3]
                               [23 12]
                               [20 11]
                               [19 7]
                               [5 29]
                               [15 33]
                               [9 30]
                               [11 34]
                               [23 23]
                               [6 5]
                               [12 30]
                               [5 30]
                               [7 24]
                               [5 2]
                               [2 13]
                               [23 11]
                               [10 2]
                               [1 11]
                               [3 33]
                               [11 12]
                               [11 30]
                               [6 33]
                               [8 2]
                               [5 26]
                               [16 0]
                               [6 29]
                               [10 11]
                               [18 1]
                               [15 1]
                               [7 22]
                               [11 3]
                               [21 24]
                               [15 5]
                               [18 8]
                               [8 33]
                               [20 26]
                               [2 12]
                               [6 1]
                               [5 8]
                               [14 11]
                               [6 11]
                               [10 1]
                               [5 5]
                               [11 1]
                               [15 29]
                               [16 30]
                               [8 30]
                               [5 9]
                               [21 23]
                               [19 27]
                               [22 11]
                               [17 10]
                               [9 2]
                               [7 31]
                               [5 32]
                               [5 21]
                               [11 7]
                               [9 1]
                               [6 9]
                               [23 10]
                               [5 34]
                               [17 32]
                               [3 11]
                               [3 1]
                               [12 3]
                               [13 16]
                               [16 29]
                               [17 24]
                               [19 8]
                               [6 12]
                               [13 30]
                               [14 3]
                               [16 10]
                               [5 0]
                               [16 4]
                               [12 16]
                               [13 33]
                               [10 30]
                               [4 34]
                               [12 25]
                               [3 23]
                               [10 3]
                               [2 22]
                               [22 23]
                               [11 24]
                               [3 2]
                               [18 33]
                               [14 9]
                               [17 34]
                               [11 16]
                               [4 0]}
             :131c31climber  #{[20 75]
                               [23 63]
                               [7 23]
                               [26 73]
                               [28 86]
                               [21 75]
                               [24 61]
                               [0 0]
                               [36 106]
                               [8 21]
                               [20 73]
                               [23 73]
                               [1 1]
                               [20 74]
                               [22 71]
                               [23 72]
                               [25 62]
                               [20 72]
                               [14 43]
                               [36 105]
                               [15 43]
                               [22 74]
                               [22 75]
                               [23 68]
                               [35 107]
                               [29 84]
                               [6 22]
                               [22 72]
                               [20 71]
                               [25 65]
                               [21 69]
                               [8 22]
                               [24 62]
                               [27 85]
                               [13 42]
                               [26 63]
                               [24 73]
                               [21 76]
                               [8 23]
                               [22 68]
                               [34 105]
                               [23 62]
                               [14 44]
                               [15 42]
                               [29 86]
                               [0 2]
                               [19 73]
                               [2 1]
                               [27 64]
                               [26 72]
                               [21 73]
                               [1 2]
                               [25 66]
                               [26 65]
                               [25 71]
                               [29 85]
                               [24 64]
                               [24 72]
                               [35 106]
                               [25 63]}
             :heavy          (set (for [x (range 0 200)
                                        y (range 0 200)]
                                    [x y]))
             })

