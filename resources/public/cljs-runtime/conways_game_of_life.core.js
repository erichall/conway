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
conways_game_of_life.core.initial_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"running?","running?",-257884763),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"toroidal?","toroidal?",2099414314),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"grid-size","grid-size",2138480144),new cljs.core.Keyword(null,"fps","fps",683533296),new cljs.core.Keyword(null,"world-width","world-width",1762701691),new cljs.core.Keyword(null,"view","view",1247994814)],[(10),false,new cljs.core.Keyword(null,"heavy","heavy",2126165008).cljs$core$IFn$_invoke$arity$1(conways_game_of_life.shapes.shapes),false,(1),conways_game_of_life.core.grid_size,(0),(128),null])], null)], null);
conways_game_of_life.core.mutate_BANG_ = (function conways_game_of_life$core$mutate_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___44960 = arguments.length;
var i__4790__auto___44961 = (0);
while(true){
if((i__4790__auto___44961 < len__4789__auto___44960)){
args__4795__auto__.push((arguments[i__4790__auto___44961]));

var G__44966 = (i__4790__auto___44961 + (1));
i__4790__auto___44961 = G__44966;
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
(conways_game_of_life.core.mutate_BANG_.cljs$lang$applyTo = (function (seq44849){
var G__44850 = cljs.core.first(seq44849);
var seq44849__$1 = cljs.core.next(seq44849);
var G__44851 = cljs.core.first(seq44849__$1);
var seq44849__$2 = cljs.core.next(seq44849__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44850,G__44851,seq44849__$2);
}));

conways_game_of_life.core.tick = (function conways_game_of_life$core$tick(p__44855){
var map__44856 = p__44855;
var map__44856__$1 = (((((!((map__44856 == null))))?(((((map__44856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44856):map__44856);
var state = map__44856__$1;
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44856__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"grid","grid",402978600),conways_game_of_life.gol.inc_grid(state));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"seed","seed",68613327),conways_game_of_life.util.next_seed(seed,(1)));
});
conways_game_of_life.core.simulate = (function conways_game_of_life$core$simulate(var_args){
var G__44862 = arguments.length;
switch (G__44862) {
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
var G__44866_44990 = new cljs.core.Keyword(null,"tick","tick",-835886976);
var G__44867_44991 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fps","fps",683533296),new cljs.core.Keyword(null,"fps","fps",683533296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(conways_game_of_life.core.render_atom))], null);
(trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__44866_44990,G__44867_44991) : trigger_event.call(null,G__44866_44990,G__44867_44991));

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
var G__44872 = arguments.length;
switch (G__44872) {
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
var map__44876 = conways_game_of_life.util.get_state(conways_game_of_life.core.app_state_atom);
var map__44876__$1 = (((((!((map__44876 == null))))?(((((map__44876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44876):map__44876);
var world_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44876__$1,new cljs.core.Keyword(null,"world-width","world-width",1762701691));
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44876__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44876__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var pred__44881 = cljs.core._EQ_;
var expr__44882 = name;
if(cljs.core.truth_((function (){var G__44884 = new cljs.core.Keyword(null,"tick","tick",-835886976);
var G__44885 = expr__44882;
return (pred__44881.cljs$core$IFn$_invoke$arity$2 ? pred__44881.cljs$core$IFn$_invoke$arity$2(G__44884,G__44885) : pred__44881.call(null,G__44884,G__44885));
})())){
var v = conways_game_of_life.canvas.draw_rects(conways_game_of_life.bitbit.step(view),world_width,cell_size);
return conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,(function conways_game_of_life$core$view_swap(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"view","view",1247994814),v);
}));
} else {
if(cljs.core.truth_((function (){var G__44886 = new cljs.core.Keyword(null,"start","start",-355208981);
var G__44887 = expr__44882;
return (pred__44881.cljs$core$IFn$_invoke$arity$2 ? pred__44881.cljs$core$IFn$_invoke$arity$2(G__44886,G__44887) : pred__44881.call(null,G__44886,G__44887));
})())){
conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"running?","running?",-257884763),true);
}));

return conways_game_of_life.core.simulate.cljs$core$IFn$_invoke$arity$1(conways_game_of_life.core.handle_event_BANG_);
} else {
if(cljs.core.truth_((function (){var G__44890 = new cljs.core.Keyword(null,"stop","stop",-2140911342);
var G__44891 = expr__44882;
return (pred__44881.cljs$core$IFn$_invoke$arity$2 ? pred__44881.cljs$core$IFn$_invoke$arity$2(G__44890,G__44891) : pred__44881.call(null,G__44890,G__44891));
})())){
return conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"running?","running?",-257884763),false);
}));
} else {
if(cljs.core.truth_((function (){var G__44893 = new cljs.core.Keyword(null,"toggle-cell","toggle-cell",-1369659161);
var G__44894 = expr__44882;
return (pred__44881.cljs$core$IFn$_invoke$arity$2 ? pred__44881.cljs$core$IFn$_invoke$arity$2(G__44893,G__44894) : pred__44881.call(null,G__44893,G__44894));
})())){
return conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,(function (p__44895){
var map__44896 = p__44895;
var map__44896__$1 = (((((!((map__44896 == null))))?(((((map__44896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44896):map__44896);
var state = map__44896__$1;
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44896__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var cell = new cljs.core.Keyword(null,"cell","cell",764245084).cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600)], null),(cljs.core.truth_((grid.cljs$core$IFn$_invoke$arity$1 ? grid.cljs$core$IFn$_invoke$arity$1(cell) : grid.call(null,cell)))?cljs.core.disj:cljs.core.conj),cell);
}));
} else {
if(cljs.core.truth_((function (){var G__44901 = new cljs.core.Keyword(null,"click","click",1912301393);
var G__44902 = expr__44882;
return (pred__44881.cljs$core$IFn$_invoke$arity$2 ? pred__44881.cljs$core$IFn$_invoke$arity$2(G__44901,G__44902) : pred__44881.call(null,G__44901,G__44902));
})())){
return conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,(function (p__44903){
var map__44904 = p__44903;
var map__44904__$1 = (((((!((map__44904 == null))))?(((((map__44904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44904):map__44904);
var state = map__44904__$1;
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44904__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var cell_size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44904__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
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
var pred__44906 = cljs.core._EQ_;
var expr__44907 = name;
if(cljs.core.truth_((function (){var G__44909 = new cljs.core.Keyword(null,"click","click",1912301393);
var G__44910 = expr__44907;
return (pred__44906.cljs$core$IFn$_invoke$arity$2 ? pred__44906.cljs$core$IFn$_invoke$arity$2(G__44909,G__44910) : pred__44906.call(null,G__44909,G__44910));
})())){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__44907)].join('')));
}
});
});
conways_game_of_life.core.render = (function conways_game_of_life$core$render(p__44911){
var map__44912 = p__44911;
var map__44912__$1 = (((((!((map__44912 == null))))?(((((map__44912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44912):map__44912);
var state = map__44912__$1;
var world_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44912__$1,new cljs.core.Keyword(null,"world-width","world-width",1762701691));
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44912__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
conways_game_of_life.canvas.create_canvas.cljs$core$IFn$_invoke$arity$2((804),(804));

conways_game_of_life.canvas.resize_canvas();

conways_game_of_life.canvas.empty_img_BANG_();

var view_44997 = conways_game_of_life.bitbit.pattern__GT_view(new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(conways_game_of_life.util.get_state(conways_game_of_life.core.app_state_atom)),conways_game_of_life.bitbit.uint_8_view((world_width * world_width)));
conways_game_of_life.core.mutate_BANG_(conways_game_of_life.core.app_state_atom,(function (state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"view","view",1247994814),view_44997);
}));

conways_game_of_life.canvas.draw_rects(view_44997,world_width,cell_size);

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
