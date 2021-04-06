goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__4795__auto__ = [];
var len__4789__auto___30541 = arguments.length;
var i__4790__auto___30542 = (0);
while(true){
if((i__4790__auto___30542 < len__4789__auto___30541)){
args__4795__auto__.push((arguments[i__4790__auto___30542]));

var G__30544 = (i__4790__auto___30542 + (1));
i__4790__auto___30542 = G__30544;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
}));

(cljs.pprint.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.print.cljs$lang$applyTo = (function (seq26176){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26176));
}));

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4795__auto__ = [];
var len__4789__auto___30551 = arguments.length;
var i__4790__auto___30552 = (0);
while(true){
if((i__4790__auto___30552 < len__4789__auto___30551)){
args__4795__auto__.push((arguments[i__4790__auto___30552]));

var G__30553 = (i__4790__auto___30552 + (1));
i__4790__auto___30552 = G__30553;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.println.cljs$lang$applyTo = (function (seq26179){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26179));
}));

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__26184 = cljs.core._EQ_;
var expr__26185 = c;
if(cljs.core.truth_((function (){var G__26187 = "\b";
var G__26188 = expr__26185;
return (pred__26184.cljs$core$IFn$_invoke$arity$2 ? pred__26184.cljs$core$IFn$_invoke$arity$2(G__26187,G__26188) : pred__26184.call(null,G__26187,G__26188));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__26189 = " ";
var G__26190 = expr__26185;
return (pred__26184.cljs$core$IFn$_invoke$arity$2 ? pred__26184.cljs$core$IFn$_invoke$arity$2(G__26189,G__26190) : pred__26184.call(null,G__26189,G__26190));
})())){
return "\\space";
} else {
if(cljs.core.truth_((function (){var G__26191 = "\t";
var G__26192 = expr__26185;
return (pred__26184.cljs$core$IFn$_invoke$arity$2 ? pred__26184.cljs$core$IFn$_invoke$arity$2(G__26191,G__26192) : pred__26184.call(null,G__26191,G__26192));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__26197 = "\n";
var G__26198 = expr__26185;
return (pred__26184.cljs$core$IFn$_invoke$arity$2 ? pred__26184.cljs$core$IFn$_invoke$arity$2(G__26197,G__26198) : pred__26184.call(null,G__26197,G__26198));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__26199 = "\f";
var G__26200 = expr__26185;
return (pred__26184.cljs$core$IFn$_invoke$arity$2 ? pred__26184.cljs$core$IFn$_invoke$arity$2(G__26199,G__26200) : pred__26184.call(null,G__26199,G__26200));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__26201 = "\r";
var G__26202 = expr__26185;
return (pred__26184.cljs$core$IFn$_invoke$arity$2 ? pred__26184.cljs$core$IFn$_invoke$arity$2(G__26201,G__26202) : pred__26184.call(null,G__26201,G__26202));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__26203 = "\"";
var G__26204 = expr__26185;
return (pred__26184.cljs$core$IFn$_invoke$arity$2 ? pred__26184.cljs$core$IFn$_invoke$arity$2(G__26203,G__26204) : pred__26184.call(null,G__26203,G__26204));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__26209 = "\\";
var G__26210 = expr__26185;
return (pred__26184.cljs$core$IFn$_invoke$arity$2 ? pred__26184.cljs$core$IFn$_invoke$arity$2(G__26209,G__26210) : pred__26184.call(null,G__26209,G__26210));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__4795__auto__ = [];
var len__4789__auto___30558 = arguments.length;
var i__4790__auto___30559 = (0);
while(true){
if((i__4790__auto___30559 < len__4789__auto___30558)){
args__4795__auto__.push((arguments[i__4790__auto___30559]));

var G__30560 = (i__4790__auto___30559 + (1));
i__4790__auto___30559 = G__30560;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
}));

(cljs.pprint.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.pr.cljs$lang$applyTo = (function (seq26211){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26211));
}));

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___30562 = arguments.length;
var i__4790__auto___30564 = (0);
while(true){
if((i__4790__auto___30564 < len__4789__auto___30562)){
args__4795__auto__.push((arguments[i__4790__auto___30564]));

var G__30566 = (i__4790__auto___30564 + (1));
i__4790__auto___30564 = G__30566;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.prn.cljs$lang$applyTo = (function (seq26212){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26212));
}));

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && ((!(isNaN(n)))) && ((!((n === Infinity)))) && ((!((parseFloat(n) === parseInt(n,(10)))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__26237 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26237,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26237,(1),null);
var G__30575 = new_context;
var G__30576 = remainder;
var G__30577 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__30575;
lis__$1 = G__30576;
acc = G__30577;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__26245 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26245,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26245,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__30584 = new_context;
var G__30585 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__30584;
acc = G__30585;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__26251 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26251,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26251,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26251,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__30586 = new_context;
var G__30587 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__30586;
acc = G__30587;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function cljs$pprint$unzip_map_$_iter__26254(s__26255){
return (new cljs.core.LazySeq(null,(function (){
var s__26255__$1 = s__26255;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26255__$1);
if(temp__5735__auto__){
var s__26255__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26255__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__26255__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__26257 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__26256 = (0);
while(true){
if((i__26256 < size__4581__auto__)){
var vec__26259 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__26256);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26259,(0),null);
var vec__26262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26259,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26262,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26262,(1),null);
cljs.core.chunk_append(b__26257,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__30593 = (i__26256 + (1));
i__26256 = G__30593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26257),cljs$pprint$unzip_map_$_iter__26254(cljs.core.chunk_rest(s__26255__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26257),null);
}
} else {
var vec__26265 = cljs.core.first(s__26255__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26265,(0),null);
var vec__26268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26265,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26268,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26268,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__26254(cljs.core.rest(s__26255__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function cljs$pprint$unzip_map_$_iter__26271(s__26272){
return (new cljs.core.LazySeq(null,(function (){
var s__26272__$1 = s__26272;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26272__$1);
if(temp__5735__auto__){
var s__26272__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26272__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__26272__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__26274 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__26273 = (0);
while(true){
if((i__26273 < size__4581__auto__)){
var vec__26275 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__26273);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26275,(0),null);
var vec__26278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26275,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26278,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26278,(1),null);
cljs.core.chunk_append(b__26274,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__30600 = (i__26273 + (1));
i__26273 = G__30600;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26274),cljs$pprint$unzip_map_$_iter__26271(cljs.core.chunk_rest(s__26272__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26274),null);
}
} else {
var vec__26281 = cljs.core.first(s__26272__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26281,(0),null);
var vec__26284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26281,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26284,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26284,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__26271(cljs.core.rest(s__26272__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function cljs$pprint$tuple_map_$_iter__26287(s__26288){
return (new cljs.core.LazySeq(null,(function (){
var s__26288__$1 = s__26288;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26288__$1);
if(temp__5735__auto__){
var s__26288__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26288__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__26288__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__26290 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__26289 = (0);
while(true){
if((i__26289 < size__4581__auto__)){
var vec__26291 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__26289);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26291,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26291,(1),null);
cljs.core.chunk_append(b__26290,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__30608 = (i__26289 + (1));
i__26289 = G__30608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26290),cljs$pprint$tuple_map_$_iter__26287(cljs.core.chunk_rest(s__26288__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26290),null);
}
} else {
var vec__26294 = cljs.core.first(s__26288__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26294,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26294,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__26287(cljs.core.rest(s__26288__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__30611 = (n - (1));
n = G__30611;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__30613 = (n + (1));
n = G__30613;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__26298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__26298) : test.call(null,G__26298));
})())))){
return pos;
} else {
var G__30617 = (pos + (1));
pos = G__30617;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((((!((pp == null)))) && ((!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__4487__auto__ = (((pp == null))?null:pp);
var m__4488__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4488__auto__.call(null,pp));
} else {
var m__4485__auto__ = (cljs.pprint._ppflush["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4485__auto__.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__26300 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__26300) : sym.call(null,G__26300));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__26311 = arguments.length;
switch (G__26311) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
}));

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint26312 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint26312 = (function (writer,max_columns,fields,meta26313){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta26313 = meta26313;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint26312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26314,meta26313__$1){
var self__ = this;
var _26314__$1 = this;
return (new cljs.pprint.t_cljs$pprint26312(self__.writer,self__.max_columns,self__.fields,meta26313__$1));
}));

(cljs.pprint.t_cljs$pprint26312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26314){
var self__ = this;
var _26314__$1 = this;
return self__.meta26313;
}));

(cljs.pprint.t_cljs$pprint26312.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

(cljs.pprint.t_cljs$pprint26312.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint26312.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__26315 = cljs.core._EQ_;
var expr__26316 = cljs.core.type(x);
if(cljs.core.truth_((pred__26315.cljs$core$IFn$_invoke$arity$2 ? pred__26315.cljs$core$IFn$_invoke$arity$2(String,expr__26316) : pred__26315.call(null,String,expr__26316)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26309_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__26309_SHARP_,"\n");
}),s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_((pred__26315.cljs$core$IFn$_invoke$arity$2 ? pred__26315.cljs$core$IFn$_invoke$arity$2(Number,expr__26316) : pred__26315.call(null,Number,expr__26316)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__26316)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint26312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta26313","meta26313",1260303001,null)], null);
}));

(cljs.pprint.t_cljs$pprint26312.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint26312.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint26312");

(cljs.pprint.t_cljs$pprint26312.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.pprint/t_cljs$pprint26312");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint26312.
 */
cljs.pprint.__GT_t_cljs$pprint26312 = (function cljs$pprint$__GT_t_cljs$pprint26312(writer__$1,max_columns__$1,fields__$1,meta26313){
return (new cljs.pprint.t_cljs$pprint26312(writer__$1,max_columns__$1,fields__$1,meta26313));
});

}

return (new cljs.pprint.t_cljs$pprint26312(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k26320,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__26325 = k26320;
var G__26325__$1 = (((G__26325 instanceof cljs.core.Keyword))?G__26325.fqn:null);
switch (G__26325__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26320,else__4442__auto__);

}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__26329){
var vec__26330 = p__26329;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26330,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26330,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26319){
var self__ = this;
var G__26319__$1 = this;
return (new cljs.core.RecordIter((0),G__26319__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__26335 = (function (coll__4436__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__26335(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26321,other26322){
var self__ = this;
var this26321__$1 = this;
return (((!((other26322 == null)))) && ((this26321__$1.constructor === other26322.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26321__$1.parent,other26322.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26321__$1.section,other26322.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26321__$1.start_col,other26322.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26321__$1.indent,other26322.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26321__$1.done_nl,other26322.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26321__$1.intra_block_nl,other26322.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26321__$1.prefix,other26322.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26321__$1.per_line_prefix,other26322.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26321__$1.suffix,other26322.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26321__$1.logical_block_callback,other26322.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26321__$1.__extmap,other26322.__extmap)));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__26319){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__26340 = cljs.core.keyword_identical_QMARK_;
var expr__26341 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__26343 = new cljs.core.Keyword(null,"parent","parent",-878878779);
var G__26344 = expr__26341;
return (pred__26340.cljs$core$IFn$_invoke$arity$2 ? pred__26340.cljs$core$IFn$_invoke$arity$2(G__26343,G__26344) : pred__26340.call(null,G__26343,G__26344));
})())){
return (new cljs.pprint.logical_block(G__26319,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26345 = new cljs.core.Keyword(null,"section","section",-300141526);
var G__26346 = expr__26341;
return (pred__26340.cljs$core$IFn$_invoke$arity$2 ? pred__26340.cljs$core$IFn$_invoke$arity$2(G__26345,G__26346) : pred__26340.call(null,G__26345,G__26346));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__26319,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26347 = new cljs.core.Keyword(null,"start-col","start-col",668080143);
var G__26348 = expr__26341;
return (pred__26340.cljs$core$IFn$_invoke$arity$2 ? pred__26340.cljs$core$IFn$_invoke$arity$2(G__26347,G__26348) : pred__26340.call(null,G__26347,G__26348));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__26319,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26349 = new cljs.core.Keyword(null,"indent","indent",-148200125);
var G__26350 = expr__26341;
return (pred__26340.cljs$core$IFn$_invoke$arity$2 ? pred__26340.cljs$core$IFn$_invoke$arity$2(G__26349,G__26350) : pred__26340.call(null,G__26349,G__26350));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__26319,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26351 = new cljs.core.Keyword(null,"done-nl","done-nl",-381024340);
var G__26352 = expr__26341;
return (pred__26340.cljs$core$IFn$_invoke$arity$2 ? pred__26340.cljs$core$IFn$_invoke$arity$2(G__26351,G__26352) : pred__26340.call(null,G__26351,G__26352));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__26319,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26354 = new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875);
var G__26355 = expr__26341;
return (pred__26340.cljs$core$IFn$_invoke$arity$2 ? pred__26340.cljs$core$IFn$_invoke$arity$2(G__26354,G__26355) : pred__26340.call(null,G__26354,G__26355));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__26319,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26357 = new cljs.core.Keyword(null,"prefix","prefix",-265908465);
var G__26358 = expr__26341;
return (pred__26340.cljs$core$IFn$_invoke$arity$2 ? pred__26340.cljs$core$IFn$_invoke$arity$2(G__26357,G__26358) : pred__26340.call(null,G__26357,G__26358));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__26319,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26359 = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813);
var G__26360 = expr__26341;
return (pred__26340.cljs$core$IFn$_invoke$arity$2 ? pred__26340.cljs$core$IFn$_invoke$arity$2(G__26359,G__26360) : pred__26340.call(null,G__26359,G__26360));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__26319,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26361 = new cljs.core.Keyword(null,"suffix","suffix",367373057);
var G__26362 = expr__26341;
return (pred__26340.cljs$core$IFn$_invoke$arity$2 ? pred__26340.cljs$core$IFn$_invoke$arity$2(G__26361,G__26362) : pred__26340.call(null,G__26361,G__26362));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__26319,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26363 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194);
var G__26364 = expr__26341;
return (pred__26340.cljs$core$IFn$_invoke$arity$2 ? pred__26340.cljs$core$IFn$_invoke$arity$2(G__26363,G__26364) : pred__26340.call(null,G__26363,G__26364));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__26319,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__26319),null));
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
}));

(cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"section","section",-300141526),self__.section,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback,null))], null),self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__26319){
var self__ = this;
var this__4438__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__26319,self__.__extmap,self__.__hash));
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
}));

(cljs.pprint.logical_block.cljs$lang$type = true);

(cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
}));

(cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"cljs.pprint/logical-block");
}));

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__26323){
var extmap__4478__auto__ = (function (){var G__26368 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26323,new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], 0));
if(cljs.core.record_QMARK_(G__26323)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26368);
} else {
return G__26368;
}
})();
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__26323),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__26323),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__26323),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__26323),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__26323),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__26323),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__26323),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__26323),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__26323),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__26323),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__30835 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__30835;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k26370,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__26379 = k26370;
var G__26379__$1 = (((G__26379 instanceof cljs.core.Keyword))?G__26379.fqn:null);
switch (G__26379__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26370,else__4442__auto__);

}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__26382){
var vec__26386 = p__26382;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26386,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26386,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26369){
var self__ = this;
var G__26369__$1 = this;
return (new cljs.core.RecordIter((0),G__26369__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__26393 = (function (coll__4436__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__26393(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26371,other26372){
var self__ = this;
var this26371__$1 = this;
return (((!((other26372 == null)))) && ((this26371__$1.constructor === other26372.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26371__$1.type_tag,other26372.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26371__$1.data,other26372.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26371__$1.trailing_white_space,other26372.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26371__$1.start_pos,other26372.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26371__$1.end_pos,other26372.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26371__$1.__extmap,other26372.__extmap)));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__26369){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__26396 = cljs.core.keyword_identical_QMARK_;
var expr__26397 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__26399 = new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267);
var G__26400 = expr__26397;
return (pred__26396.cljs$core$IFn$_invoke$arity$2 ? pred__26396.cljs$core$IFn$_invoke$arity$2(G__26399,G__26400) : pred__26396.call(null,G__26399,G__26400));
})())){
return (new cljs.pprint.buffer_blob(G__26369,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26401 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__26402 = expr__26397;
return (pred__26396.cljs$core$IFn$_invoke$arity$2 ? pred__26396.cljs$core$IFn$_invoke$arity$2(G__26401,G__26402) : pred__26396.call(null,G__26401,G__26402));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__26369,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26403 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996);
var G__26404 = expr__26397;
return (pred__26396.cljs$core$IFn$_invoke$arity$2 ? pred__26396.cljs$core$IFn$_invoke$arity$2(G__26403,G__26404) : pred__26396.call(null,G__26403,G__26404));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__26369,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26405 = new cljs.core.Keyword(null,"start-pos","start-pos",668789086);
var G__26406 = expr__26397;
return (pred__26396.cljs$core$IFn$_invoke$arity$2 ? pred__26396.cljs$core$IFn$_invoke$arity$2(G__26405,G__26406) : pred__26396.call(null,G__26405,G__26406));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__26369,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26407 = new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926);
var G__26408 = expr__26397;
return (pred__26396.cljs$core$IFn$_invoke$arity$2 ? pred__26396.cljs$core$IFn$_invoke$arity$2(G__26407,G__26408) : pred__26396.call(null,G__26407,G__26408));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__26369,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__26369),null));
}
}
}
}
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__26369){
var self__ = this;
var this__4438__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__26369,self__.__extmap,self__.__hash));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.buffer_blob.cljs$lang$type = true);

(cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
}));

(cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"cljs.pprint/buffer-blob");
}));

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__26376){
var extmap__4478__auto__ = (function (){var G__26414 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26376,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__26376)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26414);
} else {
return G__26414;
}
})();
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__26376),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__26376),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__26376),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__26376),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__26376),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__26051__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__26051__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k26426,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__26440 = k26426;
var G__26440__$1 = (((G__26440 instanceof cljs.core.Keyword))?G__26440.fqn:null);
switch (G__26440__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26426,else__4442__auto__);

}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__26441){
var vec__26442 = p__26441;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26442,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26442,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26425){
var self__ = this;
var G__26425__$1 = this;
return (new cljs.core.RecordIter((0),G__26425__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__26451 = (function (coll__4436__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__26451(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26427,other26428){
var self__ = this;
var this26427__$1 = this;
return (((!((other26428 == null)))) && ((this26427__$1.constructor === other26428.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26427__$1.type_tag,other26428.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26427__$1.type,other26428.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26427__$1.logical_block,other26428.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26427__$1.start_pos,other26428.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26427__$1.end_pos,other26428.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26427__$1.__extmap,other26428.__extmap)));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__26425){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__26462 = cljs.core.keyword_identical_QMARK_;
var expr__26463 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__26465 = new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267);
var G__26466 = expr__26463;
return (pred__26462.cljs$core$IFn$_invoke$arity$2 ? pred__26462.cljs$core$IFn$_invoke$arity$2(G__26465,G__26466) : pred__26462.call(null,G__26465,G__26466));
})())){
return (new cljs.pprint.nl_t(G__26425,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26469 = new cljs.core.Keyword(null,"type","type",1174270348);
var G__26470 = expr__26463;
return (pred__26462.cljs$core$IFn$_invoke$arity$2 ? pred__26462.cljs$core$IFn$_invoke$arity$2(G__26469,G__26470) : pred__26462.call(null,G__26469,G__26470));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__26425,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26471 = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564);
var G__26472 = expr__26463;
return (pred__26462.cljs$core$IFn$_invoke$arity$2 ? pred__26462.cljs$core$IFn$_invoke$arity$2(G__26471,G__26472) : pred__26462.call(null,G__26471,G__26472));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__26425,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26474 = new cljs.core.Keyword(null,"start-pos","start-pos",668789086);
var G__26475 = expr__26463;
return (pred__26462.cljs$core$IFn$_invoke$arity$2 ? pred__26462.cljs$core$IFn$_invoke$arity$2(G__26474,G__26475) : pred__26462.call(null,G__26474,G__26475));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__26425,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26476 = new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926);
var G__26477 = expr__26463;
return (pred__26462.cljs$core$IFn$_invoke$arity$2 ? pred__26462.cljs$core$IFn$_invoke$arity$2(G__26476,G__26477) : pred__26462.call(null,G__26476,G__26477));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__26425,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__26425),null));
}
}
}
}
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__26425){
var self__ = this;
var this__4438__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__26425,self__.__extmap,self__.__hash));
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.nl_t.cljs$lang$type = true);

(cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
}));

(cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"cljs.pprint/nl-t");
}));

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__26433){
var extmap__4478__auto__ = (function (){var G__26485 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26433,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__26433)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26485);
} else {
return G__26485;
}
})();
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__26433),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__26433),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__26433),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__26433),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__26433),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__26051__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__26051__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k26497,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__26514 = k26497;
var G__26514__$1 = (((G__26514 instanceof cljs.core.Keyword))?G__26514.fqn:null);
switch (G__26514__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26497,else__4442__auto__);

}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__26523){
var vec__26524 = p__26523;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26524,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26524,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26496){
var self__ = this;
var G__26496__$1 = this;
return (new cljs.core.RecordIter((0),G__26496__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__26546 = (function (coll__4436__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__26546(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26498,other26499){
var self__ = this;
var this26498__$1 = this;
return (((!((other26499 == null)))) && ((this26498__$1.constructor === other26499.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26498__$1.type_tag,other26499.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26498__$1.logical_block,other26499.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26498__$1.start_pos,other26499.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26498__$1.end_pos,other26499.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26498__$1.__extmap,other26499.__extmap)));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__26496){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__26564 = cljs.core.keyword_identical_QMARK_;
var expr__26565 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__26567 = new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267);
var G__26568 = expr__26565;
return (pred__26564.cljs$core$IFn$_invoke$arity$2 ? pred__26564.cljs$core$IFn$_invoke$arity$2(G__26567,G__26568) : pred__26564.call(null,G__26567,G__26568));
})())){
return (new cljs.pprint.start_block_t(G__26496,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26572 = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564);
var G__26573 = expr__26565;
return (pred__26564.cljs$core$IFn$_invoke$arity$2 ? pred__26564.cljs$core$IFn$_invoke$arity$2(G__26572,G__26573) : pred__26564.call(null,G__26572,G__26573));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__26496,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26575 = new cljs.core.Keyword(null,"start-pos","start-pos",668789086);
var G__26576 = expr__26565;
return (pred__26564.cljs$core$IFn$_invoke$arity$2 ? pred__26564.cljs$core$IFn$_invoke$arity$2(G__26575,G__26576) : pred__26564.call(null,G__26575,G__26576));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__26496,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26579 = new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926);
var G__26580 = expr__26565;
return (pred__26564.cljs$core$IFn$_invoke$arity$2 ? pred__26564.cljs$core$IFn$_invoke$arity$2(G__26579,G__26580) : pred__26564.call(null,G__26579,G__26580));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__26496,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__26496),null));
}
}
}
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__26496){
var self__ = this;
var this__4438__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__26496,self__.__extmap,self__.__hash));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.start_block_t.cljs$lang$type = true);

(cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
}));

(cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"cljs.pprint/start-block-t");
}));

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__26503){
var extmap__4478__auto__ = (function (){var G__26626 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26503,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__26503)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26626);
} else {
return G__26626;
}
})();
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__26503),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__26503),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__26503),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__26503),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__26051__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__26051__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k26644,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__26668 = k26644;
var G__26668__$1 = (((G__26668 instanceof cljs.core.Keyword))?G__26668.fqn:null);
switch (G__26668__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26644,else__4442__auto__);

}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__26691){
var vec__26692 = p__26691;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26692,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26692,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26643){
var self__ = this;
var G__26643__$1 = this;
return (new cljs.core.RecordIter((0),G__26643__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__26720 = (function (coll__4436__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__26720(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26645,other26646){
var self__ = this;
var this26645__$1 = this;
return (((!((other26646 == null)))) && ((this26645__$1.constructor === other26646.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26645__$1.type_tag,other26646.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26645__$1.logical_block,other26646.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26645__$1.start_pos,other26646.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26645__$1.end_pos,other26646.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26645__$1.__extmap,other26646.__extmap)));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__26643){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__26736 = cljs.core.keyword_identical_QMARK_;
var expr__26737 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__26741 = new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267);
var G__26742 = expr__26737;
return (pred__26736.cljs$core$IFn$_invoke$arity$2 ? pred__26736.cljs$core$IFn$_invoke$arity$2(G__26741,G__26742) : pred__26736.call(null,G__26741,G__26742));
})())){
return (new cljs.pprint.end_block_t(G__26643,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26744 = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564);
var G__26745 = expr__26737;
return (pred__26736.cljs$core$IFn$_invoke$arity$2 ? pred__26736.cljs$core$IFn$_invoke$arity$2(G__26744,G__26745) : pred__26736.call(null,G__26744,G__26745));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__26643,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26749 = new cljs.core.Keyword(null,"start-pos","start-pos",668789086);
var G__26750 = expr__26737;
return (pred__26736.cljs$core$IFn$_invoke$arity$2 ? pred__26736.cljs$core$IFn$_invoke$arity$2(G__26749,G__26750) : pred__26736.call(null,G__26749,G__26750));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__26643,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26753 = new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926);
var G__26754 = expr__26737;
return (pred__26736.cljs$core$IFn$_invoke$arity$2 ? pred__26736.cljs$core$IFn$_invoke$arity$2(G__26753,G__26754) : pred__26736.call(null,G__26753,G__26754));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__26643,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__26643),null));
}
}
}
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__26643){
var self__ = this;
var this__4438__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__26643,self__.__extmap,self__.__hash));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.end_block_t.cljs$lang$type = true);

(cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
}));

(cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"cljs.pprint/end-block-t");
}));

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__26649){
var extmap__4478__auto__ = (function (){var G__26774 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26649,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__26649)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26774);
} else {
return G__26774;
}
})();
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__26649),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__26649),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__26649),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__26649),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__26051__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__26051__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k26783,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__26803 = k26783;
var G__26803__$1 = (((G__26803 instanceof cljs.core.Keyword))?G__26803.fqn:null);
switch (G__26803__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26783,else__4442__auto__);

}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__26807){
var vec__26810 = p__26807;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26810,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26810,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26782){
var self__ = this;
var G__26782__$1 = this;
return (new cljs.core.RecordIter((0),G__26782__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__26840 = (function (coll__4436__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__26840(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26784,other26785){
var self__ = this;
var this26784__$1 = this;
return (((!((other26785 == null)))) && ((this26784__$1.constructor === other26785.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26784__$1.type_tag,other26785.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26784__$1.logical_block,other26785.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26784__$1.relative_to,other26785.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26784__$1.offset,other26785.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26784__$1.start_pos,other26785.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26784__$1.end_pos,other26785.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26784__$1.__extmap,other26785.__extmap)));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__26782){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__26859 = cljs.core.keyword_identical_QMARK_;
var expr__26860 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__26862 = new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267);
var G__26863 = expr__26860;
return (pred__26859.cljs$core$IFn$_invoke$arity$2 ? pred__26859.cljs$core$IFn$_invoke$arity$2(G__26862,G__26863) : pred__26859.call(null,G__26862,G__26863));
})())){
return (new cljs.pprint.indent_t(G__26782,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26865 = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564);
var G__26866 = expr__26860;
return (pred__26859.cljs$core$IFn$_invoke$arity$2 ? pred__26859.cljs$core$IFn$_invoke$arity$2(G__26865,G__26866) : pred__26859.call(null,G__26865,G__26866));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__26782,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26868 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051);
var G__26869 = expr__26860;
return (pred__26859.cljs$core$IFn$_invoke$arity$2 ? pred__26859.cljs$core$IFn$_invoke$arity$2(G__26868,G__26869) : pred__26859.call(null,G__26868,G__26869));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__26782,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26870 = new cljs.core.Keyword(null,"offset","offset",296498311);
var G__26871 = expr__26860;
return (pred__26859.cljs$core$IFn$_invoke$arity$2 ? pred__26859.cljs$core$IFn$_invoke$arity$2(G__26870,G__26871) : pred__26859.call(null,G__26870,G__26871));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__26782,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26872 = new cljs.core.Keyword(null,"start-pos","start-pos",668789086);
var G__26873 = expr__26860;
return (pred__26859.cljs$core$IFn$_invoke$arity$2 ? pred__26859.cljs$core$IFn$_invoke$arity$2(G__26872,G__26873) : pred__26859.call(null,G__26872,G__26873));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__26782,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26874 = new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926);
var G__26875 = expr__26860;
return (pred__26859.cljs$core$IFn$_invoke$arity$2 ? pred__26859.cljs$core$IFn$_invoke$arity$2(G__26874,G__26875) : pred__26859.call(null,G__26874,G__26875));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__26782,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__26782),null));
}
}
}
}
}
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__26782){
var self__ = this;
var this__4438__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__26782,self__.__extmap,self__.__hash));
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.indent_t.cljs$lang$type = true);

(cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
}));

(cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"cljs.pprint/indent-t");
}));

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__26790){
var extmap__4478__auto__ = (function (){var G__26882 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26790,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__26790)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26882);
} else {
return G__26882;
}
})();
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__26790),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__26790),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__26790),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__26790),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__26790),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__26790),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__26051__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__26051__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26895 = cljs.core.get_global_hierarchy;
return (fexpr__26895.cljs$core$IFn$_invoke$arity$0 ? fexpr__26895.cljs$core$IFn$_invoke$arity$0() : fexpr__26895.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),(function (p1__26893_SHARP_,p2__26892_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__26892_SHARP_);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__5735__auto___31191 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto___31191)){
var cb_31193 = temp__5735__auto___31191;
var G__26900_31194 = new cljs.core.Keyword(null,"start","start",-355208981);
(cb_31193.cljs$core$IFn$_invoke$arity$1 ? cb_31193.cljs$core$IFn$_invoke$arity$1(G__26900_31194) : cb_31193.call(null,G__26900_31194));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__5735__auto___31197 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5735__auto___31197)){
var prefix_31198 = temp__5735__auto___31197;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_31198);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__5735__auto___31203 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto___31203)){
var cb_31204 = temp__5735__auto___31203;
var G__26903_31205 = new cljs.core.Keyword(null,"end","end",-268185958);
(cb_31204.cljs$core$IFn$_invoke$arity$1 ? cb_31204.cljs$core$IFn$_invoke$arity$1(G__26903_31205) : cb_31204.call(null,G__26903_31205));
} else {
}

var temp__5735__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5735__auto__)){
var suffix = temp__5735__auto__;
return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__26906 = cljs.core._EQ_;
var expr__26907 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__26909 = new cljs.core.Keyword(null,"block","block",664686210);
var G__26910 = expr__26907;
return (pred__26906.cljs$core$IFn$_invoke$arity$2 ? pred__26906.cljs$core$IFn$_invoke$arity$2(G__26909,G__26910) : pred__26906.call(null,G__26909,G__26910));
})())){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__26911 = new cljs.core.Keyword(null,"current","current",-1088038603);
var G__26912 = expr__26907;
return (pred__26906.cljs$core$IFn$_invoke$arity$2 ? pred__26906.cljs$core$IFn$_invoke$arity$2(G__26911,G__26912) : pred__26906.call(null,G__26911,G__26912));
})())){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__26907)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__4185__auto__){
return or__4185__auto__;
} else {
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889))))){
return cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return false;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5733__auto___31215 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5733__auto___31215)){
var tws_31217 = temp__5733__auto___31215;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_31217);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__26931 = cljs.core.seq(tokens);
var chunk__26932 = null;
var count__26933 = (0);
var i__26934 = (0);
while(true){
if((i__26934 < count__26933)){
var token = chunk__26932.cljs$core$IIndexed$_nth$arity$2(null,i__26934);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5733__auto___31218 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5733__auto___31218)){
var tws_31223 = temp__5733__auto___31218;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_31223);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_31246 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4174__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4174__auto__)){
return tws_31246;
} else {
return and__4174__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_31246);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__31256 = seq__26931;
var G__31257 = chunk__26932;
var G__31258 = count__26933;
var G__31259 = (i__26934 + (1));
seq__26931 = G__31256;
chunk__26932 = G__31257;
count__26933 = G__31258;
i__26934 = G__31259;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26931);
if(temp__5735__auto__){
var seq__26931__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26931__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__26931__$1);
var G__31276 = cljs.core.chunk_rest(seq__26931__$1);
var G__31277 = c__4609__auto__;
var G__31278 = cljs.core.count(c__4609__auto__);
var G__31279 = (0);
seq__26931 = G__31276;
chunk__26932 = G__31277;
count__26933 = G__31278;
i__26934 = G__31279;
continue;
} else {
var token = cljs.core.first(seq__26931__$1);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5733__auto___31297 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5733__auto___31297)){
var tws_31298 = temp__5733__auto___31297;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_31298);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_31299 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4174__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4174__auto__)){
return tws_31299;
} else {
return and__4174__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_31299);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__31302 = cljs.core.next(seq__26931__$1);
var G__31303 = null;
var G__31304 = (0);
var G__31305 = (0);
seq__26931 = G__31302;
chunk__26932 = G__31303;
count__26933 = G__31304;
i__26934 = G__31305;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__4185__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_(this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width(this$);
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__4174__auto__ = miser_width;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = maxcol;
if(cljs.core.truth_(and__4174__auto____$1)){
if((cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width))){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return false;
}
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26976 = cljs.core.get_global_hierarchy;
return (fexpr__26976.cljs$core$IFn$_invoke$arity$0 ? fexpr__26976.cljs$core$IFn$_invoke$arity$0() : fexpr__26976.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),(function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__4185__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_(this$,subsection)));
if(or__4185__auto____$1){
return or__4185__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__26987_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_(p1__26987_SHARP_)) && (cljs.pprint.ancestor_QMARK_(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__26987_SHARP_),lb)))));
}),cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__26991_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__26991_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_(p1__26991_SHARP_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_(nl_lb,lb)))))));
}),cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__31339 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__31339;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_31345 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_31345);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__27008_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_(p1__27008_SHARP_)));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__27012 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27012,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27012,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__27015 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27015,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27015,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__27019 = newl;
var G__27020 = this$;
var G__27021 = section;
var G__27022 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__27019,G__27020,G__27021,G__27022) : cljs.pprint.emit_nl_QMARK_.call(null,G__27019,G__27020,G__27021,G__27022));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = (!(cljs.pprint.tokens_fit_QMARK_(this$,result)));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,buffer)))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if((!((buffer === new_buffer)))){
var G__31357 = new_buffer;
buffer = G__31357;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5733__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5733__auto__)){
var buf = temp__5733__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5735__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto__)){
var tws = temp__5735__auto__;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_31363 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_31364 = (oldpos_31363 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_31364);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_31363,newpos_31364));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__27052_31371 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__27053_31372 = null;
var count__27054_31373 = (0);
var i__27055_31374 = (0);
while(true){
if((i__27055_31374 < count__27054_31373)){
var l_31375__$1 = chunk__27053_31372.cljs$core$IIndexed$_nth$arity$2(null,i__27055_31374);
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_31375__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__31376 = seq__27052_31371;
var G__31377 = chunk__27053_31372;
var G__31378 = count__27054_31373;
var G__31379 = (i__27055_31374 + (1));
seq__27052_31371 = G__31376;
chunk__27053_31372 = G__31377;
count__27054_31373 = G__31378;
i__27055_31374 = G__31379;
continue;
} else {
var temp__5735__auto___31380 = cljs.core.seq(seq__27052_31371);
if(temp__5735__auto___31380){
var seq__27052_31381__$1 = temp__5735__auto___31380;
if(cljs.core.chunked_seq_QMARK_(seq__27052_31381__$1)){
var c__4609__auto___31383 = cljs.core.chunk_first(seq__27052_31381__$1);
var G__31385 = cljs.core.chunk_rest(seq__27052_31381__$1);
var G__31386 = c__4609__auto___31383;
var G__31387 = cljs.core.count(c__4609__auto___31383);
var G__31388 = (0);
seq__27052_31371 = G__31385;
chunk__27053_31372 = G__31386;
count__27054_31373 = G__31387;
i__27055_31374 = G__31388;
continue;
} else {
var l_31390__$1 = cljs.core.first(seq__27052_31381__$1);
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_31390__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__31391 = cljs.core.next(seq__27052_31381__$1);
var G__31392 = null;
var G__31393 = (0);
var G__31394 = (0);
seq__27052_31371 = G__31391;
chunk__27053_31372 = G__31392;
count__27054_31373 = G__31393;
i__27055_31374 = G__31394;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint27081 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint27081 = (function (writer,max_columns,miser_width,lb,fields,meta27082){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta27082 = meta27082;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint27081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27083,meta27082__$1){
var self__ = this;
var _27083__$1 = this;
return (new cljs.pprint.t_cljs$pprint27081(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta27082__$1));
}));

(cljs.pprint.t_cljs$pprint27081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27083){
var self__ = this;
var _27083__$1 = this;
return self__.meta27082;
}));

(cljs.pprint.t_cljs$pprint27081.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

(cljs.pprint.t_cljs$pprint27081.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__27088 = cljs.core._EQ_;
var expr__27089 = cljs.core.type(x);
if(cljs.core.truth_((pred__27088.cljs$core$IFn$_invoke$arity$2 ? pred__27088.cljs$core$IFn$_invoke$arity$2(String,expr__27089) : pred__27088.call(null,String,expr__27089)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,((s).length));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__27088.cljs$core$IFn$_invoke$arity$2 ? pred__27088.cljs$core$IFn$_invoke$arity$2(Number,expr__27089) : pred__27088.call(null,Number,expr__27089)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27089)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint27081.prototype.cljs$core$IWriter$_flush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
}));

(cljs.pprint.t_cljs$pprint27081.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.pprint.t_cljs$pprint27081.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens(this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
}));

(cljs.pprint.t_cljs$pprint27081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta27082","meta27082",2082671514,null)], null);
}));

(cljs.pprint.t_cljs$pprint27081.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint27081.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint27081");

(cljs.pprint.t_cljs$pprint27081.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.pprint/t_cljs$pprint27081");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint27081.
 */
cljs.pprint.__GT_t_cljs$pprint27081 = (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint27081(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta27082){
return (new cljs.pprint.t_cljs$pprint27081(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta27082));
});

}

return (new cljs.pprint.t_cljs$pprint27081(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

var temp__5735__auto___31449 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto___31449)){
var cb_31450 = temp__5735__auto___31449;
var G__27111_31452 = new cljs.core.Keyword(null,"start","start",-355208981);
(cb_31450.cljs$core$IFn$_invoke$arity$1 ? cb_31450.cljs$core$IFn$_invoke$arity$1(G__27111_31452) : cb_31450.call(null,G__27111_31452));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(lb.start_col,col);

return cljs.core.reset_BANG_(lb.indent,col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5735__auto___31470 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto___31470)){
var cb_31481 = temp__5735__auto___31470;
var G__27117_31483 = new cljs.core.Keyword(null,"end","end",-268185958);
(cb_31481.cljs$core$IFn$_invoke$arity$1 ? cb_31481.cljs$core$IFn$_invoke$arity$1(G__27117_31483) : cb_31481.call(null,G__27117_31483));
} else {
}
} else {
var oldpos_31498 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_31499 = (oldpos_31498 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_31499);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_31498,newpos_31499));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__27133 = cljs.core._EQ_;
var expr__27134 = relative_to;
if(cljs.core.truth_((function (){var G__27137 = new cljs.core.Keyword(null,"block","block",664686210);
var G__27138 = expr__27134;
return (pred__27133.cljs$core$IFn$_invoke$arity$2 ? pred__27133.cljs$core$IFn$_invoke$arity$2(G__27137,G__27138) : pred__27133.call(null,G__27137,G__27138));
})())){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__27141 = new cljs.core.Keyword(null,"current","current",-1088038603);
var G__27142 = expr__27134;
return (pred__27133.cljs$core$IFn$_invoke$arity$2 ? pred__27133.cljs$core$IFn$_invoke$arity$2(G__27141,G__27142) : pred__27133.call(null,G__27141,G__27142));
})())){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27134)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined')){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__27159_SHARP_){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__27159_SHARP_));
if(cljs.core.truth_(temp__5735__auto__)){
var v = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__27159_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x))){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return false;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__4174__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__4174__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})();
if(cljs.core.not(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
(cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1)));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__4795__auto__ = [];
var len__4789__auto___31525 = arguments.length;
var i__4790__auto___31526 = (0);
while(true){
if((i__4790__auto___31526 < len__4789__auto___31525)){
args__4795__auto__.push((arguments[i__4790__auto___31526]));

var G__31527 = (i__4790__auto___31526 + (1));
i__4790__auto___31526 = G__31527;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR__orig_val__27203 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__27204 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__27205 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__27206 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__27207 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__27208 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__27209 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__27210 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__27211 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__27212 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__27213 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__27214 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__27215 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__27216 = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__27217 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__27218 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__27219 = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__27220 = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__27221 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__27222 = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__27223 = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__27224 = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__27225 = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__27226 = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__27215);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__27216);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__27217);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__27218);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__27219);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__27220);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__27221);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__27222);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__27223);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__27224);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__27225);

(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__27226);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
var base_writer__26016__auto___31539 = base_writer;
var new_writer__26017__auto___31540 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__26016__auto___31539));
var _STAR_out_STAR__orig_val__27238_31541 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__27239_31542 = ((new_writer__26017__auto___31540)?cljs.pprint.make_pretty_writer(base_writer__26016__auto___31539,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__26016__auto___31539);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__27239_31542);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__27238_31541);
}} else {
var _STAR_out_STAR__orig_val__27244_31546 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__27245_31547 = base_writer;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__27245_31547);

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__27244_31546);
}}

if(optval === true){
cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
}

if((optval == null)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
}finally {}}finally {(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__27214);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__27213);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__27212);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__27211);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__27210);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__27209);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__27208);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__27207);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__27206);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__27205);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__27204);

(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__27203);
}}));

(cljs.pprint.write.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.pprint.write.cljs$lang$applyTo = (function (seq27198){
var G__27199 = cljs.core.first(seq27198);
var seq27198__$1 = cljs.core.next(seq27198);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27199,seq27198__$1);
}));

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__27259 = arguments.length;
switch (G__27259) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__27263 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__27264 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__27264);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__27263);
}}));

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__26016__auto__ = writer;
var new_writer__26017__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__26016__auto__));
var _STAR_out_STAR__orig_val__27269 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__27270 = ((new_writer__26017__auto__)?cljs.pprint.make_pretty_writer(base_writer__26016__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__26016__auto__);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__27270);

try{var _STAR_print_pretty_STAR__orig_val__27273_31559 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__27274_31560 = true;
(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__27274_31560);

try{cljs.pprint.write_out(object);
}finally {(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__27273_31559);
}
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_))))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__27269);
}}));

(cljs.pprint.pprint.cljs$lang$maxFixedArity = 2);

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$);

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__4174__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__4174__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__4795__auto__ = [];
var len__4789__auto___31578 = arguments.length;
var i__4790__auto___31579 = (0);
while(true){
if((i__4790__auto___31579 < len__4789__auto___31578)){
args__4795__auto__.push((arguments[i__4790__auto___31579]));

var G__31581 = (i__4790__auto___31579 + (1));
i__4790__auto___31579 = G__31581;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format(format_in):format_in);
var navigator = cljs.pprint.init_navigator(args);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator);
}));

(cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq27296){
var G__27297 = cljs.core.first(seq27296);
var seq27296__$1 = cljs.core.next(seq27296);
var G__27298 = cljs.core.first(seq27296__$1);
var seq27296__$2 = cljs.core.next(seq27296__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27297,G__27298,seq27296__$2);
}));

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^","\n"].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k27313,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__27320 = k27313;
var G__27320__$1 = (((G__27320 instanceof cljs.core.Keyword))?G__27320.fqn:null);
switch (G__27320__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27313,else__4442__auto__);

}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__27322){
var vec__27323 = p__27322;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27323,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27323,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27312){
var self__ = this;
var G__27312__$1 = this;
return (new cljs.core.RecordIter((0),G__27312__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__27350 = (function (coll__4436__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__27350(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27314,other27315){
var self__ = this;
var this27314__$1 = this;
return (((!((other27315 == null)))) && ((this27314__$1.constructor === other27315.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27314__$1.seq,other27315.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27314__$1.rest,other27315.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27314__$1.pos,other27315.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27314__$1.__extmap,other27315.__extmap)));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__27312){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__27358 = cljs.core.keyword_identical_QMARK_;
var expr__27359 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__27362 = new cljs.core.Keyword(null,"seq","seq",-1817803783);
var G__27363 = expr__27359;
return (pred__27358.cljs$core$IFn$_invoke$arity$2 ? pred__27358.cljs$core$IFn$_invoke$arity$2(G__27362,G__27363) : pred__27358.call(null,G__27362,G__27363));
})())){
return (new cljs.pprint.arg_navigator(G__27312,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27364 = new cljs.core.Keyword(null,"rest","rest",-1241696419);
var G__27365 = expr__27359;
return (pred__27358.cljs$core$IFn$_invoke$arity$2 ? pred__27358.cljs$core$IFn$_invoke$arity$2(G__27364,G__27365) : pred__27358.call(null,G__27364,G__27365));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__27312,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27366 = new cljs.core.Keyword(null,"pos","pos",-864607220);
var G__27367 = expr__27359;
return (pred__27358.cljs$core$IFn$_invoke$arity$2 ? pred__27358.cljs$core$IFn$_invoke$arity$2(G__27366,G__27367) : pred__27358.call(null,G__27366,G__27367));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__27312,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__27312),null));
}
}
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__27312){
var self__ = this;
var this__4438__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__27312,self__.__extmap,self__.__hash));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
}));

(cljs.pprint.arg_navigator.cljs$lang$type = true);

(cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
}));

(cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"cljs.pprint/arg-navigator");
}));

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__27317){
var extmap__4478__auto__ = (function (){var G__27375 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27317,new cljs.core.Keyword(null,"seq","seq",-1817803783),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], 0));
if(cljs.core.record_QMARK_(G__27317)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27375);
} else {
return G__27375;
}
})();
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__27317),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__27317),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__27317),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__27401 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27401,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27401,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format(raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
var G__27409 = navigator;
var G__27410 = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__27409,G__27410) : cljs.pprint.relative_reposition.call(null,G__27409,G__27410));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k27416,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__27431 = k27416;
var G__27431__$1 = (((G__27431 instanceof cljs.core.Keyword))?G__27431.fqn:null);
switch (G__27431__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27416,else__4442__auto__);

}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__27436){
var vec__27437 = p__27436;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27437,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27437,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27415){
var self__ = this;
var G__27415__$1 = this;
return (new cljs.core.RecordIter((0),G__27415__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__27463 = (function (coll__4436__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__27463(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27417,other27418){
var self__ = this;
var this27417__$1 = this;
return (((!((other27418 == null)))) && ((this27417__$1.constructor === other27418.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27417__$1.func,other27418.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27417__$1.def,other27418.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27417__$1.params,other27418.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27417__$1.offset,other27418.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27417__$1.__extmap,other27418.__extmap)));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__27415){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__27487 = cljs.core.keyword_identical_QMARK_;
var expr__27488 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__27491 = new cljs.core.Keyword(null,"func","func",-238706040);
var G__27492 = expr__27488;
return (pred__27487.cljs$core$IFn$_invoke$arity$2 ? pred__27487.cljs$core$IFn$_invoke$arity$2(G__27491,G__27492) : pred__27487.call(null,G__27491,G__27492));
})())){
return (new cljs.pprint.compiled_directive(G__27415,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27494 = new cljs.core.Keyword(null,"def","def",-1043430536);
var G__27495 = expr__27488;
return (pred__27487.cljs$core$IFn$_invoke$arity$2 ? pred__27487.cljs$core$IFn$_invoke$arity$2(G__27494,G__27495) : pred__27487.call(null,G__27494,G__27495));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__27415,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27496 = new cljs.core.Keyword(null,"params","params",710516235);
var G__27497 = expr__27488;
return (pred__27487.cljs$core$IFn$_invoke$arity$2 ? pred__27487.cljs$core$IFn$_invoke$arity$2(G__27496,G__27497) : pred__27487.call(null,G__27496,G__27497));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__27415,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27499 = new cljs.core.Keyword(null,"offset","offset",296498311);
var G__27500 = expr__27488;
return (pred__27487.cljs$core$IFn$_invoke$arity$2 ? pred__27487.cljs$core$IFn$_invoke$arity$2(G__27499,G__27500) : pred__27487.call(null,G__27499,G__27500));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__27415,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__27415),null));
}
}
}
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"func","func",-238706040),self__.func,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"def","def",-1043430536),self__.def,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null))], null),self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__27415){
var self__ = this;
var this__4438__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__27415,self__.__extmap,self__.__hash));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
}));

(cljs.pprint.compiled_directive.cljs$lang$type = true);

(cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
}));

(cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"cljs.pprint/compiled-directive");
}));

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__27426){
var extmap__4478__auto__ = (function (){var G__27531 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27426,new cljs.core.Keyword(null,"func","func",-238706040),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], 0));
if(cljs.core.record_QMARK_(G__27426)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27531);
} else {
return G__27531;
}
})();
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__27426),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__27426),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__27426),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__27426),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__27598,navigator){
var vec__27600 = p__27598;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27600,(0),null);
var vec__27603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27600,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27603,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27603,(1),null);
var vec__27607 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27607,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27607,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__27622 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27622,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27622,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str(cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__27647 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27647,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27647,(1),null);
var base_output = (function (){var or__4185__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__27672_SHARP_){
if((p1__27672_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__27672_SHARP_,base),cljs.core.quot(p1__27672_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27686_SHARP_){
if((p1__27686_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__27686_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__27686_SHARP_ - (10))));
}
}),cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__27755 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27755,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27755,(1),null);
if(cljs.pprint.integral_QMARK_(arg)){
var neg_31829 = (arg < (0));
var pos_arg_31830 = ((neg_31829)?(- arg):arg);
var raw_str_31831 = cljs.pprint.opt_base_str(base,pos_arg_31830);
var group_str_31832 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27740_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__27740_SHARP_);
}),cljs.pprint.group_by_STAR_(new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_31831));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_31831);
var signed_str_31833 = ((neg_31829)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_31832)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_31832)].join(''):group_str_31832
));
var padded_str_31834 = (((signed_str_31833.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_31833.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_31833)].join(''):signed_str_31833);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_31834], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),(((((!(cljs.core.empty_QMARK_(this$)))) && ((!(cljs.core.empty_QMARK_(acc))))))?", ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),(((((!(cljs.core.empty_QMARK_(this$)))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null)].join('');
} else {
var G__31899 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__31900 = (pos - (1));
var G__31901 = cljs.core.first(remainder);
var G__31902 = cljs.core.next(remainder);
acc = G__31899;
pos = G__31900;
this$ = G__31901;
remainder = G__31902;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__27925 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27925,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27925,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_31911 = (((arg < (0)))?(- arg):arg);
var parts_31912 = cljs.pprint.remainders((1000),abs_arg_31911);
if((cljs.core.count(parts_31912) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_31920 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_31912);
var full_str_31921 = cljs.pprint.add_english_scales(parts_strs_31920,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(((arg < (0)))?"minus ":null),full_str_31921].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if((((ten_digit > (0))) && ((!((unit_digit > (0))))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__28011 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28011,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28011,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_31944 = (((arg < (0)))?(- arg):arg);
var parts_31945 = cljs.pprint.remainders((1000),abs_arg_31944);
if((cljs.core.count(parts_31945) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_31950 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_31945));
var head_str_31951 = cljs.pprint.add_english_scales(parts_strs_31950,(1));
var tail_str_31952 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_31945));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(((arg < (0)))?"minus ":null),(((((!(cljs.core.empty_QMARK_(head_str_31951)))) && ((!(cljs.core.empty_QMARK_(tail_str_31952))))))?[head_str_31951,", ",tail_str_31952].join(''):(((!(cljs.core.empty_QMARK_(head_str_31951))))?[head_str_31951,"th"].join(''):tail_str_31952
))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_31979 = cljs.core.rem(arg,(100));
var not_teens_31980 = ((((11) < low_two_digits_31979)) || (((19) > low_two_digits_31979)));
var low_digit_31981 = cljs.core.rem(low_two_digits_31979,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((low_digit_31981 === (1))) && (not_teens_31980)))?"st":(((((low_digit_31981 === (2))) && (not_teens_31980)))?"nd":(((((low_digit_31981 === (3))) && (not_teens_31980)))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__28043 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28043,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28043,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_32005 = cljs.pprint.remainders((10),arg);
var acc_32006 = cljs.core.PersistentVector.EMPTY;
var pos_32007 = (cljs.core.count(digits_32005) - (1));
var digits_32008__$1 = digits_32005;
while(true){
if(cljs.core.empty_QMARK_(digits_32008__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_32006)], 0));
} else {
var digit_32012 = cljs.core.first(digits_32008__$1);
var G__32014 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_32012))?acc_32006:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_32006,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_32007),(digit_32012 - (1)))));
var G__32015 = (pos_32007 - (1));
var G__32016 = cljs.core.next(digits_32008__$1);
acc_32006 = G__32014;
pos_32007 = G__32015;
digits_32008__$1 = G__32016;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__28089 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28089,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28089,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__28104 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28104,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28104,(1),null);
var pred__28108_32046 = cljs.core._EQ_;
var expr__28109_32047 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__28111 = "o";
var G__28112 = expr__28109_32047;
return (pred__28108_32046.cljs$core$IFn$_invoke$arity$2 ? pred__28108_32046.cljs$core$IFn$_invoke$arity$2(G__28111,G__28112) : pred__28108_32046.call(null,G__28111,G__28112));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__28115 = "u";
var G__28116 = expr__28109_32047;
return (pred__28108_32046.cljs$core$IFn$_invoke$arity$2 ? pred__28108_32046.cljs$core$IFn$_invoke$arity$2(G__28115,G__28116) : pred__28108_32046.call(null,G__28115,G__28116));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__28108_32046.cljs$core$IFn$_invoke$arity$2 ? pred__28108_32046.cljs$core$IFn$_invoke$arity$2(null,expr__28109_32047) : pred__28108_32046.call(null,null,expr__28109_32047)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28109_32047)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__28122 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28122,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28122,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__28158 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28158,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28158,(1),null);
var vec__28161 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28161,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28161,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(f));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.str.cljs$core$IFn$_invoke$arity$1((((s).length) - (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1)))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc)].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__28182 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28182,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28182,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = (((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+"))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__32118 = (i - (1));
i = G__32118;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__4185__auto__ = d;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4273__auto__ = (2);
var y__4274__auto__ = w;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4273__auto__ = (e + (1));
var y__4274__auto__ = (w__$1 - (1));
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})():(w__$1 + e)
));
var vec__28199 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28199,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28199,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28199,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28199,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > ((result).length));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__28220 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28220,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28220,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc),".",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc)].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k),".",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k)].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__28244 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28244,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28244,(1),null);
var vec__28247 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28247,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28247,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__28250 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28250,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28250,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp)));
var vec__28253 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28253,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28253,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28253,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__4174__auto__ = w;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = d;
if(cljs.core.truth_(and__4174__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((((fixed_repr).length) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_32225 = ((fixed_repr__$1).length);
var signed_len_32226 = (cljs.core.truth_(add_sign)?(len_32225 + (1)):len_32225);
var prepend_zero_32227__$1 = ((prepend_zero) && ((!((signed_len_32226 >= w)))));
var append_zero_32228__$1 = ((append_zero) && ((!((signed_len_32226 >= w)))));
var full_len_32229 = ((((prepend_zero_32227__$1) || (append_zero_32228__$1)))?(signed_len_32226 + (1)):signed_len_32226);
if(cljs.core.truth_((((full_len_32229 > w))?new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params):false))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_32229),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero_32227__$1)?"0":null),fixed_repr__$1,((append_zero_32228__$1)?"0":null)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero)?"0":null),fixed_repr__$1,((append_zero)?"0":null)].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__28284 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28284,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28284,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__28291_32244 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__28293_32245 = G__28291_32244;
var mantissa_32246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28293_32245,(0),null);
var exp_32247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28293_32245,(1),null);
var G__28291_32258__$1 = G__28291_32244;
while(true){
var vec__28297_32259 = G__28291_32258__$1;
var mantissa_32260__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28297_32259,(0),null);
var exp_32261__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28297_32259,(1),null);
var w_32266 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_32267 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_32268 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_32269 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_32270 = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "E";
}
})();
var add_sign_32271 = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_32272 = (k_32269 <= (0));
var scaled_exp_32273 = (exp_32261__$1 - (k_32269 - (1)));
var scaled_exp_str_32274 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_32273));
var scaled_exp_str_32275__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_32270),(((scaled_exp_32273 < (0)))?"-":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_32268)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_32268 - ((scaled_exp_str_32274).length)),"0")):null)),scaled_exp_str_32274].join('');
var exp_width_32276 = ((scaled_exp_str_32275__$1).length);
var base_mantissa_width_32277 = cljs.core.count(mantissa_32260__$1);
var scaled_mantissa_32278 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_32269),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_32260__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_32267)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_32267 - (base_mantissa_width_32277 - (1))) - (((k_32269 < (0)))?(- k_32269):(0))),"0")):null))].join('');
var w_mantissa_32279 = (cljs.core.truth_(w_32266)?(w_32266 - exp_width_32276):null);
var vec__28302_32280 = cljs.pprint.round_str(scaled_mantissa_32278,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_32269,(0)))?(d_32267 - (1)):(((k_32269 > (0)))?d_32267:(((k_32269 < (0)))?(d_32267 - (1)):null))),(cljs.core.truth_(w_mantissa_32279)?(w_mantissa_32279 - (cljs.core.truth_(add_sign_32271)?(1):(0))):null));
var rounded_mantissa_32281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28302_32280,(0),null);
var __32282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28302_32280,(1),null);
var incr_exp_32283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28302_32280,(2),null);
var full_mantissa_32284 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_32281,k_32269);
var append_zero_32285 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_32269,cljs.core.count(rounded_mantissa_32281))) && ((d_32267 == null)));
if(cljs.core.not(incr_exp_32283)){
if(cljs.core.truth_(w_32266)){
var len_32318 = (((full_mantissa_32284).length) + exp_width_32276);
var signed_len_32319 = (cljs.core.truth_(add_sign_32271)?(len_32318 + (1)):len_32318);
var prepend_zero_32320__$1 = ((prepend_zero_32272) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_32319,w_32266)))));
var full_len_32321 = ((prepend_zero_32320__$1)?(signed_len_32319 + (1)):signed_len_32319);
var append_zero_32322__$1 = ((append_zero_32285) && ((full_len_32321 < w_32266)));
if(cljs.core.truth_((function (){var and__4174__auto__ = (function (){var or__4185__auto__ = (full_len_32321 > w_32266);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var and__4174__auto__ = e_32268;
if(cljs.core.truth_(and__4174__auto__)){
return ((exp_width_32276 - (2)) > e_32268);
} else {
return and__4174__auto__;
}
}
})();
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4174__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_32266,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_32266 - full_len_32321) - ((append_zero_32322__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(add_sign_32271)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_32320__$1)?"0":null),full_mantissa_32284,((append_zero_32322__$1)?"0":null),scaled_exp_str_32275__$1].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_(add_sign_32271)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_32272)?"0":null),full_mantissa_32284,((append_zero_32285)?"0":null),scaled_exp_str_32275__$1].join('')], 0));
}
} else {
var G__32336 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_32281,(exp_32261__$1 + (1))], null);
G__28291_32258__$1 = G__32336;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__28358 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28358,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28358,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__28361 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28361,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28361,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4273__auto__ = cljs.core.count(mantissa);
var y__4274__auto__ = (function (){var x__4276__auto__ = n;
var y__4277__auto__ = (7);
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__28376 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28376,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28376,(1),null);
var vec__28379 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28379,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28379,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (arg < (0));
}
})();
var vec__28382 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28382,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28382,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28382,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),fixed_repr].join('');
var full_len = (((full_repr).length) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_((function (){var and__4174__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4174__auto__)){
return add_sign;
} else {
return and__4174__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params)))?add_sign:false))?(((arg < (0)))?"-":"+"):null),full_repr].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__28418 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28418,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28418,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses)))))?cljs.core.first(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__28429 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28429,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28429,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__28443 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28443,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28443,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28463 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28463,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28463,(1),null);
var vec__28466 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28466,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28466,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4185__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4185__auto__){
return or__4185__auto__;
} else {
var and__4174__auto__ = max_count;
if(cljs.core.truth_(and__4174__auto__)){
return (count >= max_count);
} else {
return and__4174__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__32389 = (count + (1));
var G__32390 = iter_result;
var G__32391 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__32389;
args__$1 = G__32390;
last_pos = G__32391;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28526 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28526,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28526,(1),null);
var vec__28529 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28529,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28529,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = ((cljs.core.empty_QMARK_(arg_list__$1)) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4185__auto__){
return or__4185__auto__;
} else {
var and__4174__auto__ = max_count;
if(cljs.core.truth_(and__4174__auto__)){
return (count >= max_count);
} else {
return and__4174__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__32404 = (count + (1));
var G__32405 = cljs.core.next(arg_list__$1);
count = G__32404;
arg_list__$1 = G__32405;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28616 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28616,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28616,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4185__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4185__auto__){
return or__4185__auto__;
} else {
var and__4174__auto__ = max_count;
if(cljs.core.truth_(and__4174__auto__)){
return (count >= max_count);
} else {
return and__4174__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__32423 = (count + (1));
var G__32424 = iter_result;
var G__32425 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__32423;
navigator__$2 = G__32424;
last_pos = G__32425;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28675 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28675,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28675,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4185__auto__){
return or__4185__auto__;
} else {
var and__4174__auto__ = max_count;
if(cljs.core.truth_(and__4174__auto__)){
return (count >= max_count);
} else {
return and__4174__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__28716 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28716,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28716,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__32446 = (count + (1));
var G__32447 = navigator__$3;
count = G__32446;
navigator__$2 = G__32447;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block(params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses(params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__28738 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__28747 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__28748 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__28748);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__28747);
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28738,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28738,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__32451 = cljs.core.next(clauses__$1);
var G__32452 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__32453 = iter_result;
clauses__$1 = G__32451;
acc = G__32452;
navigator__$1 = G__32453;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__28757 = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5735__auto__)){
var else$ = temp__5735__auto__;
return cljs.pprint.render_clauses(else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__28760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28757,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28760,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28757,(1),null);
var navigator__$1 = (function (){var or__4185__auto__ = new_navigator;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return navigator;
}
})();
var vec__28763 = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5735__auto__)){
var p = temp__5735__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28763,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28763,(1),null);
var navigator__$2 = (function (){var or__4185__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__4185__auto__ = cljs.core.first(new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__4185__auto__ = cljs.core.first(new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__28766 = cljs.pprint.render_clauses(clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28766,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28766,(1),null);
var slots = (function (){var x__4273__auto__ = (1);
var y__4274__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4273__auto__ = minpad;
var y__4274__auto__ = cljs.core.quot(total_pad,slots);
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__4174__auto__ = eol_str;
if(cljs.core.truth_(and__4174__auto__)){
return (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__4174__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_32467__$1 = slots;
var extra_pad_32468__$1 = extra_pad;
var strs_32469__$1 = strs;
var pad_only_32470 = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_32469__$1),(1))) && (cljs.core.not(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq(strs_32469__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_32470))?cljs.core.first(strs_32469__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4185__auto__ = pad_only_32470;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = cljs.core.next(strs_32469__$1);
if(or__4185__auto____$1){
return or__4185__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_32468__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__32476 = (slots_32467__$1 - (1));
var G__32477 = (extra_pad_32468__$1 - (1));
var G__32478 = (cljs.core.truth_(pad_only_32470)?strs_32469__$1:cljs.core.next(strs_32469__$1));
var G__32479 = false;
slots_32467__$1 = G__32476;
extra_pad_32468__$1 = G__32477;
strs_32469__$1 = G__32478;
pad_only_32470 = G__32479;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint28813 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28813 = (function (writer,meta28814){
this.writer = writer;
this.meta28814 = meta28814;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint28813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28815,meta28814__$1){
var self__ = this;
var _28815__$1 = this;
return (new cljs.pprint.t_cljs$pprint28813(self__.writer,meta28814__$1));
}));

(cljs.pprint.t_cljs$pprint28813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28815){
var self__ = this;
var _28815__$1 = this;
return self__.meta28814;
}));

(cljs.pprint.t_cljs$pprint28813.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint28813.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28841 = cljs.core._EQ_;
var expr__28842 = cljs.core.type(x);
if(cljs.core.truth_((pred__28841.cljs$core$IFn$_invoke$arity$2 ? pred__28841.cljs$core$IFn$_invoke$arity$2(String,expr__28842) : pred__28841.call(null,String,expr__28842)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__28841.cljs$core$IFn$_invoke$arity$2 ? pred__28841.cljs$core$IFn$_invoke$arity$2(Number,expr__28842) : pred__28841.call(null,Number,expr__28842)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28842)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint28813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta28814","meta28814",-1700648031,null)], null);
}));

(cljs.pprint.t_cljs$pprint28813.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint28813.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28813");

(cljs.pprint.t_cljs$pprint28813.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.pprint/t_cljs$pprint28813");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28813.
 */
cljs.pprint.__GT_t_cljs$pprint28813 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint28813(writer__$1,meta28814){
return (new cljs.pprint.t_cljs$pprint28813(writer__$1,meta28814));
});

}

return (new cljs.pprint.t_cljs$pprint28813(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint28864 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28864 = (function (writer,meta28865){
this.writer = writer;
this.meta28865 = meta28865;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint28864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28866,meta28865__$1){
var self__ = this;
var _28866__$1 = this;
return (new cljs.pprint.t_cljs$pprint28864(self__.writer,meta28865__$1));
}));

(cljs.pprint.t_cljs$pprint28864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28866){
var self__ = this;
var _28866__$1 = this;
return self__.meta28865;
}));

(cljs.pprint.t_cljs$pprint28864.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint28864.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28874 = cljs.core._EQ_;
var expr__28875 = cljs.core.type(x);
if(cljs.core.truth_((pred__28874.cljs$core$IFn$_invoke$arity$2 ? pred__28874.cljs$core$IFn$_invoke$arity$2(String,expr__28875) : pred__28874.call(null,String,expr__28875)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__28874.cljs$core$IFn$_invoke$arity$2 ? pred__28874.cljs$core$IFn$_invoke$arity$2(Number,expr__28875) : pred__28874.call(null,Number,expr__28875)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28875)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint28864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta28865","meta28865",-1566153833,null)], null);
}));

(cljs.pprint.t_cljs$pprint28864.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint28864.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28864");

(cljs.pprint.t_cljs$pprint28864.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.pprint/t_cljs$pprint28864");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28864.
 */
cljs.pprint.__GT_t_cljs$pprint28864 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint28864(writer__$1,meta28865){
return (new cljs.pprint.t_cljs$pprint28864(writer__$1,meta28865));
});

}

return (new cljs.pprint.t_cljs$pprint28864(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__4174__auto__ = first_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = f;
if(cljs.core.truth_(and__4174__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())?[clojure.string.upper_case(f),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume((function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__4174__auto__ = m;
if(cljs.core.truth_(and__4174__auto__)){
return (m.index + (1));
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset),clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
}),s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint28900 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28900 = (function (writer,last_was_whitespace_QMARK_,meta28901){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta28901 = meta28901;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint28900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28902,meta28901__$1){
var self__ = this;
var _28902__$1 = this;
return (new cljs.pprint.t_cljs$pprint28900(self__.writer,self__.last_was_whitespace_QMARK_,meta28901__$1));
}));

(cljs.pprint.t_cljs$pprint28900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28902){
var self__ = this;
var _28902__$1 = this;
return self__.meta28901;
}));

(cljs.pprint.t_cljs$pprint28900.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint28900.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28909 = cljs.core._EQ_;
var expr__28910 = cljs.core.type(x);
if(cljs.core.truth_((pred__28909.cljs$core$IFn$_invoke$arity$2 ? pred__28909.cljs$core$IFn$_invoke$arity$2(String,expr__28910) : pred__28909.call(null,String,expr__28910)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__28915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__28915);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__28909.cljs$core$IFn$_invoke$arity$2 ? pred__28909.cljs$core$IFn$_invoke$arity$2(Number,expr__28910) : pred__28909.call(null,Number,expr__28910)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28910)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint28900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta28901","meta28901",398861172,null)], null);
}));

(cljs.pprint.t_cljs$pprint28900.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint28900.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28900");

(cljs.pprint.t_cljs$pprint28900.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.pprint/t_cljs$pprint28900");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28900.
 */
cljs.pprint.__GT_t_cljs$pprint28900 = (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint28900(writer__$1,last_was_whitespace_QMARK___$1,meta28901){
return (new cljs.pprint.t_cljs$pprint28900(writer__$1,last_was_whitespace_QMARK___$1,meta28901));
});

}

return (new cljs.pprint.t_cljs$pprint28900(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint28945 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28945 = (function (writer,capped,meta28946){
this.writer = writer;
this.capped = capped;
this.meta28946 = meta28946;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint28945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28947,meta28946__$1){
var self__ = this;
var _28947__$1 = this;
return (new cljs.pprint.t_cljs$pprint28945(self__.writer,self__.capped,meta28946__$1));
}));

(cljs.pprint.t_cljs$pprint28945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28947){
var self__ = this;
var _28947__$1 = this;
return self__.meta28946;
}));

(cljs.pprint.t_cljs$pprint28945.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint28945.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28965 = cljs.core._EQ_;
var expr__28966 = cljs.core.type(x);
if(cljs.core.truth_((pred__28965.cljs$core$IFn$_invoke$arity$2 ? pred__28965.cljs$core$IFn$_invoke$arity$2(String,expr__28966) : pred__28965.call(null,String,expr__28966)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__4174__auto__ = m;
if(cljs.core.truth_(and__4174__auto__)){
return m.index;
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset),clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset)),clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__28965.cljs$core$IFn$_invoke$arity$2 ? pred__28965.cljs$core$IFn$_invoke$arity$2(Number,expr__28966) : pred__28965.call(null,Number,expr__28966)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_(((cljs.core.not(cljs.core.deref(self__.capped)))?goog.string.isUnicodeChar(c):false))){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28966)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint28945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta28946","meta28946",-2098132338,null)], null);
}));

(cljs.pprint.t_cljs$pprint28945.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint28945.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28945");

(cljs.pprint.t_cljs$pprint28945.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.pprint/t_cljs$pprint28945");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28945.
 */
cljs.pprint.__GT_t_cljs$pprint28945 = (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint28945(writer__$1,capped__$1,meta28946){
return (new cljs.pprint.t_cljs$pprint28945(writer__$1,capped__$1,meta28946));
});

}

return (new cljs.pprint.t_cljs$pprint28945(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__28974 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__28975 = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__28975);

try{return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__28974);
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if((((!((cljs.core._STAR_out_STAR_ == null))))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_32593 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_32594 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_32595 = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_32596 = (((current_32595 < colnum_32593))?(colnum_32593 - current_32595):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_32594,(0)))?(0):(colinc_32594 - cljs.core.rem((current_32595 - colnum_32593),colinc_32594))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_32596," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_32600 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_32601 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_32602 = (colrel_32600 + cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_32603 = (((colinc_32601 > (0)))?cljs.core.rem(start_col_32602,colinc_32601):(0));
var space_count_32604 = (colrel_32600 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_32603))?(0):(colinc_32601 - offset_32603)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_32604," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__29013 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29013,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29013,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29017_32621 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29018_32622 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29019_32623 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29020_32624 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29019_32623);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29020_32624);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29018_32622);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29017_32621);
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent(relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29040_SHARP_,p2__29041_SHARP_,p3__29042_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__29040_SHARP_,p2__29041_SHARP_,p3__29042_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29043_SHARP_,p2__29044_SHARP_,p3__29045_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__29043_SHARP_,p2__29044_SHARP_,p3__29045_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29047_SHARP_,p2__29048_SHARP_,p3__29049_SHARP_){
return cljs.pprint.format_integer((10),p1__29047_SHARP_,p2__29048_SHARP_,p3__29049_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29051_SHARP_,p2__29052_SHARP_,p3__29053_SHARP_){
return cljs.pprint.format_integer((2),p1__29051_SHARP_,p2__29052_SHARP_,p3__29053_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29056_SHARP_,p2__29057_SHARP_,p3__29058_SHARP_){
return cljs.pprint.format_integer((8),p1__29056_SHARP_,p2__29057_SHARP_,p3__29058_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29059_SHARP_,p2__29060_SHARP_,p3__29061_SHARP_){
return cljs.pprint.format_integer((16),p1__29059_SHARP_,p2__29060_SHARP_,p3__29061_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__29063_SHARP_,p2__29064_SHARP_,p3__29065_SHARP_){
return cljs.pprint.format_integer(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__29063_SHARP_),p1__29063_SHARP_,p2__29064_SHARP_,p3__29065_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4174__auto__;
}
})())){
return (function (p1__29067_SHARP_,p2__29068_SHARP_,p3__29069_SHARP_){
return cljs.pprint.format_old_roman(p1__29067_SHARP_,p2__29068_SHARP_,p3__29069_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__29070_SHARP_,p2__29071_SHARP_,p3__29072_SHARP_){
return cljs.pprint.format_new_roman(p1__29070_SHARP_,p2__29071_SHARP_,p3__29072_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__29073_SHARP_,p2__29074_SHARP_,p3__29075_SHARP_){
return cljs.pprint.format_ordinal_english(p1__29073_SHARP_,p2__29074_SHARP_,p3__29075_SHARP_);
});
} else {
return (function (p1__29076_SHARP_,p2__29077_SHARP_,p3__29078_SHARP_){
return cljs.pprint.format_cardinal_english(p1__29076_SHARP_,p2__29077_SHARP_,p3__29078_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__29134 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29134,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29134,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4666__auto___32728 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_32729 = (0);
while(true){
if((i_32729 < n__4666__auto___32728)){
cljs.pprint.prn();

var G__32730 = (i_32729 + (1));
i_32729 = G__32730;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_32736 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_32736 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__4666__auto___32737 = (cnt_32736 - (1));
var i_32738 = (0);
while(true){
if((i_32738 < n__4666__auto___32737)){
cljs.pprint.prn();

var G__32739 = (i_32738 + (1));
i_32738 = G__32739;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4666__auto___32745 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_32746 = (0);
while(true){
if((i_32746 < n__4666__auto___32745)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__32747 = (i_32746 + (1));
i_32746 = G__32747;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__29084_SHARP_,p2__29085_SHARP_,p3__29086_SHARP_){
return cljs.pprint.relative_tabulation(p1__29084_SHARP_,p2__29085_SHARP_,p3__29086_SHARP_);
});
} else {
return (function (p1__29087_SHARP_,p2__29088_SHARP_,p3__29089_SHARP_){
return cljs.pprint.absolute_tabulation(p1__29087_SHARP_,p2__29088_SHARP_,p3__29089_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__29179 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29179,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29179,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__29184 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29184,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29184,(1),null);
var vec__29187 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29187,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29187,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__4174__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4174__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return (function (p1__29090_SHARP_,p2__29091_SHARP_,p3__29092_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__29090_SHARP_,p2__29091_SHARP_,p3__29092_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__4174__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4174__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__4174__auto__ = arg1;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = arg2;
if(cljs.core.truth_(and__4174__auto____$1)){
return arg3;
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = arg1;
if(cljs.core.truth_(and__4174__auto__)){
return arg2;
} else {
return and__4174__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return (function (params__$1,navigator,offsets){
var vec__29240 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29240,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29240,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
} else {
return (function (params__$1,navigator,offsets){
var vec__29249 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29249,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29249,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__29291){
var vec__29293 = p__29291;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29293,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29293,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29293,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__29308){
var vec__29309 = p__29308;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29309,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29309,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__29325){
var vec__29327 = p__29325;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29327,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29327,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29327,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed)))?new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags):false))){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed)))?new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags):false))){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed)))?(function (){var and__4174__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4174__auto__;
}
})():false))){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4276__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4277__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__29347_SHARP_,p2__29348_SHARP_){
var val = cljs.core.first(p1__29347_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__29348_SHARP_)),cljs.core.type(val))))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.name(cljs.core.first(p2__29348_SHARP_))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__29347_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__4582__auto__ = (function cljs$pprint$map_params_$_iter__29369(s__29370){
return (new cljs.core.LazySeq(null,(function (){
var s__29370__$1 = s__29370;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29370__$1);
if(temp__5735__auto__){
var s__29370__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29370__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29370__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29372 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29371 = (0);
while(true){
if((i__29371 < size__4581__auto__)){
var vec__29379 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__29371);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29379,(0),null);
var vec__29382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29379,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29382,(0),null);
cljs.core.chunk_append(b__29372,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__32873 = (i__29371 + (1));
i__29371 = G__32873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29372),cljs$pprint$map_params_$_iter__29369(cljs.core.chunk_rest(s__29370__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29372),null);
}
} else {
var vec__29386 = cljs.core.first(s__29370__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29386,(0),null);
var vec__29389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29386,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29389,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__29369(cljs.core.rest(s__29370__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29352_SHARP_,p2__29353_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__29352_SHARP_,p2__29353_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29354_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__29354_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__29411 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29411,(0),null);
var vec__29414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29411,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29414,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29414,(1),null);
var vec__29417 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29417,(0),null);
var vec__29420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29417,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29420,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29420,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29420,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__29450 = new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__29450.cljs$core$IFn$_invoke$arity$2 ? fexpr__29450.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__29450.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__4174__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__4174__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__29473 = cljs.pprint.collect_clauses(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29473,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29473,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))], 0)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__29496){
var vec__29497 = p__29496;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29497,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29497,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29497,(2),null);
var vec__29501 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29501,(0),null);
var vec__29504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29501,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29504,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29504,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29504,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29504,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR__orig_val__29548 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__29549 = format_str;
(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__29549);

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume((function (p__29554){
var vec__29555 = p__29554;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29555,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29555,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__29548);
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__32975 = cljs.core.next(format__$1);
format__$1 = G__32975;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__29584 = arguments.length;
switch (G__29584) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not(stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = ((((cljs.pprint.needs_pretty(format)) && (cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream)))))?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR__orig_val__29591 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29592 = wrapped_stream;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29592);

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if((!((real_stream === wrapped_stream)))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if(stream === true){
return cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
return null;

}
}
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29591);
}}));

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__29602 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29602,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29602,(1),null);
var vec__29605 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29605,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29605,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
}));

(cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3);

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__29614 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__29614) : cljs.pprint.reader_macros.call(null,G__29614));
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = macro_char;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__4174__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29626_32998 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29627_32999 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29628_33000 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29629_33001 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29628_33000);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29629_33001);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count29642_33004 = (0);
var alis_33005__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29642_33004 < cljs.core._STAR_print_length_STAR_)))){
if(alis_33005__$1){
cljs.pprint.write_out(cljs.core.first(alis_33005__$1));

if(cljs.core.next(alis_33005__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33007 = (length_count29642_33004 + (1));
var G__33008 = cljs.core.next(alis_33005__$1);
length_count29642_33004 = G__33007;
alis_33005__$1 = G__33008;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29627_32999);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29626_32998);
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29658_33014 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29659_33015 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29660_33016 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29661_33017 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29660_33016);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29661_33017);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count29663_33019 = (0);
var aseq_33020 = cljs.core.seq(avec);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29663_33019 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_33020){
cljs.pprint.write_out(cljs.core.first(aseq_33020));

if(cljs.core.next(aseq_33020)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33024 = (length_count29663_33019 + (1));
var G__33025 = cljs.core.next(aseq_33020);
length_count29663_33019 = G__33024;
aseq_33020 = G__33025;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29659_33015);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29658_33014);
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__26151__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33036__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33036 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33039__i = 0, G__33039__a = new Array(arguments.length -  0);
while (G__33039__i < G__33039__a.length) {G__33039__a[G__33039__i] = arguments[G__33039__i + 0]; ++G__33039__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33039__a,0,null);
} 
return G__33036__delegate.call(this,args__26153__auto__);};
G__33036.cljs$lang$maxFixedArity = 0;
G__33036.cljs$lang$applyTo = (function (arglist__33041){
var args__26153__auto__ = cljs.core.seq(arglist__33041);
return G__33036__delegate(args__26153__auto__);
});
G__33036.cljs$core$IFn$_invoke$arity$variadic = G__33036__delegate;
return G__33036;
})()
;
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__29673 = (((!(cljs.core.record_QMARK_(amap))))?(function (){var fexpr__29686 = new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",15,1,10278,10278,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__29686.cljs$core$IFn$_invoke$arity$1 ? fexpr__29686.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__29686.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29673,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29673,(1),null);
var amap__$1 = (function (){var or__4185__auto__ = lift_map;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29691_33049 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29692_33050 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29693_33051 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29694_33052 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29693_33051);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29694_33052);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count29695_33057 = (0);
var aseq_33058 = cljs.core.seq(amap__$1);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29695_33057 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_33058){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29696_33066 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29697_33067 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29698_33068 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29699_33069 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29698_33068);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29699_33069);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_33058));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

(cljs.pprint._STAR_current_length_STAR_ = (0));

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_33058)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29697_33067);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29696_33066);
}}


if(cljs.core.next(aseq_33058)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33080 = (length_count29695_33057 + (1));
var G__33081 = cljs.core.next(aseq_33058);
length_count29695_33057 = G__33080;
aseq_33058 = G__33081;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29692_33050);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29691_33049);
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__26151__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33083__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33083 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33084__i = 0, G__33084__a = new Array(arguments.length -  0);
while (G__33084__i < G__33084__a.length) {G__33084__a[G__33084__i] = arguments[G__33084__i + 0]; ++G__33084__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33084__a,0,null);
} 
return G__33083__delegate.call(this,args__26153__auto__);};
G__33083.cljs$lang$maxFixedArity = 0;
G__33083.cljs$lang$applyTo = (function (arglist__33087){
var args__26153__auto__ = cljs.core.seq(arglist__33087);
return G__33083__delegate(args__26153__auto__);
});
G__33083.cljs$core$IFn$_invoke$arity$variadic = G__33083__delegate;
return G__33083;
})()
;
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__4185__auto__ = (function (){var temp__5735__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5735__auto__)){
var match = temp__5735__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29710_33090 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29711_33091 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29712_33092 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29713_33093 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29712_33092);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29713_33093);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(- (((prefix).length) - (2))));

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out((((((((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o)))?(!(cljs.core._realized_QMARK_(o))):false))?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29711_33091);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29710_33090);
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__26151__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33104__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33104 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33108__i = 0, G__33108__a = new Array(arguments.length -  0);
while (G__33108__i < G__33108__a.length) {G__33108__a[G__33108__i] = arguments[G__33108__i + 0]; ++G__33108__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33108__a,0,null);
} 
return G__33104__delegate.call(this,args__26153__auto__);};
G__33104.cljs$lang$maxFixedArity = 0;
G__33104.cljs$lang$applyTo = (function (arglist__33109){
var args__26153__auto__ = cljs.core.seq(arglist__33109);
return G__33104__delegate(args__26153__auto__);
});
G__33104.cljs$core$IFn$_invoke$arity$variadic = G__33104__delegate;
return G__33104;
})()
;
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_(obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_(obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_(obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_(obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.simple_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29730 = cljs.core.get_global_hierarchy;
return (fexpr__29730.cljs$core$IFn$_invoke$arity$0 ? fexpr__29730.cljs$core$IFn$_invoke$arity$0() : fexpr__29730.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__29846 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29846,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29846,(1),null);
var vec__29849 = reference;
var seq__29850 = cljs.core.seq(vec__29849);
var first__29851 = cljs.core.first(seq__29850);
var seq__29850__$1 = cljs.core.next(seq__29850);
var keyw = first__29851;
var args = seq__29850__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29882_33133 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29883_33134 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29884_33135 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29885_33136 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29884_33135);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29885_33136);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__29897_33139 = (function (){var format_in__26151__auto__ = "~w~:i";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33142__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33142 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33143__i = 0, G__33143__a = new Array(arguments.length -  0);
while (G__33143__i < G__33143__a.length) {G__33143__a[G__33143__i] = arguments[G__33143__i + 0]; ++G__33143__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33143__a,0,null);
} 
return G__33142__delegate.call(this,args__26153__auto__);};
G__33142.cljs$lang$maxFixedArity = 0;
G__33142.cljs$lang$applyTo = (function (arglist__33144){
var args__26153__auto__ = cljs.core.seq(arglist__33144);
return G__33142__delegate(args__26153__auto__);
});
G__33142.cljs$core$IFn$_invoke$arity$variadic = G__33142__delegate;
return G__33142;
})()
;
})();
(fexpr__29897_33139.cljs$core$IFn$_invoke$arity$1 ? fexpr__29897_33139.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__29897_33139.call(null,keyw));

var args_33146__$1 = args;
while(true){
if(cljs.core.seq(args_33146__$1)){
var fexpr__29915_33147 = (function (){var format_in__26151__auto__ = " ";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return ((function (args_33146__$1,format_in__26151__auto__,cf__26152__auto__,_STAR_current_level_STAR__orig_val__29882_33133,_STAR_current_length_STAR__orig_val__29883_33134,_STAR_current_level_STAR__temp_val__29884_33135,_STAR_current_length_STAR__temp_val__29885_33136,vec__29846,start,end,vec__29849,seq__29850,first__29851,seq__29850__$1,keyw,args){
return (function() { 
var G__33148__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33148 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33150__i = 0, G__33150__a = new Array(arguments.length -  0);
while (G__33150__i < G__33150__a.length) {G__33150__a[G__33150__i] = arguments[G__33150__i + 0]; ++G__33150__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33150__a,0,null);
} 
return G__33148__delegate.call(this,args__26153__auto__);};
G__33148.cljs$lang$maxFixedArity = 0;
G__33148.cljs$lang$applyTo = (function (arglist__33152){
var args__26153__auto__ = cljs.core.seq(arglist__33152);
return G__33148__delegate(args__26153__auto__);
});
G__33148.cljs$core$IFn$_invoke$arity$variadic = G__33148__delegate;
return G__33148;
})()
;
;})(args_33146__$1,format_in__26151__auto__,cf__26152__auto__,_STAR_current_level_STAR__orig_val__29882_33133,_STAR_current_length_STAR__orig_val__29883_33134,_STAR_current_level_STAR__temp_val__29884_33135,_STAR_current_length_STAR__temp_val__29885_33136,vec__29846,start,end,vec__29849,seq__29850,first__29851,seq__29850__$1,keyw,args))
})();
(fexpr__29915_33147.cljs$core$IFn$_invoke$arity$0 ? fexpr__29915_33147.cljs$core$IFn$_invoke$arity$0() : fexpr__29915_33147.call(null));

var arg_33153 = cljs.core.first(args_33146__$1);
if(cljs.core.sequential_QMARK_(arg_33153)){
var vec__29923_33154 = cljs.pprint.brackets(arg_33153);
var start_33155__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29923_33154,(0),null);
var end_33156__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29923_33154,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29928_33158 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29929_33159 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29930_33160 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29931_33161 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29930_33160);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29931_33161);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_33155__$1,null,end_33156__$1);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_33153),(3))) && ((cljs.core.second(arg_33153) instanceof cljs.core.Keyword)))){
var vec__29940_33166 = arg_33153;
var ns_33167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29940_33166,(0),null);
var kw_33168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29940_33166,(1),null);
var lis_33169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29940_33166,(2),null);
var fexpr__29948_33176 = (function (){var format_in__26151__auto__ = "~w ~w ";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return ((function (args_33146__$1,format_in__26151__auto__,cf__26152__auto__,vec__29940_33166,ns_33167,kw_33168,lis_33169,_STAR_current_level_STAR__orig_val__29928_33158,_STAR_current_length_STAR__orig_val__29929_33159,_STAR_current_level_STAR__temp_val__29930_33160,_STAR_current_length_STAR__temp_val__29931_33161,vec__29923_33154,start_33155__$1,end_33156__$1,arg_33153,_STAR_current_level_STAR__orig_val__29882_33133,_STAR_current_length_STAR__orig_val__29883_33134,_STAR_current_level_STAR__temp_val__29884_33135,_STAR_current_length_STAR__temp_val__29885_33136,vec__29846,start,end,vec__29849,seq__29850,first__29851,seq__29850__$1,keyw,args){
return (function() { 
var G__33179__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33179 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33180__i = 0, G__33180__a = new Array(arguments.length -  0);
while (G__33180__i < G__33180__a.length) {G__33180__a[G__33180__i] = arguments[G__33180__i + 0]; ++G__33180__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33180__a,0,null);
} 
return G__33179__delegate.call(this,args__26153__auto__);};
G__33179.cljs$lang$maxFixedArity = 0;
G__33179.cljs$lang$applyTo = (function (arglist__33181){
var args__26153__auto__ = cljs.core.seq(arglist__33181);
return G__33179__delegate(args__26153__auto__);
});
G__33179.cljs$core$IFn$_invoke$arity$variadic = G__33179__delegate;
return G__33179;
})()
;
;})(args_33146__$1,format_in__26151__auto__,cf__26152__auto__,vec__29940_33166,ns_33167,kw_33168,lis_33169,_STAR_current_level_STAR__orig_val__29928_33158,_STAR_current_length_STAR__orig_val__29929_33159,_STAR_current_level_STAR__temp_val__29930_33160,_STAR_current_length_STAR__temp_val__29931_33161,vec__29923_33154,start_33155__$1,end_33156__$1,arg_33153,_STAR_current_level_STAR__orig_val__29882_33133,_STAR_current_length_STAR__orig_val__29883_33134,_STAR_current_level_STAR__temp_val__29884_33135,_STAR_current_length_STAR__temp_val__29885_33136,vec__29846,start,end,vec__29849,seq__29850,first__29851,seq__29850__$1,keyw,args))
})();
(fexpr__29948_33176.cljs$core$IFn$_invoke$arity$2 ? fexpr__29948_33176.cljs$core$IFn$_invoke$arity$2(ns_33167,kw_33168) : fexpr__29948_33176.call(null,ns_33167,kw_33168));

if(cljs.core.sequential_QMARK_(lis_33169)){
var fexpr__29957_33183 = (function (){var format_in__26151__auto__ = ((cljs.core.vector_QMARK_(lis_33169))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return ((function (args_33146__$1,format_in__26151__auto__,cf__26152__auto__,vec__29940_33166,ns_33167,kw_33168,lis_33169,_STAR_current_level_STAR__orig_val__29928_33158,_STAR_current_length_STAR__orig_val__29929_33159,_STAR_current_level_STAR__temp_val__29930_33160,_STAR_current_length_STAR__temp_val__29931_33161,vec__29923_33154,start_33155__$1,end_33156__$1,arg_33153,_STAR_current_level_STAR__orig_val__29882_33133,_STAR_current_length_STAR__orig_val__29883_33134,_STAR_current_level_STAR__temp_val__29884_33135,_STAR_current_length_STAR__temp_val__29885_33136,vec__29846,start,end,vec__29849,seq__29850,first__29851,seq__29850__$1,keyw,args){
return (function() { 
var G__33186__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33186 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33188__i = 0, G__33188__a = new Array(arguments.length -  0);
while (G__33188__i < G__33188__a.length) {G__33188__a[G__33188__i] = arguments[G__33188__i + 0]; ++G__33188__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33188__a,0,null);
} 
return G__33186__delegate.call(this,args__26153__auto__);};
G__33186.cljs$lang$maxFixedArity = 0;
G__33186.cljs$lang$applyTo = (function (arglist__33189){
var args__26153__auto__ = cljs.core.seq(arglist__33189);
return G__33186__delegate(args__26153__auto__);
});
G__33186.cljs$core$IFn$_invoke$arity$variadic = G__33186__delegate;
return G__33186;
})()
;
;})(args_33146__$1,format_in__26151__auto__,cf__26152__auto__,vec__29940_33166,ns_33167,kw_33168,lis_33169,_STAR_current_level_STAR__orig_val__29928_33158,_STAR_current_length_STAR__orig_val__29929_33159,_STAR_current_level_STAR__temp_val__29930_33160,_STAR_current_length_STAR__temp_val__29931_33161,vec__29923_33154,start_33155__$1,end_33156__$1,arg_33153,_STAR_current_level_STAR__orig_val__29882_33133,_STAR_current_length_STAR__orig_val__29883_33134,_STAR_current_level_STAR__temp_val__29884_33135,_STAR_current_length_STAR__temp_val__29885_33136,vec__29846,start,end,vec__29849,seq__29850,first__29851,seq__29850__$1,keyw,args))
})();
(fexpr__29957_33183.cljs$core$IFn$_invoke$arity$1 ? fexpr__29957_33183.cljs$core$IFn$_invoke$arity$1(lis_33169) : fexpr__29957_33183.call(null,lis_33169));
} else {
cljs.pprint.write_out(lis_33169);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__26151__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return ((function (args_33146__$1,format_in__26151__auto__,cf__26152__auto__,_STAR_current_level_STAR__orig_val__29928_33158,_STAR_current_length_STAR__orig_val__29929_33159,_STAR_current_level_STAR__temp_val__29930_33160,_STAR_current_length_STAR__temp_val__29931_33161,vec__29923_33154,start_33155__$1,end_33156__$1,arg_33153,_STAR_current_level_STAR__orig_val__29882_33133,_STAR_current_length_STAR__orig_val__29883_33134,_STAR_current_level_STAR__temp_val__29884_33135,_STAR_current_length_STAR__temp_val__29885_33136,vec__29846,start,end,vec__29849,seq__29850,first__29851,seq__29850__$1,keyw,args){
return (function() { 
var G__33194__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33194 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33195__i = 0, G__33195__a = new Array(arguments.length -  0);
while (G__33195__i < G__33195__a.length) {G__33195__a[G__33195__i] = arguments[G__33195__i + 0]; ++G__33195__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33195__a,0,null);
} 
return G__33194__delegate.call(this,args__26153__auto__);};
G__33194.cljs$lang$maxFixedArity = 0;
G__33194.cljs$lang$applyTo = (function (arglist__33196){
var args__26153__auto__ = cljs.core.seq(arglist__33196);
return G__33194__delegate(args__26153__auto__);
});
G__33194.cljs$core$IFn$_invoke$arity$variadic = G__33194__delegate;
return G__33194;
})()
;
;})(args_33146__$1,format_in__26151__auto__,cf__26152__auto__,_STAR_current_level_STAR__orig_val__29928_33158,_STAR_current_length_STAR__orig_val__29929_33159,_STAR_current_level_STAR__temp_val__29930_33160,_STAR_current_length_STAR__temp_val__29931_33161,vec__29923_33154,start_33155__$1,end_33156__$1,arg_33153,_STAR_current_level_STAR__orig_val__29882_33133,_STAR_current_length_STAR__orig_val__29883_33134,_STAR_current_level_STAR__temp_val__29884_33135,_STAR_current_length_STAR__temp_val__29885_33136,vec__29846,start,end,vec__29849,seq__29850,first__29851,seq__29850__$1,keyw,args))
})(),arg_33153);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29929_33159);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29928_33158);
}}


if(cljs.core.next(args_33146__$1)){
var fexpr__29973_33201 = (function (){var format_in__26151__auto__ = "~_";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return ((function (args_33146__$1,format_in__26151__auto__,cf__26152__auto__,vec__29923_33154,start_33155__$1,end_33156__$1,arg_33153,_STAR_current_level_STAR__orig_val__29882_33133,_STAR_current_length_STAR__orig_val__29883_33134,_STAR_current_level_STAR__temp_val__29884_33135,_STAR_current_length_STAR__temp_val__29885_33136,vec__29846,start,end,vec__29849,seq__29850,first__29851,seq__29850__$1,keyw,args){
return (function() { 
var G__33203__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33203 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33204__i = 0, G__33204__a = new Array(arguments.length -  0);
while (G__33204__i < G__33204__a.length) {G__33204__a[G__33204__i] = arguments[G__33204__i + 0]; ++G__33204__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33204__a,0,null);
} 
return G__33203__delegate.call(this,args__26153__auto__);};
G__33203.cljs$lang$maxFixedArity = 0;
G__33203.cljs$lang$applyTo = (function (arglist__33205){
var args__26153__auto__ = cljs.core.seq(arglist__33205);
return G__33203__delegate(args__26153__auto__);
});
G__33203.cljs$core$IFn$_invoke$arity$variadic = G__33203__delegate;
return G__33203;
})()
;
;})(args_33146__$1,format_in__26151__auto__,cf__26152__auto__,vec__29923_33154,start_33155__$1,end_33156__$1,arg_33153,_STAR_current_level_STAR__orig_val__29882_33133,_STAR_current_length_STAR__orig_val__29883_33134,_STAR_current_level_STAR__temp_val__29884_33135,_STAR_current_length_STAR__temp_val__29885_33136,vec__29846,start,end,vec__29849,seq__29850,first__29851,seq__29850__$1,keyw,args))
})();
(fexpr__29973_33201.cljs$core$IFn$_invoke$arity$0 ? fexpr__29973_33201.cljs$core$IFn$_invoke$arity$0() : fexpr__29973_33201.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_33153);

if(cljs.core.next(args_33146__$1)){
var fexpr__29980_33211 = (function (){var format_in__26151__auto__ = "~:_";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return ((function (args_33146__$1,format_in__26151__auto__,cf__26152__auto__,arg_33153,_STAR_current_level_STAR__orig_val__29882_33133,_STAR_current_length_STAR__orig_val__29883_33134,_STAR_current_level_STAR__temp_val__29884_33135,_STAR_current_length_STAR__temp_val__29885_33136,vec__29846,start,end,vec__29849,seq__29850,first__29851,seq__29850__$1,keyw,args){
return (function() { 
var G__33220__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33220 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33227__i = 0, G__33227__a = new Array(arguments.length -  0);
while (G__33227__i < G__33227__a.length) {G__33227__a[G__33227__i] = arguments[G__33227__i + 0]; ++G__33227__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33227__a,0,null);
} 
return G__33220__delegate.call(this,args__26153__auto__);};
G__33220.cljs$lang$maxFixedArity = 0;
G__33220.cljs$lang$applyTo = (function (arglist__33228){
var args__26153__auto__ = cljs.core.seq(arglist__33228);
return G__33220__delegate(args__26153__auto__);
});
G__33220.cljs$core$IFn$_invoke$arity$variadic = G__33220__delegate;
return G__33220;
})()
;
;})(args_33146__$1,format_in__26151__auto__,cf__26152__auto__,arg_33153,_STAR_current_level_STAR__orig_val__29882_33133,_STAR_current_length_STAR__orig_val__29883_33134,_STAR_current_level_STAR__temp_val__29884_33135,_STAR_current_length_STAR__temp_val__29885_33136,vec__29846,start,end,vec__29849,seq__29850,first__29851,seq__29850__$1,keyw,args))
})();
(fexpr__29980_33211.cljs$core$IFn$_invoke$arity$0 ? fexpr__29980_33211.cljs$core$IFn$_invoke$arity$0() : fexpr__29980_33211.call(null));
} else {
}
}

var G__33236 = cljs.core.next(args_33146__$1);
args_33146__$1 = G__33236;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29883_33134);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29882_33133);
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__29988 = alis;
var seq__29989 = cljs.core.seq(vec__29988);
var first__29990 = cljs.core.first(seq__29989);
var seq__29989__$1 = cljs.core.next(seq__29989);
var ns_sym = first__29990;
var first__29990__$1 = cljs.core.first(seq__29989__$1);
var seq__29989__$2 = cljs.core.next(seq__29989__$1);
var ns_name = first__29990__$1;
var stuff = seq__29989__$2;
var vec__29991 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29991,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29991,(1),null);
var vec__29994 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29994,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29994,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29999_33263 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30000_33264 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30001_33265 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30002_33266 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30001_33265);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30002_33266);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__30008_33270 = (function (){var format_in__26151__auto__ = "~w ~1I~@_~w";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33275__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33275 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33280__i = 0, G__33280__a = new Array(arguments.length -  0);
while (G__33280__i < G__33280__a.length) {G__33280__a[G__33280__i] = arguments[G__33280__i + 0]; ++G__33280__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33280__a,0,null);
} 
return G__33275__delegate.call(this,args__26153__auto__);};
G__33275.cljs$lang$maxFixedArity = 0;
G__33275.cljs$lang$applyTo = (function (arglist__33281){
var args__26153__auto__ = cljs.core.seq(arglist__33281);
return G__33275__delegate(args__26153__auto__);
});
G__33275.cljs$core$IFn$_invoke$arity$variadic = G__33275__delegate;
return G__33275;
})()
;
})();
(fexpr__30008_33270.cljs$core$IFn$_invoke$arity$2 ? fexpr__30008_33270.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__30008_33270.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__4185__auto__ = doc_str;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = attr_map;
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__30011_33286 = (function (){var format_in__26151__auto__ = "~@:_";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33291__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33291 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33295__i = 0, G__33295__a = new Array(arguments.length -  0);
while (G__33295__i < G__33295__a.length) {G__33295__a[G__33295__i] = arguments[G__33295__i + 0]; ++G__33295__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33295__a,0,null);
} 
return G__33291__delegate.call(this,args__26153__auto__);};
G__33291.cljs$lang$maxFixedArity = 0;
G__33291.cljs$lang$applyTo = (function (arglist__33296){
var args__26153__auto__ = cljs.core.seq(arglist__33296);
return G__33291__delegate(args__26153__auto__);
});
G__33291.cljs$core$IFn$_invoke$arity$variadic = G__33291__delegate;
return G__33291;
})()
;
})();
(fexpr__30011_33286.cljs$core$IFn$_invoke$arity$0 ? fexpr__30011_33286.cljs$core$IFn$_invoke$arity$0() : fexpr__30011_33286.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__4185__auto__ = attr_map;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__30020_33305 = attr_map;
var G__30021_33306 = cljs.core.seq(references);
var fexpr__30019_33307 = (function (){var format_in__26151__auto__ = "~w~:[~;~:@_~]";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33308__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33308 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33310__i = 0, G__33310__a = new Array(arguments.length -  0);
while (G__33310__i < G__33310__a.length) {G__33310__a[G__33310__i] = arguments[G__33310__i + 0]; ++G__33310__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33310__a,0,null);
} 
return G__33308__delegate.call(this,args__26153__auto__);};
G__33308.cljs$lang$maxFixedArity = 0;
G__33308.cljs$lang$applyTo = (function (arglist__33311){
var args__26153__auto__ = cljs.core.seq(arglist__33311);
return G__33308__delegate(args__26153__auto__);
});
G__33308.cljs$core$IFn$_invoke$arity$variadic = G__33308__delegate;
return G__33308;
})()
;
})();
(fexpr__30019_33307.cljs$core$IFn$_invoke$arity$2 ? fexpr__30019_33307.cljs$core$IFn$_invoke$arity$2(G__30020_33305,G__30021_33306) : fexpr__30019_33307.call(null,G__30020_33305,G__30021_33306));
} else {
}

var references_33313__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_33313__$1));

var temp__5735__auto___33315 = cljs.core.next(references_33313__$1);
if(temp__5735__auto___33315){
var references_33316__$2 = temp__5735__auto___33315;
cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33318 = references_33316__$2;
references_33313__$1 = G__33318;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30000_33264);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29999_33263);
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__26151__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33320__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33320 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33321__i = 0, G__33321__a = new Array(arguments.length -  0);
while (G__33321__i < G__33321__a.length) {G__33321__a[G__33321__i] = arguments[G__33321__i + 0]; ++G__33321__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33321__a,0,null);
} 
return G__33320__delegate.call(this,args__26153__auto__);};
G__33320.cljs$lang$maxFixedArity = 0;
G__33320.cljs$lang$applyTo = (function (arglist__33322){
var args__26153__auto__ = cljs.core.seq(arglist__33322);
return G__33320__delegate(args__26153__auto__);
});
G__33320.cljs$core$IFn$_invoke$arity$variadic = G__33320__delegate;
return G__33320;
})()
;
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__30044_33323 = (function (){var format_in__26151__auto__ = " ~_";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33324__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33324 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33325__i = 0, G__33325__a = new Array(arguments.length -  0);
while (G__33325__i < G__33325__a.length) {G__33325__a[G__33325__i] = arguments[G__33325__i + 0]; ++G__33325__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33325__a,0,null);
} 
return G__33324__delegate.call(this,args__26153__auto__);};
G__33324.cljs$lang$maxFixedArity = 0;
G__33324.cljs$lang$applyTo = (function (arglist__33326){
var args__26153__auto__ = cljs.core.seq(arglist__33326);
return G__33324__delegate(args__26153__auto__);
});
G__33324.cljs$core$IFn$_invoke$arity$variadic = G__33324__delegate;
return G__33324;
})()
;
})();
(fexpr__30044_33323.cljs$core$IFn$_invoke$arity$0 ? fexpr__30044_33323.cljs$core$IFn$_invoke$arity$0() : fexpr__30044_33323.call(null));
} else {
var fexpr__30062_33327 = (function (){var format_in__26151__auto__ = " ~@_";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33330__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33330 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33331__i = 0, G__33331__a = new Array(arguments.length -  0);
while (G__33331__i < G__33331__a.length) {G__33331__a[G__33331__i] = arguments[G__33331__i + 0]; ++G__33331__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33331__a,0,null);
} 
return G__33330__delegate.call(this,args__26153__auto__);};
G__33330.cljs$lang$maxFixedArity = 0;
G__33330.cljs$lang$applyTo = (function (arglist__33332){
var args__26153__auto__ = cljs.core.seq(arglist__33332);
return G__33330__delegate(args__26153__auto__);
});
G__33330.cljs$core$IFn$_invoke$arity$variadic = G__33330__delegate;
return G__33330;
})()
;
})();
(fexpr__30062_33327.cljs$core$IFn$_invoke$arity$0 ? fexpr__30062_33327.cljs$core$IFn$_invoke$arity$0() : fexpr__30062_33327.call(null));
}

var fexpr__30073 = (function (){var format_in__26151__auto__ = "~{~w~^ ~_~}";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33334__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33334 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33335__i = 0, G__33335__a = new Array(arguments.length -  0);
while (G__33335__i < G__33335__a.length) {G__33335__a[G__33335__i] = arguments[G__33335__i + 0]; ++G__33335__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33335__a,0,null);
} 
return G__33334__delegate.call(this,args__26153__auto__);};
G__33334.cljs$lang$maxFixedArity = 0;
G__33334.cljs$lang$applyTo = (function (arglist__33336){
var args__26153__auto__ = cljs.core.seq(arglist__33336);
return G__33334__delegate(args__26153__auto__);
});
G__33334.cljs$core$IFn$_invoke$arity$variadic = G__33334__delegate;
return G__33334;
})()
;
})();
return (fexpr__30073.cljs$core$IFn$_invoke$arity$1 ? fexpr__30073.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__30073.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__30081 = (function (){var format_in__26151__auto__ = " ~_~{~w~^ ~_~}";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33337__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33337 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33338__i = 0, G__33338__a = new Array(arguments.length -  0);
while (G__33338__i < G__33338__a.length) {G__33338__a[G__33338__i] = arguments[G__33338__i + 0]; ++G__33338__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33338__a,0,null);
} 
return G__33337__delegate.call(this,args__26153__auto__);};
G__33337.cljs$lang$maxFixedArity = 0;
G__33337.cljs$lang$applyTo = (function (arglist__33339){
var args__26153__auto__ = cljs.core.seq(arglist__33339);
return G__33337__delegate(args__26153__auto__);
});
G__33337.cljs$core$IFn$_invoke$arity$variadic = G__33337__delegate;
return G__33337;
})()
;
})();
return (fexpr__30081.cljs$core$IFn$_invoke$arity$1 ? fexpr__30081.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__30081.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__30090 = alis;
var seq__30091 = cljs.core.seq(vec__30090);
var first__30092 = cljs.core.first(seq__30091);
var seq__30091__$1 = cljs.core.next(seq__30091);
var defn_sym = first__30092;
var first__30092__$1 = cljs.core.first(seq__30091__$1);
var seq__30091__$2 = cljs.core.next(seq__30091__$1);
var defn_name = first__30092__$1;
var stuff = seq__30091__$2;
var vec__30093 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30093,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30093,(1),null);
var vec__30096 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30096,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30096,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30108_33346 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30109_33347 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30110_33348 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30111_33349 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30110_33348);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30111_33349);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__30119_33352 = (function (){var format_in__26151__auto__ = "~w ~1I~@_~w";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33354__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33354 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33356__i = 0, G__33356__a = new Array(arguments.length -  0);
while (G__33356__i < G__33356__a.length) {G__33356__a[G__33356__i] = arguments[G__33356__i + 0]; ++G__33356__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33356__a,0,null);
} 
return G__33354__delegate.call(this,args__26153__auto__);};
G__33354.cljs$lang$maxFixedArity = 0;
G__33354.cljs$lang$applyTo = (function (arglist__33357){
var args__26153__auto__ = cljs.core.seq(arglist__33357);
return G__33354__delegate(args__26153__auto__);
});
G__33354.cljs$core$IFn$_invoke$arity$variadic = G__33354__delegate;
return G__33354;
})()
;
})();
(fexpr__30119_33352.cljs$core$IFn$_invoke$arity$2 ? fexpr__30119_33352.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__30119_33352.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__30123_33362 = (function (){var format_in__26151__auto__ = " ~_~w";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33365__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33365 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33377__i = 0, G__33377__a = new Array(arguments.length -  0);
while (G__33377__i < G__33377__a.length) {G__33377__a[G__33377__i] = arguments[G__33377__i + 0]; ++G__33377__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33377__a,0,null);
} 
return G__33365__delegate.call(this,args__26153__auto__);};
G__33365.cljs$lang$maxFixedArity = 0;
G__33365.cljs$lang$applyTo = (function (arglist__33378){
var args__26153__auto__ = cljs.core.seq(arglist__33378);
return G__33365__delegate(args__26153__auto__);
});
G__33365.cljs$core$IFn$_invoke$arity$variadic = G__33365__delegate;
return G__33365;
})()
;
})();
(fexpr__30123_33362.cljs$core$IFn$_invoke$arity$1 ? fexpr__30123_33362.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__30123_33362.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__30126_33379 = (function (){var format_in__26151__auto__ = " ~_~w";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33381__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33381 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33382__i = 0, G__33382__a = new Array(arguments.length -  0);
while (G__33382__i < G__33382__a.length) {G__33382__a[G__33382__i] = arguments[G__33382__i + 0]; ++G__33382__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33382__a,0,null);
} 
return G__33381__delegate.call(this,args__26153__auto__);};
G__33381.cljs$lang$maxFixedArity = 0;
G__33381.cljs$lang$applyTo = (function (arglist__33383){
var args__26153__auto__ = cljs.core.seq(arglist__33383);
return G__33381__delegate(args__26153__auto__);
});
G__33381.cljs$core$IFn$_invoke$arity$variadic = G__33381__delegate;
return G__33381;
})()
;
})();
(fexpr__30126_33379.cljs$core$IFn$_invoke$arity$1 ? fexpr__30126_33379.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__30126_33379.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__4185__auto__ = doc_str;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__4185__auto__ = doc_str;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30109_33347);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30108_33346);
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30131_33390 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30132_33391 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30133_33392 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30134_33393 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30133_33392);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30134_33393);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count30135_33395 = (0);
var binding_33396 = binding_vec;
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count30135_33395 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq(binding_33396)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30136_33399 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30137_33400 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30138_33401 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30139_33402 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30138_33401);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30139_33402);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_33396));

if(cljs.core.next(binding_33396)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(binding_33396));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30137_33400);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30136_33399);
}}


if(cljs.core.next(cljs.core.rest(binding_33396))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33407 = (length_count30135_33395 + (1));
var G__33408 = cljs.core.next(cljs.core.rest(binding_33396));
length_count30135_33395 = G__33407;
binding_33396 = G__33408;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30132_33391);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30131_33390);
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30145_33413 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30146_33414 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30147_33415 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30148_33416 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30147_33415);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30148_33416);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis))))){
var fexpr__30149_33418 = (function (){var format_in__26151__auto__ = "~w ~1I~@_";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33420__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33420 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33422__i = 0, G__33422__a = new Array(arguments.length -  0);
while (G__33422__i < G__33422__a.length) {G__33422__a[G__33422__i] = arguments[G__33422__i + 0]; ++G__33422__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33422__a,0,null);
} 
return G__33420__delegate.call(this,args__26153__auto__);};
G__33420.cljs$lang$maxFixedArity = 0;
G__33420.cljs$lang$applyTo = (function (arglist__33423){
var args__26153__auto__ = cljs.core.seq(arglist__33423);
return G__33420__delegate(args__26153__auto__);
});
G__33420.cljs$core$IFn$_invoke$arity$variadic = G__33420__delegate;
return G__33420;
})()
;
})();
(fexpr__30149_33418.cljs$core$IFn$_invoke$arity$1 ? fexpr__30149_33418.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__30149_33418.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__30153_33424 = cljs.core.next(cljs.core.rest(alis));
var fexpr__30152_33425 = (function (){var format_in__26151__auto__ = " ~_~{~w~^ ~_~}";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33431__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33431 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33432__i = 0, G__33432__a = new Array(arguments.length -  0);
while (G__33432__i < G__33432__a.length) {G__33432__a[G__33432__i] = arguments[G__33432__i + 0]; ++G__33432__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33432__a,0,null);
} 
return G__33431__delegate.call(this,args__26153__auto__);};
G__33431.cljs$lang$maxFixedArity = 0;
G__33431.cljs$lang$applyTo = (function (arglist__33437){
var args__26153__auto__ = cljs.core.seq(arglist__33437);
return G__33431__delegate(args__26153__auto__);
});
G__33431.cljs$core$IFn$_invoke$arity$variadic = G__33431__delegate;
return G__33431;
})()
;
})();
(fexpr__30152_33425.cljs$core$IFn$_invoke$arity$1 ? fexpr__30152_33425.cljs$core$IFn$_invoke$arity$1(G__30153_33424) : fexpr__30152_33425.call(null,G__30153_33424));
} else {
cljs.pprint.pprint_simple_code_list(alis);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30146_33414);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30145_33413);
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__26151__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33447__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33447 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33449__i = 0, G__33449__a = new Array(arguments.length -  0);
while (G__33449__i < G__33449__a.length) {G__33449__a[G__33449__i] = arguments[G__33449__i + 0]; ++G__33449__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33449__a,0,null);
} 
return G__33447__delegate.call(this,args__26153__auto__);};
G__33447.cljs$lang$maxFixedArity = 0;
G__33447.cljs$lang$applyTo = (function (arglist__33450){
var args__26153__auto__ = cljs.core.seq(arglist__33450);
return G__33447__delegate(args__26153__auto__);
});
G__33447.cljs$core$IFn$_invoke$arity$variadic = G__33447__delegate;
return G__33447;
})()
;
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30162_33457 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30163_33458 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30164_33459 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30165_33460 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30164_33459);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30165_33460);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count30173_33466 = (0);
var alis_33467__$1 = cljs.core.next(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count30173_33466 < cljs.core._STAR_print_length_STAR_)))){
if(alis_33467__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30174_33472 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30175_33473 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30176_33474 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30177_33475 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30176_33474);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30177_33475);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_33467__$1));

if(cljs.core.next(alis_33467__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(alis_33467__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30175_33473);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30174_33472);
}}


if(cljs.core.next(cljs.core.rest(alis_33467__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33487 = (length_count30173_33466 + (1));
var G__33488 = cljs.core.next(cljs.core.rest(alis_33467__$1));
length_count30173_33466 = G__33487;
alis_33467__$1 = G__33488;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30163_33458);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30162_33457);
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30237_33492 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30238_33493 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30239_33494 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30240_33495 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30239_33494);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30240_33495);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__26151__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33505__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33505 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33510__i = 0, G__33510__a = new Array(arguments.length -  0);
while (G__33510__i < G__33510__a.length) {G__33510__a[G__33510__i] = arguments[G__33510__i + 0]; ++G__33510__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33510__a,0,null);
} 
return G__33505__delegate.call(this,args__26153__auto__);};
G__33505.cljs$lang$maxFixedArity = 0;
G__33505.cljs$lang$applyTo = (function (arglist__33512){
var args__26153__auto__ = cljs.core.seq(arglist__33512);
return G__33505__delegate(args__26153__auto__);
});
G__33505.cljs$core$IFn$_invoke$arity$variadic = G__33505__delegate;
return G__33505;
})()
;
})(),alis);

var length_count30257_33513 = (0);
var alis_33514__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count30257_33513 < cljs.core._STAR_print_length_STAR_)))){
if(alis_33514__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30258_33520 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30259_33521 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30260_33522 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30261_33523 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30260_33522);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30261_33523);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_33514__$1));

if(cljs.core.next(alis_33514__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(alis_33514__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30259_33521);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30258_33520);
}}


if(cljs.core.next(cljs.core.rest(alis_33514__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33535 = (length_count30257_33513 + (1));
var G__33536 = cljs.core.next(cljs.core.rest(alis_33514__$1));
length_count30257_33513 = G__33535;
alis_33514__$1 = G__33536;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30238_33493);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30237_33492);
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR__orig_val__30276 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__30277 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__30271_SHARP_,p2__30272_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__30271_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__30272_SHARP_)].join('')],null));
}),args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));
(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__30277);

try{var fexpr__30281 = (function (){var format_in__26151__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__26152__auto__ = ((typeof format_in__26151__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26151__auto__) : cljs.pprint.cached_compile.call(null,format_in__26151__auto__)):format_in__26151__auto__);
return (function() { 
var G__33558__delegate = function (args__26153__auto__){
var navigator__26154__auto__ = cljs.pprint.init_navigator(args__26153__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26152__auto__,navigator__26154__auto__);
};
var G__33558 = function (var_args){
var args__26153__auto__ = null;
if (arguments.length > 0) {
var G__33568__i = 0, G__33568__a = new Array(arguments.length -  0);
while (G__33568__i < G__33568__a.length) {G__33568__a[G__33568__i] = arguments[G__33568__i + 0]; ++G__33568__i;}
  args__26153__auto__ = new cljs.core.IndexedSeq(G__33568__a,0,null);
} 
return G__33558__delegate.call(this,args__26153__auto__);};
G__33558.cljs$lang$maxFixedArity = 0;
G__33558.cljs$lang$applyTo = (function (arglist__33569){
var args__26153__auto__ = cljs.core.seq(arglist__33569);
return G__33558__delegate(args__26153__auto__);
});
G__33558.cljs$core$IFn$_invoke$arity$variadic = G__33558__delegate;
return G__33558;
})()
;
})();
return (fexpr__30281.cljs$core$IFn$_invoke$arity$1 ? fexpr__30281.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__30281.call(null,nlis));
}finally {(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__30276);
}} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30300_33573 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30301_33574 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30302_33575 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30303_33576 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30302_33575);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30303_33576);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count30322_33584 = (0);
var alis_33586__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count30322_33584 < cljs.core._STAR_print_length_STAR_)))){
if(alis_33586__$1){
cljs.pprint.write_out(cljs.core.first(alis_33586__$1));

if(cljs.core.next(alis_33586__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33593 = (length_count30322_33584 + (1));
var G__33594 = cljs.core.next(alis_33586__$1);
length_count30322_33584 = G__33593;
alis_33586__$1 = G__33594;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30301_33574);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30300_33573);
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4582__auto__ = (function cljs$pprint$two_forms_$_iter__30360(s__30361){
return (new cljs.core.LazySeq(null,(function (){
var s__30361__$1 = s__30361;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30361__$1);
if(temp__5735__auto__){
var s__30361__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30361__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__30361__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__30363 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__30362 = (0);
while(true){
if((i__30362 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__30362);
cljs.core.chunk_append(b__30363,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__33607 = (i__30362 + (1));
i__30362 = G__33607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30363),cljs$pprint$two_forms_$_iter__30360(cljs.core.chunk_rest(s__30361__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30363),null);
}
} else {
var x = cljs.core.first(s__30361__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__30360(cljs.core.rest(s__30361__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30413_SHARP_){
var vec__30415 = p1__30413_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30415,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30415,(1),null);
if(cljs.core.not((function (){var or__4185__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__30413_SHARP_;
}
}),amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5733__auto__ = (function (){var G__30428 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__30428) : cljs.pprint._STAR_code_table_STAR_.call(null,G__30428));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var special_form = temp__5733__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5733__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5733__auto__)){
var arg_num = temp__5733__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.code_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30440 = cljs.core.get_global_hierarchy;
return (fexpr__30440.cljs$core$IFn$_invoke$arity$0 ? fexpr__30440.cljs$core$IFn$_invoke$arity$0() : fexpr__30440.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4273__auto__ = (0);
var y__4274__auto__ = (width - cljs.core.count(s));
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__30469 = arguments.length;
switch (G__30469) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,((cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)).length),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30460_SHARP_){
return ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__30460_SHARP_,k))).length);
}),rows));
}),ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30462_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__30462_SHARP_,"-"));
}),widths);
var fmt_row = (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__4582__auto__ = (function cljs$pprint$iter__30500(s__30501){
return (new cljs.core.LazySeq(null,(function (){
var s__30501__$1 = s__30501;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30501__$1);
if(temp__5735__auto__){
var s__30501__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30501__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__30501__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__30503 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__30502 = (0);
while(true){
if((i__30502 < size__4581__auto__)){
var vec__30509 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__30502);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30509,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30509,(1),null);
cljs.core.chunk_append(b__30503,cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__33728 = (i__30502 + (1));
i__30502 = G__33728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30503),cljs$pprint$iter__30500(cljs.core.chunk_rest(s__30501__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30503),null);
}
} else {
var vec__30516 = cljs.core.first(s__30501__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30516,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30516,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__30500(cljs.core.rest(s__30501__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30463_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__30463_SHARP_);
}),ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__30522 = cljs.core.seq(rows);
var chunk__30523 = null;
var count__30524 = (0);
var i__30525 = (0);
while(true){
if((i__30525 < count__30524)){
var row = chunk__30523.cljs$core$IIndexed$_nth$arity$2(null,i__30525);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__33772 = seq__30522;
var G__33773 = chunk__30523;
var G__33774 = count__30524;
var G__33775 = (i__30525 + (1));
seq__30522 = G__33772;
chunk__30523 = G__33773;
count__30524 = G__33774;
i__30525 = G__33775;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30522);
if(temp__5735__auto__){
var seq__30522__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30522__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__30522__$1);
var G__33776 = cljs.core.chunk_rest(seq__30522__$1);
var G__33777 = c__4609__auto__;
var G__33778 = cljs.core.count(c__4609__auto__);
var G__33779 = (0);
seq__30522 = G__33776;
chunk__30523 = G__33777;
count__30524 = G__33778;
i__30525 = G__33779;
continue;
} else {
var row = cljs.core.first(seq__30522__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__33783 = cljs.core.next(seq__30522__$1);
var G__33784 = null;
var G__33785 = (0);
var G__33786 = (0);
seq__30522 = G__33783;
chunk__30523 = G__33784;
count__30524 = G__33785;
i__30525 = G__33786;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
}));

(cljs.pprint.print_table.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cljs.pprint.js.map
