# conways-game-of-life

[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) with ClojureScript!

## Overview

This is me digging deep into the rabbithole of the amazing cellular automaton created by [John Horton Conway](https://en.wikipedia.org/wiki/John_Horton_Conway).

It contains really three things; A plain functional implementation that works, is readable but rather slow. An attempt of implementing the 
memoization algorithm [Hashlife](https://en.wikipedia.org/wiki/Hashlife) which I've so far failed at. The last flavour of the automaton is a 
version that deals with bitshifting and mutation on native js arrays. It's a pain to understand and makes for some ugly code, but is rather fast!

In its still incomplete state, it can be viewed [here](https://gol.erkanp.dev/)
