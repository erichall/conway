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
conways_game_of_life.canvas.resize_canvas = (function conways_game_of_life$canvas$resize_canvas(){
var canvas = cljs.core.deref(conways_game_of_life.canvas.ctx_atom).canvas;
var css_to_real_pixels = (function (){var or__4185__auto__ = window.devicePixelRatio;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})();
var d_width = (function (){var G__44790 = (canvas.clientWidth * css_to_real_pixels);
return Math.floor(G__44790);
})();
var d_height = (function (){var G__44791 = (canvas.clientHeight * css_to_real_pixels);
return Math.floor(G__44791);
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(canvas.width,d_width)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(canvas.height,d_height)))){
return null;
} else {
(canvas["style"]["height"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(conways_game_of_life.canvas.height()),"px"].join(''));

(canvas["style"]["width"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(conways_game_of_life.canvas.width()),"px"].join(''));

(canvas.height = d_height);

(canvas.width = d_width);

return cljs.core.deref(conways_game_of_life.canvas.ctx_atom).scale(css_to_real_pixels,css_to_real_pixels);
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
var G__44793 = arguments.length;
switch (G__44793) {
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
var len__4789__auto___44852 = arguments.length;
var i__4790__auto___44853 = (0);
while(true){
if((i__4790__auto___44853 < len__4789__auto___44852)){
args__4795__auto__.push((arguments[i__4790__auto___44853]));

var G__44854 = (i__4790__auto___44853 + (1));
i__4790__auto___44853 = G__44854;
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
(conways_game_of_life.canvas.stroke.cljs$lang$applyTo = (function (seq44794){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44794));
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
var len__4789__auto___44858 = arguments.length;
var i__4790__auto___44859 = (0);
while(true){
if((i__4790__auto___44859 < len__4789__auto___44858)){
args__4795__auto__.push((arguments[i__4790__auto___44859]));

var G__44860 = (i__4790__auto___44859 + (1));
i__4790__auto___44859 = G__44860;
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
(conways_game_of_life.canvas.js_rect.cljs$lang$applyTo = (function (seq44795){
var G__44796 = cljs.core.first(seq44795);
var seq44795__$1 = cljs.core.next(seq44795);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44796,seq44795__$1);
}));

conways_game_of_life.canvas.js_move_to = (function conways_game_of_life$canvas$js_move_to(var_args){
var args__4795__auto__ = [];
var len__4789__auto___44863 = arguments.length;
var i__4790__auto___44864 = (0);
while(true){
if((i__4790__auto___44864 < len__4789__auto___44863)){
args__4795__auto__.push((arguments[i__4790__auto___44864]));

var G__44865 = (i__4790__auto___44864 + (1));
i__4790__auto___44864 = G__44865;
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
(conways_game_of_life.canvas.js_move_to.cljs$lang$applyTo = (function (seq44797){
var G__44798 = cljs.core.first(seq44797);
var seq44797__$1 = cljs.core.next(seq44797);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44798,seq44797__$1);
}));

conways_game_of_life.canvas.js_line_to = (function conways_game_of_life$canvas$js_line_to(var_args){
var args__4795__auto__ = [];
var len__4789__auto___44868 = arguments.length;
var i__4790__auto___44869 = (0);
while(true){
if((i__4790__auto___44869 < len__4789__auto___44868)){
args__4795__auto__.push((arguments[i__4790__auto___44869]));

var G__44870 = (i__4790__auto___44869 + (1));
i__4790__auto___44869 = G__44870;
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
(conways_game_of_life.canvas.js_line_to.cljs$lang$applyTo = (function (seq44799){
var G__44800 = cljs.core.first(seq44799);
var seq44799__$1 = cljs.core.next(seq44799);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44800,seq44799__$1);
}));

conways_game_of_life.canvas.js_translate = (function conways_game_of_life$canvas$js_translate(var_args){
var args__4795__auto__ = [];
var len__4789__auto___44873 = arguments.length;
var i__4790__auto___44874 = (0);
while(true){
if((i__4790__auto___44874 < len__4789__auto___44873)){
args__4795__auto__.push((arguments[i__4790__auto___44874]));

var G__44875 = (i__4790__auto___44874 + (1));
i__4790__auto___44874 = G__44875;
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
(conways_game_of_life.canvas.js_translate.cljs$lang$applyTo = (function (seq44801){
var G__44802 = cljs.core.first(seq44801);
var seq44801__$1 = cljs.core.next(seq44801);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44802,seq44801__$1);
}));

conways_game_of_life.canvas.js_arc = (function conways_game_of_life$canvas$js_arc(var_args){
var args__4795__auto__ = [];
var len__4789__auto___44878 = arguments.length;
var i__4790__auto___44879 = (0);
while(true){
if((i__4790__auto___44879 < len__4789__auto___44878)){
args__4795__auto__.push((arguments[i__4790__auto___44879]));

var G__44880 = (i__4790__auto___44879 + (1));
i__4790__auto___44879 = G__44880;
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
(conways_game_of_life.canvas.js_arc.cljs$lang$applyTo = (function (seq44803){
var G__44804 = cljs.core.first(seq44803);
var seq44803__$1 = cljs.core.next(seq44803);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44804,seq44803__$1);
}));

conways_game_of_life.canvas.js_fill_rect = (function conways_game_of_life$canvas$js_fill_rect(var_args){
var args__4795__auto__ = [];
var len__4789__auto___44888 = arguments.length;
var i__4790__auto___44889 = (0);
while(true){
if((i__4790__auto___44889 < len__4789__auto___44888)){
args__4795__auto__.push((arguments[i__4790__auto___44889]));

var G__44892 = (i__4790__auto___44889 + (1));
i__4790__auto___44889 = G__44892;
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
(conways_game_of_life.canvas.js_fill_rect.cljs$lang$applyTo = (function (seq44805){
var G__44806 = cljs.core.first(seq44805);
var seq44805__$1 = cljs.core.next(seq44805);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44806,seq44805__$1);
}));

conways_game_of_life.canvas.js_stroke = (function conways_game_of_life$canvas$js_stroke(var_args){
var args__4795__auto__ = [];
var len__4789__auto___44898 = arguments.length;
var i__4790__auto___44899 = (0);
while(true){
if((i__4790__auto___44899 < len__4789__auto___44898)){
args__4795__auto__.push((arguments[i__4790__auto___44899]));

var G__44900 = (i__4790__auto___44899 + (1));
i__4790__auto___44899 = G__44900;
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
(conways_game_of_life.canvas.js_stroke.cljs$lang$applyTo = (function (seq44807){
var G__44808 = cljs.core.first(seq44807);
var seq44807__$1 = cljs.core.next(seq44807);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44808,seq44807__$1);
}));

conways_game_of_life.canvas.translate = (function conways_game_of_life$canvas$translate(x,y){
return conways_game_of_life.canvas.js_translate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(conways_game_of_life.canvas.ctx_atom),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));
});
conways_game_of_life.canvas.put_img_data = (function conways_game_of_life$canvas$put_img_data(img_data){
return cljs.core.deref(conways_game_of_life.canvas.ctx_atom).putImageData(img_data,(0),(0));
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
var seq__44809 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(x,(x + w)));
var chunk__44810 = null;
var count__44811 = (0);
var i__44812 = (0);
while(true){
if((i__44812 < count__44811)){
var xx = chunk__44810.cljs$core$IIndexed$_nth$arity$2(null,i__44812);
var seq__44821_44914 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(y,(y + h)));
var chunk__44822_44915 = null;
var count__44823_44916 = (0);
var i__44824_44917 = (0);
while(true){
if((i__44824_44917 < count__44823_44916)){
var yy_44918 = chunk__44822_44915.cljs$core$IIndexed$_nth$arity$2(null,i__44824_44917);
conways_game_of_life.canvas.draw_pixel(xx,yy_44918,r,g,b,a,canvas_width,img_data);


var G__44919 = seq__44821_44914;
var G__44920 = chunk__44822_44915;
var G__44921 = count__44823_44916;
var G__44922 = (i__44824_44917 + (1));
seq__44821_44914 = G__44919;
chunk__44822_44915 = G__44920;
count__44823_44916 = G__44921;
i__44824_44917 = G__44922;
continue;
} else {
var temp__5735__auto___44923 = cljs.core.seq(seq__44821_44914);
if(temp__5735__auto___44923){
var seq__44821_44924__$1 = temp__5735__auto___44923;
if(cljs.core.chunked_seq_QMARK_(seq__44821_44924__$1)){
var c__4609__auto___44925 = cljs.core.chunk_first(seq__44821_44924__$1);
var G__44926 = cljs.core.chunk_rest(seq__44821_44924__$1);
var G__44927 = c__4609__auto___44925;
var G__44928 = cljs.core.count(c__4609__auto___44925);
var G__44929 = (0);
seq__44821_44914 = G__44926;
chunk__44822_44915 = G__44927;
count__44823_44916 = G__44928;
i__44824_44917 = G__44929;
continue;
} else {
var yy_44930 = cljs.core.first(seq__44821_44924__$1);
conways_game_of_life.canvas.draw_pixel(xx,yy_44930,r,g,b,a,canvas_width,img_data);


var G__44931 = cljs.core.next(seq__44821_44924__$1);
var G__44932 = null;
var G__44933 = (0);
var G__44934 = (0);
seq__44821_44914 = G__44931;
chunk__44822_44915 = G__44932;
count__44823_44916 = G__44933;
i__44824_44917 = G__44934;
continue;
}
} else {
}
}
break;
}


var G__44935 = seq__44809;
var G__44936 = chunk__44810;
var G__44937 = count__44811;
var G__44938 = (i__44812 + (1));
seq__44809 = G__44935;
chunk__44810 = G__44936;
count__44811 = G__44937;
i__44812 = G__44938;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44809);
if(temp__5735__auto__){
var seq__44809__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44809__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44809__$1);
var G__44939 = cljs.core.chunk_rest(seq__44809__$1);
var G__44940 = c__4609__auto__;
var G__44941 = cljs.core.count(c__4609__auto__);
var G__44942 = (0);
seq__44809 = G__44939;
chunk__44810 = G__44940;
count__44811 = G__44941;
i__44812 = G__44942;
continue;
} else {
var xx = cljs.core.first(seq__44809__$1);
var seq__44825_44943 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(y,(y + h)));
var chunk__44826_44944 = null;
var count__44827_44945 = (0);
var i__44828_44946 = (0);
while(true){
if((i__44828_44946 < count__44827_44945)){
var yy_44947 = chunk__44826_44944.cljs$core$IIndexed$_nth$arity$2(null,i__44828_44946);
conways_game_of_life.canvas.draw_pixel(xx,yy_44947,r,g,b,a,canvas_width,img_data);


var G__44948 = seq__44825_44943;
var G__44949 = chunk__44826_44944;
var G__44950 = count__44827_44945;
var G__44951 = (i__44828_44946 + (1));
seq__44825_44943 = G__44948;
chunk__44826_44944 = G__44949;
count__44827_44945 = G__44950;
i__44828_44946 = G__44951;
continue;
} else {
var temp__5735__auto___44952__$1 = cljs.core.seq(seq__44825_44943);
if(temp__5735__auto___44952__$1){
var seq__44825_44953__$1 = temp__5735__auto___44952__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44825_44953__$1)){
var c__4609__auto___44954 = cljs.core.chunk_first(seq__44825_44953__$1);
var G__44955 = cljs.core.chunk_rest(seq__44825_44953__$1);
var G__44956 = c__4609__auto___44954;
var G__44957 = cljs.core.count(c__4609__auto___44954);
var G__44958 = (0);
seq__44825_44943 = G__44955;
chunk__44826_44944 = G__44956;
count__44827_44945 = G__44957;
i__44828_44946 = G__44958;
continue;
} else {
var yy_44959 = cljs.core.first(seq__44825_44953__$1);
conways_game_of_life.canvas.draw_pixel(xx,yy_44959,r,g,b,a,canvas_width,img_data);


var G__44962 = cljs.core.next(seq__44825_44953__$1);
var G__44963 = null;
var G__44964 = (0);
var G__44965 = (0);
seq__44825_44943 = G__44962;
chunk__44826_44944 = G__44963;
count__44827_44945 = G__44964;
i__44828_44946 = G__44965;
continue;
}
} else {
}
}
break;
}


var G__44967 = cljs.core.next(seq__44809__$1);
var G__44968 = null;
var G__44969 = (0);
var G__44970 = (0);
seq__44809 = G__44967;
chunk__44810 = G__44968;
count__44811 = G__44969;
i__44812 = G__44970;
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod(i,w),(function (){var G__44829 = (i / w);
return Math.floor(G__44829);
})()], null);
});
conways_game_of_life.canvas.alive_mask = (1);
conways_game_of_life.canvas.alive_QMARK_ = (function conways_game_of_life$canvas$alive_QMARK_(cell){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cell & conways_game_of_life.canvas.alive_mask),(1));
});
conways_game_of_life.canvas.draw_rects = (function conways_game_of_life$canvas$draw_rects(view,width,size){
var a__4663__auto___44971 = view;
var l__4664__auto___44972 = a__4663__auto___44971.length;
var i_44973 = (0);
var __44974 = (0);
while(true){
if((i_44973 < l__4664__auto___44972)){
var G__44975 = (i_44973 + (1));
var G__44976 = (function (){var cell = (view[i_44973]);
var vec__44833 = conways_game_of_life.canvas.one_d__GT_two_d(i_44973,width);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44833,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44833,(1),null);
var alive_color = ((conways_game_of_life.canvas.alive_QMARK_(cell))?(255):(0));
return conways_game_of_life.canvas.draw_rect(((x * size) + (2)),((y * size) + (2)),(size - (1)),(size - (1)),alive_color,alive_color,alive_color,alive_color);
})();
i_44973 = G__44975;
__44974 = G__44976;
continue;
} else {
}
break;
}

conways_game_of_life.canvas.put_img_data(cljs.core.deref(conways_game_of_life.canvas.img_data_atom));

return view;
});
conways_game_of_life.canvas.white_img = (function conways_game_of_life$canvas$white_img(){
var canvas_data = cljs.core.deref(conways_game_of_life.canvas.canvas_data_atom);
var seq__44836 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(canvas_data.data.length));
var chunk__44837 = null;
var count__44838 = (0);
var i__44839 = (0);
while(true){
if((i__44839 < count__44838)){
var i = chunk__44837.cljs$core$IIndexed$_nth$arity$2(null,i__44839);
(canvas_data["data"][i] = (255));


var G__44977 = seq__44836;
var G__44978 = chunk__44837;
var G__44979 = count__44838;
var G__44980 = (i__44839 + (1));
seq__44836 = G__44977;
chunk__44837 = G__44978;
count__44838 = G__44979;
i__44839 = G__44980;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44836);
if(temp__5735__auto__){
var seq__44836__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44836__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44836__$1);
var G__44982 = cljs.core.chunk_rest(seq__44836__$1);
var G__44983 = c__4609__auto__;
var G__44984 = cljs.core.count(c__4609__auto__);
var G__44985 = (0);
seq__44836 = G__44982;
chunk__44837 = G__44983;
count__44838 = G__44984;
i__44839 = G__44985;
continue;
} else {
var i = cljs.core.first(seq__44836__$1);
(canvas_data["data"][i] = (255));


var G__44986 = cljs.core.next(seq__44836__$1);
var G__44987 = null;
var G__44988 = (0);
var G__44989 = (0);
seq__44836 = G__44986;
chunk__44837 = G__44987;
count__44838 = G__44988;
i__44839 = G__44989;
continue;
}
} else {
return null;
}
}
break;
}
});
conways_game_of_life.canvas.empty_img_BANG_ = (function conways_game_of_life$canvas$empty_img_BANG_(){
var ctx = cljs.core.deref(conways_game_of_life.canvas.ctx_atom);
var img_data = ctx.createImageData(conways_game_of_life.canvas.width(),conways_game_of_life.canvas.height());
cljs.core.reset_BANG_(conways_game_of_life.canvas.img_data_atom,img_data);

return conways_game_of_life.canvas.put_img_data(img_data);
});
conways_game_of_life.canvas.clear_canvas = (function conways_game_of_life$canvas$clear_canvas(){
return cljs.core.deref(conways_game_of_life.canvas.ctx_atom).clearRect((0),(0),conways_game_of_life.canvas.width(),conways_game_of_life.canvas.height());
});
conways_game_of_life.canvas.fill = (function conways_game_of_life$canvas$fill(){
return conways_game_of_life.canvas.js_fill(cljs.core.deref(conways_game_of_life.canvas.ctx_atom));
});
conways_game_of_life.canvas.rect = (function conways_game_of_life$canvas$rect(var_args){
var args__4795__auto__ = [];
var len__4789__auto___44993 = arguments.length;
var i__4790__auto___44994 = (0);
while(true){
if((i__4790__auto___44994 < len__4789__auto___44993)){
args__4795__auto__.push((arguments[i__4790__auto___44994]));

var G__44995 = (i__4790__auto___44994 + (1));
i__4790__auto___44994 = G__44995;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((4) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((4)),(0),null)):null);
return conways_game_of_life.canvas.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4796__auto__);
});

(conways_game_of_life.canvas.rect.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,w,h,opt){
var G__44845_44996 = cljs.core.deref(conways_game_of_life.canvas.ctx_atom);
conways_game_of_life.canvas.begin_path(G__44845_44996);

conways_game_of_life.canvas.js_rect.cljs$core$IFn$_invoke$arity$variadic(G__44845_44996,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y,w,h], 0));


if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"fill?","fill?",-485702148)], null)))){
conways_game_of_life.canvas.js_fill(cljs.core.deref(conways_game_of_life.canvas.ctx_atom));
} else {
}

if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"batch?","batch?",-624482293)], null)))){
return null;
} else {
return conways_game_of_life.canvas.js_stroke(cljs.core.deref(conways_game_of_life.canvas.ctx_atom));
}
}));

(conways_game_of_life.canvas.rect.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(conways_game_of_life.canvas.rect.cljs$lang$applyTo = (function (seq44840){
var G__44841 = cljs.core.first(seq44840);
var seq44840__$1 = cljs.core.next(seq44840);
var G__44842 = cljs.core.first(seq44840__$1);
var seq44840__$2 = cljs.core.next(seq44840__$1);
var G__44843 = cljs.core.first(seq44840__$2);
var seq44840__$3 = cljs.core.next(seq44840__$2);
var G__44844 = cljs.core.first(seq44840__$3);
var seq44840__$4 = cljs.core.next(seq44840__$3);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44841,G__44842,G__44843,G__44844,seq44840__$4);
}));

conways_game_of_life.canvas.line = (function conways_game_of_life$canvas$line(x1,y1,x2,y2){
var G__44846 = cljs.core.deref(conways_game_of_life.canvas.ctx_atom);
conways_game_of_life.canvas.begin_path(G__44846);

conways_game_of_life.canvas.js_move_to.cljs$core$IFn$_invoke$arity$variadic(G__44846,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x1,y1], 0));

conways_game_of_life.canvas.js_line_to.cljs$core$IFn$_invoke$arity$variadic(G__44846,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x2,y2], 0));

conways_game_of_life.canvas.js_stroke(G__44846);

return G__44846;
});
conways_game_of_life.canvas.arc = (function conways_game_of_life$canvas$arc(x,y,r,start_angle,stop_angle){
var G__44847 = cljs.core.deref(conways_game_of_life.canvas.ctx_atom);
conways_game_of_life.canvas.begin_path(G__44847);

conways_game_of_life.canvas.js_arc.cljs$core$IFn$_invoke$arity$variadic(G__44847,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y,r,start_angle,stop_angle], 0));

conways_game_of_life.canvas.stroke.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__44847], 0));

return G__44847;
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
