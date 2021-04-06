goog.provide('shadow.cljs.devtools.client.worker');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.worker !== 'undefined') && (typeof shadow.cljs.devtools.client.worker.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.worker.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.worker.devtools_msg = (function shadow$cljs$devtools$client$worker$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26063 = arguments.length;
var i__4790__auto___26064 = (0);
while(true){
if((i__4790__auto___26064 < len__4789__auto___26063)){
args__4795__auto__.push((arguments[i__4790__auto___26064]));

var G__26065 = (i__4790__auto___26064 + (1));
i__4790__auto___26064 = G__26065;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.worker.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.worker.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 [WORKER] shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.worker.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.worker.devtools_msg.cljs$lang$applyTo = (function (seq25911){
var G__25916 = cljs.core.first(seq25911);
var seq25911__$1 = cljs.core.next(seq25911);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25916,seq25911__$1);
}));

shadow.cljs.devtools.client.worker.ws_msg = (function shadow$cljs$devtools$client$worker$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.worker.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.worker !== 'undefined') && (typeof shadow.cljs.devtools.client.worker.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.worker.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.worker.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.worker.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$worker$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.worker.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.worker.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$worker$src_is_loaded_QMARK_(p__25958){
var map__25959 = p__25958;
var map__25959__$1 = (((((!((map__25959 == null))))?(((((map__25959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25959):map__25959);
var src = map__25959__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25959__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25959__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.worker.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.worker.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.worker.script_eval = (function shadow$cljs$devtools$client$worker$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.worker.do_js_load = (function shadow$cljs$devtools$client$worker$do_js_load(sources){
var seq__25961 = cljs.core.seq(sources);
var chunk__25962 = null;
var count__25963 = (0);
var i__25964 = (0);
while(true){
if((i__25964 < count__25963)){
var map__25986 = chunk__25962.cljs$core$IIndexed$_nth$arity$2(null,i__25964);
var map__25986__$1 = (((((!((map__25986 == null))))?(((((map__25986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25986):map__25986);
var src = map__25986__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25986__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25986__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25986__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25986__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.worker.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.worker.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e25988){var e_26066 = e25988;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_26066);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_26066.message)].join('')));
}

var G__26067 = seq__25961;
var G__26068 = chunk__25962;
var G__26069 = count__25963;
var G__26070 = (i__25964 + (1));
seq__25961 = G__26067;
chunk__25962 = G__26068;
count__25963 = G__26069;
i__25964 = G__26070;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25961);
if(temp__5735__auto__){
var seq__25961__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25961__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__25961__$1);
var G__26071 = cljs.core.chunk_rest(seq__25961__$1);
var G__26072 = c__4609__auto__;
var G__26073 = cljs.core.count(c__4609__auto__);
var G__26074 = (0);
seq__25961 = G__26071;
chunk__25962 = G__26072;
count__25963 = G__26073;
i__25964 = G__26074;
continue;
} else {
var map__25989 = cljs.core.first(seq__25961__$1);
var map__25989__$1 = (((((!((map__25989 == null))))?(((((map__25989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25989):map__25989);
var src = map__25989__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25989__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25989__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25989__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25989__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.worker.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.worker.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e25991){var e_26075 = e25991;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_26075);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_26075.message)].join('')));
}

var G__26076 = cljs.core.next(seq__25961__$1);
var G__26077 = null;
var G__26078 = (0);
var G__26079 = (0);
seq__25961 = G__26076;
chunk__25962 = G__26077;
count__25963 = G__26078;
i__25964 = G__26079;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.worker.do_js_reload = (function shadow$cljs$devtools$client$worker$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.worker.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.worker.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.worker.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.worker.do_js_requires = (function shadow$cljs$devtools$client$worker$do_js_requires(js_requires){
var seq__25992 = cljs.core.seq(js_requires);
var chunk__25993 = null;
var count__25994 = (0);
var i__25995 = (0);
while(true){
if((i__25995 < count__25994)){
var js_ns = chunk__25993.cljs$core$IIndexed$_nth$arity$2(null,i__25995);
var require_str_26080 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.worker.script_eval(require_str_26080);


var G__26081 = seq__25992;
var G__26082 = chunk__25993;
var G__26083 = count__25994;
var G__26084 = (i__25995 + (1));
seq__25992 = G__26081;
chunk__25993 = G__26082;
count__25994 = G__26083;
i__25995 = G__26084;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25992);
if(temp__5735__auto__){
var seq__25992__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25992__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__25992__$1);
var G__26085 = cljs.core.chunk_rest(seq__25992__$1);
var G__26086 = c__4609__auto__;
var G__26087 = cljs.core.count(c__4609__auto__);
var G__26088 = (0);
seq__25992 = G__26085;
chunk__25993 = G__26086;
count__25994 = G__26087;
i__25995 = G__26088;
continue;
} else {
var js_ns = cljs.core.first(seq__25992__$1);
var require_str_26089 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.worker.script_eval(require_str_26089);


var G__26090 = cljs.core.next(seq__25992__$1);
var G__26091 = null;
var G__26092 = (0);
var G__26093 = (0);
seq__25992 = G__26090;
chunk__25993 = G__26091;
count__25994 = G__26092;
i__25995 = G__26093;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.worker.load_sources = (function shadow$cljs$devtools$client$worker$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__25996 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__25996) : callback.call(null,G__25996));
} else {
var G__25997 = shadow.cljs.devtools.client.env.files_url();
var G__25998 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__25999 = "POST";
var G__26000 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__26001 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__25997,G__25998,G__25999,G__26000,G__26001);
}
});
shadow.cljs.devtools.client.worker.handle_build_complete = (function shadow$cljs$devtools$client$worker$handle_build_complete(p__26003){
var map__26004 = p__26003;
var map__26004__$1 = (((((!((map__26004 == null))))?(((((map__26004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26004):map__26004);
var msg = map__26004__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26004__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26004__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__26006 = info;
var map__26006__$1 = (((((!((map__26006 == null))))?(((((map__26006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26006):map__26006);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26006__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26006__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$worker$handle_build_complete_$_iter__26008(s__26009){
return (new cljs.core.LazySeq(null,(function (){
var s__26009__$1 = s__26009;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26009__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__26014 = cljs.core.first(xs__6292__auto__);
var map__26014__$1 = (((((!((map__26014 == null))))?(((((map__26014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26014):map__26014);
var src = map__26014__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26014__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26014__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__26009__$1,map__26014,map__26014__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__26006,map__26006__$1,sources,compiled,map__26004,map__26004__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$worker$handle_build_complete_$_iter__26008_$_iter__26010(s__26011){
return (new cljs.core.LazySeq(null,((function (s__26009__$1,map__26014,map__26014__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__26006,map__26006__$1,sources,compiled,map__26004,map__26004__$1,msg,info,reload_info){
return (function (){
var s__26011__$1 = s__26011;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__26011__$1);
if(temp__5735__auto____$1){
var s__26011__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26011__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__26011__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__26013 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__26012 = (0);
while(true){
if((i__26012 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__26012);
cljs.core.chunk_append(b__26013,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__26094 = (i__26012 + (1));
i__26012 = G__26094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26013),shadow$cljs$devtools$client$worker$handle_build_complete_$_iter__26008_$_iter__26010(cljs.core.chunk_rest(s__26011__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26013),null);
}
} else {
var warning = cljs.core.first(s__26011__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$worker$handle_build_complete_$_iter__26008_$_iter__26010(cljs.core.rest(s__26011__$2)));
}
} else {
return null;
}
break;
}
});})(s__26009__$1,map__26014,map__26014__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__26006,map__26006__$1,sources,compiled,map__26004,map__26004__$1,msg,info,reload_info))
,null,null));
});})(s__26009__$1,map__26014,map__26014__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__26006,map__26006__$1,sources,compiled,map__26004,map__26004__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$worker$handle_build_complete_$_iter__26008(cljs.core.rest(s__26009__$1)));
} else {
var G__26095 = cljs.core.rest(s__26009__$1);
s__26009__$1 = G__26095;
continue;
}
} else {
var G__26096 = cljs.core.rest(s__26009__$1);
s__26009__$1 = G__26096;
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
var seq__26016_26097 = cljs.core.seq(warnings);
var chunk__26017_26098 = null;
var count__26018_26099 = (0);
var i__26019_26100 = (0);
while(true){
if((i__26019_26100 < count__26018_26099)){
var map__26024_26101 = chunk__26017_26098.cljs$core$IIndexed$_nth$arity$2(null,i__26019_26100);
var map__26024_26102__$1 = (((((!((map__26024_26101 == null))))?(((((map__26024_26101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26024_26101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26024_26101):map__26024_26101);
var w_26103 = map__26024_26102__$1;
var msg_26104__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26024_26102__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_26105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26024_26102__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_26106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26024_26102__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_26107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26024_26102__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_26107)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_26105),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_26106),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_26104__$1)].join(''));


var G__26108 = seq__26016_26097;
var G__26109 = chunk__26017_26098;
var G__26110 = count__26018_26099;
var G__26111 = (i__26019_26100 + (1));
seq__26016_26097 = G__26108;
chunk__26017_26098 = G__26109;
count__26018_26099 = G__26110;
i__26019_26100 = G__26111;
continue;
} else {
var temp__5735__auto___26112 = cljs.core.seq(seq__26016_26097);
if(temp__5735__auto___26112){
var seq__26016_26113__$1 = temp__5735__auto___26112;
if(cljs.core.chunked_seq_QMARK_(seq__26016_26113__$1)){
var c__4609__auto___26114 = cljs.core.chunk_first(seq__26016_26113__$1);
var G__26115 = cljs.core.chunk_rest(seq__26016_26113__$1);
var G__26116 = c__4609__auto___26114;
var G__26117 = cljs.core.count(c__4609__auto___26114);
var G__26118 = (0);
seq__26016_26097 = G__26115;
chunk__26017_26098 = G__26116;
count__26018_26099 = G__26117;
i__26019_26100 = G__26118;
continue;
} else {
var map__26026_26119 = cljs.core.first(seq__26016_26113__$1);
var map__26026_26120__$1 = (((((!((map__26026_26119 == null))))?(((((map__26026_26119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26026_26119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26026_26119):map__26026_26119);
var w_26121 = map__26026_26120__$1;
var msg_26122__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26026_26120__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_26123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26026_26120__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_26124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26026_26120__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_26125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26026_26120__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_26125)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_26123),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_26124),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_26122__$1)].join(''));


var G__26126 = cljs.core.next(seq__26016_26113__$1);
var G__26127 = null;
var G__26128 = (0);
var G__26129 = (0);
seq__26016_26097 = G__26126;
chunk__26017_26098 = G__26127;
count__26018_26099 = G__26128;
i__26019_26100 = G__26129;
continue;
}
} else {
}
}
break;
}

if(shadow.cljs.devtools.client.env.autoload){
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__26028){
var map__26029 = p__26028;
var map__26029__$1 = (((((!((map__26029 == null))))?(((((map__26029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26029):map__26029);
var src = map__26029__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26029__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26029__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.worker.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__26031){
var map__26032 = p__26031;
var map__26032__$1 = (((((!((map__26032 == null))))?(((((map__26032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26032):map__26032);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26032__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__26034){
var map__26035 = p__26034;
var map__26035__$1 = (((((!((map__26035 == null))))?(((((map__26035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26035):map__26035);
var rc = map__26035__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26035__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.seq(sources_to_get)){
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.worker.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.worker.load_sources(sources_to_get,(function (p1__26002_SHARP_){
return shadow.cljs.devtools.client.worker.do_js_reload(msg,p1__26002_SHARP_,(function (){
return null;
}),(function (){
return null;
}));
}));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.worker.repl_error = (function shadow$cljs$devtools$client$worker$repl_error(e){
console.error("repl/invoke error",e);

return shadow.cljs.devtools.client.env.repl_error(e);
});
shadow.cljs.devtools.client.worker.global_eval = (function shadow$cljs$devtools$client$worker$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.worker.repl_invoke = (function shadow$cljs$devtools$client$worker$repl_invoke(p__26037){
var map__26038 = p__26037;
var map__26038__$1 = (((((!((map__26038 == null))))?(((((map__26038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26038):map__26038);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26038__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26038__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.worker.global_eval(js);
}),shadow.cljs.devtools.client.worker.repl_error);
return shadow.cljs.devtools.client.worker.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.worker.repl_require = (function shadow$cljs$devtools$client$worker$repl_require(p__26040,done){
var map__26041 = p__26040;
var map__26041__$1 = (((((!((map__26041 == null))))?(((((map__26041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26041):map__26041);
var msg = map__26041__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26041__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26041__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26041__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26041__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__26043){
var map__26044 = p__26043;
var map__26044__$1 = (((((!((map__26044 == null))))?(((((map__26044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26044):map__26044);
var src = map__26044__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26044__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.worker.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.worker.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.worker.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.worker.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.worker.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e26046){var e = e26046;
return shadow.cljs.devtools.client.worker.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.worker.repl_init = (function shadow$cljs$devtools$client$worker$repl_init(p__26047,done){
var map__26048 = p__26047;
var map__26048__$1 = (((((!((map__26048 == null))))?(((((map__26048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26048):map__26048);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26048__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26048__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.worker.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.worker.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.worker.do_js_load(sources);

shadow.cljs.devtools.client.worker.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.worker.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.worker.repl_set_ns = (function shadow$cljs$devtools$client$worker$repl_set_ns(p__26050){
var map__26051 = p__26050;
var map__26051__$1 = (((((!((map__26051 == null))))?(((((map__26051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26051):map__26051);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26051__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26051__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.worker.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.worker.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.worker.handle_message = (function shadow$cljs$devtools$client$worker$handle_message(p__26053,done){
var map__26054 = p__26053;
var map__26054__$1 = (((((!((map__26054 == null))))?(((((map__26054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26054):map__26054);
var msg = map__26054__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26054__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__26056_26130 = type;
var G__26056_26131__$1 = (((G__26056_26130 instanceof cljs.core.Keyword))?G__26056_26130.fqn:null);
switch (G__26056_26131__$1) {
case "asset-watch":

break;
case "repl/invoke":
shadow.cljs.devtools.client.worker.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.worker.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.worker.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.worker.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.worker.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.worker.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.worker.handle_build_complete(msg);

break;
case "build-failure":

break;
case "build-init":

break;
case "build-start":

break;
case "pong":

break;
case "client/stale":
console.warn("Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
console.warn(["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

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
shadow.cljs.devtools.client.worker.compile = (function shadow$cljs$devtools$client$worker$compile(text,callback){
var G__26057 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__26058 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__26059 = "POST";
var G__26060 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__26061 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__26057,G__26058,G__26059,G__26060,G__26061);
});
shadow.cljs.devtools.client.worker.ws_connect = (function shadow$cljs$devtools$client$worker$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"worker","worker",938239996));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.worker.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.worker.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.worker.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.worker.ws_msg);

return shadow.cljs.devtools.client.worker.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.worker.devtools_msg("WebSocket disconnected!");

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.worker.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
}));

return (socket.onerror = (function (e){
return shadow.cljs.devtools.client.worker.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e26062){var e = e26062;
return shadow.cljs.devtools.client.worker.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
shadow.cljs.devtools.client.worker.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.worker.js.map
