goog.provide('conways_game_of_life.canvas_core');
goog.require('cljs.core');
goog.require('cljs.core.async');
conways_game_of_life.canvas_core.add_event_BANG_ = (function conways_game_of_life$canvas_core$add_event_BANG_(canvas,event_name){
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
canvas.addEventListener(event_name,(function (evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event_name),new cljs.core.Keyword(null,"data","data",-232669377),evt], null));
}),false);

return chan;
});
conways_game_of_life.canvas_core.relative_cord = (function conways_game_of_life$canvas_core$relative_cord(canvas,evt){
var left = (canvas.offsetLeft + canvas.clientLeft);
var top = (canvas.offsetTop + canvas.clientTop);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(evt.pageX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(evt.pageY - top)], null);
});
conways_game_of_life.canvas_core.canvas_handler = (function conways_game_of_life$canvas_core$canvas_handler(handler,chans){
var c = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(chans);
var c__25860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25861__auto__ = (function (){var switch__25739__auto__ = (function (state_28348){
var state_val_28349 = (state_28348[(1)]);
if((state_val_28349 === (7))){
var inst_28335 = (state_28348[(2)]);
var state_28348__$1 = state_28348;
if(cljs.core.truth_(inst_28335)){
var statearr_28350_28411 = state_28348__$1;
(statearr_28350_28411[(1)] = (11));

} else {
var statearr_28351_28412 = state_28348__$1;
(statearr_28351_28412[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28349 === (1))){
var state_28348__$1 = state_28348;
var statearr_28352_28413 = state_28348__$1;
(statearr_28352_28413[(2)] = null);

(statearr_28352_28413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28349 === (4))){
var inst_28319 = (state_28348[(7)]);
var inst_28319__$1 = (state_28348[(2)]);
var inst_28321 = (inst_28319__$1 == null);
var inst_28322 = cljs.core.not(inst_28321);
var state_28348__$1 = (function (){var statearr_28353 = state_28348;
(statearr_28353[(7)] = inst_28319__$1);

return statearr_28353;
})();
if(inst_28322){
var statearr_28354_28414 = state_28348__$1;
(statearr_28354_28414[(1)] = (5));

} else {
var statearr_28355_28415 = state_28348__$1;
(statearr_28355_28415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28349 === (13))){
var inst_28340 = (state_28348[(2)]);
var inst_28341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28340,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_28342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28340,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_28343 = (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(inst_28341,inst_28342) : handler.call(null,inst_28341,inst_28342));
var state_28348__$1 = (function (){var statearr_28356 = state_28348;
(statearr_28356[(8)] = inst_28343);

return statearr_28356;
})();
var statearr_28357_28416 = state_28348__$1;
(statearr_28357_28416[(2)] = null);

(statearr_28357_28416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28349 === (6))){
var state_28348__$1 = state_28348;
var statearr_28358_28417 = state_28348__$1;
(statearr_28358_28417[(2)] = false);

(statearr_28358_28417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28349 === (3))){
var inst_28346 = (state_28348[(2)]);
var state_28348__$1 = state_28348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28348__$1,inst_28346);
} else {
if((state_val_28349 === (12))){
var inst_28319 = (state_28348[(7)]);
var state_28348__$1 = state_28348;
var statearr_28359_28418 = state_28348__$1;
(statearr_28359_28418[(2)] = inst_28319);

(statearr_28359_28418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28349 === (2))){
var state_28348__$1 = state_28348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28348__$1,(4),c);
} else {
if((state_val_28349 === (11))){
var inst_28319 = (state_28348[(7)]);
var inst_28337 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28319);
var state_28348__$1 = state_28348;
var statearr_28360_28419 = state_28348__$1;
(statearr_28360_28419[(2)] = inst_28337);

(statearr_28360_28419[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28349 === (9))){
var state_28348__$1 = state_28348;
var statearr_28361_28420 = state_28348__$1;
(statearr_28361_28420[(2)] = false);

(statearr_28361_28420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28349 === (5))){
var inst_28319 = (state_28348[(7)]);
var inst_28324 = inst_28319.cljs$lang$protocol_mask$partition0$;
var inst_28325 = (inst_28324 & (64));
var inst_28326 = inst_28319.cljs$core$ISeq$;
var inst_28327 = (cljs.core.PROTOCOL_SENTINEL === inst_28326);
var inst_28328 = ((inst_28325) || (inst_28327));
var state_28348__$1 = state_28348;
if(cljs.core.truth_(inst_28328)){
var statearr_28362_28421 = state_28348__$1;
(statearr_28362_28421[(1)] = (8));

} else {
var statearr_28363_28422 = state_28348__$1;
(statearr_28363_28422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28349 === (10))){
var inst_28332 = (state_28348[(2)]);
var state_28348__$1 = state_28348;
var statearr_28364_28423 = state_28348__$1;
(statearr_28364_28423[(2)] = inst_28332);

(statearr_28364_28423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28349 === (8))){
var state_28348__$1 = state_28348;
var statearr_28365_28430 = state_28348__$1;
(statearr_28365_28430[(2)] = true);

(statearr_28365_28430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var conways_game_of_life$canvas_core$canvas_handler_$_state_machine__25740__auto__ = null;
var conways_game_of_life$canvas_core$canvas_handler_$_state_machine__25740__auto____0 = (function (){
var statearr_28366 = [null,null,null,null,null,null,null,null,null];
(statearr_28366[(0)] = conways_game_of_life$canvas_core$canvas_handler_$_state_machine__25740__auto__);

(statearr_28366[(1)] = (1));

return statearr_28366;
});
var conways_game_of_life$canvas_core$canvas_handler_$_state_machine__25740__auto____1 = (function (state_28348){
while(true){
var ret_value__25741__auto__ = (function (){try{while(true){
var result__25742__auto__ = switch__25739__auto__(state_28348);
if(cljs.core.keyword_identical_QMARK_(result__25742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25742__auto__;
}
break;
}
}catch (e28367){if((e28367 instanceof Object)){
var ex__25743__auto__ = e28367;
var statearr_28368_28431 = state_28348;
(statearr_28368_28431[(5)] = ex__25743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28367;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28432 = state_28348;
state_28348 = G__28432;
continue;
} else {
return ret_value__25741__auto__;
}
break;
}
});
conways_game_of_life$canvas_core$canvas_handler_$_state_machine__25740__auto__ = function(state_28348){
switch(arguments.length){
case 0:
return conways_game_of_life$canvas_core$canvas_handler_$_state_machine__25740__auto____0.call(this);
case 1:
return conways_game_of_life$canvas_core$canvas_handler_$_state_machine__25740__auto____1.call(this,state_28348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conways_game_of_life$canvas_core$canvas_handler_$_state_machine__25740__auto__.cljs$core$IFn$_invoke$arity$0 = conways_game_of_life$canvas_core$canvas_handler_$_state_machine__25740__auto____0;
conways_game_of_life$canvas_core$canvas_handler_$_state_machine__25740__auto__.cljs$core$IFn$_invoke$arity$1 = conways_game_of_life$canvas_core$canvas_handler_$_state_machine__25740__auto____1;
return conways_game_of_life$canvas_core$canvas_handler_$_state_machine__25740__auto__;
})()
})();
var state__25862__auto__ = (function (){var statearr_28369 = (f__25861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25861__auto__.cljs$core$IFn$_invoke$arity$0() : f__25861__auto__.call(null));
(statearr_28369[(6)] = c__25860__auto__);

return statearr_28369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25862__auto__);
}));

return c__25860__auto__;
});
conways_game_of_life.canvas_core.canvas = document.getElementById("conway-canvas");
conways_game_of_life.canvas_core.initial_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),conways_game_of_life.canvas_core.canvas,new cljs.core.Keyword(null,"width","width",-384071477),conways_game_of_life.canvas_core.canvas.width,new cljs.core.Keyword(null,"height","height",1025178622),conways_game_of_life.canvas_core.canvas.height,new cljs.core.Keyword(null,"ctx","ctx",-493610118),conways_game_of_life.canvas_core.canvas.getContext("2d",cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic("alpha",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)))], null);
if((typeof conways_game_of_life !== 'undefined') && (typeof conways_game_of_life.canvas_core !== 'undefined') && (typeof conways_game_of_life.canvas_core.canvas_atom !== 'undefined')){
} else {
conways_game_of_life.canvas_core.canvas_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(conways_game_of_life.canvas_core.canvas_atom) == null)){
cljs.core.reset_BANG_(conways_game_of_life.canvas_core.canvas_atom,conways_game_of_life.canvas_core.initial_state);
} else {
}
conways_game_of_life.canvas_core.draw_cell_BANG_ = (function conways_game_of_life$canvas_core$draw_cell_BANG_(p__28370){
var map__28371 = p__28370;
var map__28371__$1 = (((((!((map__28371 == null))))?(((((map__28371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28371):map__28371);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28371__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28371__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28371__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28371__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28371__$1,new cljs.core.Keyword(null,"batch?","batch?",-624482293));
var vec__28373 = cell;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28373,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28373,(1),null);
if(cljs.core.truth_(batch_QMARK_)){
} else {
ctx.beginPath();
}

(ctx.fillStyle = fill_color);

ctx.fillRect((0.5 + x),(0.5 + y),(size - (1)),(size - (1)));

if(cljs.core.truth_(batch_QMARK_)){
return null;
} else {
return ctx.fill();
}
});
conways_game_of_life.canvas_core.draw_cells_BANG_ = (function conways_game_of_life$canvas_core$draw_cells_BANG_(p__28377){
var map__28378 = p__28377;
var map__28378__$1 = (((((!((map__28378 == null))))?(((((map__28378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28378):map__28378);
var args = map__28378__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28378__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var cell_color_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28378__$1,new cljs.core.Keyword(null,"cell-color-fn","cell-color-fn",-225848307));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28378__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var ctx = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(context);
console.log(new cljs.core.Keyword(null,"image-data","image-data",-377483758).cljs$core$IFn$_invoke$arity$1(context));

cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function conways_game_of_life$canvas_core$draw_cells_BANG__$_iter__28380(s__28381){
return (new cljs.core.LazySeq(null,(function (){
var s__28381__$1 = s__28381;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28381__$1);
if(temp__5735__auto__){
var s__28381__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28381__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__28381__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__28383 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__28382 = (0);
while(true){
if((i__28382 < size__4581__auto__)){
var cell = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__28382);
var canvas_cell = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__28382,cell,c__4580__auto__,size__4581__auto__,b__28383,s__28381__$2,temp__5735__auto__,ctx,map__28378,map__28378__$1,args,size,cell_color_fn,context){
return (function (p1__28376_SHARP_){
return (size * p1__28376_SHARP_);
});})(i__28382,cell,c__4580__auto__,size__4581__auto__,b__28383,s__28381__$2,temp__5735__auto__,ctx,map__28378,map__28378__$1,args,size,cell_color_fn,context))
,cell);
cljs.core.chunk_append(b__28383,conways_game_of_life.canvas_core.draw_cell_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(args,new cljs.core.Keyword(null,"cell","cell",764245084),canvas_cell),new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx),new cljs.core.Keyword(null,"batch","batch",-662921200),true),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),(cell_color_fn.cljs$core$IFn$_invoke$arity$1 ? cell_color_fn.cljs$core$IFn$_invoke$arity$1(cell) : cell_color_fn.call(null,cell)))));

var G__28438 = (i__28382 + (1));
i__28382 = G__28438;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28383),conways_game_of_life$canvas_core$draw_cells_BANG__$_iter__28380(cljs.core.chunk_rest(s__28381__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28383),null);
}
} else {
var cell = cljs.core.first(s__28381__$2);
var canvas_cell = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (cell,s__28381__$2,temp__5735__auto__,ctx,map__28378,map__28378__$1,args,size,cell_color_fn,context){
return (function (p1__28376_SHARP_){
return (size * p1__28376_SHARP_);
});})(cell,s__28381__$2,temp__5735__auto__,ctx,map__28378,map__28378__$1,args,size,cell_color_fn,context))
,cell);
return cljs.core.cons(conways_game_of_life.canvas_core.draw_cell_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(args,new cljs.core.Keyword(null,"cell","cell",764245084),canvas_cell),new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx),new cljs.core.Keyword(null,"batch","batch",-662921200),true),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),(cell_color_fn.cljs$core$IFn$_invoke$arity$1 ? cell_color_fn.cljs$core$IFn$_invoke$arity$1(cell) : cell_color_fn.call(null,cell)))),conways_game_of_life$canvas_core$draw_cells_BANG__$_iter__28380(cljs.core.rest(s__28381__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(args));
})());

return ctx.fill();
});
conways_game_of_life.canvas_core.draw_grid_lines_BANG_ = (function conways_game_of_life$canvas_core$draw_grid_lines_BANG_(p__28384){
var map__28385 = p__28384;
var map__28385__$1 = (((((!((map__28385 == null))))?(((((map__28385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28385):map__28385);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28385__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28385__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28385__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28385__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
(ctx.lineWidth = (1));

(ctx.strokeStyle = "gray");

cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function conways_game_of_life$canvas_core$draw_grid_lines_BANG__$_iter__28387(s__28388){
return (new cljs.core.LazySeq(null,(function (){
var s__28388__$1 = s__28388;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28388__$1);
if(temp__5735__auto__){
var s__28388__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28388__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__28388__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__28390 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__28389 = (0);
while(true){
if((i__28389 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__28389);
cljs.core.chunk_append(b__28390,(function (){
ctx.moveTo(x,(0));

return ctx.lineTo(x,height);
})()
);

var G__28442 = (i__28389 + (1));
i__28389 = G__28442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28390),conways_game_of_life$canvas_core$draw_grid_lines_BANG__$_iter__28387(cljs.core.chunk_rest(s__28388__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28390),null);
}
} else {
var x = cljs.core.first(s__28388__$2);
return cljs.core.cons((function (){
ctx.moveTo(x,(0));

return ctx.lineTo(x,height);
})()
,conways_game_of_life$canvas_core$draw_grid_lines_BANG__$_iter__28387(cljs.core.rest(s__28388__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(0.5,width,cell_size));
})());

cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function conways_game_of_life$canvas_core$draw_grid_lines_BANG__$_iter__28391(s__28392){
return (new cljs.core.LazySeq(null,(function (){
var s__28392__$1 = s__28392;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28392__$1);
if(temp__5735__auto__){
var s__28392__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28392__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__28392__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__28394 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__28393 = (0);
while(true){
if((i__28393 < size__4581__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__28393);
cljs.core.chunk_append(b__28394,(function (){
ctx.moveTo((0),y);

return ctx.lineTo(width,y);
})()
);

var G__28446 = (i__28393 + (1));
i__28393 = G__28446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28394),conways_game_of_life$canvas_core$draw_grid_lines_BANG__$_iter__28391(cljs.core.chunk_rest(s__28392__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28394),null);
}
} else {
var y = cljs.core.first(s__28392__$2);
return cljs.core.cons((function (){
ctx.moveTo((0),y);

return ctx.lineTo(width,y);
})()
,conways_game_of_life$canvas_core$draw_grid_lines_BANG__$_iter__28391(cljs.core.rest(s__28392__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(0.5,height,cell_size));
})());

return ctx.stroke();
});
conways_game_of_life.canvas_core.draw_grid_BANG_ = (function conways_game_of_life$canvas_core$draw_grid_BANG_(p__28395){
var map__28396 = p__28395;
var map__28396__$1 = (((((!((map__28396 == null))))?(((((map__28396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28396):map__28396);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28396__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28396__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28396__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28396__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var cell_color_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28396__$1,new cljs.core.Keyword(null,"cell-color-fn","cell-color-fn",-225848307));
var height__$1 = ((1) + height);
var width__$1 = ((1) + width);
var canvas = new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(context);
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context], 0));
var ctx = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(context);
(canvas.height = height__$1);

(canvas.width = width__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conways_game_of_life.canvas_core.canvas_atom,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"width","width",-384071477),width__$1),new cljs.core.Keyword(null,"height","height",1025178622),height__$1);
}));

(canvas.style.border = "dotted 1px blue");

ctx.beginPath();

var start__4679__auto___28453 = cljs.core.system_time();
var ret__4680__auto___28454 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function conways_game_of_life$canvas_core$draw_grid_BANG__$_iter__28398(s__28399){
return (new cljs.core.LazySeq(null,(function (){
var s__28399__$1 = s__28399;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28399__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var y = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__28399__$1,y,xs__6292__auto__,temp__5735__auto__,start__4679__auto___28453,height__$1,width__$1,canvas,_,ctx,map__28396,map__28396__$1,width,height,context,cell_size,cell_color_fn){
return (function conways_game_of_life$canvas_core$draw_grid_BANG__$_iter__28398_$_iter__28400(s__28401){
return (new cljs.core.LazySeq(null,((function (s__28399__$1,y,xs__6292__auto__,temp__5735__auto__,start__4679__auto___28453,height__$1,width__$1,canvas,_,ctx,map__28396,map__28396__$1,width,height,context,cell_size,cell_color_fn){
return (function (){
var s__28401__$1 = s__28401;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__28401__$1);
if(temp__5735__auto____$1){
var s__28401__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28401__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__28401__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__28403 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__28402 = (0);
while(true){
if((i__28402 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__28402);
cljs.core.chunk_append(b__28403,conways_game_of_life.canvas_core.draw_cell_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cell_size * x),(cell_size * y)], null),new cljs.core.Keyword(null,"batch","batch",-662921200),true,new cljs.core.Keyword(null,"size","size",1098693007),cell_size,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),(function (){var G__28404 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (cell_color_fn.cljs$core$IFn$_invoke$arity$1 ? cell_color_fn.cljs$core$IFn$_invoke$arity$1(G__28404) : cell_color_fn.call(null,G__28404));
})()], null)));

var G__28463 = (i__28402 + (1));
i__28402 = G__28463;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28403),conways_game_of_life$canvas_core$draw_grid_BANG__$_iter__28398_$_iter__28400(cljs.core.chunk_rest(s__28401__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28403),null);
}
} else {
var x = cljs.core.first(s__28401__$2);
return cljs.core.cons(conways_game_of_life.canvas_core.draw_cell_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cell_size * x),(cell_size * y)], null),new cljs.core.Keyword(null,"batch","batch",-662921200),true,new cljs.core.Keyword(null,"size","size",1098693007),cell_size,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),(function (){var G__28405 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (cell_color_fn.cljs$core$IFn$_invoke$arity$1 ? cell_color_fn.cljs$core$IFn$_invoke$arity$1(G__28405) : cell_color_fn.call(null,G__28405));
})()], null)),conways_game_of_life$canvas_core$draw_grid_BANG__$_iter__28398_$_iter__28400(cljs.core.rest(s__28401__$2)));
}
} else {
return null;
}
break;
}
});})(s__28399__$1,y,xs__6292__auto__,temp__5735__auto__,start__4679__auto___28453,height__$1,width__$1,canvas,_,ctx,map__28396,map__28396__$1,width,height,context,cell_size,cell_color_fn))
,null,null));
});})(s__28399__$1,y,xs__6292__auto__,temp__5735__auto__,start__4679__auto___28453,height__$1,width__$1,canvas,_,ctx,map__28396,map__28396__$1,width,height,context,cell_size,cell_color_fn))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(width__$1)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,conways_game_of_life$canvas_core$draw_grid_BANG__$_iter__28398(cljs.core.rest(s__28399__$1)));
} else {
var G__28464 = cljs.core.rest(s__28399__$1);
s__28399__$1 = G__28464;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(height__$1));
})());
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Elapsed time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.system_time() - start__4679__auto___28453).toFixed((6)))," msecs"].join('')], 0));


conways_game_of_life.canvas_core.draw_grid_lines_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),cell_size], null));

return ctx.fill();
});
conways_game_of_life.canvas_core.xy__GT_cell = (function conways_game_of_life$canvas_core$xy__GT_cell(p__28406){
var map__28407 = p__28406;
var map__28407__$1 = (((((!((map__28407 == null))))?(((((map__28407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28407):map__28407);
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28407__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28407__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28407__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28409 = (x / cell_size);
return Math.floor(G__28409);
})(),(function (){var G__28410 = (y / cell_size);
return Math.floor(G__28410);
})()], null);
});
conways_game_of_life.canvas_core.create_dom_canvas_BANG_ = (function conways_game_of_life$canvas_core$create_dom_canvas_BANG_(width,height,id,target){
var canvas_QMARK_ = cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(document,"getElementById",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
if(cljs.core.truth_(canvas_QMARK_)){
return null;
} else {
var canvas = document.createElement("canvas");
canvas.setAttribute("id",id);

canvas.setAttribute("height",height);

canvas.setAttribute("width",width);

return target.appendChild(canvas);
}
});

//# sourceMappingURL=conways_game_of_life.canvas_core.js.map
