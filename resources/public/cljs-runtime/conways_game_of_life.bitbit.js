goog.provide('conways_game_of_life.bitbit');
goog.require('cljs.core');
conways_game_of_life.bitbit.uint_8_view = (function conways_game_of_life$bitbit$uint_8_view(size){
var buffer = (new ArrayBuffer(size));
return (new Uint8Array(buffer));
});
/**
 * Mutates `view` by `value` at `index` and returns the view.
 *   WARNING, it __mutates__ the view.
 */
conways_game_of_life.bitbit.write_value = (function conways_game_of_life$bitbit$write_value(view,index,value){
(view[index] = value);

return view;
});
/**
 * Sets the bit at `position` in `value` to `bit-value`
 */
conways_game_of_life.bitbit.set_bit = (function conways_game_of_life$bitbit$set_bit(value,position,bit_value){
var mask = ((1) << position);
return ((value & (~ mask)) | (bit_value << position));
});
conways_game_of_life.bitbit.get_bit = (function conways_game_of_life$bitbit$get_bit(value,position){
var b = (value & ((1) << position));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,(0))){
return (0);
} else {
return (1);
}
});
/**
 * First of the 8 bit value is the cell-state
 */
conways_game_of_life.bitbit.set_cell_state = (function conways_game_of_life$bitbit$set_cell_state(uint_8_value,cell_state){
return conways_game_of_life.bitbit.set_bit(uint_8_value,(0),cell_state);
});
conways_game_of_life.bitbit.get_cell_state = (function conways_game_of_life$bitbit$get_cell_state(cell){
return conways_game_of_life.bitbit.get_bit(cell,(0));
});
conways_game_of_life.bitbit.get_cell = (function conways_game_of_life$bitbit$get_cell(view,i){
return (view[i]);
});
conways_game_of_life.bitbit.value__GT_binary = (function conways_game_of_life$bitbit$value__GT_binary(v){
return v.toString((2));
});
conways_game_of_life.bitbit.two_d__GT_one_d = (function conways_game_of_life$bitbit$two_d__GT_one_d(x,y,w){
return ((w * y) + x);
});
conways_game_of_life.bitbit.one_d__GT_two_d = (function conways_game_of_life$bitbit$one_d__GT_two_d(i,w){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod(i,w),(function (){var G__61794 = (i / w);
return Math.floor(G__61794);
})()], null);
});
conways_game_of_life.bitbit.alive_mask = (1);
conways_game_of_life.bitbit.alive_QMARK_ = (function conways_game_of_life$bitbit$alive_QMARK_(cell){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cell & conways_game_of_life.bitbit.alive_mask),(1));
});
conways_game_of_life.bitbit.world_width = (function conways_game_of_life$bitbit$world_width(view){
var G__61795 = view.length;
return Math.sqrt(G__61795);
});
conways_game_of_life.bitbit.dd = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null);
conways_game_of_life.bitbit.get_neighbourhood_coordinates = (function conways_game_of_life$bitbit$get_neighbourhood_coordinates(x,y){
var iter__4582__auto__ = (function conways_game_of_life$bitbit$get_neighbourhood_coordinates_$_iter__61796(s__61797){
return (new cljs.core.LazySeq(null,(function (){
var s__61797__$1 = s__61797;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61797__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var dx = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__61797__$1,dx,xs__6292__auto__,temp__5735__auto__){
return (function conways_game_of_life$bitbit$get_neighbourhood_coordinates_$_iter__61796_$_iter__61798(s__61799){
return (new cljs.core.LazySeq(null,((function (s__61797__$1,dx,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__61799__$1 = s__61799;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__61799__$1);
if(temp__5735__auto____$1){
var s__61799__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__61799__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__61799__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__61801 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__61800 = (0);
while(true){
if((i__61800 < size__4581__auto__)){
var dy = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__61800);
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dx,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dy,(0))))))){
cljs.core.chunk_append(b__61801,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null));

var G__61835 = (i__61800 + (1));
i__61800 = G__61835;
continue;
} else {
var G__61836 = (i__61800 + (1));
i__61800 = G__61836;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61801),conways_game_of_life$bitbit$get_neighbourhood_coordinates_$_iter__61796_$_iter__61798(cljs.core.chunk_rest(s__61799__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61801),null);
}
} else {
var dy = cljs.core.first(s__61799__$2);
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dx,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dy,(0))))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null),conways_game_of_life$bitbit$get_neighbourhood_coordinates_$_iter__61796_$_iter__61798(cljs.core.rest(s__61799__$2)));
} else {
var G__61837 = cljs.core.rest(s__61799__$2);
s__61799__$1 = G__61837;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__61797__$1,dx,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__61797__$1,dx,xs__6292__auto__,temp__5735__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(conways_game_of_life.bitbit.dd));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,conways_game_of_life$bitbit$get_neighbourhood_coordinates_$_iter__61796(cljs.core.rest(s__61797__$1)));
} else {
var G__61838 = cljs.core.rest(s__61797__$1);
s__61797__$1 = G__61838;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(conways_game_of_life.bitbit.dd);
});
conways_game_of_life.bitbit.dec_neighbour = (function conways_game_of_life$bitbit$dec_neighbour(cell){
return (cell - (2));
});
conways_game_of_life.bitbit.inc_neighbour = (function conways_game_of_life$bitbit$inc_neighbour(cell){
return (cell + (2));
});
conways_game_of_life.bitbit.wrap = (function conways_game_of_life$bitbit$wrap(a,size){
return cljs.core.mod((a + size),size);
});
conways_game_of_life.bitbit.pprint_view = (function conways_game_of_life$bitbit$pprint_view(view){
var w = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__61802,i){
var vec__61803 = p__61802;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61803,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61803,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(i,conways_game_of_life.bitbit.world_width(view)),(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1((r + (1)))),[" [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((view[i]) >> (1))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(conways_game_of_life.bitbit.get_cell_state((view[i])))," , ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((view[i])),"]"].join(''))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(r))))," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((view[i]) >> (1))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(conways_game_of_life.bitbit.get_cell_state((view[i]))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((view[i])),"]"].join(''))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(view.length))));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,l){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.val(l)),"\n"].join('');
}),"",w)], 0));
});
conways_game_of_life.bitbit.neighbour_operator = (function conways_game_of_life$bitbit$neighbour_operator(view,neighbours,world_width,operator_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (view__$1,neighbour){
var nx = conways_game_of_life.bitbit.wrap(cljs.core.first(neighbour),world_width);
var ny = conways_game_of_life.bitbit.wrap(cljs.core.second(neighbour),world_width);
var ni = conways_game_of_life.bitbit.two_d__GT_one_d(nx,ny,world_width);
var cell = conways_game_of_life.bitbit.get_cell(view__$1,ni);
return conways_game_of_life.bitbit.write_value(view__$1,ni,(operator_fn.cljs$core$IFn$_invoke$arity$1 ? operator_fn.cljs$core$IFn$_invoke$arity$1(cell) : operator_fn.call(null,cell)));
}),view,neighbours);
});
conways_game_of_life.bitbit.dec_neighbours = (function conways_game_of_life$bitbit$dec_neighbours(view,neighbours,world_width){
return conways_game_of_life.bitbit.neighbour_operator(view,neighbours,world_width,(function (cell){
return conways_game_of_life.bitbit.dec_neighbour(cell);
}));
});
conways_game_of_life.bitbit.inc_neighbours = (function conways_game_of_life$bitbit$inc_neighbours(view,neighbours,world_width){
return conways_game_of_life.bitbit.neighbour_operator(view,neighbours,world_width,(function (cell){
return conways_game_of_life.bitbit.inc_neighbour(cell);
}));
});
conways_game_of_life.bitbit.alive_neighbours = (function conways_game_of_life$bitbit$alive_neighbours(view,neighbours){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (c,n){
var w = conways_game_of_life.bitbit.world_width(view);
var x = conways_game_of_life.bitbit.wrap(cljs.core.first(n),w);
var y = conways_game_of_life.bitbit.wrap(cljs.core.second(n),w);
if(conways_game_of_life.bitbit.alive_QMARK_(conways_game_of_life.bitbit.get_cell(view,conways_game_of_life.bitbit.two_d__GT_one_d(x,y,w)))){
return (c + (1));
} else {
return c;
}
}),(0),neighbours);
});
/**
 * Set the cell state to 0 and decrement the counter for each neighbour.
 */
conways_game_of_life.bitbit.kill_cell = (function conways_game_of_life$bitbit$kill_cell(view,cell,i){
var w = conways_game_of_life.bitbit.world_width(view);
var vec__61806 = conways_game_of_life.bitbit.one_d__GT_two_d(i,w);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61806,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61806,(1),null);
var neighbours = conways_game_of_life.bitbit.get_neighbourhood_coordinates(x,y);
var alive_c = conways_game_of_life.bitbit.alive_neighbours(view,neighbours);
return conways_game_of_life.bitbit.dec_neighbours(conways_game_of_life.bitbit.write_value(view,i,conways_game_of_life.bitbit.set_cell_state((alive_c << (1)),(0))),neighbours,w);
});
/**
 * Set the cell to 1 and increment the counter for each neighbour.
 */
conways_game_of_life.bitbit.awake_cell = (function conways_game_of_life$bitbit$awake_cell(view,i){
var w = conways_game_of_life.bitbit.world_width(view);
var vec__61809 = conways_game_of_life.bitbit.one_d__GT_two_d(i,w);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61809,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61809,(1),null);
var neighbours = conways_game_of_life.bitbit.get_neighbourhood_coordinates(x,y);
var alive_c = conways_game_of_life.bitbit.alive_neighbours(view,neighbours);
return conways_game_of_life.bitbit.inc_neighbours(conways_game_of_life.bitbit.write_value(view,i,conways_game_of_life.bitbit.set_cell_state((alive_c << (1)),(1))),neighbours,w);
});
conways_game_of_life.bitbit.step = (function conways_game_of_life$bitbit$step(mutating_view){
var fixed_view_61850 = mutating_view.slice();
var a__4663__auto___61851 = mutating_view;
var l__4664__auto___61852 = a__4663__auto___61851.length;
var i_61853 = (0);
var __61854 = (0);
while(true){
if((i_61853 < l__4664__auto___61852)){
var G__61855 = (i_61853 + (1));
var G__61856 = (function (){var cell = conways_game_of_life.bitbit.get_cell(fixed_view_61850,i_61853);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cell,(0))){
var c = (cell >> (1));
if(conways_game_of_life.bitbit.alive_QMARK_(cell)){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,(2))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,(3))))){
return conways_game_of_life.bitbit.kill_cell(mutating_view,cell,i_61853);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,(3))){
return conways_game_of_life.bitbit.awake_cell(mutating_view,i_61853);
} else {
return null;
}
}
} else {
return null;
}
})();
i_61853 = G__61855;
__61854 = G__61856;
continue;
} else {
}
break;
}

return mutating_view;
});
/**
 * `pattern` list of tuples with x,y coordinates,
 *   assign these coordinates into the `view` to turn these
 *   cells alive. Assume the world is square
 */
conways_game_of_life.bitbit.pattern__GT_view = (function conways_game_of_life$bitbit$pattern__GT_view(pattern,view){
var w_61864 = conways_game_of_life.bitbit.world_width(view);
var view_61865__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (view_61865__$1,p__61812){
var vec__61813 = p__61812;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61813,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61813,(1),null);
var i = conways_game_of_life.bitbit.two_d__GT_one_d(x,y,w_61864);
return conways_game_of_life.bitbit.write_value(view_61865__$1,i,conways_game_of_life.bitbit.set_cell_state(view_61865__$1,(1)));
}),view,pattern);
var fixed_view_61866 = view_61865__$1.slice();
var seq__61816_61871 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(view_61865__$1.length));
var chunk__61817_61872 = null;
var count__61818_61873 = (0);
var i__61819_61874 = (0);
while(true){
if((i__61819_61874 < count__61818_61873)){
var i_61876 = chunk__61817_61872.cljs$core$IIndexed$_nth$arity$2(null,i__61819_61874);
var cell_61879 = conways_game_of_life.bitbit.get_cell(fixed_view_61866,i_61876);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_61879,(1))){
var vec__61826_61880 = conways_game_of_life.bitbit.one_d__GT_two_d(i_61876,w_61864);
var x_61881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61826_61880,(0),null);
var y_61882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61826_61880,(1),null);
var n_61883 = conways_game_of_life.bitbit.get_neighbourhood_coordinates(x_61881,y_61882);
conways_game_of_life.bitbit.inc_neighbours(view_61865__$1,n_61883,w_61864);
} else {
}


var G__61884 = seq__61816_61871;
var G__61885 = chunk__61817_61872;
var G__61886 = count__61818_61873;
var G__61887 = (i__61819_61874 + (1));
seq__61816_61871 = G__61884;
chunk__61817_61872 = G__61885;
count__61818_61873 = G__61886;
i__61819_61874 = G__61887;
continue;
} else {
var temp__5735__auto___61890 = cljs.core.seq(seq__61816_61871);
if(temp__5735__auto___61890){
var seq__61816_61891__$1 = temp__5735__auto___61890;
if(cljs.core.chunked_seq_QMARK_(seq__61816_61891__$1)){
var c__4609__auto___61893 = cljs.core.chunk_first(seq__61816_61891__$1);
var G__61895 = cljs.core.chunk_rest(seq__61816_61891__$1);
var G__61896 = c__4609__auto___61893;
var G__61897 = cljs.core.count(c__4609__auto___61893);
var G__61898 = (0);
seq__61816_61871 = G__61895;
chunk__61817_61872 = G__61896;
count__61818_61873 = G__61897;
i__61819_61874 = G__61898;
continue;
} else {
var i_61900 = cljs.core.first(seq__61816_61891__$1);
var cell_61901 = conways_game_of_life.bitbit.get_cell(fixed_view_61866,i_61900);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_61901,(1))){
var vec__61829_61902 = conways_game_of_life.bitbit.one_d__GT_two_d(i_61900,w_61864);
var x_61903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61829_61902,(0),null);
var y_61904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61829_61902,(1),null);
var n_61905 = conways_game_of_life.bitbit.get_neighbourhood_coordinates(x_61903,y_61904);
conways_game_of_life.bitbit.inc_neighbours(view_61865__$1,n_61905,w_61864);
} else {
}


var G__61906 = cljs.core.next(seq__61816_61891__$1);
var G__61907 = null;
var G__61908 = (0);
var G__61909 = (0);
seq__61816_61871 = G__61906;
chunk__61817_61872 = G__61907;
count__61818_61873 = G__61908;
i__61819_61874 = G__61909;
continue;
}
} else {
}
}
break;
}

return view;
});
/**
 * Returns the alive cells as x,y coordinates, dead ones are excluded
 */
conways_game_of_life.bitbit.view__GT_pattern = (function conways_game_of_life$bitbit$view__GT_pattern(view){
var pattern = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var w = conways_game_of_life.bitbit.world_width(view);
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (pattern__$1,i){
var s = conways_game_of_life.bitbit.get_cell_state(conways_game_of_life.bitbit.get_cell(view,i));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),s)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(pattern__$1,conways_game_of_life.bitbit.one_d__GT_two_d(i,w));
} else {
return pattern__$1;
}
}),pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$1(view.length)));
});

//# sourceMappingURL=conways_game_of_life.bitbit.js.map
