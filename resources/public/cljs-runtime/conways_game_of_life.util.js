goog.provide('conways_game_of_life.util');
goog.require('cljs.core');
conways_game_of_life.util.get_state = (function conways_game_of_life$util$get_state(app_state_atom){
return cljs.core.last(new cljs.core.Keyword(null,"states","states",1389013542).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_state_atom)));
});
conways_game_of_life.util.vec2d = (function conways_game_of_life$util$vec2d(rows,cols,init){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (y){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return (init.cljs$core$IFn$_invoke$arity$2 ? init.cljs$core$IFn$_invoke$arity$2(x,y) : init.call(null,x,y));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(rows));
});
conways_game_of_life.util.pseudo_random = (function conways_game_of_life$util$pseudo_random(seed){
var x = ((function (){var G__31517 = (seed + (1));
return Math.sin(G__31517);
})() * (10000));
return (x - Math.floor(x));
});
conways_game_of_life.util.random_int = (function conways_game_of_life$util$random_int(seed,max){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conways_game_of_life.util.pseudo_random(seed),(function (){var G__31518 = cljs.core.mod(seed,max);
return Math.round(G__31518);
})()], null);
});
conways_game_of_life.util.next_seed = (function conways_game_of_life$util$next_seed(seed,max){
var vec__31519 = conways_game_of_life.util.random_int(seed,max);
var seed__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31519,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31519,(1),null);
return seed__$1;
});
conways_game_of_life.util.set_initial_shape = (function conways_game_of_life$util$set_initial_shape(grid,shape){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (grid__$1,p__31522){
var vec__31523 = p__31522;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31523,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31523,(1),null);
return cljs.core.assoc_in(grid__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x,new cljs.core.Keyword(null,"cell-state","cell-state",-1663039005)], null),(1));
}),grid,shape);
});
conways_game_of_life.util.running_QMARK_ = (function conways_game_of_life$util$running_QMARK_(app_state_atom){
return new cljs.core.Keyword(null,"running?","running?",-257884763).cljs$core$IFn$_invoke$arity$1(conways_game_of_life.util.get_state(app_state_atom));
});

//# sourceMappingURL=conways_game_of_life.util.js.map
