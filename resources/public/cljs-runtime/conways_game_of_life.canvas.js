goog.provide('conways_game_of_life.canvas');
goog.require('cljs.core');
if((typeof conways_game_of_life !== 'undefined') && (typeof conways_game_of_life.canvas !== 'undefined') && (typeof conways_game_of_life.canvas.ctx_atom !== 'undefined')){
} else {
conways_game_of_life.canvas.ctx_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof conways_game_of_life !== 'undefined') && (typeof conways_game_of_life.canvas !== 'undefined') && (typeof conways_game_of_life.canvas.img_data_atom !== 'undefined')){
} else {
conways_game_of_life.canvas.img_data_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof conways_game_of_life !== 'undefined') && (typeof conways_game_of_life.canvas !== 'undefined') && (typeof conways_game_of_life.canvas.canvas_data_atom !== 'undefined')){
} else {
conways_game_of_life.canvas.canvas_data_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
conways_game_of_life.canvas.random_id = (function conways_game_of_life$canvas$random_id(){
return ["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.random().toString((36)).substr((2),(9)))].join('');
});
conways_game_of_life.canvas.ctx_invoke = (function conways_game_of_life$canvas$ctx_invoke(ctx,fn,args){
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,ctx,fn,args);
if(cljs.core.truth_(res)){
return res;
} else {
return ctx;
}
});
conways_game_of_life.canvas.width = (function conways_game_of_life$canvas$width(){
return (cljs.core.deref(conways_game_of_life.canvas.ctx_atom)["canvas"]["width"]);
});
conways_game_of_life.canvas.memo_width = cljs.core.memoize(conways_game_of_life.canvas.width);
conways_game_of_life.canvas.height = (function conways_game_of_life$canvas$height(){
return (cljs.core.deref(conways_game_of_life.canvas.ctx_atom)["canvas"]["height"]);
});
conways_game_of_life.canvas.get_canvas_id = (function conways_game_of_life$canvas$get_canvas_id(){
return (cljs.core.deref(conways_game_of_life.canvas.ctx_atom)["canvas"]["id"]);
});
conways_game_of_life.canvas.canvas = (function conways_game_of_life$canvas$canvas(){
return (cljs.core.deref(conways_game_of_life.canvas.ctx_atom)["canvas"]);
});
conways_game_of_life.canvas.mouse_xy = (function conways_game_of_life$canvas$mouse_xy(js_event){
var target = (js_event["target"]);
var rect = target.getBoundingClientRect();
var x = (js_event.clientX - rect.left);
var y = (js_event.clientY - rect.top);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
conways_game_of_life.canvas.scale = (function conways_game_of_life$canvas$scale(x_scale,y_scale){
return cljs.core.deref(conways_game_of_life.canvas.ctx_atom).scale(x_scale,y_scale);
});
conways_game_of_life.canvas.resize_canvas = (function conways_game_of_life$canvas$resize_canvas(){
var canvas = cljs.core.deref(conways_game_of_life.canvas.ctx_atom).canvas;
var css_to_real_pixels = (function (){var or__4185__auto__ = window.devicePixelRatio;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})();
var d_width = (function (){var G__61319 = (canvas.clientWidth * css_to_real_pixels);
return Math.floor(G__61319);
})();
var d_height = (function (){var G__61320 = (canvas.clientHeight * css_to_real_pixels);
return Math.floor(G__61320);
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(canvas.width,d_width)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(canvas.height,d_height)))){
return null;
} else {
(canvas["style"]["height"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(conways_game_of_life.canvas.height()),"px"].join(''));

(canvas["style"]["width"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(conways_game_of_life.canvas.width()),"px"].join(''));

(canvas.height = d_height);

(canvas.width = d_width);

return conways_game_of_life.canvas.scale(css_to_real_pixels,css_to_real_pixels);
}
});
conways_game_of_life.canvas.create_dom_canvas_BANG_ = (function conways_game_of_life$canvas$create_dom_canvas_BANG_(width,height,id,target){
var canvas_QMARK_ = cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(document,"getElementById",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
if(cljs.core.truth_(canvas_QMARK_)){
return null;
} else {
var canvas = document.createElement("canvas");
canvas.setAttribute("id",id);

canvas.setAttribute("height",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join(''));

canvas.setAttribute("width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''));

target.appendChild(canvas);

return canvas;
}
});
conways_game_of_life.canvas.create_canvas = (function conways_game_of_life$canvas$create_canvas(var_args){
var G__61322 = arguments.length;
switch (G__61322) {
case 2:
return conways_game_of_life.canvas.create_canvas.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return conways_game_of_life.canvas.create_canvas.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(conways_game_of_life.canvas.create_canvas.cljs$core$IFn$_invoke$arity$2 = (function (h,w){
return conways_game_of_life.canvas.create_canvas.cljs$core$IFn$_invoke$arity$3(h,w,"black");
}));

(conways_game_of_life.canvas.create_canvas.cljs$core$IFn$_invoke$arity$3 = (function (h,w,color){
var canvas = conways_game_of_life.canvas.create_dom_canvas_BANG_(w,h,conways_game_of_life.canvas.random_id(),document.body);
cljs.core.reset_BANG_(conways_game_of_life.canvas.ctx_atom,canvas.getContext("2d",cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic("alpha",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0))));

(canvas["style"]["background"] = color);

return cljs.core.deref(conways_game_of_life.canvas.ctx_atom).setTransform((1),(0),(0),(1),0.5,0.5);
}));

(conways_game_of_life.canvas.create_canvas.cljs$lang$maxFixedArity = 3);

conways_game_of_life.canvas.begin_path = (function conways_game_of_life$canvas$begin_path(ctx){
ctx.beginPath();

return ctx;
});
conways_game_of_life.canvas.close_path = (function conways_game_of_life$canvas$close_path(ctx){
ctx.closePath();

return ctx;
});
conways_game_of_life.canvas.stroke = (function conways_game_of_life$canvas$stroke(var_args){
var args__4795__auto__ = [];
var len__4789__auto___61386 = arguments.length;
var i__4790__auto___61387 = (0);
while(true){
if((i__4790__auto___61387 < len__4789__auto___61386)){
args__4795__auto__.push((arguments[i__4790__auto___61387]));

var G__61388 = (i__4790__auto___61387 + (1));
i__4790__auto___61387 = G__61388;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return conways_game_of_life.canvas.stroke.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(conways_game_of_life.canvas.stroke.cljs$core$IFn$_invoke$arity$variadic = (function (_){
return cljs.core.deref(conways_game_of_life.canvas.ctx_atom).stroke();
}));

(conways_game_of_life.canvas.stroke.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(conways_game_of_life.canvas.stroke.cljs$lang$applyTo = (function (seq61323){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61323));
}));

conways_game_of_life.canvas.fill_style = (function conways_game_of_life$canvas$fill_style(color){
return (cljs.core.deref(conways_game_of_life.canvas.ctx_atom)["fillStyle"] = color);
});
conways_game_of_life.canvas.stroke_style = (function conways_game_of_life$canvas$stroke_style(color){
return (cljs.core.deref(conways_game_of_life.canvas.ctx_atom)["strokeStyle"] = color);
});
conways_game_of_life.canvas.js_fill = (function conways_game_of_life$canvas$js_fill(ctx){
return ctx.fill();
});
conways_game_of_life.canvas.js_rect = (function conways_game_of_life$canvas$js_rect(var_args){
var args__4795__auto__ = [];
var len__4789__auto___61392 = arguments.length;
var i__4790__auto___61393 = (0);
while(true){
if((i__4790__auto___61393 < len__4789__auto___61392)){
args__4795__auto__.push((arguments[i__4790__auto___61393]));

var G__61394 = (i__4790__auto___61393 + (1));
i__4790__auto___61393 = G__61394;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return conways_game_of_life.canvas.js_rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(conways_game_of_life.canvas.js_rect.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return conways_game_of_life.canvas.ctx_invoke(ctx,"rect",args);
}));

(conways_game_of_life.canvas.js_rect.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(conways_game_of_life.canvas.js_rect.cljs$lang$applyTo = (function (seq61324){
var G__61325 = cljs.core.first(seq61324);
var seq61324__$1 = cljs.core.next(seq61324);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61325,seq61324__$1);
}));

conways_game_of_life.canvas.js_move_to = (function conways_game_of_life$canvas$js_move_to(var_args){
var args__4795__auto__ = [];
var len__4789__auto___61397 = arguments.length;
var i__4790__auto___61398 = (0);
while(true){
if((i__4790__auto___61398 < len__4789__auto___61397)){
args__4795__auto__.push((arguments[i__4790__auto___61398]));

var G__61399 = (i__4790__auto___61398 + (1));
i__4790__auto___61398 = G__61399;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return conways_game_of_life.canvas.js_move_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(conways_game_of_life.canvas.js_move_to.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return conways_game_of_life.canvas.ctx_invoke(ctx,"moveTo",args);
}));

(conways_game_of_life.canvas.js_move_to.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(conways_game_of_life.canvas.js_move_to.cljs$lang$applyTo = (function (seq61326){
var G__61327 = cljs.core.first(seq61326);
var seq61326__$1 = cljs.core.next(seq61326);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61327,seq61326__$1);
}));

conways_game_of_life.canvas.js_line_to = (function conways_game_of_life$canvas$js_line_to(var_args){
var args__4795__auto__ = [];
var len__4789__auto___61402 = arguments.length;
var i__4790__auto___61403 = (0);
while(true){
if((i__4790__auto___61403 < len__4789__auto___61402)){
args__4795__auto__.push((arguments[i__4790__auto___61403]));

var G__61404 = (i__4790__auto___61403 + (1));
i__4790__auto___61403 = G__61404;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return conways_game_of_life.canvas.js_line_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(conways_game_of_life.canvas.js_line_to.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return conways_game_of_life.canvas.ctx_invoke(ctx,"lineTo",args);
}));

(conways_game_of_life.canvas.js_line_to.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(conways_game_of_life.canvas.js_line_to.cljs$lang$applyTo = (function (seq61328){
var G__61329 = cljs.core.first(seq61328);
var seq61328__$1 = cljs.core.next(seq61328);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61329,seq61328__$1);
}));

conways_game_of_life.canvas.js_translate = (function conways_game_of_life$canvas$js_translate(var_args){
var args__4795__auto__ = [];
var len__4789__auto___61405 = arguments.length;
var i__4790__auto___61406 = (0);
while(true){
if((i__4790__auto___61406 < len__4789__auto___61405)){
args__4795__auto__.push((arguments[i__4790__auto___61406]));

var G__61408 = (i__4790__auto___61406 + (1));
i__4790__auto___61406 = G__61408;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return conways_game_of_life.canvas.js_translate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(conways_game_of_life.canvas.js_translate.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return conways_game_of_life.canvas.ctx_invoke(ctx,"translate",args);
}));

(conways_game_of_life.canvas.js_translate.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(conways_game_of_life.canvas.js_translate.cljs$lang$applyTo = (function (seq61330){
var G__61331 = cljs.core.first(seq61330);
var seq61330__$1 = cljs.core.next(seq61330);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61331,seq61330__$1);
}));

conways_game_of_life.canvas.js_arc = (function conways_game_of_life$canvas$js_arc(var_args){
var args__4795__auto__ = [];
var len__4789__auto___61410 = arguments.length;
var i__4790__auto___61411 = (0);
while(true){
if((i__4790__auto___61411 < len__4789__auto___61410)){
args__4795__auto__.push((arguments[i__4790__auto___61411]));

var G__61412 = (i__4790__auto___61411 + (1));
i__4790__auto___61411 = G__61412;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return conways_game_of_life.canvas.js_arc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(conways_game_of_life.canvas.js_arc.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return conways_game_of_life.canvas.ctx_invoke(ctx,"arc",args);
}));

(conways_game_of_life.canvas.js_arc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(conways_game_of_life.canvas.js_arc.cljs$lang$applyTo = (function (seq61332){
var G__61333 = cljs.core.first(seq61332);
var seq61332__$1 = cljs.core.next(seq61332);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61333,seq61332__$1);
}));

conways_game_of_life.canvas.js_fill_rect = (function conways_game_of_life$canvas$js_fill_rect(var_args){
var args__4795__auto__ = [];
var len__4789__auto___61418 = arguments.length;
var i__4790__auto___61421 = (0);
while(true){
if((i__4790__auto___61421 < len__4789__auto___61418)){
args__4795__auto__.push((arguments[i__4790__auto___61421]));

var G__61422 = (i__4790__auto___61421 + (1));
i__4790__auto___61421 = G__61422;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return conways_game_of_life.canvas.js_fill_rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(conways_game_of_life.canvas.js_fill_rect.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return conways_game_of_life.canvas.ctx_invoke(ctx,"fillRect",args);
}));

(conways_game_of_life.canvas.js_fill_rect.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(conways_game_of_life.canvas.js_fill_rect.cljs$lang$applyTo = (function (seq61334){
var G__61335 = cljs.core.first(seq61334);
var seq61334__$1 = cljs.core.next(seq61334);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61335,seq61334__$1);
}));

conways_game_of_life.canvas.js_stroke = (function conways_game_of_life$canvas$js_stroke(var_args){
var args__4795__auto__ = [];
var len__4789__auto___61427 = arguments.length;
var i__4790__auto___61428 = (0);
while(true){
if((i__4790__auto___61428 < len__4789__auto___61427)){
args__4795__auto__.push((arguments[i__4790__auto___61428]));

var G__61431 = (i__4790__auto___61428 + (1));
i__4790__auto___61428 = G__61431;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return conways_game_of_life.canvas.js_stroke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(conways_game_of_life.canvas.js_stroke.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return conways_game_of_life.canvas.ctx_invoke(ctx,"stroke",args);
}));

(conways_game_of_life.canvas.js_stroke.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(conways_game_of_life.canvas.js_stroke.cljs$lang$applyTo = (function (seq61336){
var G__61337 = cljs.core.first(seq61336);
var seq61336__$1 = cljs.core.next(seq61336);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61337,seq61336__$1);
}));

conways_game_of_life.canvas.translate = (function conways_game_of_life$canvas$translate(x,y){
return conways_game_of_life.canvas.js_translate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(conways_game_of_life.canvas.ctx_atom),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));
});
conways_game_of_life.canvas.put_img_data = (function conways_game_of_life$canvas$put_img_data(img_data){
return cljs.core.deref(conways_game_of_life.canvas.ctx_atom).putImageData(img_data,(0),(0));
});
conways_game_of_life.canvas.draw_image = (function conways_game_of_life$canvas$draw_image(img,x,y){
return cljs.core.deref(conways_game_of_life.canvas.ctx_atom).drawImage(img,x,y);
});
conways_game_of_life.canvas.pixel_offset_index = (function conways_game_of_life$canvas$pixel_offset_index(x,y,w){
return ((x + (y * w)) * (4));
});
conways_game_of_life.canvas.draw_pixel = (function conways_game_of_life$canvas$draw_pixel(x,y,r,g,b,a,w,img_data){
var i = conways_game_of_life.canvas.pixel_offset_index(x,y,w);
(img_data["data"][(i + (0))] = r);

(img_data["data"][(i + (1))] = g);

(img_data["data"][(i + (2))] = b);

return (img_data["data"][(i + (3))] = a);
});
conways_game_of_life.canvas.get_range = (function conways_game_of_life$canvas$get_range(s,e){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2(s,(s + e));
});
conways_game_of_life.canvas.draw_rect = (function conways_game_of_life$canvas$draw_rect(x,y,w,h,r,g,b,a){
var canvas_width = conways_game_of_life.canvas.width();
var img_data = cljs.core.deref(conways_game_of_life.canvas.img_data_atom);
var seq__61338 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(x,(x + w)));
var chunk__61339 = null;
var count__61340 = (0);
var i__61341 = (0);
while(true){
if((i__61341 < count__61340)){
var xx = chunk__61339.cljs$core$IIndexed$_nth$arity$2(null,i__61341);
var seq__61350_61443 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(y,(y + h)));
var chunk__61351_61444 = null;
var count__61352_61445 = (0);
var i__61353_61446 = (0);
while(true){
if((i__61353_61446 < count__61352_61445)){
var yy_61449 = chunk__61351_61444.cljs$core$IIndexed$_nth$arity$2(null,i__61353_61446);
conways_game_of_life.canvas.draw_pixel(xx,yy_61449,r,g,b,a,canvas_width,img_data);


var G__61450 = seq__61350_61443;
var G__61451 = chunk__61351_61444;
var G__61452 = count__61352_61445;
var G__61453 = (i__61353_61446 + (1));
seq__61350_61443 = G__61450;
chunk__61351_61444 = G__61451;
count__61352_61445 = G__61452;
i__61353_61446 = G__61453;
continue;
} else {
var temp__5735__auto___61454 = cljs.core.seq(seq__61350_61443);
if(temp__5735__auto___61454){
var seq__61350_61455__$1 = temp__5735__auto___61454;
if(cljs.core.chunked_seq_QMARK_(seq__61350_61455__$1)){
var c__4609__auto___61457 = cljs.core.chunk_first(seq__61350_61455__$1);
var G__61458 = cljs.core.chunk_rest(seq__61350_61455__$1);
var G__61459 = c__4609__auto___61457;
var G__61460 = cljs.core.count(c__4609__auto___61457);
var G__61461 = (0);
seq__61350_61443 = G__61458;
chunk__61351_61444 = G__61459;
count__61352_61445 = G__61460;
i__61353_61446 = G__61461;
continue;
} else {
var yy_61464 = cljs.core.first(seq__61350_61455__$1);
conways_game_of_life.canvas.draw_pixel(xx,yy_61464,r,g,b,a,canvas_width,img_data);


var G__61465 = cljs.core.next(seq__61350_61455__$1);
var G__61466 = null;
var G__61467 = (0);
var G__61468 = (0);
seq__61350_61443 = G__61465;
chunk__61351_61444 = G__61466;
count__61352_61445 = G__61467;
i__61353_61446 = G__61468;
continue;
}
} else {
}
}
break;
}


var G__61469 = seq__61338;
var G__61470 = chunk__61339;
var G__61471 = count__61340;
var G__61472 = (i__61341 + (1));
seq__61338 = G__61469;
chunk__61339 = G__61470;
count__61340 = G__61471;
i__61341 = G__61472;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61338);
if(temp__5735__auto__){
var seq__61338__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61338__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61338__$1);
var G__61473 = cljs.core.chunk_rest(seq__61338__$1);
var G__61474 = c__4609__auto__;
var G__61475 = cljs.core.count(c__4609__auto__);
var G__61476 = (0);
seq__61338 = G__61473;
chunk__61339 = G__61474;
count__61340 = G__61475;
i__61341 = G__61476;
continue;
} else {
var xx = cljs.core.first(seq__61338__$1);
var seq__61354_61477 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(y,(y + h)));
var chunk__61355_61478 = null;
var count__61356_61479 = (0);
var i__61357_61480 = (0);
while(true){
if((i__61357_61480 < count__61356_61479)){
var yy_61481 = chunk__61355_61478.cljs$core$IIndexed$_nth$arity$2(null,i__61357_61480);
conways_game_of_life.canvas.draw_pixel(xx,yy_61481,r,g,b,a,canvas_width,img_data);


var G__61482 = seq__61354_61477;
var G__61483 = chunk__61355_61478;
var G__61484 = count__61356_61479;
var G__61485 = (i__61357_61480 + (1));
seq__61354_61477 = G__61482;
chunk__61355_61478 = G__61483;
count__61356_61479 = G__61484;
i__61357_61480 = G__61485;
continue;
} else {
var temp__5735__auto___61486__$1 = cljs.core.seq(seq__61354_61477);
if(temp__5735__auto___61486__$1){
var seq__61354_61487__$1 = temp__5735__auto___61486__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61354_61487__$1)){
var c__4609__auto___61488 = cljs.core.chunk_first(seq__61354_61487__$1);
var G__61489 = cljs.core.chunk_rest(seq__61354_61487__$1);
var G__61490 = c__4609__auto___61488;
var G__61491 = cljs.core.count(c__4609__auto___61488);
var G__61492 = (0);
seq__61354_61477 = G__61489;
chunk__61355_61478 = G__61490;
count__61356_61479 = G__61491;
i__61357_61480 = G__61492;
continue;
} else {
var yy_61493 = cljs.core.first(seq__61354_61487__$1);
conways_game_of_life.canvas.draw_pixel(xx,yy_61493,r,g,b,a,canvas_width,img_data);


var G__61494 = cljs.core.next(seq__61354_61487__$1);
var G__61495 = null;
var G__61496 = (0);
var G__61497 = (0);
seq__61354_61477 = G__61494;
chunk__61355_61478 = G__61495;
count__61356_61479 = G__61496;
i__61357_61480 = G__61497;
continue;
}
} else {
}
}
break;
}


var G__61498 = cljs.core.next(seq__61338__$1);
var G__61499 = null;
var G__61500 = (0);
var G__61501 = (0);
seq__61338 = G__61498;
chunk__61339 = G__61499;
count__61340 = G__61500;
i__61341 = G__61501;
continue;
}
} else {
return null;
}
}
break;
}
});
conways_game_of_life.canvas.one_d__GT_two_d = (function conways_game_of_life$canvas$one_d__GT_two_d(i,w){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod(i,w),(function (){var G__61358 = (i / w);
return Math.floor(G__61358);
})()], null);
});
conways_game_of_life.canvas.alive_mask = (1);
conways_game_of_life.canvas.alive_QMARK_ = (function conways_game_of_life$canvas$alive_QMARK_(cell){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cell & conways_game_of_life.canvas.alive_mask),(1));
});
conways_game_of_life.canvas.rect = (function conways_game_of_life$canvas$rect(var_args){
var args__4795__auto__ = [];
var len__4789__auto___61502 = arguments.length;
var i__4790__auto___61503 = (0);
while(true){
if((i__4790__auto___61503 < len__4789__auto___61502)){
args__4795__auto__.push((arguments[i__4790__auto___61503]));

var G__61504 = (i__4790__auto___61503 + (1));
i__4790__auto___61503 = G__61504;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((4) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((4)),(0),null)):null);
return conways_game_of_life.canvas.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4796__auto__);
});

(conways_game_of_life.canvas.rect.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,w,h,opt){
var G__61364_61506 = cljs.core.deref(conways_game_of_life.canvas.ctx_atom);
conways_game_of_life.canvas.begin_path(G__61364_61506);

conways_game_of_life.canvas.js_rect.cljs$core$IFn$_invoke$arity$variadic(G__61364_61506,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y,w,h], 0));

conways_game_of_life.canvas.js_fill(G__61364_61506);


return conways_game_of_life.canvas.js_stroke(cljs.core.deref(conways_game_of_life.canvas.ctx_atom));
}));

(conways_game_of_life.canvas.rect.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(conways_game_of_life.canvas.rect.cljs$lang$applyTo = (function (seq61359){
var G__61360 = cljs.core.first(seq61359);
var seq61359__$1 = cljs.core.next(seq61359);
var G__61361 = cljs.core.first(seq61359__$1);
var seq61359__$2 = cljs.core.next(seq61359__$1);
var G__61362 = cljs.core.first(seq61359__$2);
var seq61359__$3 = cljs.core.next(seq61359__$2);
var G__61363 = cljs.core.first(seq61359__$3);
var seq61359__$4 = cljs.core.next(seq61359__$3);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61360,G__61361,G__61362,G__61363,seq61359__$4);
}));

conways_game_of_life.canvas.clear_canvas = (function conways_game_of_life$canvas$clear_canvas(){
return cljs.core.deref(conways_game_of_life.canvas.ctx_atom).clearRect((0),(0),conways_game_of_life.canvas.width(),conways_game_of_life.canvas.height());
});
conways_game_of_life.canvas.draw_rects = (function conways_game_of_life$canvas$draw_rects(view,width,size){
conways_game_of_life.canvas.clear_canvas();

conways_game_of_life.canvas.fill_style("#fff");

var a__4663__auto___61509 = view;
var l__4664__auto___61510 = a__4663__auto___61509.length;
var i_61511 = (0);
var __61512 = (0);
while(true){
if((i_61511 < l__4664__auto___61510)){
var G__61513 = (i_61511 + (1));
var G__61514 = (function (){var cell = (view[i_61511]);
var vec__61368 = conways_game_of_life.canvas.one_d__GT_two_d(i_61511,width);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61368,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61368,(1),null);
var alive_color = ((conways_game_of_life.canvas.alive_QMARK_(cell))?(255):(0));
if(conways_game_of_life.canvas.alive_QMARK_(cell)){
return conways_game_of_life.canvas.rect.cljs$core$IFn$_invoke$arity$variadic((x * (size + (1))),(y * (size + (1))),size,size,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null)], 0));
} else {
return null;
}
})();
i_61511 = G__61513;
__61512 = G__61514;
continue;
} else {
}
break;
}

return view;
});
conways_game_of_life.canvas.white_img = (function conways_game_of_life$canvas$white_img(){
var canvas_data = cljs.core.deref(conways_game_of_life.canvas.canvas_data_atom);
var seq__61371 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(canvas_data.data.length));
var chunk__61372 = null;
var count__61373 = (0);
var i__61374 = (0);
while(true){
if((i__61374 < count__61373)){
var i = chunk__61372.cljs$core$IIndexed$_nth$arity$2(null,i__61374);
(canvas_data["data"][i] = (255));


var G__61518 = seq__61371;
var G__61519 = chunk__61372;
var G__61520 = count__61373;
var G__61521 = (i__61374 + (1));
seq__61371 = G__61518;
chunk__61372 = G__61519;
count__61373 = G__61520;
i__61374 = G__61521;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61371);
if(temp__5735__auto__){
var seq__61371__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61371__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61371__$1);
var G__61522 = cljs.core.chunk_rest(seq__61371__$1);
var G__61523 = c__4609__auto__;
var G__61524 = cljs.core.count(c__4609__auto__);
var G__61525 = (0);
seq__61371 = G__61522;
chunk__61372 = G__61523;
count__61373 = G__61524;
i__61374 = G__61525;
continue;
} else {
var i = cljs.core.first(seq__61371__$1);
(canvas_data["data"][i] = (255));


var G__61527 = cljs.core.next(seq__61371__$1);
var G__61528 = null;
var G__61529 = (0);
var G__61530 = (0);
seq__61371 = G__61527;
chunk__61372 = G__61528;
count__61373 = G__61529;
i__61374 = G__61530;
continue;
}
} else {
return null;
}
}
break;
}
});
conways_game_of_life.canvas.create_img_data = (function conways_game_of_life$canvas$create_img_data(var_args){
var G__61376 = arguments.length;
switch (G__61376) {
case 0:
return conways_game_of_life.canvas.create_img_data.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return conways_game_of_life.canvas.create_img_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(conways_game_of_life.canvas.create_img_data.cljs$core$IFn$_invoke$arity$0 = (function (){
return conways_game_of_life.canvas.create_img_data.cljs$core$IFn$_invoke$arity$1(null);
}));

(conways_game_of_life.canvas.create_img_data.cljs$core$IFn$_invoke$arity$1 = (function (p__61377){
var map__61378 = p__61377;
var map__61378__$1 = (((((!((map__61378 == null))))?(((((map__61378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61378):map__61378);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61378__$1,new cljs.core.Keyword(null,"width","width",-384071477),conways_game_of_life.canvas.width());
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61378__$1,new cljs.core.Keyword(null,"height","height",1025178622),conways_game_of_life.canvas.height());
return cljs.core.deref(conways_game_of_life.canvas.ctx_atom).createImageData(width,height);
}));

(conways_game_of_life.canvas.create_img_data.cljs$lang$maxFixedArity = 1);

conways_game_of_life.canvas.empty_img_BANG_ = (function conways_game_of_life$canvas$empty_img_BANG_(){
var img_data = conways_game_of_life.canvas.create_img_data.cljs$core$IFn$_invoke$arity$0();
cljs.core.reset_BANG_(conways_game_of_life.canvas.img_data_atom,img_data);

return conways_game_of_life.canvas.put_img_data(img_data);
});
conways_game_of_life.canvas.fill = (function conways_game_of_life$canvas$fill(){
return conways_game_of_life.canvas.js_fill(cljs.core.deref(conways_game_of_life.canvas.ctx_atom));
});
conways_game_of_life.canvas.line = (function conways_game_of_life$canvas$line(x1,y1,x2,y2){
var G__61380 = cljs.core.deref(conways_game_of_life.canvas.ctx_atom);
conways_game_of_life.canvas.begin_path(G__61380);

conways_game_of_life.canvas.js_move_to.cljs$core$IFn$_invoke$arity$variadic(G__61380,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x1,y1], 0));

conways_game_of_life.canvas.js_line_to.cljs$core$IFn$_invoke$arity$variadic(G__61380,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x2,y2], 0));

conways_game_of_life.canvas.js_stroke(G__61380);

return G__61380;
});
conways_game_of_life.canvas.arc = (function conways_game_of_life$canvas$arc(x,y,r,start_angle,stop_angle){
var G__61381 = cljs.core.deref(conways_game_of_life.canvas.ctx_atom);
conways_game_of_life.canvas.begin_path(G__61381);

conways_game_of_life.canvas.js_arc.cljs$core$IFn$_invoke$arity$variadic(G__61381,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y,r,start_angle,stop_angle], 0));

conways_game_of_life.canvas.stroke.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__61381], 0));

return G__61381;
});
conways_game_of_life.canvas.circle = (function conways_game_of_life$canvas$circle(x,y,r){
return conways_game_of_life.canvas.arc(x,y,r,(0),((2) * Math.PI));
});
conways_game_of_life.canvas.fill_rect = (function conways_game_of_life$canvas$fill_rect(x,y,h,w,color){
conways_game_of_life.canvas.fill_style(color);

return conways_game_of_life.canvas.js_fill_rect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(conways_game_of_life.canvas.ctx_atom),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y,w,h], 0));
});
conways_game_of_life.canvas.background = (function conways_game_of_life$canvas$background(color){
return conways_game_of_life.canvas.fill_rect((0),(0),conways_game_of_life.canvas.width(),conways_game_of_life.canvas.height(),color);
});

//# sourceMappingURL=conways_game_of_life.canvas.js.map
