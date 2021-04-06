goog.provide('conways_game_of_life.view');
goog.require('cljs.core');
conways_game_of_life.view.px = (function conways_game_of_life$view$px(v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"px"].join('');
});
conways_game_of_life.view.cell_color = (function conways_game_of_life$view$cell_color(p__32606,p__32607){
var map__32608 = p__32606;
var map__32608__$1 = (((((!((map__32608 == null))))?(((((map__32608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32608):map__32608);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32608__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var vec__32609 = p__32607;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32609,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32609,(1),null);
if(cljs.core.truth_((function (){var G__32613 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (grid.cljs$core$IFn$_invoke$arity$1 ? grid.cljs$core$IFn$_invoke$arity$1(G__32613) : grid.call(null,G__32613));
})())){
return "black";
} else {
return "white";
}
});
conways_game_of_life.view.world = (function conways_game_of_life$view$world(p__32614){
var map__32615 = p__32614;
var map__32615__$1 = (((((!((map__32615 == null))))?(((((map__32615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32615):map__32615);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32615__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var trigger_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32615__$1,new cljs.core.Keyword(null,"trigger-event","trigger-event",772166906));
var map__32617 = state;
var map__32617__$1 = (((((!((map__32617 == null))))?(((((map__32617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32617):map__32617);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32617__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var grid_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32617__$1,new cljs.core.Keyword(null,"grid-size","grid-size",2138480144));
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32617__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"inline-grid",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"1px",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),["repeat(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((grid_size / (2)) | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_size),"px)"].join(''),new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),(function (){var iter__4582__auto__ = (function conways_game_of_life$view$world_$_iter__32619(s__32620){
return (new cljs.core.LazySeq(null,(function (){
var s__32620__$1 = s__32620;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32620__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var y = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__32620__$1,y,xs__6292__auto__,temp__5735__auto__,map__32617,map__32617__$1,grid,grid_size,cell_size,map__32615,map__32615__$1,state,trigger_event){
return (function conways_game_of_life$view$world_$_iter__32619_$_iter__32621(s__32622){
return (new cljs.core.LazySeq(null,((function (s__32620__$1,y,xs__6292__auto__,temp__5735__auto__,map__32617,map__32617__$1,grid,grid_size,cell_size,map__32615,map__32615__$1,state,trigger_event){
return (function (){
var s__32622__$1 = s__32622;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__32622__$1);
if(temp__5735__auto____$1){
var s__32622__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32622__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__32622__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__32624 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__32623 = (0);
while(true){
if((i__32623 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__32623);
cljs.core.chunk_append(b__32624,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__32623,s__32620__$1,x,c__4580__auto__,size__4581__auto__,b__32624,s__32622__$2,temp__5735__auto____$1,y,xs__6292__auto__,temp__5735__auto__,map__32617,map__32617__$1,grid,grid_size,cell_size,map__32615,map__32615__$1,state,trigger_event){
return (function (){
var G__32625 = new cljs.core.Keyword(null,"toggle-cell","toggle-cell",-1369659161);
var G__32626 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null);
return (trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__32625,G__32626) : trigger_event.call(null,G__32625,G__32626));
});})(i__32623,s__32620__$1,x,c__4580__auto__,size__4581__auto__,b__32624,s__32622__$2,temp__5735__auto____$1,y,xs__6292__auto__,temp__5735__auto__,map__32617,map__32617__$1,grid,grid_size,cell_size,map__32615,map__32615__$1,state,trigger_event))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"outline","outline",793464534),".5px solid lightgray",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px",new cljs.core.Keyword(null,"background","background",-863952629),conways_game_of_life.view.cell_color(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),new cljs.core.Keyword(null,"min-width","min-width",1926193728),conways_game_of_life.view.px(cell_size),new cljs.core.Keyword(null,"min-height","min-height",398480837),conways_game_of_life.view.px(cell_size)], null)], null)], null));

var G__32643 = (i__32623 + (1));
i__32623 = G__32643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32624),conways_game_of_life$view$world_$_iter__32619_$_iter__32621(cljs.core.chunk_rest(s__32622__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32624),null);
}
} else {
var x = cljs.core.first(s__32622__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__32620__$1,x,s__32622__$2,temp__5735__auto____$1,y,xs__6292__auto__,temp__5735__auto__,map__32617,map__32617__$1,grid,grid_size,cell_size,map__32615,map__32615__$1,state,trigger_event){
return (function (){
var G__32627 = new cljs.core.Keyword(null,"toggle-cell","toggle-cell",-1369659161);
var G__32628 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null);
return (trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__32627,G__32628) : trigger_event.call(null,G__32627,G__32628));
});})(s__32620__$1,x,s__32622__$2,temp__5735__auto____$1,y,xs__6292__auto__,temp__5735__auto__,map__32617,map__32617__$1,grid,grid_size,cell_size,map__32615,map__32615__$1,state,trigger_event))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"outline","outline",793464534),".5px solid lightgray",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px",new cljs.core.Keyword(null,"background","background",-863952629),conways_game_of_life.view.cell_color(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),new cljs.core.Keyword(null,"min-width","min-width",1926193728),conways_game_of_life.view.px(cell_size),new cljs.core.Keyword(null,"min-height","min-height",398480837),conways_game_of_life.view.px(cell_size)], null)], null)], null),conways_game_of_life$view$world_$_iter__32619_$_iter__32621(cljs.core.rest(s__32622__$2)));
}
} else {
return null;
}
break;
}
});})(s__32620__$1,y,xs__6292__auto__,temp__5735__auto__,map__32617,map__32617__$1,grid,grid_size,cell_size,map__32615,map__32615__$1,state,trigger_event))
,null,null));
});})(s__32620__$1,y,xs__6292__auto__,temp__5735__auto__,map__32617,map__32617__$1,grid,grid_size,cell_size,map__32615,map__32615__$1,state,trigger_event))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((grid_size / (2)))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,conways_game_of_life$view$world_$_iter__32619(cljs.core.rest(s__32620__$1)));
} else {
var G__32646 = cljs.core.rest(s__32620__$1);
s__32620__$1 = G__32646;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((grid_size / (2))));
})()], null);
});
conways_game_of_life.view.game_of_life = (function conways_game_of_life$view$game_of_life(p__32629){
var map__32630 = p__32629;
var map__32630__$1 = (((((!((map__32630 == null))))?(((((map__32630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32630):map__32630);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32630__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var trigger_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32630__$1,new cljs.core.Keyword(null,"trigger-event","trigger-event",772166906));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__32632 = new cljs.core.Keyword(null,"seed","seed",68613327);
return (trigger_event.cljs$core$IFn$_invoke$arity$1 ? trigger_event.cljs$core$IFn$_invoke$arity$1(G__32632) : trigger_event.call(null,G__32632));
})], null),"seed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__32633 = new cljs.core.Keyword(null,"tick","tick",-835886976);
return (trigger_event.cljs$core$IFn$_invoke$arity$1 ? trigger_event.cljs$core$IFn$_invoke$arity$1(G__32633) : trigger_event.call(null,G__32633));
})], null),"tick"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__32634 = new cljs.core.Keyword(null,"start","start",-355208981);
return (trigger_event.cljs$core$IFn$_invoke$arity$1 ? trigger_event.cljs$core$IFn$_invoke$arity$1(G__32634) : trigger_event.call(null,G__32634));
})], null),"start"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__32635 = new cljs.core.Keyword(null,"stop","stop",-2140911342);
return (trigger_event.cljs$core$IFn$_invoke$arity$1 ? trigger_event.cljs$core$IFn$_invoke$arity$1(G__32635) : trigger_event.call(null,G__32635));
})], null),"stop"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__32636 = new cljs.core.Keyword(null,"hashlife-step","hashlife-step",886945312);
return (trigger_event.cljs$core$IFn$_invoke$arity$1 ? trigger_event.cljs$core$IFn$_invoke$arity$1(G__32636) : trigger_event.call(null,G__32636));
})], null),"Hashlife step"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"20px"], null)], null),new cljs.core.Keyword(null,"fps","fps",683533296).cljs$core$IFn$_invoke$arity$1(state)," fps"], null)], null)], null);
});

//# sourceMappingURL=conways_game_of_life.view.js.map
