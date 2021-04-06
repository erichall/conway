goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__31905 = coll;
var G__31906 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__31905,G__31906) : shadow.dom.lazy_native_coll_seq.call(null,G__31905,G__31906));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__31964 = arguments.length;
switch (G__31964) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__31988 = arguments.length;
switch (G__31988) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32021 = arguments.length;
switch (G__32021) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32042 = arguments.length;
switch (G__32042) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32065 = arguments.length;
switch (G__32065) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__32074 = document;
var G__32075 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32074,G__32075);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__32079 = shadow.dom.dom_node(parent);
var G__32080 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32079,G__32080);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__32090 = shadow.dom.dom_node(el);
var G__32091 = cls;
return goog.dom.classlist.add(G__32090,G__32091);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__32097 = shadow.dom.dom_node(el);
var G__32098 = cls;
return goog.dom.classlist.remove(G__32097,G__32098);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32107 = arguments.length;
switch (G__32107) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__32111 = shadow.dom.dom_node(el);
var G__32112 = cls;
return goog.dom.classlist.toggle(G__32111,G__32112);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32137){if((e32137 instanceof Object)){
var e = e32137;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32137;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32162 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32163 = null;
var count__32164 = (0);
var i__32165 = (0);
while(true){
if((i__32165 < count__32164)){
var el = chunk__32163.cljs$core$IIndexed$_nth$arity$2(null,i__32165);
var handler_33426__$1 = ((function (seq__32162,chunk__32163,count__32164,i__32165,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32162,chunk__32163,count__32164,i__32165,el))
;
var G__32190_33428 = el;
var G__32191_33429 = cljs.core.name(ev);
var G__32192_33430 = handler_33426__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32190_33428,G__32191_33429,G__32192_33430) : shadow.dom.dom_listen.call(null,G__32190_33428,G__32191_33429,G__32192_33430));


var G__33433 = seq__32162;
var G__33434 = chunk__32163;
var G__33435 = count__32164;
var G__33436 = (i__32165 + (1));
seq__32162 = G__33433;
chunk__32163 = G__33434;
count__32164 = G__33435;
i__32165 = G__33436;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32162);
if(temp__5735__auto__){
var seq__32162__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32162__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32162__$1);
var G__33441 = cljs.core.chunk_rest(seq__32162__$1);
var G__33442 = c__4609__auto__;
var G__33443 = cljs.core.count(c__4609__auto__);
var G__33444 = (0);
seq__32162 = G__33441;
chunk__32163 = G__33442;
count__32164 = G__33443;
i__32165 = G__33444;
continue;
} else {
var el = cljs.core.first(seq__32162__$1);
var handler_33446__$1 = ((function (seq__32162,chunk__32163,count__32164,i__32165,el,seq__32162__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32162,chunk__32163,count__32164,i__32165,el,seq__32162__$1,temp__5735__auto__))
;
var G__32208_33451 = el;
var G__32209_33452 = cljs.core.name(ev);
var G__32210_33453 = handler_33446__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32208_33451,G__32209_33452,G__32210_33453) : shadow.dom.dom_listen.call(null,G__32208_33451,G__32209_33452,G__32210_33453));


var G__33461 = cljs.core.next(seq__32162__$1);
var G__33462 = null;
var G__33463 = (0);
var G__33464 = (0);
seq__32162 = G__33461;
chunk__32163 = G__33462;
count__32164 = G__33463;
i__32165 = G__33464;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32224 = arguments.length;
switch (G__32224) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__32236 = shadow.dom.dom_node(el);
var G__32237 = cljs.core.name(ev);
var G__32238 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32236,G__32237,G__32238) : shadow.dom.dom_listen.call(null,G__32236,G__32237,G__32238));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__32241 = shadow.dom.dom_node(el);
var G__32242 = cljs.core.name(ev);
var G__32243 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__32241,G__32242,G__32243) : shadow.dom.dom_listen_remove.call(null,G__32241,G__32242,G__32243));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32248 = cljs.core.seq(events);
var chunk__32249 = null;
var count__32250 = (0);
var i__32251 = (0);
while(true){
if((i__32251 < count__32250)){
var vec__32296 = chunk__32249.cljs$core$IIndexed$_nth$arity$2(null,i__32251);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32296,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32296,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33497 = seq__32248;
var G__33498 = chunk__32249;
var G__33499 = count__32250;
var G__33500 = (i__32251 + (1));
seq__32248 = G__33497;
chunk__32249 = G__33498;
count__32250 = G__33499;
i__32251 = G__33500;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32248);
if(temp__5735__auto__){
var seq__32248__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32248__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32248__$1);
var G__33506 = cljs.core.chunk_rest(seq__32248__$1);
var G__33507 = c__4609__auto__;
var G__33508 = cljs.core.count(c__4609__auto__);
var G__33509 = (0);
seq__32248 = G__33506;
chunk__32249 = G__33507;
count__32250 = G__33508;
i__32251 = G__33509;
continue;
} else {
var vec__32300 = cljs.core.first(seq__32248__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32300,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32300,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33515 = cljs.core.next(seq__32248__$1);
var G__33516 = null;
var G__33517 = (0);
var G__33518 = (0);
seq__32248 = G__33515;
chunk__32249 = G__33516;
count__32250 = G__33517;
i__32251 = G__33518;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32304 = cljs.core.seq(styles);
var chunk__32305 = null;
var count__32306 = (0);
var i__32307 = (0);
while(true){
if((i__32307 < count__32306)){
var vec__32338 = chunk__32305.cljs$core$IIndexed$_nth$arity$2(null,i__32307);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32338,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32338,(1),null);
var G__32341_33526 = dom;
var G__32342_33527 = cljs.core.name(k);
var G__32343_33528 = (((v == null))?"":v);
goog.style.setStyle(G__32341_33526,G__32342_33527,G__32343_33528);


var G__33531 = seq__32304;
var G__33532 = chunk__32305;
var G__33533 = count__32306;
var G__33534 = (i__32307 + (1));
seq__32304 = G__33531;
chunk__32305 = G__33532;
count__32306 = G__33533;
i__32307 = G__33534;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32304);
if(temp__5735__auto__){
var seq__32304__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32304__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32304__$1);
var G__33537 = cljs.core.chunk_rest(seq__32304__$1);
var G__33538 = c__4609__auto__;
var G__33539 = cljs.core.count(c__4609__auto__);
var G__33540 = (0);
seq__32304 = G__33537;
chunk__32305 = G__33538;
count__32306 = G__33539;
i__32307 = G__33540;
continue;
} else {
var vec__32345 = cljs.core.first(seq__32304__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32345,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32345,(1),null);
var G__32349_33545 = dom;
var G__32350_33546 = cljs.core.name(k);
var G__32351_33547 = (((v == null))?"":v);
goog.style.setStyle(G__32349_33545,G__32350_33546,G__32351_33547);


var G__33548 = cljs.core.next(seq__32304__$1);
var G__33549 = null;
var G__33550 = (0);
var G__33551 = (0);
seq__32304 = G__33548;
chunk__32305 = G__33549;
count__32306 = G__33550;
i__32307 = G__33551;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32356_33552 = key;
var G__32356_33553__$1 = (((G__32356_33552 instanceof cljs.core.Keyword))?G__32356_33552.fqn:null);
switch (G__32356_33553__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33585 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33585,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33585,"aria-");
}
})())){
el.setAttribute(ks_33585,value);
} else {
(el[ks_33585] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__32365 = shadow.dom.dom_node(el);
var G__32366 = cls;
return goog.dom.classlist.contains(G__32365,G__32366);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32376){
var map__32377 = p__32376;
var map__32377__$1 = (((((!((map__32377 == null))))?(((((map__32377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32377):map__32377);
var props = map__32377__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32377__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32380 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32380,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32380,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32380,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32384 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32384,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32384;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32388 = arguments.length;
switch (G__32388) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32400){
var vec__32401 = p__32400;
var seq__32402 = cljs.core.seq(vec__32401);
var first__32403 = cljs.core.first(seq__32402);
var seq__32402__$1 = cljs.core.next(seq__32402);
var nn = first__32403;
var first__32403__$1 = cljs.core.first(seq__32402__$1);
var seq__32402__$2 = cljs.core.next(seq__32402__$1);
var np = first__32403__$1;
var nc = seq__32402__$2;
var node = vec__32401;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32410 = nn;
var G__32411 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32410,G__32411) : create_fn.call(null,G__32410,G__32411));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32414 = nn;
var G__32415 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32414,G__32415) : create_fn.call(null,G__32414,G__32415));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32426 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32426,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32426,(1),null);
var seq__32430_33654 = cljs.core.seq(node_children);
var chunk__32431_33655 = null;
var count__32432_33656 = (0);
var i__32433_33657 = (0);
while(true){
if((i__32433_33657 < count__32432_33656)){
var child_struct_33665 = chunk__32431_33655.cljs$core$IIndexed$_nth$arity$2(null,i__32433_33657);
var children_33667 = shadow.dom.dom_node(child_struct_33665);
if(cljs.core.seq_QMARK_(children_33667)){
var seq__32482_33668 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33667));
var chunk__32484_33669 = null;
var count__32485_33670 = (0);
var i__32486_33671 = (0);
while(true){
if((i__32486_33671 < count__32485_33670)){
var child_33673 = chunk__32484_33669.cljs$core$IIndexed$_nth$arity$2(null,i__32486_33671);
if(cljs.core.truth_(child_33673)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33673);


var G__33676 = seq__32482_33668;
var G__33677 = chunk__32484_33669;
var G__33678 = count__32485_33670;
var G__33679 = (i__32486_33671 + (1));
seq__32482_33668 = G__33676;
chunk__32484_33669 = G__33677;
count__32485_33670 = G__33678;
i__32486_33671 = G__33679;
continue;
} else {
var G__33680 = seq__32482_33668;
var G__33681 = chunk__32484_33669;
var G__33682 = count__32485_33670;
var G__33683 = (i__32486_33671 + (1));
seq__32482_33668 = G__33680;
chunk__32484_33669 = G__33681;
count__32485_33670 = G__33682;
i__32486_33671 = G__33683;
continue;
}
} else {
var temp__5735__auto___33686 = cljs.core.seq(seq__32482_33668);
if(temp__5735__auto___33686){
var seq__32482_33687__$1 = temp__5735__auto___33686;
if(cljs.core.chunked_seq_QMARK_(seq__32482_33687__$1)){
var c__4609__auto___33688 = cljs.core.chunk_first(seq__32482_33687__$1);
var G__33689 = cljs.core.chunk_rest(seq__32482_33687__$1);
var G__33690 = c__4609__auto___33688;
var G__33691 = cljs.core.count(c__4609__auto___33688);
var G__33692 = (0);
seq__32482_33668 = G__33689;
chunk__32484_33669 = G__33690;
count__32485_33670 = G__33691;
i__32486_33671 = G__33692;
continue;
} else {
var child_33694 = cljs.core.first(seq__32482_33687__$1);
if(cljs.core.truth_(child_33694)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33694);


var G__33698 = cljs.core.next(seq__32482_33687__$1);
var G__33699 = null;
var G__33700 = (0);
var G__33701 = (0);
seq__32482_33668 = G__33698;
chunk__32484_33669 = G__33699;
count__32485_33670 = G__33700;
i__32486_33671 = G__33701;
continue;
} else {
var G__33705 = cljs.core.next(seq__32482_33687__$1);
var G__33706 = null;
var G__33707 = (0);
var G__33708 = (0);
seq__32482_33668 = G__33705;
chunk__32484_33669 = G__33706;
count__32485_33670 = G__33707;
i__32486_33671 = G__33708;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33667);
}


var G__33715 = seq__32430_33654;
var G__33716 = chunk__32431_33655;
var G__33717 = count__32432_33656;
var G__33718 = (i__32433_33657 + (1));
seq__32430_33654 = G__33715;
chunk__32431_33655 = G__33716;
count__32432_33656 = G__33717;
i__32433_33657 = G__33718;
continue;
} else {
var temp__5735__auto___33719 = cljs.core.seq(seq__32430_33654);
if(temp__5735__auto___33719){
var seq__32430_33720__$1 = temp__5735__auto___33719;
if(cljs.core.chunked_seq_QMARK_(seq__32430_33720__$1)){
var c__4609__auto___33721 = cljs.core.chunk_first(seq__32430_33720__$1);
var G__33722 = cljs.core.chunk_rest(seq__32430_33720__$1);
var G__33723 = c__4609__auto___33721;
var G__33724 = cljs.core.count(c__4609__auto___33721);
var G__33725 = (0);
seq__32430_33654 = G__33722;
chunk__32431_33655 = G__33723;
count__32432_33656 = G__33724;
i__32433_33657 = G__33725;
continue;
} else {
var child_struct_33726 = cljs.core.first(seq__32430_33720__$1);
var children_33727 = shadow.dom.dom_node(child_struct_33726);
if(cljs.core.seq_QMARK_(children_33727)){
var seq__32525_33729 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33727));
var chunk__32527_33730 = null;
var count__32528_33731 = (0);
var i__32529_33732 = (0);
while(true){
if((i__32529_33732 < count__32528_33731)){
var child_33734 = chunk__32527_33730.cljs$core$IIndexed$_nth$arity$2(null,i__32529_33732);
if(cljs.core.truth_(child_33734)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33734);


var G__33736 = seq__32525_33729;
var G__33737 = chunk__32527_33730;
var G__33738 = count__32528_33731;
var G__33739 = (i__32529_33732 + (1));
seq__32525_33729 = G__33736;
chunk__32527_33730 = G__33737;
count__32528_33731 = G__33738;
i__32529_33732 = G__33739;
continue;
} else {
var G__33740 = seq__32525_33729;
var G__33741 = chunk__32527_33730;
var G__33742 = count__32528_33731;
var G__33743 = (i__32529_33732 + (1));
seq__32525_33729 = G__33740;
chunk__32527_33730 = G__33741;
count__32528_33731 = G__33742;
i__32529_33732 = G__33743;
continue;
}
} else {
var temp__5735__auto___33744__$1 = cljs.core.seq(seq__32525_33729);
if(temp__5735__auto___33744__$1){
var seq__32525_33745__$1 = temp__5735__auto___33744__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32525_33745__$1)){
var c__4609__auto___33746 = cljs.core.chunk_first(seq__32525_33745__$1);
var G__33750 = cljs.core.chunk_rest(seq__32525_33745__$1);
var G__33751 = c__4609__auto___33746;
var G__33752 = cljs.core.count(c__4609__auto___33746);
var G__33753 = (0);
seq__32525_33729 = G__33750;
chunk__32527_33730 = G__33751;
count__32528_33731 = G__33752;
i__32529_33732 = G__33753;
continue;
} else {
var child_33754 = cljs.core.first(seq__32525_33745__$1);
if(cljs.core.truth_(child_33754)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33754);


var G__33756 = cljs.core.next(seq__32525_33745__$1);
var G__33757 = null;
var G__33758 = (0);
var G__33759 = (0);
seq__32525_33729 = G__33756;
chunk__32527_33730 = G__33757;
count__32528_33731 = G__33758;
i__32529_33732 = G__33759;
continue;
} else {
var G__33760 = cljs.core.next(seq__32525_33745__$1);
var G__33761 = null;
var G__33762 = (0);
var G__33763 = (0);
seq__32525_33729 = G__33760;
chunk__32527_33730 = G__33761;
count__32528_33731 = G__33762;
i__32529_33732 = G__33763;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33727);
}


var G__33768 = cljs.core.next(seq__32430_33720__$1);
var G__33769 = null;
var G__33770 = (0);
var G__33771 = (0);
seq__32430_33654 = G__33768;
chunk__32431_33655 = G__33769;
count__32432_33656 = G__33770;
i__32433_33657 = G__33771;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__32568 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__32568);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32576 = cljs.core.seq(node);
var chunk__32577 = null;
var count__32578 = (0);
var i__32579 = (0);
while(true){
if((i__32579 < count__32578)){
var n = chunk__32577.cljs$core$IIndexed$_nth$arity$2(null,i__32579);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33797 = seq__32576;
var G__33798 = chunk__32577;
var G__33799 = count__32578;
var G__33800 = (i__32579 + (1));
seq__32576 = G__33797;
chunk__32577 = G__33798;
count__32578 = G__33799;
i__32579 = G__33800;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32576);
if(temp__5735__auto__){
var seq__32576__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32576__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32576__$1);
var G__33802 = cljs.core.chunk_rest(seq__32576__$1);
var G__33803 = c__4609__auto__;
var G__33804 = cljs.core.count(c__4609__auto__);
var G__33805 = (0);
seq__32576 = G__33802;
chunk__32577 = G__33803;
count__32578 = G__33804;
i__32579 = G__33805;
continue;
} else {
var n = cljs.core.first(seq__32576__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33809 = cljs.core.next(seq__32576__$1);
var G__33810 = null;
var G__33811 = (0);
var G__33812 = (0);
seq__32576 = G__33809;
chunk__32577 = G__33810;
count__32578 = G__33811;
i__32579 = G__33812;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__32608 = shadow.dom.dom_node(new$);
var G__32609 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__32608,G__32609);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32615 = arguments.length;
switch (G__32615) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32625 = arguments.length;
switch (G__32625) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32653 = arguments.length;
switch (G__32653) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33843 = arguments.length;
var i__4790__auto___33844 = (0);
while(true){
if((i__4790__auto___33844 < len__4789__auto___33843)){
args__4795__auto__.push((arguments[i__4790__auto___33844]));

var G__33845 = (i__4790__auto___33844 + (1));
i__4790__auto___33844 = G__33845;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32678_33853 = cljs.core.seq(nodes);
var chunk__32679_33854 = null;
var count__32680_33855 = (0);
var i__32681_33856 = (0);
while(true){
if((i__32681_33856 < count__32680_33855)){
var node_33857 = chunk__32679_33854.cljs$core$IIndexed$_nth$arity$2(null,i__32681_33856);
fragment.appendChild(shadow.dom._to_dom(node_33857));


var G__33858 = seq__32678_33853;
var G__33859 = chunk__32679_33854;
var G__33860 = count__32680_33855;
var G__33861 = (i__32681_33856 + (1));
seq__32678_33853 = G__33858;
chunk__32679_33854 = G__33859;
count__32680_33855 = G__33860;
i__32681_33856 = G__33861;
continue;
} else {
var temp__5735__auto___33863 = cljs.core.seq(seq__32678_33853);
if(temp__5735__auto___33863){
var seq__32678_33864__$1 = temp__5735__auto___33863;
if(cljs.core.chunked_seq_QMARK_(seq__32678_33864__$1)){
var c__4609__auto___33865 = cljs.core.chunk_first(seq__32678_33864__$1);
var G__33866 = cljs.core.chunk_rest(seq__32678_33864__$1);
var G__33867 = c__4609__auto___33865;
var G__33868 = cljs.core.count(c__4609__auto___33865);
var G__33869 = (0);
seq__32678_33853 = G__33866;
chunk__32679_33854 = G__33867;
count__32680_33855 = G__33868;
i__32681_33856 = G__33869;
continue;
} else {
var node_33870 = cljs.core.first(seq__32678_33864__$1);
fragment.appendChild(shadow.dom._to_dom(node_33870));


var G__33871 = cljs.core.next(seq__32678_33864__$1);
var G__33872 = null;
var G__33873 = (0);
var G__33874 = (0);
seq__32678_33853 = G__33871;
chunk__32679_33854 = G__33872;
count__32680_33855 = G__33873;
i__32681_33856 = G__33874;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32677){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32677));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32690_33877 = cljs.core.seq(scripts);
var chunk__32691_33878 = null;
var count__32692_33879 = (0);
var i__32693_33880 = (0);
while(true){
if((i__32693_33880 < count__32692_33879)){
var vec__32703_33881 = chunk__32691_33878.cljs$core$IIndexed$_nth$arity$2(null,i__32693_33880);
var script_tag_33882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32703_33881,(0),null);
var script_body_33883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32703_33881,(1),null);
eval(script_body_33883);


var G__33892 = seq__32690_33877;
var G__33893 = chunk__32691_33878;
var G__33894 = count__32692_33879;
var G__33895 = (i__32693_33880 + (1));
seq__32690_33877 = G__33892;
chunk__32691_33878 = G__33893;
count__32692_33879 = G__33894;
i__32693_33880 = G__33895;
continue;
} else {
var temp__5735__auto___33896 = cljs.core.seq(seq__32690_33877);
if(temp__5735__auto___33896){
var seq__32690_33899__$1 = temp__5735__auto___33896;
if(cljs.core.chunked_seq_QMARK_(seq__32690_33899__$1)){
var c__4609__auto___33900 = cljs.core.chunk_first(seq__32690_33899__$1);
var G__33901 = cljs.core.chunk_rest(seq__32690_33899__$1);
var G__33902 = c__4609__auto___33900;
var G__33903 = cljs.core.count(c__4609__auto___33900);
var G__33904 = (0);
seq__32690_33877 = G__33901;
chunk__32691_33878 = G__33902;
count__32692_33879 = G__33903;
i__32693_33880 = G__33904;
continue;
} else {
var vec__32711_33905 = cljs.core.first(seq__32690_33899__$1);
var script_tag_33906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32711_33905,(0),null);
var script_body_33907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32711_33905,(1),null);
eval(script_body_33907);


var G__33909 = cljs.core.next(seq__32690_33899__$1);
var G__33910 = null;
var G__33911 = (0);
var G__33912 = (0);
seq__32690_33877 = G__33909;
chunk__32691_33878 = G__33910;
count__32692_33879 = G__33911;
i__32693_33880 = G__33912;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32716){
var vec__32717 = p__32716;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32717,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32717,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__32731 = shadow.dom.dom_node(el);
var G__32732 = cls;
return goog.dom.getAncestorByClass(G__32731,G__32732);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32735 = arguments.length;
switch (G__32735) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__32740 = shadow.dom.dom_node(el);
var G__32741 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__32740,G__32741);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__32742 = shadow.dom.dom_node(el);
var G__32743 = cljs.core.name(tag);
var G__32744 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__32742,G__32743,G__32744);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__32748 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__32748);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__32754 = shadow.dom.dom_node(dom);
var G__32755 = value;
return goog.dom.forms.setValue(G__32754,G__32755);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32762 = cljs.core.seq(style_keys);
var chunk__32763 = null;
var count__32764 = (0);
var i__32765 = (0);
while(true){
if((i__32765 < count__32764)){
var it = chunk__32763.cljs$core$IIndexed$_nth$arity$2(null,i__32765);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33941 = seq__32762;
var G__33942 = chunk__32763;
var G__33943 = count__32764;
var G__33944 = (i__32765 + (1));
seq__32762 = G__33941;
chunk__32763 = G__33942;
count__32764 = G__33943;
i__32765 = G__33944;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32762);
if(temp__5735__auto__){
var seq__32762__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32762__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32762__$1);
var G__33947 = cljs.core.chunk_rest(seq__32762__$1);
var G__33948 = c__4609__auto__;
var G__33949 = cljs.core.count(c__4609__auto__);
var G__33950 = (0);
seq__32762 = G__33947;
chunk__32763 = G__33948;
count__32764 = G__33949;
i__32765 = G__33950;
continue;
} else {
var it = cljs.core.first(seq__32762__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33955 = cljs.core.next(seq__32762__$1);
var G__33956 = null;
var G__33957 = (0);
var G__33958 = (0);
seq__32762 = G__33955;
chunk__32763 = G__33956;
count__32764 = G__33957;
i__32765 = G__33958;
continue;
}
} else {
return null;
}
}
break;
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32768,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32777 = k32768;
var G__32777__$1 = (((G__32777 instanceof cljs.core.Keyword))?G__32777.fqn:null);
switch (G__32777__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32768,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32780){
var vec__32782 = p__32780;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32782,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32782,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32767){
var self__ = this;
var G__32767__$1 = this;
return (new cljs.core.RecordIter((0),G__32767__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__32795 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32795(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32770,other32771){
var self__ = this;
var this32770__$1 = this;
return (((!((other32771 == null)))) && ((this32770__$1.constructor === other32771.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32770__$1.x,other32771.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32770__$1.y,other32771.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32770__$1.__extmap,other32771.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32767){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32799 = cljs.core.keyword_identical_QMARK_;
var expr__32800 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32804 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__32805 = expr__32800;
return (pred__32799.cljs$core$IFn$_invoke$arity$2 ? pred__32799.cljs$core$IFn$_invoke$arity$2(G__32804,G__32805) : pred__32799.call(null,G__32804,G__32805));
})())){
return (new shadow.dom.Coordinate(G__32767,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32806 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__32807 = expr__32800;
return (pred__32799.cljs$core$IFn$_invoke$arity$2 ? pred__32799.cljs$core$IFn$_invoke$arity$2(G__32806,G__32807) : pred__32799.call(null,G__32806,G__32807));
})())){
return (new shadow.dom.Coordinate(self__.x,G__32767,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32767),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32767){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32767,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32772){
var extmap__4478__auto__ = (function (){var G__32826 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32772,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32772)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32826);
} else {
return G__32826;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32772),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32772),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__32831 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__32831);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__32835 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__32835);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__32837 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__32837);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32843,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32855 = k32843;
var G__32855__$1 = (((G__32855 instanceof cljs.core.Keyword))?G__32855.fqn:null);
switch (G__32855__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32843,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32859){
var vec__32860 = p__32859;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32860,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32860,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32842){
var self__ = this;
var G__32842__$1 = this;
return (new cljs.core.RecordIter((0),G__32842__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__32868 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32868(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32844,other32845){
var self__ = this;
var this32844__$1 = this;
return (((!((other32845 == null)))) && ((this32844__$1.constructor === other32845.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32844__$1.w,other32845.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32844__$1.h,other32845.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32844__$1.__extmap,other32845.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32842){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32875 = cljs.core.keyword_identical_QMARK_;
var expr__32876 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32881 = new cljs.core.Keyword(null,"w","w",354169001);
var G__32882 = expr__32876;
return (pred__32875.cljs$core$IFn$_invoke$arity$2 ? pred__32875.cljs$core$IFn$_invoke$arity$2(G__32881,G__32882) : pred__32875.call(null,G__32881,G__32882));
})())){
return (new shadow.dom.Size(G__32842,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32886 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__32887 = expr__32876;
return (pred__32875.cljs$core$IFn$_invoke$arity$2 ? pred__32875.cljs$core$IFn$_invoke$arity$2(G__32886,G__32887) : pred__32875.call(null,G__32886,G__32887));
})())){
return (new shadow.dom.Size(self__.w,G__32842,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32842),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32842){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32842,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32849){
var extmap__4478__auto__ = (function (){var G__32889 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32849,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32849)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32889);
} else {
return G__32889;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32849),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32849),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__32890 = shadow.dom.dom_node(el);
return goog.style.getSize(G__32890);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__34067 = (i + (1));
var G__34068 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34067;
ret = G__34068;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32946){
var vec__32947 = p__32946;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32947,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32947,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32956 = arguments.length;
switch (G__32956) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__32968_34079 = new_node;
var G__32969_34080 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__32968_34079,G__32969_34080);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__32971_34081 = new_node;
var G__32972_34082 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__32971_34081,G__32972_34082);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34084 = ps;
var G__34085 = (i + (1));
el__$1 = G__34084;
i = G__34085;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__32980 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__32980);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__32983 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__32983);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__32985 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__32985);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32986 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32986,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32986,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32986,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32990_34093 = cljs.core.seq(props);
var chunk__32992_34094 = null;
var count__32993_34095 = (0);
var i__32994_34096 = (0);
while(true){
if((i__32994_34096 < count__32993_34095)){
var vec__33021_34097 = chunk__32992_34094.cljs$core$IIndexed$_nth$arity$2(null,i__32994_34096);
var k_34098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33021_34097,(0),null);
var v_34099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33021_34097,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34098);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34098),v_34099);


var G__34102 = seq__32990_34093;
var G__34103 = chunk__32992_34094;
var G__34104 = count__32993_34095;
var G__34105 = (i__32994_34096 + (1));
seq__32990_34093 = G__34102;
chunk__32992_34094 = G__34103;
count__32993_34095 = G__34104;
i__32994_34096 = G__34105;
continue;
} else {
var temp__5735__auto___34108 = cljs.core.seq(seq__32990_34093);
if(temp__5735__auto___34108){
var seq__32990_34113__$1 = temp__5735__auto___34108;
if(cljs.core.chunked_seq_QMARK_(seq__32990_34113__$1)){
var c__4609__auto___34114 = cljs.core.chunk_first(seq__32990_34113__$1);
var G__34115 = cljs.core.chunk_rest(seq__32990_34113__$1);
var G__34116 = c__4609__auto___34114;
var G__34117 = cljs.core.count(c__4609__auto___34114);
var G__34118 = (0);
seq__32990_34093 = G__34115;
chunk__32992_34094 = G__34116;
count__32993_34095 = G__34117;
i__32994_34096 = G__34118;
continue;
} else {
var vec__33030_34119 = cljs.core.first(seq__32990_34113__$1);
var k_34120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33030_34119,(0),null);
var v_34121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33030_34119,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34120);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34120),v_34121);


var G__34124 = cljs.core.next(seq__32990_34113__$1);
var G__34125 = null;
var G__34126 = (0);
var G__34127 = (0);
seq__32990_34093 = G__34124;
chunk__32992_34094 = G__34125;
count__32993_34095 = G__34126;
i__32994_34096 = G__34127;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33053 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33053,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33053,(1),null);
var seq__33060_34138 = cljs.core.seq(node_children);
var chunk__33062_34140 = null;
var count__33063_34141 = (0);
var i__33064_34142 = (0);
while(true){
if((i__33064_34142 < count__33063_34141)){
var child_struct_34145 = chunk__33062_34140.cljs$core$IIndexed$_nth$arity$2(null,i__33064_34142);
if((!((child_struct_34145 == null)))){
if(typeof child_struct_34145 === 'string'){
var text_34147 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34147),child_struct_34145].join(''));
} else {
var children_34148 = shadow.dom.svg_node(child_struct_34145);
if(cljs.core.seq_QMARK_(children_34148)){
var seq__33127_34149 = cljs.core.seq(children_34148);
var chunk__33129_34150 = null;
var count__33130_34151 = (0);
var i__33131_34152 = (0);
while(true){
if((i__33131_34152 < count__33130_34151)){
var child_34153 = chunk__33129_34150.cljs$core$IIndexed$_nth$arity$2(null,i__33131_34152);
if(cljs.core.truth_(child_34153)){
node.appendChild(child_34153);


var G__34155 = seq__33127_34149;
var G__34156 = chunk__33129_34150;
var G__34157 = count__33130_34151;
var G__34158 = (i__33131_34152 + (1));
seq__33127_34149 = G__34155;
chunk__33129_34150 = G__34156;
count__33130_34151 = G__34157;
i__33131_34152 = G__34158;
continue;
} else {
var G__34160 = seq__33127_34149;
var G__34161 = chunk__33129_34150;
var G__34162 = count__33130_34151;
var G__34163 = (i__33131_34152 + (1));
seq__33127_34149 = G__34160;
chunk__33129_34150 = G__34161;
count__33130_34151 = G__34162;
i__33131_34152 = G__34163;
continue;
}
} else {
var temp__5735__auto___34167 = cljs.core.seq(seq__33127_34149);
if(temp__5735__auto___34167){
var seq__33127_34168__$1 = temp__5735__auto___34167;
if(cljs.core.chunked_seq_QMARK_(seq__33127_34168__$1)){
var c__4609__auto___34169 = cljs.core.chunk_first(seq__33127_34168__$1);
var G__34170 = cljs.core.chunk_rest(seq__33127_34168__$1);
var G__34171 = c__4609__auto___34169;
var G__34172 = cljs.core.count(c__4609__auto___34169);
var G__34173 = (0);
seq__33127_34149 = G__34170;
chunk__33129_34150 = G__34171;
count__33130_34151 = G__34172;
i__33131_34152 = G__34173;
continue;
} else {
var child_34176 = cljs.core.first(seq__33127_34168__$1);
if(cljs.core.truth_(child_34176)){
node.appendChild(child_34176);


var G__34177 = cljs.core.next(seq__33127_34168__$1);
var G__34178 = null;
var G__34179 = (0);
var G__34180 = (0);
seq__33127_34149 = G__34177;
chunk__33129_34150 = G__34178;
count__33130_34151 = G__34179;
i__33131_34152 = G__34180;
continue;
} else {
var G__34183 = cljs.core.next(seq__33127_34168__$1);
var G__34184 = null;
var G__34185 = (0);
var G__34186 = (0);
seq__33127_34149 = G__34183;
chunk__33129_34150 = G__34184;
count__33130_34151 = G__34185;
i__33131_34152 = G__34186;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34148);
}
}


var G__34187 = seq__33060_34138;
var G__34188 = chunk__33062_34140;
var G__34189 = count__33063_34141;
var G__34190 = (i__33064_34142 + (1));
seq__33060_34138 = G__34187;
chunk__33062_34140 = G__34188;
count__33063_34141 = G__34189;
i__33064_34142 = G__34190;
continue;
} else {
var G__34191 = seq__33060_34138;
var G__34192 = chunk__33062_34140;
var G__34193 = count__33063_34141;
var G__34194 = (i__33064_34142 + (1));
seq__33060_34138 = G__34191;
chunk__33062_34140 = G__34192;
count__33063_34141 = G__34193;
i__33064_34142 = G__34194;
continue;
}
} else {
var temp__5735__auto___34196 = cljs.core.seq(seq__33060_34138);
if(temp__5735__auto___34196){
var seq__33060_34198__$1 = temp__5735__auto___34196;
if(cljs.core.chunked_seq_QMARK_(seq__33060_34198__$1)){
var c__4609__auto___34199 = cljs.core.chunk_first(seq__33060_34198__$1);
var G__34201 = cljs.core.chunk_rest(seq__33060_34198__$1);
var G__34202 = c__4609__auto___34199;
var G__34203 = cljs.core.count(c__4609__auto___34199);
var G__34204 = (0);
seq__33060_34138 = G__34201;
chunk__33062_34140 = G__34202;
count__33063_34141 = G__34203;
i__33064_34142 = G__34204;
continue;
} else {
var child_struct_34205 = cljs.core.first(seq__33060_34198__$1);
if((!((child_struct_34205 == null)))){
if(typeof child_struct_34205 === 'string'){
var text_34208 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34208),child_struct_34205].join(''));
} else {
var children_34210 = shadow.dom.svg_node(child_struct_34205);
if(cljs.core.seq_QMARK_(children_34210)){
var seq__33170_34213 = cljs.core.seq(children_34210);
var chunk__33172_34214 = null;
var count__33173_34215 = (0);
var i__33174_34216 = (0);
while(true){
if((i__33174_34216 < count__33173_34215)){
var child_34217 = chunk__33172_34214.cljs$core$IIndexed$_nth$arity$2(null,i__33174_34216);
if(cljs.core.truth_(child_34217)){
node.appendChild(child_34217);


var G__34218 = seq__33170_34213;
var G__34219 = chunk__33172_34214;
var G__34220 = count__33173_34215;
var G__34221 = (i__33174_34216 + (1));
seq__33170_34213 = G__34218;
chunk__33172_34214 = G__34219;
count__33173_34215 = G__34220;
i__33174_34216 = G__34221;
continue;
} else {
var G__34226 = seq__33170_34213;
var G__34227 = chunk__33172_34214;
var G__34228 = count__33173_34215;
var G__34229 = (i__33174_34216 + (1));
seq__33170_34213 = G__34226;
chunk__33172_34214 = G__34227;
count__33173_34215 = G__34228;
i__33174_34216 = G__34229;
continue;
}
} else {
var temp__5735__auto___34230__$1 = cljs.core.seq(seq__33170_34213);
if(temp__5735__auto___34230__$1){
var seq__33170_34231__$1 = temp__5735__auto___34230__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33170_34231__$1)){
var c__4609__auto___34232 = cljs.core.chunk_first(seq__33170_34231__$1);
var G__34233 = cljs.core.chunk_rest(seq__33170_34231__$1);
var G__34234 = c__4609__auto___34232;
var G__34235 = cljs.core.count(c__4609__auto___34232);
var G__34236 = (0);
seq__33170_34213 = G__34233;
chunk__33172_34214 = G__34234;
count__33173_34215 = G__34235;
i__33174_34216 = G__34236;
continue;
} else {
var child_34237 = cljs.core.first(seq__33170_34231__$1);
if(cljs.core.truth_(child_34237)){
node.appendChild(child_34237);


var G__34238 = cljs.core.next(seq__33170_34231__$1);
var G__34239 = null;
var G__34240 = (0);
var G__34241 = (0);
seq__33170_34213 = G__34238;
chunk__33172_34214 = G__34239;
count__33173_34215 = G__34240;
i__33174_34216 = G__34241;
continue;
} else {
var G__34242 = cljs.core.next(seq__33170_34231__$1);
var G__34243 = null;
var G__34244 = (0);
var G__34245 = (0);
seq__33170_34213 = G__34242;
chunk__33172_34214 = G__34243;
count__33173_34215 = G__34244;
i__33174_34216 = G__34245;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34210);
}
}


var G__34247 = cljs.core.next(seq__33060_34198__$1);
var G__34248 = null;
var G__34249 = (0);
var G__34250 = (0);
seq__33060_34138 = G__34247;
chunk__33062_34140 = G__34248;
count__33063_34141 = G__34249;
i__33064_34142 = G__34250;
continue;
} else {
var G__34251 = cljs.core.next(seq__33060_34198__$1);
var G__34252 = null;
var G__34253 = (0);
var G__34254 = (0);
seq__33060_34138 = G__34251;
chunk__33062_34140 = G__34252;
count__33063_34141 = G__34253;
i__33064_34142 = G__34254;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__33198_34259 = shadow.dom._to_svg;
var G__33199_34260 = "string";
var G__33200_34261 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__33198_34259,G__33199_34260,G__33200_34261);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33208_34267 = shadow.dom._to_svg;
var G__33209_34268 = "null";
var G__33210_34269 = (function (_){
return null;
});
goog.object.set(G__33208_34267,G__33209_34268,G__33210_34269);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34270 = arguments.length;
var i__4790__auto___34271 = (0);
while(true){
if((i__4790__auto___34271 < len__4789__auto___34270)){
args__4795__auto__.push((arguments[i__4790__auto___34271]));

var G__34272 = (i__4790__auto___34271 + (1));
i__4790__auto___34271 = G__34272;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33221){
var G__33222 = cljs.core.first(seq33221);
var seq33221__$1 = cljs.core.next(seq33221);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33222,seq33221__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33261 = arguments.length;
switch (G__33261) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__33292_34278 = shadow.dom.dom_node(el);
var G__33293_34279 = cljs.core.name(event);
var G__33294_34280 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33292_34278,G__33293_34279,G__33294_34280) : shadow.dom.dom_listen.call(null,G__33292_34278,G__33293_34279,G__33294_34280));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__28521__auto___34281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_33301){
var state_val_33302 = (state_33301[(1)]);
if((state_val_33302 === (1))){
var state_33301__$1 = state_33301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33301__$1,(2),once_or_cleanup);
} else {
if((state_val_33302 === (2))){
var inst_33298 = (state_33301[(2)]);
var inst_33299 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33301__$1 = (function (){var statearr_33309 = state_33301;
(statearr_33309[(7)] = inst_33298);

return statearr_33309;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33301__$1,inst_33299);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28210__auto__ = null;
var shadow$dom$state_machine__28210__auto____0 = (function (){
var statearr_33312 = [null,null,null,null,null,null,null,null];
(statearr_33312[(0)] = shadow$dom$state_machine__28210__auto__);

(statearr_33312[(1)] = (1));

return statearr_33312;
});
var shadow$dom$state_machine__28210__auto____1 = (function (state_33301){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_33301);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e33314){if((e33314 instanceof Object)){
var ex__28213__auto__ = e33314;
var statearr_33317_34284 = state_33301;
(statearr_33317_34284[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33314;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34288 = state_33301;
state_33301 = G__34288;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
shadow$dom$state_machine__28210__auto__ = function(state_33301){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28210__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28210__auto____1.call(this,state_33301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28210__auto____0;
shadow$dom$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28210__auto____1;
return shadow$dom$state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_33319 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_33319[(6)] = c__28521__auto___34281);

return statearr_33319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
