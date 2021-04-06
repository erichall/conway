goog.provide('conways_game_of_life.hashlife');
goog.require('cljs.core');
goog.require('conways_game_of_life.quadtree');
goog.require('cljs.pprint');
conways_game_of_life.hashlife.dx = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null);
conways_game_of_life.hashlife.dy = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null);
conways_game_of_life.hashlife.neighbours = (function conways_game_of_life$hashlife$neighbours(p__89566){
var map__89567 = p__89566;
var map__89567__$1 = (((((!((map__89567 == null))))?(((((map__89567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89567):map__89567);
var c = map__89567__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89567__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89567__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var iter__4582__auto__ = (function conways_game_of_life$hashlife$neighbours_$_iter__89569(s__89570){
return (new cljs.core.LazySeq(null,(function (){
var s__89570__$1 = s__89570;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__89570__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var dx = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__89570__$1,dx,xs__6292__auto__,temp__5735__auto__,map__89567,map__89567__$1,c,x,y){
return (function conways_game_of_life$hashlife$neighbours_$_iter__89569_$_iter__89571(s__89572){
return (new cljs.core.LazySeq(null,((function (s__89570__$1,dx,xs__6292__auto__,temp__5735__auto__,map__89567,map__89567__$1,c,x,y){
return (function (){
var s__89572__$1 = s__89572;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__89572__$1);
if(temp__5735__auto____$1){
var s__89572__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__89572__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__89572__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__89574 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__89573 = (0);
while(true){
if((i__89573 < size__4581__auto__)){
var dy = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__89573);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null))))){
cljs.core.chunk_append(b__89574,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + x),(dy + y)], null));

var G__89674 = (i__89573 + (1));
i__89573 = G__89674;
continue;
} else {
var G__89675 = (i__89573 + (1));
i__89573 = G__89675;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__89574),conways_game_of_life$hashlife$neighbours_$_iter__89569_$_iter__89571(cljs.core.chunk_rest(s__89572__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__89574),null);
}
} else {
var dy = cljs.core.first(s__89572__$2);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + x),(dy + y)], null),conways_game_of_life$hashlife$neighbours_$_iter__89569_$_iter__89571(cljs.core.rest(s__89572__$2)));
} else {
var G__89689 = cljs.core.rest(s__89572__$2);
s__89572__$1 = G__89689;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__89570__$1,dx,xs__6292__auto__,temp__5735__auto__,map__89567,map__89567__$1,c,x,y))
,null,null));
});})(s__89570__$1,dx,xs__6292__auto__,temp__5735__auto__,map__89567,map__89567__$1,c,x,y))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(conways_game_of_life.hashlife.dy));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,conways_game_of_life$hashlife$neighbours_$_iter__89569(cljs.core.rest(s__89570__$1)));
} else {
var G__89694 = cljs.core.rest(s__89570__$1);
s__89570__$1 = G__89694;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(conways_game_of_life.hashlife.dx);
});
conways_game_of_life.hashlife.dead = (0);
conways_game_of_life.hashlife.alive = (function conways_game_of_life$hashlife$alive(cell){
return (cell - conways_game_of_life.hashlife.dead);
});
conways_game_of_life.hashlife.life = (function conways_game_of_life$hashlife$life(nw,nn,ne,ww,cc,ee,sw,ss,se){
var count = ((((((((conways_game_of_life.hashlife.alive(nw) + conways_game_of_life.hashlife.alive(nn)) + conways_game_of_life.hashlife.alive(ne)) + conways_game_of_life.hashlife.alive(ww)) + (0)) + conways_game_of_life.hashlife.alive(ee)) + conways_game_of_life.hashlife.alive(sw)) + conways_game_of_life.hashlife.alive(ss)) + conways_game_of_life.hashlife.alive(se));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(count,(2))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cc,(1));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(count,(3));
}
});
/**
 * Casts a depth 2 tree into a 2d matrix
 */
conways_game_of_life.hashlife.depth_two__GT_matrix = (function conways_game_of_life$hashlife$depth_two__GT_matrix(p__89582){
var map__89583 = p__89582;
var map__89583__$1 = (((((!((map__89583 == null))))?(((((map__89583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89583):map__89583);
var nw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89583__$1,new cljs.core.Keyword(null,"nw","nw",487743706));
var ne = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89583__$1,new cljs.core.Keyword(null,"ne","ne",-1792628743));
var se = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89583__$1,new cljs.core.Keyword(null,"se","se",-1419643721));
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89583__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw","nw",487743706).cljs$core$IFn$_invoke$arity$1(nw),new cljs.core.Keyword(null,"ne","ne",-1792628743).cljs$core$IFn$_invoke$arity$1(nw),new cljs.core.Keyword(null,"nw","nw",487743706).cljs$core$IFn$_invoke$arity$1(ne),new cljs.core.Keyword(null,"ne","ne",-1792628743).cljs$core$IFn$_invoke$arity$1(ne)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sw","sw",833113913).cljs$core$IFn$_invoke$arity$1(nw),new cljs.core.Keyword(null,"se","se",-1419643721).cljs$core$IFn$_invoke$arity$1(nw),new cljs.core.Keyword(null,"sw","sw",833113913).cljs$core$IFn$_invoke$arity$1(ne),new cljs.core.Keyword(null,"se","se",-1419643721).cljs$core$IFn$_invoke$arity$1(ne)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw","nw",487743706).cljs$core$IFn$_invoke$arity$1(sw),new cljs.core.Keyword(null,"ne","ne",-1792628743).cljs$core$IFn$_invoke$arity$1(sw),new cljs.core.Keyword(null,"nw","nw",487743706).cljs$core$IFn$_invoke$arity$1(se),new cljs.core.Keyword(null,"ne","ne",-1792628743).cljs$core$IFn$_invoke$arity$1(se)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sw","sw",833113913).cljs$core$IFn$_invoke$arity$1(sw),new cljs.core.Keyword(null,"se","se",-1419643721).cljs$core$IFn$_invoke$arity$1(sw),new cljs.core.Keyword(null,"sw","sw",833113913).cljs$core$IFn$_invoke$arity$1(se),new cljs.core.Keyword(null,"se","se",-1419643721).cljs$core$IFn$_invoke$arity$1(se)], null)], null);
});
conways_game_of_life.hashlife.depth_two__GT_list = (function conways_game_of_life$hashlife$depth_two__GT_list(p__89585){
var map__89586 = p__89585;
var map__89586__$1 = (((((!((map__89586 == null))))?(((((map__89586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89586):map__89586);
var nw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89586__$1,new cljs.core.Keyword(null,"nw","nw",487743706));
var ne = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89586__$1,new cljs.core.Keyword(null,"ne","ne",-1792628743));
var se = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89586__$1,new cljs.core.Keyword(null,"se","se",-1419643721));
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89586__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw","nw",487743706).cljs$core$IFn$_invoke$arity$1(nw),new cljs.core.Keyword(null,"ne","ne",-1792628743).cljs$core$IFn$_invoke$arity$1(nw),new cljs.core.Keyword(null,"nw","nw",487743706).cljs$core$IFn$_invoke$arity$1(ne),new cljs.core.Keyword(null,"ne","ne",-1792628743).cljs$core$IFn$_invoke$arity$1(ne),new cljs.core.Keyword(null,"sw","sw",833113913).cljs$core$IFn$_invoke$arity$1(nw),new cljs.core.Keyword(null,"se","se",-1419643721).cljs$core$IFn$_invoke$arity$1(nw),new cljs.core.Keyword(null,"sw","sw",833113913).cljs$core$IFn$_invoke$arity$1(ne),new cljs.core.Keyword(null,"se","se",-1419643721).cljs$core$IFn$_invoke$arity$1(ne),new cljs.core.Keyword(null,"nw","nw",487743706).cljs$core$IFn$_invoke$arity$1(sw),new cljs.core.Keyword(null,"ne","ne",-1792628743).cljs$core$IFn$_invoke$arity$1(sw),new cljs.core.Keyword(null,"nw","nw",487743706).cljs$core$IFn$_invoke$arity$1(se),new cljs.core.Keyword(null,"ne","ne",-1792628743).cljs$core$IFn$_invoke$arity$1(se),new cljs.core.Keyword(null,"sw","sw",833113913).cljs$core$IFn$_invoke$arity$1(sw),new cljs.core.Keyword(null,"se","se",-1419643721).cljs$core$IFn$_invoke$arity$1(sw),new cljs.core.Keyword(null,"sw","sw",833113913).cljs$core$IFn$_invoke$arity$1(se),new cljs.core.Keyword(null,"se","se",-1419643721).cljs$core$IFn$_invoke$arity$1(se)], null);
});
conways_game_of_life.hashlife.to_1d = (function conways_game_of_life$hashlife$to_1d(p__89588){
var map__89589 = p__89588;
var map__89589__$1 = (((((!((map__89589 == null))))?(((((map__89589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89589):map__89589);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89589__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89589__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (((3) * Math.abs(x)) + Math.abs(y));
});
conways_game_of_life.hashlife.get_cell = (function conways_game_of_life$hashlife$get_cell(c,x,y){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__89591 = Math.max(y,(0));
var G__89592 = (8);
return Math.min(G__89591,G__89592);
})(),(function (){var G__89593 = Math.max(x,(0));
var G__89594 = (8);
return Math.min(G__89593,G__89594);
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"alive?","alive?",-372447621)], null)))){
return (1);
} else {
return (0);
}
});
/**
 * From a list with cells of depth two, return the center cells
 */
conways_game_of_life.hashlife.list__GT_center = (function conways_game_of_life$hashlife$list__GT_center(l){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l,(10))], null);
});
conways_game_of_life.hashlife.get_center = (function conways_game_of_life$hashlife$get_center(p__89599){
var map__89600 = p__89599;
var map__89600__$1 = (((((!((map__89600 == null))))?(((((map__89600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89600):map__89600);
var nw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89600__$1,new cljs.core.Keyword(null,"nw","nw",487743706));
var ne = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89600__$1,new cljs.core.Keyword(null,"ne","ne",-1792628743));
var se = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89600__$1,new cljs.core.Keyword(null,"se","se",-1419643721));
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89600__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
return conways_game_of_life.quadtree.make_node.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"se","se",-1419643721).cljs$core$IFn$_invoke$arity$1(nw),new cljs.core.Keyword(null,"sw","sw",833113913).cljs$core$IFn$_invoke$arity$1(ne),new cljs.core.Keyword(null,"nw","nw",487743706).cljs$core$IFn$_invoke$arity$1(se),new cljs.core.Keyword(null,"ne","ne",-1792628743).cljs$core$IFn$_invoke$arity$1(sw));
});
conways_game_of_life.hashlife.node__GT_list = (function conways_game_of_life$hashlife$node__GT_list(tree){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw","nw",487743706).cljs$core$IFn$_invoke$arity$1(tree),new cljs.core.Keyword(null,"ne","ne",-1792628743).cljs$core$IFn$_invoke$arity$1(tree),new cljs.core.Keyword(null,"se","se",-1419643721).cljs$core$IFn$_invoke$arity$1(tree),new cljs.core.Keyword(null,"sw","sw",833113913).cljs$core$IFn$_invoke$arity$1(tree)], null);
});
conways_game_of_life.hashlife.tree__GT_cells = (function conways_game_of_life$hashlife$tree__GT_cells(var_args){
var G__89603 = arguments.length;
switch (G__89603) {
case 1:
return conways_game_of_life.hashlife.tree__GT_cells.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return conways_game_of_life.hashlife.tree__GT_cells.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(conways_game_of_life.hashlife.tree__GT_cells.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return conways_game_of_life.hashlife.tree__GT_cells.cljs$core$IFn$_invoke$arity$3(tree,null,cljs.core.PersistentVector.EMPTY);
}));

(conways_game_of_life.hashlife.tree__GT_cells.cljs$core$IFn$_invoke$arity$3 = (function (p__89604,path,cells){
var map__89605 = p__89604;
var map__89605__$1 = (((((!((map__89605 == null))))?(((((map__89605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89605):map__89605);
var tree = map__89605__$1;
var nw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89605__$1,new cljs.core.Keyword(null,"nw","nw",487743706));
var ne = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89605__$1,new cljs.core.Keyword(null,"ne","ne",-1792628743));
var se = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89605__$1,new cljs.core.Keyword(null,"se","se",-1419643721));
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89605__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89605__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
if((tree == null)){
return cells;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(depth,(1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cells,(((((nw == null)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(nw) == null))))?cljs.core.PersistentVector.EMPTY:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nw,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"nw","nw",487743706)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((ne == null)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ne) == null))))?cljs.core.PersistentVector.EMPTY:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ne,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"ne","ne",-1792628743)))),(((((se == null)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(se) == null))))?cljs.core.PersistentVector.EMPTY:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(se,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"se","se",-1419643721)))),(((((sw == null)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(sw) == null))))?cljs.core.PersistentVector.EMPTY:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sw,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"sw","sw",833113913))))], 0));
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cells,conways_game_of_life.hashlife.tree__GT_cells.cljs$core$IFn$_invoke$arity$3(nw,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"nw","nw",487743706)),cells),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conways_game_of_life.hashlife.tree__GT_cells.cljs$core$IFn$_invoke$arity$3(ne,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"ne","ne",-1792628743)),cells),conways_game_of_life.hashlife.tree__GT_cells.cljs$core$IFn$_invoke$arity$3(se,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"se","se",-1419643721)),cells),conways_game_of_life.hashlife.tree__GT_cells.cljs$core$IFn$_invoke$arity$3(sw,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"sw","sw",833113913)),cells)], 0)));

}
}
}));

(conways_game_of_life.hashlife.tree__GT_cells.cljs$lang$maxFixedArity = 3);

cljs.core.conj.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword(null,"pop","pop",-1734778776));
conways_game_of_life.hashlife.base_case = (function conways_game_of_life$hashlife$base_case(tree,survive_QMARK_,birth_QMARK_){
var cells = conways_game_of_life.hashlife.tree__GT_cells.cljs$core$IFn$_invoke$arity$1(tree);
var p = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (cell){
var n = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"alive?","alive?",-372447621)], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ne){
return conways_game_of_life.quadtree.find_leaf(tree,(function (p__89614){
var map__89618 = p__89614;
var map__89618__$1 = (((((!((map__89618 == null))))?(((((map__89618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89618):map__89618);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89618__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89618__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.first(ne))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.second(ne))));
}));
}),conways_game_of_life.hashlife.neighbours(cell))));
var live_QMARK_ = (function (){var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(3));
if(or__4185__auto__){
return or__4185__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(2))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"alive?","alive?",-372447621)], null));
} else {
return false;
}
}
})();
return cljs.core.assoc_in(cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"alive?","alive?",-372447621)], null),live_QMARK_);
}),cells);
var c = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (t,cell){
return cljs.core.assoc_in(t,cljs.core.reverse(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cell)),cell);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"depth","depth",1768663640),new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(tree),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(tree)], null),p);
return conways_game_of_life.hashlife.get_center(c);
});
conways_game_of_life.hashlife.find_nw = (function conways_game_of_life$hashlife$find_nw(tree){
return new cljs.core.Keyword(null,"nw","nw",487743706).cljs$core$IFn$_invoke$arity$1(tree);
});
conways_game_of_life.hashlife.find_nn = (function conways_game_of_life$hashlife$find_nn(tree){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conways_game_of_life.quadtree.make_node.cljs$core$IFn$_invoke$arity$5(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw","nw",487743706),new cljs.core.Keyword(null,"ne","ne",-1792628743)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ne","ne",-1792628743),new cljs.core.Keyword(null,"nw","nw",487743706)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ne","ne",-1792628743),new cljs.core.Keyword(null,"sw","sw",833113913)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw","nw",487743706),new cljs.core.Keyword(null,"se","se",-1419643721)], null)),(new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(tree) - (1))),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(tree));
});
conways_game_of_life.hashlife.find_ne = (function conways_game_of_life$hashlife$find_ne(tree){
return new cljs.core.Keyword(null,"ne","ne",-1792628743).cljs$core$IFn$_invoke$arity$1(tree);
});
conways_game_of_life.hashlife.find_ww = (function conways_game_of_life$hashlife$find_ww(tree){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conways_game_of_life.quadtree.make_node.cljs$core$IFn$_invoke$arity$5(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw","nw",487743706),new cljs.core.Keyword(null,"sw","sw",833113913)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw","nw",487743706),new cljs.core.Keyword(null,"se","se",-1419643721)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sw","sw",833113913),new cljs.core.Keyword(null,"ne","ne",-1792628743)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sw","sw",833113913),new cljs.core.Keyword(null,"nw","nw",487743706)], null)),(new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(tree) - (1))),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(tree));
});
conways_game_of_life.hashlife.find_cc = (function conways_game_of_life$hashlife$find_cc(tree){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conways_game_of_life.quadtree.make_node.cljs$core$IFn$_invoke$arity$5(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw","nw",487743706),new cljs.core.Keyword(null,"se","se",-1419643721)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ne","ne",-1792628743),new cljs.core.Keyword(null,"sw","sw",833113913)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"se","se",-1419643721),new cljs.core.Keyword(null,"nw","nw",487743706)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sw","sw",833113913),new cljs.core.Keyword(null,"ne","ne",-1792628743)], null)),(new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(tree) - (1))),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(tree));
});
conways_game_of_life.hashlife.find_ee = (function conways_game_of_life$hashlife$find_ee(tree){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conways_game_of_life.quadtree.make_node.cljs$core$IFn$_invoke$arity$5(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ne","ne",-1792628743),new cljs.core.Keyword(null,"sw","sw",833113913)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ne","ne",-1792628743),new cljs.core.Keyword(null,"se","se",-1419643721)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"se","se",-1419643721),new cljs.core.Keyword(null,"ne","ne",-1792628743)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"se","se",-1419643721),new cljs.core.Keyword(null,"nw","nw",487743706)], null)),(new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(tree) - (1))),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(tree));
});
conways_game_of_life.hashlife.find_sw = (function conways_game_of_life$hashlife$find_sw(tree){
return new cljs.core.Keyword(null,"sw","sw",833113913).cljs$core$IFn$_invoke$arity$1(tree);
});
conways_game_of_life.hashlife.find_ss = (function conways_game_of_life$hashlife$find_ss(tree){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conways_game_of_life.quadtree.make_node.cljs$core$IFn$_invoke$arity$5(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sw","sw",833113913),new cljs.core.Keyword(null,"ne","ne",-1792628743)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"se","se",-1419643721),new cljs.core.Keyword(null,"nw","nw",487743706)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"se","se",-1419643721),new cljs.core.Keyword(null,"sw","sw",833113913)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sw","sw",833113913),new cljs.core.Keyword(null,"se","se",-1419643721)], null)),(new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(tree) - (1))),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(tree));
});
conways_game_of_life.hashlife.find_se = (function conways_game_of_life$hashlife$find_se(tree){
return new cljs.core.Keyword(null,"se","se",-1419643721).cljs$core$IFn$_invoke$arity$1(tree);
});
if((typeof conways_game_of_life !== 'undefined') && (typeof conways_game_of_life.hashlife !== 'undefined') && (typeof conways_game_of_life.hashlife.db_v6 !== 'undefined')){
} else {
conways_game_of_life.hashlife.db_v6 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
conways_game_of_life.hashlife.next_generation_v6 = (function conways_game_of_life$hashlife$next_generation_v6(tree){
if((!((tree == null)))){
} else {
throw (new Error("Assert failed: (not (nil? tree))"));
}

if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conways_game_of_life.hashlife.db_v6),tree))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conways_game_of_life.hashlife.db_v6),tree);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(tree),(2))){
return conways_game_of_life.hashlife.base_case(tree,null,null);
} else {
var sub_depth = (new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(tree) - (1));
var b = new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(tree);
var w = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(tree)) / (2));
var nw = (function (){var G__89637 = conways_game_of_life.hashlife.find_nw(tree);
return (conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1 ? conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1(G__89637) : conways_game_of_life.hashlife.next_generation_v6.call(null,G__89637));
})();
var nn = (function (){var G__89638 = conways_game_of_life.hashlife.find_nn(tree);
return (conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1 ? conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1(G__89638) : conways_game_of_life.hashlife.next_generation_v6.call(null,G__89638));
})();
var ne = (function (){var G__89642 = conways_game_of_life.hashlife.find_ne(tree);
return (conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1 ? conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1(G__89642) : conways_game_of_life.hashlife.next_generation_v6.call(null,G__89642));
})();
var ww = (function (){var G__89643 = conways_game_of_life.hashlife.find_ww(tree);
return (conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1 ? conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1(G__89643) : conways_game_of_life.hashlife.next_generation_v6.call(null,G__89643));
})();
var cc = (function (){var G__89644 = conways_game_of_life.hashlife.find_cc(tree);
return (conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1 ? conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1(G__89644) : conways_game_of_life.hashlife.next_generation_v6.call(null,G__89644));
})();
var ee = (function (){var G__89645 = conways_game_of_life.hashlife.find_ee(tree);
return (conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1 ? conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1(G__89645) : conways_game_of_life.hashlife.next_generation_v6.call(null,G__89645));
})();
var sw = (function (){var G__89646 = conways_game_of_life.hashlife.find_sw(tree);
return (conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1 ? conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1(G__89646) : conways_game_of_life.hashlife.next_generation_v6.call(null,G__89646));
})();
var ss = (function (){var G__89647 = conways_game_of_life.hashlife.find_ss(tree);
return (conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1 ? conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1(G__89647) : conways_game_of_life.hashlife.next_generation_v6.call(null,G__89647));
})();
var se = (function (){var G__89648 = conways_game_of_life.hashlife.find_se(tree);
return (conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1 ? conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1(G__89648) : conways_game_of_life.hashlife.next_generation_v6.call(null,G__89648));
})();
var nw__$1 = (function (){var G__89649 = conways_game_of_life.quadtree.make_node.cljs$core$IFn$_invoke$arity$5(nw,nn,cc,ww,sub_depth);
return (conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1 ? conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1(G__89649) : conways_game_of_life.hashlife.next_generation_v6.call(null,G__89649));
})();
var ne__$1 = (function (){var G__89650 = conways_game_of_life.quadtree.make_node.cljs$core$IFn$_invoke$arity$5(nn,ne,ee,cc,sub_depth);
return (conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1 ? conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1(G__89650) : conways_game_of_life.hashlife.next_generation_v6.call(null,G__89650));
})();
var sw__$1 = (function (){var G__89651 = conways_game_of_life.quadtree.make_node.cljs$core$IFn$_invoke$arity$5(ww,cc,ss,sw,sub_depth);
return (conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1 ? conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1(G__89651) : conways_game_of_life.hashlife.next_generation_v6.call(null,G__89651));
})();
var se__$1 = (function (){var G__89652 = conways_game_of_life.quadtree.make_node.cljs$core$IFn$_invoke$arity$5(cc,ee,se,ss,sub_depth);
return (conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1 ? conways_game_of_life.hashlife.next_generation_v6.cljs$core$IFn$_invoke$arity$1(G__89652) : conways_game_of_life.hashlife.next_generation_v6.call(null,G__89652));
})();
var calc = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conways_game_of_life.quadtree.make_node.cljs$core$IFn$_invoke$arity$4(nw__$1,ne__$1,se__$1,sw__$1),new cljs.core.Keyword(null,"bounds","bounds",1691609455),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword(null,"width","width",-384071477),w));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(conways_game_of_life.hashlife.db_v6,cljs.core.assoc,cljs.core.hash(tree),calc);

return calc;

}
}
});
conways_game_of_life.hashlife.memo_next_generation_v6 = cljs.core.memoize(conways_game_of_life.hashlife.next_generation_v6);
conways_game_of_life.hashlife.cell_generator = (function conways_game_of_life$hashlife$cell_generator(n,alive_cells){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (a,b){
return cljs.core.compare(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"i","i",-1386841315)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"i","i",-1386841315)], null)));
}),cljs.core.flatten(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (j){
var ii = (j + (i * n));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),j,new cljs.core.Keyword(null,"y","y",-1757859776),i,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),ii,new cljs.core.Keyword(null,"alive?","alive?",-372447621),cljs.core.some((function (c){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null),c);
}),alive_cells)], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n))));
});
/**
 * Grows a tree upwards, make it one depth deeper if that makes sense?
 */
conways_game_of_life.hashlife.grow_tree = (function conways_game_of_life$hashlife$grow_tree(tree){
var cells = conways_game_of_life.hashlife.tree__GT_cells.cljs$core$IFn$_invoke$arity$1(tree);
var deeper_tree = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"depth","depth",1768663640),(new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(tree) + (1)),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"x","x",2099068185)], null)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"y","y",-1757859776)], null)),new cljs.core.Keyword(null,"width","width",-384071477),((2) * cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"width","width",-384071477)], null)))], null)], null);
return deeper_tree;
});
conways_game_of_life.hashlife.__GT_1d = (function conways_game_of_life$hashlife$__GT_1d(x,y,w){
return (x + (y * w));
});
conways_game_of_life.hashlife.glider = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"i","i",-1386841315),conways_game_of_life.hashlife.__GT_1d((2),(2),(8))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"i","i",-1386841315),conways_game_of_life.hashlife.__GT_1d((4),(2),(8))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(3),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"i","i",-1386841315),conways_game_of_life.hashlife.__GT_1d((3),(3),(8))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(3),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"i","i",-1386841315),conways_game_of_life.hashlife.__GT_1d((4),(3),(8))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(4),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"i","i",-1386841315),conways_game_of_life.hashlife.__GT_1d((3),(4),(8))], null)], null)], null);
conways_game_of_life.hashlife.step = (function conways_game_of_life$hashlife$step(p__89657){
var map__89658 = p__89657;
var map__89658__$1 = (((((!((map__89658 == null))))?(((((map__89658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89658):map__89658);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89658__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var world_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89658__$1,new cljs.core.Keyword(null,"world-width","world-width",1762701691));
var center = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89658__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89658__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__89660){
var map__89661 = p__89660;
var map__89661__$1 = (((((!((map__89661 == null))))?(((((map__89661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89661):map__89661);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89661__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89661__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__89663){
var map__89664 = p__89663;
var map__89664__$1 = (((((!((map__89664 == null))))?(((((map__89664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89664):map__89664);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89664__$1,new cljs.core.Keyword(null,"data","data",-232669377));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Alive?",data], 0));

return new cljs.core.Keyword(null,"alive?","alive?",-372447621).cljs$core$IFn$_invoke$arity$1(data);
}),conways_game_of_life.hashlife.tree__GT_cells.cljs$core$IFn$_invoke$arity$1(conways_game_of_life.hashlife.next_generation_v6(conways_game_of_life.quadtree.insert_cells(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),center,new cljs.core.Keyword(null,"y","y",-1757859776),center,new cljs.core.Keyword(null,"width","width",-384071477),center], null)], null),conways_game_of_life.hashlife.cell_generator(world_width,cells))))));
});
((7) & (~ (1)));
((8) | (1));
((1) << (1));

//# sourceMappingURL=conways_game_of_life.hashlife.js.map
