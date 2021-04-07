goog.provide('conways_game_of_life.core');
goog.require('cljs.core');
goog.require('conways_game_of_life.bitbit');
goog.require('conways_game_of_life.canvas');
goog.require('conways_game_of_life.shapes');
goog.require('conways_game_of_life.view');
goog.require('conways_game_of_life.gol');
goog.require('conways_game_of_life.hashlife');
goog.require('conways_game_of_life.util');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs.core.enable_console_print_BANG_();
if((typeof conways_game_of_life !== 'undefined') && (typeof conways_game_of_life.core !== 'undefined') && (typeof conways_game_of_life.core.render_atom !== 'undefined')){
} else {
conways_game_of_life.core.render_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(conways_game_of_life.core.render_atom) == null)){
cljs.core.reset_BANG_(conways_game_of_life.core.render_atom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-timestamp","last-timestamp",-2019388584),(0),new cljs.core.Keyword(null,"fps","fps",683533296),(0)], null));
} else {
}
if((typeof conways_game_of_life !== 'undefined') && (typeof conways_game_of_life.core !== 'undefined') && (typeof conways_game_of_life.core.app_state_atom !== 'undefined')){
} else {
conways_game_of_life.core.app_state_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
conways_game_of_life.core.grid_size = (160);
conways_game_of_life.core.initial_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"running?","running?",-257884763),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"toroidal?","toroidal?",2099414314),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"grid-size","grid-size",2138480144),new cljs.core.Keyword(null,"fps","fps",683533296),new cljs.core.Keyword(null,"world-width","world-width",1762701691),new cljs.core.Keyword(null,"view","view",1247994814)],[(2),false,new cljs.core.Keyword(null,"heavy","heavy",2126165008).cljs$core$IFn$_invoke$arity$1(conways_game_of_life.shapes.shapes),false,(1),conways_game_of_life.core.grid_size,(0),(512),null])], null)], null);
conways_game_of_life.core.mutate_BANG_ = (function conways_game_of_life$core$mutate_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62073 = arguments.length;
var i__4790__auto___62074 = (0);
while(true){
if((i__4790__auto___62074 < len__4789__auto___62073)){
args__4795__auto__.push((arguments[i__4790__auto___62074]));

var G__62075 = (i__4790__auto___62074 + (1));
i__4790__auto___62074 = G__62075;
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_state], null);
}));
} else {
return app_state;
}
}),conways_game_of_life.util.get_state(app_state_atom));
}));

(conways_game_of_life.core.mutate_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(conways_game_of_life.core.mutate_BANG_.cljs$lang$applyTo = (function (seq62032){
var G__62033 = cljs.core.first(seq62032);
var seq62032__$1 = cljs.core.next(seq62032);
var G__62034 = cljs.core.first(seq62032__$1);
var seq62032__$2 = cljs.core.next(seq62032__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62033,G__62034,seq62032__$2);
}));

conways_game_of_life.core.tick = (function conways_game_of_life$core$tick(p__62035){
var map__62036 = p__62035;
var map__62036__$1 = (((((!((map__62036 == null))))?(((((map__62036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62036):map__62036);
var state = map__62036__$1;
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62036__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"grid","grid",402978600),conways_game_of_life.gol.inc_grid(state));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"seed","seed",68613327),conways_game_of_life.util.next_seed(seed,(1)));
});
conways_game_of_life.core.simulate = (function conways_game_of_life$core$simulate(var_args){
var G__62039 = arguments.length;
switch (G__62039) {
case 2:
return conways_game_of_life.core.simulate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return conways_game_of_life.core.simulate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(conways_game_of_life.core.simulate.cljs$core$IFn$_invoke$arity$2 = (function (trigger_event,timestamp){
if(cljs.core.truth_(conways_game_of_life.util.running_QMARK_(conways_game_of_life.core.app_state_atom))){
var G__62040_62077 = new cljs.core.Keyword(null,"tick","tick",-835886976);
var G__62041_62078 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fps","fps",683533296),new cljs.core.Keyword(null,"fps","fps",683533296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(conways_game_of_life.core.render_atom))], null);
(trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__62040_62077,G__62041_62078) : trigger_event.call(null,G__62040_62077,G__62041_62078));

return requestAnimationFrame((function conways_game_of_life$core$raf_fn(timestamp__$1){
return conways_game_of_life.core.simulate.cljs$core$IFn$_invoke$arity$2(trigger_event,timestamp__$1);
}));
} else {
return null;
}
}));

(conways_game_of_life.core.simulate.cljs$core$IFn$_invoke$arity$1 = (function (trigger_event){
return conways_game_of_life.core.simulate.cljs$core$IFn$_invoke$arity$2(trigger_event,(0));
}));

(conways_game_of_life.core.simulate.cljs$lang$maxFixedArity = 2);

conways_game_of_life.core.handle_event_BANG_ = (function conways_game_of_life$core$handle_event_BANG_(var_args){
var G__62043 = arguments.length;
switch (G__62043) {
case 1:
return conways_game_of_life.core.handle_event_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return conways_game_of_life.core.handle_event_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(conways_game_of_life.core.handle_event_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (name){
return conways_game_of_life.core.handle_event_BANG_.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(conways_game_of_life.core.handle_event_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (name,data){
var map__62044 = conways_game_of_life.util.get_state(conways_game_of_life.core.app_state_atom);
var map__62044__$1 = (((((!((map__62044 == null))))?(((((map__62044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62044):map__62044);
var world_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62044__$1,new cljs.core.Keyword(null,"world-width","world-width",1762701691));
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62044__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62044__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var pred__62046 = cljs.core._EQ_;
var expr__62047 = name;
if(cljs.core.truth_((function (){var G__62049 = new cljs.core.Keyword(null,"tick","tick",-835886976);
var G__62050 = expr__62047;
return (pred__62046.cljs$core$IFn$_invoke$arity$2 ? pred__62046.cljs$core$IFn$_invoke$arity$2(G__62049,G__62050) : pred__62046.call(null,G__62049,G__62050));
})())){
var v = conways_game_of_life.canvas.draw_rects(conways_game_of_life.bitbit.step(view),world_width,cell_size);
return conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,(function conways_game_of_life$core$view_swap(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"view","view",1247994814),v);
}));
} else {
if(cljs.core.truth_((function (){var G__62051 = new cljs.core.Keyword(null,"start","start",-355208981);
var G__62052 = expr__62047;
return (pred__62046.cljs$core$IFn$_invoke$arity$2 ? pred__62046.cljs$core$IFn$_invoke$arity$2(G__62051,G__62052) : pred__62046.call(null,G__62051,G__62052));
})())){
conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"running?","running?",-257884763),true);
}));

return conways_game_of_life.core.simulate.cljs$core$IFn$_invoke$arity$1(conways_game_of_life.core.handle_event_BANG_);
} else {
if(cljs.core.truth_((function (){var G__62053 = new cljs.core.Keyword(null,"stop","stop",-2140911342);
var G__62054 = expr__62047;
return (pred__62046.cljs$core$IFn$_invoke$arity$2 ? pred__62046.cljs$core$IFn$_invoke$arity$2(G__62053,G__62054) : pred__62046.call(null,G__62053,G__62054));
})())){
return conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"running?","running?",-257884763),false);
}));
} else {
if(cljs.core.truth_((function (){var G__62055 = new cljs.core.Keyword(null,"toggle-cell","toggle-cell",-1369659161);
var G__62056 = expr__62047;
return (pred__62046.cljs$core$IFn$_invoke$arity$2 ? pred__62046.cljs$core$IFn$_invoke$arity$2(G__62055,G__62056) : pred__62046.call(null,G__62055,G__62056));
})())){
return conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,(function (p__62057){
var map__62058 = p__62057;
var map__62058__$1 = (((((!((map__62058 == null))))?(((((map__62058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62058):map__62058);
var state = map__62058__$1;
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62058__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var cell = new cljs.core.Keyword(null,"cell","cell",764245084).cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600)], null),(cljs.core.truth_((grid.cljs$core$IFn$_invoke$arity$1 ? grid.cljs$core$IFn$_invoke$arity$1(cell) : grid.call(null,cell)))?cljs.core.disj:cljs.core.conj),cell);
}));
} else {
if(cljs.core.truth_((function (){var G__62060 = new cljs.core.Keyword(null,"click","click",1912301393);
var G__62061 = expr__62047;
return (pred__62046.cljs$core$IFn$_invoke$arity$2 ? pred__62046.cljs$core$IFn$_invoke$arity$2(G__62060,G__62061) : pred__62046.call(null,G__62060,G__62061));
})())){
return conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,(function (p__62062){
var map__62063 = p__62062;
var map__62063__$1 = (((((!((map__62063 == null))))?(((((map__62063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62063):map__62063);
var state = map__62063__$1;
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62063__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var cell_size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62063__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
return null;
}));
} else {
return null;
}
}
}
}
}
}));

(conways_game_of_life.core.handle_event_BANG_.cljs$lang$maxFixedArity = 2);

conways_game_of_life.core.canvas_handler_BANG_ = (function conways_game_of_life$core$canvas_handler_BANG_(context){
return (function (name,data){
var pred__62065 = cljs.core._EQ_;
var expr__62066 = name;
if(cljs.core.truth_((function (){var G__62068 = new cljs.core.Keyword(null,"click","click",1912301393);
var G__62069 = expr__62066;
return (pred__62065.cljs$core$IFn$_invoke$arity$2 ? pred__62065.cljs$core$IFn$_invoke$arity$2(G__62068,G__62069) : pred__62065.call(null,G__62068,G__62069));
})())){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__62066)].join('')));
}
});
});
conways_game_of_life.core.render = (function conways_game_of_life$core$render(p__62070){
var map__62071 = p__62070;
var map__62071__$1 = (((((!((map__62071 == null))))?(((((map__62071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62071):map__62071);
var state = map__62071__$1;
var world_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62071__$1,new cljs.core.Keyword(null,"world-width","world-width",1762701691));
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62071__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
conways_game_of_life.canvas.create_canvas.cljs$core$IFn$_invoke$arity$2((1024),(1024));

conways_game_of_life.canvas.resize_canvas();

var view_62080 = conways_game_of_life.bitbit.pattern__GT_view(new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(conways_game_of_life.util.get_state(conways_game_of_life.core.app_state_atom)),conways_game_of_life.bitbit.uint_8_view((world_width * world_width)));
conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,(function (state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"view","view",1247994814),view_62080);
}));

conways_game_of_life.canvas.stroke_style("#fff");

conways_game_of_life.canvas.draw_rects(view_62080,world_width,cell_size);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conways_game_of_life.view.game_of_life,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"trigger-event","trigger-event",772166906),conways_game_of_life.core.handle_event_BANG_], null)], null),document.getElementById("app"));
});
if((cljs.core.deref(conways_game_of_life.core.app_state_atom) == null)){
cljs.core.reset_BANG_(conways_game_of_life.core.app_state_atom,conways_game_of_life.core.initial_state);

cljs.core.add_watch(conways_game_of_life.core.app_state_atom,new cljs.core.Keyword(null,"game-loop","game-loop",-981126027),(function (_,___$1,___$2,___$3){
return null;
}));
} else {
}
conways_game_of_life.core.init_BANG_ = (function conways_game_of_life$core$init_BANG_(){
return conways_game_of_life.core.render(conways_game_of_life.util.get_state(conways_game_of_life.core.app_state_atom));
});
conways_game_of_life.core.reload_BANG_ = (function conways_game_of_life$core$reload_BANG_(){
return conways_game_of_life.core.render(conways_game_of_life.util.get_state(conways_game_of_life.core.app_state_atom));
});

//# sourceMappingURL=conways_game_of_life.core.js.map
