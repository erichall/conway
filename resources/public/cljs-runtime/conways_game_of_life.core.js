goog.provide('conways_game_of_life.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('reagent.dom');
conways_game_of_life.core.blinker = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null);
conways_game_of_life.core.vec2d = (function conways_game_of_life$core$vec2d(rows,cols,init){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (y){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return (init.cljs$core$IFn$_invoke$arity$2 ? init.cljs$core$IFn$_invoke$arity$2(x,y) : init.call(null,x,y));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(rows));
});
conways_game_of_life.core.pseudo_random = (function conways_game_of_life$core$pseudo_random(seed){
var x = ((function (){var G__57242 = (seed + (1));
return Math.sin(G__57242);
})() * (10000));
return (x - Math.floor(x));
});
conways_game_of_life.core.random_int = (function conways_game_of_life$core$random_int(seed,max){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conways_game_of_life.core.pseudo_random(seed),(function (){var G__57243 = cljs.core.mod(seed,max);
return Math.round(G__57243);
})()], null);
});
conways_game_of_life.core.next_seed = (function conways_game_of_life$core$next_seed(seed,max){
var vec__57244 = conways_game_of_life.core.random_int(seed,max);
var seed__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57244,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57244,(1),null);
return seed__$1;
});
conways_game_of_life.core.seed_grid = (function conways_game_of_life$core$seed_grid(p__57247){
var map__57248 = p__57247;
var map__57248__$1 = (((((!((map__57248 == null))))?(((((map__57248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57248):map__57248);
var state = map__57248__$1;
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57248__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57248__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var seed_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(seed);
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"grid","grid",402978600),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (cell){
var vec__57250 = conways_game_of_life.core.random_int(cljs.core.deref(seed_atom),(1));
var seed__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57250,(0),null);
var random = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57250,(1),null);
cljs.core.reset_BANG_(seed_atom,seed__$1);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"cell-state","cell-state",-1663039005),random);
}),i);
}),grid));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"seed","seed",68613327),cljs.core.deref(seed_atom));
});
conways_game_of_life.core.set_initial_shape = (function conways_game_of_life$core$set_initial_shape(grid,shape){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (grid__$1,p__57253){
var vec__57254 = p__57253;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57254,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57254,(1),null);
return cljs.core.assoc_in(grid__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x,new cljs.core.Keyword(null,"cell-state","cell-state",-1663039005)], null),(1));
}),grid,shape);
});
if((typeof conways_game_of_life !== 'undefined') && (typeof conways_game_of_life.core !== 'undefined') && (typeof conways_game_of_life.core.app_state_atom !== 'undefined')){
} else {
conways_game_of_life.core.app_state_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
conways_game_of_life.core.grid_size = (50);
conways_game_of_life.core.initial_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),(30),new cljs.core.Keyword(null,"grid-size","grid-size",2138480144),conways_game_of_life.core.grid_size,new cljs.core.Keyword(null,"grid","grid",402978600),conways_game_of_life.core.set_initial_shape(conways_game_of_life.core.vec2d((conways_game_of_life.core.grid_size / (2)),(conways_game_of_life.core.grid_size / (2)),(function (x,y){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"cell-state","cell-state",-1663039005),(0)], null);
})),conways_game_of_life.core.blinker),new cljs.core.Keyword(null,"seed","seed",68613327),(1),new cljs.core.Keyword(null,"initial-seed?","initial-seed?",-212693007),false,new cljs.core.Keyword(null,"running?","running?",-257884763),false], null)], null)], null);
conways_game_of_life.core.get_state = (function conways_game_of_life$core$get_state(app_state_atom){
return cljs.core.last(new cljs.core.Keyword(null,"states","states",1389013542).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_state_atom)));
});
conways_game_of_life.core.pprint_grid = (function conways_game_of_life$core$pprint_grid(grid){
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(grid);
});
conways_game_of_life.core.px = (function conways_game_of_life$core$px(v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"px"].join('');
});
conways_game_of_life.core.wrap = (function conways_game_of_life$core$wrap(a,max_a){
if((a < (0))){
return ((max_a - a) - (1));
} else {
if((a > max_a)){
return cljs.core.mod(a,(max_a + (1)));
} else {
return a;

}
}
});
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
conways_game_of_life.core.neighbours = (function conways_game_of_life$core$neighbours(grid,x,y){
var rows = (cljs.core.count(grid) - (1));
var cols = (cljs.core.count(cljs.core.first(grid)) - (1));
var iter__4582__auto__ = (function conways_game_of_life$core$neighbours_$_iter__57257(s__57258){
return (new cljs.core.LazySeq(null,(function (){
var s__57258__$1 = s__57258;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57258__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var i = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__57258__$1,i,xs__6292__auto__,temp__5735__auto__,rows,cols){
return (function conways_game_of_life$core$neighbours_$_iter__57257_$_iter__57259(s__57260){
return (new cljs.core.LazySeq(null,((function (s__57258__$1,i,xs__6292__auto__,temp__5735__auto__,rows,cols){
return (function (){
var s__57260__$1 = s__57260;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__57260__$1);
if(temp__5735__auto____$1){
var s__57260__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57260__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57260__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57262 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57261 = (0);
while(true){
if((i__57261 < size__4581__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57261);
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,x)))))){
cljs.core.chunk_append(b__57262,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conways_game_of_life.core.wrap(i,rows),conways_game_of_life.core.wrap(j,cols)], null));

var G__57309 = (i__57261 + (1));
i__57261 = G__57309;
continue;
} else {
var G__57310 = (i__57261 + (1));
i__57261 = G__57310;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57262),conways_game_of_life$core$neighbours_$_iter__57257_$_iter__57259(cljs.core.chunk_rest(s__57260__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57262),null);
}
} else {
var j = cljs.core.first(s__57260__$2);
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,x)))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conways_game_of_life.core.wrap(i,rows),conways_game_of_life.core.wrap(j,cols)], null),conways_game_of_life$core$neighbours_$_iter__57257_$_iter__57259(cljs.core.rest(s__57260__$2)));
} else {
var G__57311 = cljs.core.rest(s__57260__$2);
s__57260__$1 = G__57311;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__57258__$1,i,xs__6292__auto__,temp__5735__auto__,rows,cols))
,null,null));
});})(s__57258__$1,i,xs__6292__auto__,temp__5735__auto__,rows,cols))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((x - (1)),((2) + x))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,conways_game_of_life$core$neighbours_$_iter__57257(cljs.core.rest(s__57258__$1)));
} else {
var G__57312 = cljs.core.rest(s__57258__$1);
s__57258__$1 = G__57312;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((y - (1)),((2) + y)));
});
conways_game_of_life.core.alive_QMARK_ = (function conways_game_of_life$core$alive_QMARK_(cell_state){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cell_state);
});
conways_game_of_life.core.dead_QMARK_ = (function conways_game_of_life$core$dead_QMARK_(cell_state){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cell_state);
});
conways_game_of_life.core.world = (function conways_game_of_life$core$world(p__57263){
var map__57264 = p__57263;
var map__57264__$1 = (((((!((map__57264 == null))))?(((((map__57264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57264):map__57264);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57264__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__57266 = state;
var map__57266__$1 = (((((!((map__57266 == null))))?(((((map__57266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57266):map__57266);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57266__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var grid_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57266__$1,new cljs.core.Keyword(null,"grid-size","grid-size",2138480144));
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57266__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"inline-grid",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"1px",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),["repeat(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((grid_size / (2)) | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_size),"px)"].join(''),new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__57268){
var map__57269 = p__57268;
var map__57269__$1 = (((((!((map__57269 == null))))?(((((map__57269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57269):map__57269);
var cell_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57269__$1,new cljs.core.Keyword(null,"cell-state","cell-state",-1663039005));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57269__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57269__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"outline","outline",793464534),".5px solid lightgray",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px",new cljs.core.Keyword(null,"background","background",-863952629),((conways_game_of_life.core.alive_QMARK_(cell_state))?"black":"white"),new cljs.core.Keyword(null,"min-width","min-width",1926193728),conways_game_of_life.core.px(cell_size),new cljs.core.Keyword(null,"min-height","min-height",398480837),conways_game_of_life.core.px(cell_size)], null)], null)], null);
}),cljs.core.flatten(grid))], null);
});
conways_game_of_life.core.mutate_BANG_ = (function conways_game_of_life$core$mutate_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57313 = arguments.length;
var i__4790__auto___57314 = (0);
while(true){
if((i__4790__auto___57314 < len__4789__auto___57313)){
args__4795__auto__.push((arguments[i__4790__auto___57314]));

var G__57315 = (i__4790__auto___57314 + (1));
i__4790__auto___57314 = G__57315;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return conways_game_of_life.core.mutate_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(conways_game_of_life.core.mutate_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app_state_atom,pure_fn,mutate_args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app_state_atom,(function (app_state){
var current_state = cljs.core.last(new cljs.core.Keyword(null,"states","states",1389013542).cljs$core$IFn$_invoke$arity$1(app_state));
var next_state = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pure_fn,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(mutate_args,current_state));
if((!((next_state == null)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.Keyword(null,"states","states",1389013542),(function (states){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(states,next_state);
}));
} else {
return app_state;
}
}),conways_game_of_life.core.get_state(app_state_atom));
}));

(conways_game_of_life.core.mutate_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(conways_game_of_life.core.mutate_BANG_.cljs$lang$applyTo = (function (seq57271){
var G__57272 = cljs.core.first(seq57271);
var seq57271__$1 = cljs.core.next(seq57271);
var G__57273 = cljs.core.first(seq57271__$1);
var seq57271__$2 = cljs.core.next(seq57271__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57272,G__57273,seq57271__$2);
}));

conways_game_of_life.core.game_of_life = (function conways_game_of_life$core$game_of_life(p__57274){
var map__57275 = p__57274;
var map__57275__$1 = (((((!((map__57275 == null))))?(((((map__57275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57275):map__57275);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57275__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var trigger_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57275__$1,new cljs.core.Keyword(null,"trigger-event","trigger-event",772166906));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__57277 = new cljs.core.Keyword(null,"seed","seed",68613327);
return (trigger_event.cljs$core$IFn$_invoke$arity$1 ? trigger_event.cljs$core$IFn$_invoke$arity$1(G__57277) : trigger_event.call(null,G__57277));
})], null),"seed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__57278 = new cljs.core.Keyword(null,"tick","tick",-835886976);
return (trigger_event.cljs$core$IFn$_invoke$arity$1 ? trigger_event.cljs$core$IFn$_invoke$arity$1(G__57278) : trigger_event.call(null,G__57278));
})], null),"tick"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__57279 = new cljs.core.Keyword(null,"start","start",-355208981);
return (trigger_event.cljs$core$IFn$_invoke$arity$1 ? trigger_event.cljs$core$IFn$_invoke$arity$1(G__57279) : trigger_event.call(null,G__57279));
})], null),"start"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__57280 = new cljs.core.Keyword(null,"stop","stop",-2140911342);
return (trigger_event.cljs$core$IFn$_invoke$arity$1 ? trigger_event.cljs$core$IFn$_invoke$arity$1(G__57280) : trigger_event.call(null,G__57280));
})], null),"stop"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conways_game_of_life.core.world,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null)], null)], null);
});
conways_game_of_life.core.neighbours__GT_cell_states = (function conways_game_of_life$core$neighbours__GT_cell_states(grid,neighbours){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__57281){
var vec__57282 = p__57281;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57282,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57282,(1),null);
return new cljs.core.Keyword(null,"cell-state","cell-state",-1663039005).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),neighbours);
});
/**
 * 
 *   Any live cell with fewer than two live neighbours dies, as if by underpopulation.
 *   Any live cell with two or three live neighbours lives on to the next generation.
 *   Any live cell with more than three live neighbours dies, as if by overpopulation.
 *   Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
 *   
 */
conways_game_of_life.core.four_rule = (function conways_game_of_life$core$four_rule(grid,cell){
var map__57285 = cell;
var map__57285__$1 = (((((!((map__57285 == null))))?(((((map__57285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57285):map__57285);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57285__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57285__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cell_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57285__$1,new cljs.core.Keyword(null,"cell-state","cell-state",-1663039005));
var cell_states_sum = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,conways_game_of_life.core.neighbours__GT_cell_states(grid,conways_game_of_life.core.neighbours(grid,x,y)));
if(((conways_game_of_life.core.alive_QMARK_(cell_state)) && ((cell_states_sum < (2))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"cell-state","cell-state",-1663039005),(0));
} else {
if(((conways_game_of_life.core.alive_QMARK_(cell_state)) && ((cell_states_sum > (3))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"cell-state","cell-state",-1663039005),(0));
} else {
if(((conways_game_of_life.core.alive_QMARK_(cell_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_states_sum,(2))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_states_sum,(3))))))){
return cell;
} else {
if(((conways_game_of_life.core.dead_QMARK_(cell_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_states_sum,(3))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"cell-state","cell-state",-1663039005),(1));
} else {
return cell;

}
}
}
}
});
/**
 * 
 * if the sum of all nine fields in a given neighbourhood is three, the inner field state for the next generation will be life;
 * if the all-field sum is four, the inner field retains its current state;
 * and every other sum sets the inner field to death.
 * 
 */
conways_game_of_life.core.tick = (function conways_game_of_life$core$tick(p__57287){
var map__57288 = p__57287;
var map__57288__$1 = (((((!((map__57288 == null))))?(((((map__57288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57288):map__57288);
var state = map__57288__$1;
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"grid","grid",402978600),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__57290){
var map__57291 = p__57290;
var map__57291__$1 = (((((!((map__57291 == null))))?(((((map__57291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57291):map__57291);
var cell = map__57291__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57291__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57291__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cell_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57291__$1,new cljs.core.Keyword(null,"cell-state","cell-state",-1663039005));
var cell_states_sum = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,conways_game_of_life.core.neighbours__GT_cell_states(grid,conways_game_of_life.core.neighbours(grid,x,y)));
var pred__57293 = cljs.core._EQ_;
var expr__57294 = cell_states_sum;
if(cljs.core.truth_((pred__57293.cljs$core$IFn$_invoke$arity$2 ? pred__57293.cljs$core$IFn$_invoke$arity$2((3),expr__57294) : pred__57293.call(null,(3),expr__57294)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"cell-state","cell-state",-1663039005),(1));
} else {
if(cljs.core.truth_((pred__57293.cljs$core$IFn$_invoke$arity$2 ? pred__57293.cljs$core$IFn$_invoke$arity$2((4),expr__57294) : pred__57293.call(null,(4),expr__57294)))){
return cell;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"cell-state","cell-state",-1663039005),(0));
}
}
}),i);
}),grid));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"seed","seed",68613327),conways_game_of_life.core.next_seed(seed,(1)));
});
if((typeof conways_game_of_life !== 'undefined') && (typeof conways_game_of_life.core !== 'undefined') && (typeof conways_game_of_life.core.render_atom !== 'undefined')){
} else {
conways_game_of_life.core.render_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(conways_game_of_life.core.render_atom) == null)){
cljs.core.reset_BANG_(conways_game_of_life.core.render_atom,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"last-timestamp","last-timestamp",-2019388584),(0),new cljs.core.Keyword(null,"x-sec","x-sec",1252701052),(250),new cljs.core.Keyword(null,"delta","delta",108939957),(0),new cljs.core.Keyword(null,"fps","fps",683533296),(0)], null));
} else {
}
conways_game_of_life.core.simulate = (function conways_game_of_life$core$simulate(){
var id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return cljs.core.reset_BANG_(id,requestAnimationFrame((function conways_game_of_life$core$simulate_$_h(timestamp){
if(cljs.core.truth_(new cljs.core.Keyword(null,"running?","running?",-257884763).cljs$core$IFn$_invoke$arity$1(conways_game_of_life.core.get_state(conways_game_of_life.core.app_state_atom)))){
cljs.core.reset_BANG_(id,requestAnimationFrame(conways_game_of_life$core$simulate_$_h));

if(((timestamp - new cljs.core.Keyword(null,"last-timestamp","last-timestamp",-2019388584).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(conways_game_of_life.core.render_atom))) >= new cljs.core.Keyword(null,"x-sec","x-sec",1252701052).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(conways_game_of_life.core.render_atom)))){
var delta_57316 = ((timestamp - new cljs.core.Keyword(null,"last-timestamp","last-timestamp",-2019388584).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(conways_game_of_life.core.render_atom))) / (1000));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(conways_game_of_life.core.render_atom,cljs.core.assoc,new cljs.core.Keyword(null,"last-timestamp","last-timestamp",-2019388584),timestamp);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(conways_game_of_life.core.render_atom,cljs.core.assoc,new cljs.core.Keyword(null,"delta","delta",108939957),((1) / delta_57316));

return conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,conways_game_of_life.core.tick);
} else {
return null;
}
} else {
return null;
}
})));
});
conways_game_of_life.core.handle_event_BANG_ = (function conways_game_of_life$core$handle_event_BANG_(var_args){
var G__57297 = arguments.length;
switch (G__57297) {
case 2:
return conways_game_of_life.core.handle_event_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return conways_game_of_life.core.handle_event_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(conways_game_of_life.core.handle_event_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (name,data){
var pred__57298 = cljs.core._EQ_;
var expr__57299 = name;
if(cljs.core.truth_((function (){var G__57301 = new cljs.core.Keyword(null,"tick","tick",-835886976);
var G__57302 = expr__57299;
return (pred__57298.cljs$core$IFn$_invoke$arity$2 ? pred__57298.cljs$core$IFn$_invoke$arity$2(G__57301,G__57302) : pred__57298.call(null,G__57301,G__57302));
})())){
return conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,conways_game_of_life.core.tick);
} else {
if(cljs.core.truth_((function (){var G__57303 = new cljs.core.Keyword(null,"seed","seed",68613327);
var G__57304 = expr__57299;
return (pred__57298.cljs$core$IFn$_invoke$arity$2 ? pred__57298.cljs$core$IFn$_invoke$arity$2(G__57303,G__57304) : pred__57298.call(null,G__57303,G__57304));
})())){
return conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,conways_game_of_life.core.seed_grid);
} else {
if(cljs.core.truth_((function (){var G__57305 = new cljs.core.Keyword(null,"start","start",-355208981);
var G__57306 = expr__57299;
return (pred__57298.cljs$core$IFn$_invoke$arity$2 ? pred__57298.cljs$core$IFn$_invoke$arity$2(G__57305,G__57306) : pred__57298.call(null,G__57305,G__57306));
})())){
return conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,(function (state){
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"running?","running?",-257884763),true);
requestAnimationFrame(conways_game_of_life.core.simulate);

return state__$1;
}));
} else {
if(cljs.core.truth_((function (){var G__57307 = new cljs.core.Keyword(null,"stop","stop",-2140911342);
var G__57308 = expr__57299;
return (pred__57298.cljs$core$IFn$_invoke$arity$2 ? pred__57298.cljs$core$IFn$_invoke$arity$2(G__57307,G__57308) : pred__57298.call(null,G__57307,G__57308));
})())){
return conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"running?","running?",-257884763),false);
}));
} else {
return null;
}
}
}
}
}));

(conways_game_of_life.core.handle_event_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (name){
return conways_game_of_life.core.handle_event_BANG_.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(conways_game_of_life.core.handle_event_BANG_.cljs$lang$maxFixedArity = 2);

conways_game_of_life.core.render = (function conways_game_of_life$core$render(state){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conways_game_of_life.core.game_of_life,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"trigger-event","trigger-event",772166906),conways_game_of_life.core.handle_event_BANG_], null)], null),document.getElementById("app"));
});
if((cljs.core.deref(conways_game_of_life.core.app_state_atom) == null)){
cljs.core.reset_BANG_(conways_game_of_life.core.app_state_atom,conways_game_of_life.core.initial_state);

if(cljs.core.truth_(new cljs.core.Keyword(null,"initial-seed?","initial-seed?",-212693007).cljs$core$IFn$_invoke$arity$1(conways_game_of_life.core.get_state(conways_game_of_life.core.app_state_atom)))){
conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,conways_game_of_life.core.seed_grid);
} else {
}

cljs.core.add_watch(conways_game_of_life.core.app_state_atom,new cljs.core.Keyword(null,"game-loop","game-loop",-981126027),(function (_,___$1,___$2,___$3){
return conways_game_of_life.core.render(conways_game_of_life.core.get_state(conways_game_of_life.core.app_state_atom));
}));
} else {
}
conways_game_of_life.core.init_BANG_ = (function conways_game_of_life$core$init_BANG_(){
return conways_game_of_life.core.render(conways_game_of_life.core.get_state(conways_game_of_life.core.app_state_atom));
});
conways_game_of_life.core.reload_BANG_ = (function conways_game_of_life$core$reload_BANG_(){
return conways_game_of_life.core.render(conways_game_of_life.core.get_state(conways_game_of_life.core.app_state_atom));
});

//# sourceMappingURL=conways_game_of_life.core.js.map
