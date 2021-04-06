goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34413){
var map__34418 = p__34413;
var map__34418__$1 = (((((!((map__34418 == null))))?(((((map__34418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34418):map__34418);
var m = map__34418__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34418__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34418__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34435_34850 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34436_34851 = null;
var count__34437_34852 = (0);
var i__34438_34853 = (0);
while(true){
if((i__34438_34853 < count__34437_34852)){
var f_34854 = chunk__34436_34851.cljs$core$IIndexed$_nth$arity$2(null,i__34438_34853);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34854], 0));


var G__34856 = seq__34435_34850;
var G__34857 = chunk__34436_34851;
var G__34858 = count__34437_34852;
var G__34859 = (i__34438_34853 + (1));
seq__34435_34850 = G__34856;
chunk__34436_34851 = G__34857;
count__34437_34852 = G__34858;
i__34438_34853 = G__34859;
continue;
} else {
var temp__5735__auto___34860 = cljs.core.seq(seq__34435_34850);
if(temp__5735__auto___34860){
var seq__34435_34861__$1 = temp__5735__auto___34860;
if(cljs.core.chunked_seq_QMARK_(seq__34435_34861__$1)){
var c__4609__auto___34869 = cljs.core.chunk_first(seq__34435_34861__$1);
var G__34870 = cljs.core.chunk_rest(seq__34435_34861__$1);
var G__34871 = c__4609__auto___34869;
var G__34872 = cljs.core.count(c__4609__auto___34869);
var G__34873 = (0);
seq__34435_34850 = G__34870;
chunk__34436_34851 = G__34871;
count__34437_34852 = G__34872;
i__34438_34853 = G__34873;
continue;
} else {
var f_34874 = cljs.core.first(seq__34435_34861__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34874], 0));


var G__34876 = cljs.core.next(seq__34435_34861__$1);
var G__34877 = null;
var G__34878 = (0);
var G__34879 = (0);
seq__34435_34850 = G__34876;
chunk__34436_34851 = G__34877;
count__34437_34852 = G__34878;
i__34438_34853 = G__34879;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34881 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34881], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34881)))?cljs.core.second(arglists_34881):arglists_34881)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34458_34902 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34459_34903 = null;
var count__34460_34904 = (0);
var i__34461_34905 = (0);
while(true){
if((i__34461_34905 < count__34460_34904)){
var vec__34474_34910 = chunk__34459_34903.cljs$core$IIndexed$_nth$arity$2(null,i__34461_34905);
var name_34911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34474_34910,(0),null);
var map__34477_34912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34474_34910,(1),null);
var map__34477_34913__$1 = (((((!((map__34477_34912 == null))))?(((((map__34477_34912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34477_34912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34477_34912):map__34477_34912);
var doc_34914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34477_34913__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34477_34913__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34911], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34915], 0));

if(cljs.core.truth_(doc_34914)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34914], 0));
} else {
}


var G__34931 = seq__34458_34902;
var G__34932 = chunk__34459_34903;
var G__34933 = count__34460_34904;
var G__34934 = (i__34461_34905 + (1));
seq__34458_34902 = G__34931;
chunk__34459_34903 = G__34932;
count__34460_34904 = G__34933;
i__34461_34905 = G__34934;
continue;
} else {
var temp__5735__auto___34937 = cljs.core.seq(seq__34458_34902);
if(temp__5735__auto___34937){
var seq__34458_34939__$1 = temp__5735__auto___34937;
if(cljs.core.chunked_seq_QMARK_(seq__34458_34939__$1)){
var c__4609__auto___34940 = cljs.core.chunk_first(seq__34458_34939__$1);
var G__34941 = cljs.core.chunk_rest(seq__34458_34939__$1);
var G__34942 = c__4609__auto___34940;
var G__34943 = cljs.core.count(c__4609__auto___34940);
var G__34944 = (0);
seq__34458_34902 = G__34941;
chunk__34459_34903 = G__34942;
count__34460_34904 = G__34943;
i__34461_34905 = G__34944;
continue;
} else {
var vec__34480_34945 = cljs.core.first(seq__34458_34939__$1);
var name_34946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34480_34945,(0),null);
var map__34483_34947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34480_34945,(1),null);
var map__34483_34948__$1 = (((((!((map__34483_34947 == null))))?(((((map__34483_34947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34483_34947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34483_34947):map__34483_34947);
var doc_34949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483_34948__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483_34948__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34946], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34950], 0));

if(cljs.core.truth_(doc_34949)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34949], 0));
} else {
}


var G__34963 = cljs.core.next(seq__34458_34939__$1);
var G__34964 = null;
var G__34965 = (0);
var G__34966 = (0);
seq__34458_34902 = G__34963;
chunk__34459_34903 = G__34964;
count__34460_34904 = G__34965;
i__34461_34905 = G__34966;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34488 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34489 = null;
var count__34490 = (0);
var i__34491 = (0);
while(true){
if((i__34491 < count__34490)){
var role = chunk__34489.cljs$core$IIndexed$_nth$arity$2(null,i__34491);
var temp__5735__auto___34987__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34987__$1)){
var spec_34989 = temp__5735__auto___34987__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34989)], 0));
} else {
}


var G__34996 = seq__34488;
var G__34997 = chunk__34489;
var G__34998 = count__34490;
var G__34999 = (i__34491 + (1));
seq__34488 = G__34996;
chunk__34489 = G__34997;
count__34490 = G__34998;
i__34491 = G__34999;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__34488);
if(temp__5735__auto____$1){
var seq__34488__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34488__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34488__$1);
var G__35010 = cljs.core.chunk_rest(seq__34488__$1);
var G__35011 = c__4609__auto__;
var G__35012 = cljs.core.count(c__4609__auto__);
var G__35013 = (0);
seq__34488 = G__35010;
chunk__34489 = G__35011;
count__34490 = G__35012;
i__34491 = G__35013;
continue;
} else {
var role = cljs.core.first(seq__34488__$1);
var temp__5735__auto___35018__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35018__$2)){
var spec_35021 = temp__5735__auto___35018__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35021)], 0));
} else {
}


var G__35022 = cljs.core.next(seq__34488__$1);
var G__35023 = null;
var G__35024 = (0);
var G__35025 = (0);
seq__34488 = G__35022;
chunk__34489 = G__35023;
count__34490 = G__35024;
i__34491 = G__35025;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35035 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35036 = cljs.core.ex_cause(t);
via = G__35035;
t = G__35036;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34545 = datafied_throwable;
var map__34545__$1 = (((((!((map__34545 == null))))?(((((map__34545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34545):map__34545);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34545__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34545__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34545__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34546 = cljs.core.last(via);
var map__34546__$1 = (((((!((map__34546 == null))))?(((((map__34546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34546):map__34546);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34546__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34546__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34546__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34547 = data;
var map__34547__$1 = (((((!((map__34547 == null))))?(((((map__34547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34547):map__34547);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34547__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34547__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34547__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34548 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34548__$1 = (((((!((map__34548 == null))))?(((((map__34548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34548):map__34548);
var top_data = map__34548__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34582 = phase;
var G__34582__$1 = (((G__34582 instanceof cljs.core.Keyword))?G__34582.fqn:null);
switch (G__34582__$1) {
case "read-source":
var map__34583 = data;
var map__34583__$1 = (((((!((map__34583 == null))))?(((((map__34583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34583):map__34583);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34583__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34583__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34589 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34589__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34589,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34589);
var G__34589__$2 = (cljs.core.truth_((function (){var fexpr__34594 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34594.cljs$core$IFn$_invoke$arity$1 ? fexpr__34594.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34594.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34589__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34589__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34589__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34589__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34599 = top_data;
var G__34599__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34599,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34599);
var G__34599__$2 = (cljs.core.truth_((function (){var fexpr__34602 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34602.cljs$core$IFn$_invoke$arity$1 ? fexpr__34602.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34602.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34599__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34599__$1);
var G__34599__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34599__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34599__$2);
var G__34599__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34599__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34599__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34599__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34599__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34617 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34617,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34617,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34617,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34617,(3),null);
var G__34620 = top_data;
var G__34620__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34620,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34620);
var G__34620__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34620__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34620__$1);
var G__34620__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34620__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34620__$2);
var G__34620__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34620__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34620__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34620__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34620__$4;
}

break;
case "execution":
var vec__34645 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34645,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34645,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34645,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34645,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34541_SHARP_){
var or__4185__auto__ = (p1__34541_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__34664 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34664.cljs$core$IFn$_invoke$arity$1 ? fexpr__34664.cljs$core$IFn$_invoke$arity$1(p1__34541_SHARP_) : fexpr__34664.call(null,p1__34541_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__34672 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34672__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34672,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34672);
var G__34672__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34672__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34672__$1);
var G__34672__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34672__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34672__$2);
var G__34672__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34672__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34672__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34672__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34672__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34582__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34719){
var map__34721 = p__34719;
var map__34721__$1 = (((((!((map__34721 == null))))?(((((map__34721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34721):map__34721);
var triage_data = map__34721__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34721__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34721__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34721__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34721__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34721__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34721__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34721__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34721__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34736 = phase;
var G__34736__$1 = (((G__34736 instanceof cljs.core.Keyword))?G__34736.fqn:null);
switch (G__34736__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34738 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34739 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34740 = loc;
var G__34741 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34749_35167 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34750_35168 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34751_35169 = true;
var _STAR_print_fn_STAR__temp_val__34752_35170 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34751_35169);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34752_35170);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34702_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34702_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34750_35168);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34749_35167);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34738,G__34739,G__34740,G__34741) : format.call(null,G__34738,G__34739,G__34740,G__34741));

break;
case "macroexpansion":
var G__34763 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34764 = cause_type;
var G__34765 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34766 = loc;
var G__34767 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34763,G__34764,G__34765,G__34766,G__34767) : format.call(null,G__34763,G__34764,G__34765,G__34766,G__34767));

break;
case "compile-syntax-check":
var G__34772 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34773 = cause_type;
var G__34774 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34775 = loc;
var G__34776 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34772,G__34773,G__34774,G__34775,G__34776) : format.call(null,G__34772,G__34773,G__34774,G__34775,G__34776));

break;
case "compilation":
var G__34782 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34783 = cause_type;
var G__34784 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34785 = loc;
var G__34786 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34782,G__34783,G__34784,G__34785,G__34786) : format.call(null,G__34782,G__34783,G__34784,G__34785,G__34786));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34791 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34792 = symbol;
var G__34793 = loc;
var G__34794 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34798_35199 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34799_35200 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34800_35201 = true;
var _STAR_print_fn_STAR__temp_val__34801_35202 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34800_35201);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34801_35202);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34716_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34716_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34799_35200);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34798_35199);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34791,G__34792,G__34793,G__34794) : format.call(null,G__34791,G__34792,G__34793,G__34794));
} else {
var G__34820 = "Execution error%s at %s(%s).\n%s\n";
var G__34821 = cause_type;
var G__34822 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34823 = loc;
var G__34824 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34820,G__34821,G__34822,G__34823,G__34824) : format.call(null,G__34820,G__34821,G__34822,G__34823,G__34824));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34736__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
