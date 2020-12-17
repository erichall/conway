goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36128 = arguments.length;
var i__4790__auto___36129 = (0);
while(true){
if((i__4790__auto___36129 < len__4789__auto___36128)){
args__4795__auto__.push((arguments[i__4790__auto___36129]));

var G__36130 = (i__4790__auto___36129 + (1));
i__4790__auto___36129 = G__36130;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35782){
var G__35783 = cljs.core.first(seq35782);
var seq35782__$1 = cljs.core.next(seq35782);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35783,seq35782__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35791){
var map__35792 = p__35791;
var map__35792__$1 = (((((!((map__35792 == null))))?(((((map__35792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35792):map__35792);
var src = map__35792__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35792__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35792__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35796 = cljs.core.seq(sources);
var chunk__35797 = null;
var count__35798 = (0);
var i__35799 = (0);
while(true){
if((i__35799 < count__35798)){
var map__35810 = chunk__35797.cljs$core$IIndexed$_nth$arity$2(null,i__35799);
var map__35810__$1 = (((((!((map__35810 == null))))?(((((map__35810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35810):map__35810);
var src = map__35810__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35810__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35810__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35810__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35810__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35819){var e_36133 = e35819;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36133);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36133.message)].join('')));
}

var G__36134 = seq__35796;
var G__36135 = chunk__35797;
var G__36136 = count__35798;
var G__36137 = (i__35799 + (1));
seq__35796 = G__36134;
chunk__35797 = G__36135;
count__35798 = G__36136;
i__35799 = G__36137;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35796);
if(temp__5735__auto__){
var seq__35796__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35796__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35796__$1);
var G__36138 = cljs.core.chunk_rest(seq__35796__$1);
var G__36139 = c__4609__auto__;
var G__36140 = cljs.core.count(c__4609__auto__);
var G__36141 = (0);
seq__35796 = G__36138;
chunk__35797 = G__36139;
count__35798 = G__36140;
i__35799 = G__36141;
continue;
} else {
var map__35823 = cljs.core.first(seq__35796__$1);
var map__35823__$1 = (((((!((map__35823 == null))))?(((((map__35823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35823):map__35823);
var src = map__35823__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35823__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35823__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35823__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35823__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35825){var e_36142 = e35825;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36142);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36142.message)].join('')));
}

var G__36143 = cljs.core.next(seq__35796__$1);
var G__36144 = null;
var G__36145 = (0);
var G__36146 = (0);
seq__35796 = G__36143;
chunk__35797 = G__36144;
count__35798 = G__36145;
i__35799 = G__36146;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35833 = cljs.core.seq(js_requires);
var chunk__35834 = null;
var count__35835 = (0);
var i__35836 = (0);
while(true){
if((i__35836 < count__35835)){
var js_ns = chunk__35834.cljs$core$IIndexed$_nth$arity$2(null,i__35836);
var require_str_36147 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36147);


var G__36148 = seq__35833;
var G__36149 = chunk__35834;
var G__36150 = count__35835;
var G__36151 = (i__35836 + (1));
seq__35833 = G__36148;
chunk__35834 = G__36149;
count__35835 = G__36150;
i__35836 = G__36151;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35833);
if(temp__5735__auto__){
var seq__35833__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35833__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35833__$1);
var G__36152 = cljs.core.chunk_rest(seq__35833__$1);
var G__36153 = c__4609__auto__;
var G__36154 = cljs.core.count(c__4609__auto__);
var G__36155 = (0);
seq__35833 = G__36152;
chunk__35834 = G__36153;
count__35835 = G__36154;
i__35836 = G__36155;
continue;
} else {
var js_ns = cljs.core.first(seq__35833__$1);
var require_str_36156 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36156);


var G__36157 = cljs.core.next(seq__35833__$1);
var G__36158 = null;
var G__36159 = (0);
var G__36160 = (0);
seq__35833 = G__36157;
chunk__35834 = G__36158;
count__35835 = G__36159;
i__35836 = G__36160;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35846 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35846) : callback.call(null,G__35846));
} else {
var G__35847 = shadow.cljs.devtools.client.env.files_url();
var G__35848 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__35849 = "POST";
var G__35850 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35851 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35847,G__35848,G__35849,G__35850,G__35851);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35853){
var map__35854 = p__35853;
var map__35854__$1 = (((((!((map__35854 == null))))?(((((map__35854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35854):map__35854);
var msg = map__35854__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35854__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35854__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35857 = info;
var map__35857__$1 = (((((!((map__35857 == null))))?(((((map__35857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35857):map__35857);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35857__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35857__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35859(s__35860){
return (new cljs.core.LazySeq(null,(function (){
var s__35860__$1 = s__35860;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35860__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35868 = cljs.core.first(xs__6292__auto__);
var map__35868__$1 = (((((!((map__35868 == null))))?(((((map__35868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35868):map__35868);
var src = map__35868__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__35860__$1,map__35868,map__35868__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35857,map__35857__$1,sources,compiled,map__35854,map__35854__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35859_$_iter__35861(s__35862){
return (new cljs.core.LazySeq(null,((function (s__35860__$1,map__35868,map__35868__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35857,map__35857__$1,sources,compiled,map__35854,map__35854__$1,msg,info,reload_info){
return (function (){
var s__35862__$1 = s__35862;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35862__$1);
if(temp__5735__auto____$1){
var s__35862__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35862__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__35862__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__35864 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__35863 = (0);
while(true){
if((i__35863 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__35863);
cljs.core.chunk_append(b__35864,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36166 = (i__35863 + (1));
i__35863 = G__36166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35864),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35859_$_iter__35861(cljs.core.chunk_rest(s__35862__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35864),null);
}
} else {
var warning = cljs.core.first(s__35862__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35859_$_iter__35861(cljs.core.rest(s__35862__$2)));
}
} else {
return null;
}
break;
}
});})(s__35860__$1,map__35868,map__35868__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35857,map__35857__$1,sources,compiled,map__35854,map__35854__$1,msg,info,reload_info))
,null,null));
});})(s__35860__$1,map__35868,map__35868__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35857,map__35857__$1,sources,compiled,map__35854,map__35854__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35859(cljs.core.rest(s__35860__$1)));
} else {
var G__36170 = cljs.core.rest(s__35860__$1);
s__35860__$1 = G__36170;
continue;
}
} else {
var G__36171 = cljs.core.rest(s__35860__$1);
s__35860__$1 = G__36171;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__35893_36172 = cljs.core.seq(warnings);
var chunk__35894_36173 = null;
var count__35895_36174 = (0);
var i__35896_36175 = (0);
while(true){
if((i__35896_36175 < count__35895_36174)){
var map__35938_36176 = chunk__35894_36173.cljs$core$IIndexed$_nth$arity$2(null,i__35896_36175);
var map__35938_36177__$1 = (((((!((map__35938_36176 == null))))?(((((map__35938_36176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35938_36176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35938_36176):map__35938_36176);
var w_36178 = map__35938_36177__$1;
var msg_36179__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35938_36177__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35938_36177__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35938_36177__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35938_36177__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36182)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36180),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36181),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36179__$1)].join(''));


var G__36188 = seq__35893_36172;
var G__36189 = chunk__35894_36173;
var G__36190 = count__35895_36174;
var G__36191 = (i__35896_36175 + (1));
seq__35893_36172 = G__36188;
chunk__35894_36173 = G__36189;
count__35895_36174 = G__36190;
i__35896_36175 = G__36191;
continue;
} else {
var temp__5735__auto___36192 = cljs.core.seq(seq__35893_36172);
if(temp__5735__auto___36192){
var seq__35893_36193__$1 = temp__5735__auto___36192;
if(cljs.core.chunked_seq_QMARK_(seq__35893_36193__$1)){
var c__4609__auto___36194 = cljs.core.chunk_first(seq__35893_36193__$1);
var G__36195 = cljs.core.chunk_rest(seq__35893_36193__$1);
var G__36196 = c__4609__auto___36194;
var G__36197 = cljs.core.count(c__4609__auto___36194);
var G__36198 = (0);
seq__35893_36172 = G__36195;
chunk__35894_36173 = G__36196;
count__35895_36174 = G__36197;
i__35896_36175 = G__36198;
continue;
} else {
var map__35944_36200 = cljs.core.first(seq__35893_36193__$1);
var map__35944_36201__$1 = (((((!((map__35944_36200 == null))))?(((((map__35944_36200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35944_36200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35944_36200):map__35944_36200);
var w_36202 = map__35944_36201__$1;
var msg_36203__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35944_36201__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35944_36201__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35944_36201__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35944_36201__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36206)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36204),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36205),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36203__$1)].join(''));


var G__36208 = cljs.core.next(seq__35893_36193__$1);
var G__36209 = null;
var G__36210 = (0);
var G__36211 = (0);
seq__35893_36172 = G__36208;
chunk__35894_36173 = G__36209;
count__35895_36174 = G__36210;
i__35896_36175 = G__36211;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__35949){
var map__35950 = p__35949;
var map__35950__$1 = (((((!((map__35950 == null))))?(((((map__35950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35950):map__35950);
var src = map__35950__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35950__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35950__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35953){
var map__35954 = p__35953;
var map__35954__$1 = (((((!((map__35954 == null))))?(((((map__35954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35954):map__35954);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35954__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__35961){
var map__35962 = p__35961;
var map__35962__$1 = (((((!((map__35962 == null))))?(((((map__35962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35962):map__35962);
var rc = map__35962__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35962__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__35852_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35852_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35970){
var map__35973 = p__35970;
var map__35973__$1 = (((((!((map__35973 == null))))?(((((map__35973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35973):map__35973);
var msg = map__35973__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35973__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35977 = cljs.core.seq(updates);
var chunk__35979 = null;
var count__35980 = (0);
var i__35981 = (0);
while(true){
if((i__35981 < count__35980)){
var path = chunk__35979.cljs$core$IIndexed$_nth$arity$2(null,i__35981);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36030_36219 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36033_36220 = null;
var count__36034_36221 = (0);
var i__36035_36222 = (0);
while(true){
if((i__36035_36222 < count__36034_36221)){
var node_36226 = chunk__36033_36220.cljs$core$IIndexed$_nth$arity$2(null,i__36035_36222);
var path_match_36227 = shadow.cljs.devtools.client.browser.match_paths(node_36226.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36227)){
var new_link_36228 = (function (){var G__36041 = node_36226.cloneNode(true);
G__36041.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36227),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36041;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36227], 0));

goog.dom.insertSiblingAfter(new_link_36228,node_36226);

goog.dom.removeNode(node_36226);


var G__36231 = seq__36030_36219;
var G__36232 = chunk__36033_36220;
var G__36233 = count__36034_36221;
var G__36234 = (i__36035_36222 + (1));
seq__36030_36219 = G__36231;
chunk__36033_36220 = G__36232;
count__36034_36221 = G__36233;
i__36035_36222 = G__36234;
continue;
} else {
var G__36235 = seq__36030_36219;
var G__36236 = chunk__36033_36220;
var G__36237 = count__36034_36221;
var G__36238 = (i__36035_36222 + (1));
seq__36030_36219 = G__36235;
chunk__36033_36220 = G__36236;
count__36034_36221 = G__36237;
i__36035_36222 = G__36238;
continue;
}
} else {
var temp__5735__auto___36239 = cljs.core.seq(seq__36030_36219);
if(temp__5735__auto___36239){
var seq__36030_36240__$1 = temp__5735__auto___36239;
if(cljs.core.chunked_seq_QMARK_(seq__36030_36240__$1)){
var c__4609__auto___36241 = cljs.core.chunk_first(seq__36030_36240__$1);
var G__36242 = cljs.core.chunk_rest(seq__36030_36240__$1);
var G__36243 = c__4609__auto___36241;
var G__36244 = cljs.core.count(c__4609__auto___36241);
var G__36245 = (0);
seq__36030_36219 = G__36242;
chunk__36033_36220 = G__36243;
count__36034_36221 = G__36244;
i__36035_36222 = G__36245;
continue;
} else {
var node_36246 = cljs.core.first(seq__36030_36240__$1);
var path_match_36247 = shadow.cljs.devtools.client.browser.match_paths(node_36246.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36247)){
var new_link_36248 = (function (){var G__36042 = node_36246.cloneNode(true);
G__36042.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36247),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36042;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36247], 0));

goog.dom.insertSiblingAfter(new_link_36248,node_36246);

goog.dom.removeNode(node_36246);


var G__36249 = cljs.core.next(seq__36030_36240__$1);
var G__36250 = null;
var G__36251 = (0);
var G__36252 = (0);
seq__36030_36219 = G__36249;
chunk__36033_36220 = G__36250;
count__36034_36221 = G__36251;
i__36035_36222 = G__36252;
continue;
} else {
var G__36253 = cljs.core.next(seq__36030_36240__$1);
var G__36254 = null;
var G__36255 = (0);
var G__36256 = (0);
seq__36030_36219 = G__36253;
chunk__36033_36220 = G__36254;
count__36034_36221 = G__36255;
i__36035_36222 = G__36256;
continue;
}
}
} else {
}
}
break;
}


var G__36257 = seq__35977;
var G__36258 = chunk__35979;
var G__36259 = count__35980;
var G__36260 = (i__35981 + (1));
seq__35977 = G__36257;
chunk__35979 = G__36258;
count__35980 = G__36259;
i__35981 = G__36260;
continue;
} else {
var G__36261 = seq__35977;
var G__36262 = chunk__35979;
var G__36263 = count__35980;
var G__36264 = (i__35981 + (1));
seq__35977 = G__36261;
chunk__35979 = G__36262;
count__35980 = G__36263;
i__35981 = G__36264;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35977);
if(temp__5735__auto__){
var seq__35977__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35977__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35977__$1);
var G__36265 = cljs.core.chunk_rest(seq__35977__$1);
var G__36266 = c__4609__auto__;
var G__36267 = cljs.core.count(c__4609__auto__);
var G__36268 = (0);
seq__35977 = G__36265;
chunk__35979 = G__36266;
count__35980 = G__36267;
i__35981 = G__36268;
continue;
} else {
var path = cljs.core.first(seq__35977__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36043_36272 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36047_36273 = null;
var count__36048_36274 = (0);
var i__36049_36275 = (0);
while(true){
if((i__36049_36275 < count__36048_36274)){
var node_36277 = chunk__36047_36273.cljs$core$IIndexed$_nth$arity$2(null,i__36049_36275);
var path_match_36278 = shadow.cljs.devtools.client.browser.match_paths(node_36277.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36278)){
var new_link_36279 = (function (){var G__36055 = node_36277.cloneNode(true);
G__36055.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36278),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36055;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36278], 0));

goog.dom.insertSiblingAfter(new_link_36279,node_36277);

goog.dom.removeNode(node_36277);


var G__36281 = seq__36043_36272;
var G__36282 = chunk__36047_36273;
var G__36283 = count__36048_36274;
var G__36284 = (i__36049_36275 + (1));
seq__36043_36272 = G__36281;
chunk__36047_36273 = G__36282;
count__36048_36274 = G__36283;
i__36049_36275 = G__36284;
continue;
} else {
var G__36287 = seq__36043_36272;
var G__36288 = chunk__36047_36273;
var G__36289 = count__36048_36274;
var G__36290 = (i__36049_36275 + (1));
seq__36043_36272 = G__36287;
chunk__36047_36273 = G__36288;
count__36048_36274 = G__36289;
i__36049_36275 = G__36290;
continue;
}
} else {
var temp__5735__auto___36291__$1 = cljs.core.seq(seq__36043_36272);
if(temp__5735__auto___36291__$1){
var seq__36043_36292__$1 = temp__5735__auto___36291__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36043_36292__$1)){
var c__4609__auto___36293 = cljs.core.chunk_first(seq__36043_36292__$1);
var G__36294 = cljs.core.chunk_rest(seq__36043_36292__$1);
var G__36295 = c__4609__auto___36293;
var G__36296 = cljs.core.count(c__4609__auto___36293);
var G__36297 = (0);
seq__36043_36272 = G__36294;
chunk__36047_36273 = G__36295;
count__36048_36274 = G__36296;
i__36049_36275 = G__36297;
continue;
} else {
var node_36298 = cljs.core.first(seq__36043_36292__$1);
var path_match_36299 = shadow.cljs.devtools.client.browser.match_paths(node_36298.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36299)){
var new_link_36300 = (function (){var G__36058 = node_36298.cloneNode(true);
G__36058.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36299),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36058;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36299], 0));

goog.dom.insertSiblingAfter(new_link_36300,node_36298);

goog.dom.removeNode(node_36298);


var G__36301 = cljs.core.next(seq__36043_36292__$1);
var G__36302 = null;
var G__36303 = (0);
var G__36304 = (0);
seq__36043_36272 = G__36301;
chunk__36047_36273 = G__36302;
count__36048_36274 = G__36303;
i__36049_36275 = G__36304;
continue;
} else {
var G__36306 = cljs.core.next(seq__36043_36292__$1);
var G__36307 = null;
var G__36308 = (0);
var G__36309 = (0);
seq__36043_36272 = G__36306;
chunk__36047_36273 = G__36307;
count__36048_36274 = G__36308;
i__36049_36275 = G__36309;
continue;
}
}
} else {
}
}
break;
}


var G__36310 = cljs.core.next(seq__35977__$1);
var G__36311 = null;
var G__36312 = (0);
var G__36313 = (0);
seq__35977 = G__36310;
chunk__35979 = G__36311;
count__35980 = G__36312;
i__35981 = G__36313;
continue;
} else {
var G__36314 = cljs.core.next(seq__35977__$1);
var G__36315 = null;
var G__36316 = (0);
var G__36317 = (0);
seq__35977 = G__36314;
chunk__35979 = G__36315;
count__35980 = G__36316;
i__35981 = G__36317;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__36072){
var map__36073 = p__36072;
var map__36073__$1 = (((((!((map__36073 == null))))?(((((map__36073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36073):map__36073);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36073__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36073__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__36075,done){
var map__36076 = p__36075;
var map__36076__$1 = (((((!((map__36076 == null))))?(((((map__36076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36076):map__36076);
var msg = map__36076__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36076__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36076__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36076__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36076__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36079){
var map__36080 = p__36079;
var map__36080__$1 = (((((!((map__36080 == null))))?(((((map__36080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36080):map__36080);
var src = map__36080__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36080__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e36082){var e = e36082;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__36087,done){
var map__36088 = p__36087;
var map__36088__$1 = (((((!((map__36088 == null))))?(((((map__36088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36088):map__36088);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36088__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36088__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__36090){
var map__36091 = p__36090;
var map__36091__$1 = (((((!((map__36091 == null))))?(((((map__36091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36091):map__36091);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36091__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36091__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__36097,done){
var map__36098 = p__36097;
var map__36098__$1 = (((((!((map__36098 == null))))?(((((map__36098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36098):map__36098);
var msg = map__36098__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36098__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__36100_36322 = type;
var G__36100_36323__$1 = (((G__36100_36322 instanceof cljs.core.Keyword))?G__36100_36322.fqn:null);
switch (G__36100_36323__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__36102 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__36103 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__36104 = "POST";
var G__36105 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__36106 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__36102,G__36103,G__36104,G__36105,G__36106);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__36114 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__36113 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__36113.cljs$core$IFn$_invoke$arity$1 ? fexpr__36113.cljs$core$IFn$_invoke$arity$1(G__36114) : fexpr__36113.call(null,G__36114));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e36115){var e = e36115;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___36361 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___36361)){
var s_36362 = temp__5735__auto___36361;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_36362.onclose = (function (e){
return null;
}));

s_36362.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
