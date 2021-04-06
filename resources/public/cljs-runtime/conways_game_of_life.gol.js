goog.provide('conways_game_of_life.gol');
goog.require('cljs.core');
conways_game_of_life.gol.wrap = (function conways_game_of_life$gol$wrap(a,size){
return cljs.core.mod((a + size),size);
});
conways_game_of_life.gol.dx = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null);
conways_game_of_life.gol.dy = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null);
/**
 * Find the 8 members of a given x,y coordinates.
 * The grid is considered to be a toroidal so edges wraps around.
 * 
 * XXX
 * X.X
 * XXX
 * 
 * 
 */
conways_game_of_life.gol.neighbours = (function conways_game_of_life$gol$neighbours(size,toroidal_QMARK_,p__31085){
var vec__31086 = p__31085;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31086,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31086,(1),null);
var iter__4582__auto__ = (function conways_game_of_life$gol$neighbours_$_iter__31089(s__31090){
return (new cljs.core.LazySeq(null,(function (){
var s__31090__$1 = s__31090;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__31090__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var dx = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__31090__$1,dx,xs__6292__auto__,temp__5735__auto__,vec__31086,x,y){
return (function conways_game_of_life$gol$neighbours_$_iter__31089_$_iter__31091(s__31092){
return (new cljs.core.LazySeq(null,((function (s__31090__$1,dx,xs__6292__auto__,temp__5735__auto__,vec__31086,x,y){
return (function (){
var s__31092__$1 = s__31092;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__31092__$1);
if(temp__5735__auto____$1){
var s__31092__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31092__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__31092__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__31094 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__31093 = (0);
while(true){
if((i__31093 < size__4581__auto__)){
var dy = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__31093);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null))))){
cljs.core.chunk_append(b__31094,(cljs.core.truth_(toroidal_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conways_game_of_life.gol.wrap((dx + x),size),conways_game_of_life.gol.wrap((dy + y),size)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + x),(dy + y)], null)));

var G__31108 = (i__31093 + (1));
i__31093 = G__31108;
continue;
} else {
var G__31109 = (i__31093 + (1));
i__31093 = G__31109;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31094),conways_game_of_life$gol$neighbours_$_iter__31089_$_iter__31091(cljs.core.chunk_rest(s__31092__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31094),null);
}
} else {
var dy = cljs.core.first(s__31092__$2);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null))))){
return cljs.core.cons((cljs.core.truth_(toroidal_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conways_game_of_life.gol.wrap((dx + x),size),conways_game_of_life.gol.wrap((dy + y),size)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + x),(dy + y)], null)),conways_game_of_life$gol$neighbours_$_iter__31089_$_iter__31091(cljs.core.rest(s__31092__$2)));
} else {
var G__31110 = cljs.core.rest(s__31092__$2);
s__31092__$1 = G__31110;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__31090__$1,dx,xs__6292__auto__,temp__5735__auto__,vec__31086,x,y))
,null,null));
});})(s__31090__$1,dx,xs__6292__auto__,temp__5735__auto__,vec__31086,x,y))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(conways_game_of_life.gol.dy));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,conways_game_of_life$gol$neighbours_$_iter__31089(cljs.core.rest(s__31090__$1)));
} else {
var G__31111 = cljs.core.rest(s__31090__$1);
s__31090__$1 = G__31111;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(conways_game_of_life.gol.dx);
});
conways_game_of_life.gol.inc_grid = (function conways_game_of_life$gol$inc_grid(p__31095){
var map__31096 = p__31095;
var map__31096__$1 = (((((!((map__31096 == null))))?(((((map__31096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31096):map__31096);
var state = map__31096__$1;
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31096__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var grid_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31096__$1,new cljs.core.Keyword(null,"grid-size","grid-size",2138480144));
var toroidal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31096__$1,new cljs.core.Keyword(null,"toroidal?","toroidal?",2099414314));
var size = (grid_size / (2));
var neighbours = (function (cell){
var n = conways_game_of_life.gol.neighbours(size,toroidal_QMARK_,cell);
return n;
});
return cljs.core.set((function (){var iter__4582__auto__ = (function conways_game_of_life$gol$inc_grid_$_iter__31098(s__31099){
return (new cljs.core.LazySeq(null,(function (){
var s__31099__$1 = s__31099;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__31099__$1);
if(temp__5735__auto__){
var s__31099__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31099__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__31099__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__31101 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__31100 = (0);
while(true){
if((i__31100 < size__4581__auto__)){
var vec__31102 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__31100);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31102,(0),null);
var n_neighbours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31102,(1),null);
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_neighbours,(3));
if(or__4185__auto__){
return or__4185__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_neighbours,(2))){
return (grid.cljs$core$IFn$_invoke$arity$1 ? grid.cljs$core$IFn$_invoke$arity$1(cell) : grid.call(null,cell));
} else {
return false;
}
}
})())){
cljs.core.chunk_append(b__31101,cell);

var G__31120 = (i__31100 + (1));
i__31100 = G__31120;
continue;
} else {
var G__31121 = (i__31100 + (1));
i__31100 = G__31121;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31101),conways_game_of_life$gol$inc_grid_$_iter__31098(cljs.core.chunk_rest(s__31099__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31101),null);
}
} else {
var vec__31105 = cljs.core.first(s__31099__$2);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31105,(0),null);
var n_neighbours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31105,(1),null);
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_neighbours,(3));
if(or__4185__auto__){
return or__4185__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_neighbours,(2))){
return (grid.cljs$core$IFn$_invoke$arity$1 ? grid.cljs$core$IFn$_invoke$arity$1(cell) : grid.call(null,cell));
} else {
return false;
}
}
})())){
return cljs.core.cons(cell,conways_game_of_life$gol$inc_grid_$_iter__31098(cljs.core.rest(s__31099__$2)));
} else {
var G__31128 = cljs.core.rest(s__31099__$2);
s__31099__$1 = G__31128;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(neighbours,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([grid], 0))));
})());
});

//# sourceMappingURL=conways_game_of_life.gol.js.map
