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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod(i,w),(function (){var G__40573 = (i / w);
return Math.floor(G__40573);
})()], null);
});
conways_game_of_life.bitbit.alive_mask = (1);
conways_game_of_life.bitbit.alive_QMARK_ = (function conways_game_of_life$bitbit$alive_QMARK_(cell){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cell & conways_game_of_life.bitbit.alive_mask),(1));
});
conways_game_of_life.bitbit.world_width = (function conways_game_of_life$bitbit$world_width(view){
var G__40574 = view.length;
return Math.sqrt(G__40574);
});
conways_game_of_life.bitbit.dd = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null);
conways_game_of_life.bitbit.get_neighbourhood_coordinates = (function conways_game_of_life$bitbit$get_neighbourhood_coordinates(x,y){
var iter__4582__auto__ = (function conways_game_of_life$bitbit$get_neighbourhood_coordinates_$_iter__40575(s__40576){
return (new cljs.core.LazySeq(null,(function (){
var s__40576__$1 = s__40576;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40576__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var dx = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__40576__$1,dx,xs__6292__auto__,temp__5735__auto__){
return (function conways_game_of_life$bitbit$get_neighbourhood_coordinates_$_iter__40575_$_iter__40577(s__40578){
return (new cljs.core.LazySeq(null,((function (s__40576__$1,dx,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__40578__$1 = s__40578;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40578__$1);
if(temp__5735__auto____$1){
var s__40578__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40578__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__40578__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__40580 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__40579 = (0);
while(true){
if((i__40579 < size__4581__auto__)){
var dy = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__40579);
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dx,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dy,(0))))))){
cljs.core.chunk_append(b__40580,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null));

var G__40611 = (i__40579 + (1));
i__40579 = G__40611;
continue;
} else {
var G__40612 = (i__40579 + (1));
i__40579 = G__40612;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40580),conways_game_of_life$bitbit$get_neighbourhood_coordinates_$_iter__40575_$_iter__40577(cljs.core.chunk_rest(s__40578__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40580),null);
}
} else {
var dy = cljs.core.first(s__40578__$2);
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dx,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dy,(0))))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null),conways_game_of_life$bitbit$get_neighbourhood_coordinates_$_iter__40575_$_iter__40577(cljs.core.rest(s__40578__$2)));
} else {
var G__40613 = cljs.core.rest(s__40578__$2);
s__40578__$1 = G__40613;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__40576__$1,dx,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__40576__$1,dx,xs__6292__auto__,temp__5735__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(conways_game_of_life.bitbit.dd));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,conways_game_of_life$bitbit$get_neighbourhood_coordinates_$_iter__40575(cljs.core.rest(s__40576__$1)));
} else {
var G__40614 = cljs.core.rest(s__40576__$1);
s__40576__$1 = G__40614;
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
var w = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__40581,i){
var vec__40582 = p__40581;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40582,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40582,(1),null);
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
var vec__40585 = conways_game_of_life.bitbit.one_d__GT_two_d(i,w);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40585,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40585,(1),null);
var neighbours = conways_game_of_life.bitbit.get_neighbourhood_coordinates(x,y);
var alive_c = conways_game_of_life.bitbit.alive_neighbours(view,neighbours);
return conways_game_of_life.bitbit.dec_neighbours(conways_game_of_life.bitbit.write_value(view,i,conways_game_of_life.bitbit.set_cell_state((alive_c << (1)),(0))),neighbours,w);
});
/**
 * Set the cell to 1 and increment the counter for each neighbour.
 */
conways_game_of_life.bitbit.awake_cell = (function conways_game_of_life$bitbit$awake_cell(view,i){
var w = conways_game_of_life.bitbit.world_width(view);
var vec__40588 = conways_game_of_life.bitbit.one_d__GT_two_d(i,w);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40588,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40588,(1),null);
var neighbours = conways_game_of_life.bitbit.get_neighbourhood_coordinates(x,y);
var alive_c = conways_game_of_life.bitbit.alive_neighbours(view,neighbours);
return conways_game_of_life.bitbit.inc_neighbours(conways_game_of_life.bitbit.write_value(view,i,conways_game_of_life.bitbit.set_cell_state((alive_c << (1)),(1))),neighbours,w);
});
conways_game_of_life.bitbit.step = (function conways_game_of_life$bitbit$step(mutating_view){
var fixed_view_40619 = mutating_view.slice();
var a__4663__auto___40621 = mutating_view;
var l__4664__auto___40622 = a__4663__auto___40621.length;
var i_40624 = (0);
var __40625 = (0);
while(true){
if((i_40624 < l__4664__auto___40622)){
var G__40626 = (i_40624 + (1));
var G__40627 = (function (){var cell = conways_game_of_life.bitbit.get_cell(fixed_view_40619,i_40624);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cell,(0))){
var c = (cell >> (1));
if(conways_game_of_life.bitbit.alive_QMARK_(cell)){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,(2))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,(3))))){
return conways_game_of_life.bitbit.kill_cell(mutating_view,cell,i_40624);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,(3))){
return conways_game_of_life.bitbit.awake_cell(mutating_view,i_40624);
} else {
return null;
}
}
} else {
return null;
}
})();
i_40624 = G__40626;
__40625 = G__40627;
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
var w_40629 = conways_game_of_life.bitbit.world_width(view);
var view_40630__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (view_40630__$1,p__40591){
var vec__40592 = p__40591;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40592,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40592,(1),null);
var i = conways_game_of_life.bitbit.two_d__GT_one_d(x,y,w_40629);
return conways_game_of_life.bitbit.write_value(view_40630__$1,i,conways_game_of_life.bitbit.set_cell_state(view_40630__$1,(1)));
}),view,pattern);
var fixed_view_40631 = view_40630__$1.slice();
var seq__40595_40633 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(view_40630__$1.length));
var chunk__40596_40634 = null;
var count__40597_40635 = (0);
var i__40598_40636 = (0);
while(true){
if((i__40598_40636 < count__40597_40635)){
var i_40637 = chunk__40596_40634.cljs$core$IIndexed$_nth$arity$2(null,i__40598_40636);
var vec__40605_40640 = conways_game_of_life.bitbit.one_d__GT_two_d(i_40637,w_40629);
var x_40641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40605_40640,(0),null);
var y_40642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40605_40640,(1),null);
var n_40643 = conways_game_of_life.bitbit.get_neighbourhood_coordinates(x_40641,y_40642);
var cell_40644 = conways_game_of_life.bitbit.get_cell(fixed_view_40631,i_40637);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_40644,(1))){
conways_game_of_life.bitbit.inc_neighbours(view_40630__$1,n_40643,w_40629);
} else {
}


var G__40645 = seq__40595_40633;
var G__40646 = chunk__40596_40634;
var G__40647 = count__40597_40635;
var G__40648 = (i__40598_40636 + (1));
seq__40595_40633 = G__40645;
chunk__40596_40634 = G__40646;
count__40597_40635 = G__40647;
i__40598_40636 = G__40648;
continue;
} else {
var temp__5735__auto___40649 = cljs.core.seq(seq__40595_40633);
if(temp__5735__auto___40649){
var seq__40595_40650__$1 = temp__5735__auto___40649;
if(cljs.core.chunked_seq_QMARK_(seq__40595_40650__$1)){
var c__4609__auto___40651 = cljs.core.chunk_first(seq__40595_40650__$1);
var G__40652 = cljs.core.chunk_rest(seq__40595_40650__$1);
var G__40653 = c__4609__auto___40651;
var G__40654 = cljs.core.count(c__4609__auto___40651);
var G__40655 = (0);
seq__40595_40633 = G__40652;
chunk__40596_40634 = G__40653;
count__40597_40635 = G__40654;
i__40598_40636 = G__40655;
continue;
} else {
var i_40656 = cljs.core.first(seq__40595_40650__$1);
var vec__40608_40657 = conways_game_of_life.bitbit.one_d__GT_two_d(i_40656,w_40629);
var x_40658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40608_40657,(0),null);
var y_40659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40608_40657,(1),null);
var n_40660 = conways_game_of_life.bitbit.get_neighbourhood_coordinates(x_40658,y_40659);
var cell_40661 = conways_game_of_life.bitbit.get_cell(fixed_view_40631,i_40656);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_40661,(1))){
conways_game_of_life.bitbit.inc_neighbours(view_40630__$1,n_40660,w_40629);
} else {
}


var G__40664 = cljs.core.next(seq__40595_40650__$1);
var G__40665 = null;
var G__40666 = (0);
var G__40667 = (0);
seq__40595_40633 = G__40664;
chunk__40596_40634 = G__40665;
count__40597_40635 = G__40666;
i__40598_40636 = G__40667;
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
