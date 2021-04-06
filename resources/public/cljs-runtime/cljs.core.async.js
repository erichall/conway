goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28648 = arguments.length;
switch (G__28648) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28656 = (function (f,blockable,meta28657){
this.f = f;
this.blockable = blockable;
this.meta28657 = meta28657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28658,meta28657__$1){
var self__ = this;
var _28658__$1 = this;
return (new cljs.core.async.t_cljs$core$async28656(self__.f,self__.blockable,meta28657__$1));
}));

(cljs.core.async.t_cljs$core$async28656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28658){
var self__ = this;
var _28658__$1 = this;
return self__.meta28657;
}));

(cljs.core.async.t_cljs$core$async28656.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28656.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28657","meta28657",1703923460,null)], null);
}));

(cljs.core.async.t_cljs$core$async28656.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28656");

(cljs.core.async.t_cljs$core$async28656.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async28656");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28656.
 */
cljs.core.async.__GT_t_cljs$core$async28656 = (function cljs$core$async$__GT_t_cljs$core$async28656(f__$1,blockable__$1,meta28657){
return (new cljs.core.async.t_cljs$core$async28656(f__$1,blockable__$1,meta28657));
});

}

return (new cljs.core.async.t_cljs$core$async28656(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28715 = arguments.length;
switch (G__28715) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28732 = arguments.length;
switch (G__28732) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28756 = arguments.length;
switch (G__28756) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_31749 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31749) : fn1.call(null,val_31749));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31749) : fn1.call(null,val_31749));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28784 = arguments.length;
switch (G__28784) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___31783 = n;
var x_31784 = (0);
while(true){
if((x_31784 < n__4666__auto___31783)){
(a[x_31784] = x_31784);

var G__31786 = (x_31784 + (1));
x_31784 = G__31786;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28838 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28838 = (function (flag,meta28839){
this.flag = flag;
this.meta28839 = meta28839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28840,meta28839__$1){
var self__ = this;
var _28840__$1 = this;
return (new cljs.core.async.t_cljs$core$async28838(self__.flag,meta28839__$1));
}));

(cljs.core.async.t_cljs$core$async28838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28840){
var self__ = this;
var _28840__$1 = this;
return self__.meta28839;
}));

(cljs.core.async.t_cljs$core$async28838.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28838.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28839","meta28839",448029696,null)], null);
}));

(cljs.core.async.t_cljs$core$async28838.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28838");

(cljs.core.async.t_cljs$core$async28838.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async28838");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28838.
 */
cljs.core.async.__GT_t_cljs$core$async28838 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28838(flag__$1,meta28839){
return (new cljs.core.async.t_cljs$core$async28838(flag__$1,meta28839));
});

}

return (new cljs.core.async.t_cljs$core$async28838(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28871 = (function (flag,cb,meta28872){
this.flag = flag;
this.cb = cb;
this.meta28872 = meta28872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28873,meta28872__$1){
var self__ = this;
var _28873__$1 = this;
return (new cljs.core.async.t_cljs$core$async28871(self__.flag,self__.cb,meta28872__$1));
}));

(cljs.core.async.t_cljs$core$async28871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28873){
var self__ = this;
var _28873__$1 = this;
return self__.meta28872;
}));

(cljs.core.async.t_cljs$core$async28871.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28871.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28871.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28871.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28872","meta28872",-1205384874,null)], null);
}));

(cljs.core.async.t_cljs$core$async28871.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28871");

(cljs.core.async.t_cljs$core$async28871.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async28871");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28871.
 */
cljs.core.async.__GT_t_cljs$core$async28871 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28871(flag__$1,cb__$1,meta28872){
return (new cljs.core.async.t_cljs$core$async28871(flag__$1,cb__$1,meta28872));
});

}

return (new cljs.core.async.t_cljs$core$async28871(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28889_SHARP_){
var G__28903 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28889_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28903) : fret.call(null,G__28903));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28890_SHARP_){
var G__28904 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28890_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28904) : fret.call(null,G__28904));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31836 = (i + (1));
i = G__31836;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___31838 = arguments.length;
var i__4790__auto___31839 = (0);
while(true){
if((i__4790__auto___31839 < len__4789__auto___31838)){
args__4795__auto__.push((arguments[i__4790__auto___31839]));

var G__31842 = (i__4790__auto___31839 + (1));
i__4790__auto___31839 = G__31842;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28926){
var map__28927 = p__28926;
var map__28927__$1 = (((((!((map__28927 == null))))?(((((map__28927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28927):map__28927);
var opts = map__28927__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28914){
var G__28916 = cljs.core.first(seq28914);
var seq28914__$1 = cljs.core.next(seq28914);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28916,seq28914__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28968 = arguments.length;
switch (G__28968) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28521__auto___31880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_29000){
var state_val_29001 = (state_29000[(1)]);
if((state_val_29001 === (7))){
var inst_28991 = (state_29000[(2)]);
var state_29000__$1 = state_29000;
var statearr_29007_31882 = state_29000__$1;
(statearr_29007_31882[(2)] = inst_28991);

(statearr_29007_31882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29001 === (1))){
var state_29000__$1 = state_29000;
var statearr_29008_31884 = state_29000__$1;
(statearr_29008_31884[(2)] = null);

(statearr_29008_31884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29001 === (4))){
var inst_28972 = (state_29000[(7)]);
var inst_28972__$1 = (state_29000[(2)]);
var inst_28973 = (inst_28972__$1 == null);
var state_29000__$1 = (function (){var statearr_29009 = state_29000;
(statearr_29009[(7)] = inst_28972__$1);

return statearr_29009;
})();
if(cljs.core.truth_(inst_28973)){
var statearr_29010_31885 = state_29000__$1;
(statearr_29010_31885[(1)] = (5));

} else {
var statearr_29011_31887 = state_29000__$1;
(statearr_29011_31887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29001 === (13))){
var state_29000__$1 = state_29000;
var statearr_29012_31890 = state_29000__$1;
(statearr_29012_31890[(2)] = null);

(statearr_29012_31890[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29001 === (6))){
var inst_28972 = (state_29000[(7)]);
var state_29000__$1 = state_29000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29000__$1,(11),to,inst_28972);
} else {
if((state_val_29001 === (3))){
var inst_28993 = (state_29000[(2)]);
var state_29000__$1 = state_29000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29000__$1,inst_28993);
} else {
if((state_val_29001 === (12))){
var state_29000__$1 = state_29000;
var statearr_29016_31892 = state_29000__$1;
(statearr_29016_31892[(2)] = null);

(statearr_29016_31892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29001 === (2))){
var state_29000__$1 = state_29000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29000__$1,(4),from);
} else {
if((state_val_29001 === (11))){
var inst_28984 = (state_29000[(2)]);
var state_29000__$1 = state_29000;
if(cljs.core.truth_(inst_28984)){
var statearr_29026_31893 = state_29000__$1;
(statearr_29026_31893[(1)] = (12));

} else {
var statearr_29027_31894 = state_29000__$1;
(statearr_29027_31894[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29001 === (9))){
var state_29000__$1 = state_29000;
var statearr_29030_31898 = state_29000__$1;
(statearr_29030_31898[(2)] = null);

(statearr_29030_31898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29001 === (5))){
var state_29000__$1 = state_29000;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29031_31903 = state_29000__$1;
(statearr_29031_31903[(1)] = (8));

} else {
var statearr_29032_31904 = state_29000__$1;
(statearr_29032_31904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29001 === (14))){
var inst_28989 = (state_29000[(2)]);
var state_29000__$1 = state_29000;
var statearr_29033_31908 = state_29000__$1;
(statearr_29033_31908[(2)] = inst_28989);

(statearr_29033_31908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29001 === (10))){
var inst_28981 = (state_29000[(2)]);
var state_29000__$1 = state_29000;
var statearr_29037_31909 = state_29000__$1;
(statearr_29037_31909[(2)] = inst_28981);

(statearr_29037_31909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29001 === (8))){
var inst_28978 = cljs.core.async.close_BANG_(to);
var state_29000__$1 = state_29000;
var statearr_29039_31918 = state_29000__$1;
(statearr_29039_31918[(2)] = inst_28978);

(statearr_29039_31918[(1)] = (10));


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
}
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_29050 = [null,null,null,null,null,null,null,null];
(statearr_29050[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_29050[(1)] = (1));

return statearr_29050;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_29000){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_29000);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29062){if((e29062 instanceof Object)){
var ex__28213__auto__ = e29062;
var statearr_29066_31926 = state_29000;
(statearr_29066_31926[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29062;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31930 = state_29000;
state_29000 = G__31930;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_29000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_29000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_29079 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_29079[(6)] = c__28521__auto___31880);

return statearr_29079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29094){
var vec__29095 = p__29094;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29095,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29095,(1),null);
var job = vec__29095;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28521__auto___31934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_29103){
var state_val_29104 = (state_29103[(1)]);
if((state_val_29104 === (1))){
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29103__$1,(2),res,v);
} else {
if((state_val_29104 === (2))){
var inst_29100 = (state_29103[(2)]);
var inst_29101 = cljs.core.async.close_BANG_(res);
var state_29103__$1 = (function (){var statearr_29105 = state_29103;
(statearr_29105[(7)] = inst_29100);

return statearr_29105;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29103__$1,inst_29101);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0 = (function (){
var statearr_29106 = [null,null,null,null,null,null,null,null];
(statearr_29106[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__);

(statearr_29106[(1)] = (1));

return statearr_29106;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1 = (function (state_29103){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_29103);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29108){if((e29108 instanceof Object)){
var ex__28213__auto__ = e29108;
var statearr_29112_31946 = state_29103;
(statearr_29112_31946[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29108;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31949 = state_29103;
state_29103 = G__31949;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = function(state_29103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1.call(this,state_29103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_29113 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_29113[(6)] = c__28521__auto___31934);

return statearr_29113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29115){
var vec__29116 = p__29115;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29116,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29116,(1),null);
var job = vec__29116;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___31970 = n;
var __31971 = (0);
while(true){
if((__31971 < n__4666__auto___31970)){
var G__29119_31972 = type;
var G__29119_31973__$1 = (((G__29119_31972 instanceof cljs.core.Keyword))?G__29119_31972.fqn:null);
switch (G__29119_31973__$1) {
case "compute":
var c__28521__auto___31977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31971,c__28521__auto___31977,G__29119_31972,G__29119_31973__$1,n__4666__auto___31970,jobs,results,process,async){
return (function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = ((function (__31971,c__28521__auto___31977,G__29119_31972,G__29119_31973__$1,n__4666__auto___31970,jobs,results,process,async){
return (function (state_29132){
var state_val_29133 = (state_29132[(1)]);
if((state_val_29133 === (1))){
var state_29132__$1 = state_29132;
var statearr_29141_31984 = state_29132__$1;
(statearr_29141_31984[(2)] = null);

(statearr_29141_31984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (2))){
var state_29132__$1 = state_29132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29132__$1,(4),jobs);
} else {
if((state_val_29133 === (3))){
var inst_29130 = (state_29132[(2)]);
var state_29132__$1 = state_29132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29132__$1,inst_29130);
} else {
if((state_val_29133 === (4))){
var inst_29122 = (state_29132[(2)]);
var inst_29123 = process(inst_29122);
var state_29132__$1 = state_29132;
if(cljs.core.truth_(inst_29123)){
var statearr_29142_31987 = state_29132__$1;
(statearr_29142_31987[(1)] = (5));

} else {
var statearr_29143_31989 = state_29132__$1;
(statearr_29143_31989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (5))){
var state_29132__$1 = state_29132;
var statearr_29144_31996 = state_29132__$1;
(statearr_29144_31996[(2)] = null);

(statearr_29144_31996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (6))){
var state_29132__$1 = state_29132;
var statearr_29145_32001 = state_29132__$1;
(statearr_29145_32001[(2)] = null);

(statearr_29145_32001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (7))){
var inst_29128 = (state_29132[(2)]);
var state_29132__$1 = state_29132;
var statearr_29146_32003 = state_29132__$1;
(statearr_29146_32003[(2)] = inst_29128);

(statearr_29146_32003[(1)] = (3));


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
});})(__31971,c__28521__auto___31977,G__29119_31972,G__29119_31973__$1,n__4666__auto___31970,jobs,results,process,async))
;
return ((function (__31971,switch__28209__auto__,c__28521__auto___31977,G__29119_31972,G__29119_31973__$1,n__4666__auto___31970,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0 = (function (){
var statearr_29147 = [null,null,null,null,null,null,null];
(statearr_29147[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__);

(statearr_29147[(1)] = (1));

return statearr_29147;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1 = (function (state_29132){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_29132);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29148){if((e29148 instanceof Object)){
var ex__28213__auto__ = e29148;
var statearr_29149_32017 = state_29132;
(statearr_29149_32017[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29148;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32022 = state_29132;
state_29132 = G__32022;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = function(state_29132){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1.call(this,state_29132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__;
})()
;})(__31971,switch__28209__auto__,c__28521__auto___31977,G__29119_31972,G__29119_31973__$1,n__4666__auto___31970,jobs,results,process,async))
})();
var state__28523__auto__ = (function (){var statearr_29150 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_29150[(6)] = c__28521__auto___31977);

return statearr_29150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
});})(__31971,c__28521__auto___31977,G__29119_31972,G__29119_31973__$1,n__4666__auto___31970,jobs,results,process,async))
);


break;
case "async":
var c__28521__auto___32028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31971,c__28521__auto___32028,G__29119_31972,G__29119_31973__$1,n__4666__auto___31970,jobs,results,process,async){
return (function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = ((function (__31971,c__28521__auto___32028,G__29119_31972,G__29119_31973__$1,n__4666__auto___31970,jobs,results,process,async){
return (function (state_29163){
var state_val_29164 = (state_29163[(1)]);
if((state_val_29164 === (1))){
var state_29163__$1 = state_29163;
var statearr_29165_32031 = state_29163__$1;
(statearr_29165_32031[(2)] = null);

(statearr_29165_32031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (2))){
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29163__$1,(4),jobs);
} else {
if((state_val_29164 === (3))){
var inst_29161 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29163__$1,inst_29161);
} else {
if((state_val_29164 === (4))){
var inst_29153 = (state_29163[(2)]);
var inst_29154 = async(inst_29153);
var state_29163__$1 = state_29163;
if(cljs.core.truth_(inst_29154)){
var statearr_29168_32039 = state_29163__$1;
(statearr_29168_32039[(1)] = (5));

} else {
var statearr_29169_32041 = state_29163__$1;
(statearr_29169_32041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (5))){
var state_29163__$1 = state_29163;
var statearr_29171_32043 = state_29163__$1;
(statearr_29171_32043[(2)] = null);

(statearr_29171_32043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (6))){
var state_29163__$1 = state_29163;
var statearr_29172_32045 = state_29163__$1;
(statearr_29172_32045[(2)] = null);

(statearr_29172_32045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (7))){
var inst_29159 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29173_32048 = state_29163__$1;
(statearr_29173_32048[(2)] = inst_29159);

(statearr_29173_32048[(1)] = (3));


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
});})(__31971,c__28521__auto___32028,G__29119_31972,G__29119_31973__$1,n__4666__auto___31970,jobs,results,process,async))
;
return ((function (__31971,switch__28209__auto__,c__28521__auto___32028,G__29119_31972,G__29119_31973__$1,n__4666__auto___31970,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0 = (function (){
var statearr_29175 = [null,null,null,null,null,null,null];
(statearr_29175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__);

(statearr_29175[(1)] = (1));

return statearr_29175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1 = (function (state_29163){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_29163);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29176){if((e29176 instanceof Object)){
var ex__28213__auto__ = e29176;
var statearr_29177_32055 = state_29163;
(statearr_29177_32055[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29176;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32056 = state_29163;
state_29163 = G__32056;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = function(state_29163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1.call(this,state_29163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__;
})()
;})(__31971,switch__28209__auto__,c__28521__auto___32028,G__29119_31972,G__29119_31973__$1,n__4666__auto___31970,jobs,results,process,async))
})();
var state__28523__auto__ = (function (){var statearr_29178 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_29178[(6)] = c__28521__auto___32028);

return statearr_29178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
});})(__31971,c__28521__auto___32028,G__29119_31972,G__29119_31973__$1,n__4666__auto___31970,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29119_31973__$1)].join('')));

}

var G__32071 = (__31971 + (1));
__31971 = G__32071;
continue;
} else {
}
break;
}

var c__28521__auto___32072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_29213){
var state_val_29214 = (state_29213[(1)]);
if((state_val_29214 === (7))){
var inst_29208 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
var statearr_29218_32077 = state_29213__$1;
(statearr_29218_32077[(2)] = inst_29208);

(statearr_29218_32077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (1))){
var state_29213__$1 = state_29213;
var statearr_29219_32078 = state_29213__$1;
(statearr_29219_32078[(2)] = null);

(statearr_29219_32078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (4))){
var inst_29191 = (state_29213[(7)]);
var inst_29191__$1 = (state_29213[(2)]);
var inst_29192 = (inst_29191__$1 == null);
var state_29213__$1 = (function (){var statearr_29221 = state_29213;
(statearr_29221[(7)] = inst_29191__$1);

return statearr_29221;
})();
if(cljs.core.truth_(inst_29192)){
var statearr_29223_32088 = state_29213__$1;
(statearr_29223_32088[(1)] = (5));

} else {
var statearr_29224_32089 = state_29213__$1;
(statearr_29224_32089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (6))){
var inst_29191 = (state_29213[(7)]);
var inst_29197 = (state_29213[(8)]);
var inst_29197__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29199 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29200 = [inst_29191,inst_29197__$1];
var inst_29201 = (new cljs.core.PersistentVector(null,2,(5),inst_29199,inst_29200,null));
var state_29213__$1 = (function (){var statearr_29225 = state_29213;
(statearr_29225[(8)] = inst_29197__$1);

return statearr_29225;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29213__$1,(8),jobs,inst_29201);
} else {
if((state_val_29214 === (3))){
var inst_29210 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29213__$1,inst_29210);
} else {
if((state_val_29214 === (2))){
var state_29213__$1 = state_29213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29213__$1,(4),from);
} else {
if((state_val_29214 === (9))){
var inst_29205 = (state_29213[(2)]);
var state_29213__$1 = (function (){var statearr_29227 = state_29213;
(statearr_29227[(9)] = inst_29205);

return statearr_29227;
})();
var statearr_29228_32103 = state_29213__$1;
(statearr_29228_32103[(2)] = null);

(statearr_29228_32103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (5))){
var inst_29195 = cljs.core.async.close_BANG_(jobs);
var state_29213__$1 = state_29213;
var statearr_29230_32109 = state_29213__$1;
(statearr_29230_32109[(2)] = inst_29195);

(statearr_29230_32109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (8))){
var inst_29197 = (state_29213[(8)]);
var inst_29203 = (state_29213[(2)]);
var state_29213__$1 = (function (){var statearr_29232 = state_29213;
(statearr_29232[(10)] = inst_29203);

return statearr_29232;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29213__$1,(9),results,inst_29197);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0 = (function (){
var statearr_29236 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__);

(statearr_29236[(1)] = (1));

return statearr_29236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1 = (function (state_29213){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_29213);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29237){if((e29237 instanceof Object)){
var ex__28213__auto__ = e29237;
var statearr_29238_32122 = state_29213;
(statearr_29238_32122[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29237;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32128 = state_29213;
state_29213 = G__32128;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = function(state_29213){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1.call(this,state_29213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_29239 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_29239[(6)] = c__28521__auto___32072);

return statearr_29239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));


var c__28521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_29283){
var state_val_29284 = (state_29283[(1)]);
if((state_val_29284 === (7))){
var inst_29279 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29286_32139 = state_29283__$1;
(statearr_29286_32139[(2)] = inst_29279);

(statearr_29286_32139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (20))){
var state_29283__$1 = state_29283;
var statearr_29287_32144 = state_29283__$1;
(statearr_29287_32144[(2)] = null);

(statearr_29287_32144[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (1))){
var state_29283__$1 = state_29283;
var statearr_29289_32147 = state_29283__$1;
(statearr_29289_32147[(2)] = null);

(statearr_29289_32147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (4))){
var inst_29245 = (state_29283[(7)]);
var inst_29245__$1 = (state_29283[(2)]);
var inst_29246 = (inst_29245__$1 == null);
var state_29283__$1 = (function (){var statearr_29292 = state_29283;
(statearr_29292[(7)] = inst_29245__$1);

return statearr_29292;
})();
if(cljs.core.truth_(inst_29246)){
var statearr_29296_32154 = state_29283__$1;
(statearr_29296_32154[(1)] = (5));

} else {
var statearr_29297_32155 = state_29283__$1;
(statearr_29297_32155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (15))){
var inst_29261 = (state_29283[(8)]);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29283__$1,(18),to,inst_29261);
} else {
if((state_val_29284 === (21))){
var inst_29274 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29298_32157 = state_29283__$1;
(statearr_29298_32157[(2)] = inst_29274);

(statearr_29298_32157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (13))){
var inst_29276 = (state_29283[(2)]);
var state_29283__$1 = (function (){var statearr_29299 = state_29283;
(statearr_29299[(9)] = inst_29276);

return statearr_29299;
})();
var statearr_29300_32168 = state_29283__$1;
(statearr_29300_32168[(2)] = null);

(statearr_29300_32168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (6))){
var inst_29245 = (state_29283[(7)]);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29283__$1,(11),inst_29245);
} else {
if((state_val_29284 === (17))){
var inst_29269 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
if(cljs.core.truth_(inst_29269)){
var statearr_29304_32173 = state_29283__$1;
(statearr_29304_32173[(1)] = (19));

} else {
var statearr_29306_32174 = state_29283__$1;
(statearr_29306_32174[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (3))){
var inst_29281 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29283__$1,inst_29281);
} else {
if((state_val_29284 === (12))){
var inst_29258 = (state_29283[(10)]);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29283__$1,(14),inst_29258);
} else {
if((state_val_29284 === (2))){
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29283__$1,(4),results);
} else {
if((state_val_29284 === (19))){
var state_29283__$1 = state_29283;
var statearr_29312_32181 = state_29283__$1;
(statearr_29312_32181[(2)] = null);

(statearr_29312_32181[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (11))){
var inst_29258 = (state_29283[(2)]);
var state_29283__$1 = (function (){var statearr_29315 = state_29283;
(statearr_29315[(10)] = inst_29258);

return statearr_29315;
})();
var statearr_29316_32185 = state_29283__$1;
(statearr_29316_32185[(2)] = null);

(statearr_29316_32185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (9))){
var state_29283__$1 = state_29283;
var statearr_29317_32189 = state_29283__$1;
(statearr_29317_32189[(2)] = null);

(statearr_29317_32189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (5))){
var state_29283__$1 = state_29283;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29318_32197 = state_29283__$1;
(statearr_29318_32197[(1)] = (8));

} else {
var statearr_29319_32198 = state_29283__$1;
(statearr_29319_32198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (14))){
var inst_29261 = (state_29283[(8)]);
var inst_29261__$1 = (state_29283[(2)]);
var inst_29262 = (inst_29261__$1 == null);
var inst_29263 = cljs.core.not(inst_29262);
var state_29283__$1 = (function (){var statearr_29322 = state_29283;
(statearr_29322[(8)] = inst_29261__$1);

return statearr_29322;
})();
if(inst_29263){
var statearr_29323_32206 = state_29283__$1;
(statearr_29323_32206[(1)] = (15));

} else {
var statearr_29324_32207 = state_29283__$1;
(statearr_29324_32207[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (16))){
var state_29283__$1 = state_29283;
var statearr_29326_32211 = state_29283__$1;
(statearr_29326_32211[(2)] = false);

(statearr_29326_32211[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (10))){
var inst_29255 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29330_32216 = state_29283__$1;
(statearr_29330_32216[(2)] = inst_29255);

(statearr_29330_32216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (18))){
var inst_29266 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29331_32217 = state_29283__$1;
(statearr_29331_32217[(2)] = inst_29266);

(statearr_29331_32217[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (8))){
var inst_29252 = cljs.core.async.close_BANG_(to);
var state_29283__$1 = state_29283;
var statearr_29332_32223 = state_29283__$1;
(statearr_29332_32223[(2)] = inst_29252);

(statearr_29332_32223[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0 = (function (){
var statearr_29336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29336[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__);

(statearr_29336[(1)] = (1));

return statearr_29336;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1 = (function (state_29283){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_29283);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29338){if((e29338 instanceof Object)){
var ex__28213__auto__ = e29338;
var statearr_29340_32234 = state_29283;
(statearr_29340_32234[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29338;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32235 = state_29283;
state_29283 = G__32235;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__ = function(state_29283){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1.call(this,state_29283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_29341 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_29341[(6)] = c__28521__auto__);

return statearr_29341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));

return c__28521__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29355 = arguments.length;
switch (G__29355) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29368 = arguments.length;
switch (G__29368) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29398 = arguments.length;
switch (G__29398) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__28521__auto___32303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_29443){
var state_val_29444 = (state_29443[(1)]);
if((state_val_29444 === (7))){
var inst_29439 = (state_29443[(2)]);
var state_29443__$1 = state_29443;
var statearr_29451_32308 = state_29443__$1;
(statearr_29451_32308[(2)] = inst_29439);

(statearr_29451_32308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29444 === (1))){
var state_29443__$1 = state_29443;
var statearr_29453_32315 = state_29443__$1;
(statearr_29453_32315[(2)] = null);

(statearr_29453_32315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29444 === (4))){
var inst_29405 = (state_29443[(7)]);
var inst_29405__$1 = (state_29443[(2)]);
var inst_29407 = (inst_29405__$1 == null);
var state_29443__$1 = (function (){var statearr_29457 = state_29443;
(statearr_29457[(7)] = inst_29405__$1);

return statearr_29457;
})();
if(cljs.core.truth_(inst_29407)){
var statearr_29461_32325 = state_29443__$1;
(statearr_29461_32325[(1)] = (5));

} else {
var statearr_29462_32326 = state_29443__$1;
(statearr_29462_32326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29444 === (13))){
var state_29443__$1 = state_29443;
var statearr_29465_32330 = state_29443__$1;
(statearr_29465_32330[(2)] = null);

(statearr_29465_32330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29444 === (6))){
var inst_29405 = (state_29443[(7)]);
var inst_29425 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29405) : p.call(null,inst_29405));
var state_29443__$1 = state_29443;
if(cljs.core.truth_(inst_29425)){
var statearr_29466_32334 = state_29443__$1;
(statearr_29466_32334[(1)] = (9));

} else {
var statearr_29467_32335 = state_29443__$1;
(statearr_29467_32335[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29444 === (3))){
var inst_29441 = (state_29443[(2)]);
var state_29443__$1 = state_29443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29443__$1,inst_29441);
} else {
if((state_val_29444 === (12))){
var state_29443__$1 = state_29443;
var statearr_29468_32337 = state_29443__$1;
(statearr_29468_32337[(2)] = null);

(statearr_29468_32337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29444 === (2))){
var state_29443__$1 = state_29443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29443__$1,(4),ch);
} else {
if((state_val_29444 === (11))){
var inst_29405 = (state_29443[(7)]);
var inst_29429 = (state_29443[(2)]);
var state_29443__$1 = state_29443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29443__$1,(8),inst_29429,inst_29405);
} else {
if((state_val_29444 === (9))){
var state_29443__$1 = state_29443;
var statearr_29469_32344 = state_29443__$1;
(statearr_29469_32344[(2)] = tc);

(statearr_29469_32344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29444 === (5))){
var inst_29410 = cljs.core.async.close_BANG_(tc);
var inst_29423 = cljs.core.async.close_BANG_(fc);
var state_29443__$1 = (function (){var statearr_29471 = state_29443;
(statearr_29471[(8)] = inst_29410);

return statearr_29471;
})();
var statearr_29472_32348 = state_29443__$1;
(statearr_29472_32348[(2)] = inst_29423);

(statearr_29472_32348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29444 === (14))){
var inst_29437 = (state_29443[(2)]);
var state_29443__$1 = state_29443;
var statearr_29477_32352 = state_29443__$1;
(statearr_29477_32352[(2)] = inst_29437);

(statearr_29477_32352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29444 === (10))){
var state_29443__$1 = state_29443;
var statearr_29478_32353 = state_29443__$1;
(statearr_29478_32353[(2)] = fc);

(statearr_29478_32353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29444 === (8))){
var inst_29432 = (state_29443[(2)]);
var state_29443__$1 = state_29443;
if(cljs.core.truth_(inst_29432)){
var statearr_29481_32354 = state_29443__$1;
(statearr_29481_32354[(1)] = (12));

} else {
var statearr_29483_32355 = state_29443__$1;
(statearr_29483_32355[(1)] = (13));

}

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
}
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_29487 = [null,null,null,null,null,null,null,null,null];
(statearr_29487[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_29487[(1)] = (1));

return statearr_29487;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_29443){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_29443);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29488){if((e29488 instanceof Object)){
var ex__28213__auto__ = e29488;
var statearr_29489_32357 = state_29443;
(statearr_29489_32357[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29488;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32358 = state_29443;
state_29443 = G__32358;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_29443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_29443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_29495 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_29495[(6)] = c__28521__auto___32303);

return statearr_29495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_29530){
var state_val_29531 = (state_29530[(1)]);
if((state_val_29531 === (7))){
var inst_29526 = (state_29530[(2)]);
var state_29530__$1 = state_29530;
var statearr_29535_32360 = state_29530__$1;
(statearr_29535_32360[(2)] = inst_29526);

(statearr_29535_32360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (1))){
var inst_29509 = init;
var state_29530__$1 = (function (){var statearr_29540 = state_29530;
(statearr_29540[(7)] = inst_29509);

return statearr_29540;
})();
var statearr_29541_32361 = state_29530__$1;
(statearr_29541_32361[(2)] = null);

(statearr_29541_32361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (4))){
var inst_29513 = (state_29530[(8)]);
var inst_29513__$1 = (state_29530[(2)]);
var inst_29514 = (inst_29513__$1 == null);
var state_29530__$1 = (function (){var statearr_29545 = state_29530;
(statearr_29545[(8)] = inst_29513__$1);

return statearr_29545;
})();
if(cljs.core.truth_(inst_29514)){
var statearr_29546_32362 = state_29530__$1;
(statearr_29546_32362[(1)] = (5));

} else {
var statearr_29547_32363 = state_29530__$1;
(statearr_29547_32363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (6))){
var inst_29513 = (state_29530[(8)]);
var inst_29509 = (state_29530[(7)]);
var inst_29517 = (state_29530[(9)]);
var inst_29517__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29509,inst_29513) : f.call(null,inst_29509,inst_29513));
var inst_29518 = cljs.core.reduced_QMARK_(inst_29517__$1);
var state_29530__$1 = (function (){var statearr_29558 = state_29530;
(statearr_29558[(9)] = inst_29517__$1);

return statearr_29558;
})();
if(inst_29518){
var statearr_29560_32364 = state_29530__$1;
(statearr_29560_32364[(1)] = (8));

} else {
var statearr_29561_32367 = state_29530__$1;
(statearr_29561_32367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (3))){
var inst_29528 = (state_29530[(2)]);
var state_29530__$1 = state_29530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29530__$1,inst_29528);
} else {
if((state_val_29531 === (2))){
var state_29530__$1 = state_29530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29530__$1,(4),ch);
} else {
if((state_val_29531 === (9))){
var inst_29517 = (state_29530[(9)]);
var inst_29509 = inst_29517;
var state_29530__$1 = (function (){var statearr_29566 = state_29530;
(statearr_29566[(7)] = inst_29509);

return statearr_29566;
})();
var statearr_29568_32368 = state_29530__$1;
(statearr_29568_32368[(2)] = null);

(statearr_29568_32368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (5))){
var inst_29509 = (state_29530[(7)]);
var state_29530__$1 = state_29530;
var statearr_29572_32369 = state_29530__$1;
(statearr_29572_32369[(2)] = inst_29509);

(statearr_29572_32369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (10))){
var inst_29524 = (state_29530[(2)]);
var state_29530__$1 = state_29530;
var statearr_29573_32370 = state_29530__$1;
(statearr_29573_32370[(2)] = inst_29524);

(statearr_29573_32370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (8))){
var inst_29517 = (state_29530[(9)]);
var inst_29520 = cljs.core.deref(inst_29517);
var state_29530__$1 = state_29530;
var statearr_29574_32371 = state_29530__$1;
(statearr_29574_32371[(2)] = inst_29520);

(statearr_29574_32371[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28210__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28210__auto____0 = (function (){
var statearr_29578 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29578[(0)] = cljs$core$async$reduce_$_state_machine__28210__auto__);

(statearr_29578[(1)] = (1));

return statearr_29578;
});
var cljs$core$async$reduce_$_state_machine__28210__auto____1 = (function (state_29530){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_29530);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29581){if((e29581 instanceof Object)){
var ex__28213__auto__ = e29581;
var statearr_29583_32374 = state_29530;
(statearr_29583_32374[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29581;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32375 = state_29530;
state_29530 = G__32375;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28210__auto__ = function(state_29530){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28210__auto____1.call(this,state_29530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28210__auto____0;
cljs$core$async$reduce_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28210__auto____1;
return cljs$core$async$reduce_$_state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_29588 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_29588[(6)] = c__28521__auto__);

return statearr_29588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));

return c__28521__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_29599){
var state_val_29600 = (state_29599[(1)]);
if((state_val_29600 === (1))){
var inst_29594 = cljs.core.async.reduce(f__$1,init,ch);
var state_29599__$1 = state_29599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29599__$1,(2),inst_29594);
} else {
if((state_val_29600 === (2))){
var inst_29596 = (state_29599[(2)]);
var inst_29597 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29596) : f__$1.call(null,inst_29596));
var state_29599__$1 = state_29599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29599__$1,inst_29597);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28210__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28210__auto____0 = (function (){
var statearr_29608 = [null,null,null,null,null,null,null];
(statearr_29608[(0)] = cljs$core$async$transduce_$_state_machine__28210__auto__);

(statearr_29608[(1)] = (1));

return statearr_29608;
});
var cljs$core$async$transduce_$_state_machine__28210__auto____1 = (function (state_29599){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_29599);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29609){if((e29609 instanceof Object)){
var ex__28213__auto__ = e29609;
var statearr_29610_32385 = state_29599;
(statearr_29610_32385[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29609;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32387 = state_29599;
state_29599 = G__32387;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28210__auto__ = function(state_29599){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28210__auto____1.call(this,state_29599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28210__auto____0;
cljs$core$async$transduce_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28210__auto____1;
return cljs$core$async$transduce_$_state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_29611 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_29611[(6)] = c__28521__auto__);

return statearr_29611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));

return c__28521__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29613 = arguments.length;
switch (G__29613) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_29652){
var state_val_29653 = (state_29652[(1)]);
if((state_val_29653 === (7))){
var inst_29632 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29654_32397 = state_29652__$1;
(statearr_29654_32397[(2)] = inst_29632);

(statearr_29654_32397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (1))){
var inst_29619 = cljs.core.seq(coll);
var inst_29620 = inst_29619;
var state_29652__$1 = (function (){var statearr_29655 = state_29652;
(statearr_29655[(7)] = inst_29620);

return statearr_29655;
})();
var statearr_29656_32398 = state_29652__$1;
(statearr_29656_32398[(2)] = null);

(statearr_29656_32398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (4))){
var inst_29620 = (state_29652[(7)]);
var inst_29630 = cljs.core.first(inst_29620);
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29652__$1,(7),ch,inst_29630);
} else {
if((state_val_29653 === (13))){
var inst_29646 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29662_32406 = state_29652__$1;
(statearr_29662_32406[(2)] = inst_29646);

(statearr_29662_32406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (6))){
var inst_29635 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
if(cljs.core.truth_(inst_29635)){
var statearr_29664_32408 = state_29652__$1;
(statearr_29664_32408[(1)] = (8));

} else {
var statearr_29665_32409 = state_29652__$1;
(statearr_29665_32409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (3))){
var inst_29650 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29652__$1,inst_29650);
} else {
if((state_val_29653 === (12))){
var state_29652__$1 = state_29652;
var statearr_29666_32413 = state_29652__$1;
(statearr_29666_32413[(2)] = null);

(statearr_29666_32413[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (2))){
var inst_29620 = (state_29652[(7)]);
var state_29652__$1 = state_29652;
if(cljs.core.truth_(inst_29620)){
var statearr_29668_32416 = state_29652__$1;
(statearr_29668_32416[(1)] = (4));

} else {
var statearr_29669_32417 = state_29652__$1;
(statearr_29669_32417[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (11))){
var inst_29643 = cljs.core.async.close_BANG_(ch);
var state_29652__$1 = state_29652;
var statearr_29671_32418 = state_29652__$1;
(statearr_29671_32418[(2)] = inst_29643);

(statearr_29671_32418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (9))){
var state_29652__$1 = state_29652;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29672_32420 = state_29652__$1;
(statearr_29672_32420[(1)] = (11));

} else {
var statearr_29676_32421 = state_29652__$1;
(statearr_29676_32421[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (5))){
var inst_29620 = (state_29652[(7)]);
var state_29652__$1 = state_29652;
var statearr_29679_32429 = state_29652__$1;
(statearr_29679_32429[(2)] = inst_29620);

(statearr_29679_32429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (10))){
var inst_29648 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29681_32434 = state_29652__$1;
(statearr_29681_32434[(2)] = inst_29648);

(statearr_29681_32434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (8))){
var inst_29620 = (state_29652[(7)]);
var inst_29638 = cljs.core.next(inst_29620);
var inst_29620__$1 = inst_29638;
var state_29652__$1 = (function (){var statearr_29682 = state_29652;
(statearr_29682[(7)] = inst_29620__$1);

return statearr_29682;
})();
var statearr_29683_32436 = state_29652__$1;
(statearr_29683_32436[(2)] = null);

(statearr_29683_32436[(1)] = (2));


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
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_29684 = [null,null,null,null,null,null,null,null];
(statearr_29684[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_29684[(1)] = (1));

return statearr_29684;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_29652){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_29652);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e29687){if((e29687 instanceof Object)){
var ex__28213__auto__ = e29687;
var statearr_29688_32445 = state_29652;
(statearr_29688_32445[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29687;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32448 = state_29652;
state_29652 = G__32448;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_29652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_29652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_29690 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_29690[(6)] = c__28521__auto__);

return statearr_29690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));

return c__28521__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29719 = (function (ch,cs,meta29720){
this.ch = ch;
this.cs = cs;
this.meta29720 = meta29720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29721,meta29720__$1){
var self__ = this;
var _29721__$1 = this;
return (new cljs.core.async.t_cljs$core$async29719(self__.ch,self__.cs,meta29720__$1));
}));

(cljs.core.async.t_cljs$core$async29719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29721){
var self__ = this;
var _29721__$1 = this;
return self__.meta29720;
}));

(cljs.core.async.t_cljs$core$async29719.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29719.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29719.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29719.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29719.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29719.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29720","meta29720",-380821866,null)], null);
}));

(cljs.core.async.t_cljs$core$async29719.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29719");

(cljs.core.async.t_cljs$core$async29719.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29719");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29719.
 */
cljs.core.async.__GT_t_cljs$core$async29719 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29719(ch__$1,cs__$1,meta29720){
return (new cljs.core.async.t_cljs$core$async29719(ch__$1,cs__$1,meta29720));
});

}

return (new cljs.core.async.t_cljs$core$async29719(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__28521__auto___32474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_29891){
var state_val_29893 = (state_29891[(1)]);
if((state_val_29893 === (7))){
var inst_29878 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
var statearr_29898_32480 = state_29891__$1;
(statearr_29898_32480[(2)] = inst_29878);

(statearr_29898_32480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (20))){
var inst_29766 = (state_29891[(7)]);
var inst_29780 = cljs.core.first(inst_29766);
var inst_29781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29780,(0),null);
var inst_29783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29780,(1),null);
var state_29891__$1 = (function (){var statearr_29908 = state_29891;
(statearr_29908[(8)] = inst_29781);

return statearr_29908;
})();
if(cljs.core.truth_(inst_29783)){
var statearr_29910_32488 = state_29891__$1;
(statearr_29910_32488[(1)] = (22));

} else {
var statearr_29912_32489 = state_29891__$1;
(statearr_29912_32489[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (27))){
var inst_29812 = (state_29891[(9)]);
var inst_29821 = (state_29891[(10)]);
var inst_29735 = (state_29891[(11)]);
var inst_29814 = (state_29891[(12)]);
var inst_29821__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29812,inst_29814);
var inst_29822 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29821__$1,inst_29735,done);
var state_29891__$1 = (function (){var statearr_29917 = state_29891;
(statearr_29917[(10)] = inst_29821__$1);

return statearr_29917;
})();
if(cljs.core.truth_(inst_29822)){
var statearr_29919_32491 = state_29891__$1;
(statearr_29919_32491[(1)] = (30));

} else {
var statearr_29920_32495 = state_29891__$1;
(statearr_29920_32495[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (1))){
var state_29891__$1 = state_29891;
var statearr_29921_32496 = state_29891__$1;
(statearr_29921_32496[(2)] = null);

(statearr_29921_32496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (24))){
var inst_29766 = (state_29891[(7)]);
var inst_29788 = (state_29891[(2)]);
var inst_29789 = cljs.core.next(inst_29766);
var inst_29744 = inst_29789;
var inst_29745 = null;
var inst_29746 = (0);
var inst_29747 = (0);
var state_29891__$1 = (function (){var statearr_29922 = state_29891;
(statearr_29922[(13)] = inst_29746);

(statearr_29922[(14)] = inst_29788);

(statearr_29922[(15)] = inst_29744);

(statearr_29922[(16)] = inst_29747);

(statearr_29922[(17)] = inst_29745);

return statearr_29922;
})();
var statearr_29926_32497 = state_29891__$1;
(statearr_29926_32497[(2)] = null);

(statearr_29926_32497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (39))){
var state_29891__$1 = state_29891;
var statearr_29936_32498 = state_29891__$1;
(statearr_29936_32498[(2)] = null);

(statearr_29936_32498[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (4))){
var inst_29735 = (state_29891[(11)]);
var inst_29735__$1 = (state_29891[(2)]);
var inst_29736 = (inst_29735__$1 == null);
var state_29891__$1 = (function (){var statearr_29937 = state_29891;
(statearr_29937[(11)] = inst_29735__$1);

return statearr_29937;
})();
if(cljs.core.truth_(inst_29736)){
var statearr_29938_32499 = state_29891__$1;
(statearr_29938_32499[(1)] = (5));

} else {
var statearr_29939_32507 = state_29891__$1;
(statearr_29939_32507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (15))){
var inst_29746 = (state_29891[(13)]);
var inst_29744 = (state_29891[(15)]);
var inst_29747 = (state_29891[(16)]);
var inst_29745 = (state_29891[(17)]);
var inst_29762 = (state_29891[(2)]);
var inst_29763 = (inst_29747 + (1));
var tmp29932 = inst_29746;
var tmp29933 = inst_29744;
var tmp29934 = inst_29745;
var inst_29744__$1 = tmp29933;
var inst_29745__$1 = tmp29934;
var inst_29746__$1 = tmp29932;
var inst_29747__$1 = inst_29763;
var state_29891__$1 = (function (){var statearr_29943 = state_29891;
(statearr_29943[(13)] = inst_29746__$1);

(statearr_29943[(18)] = inst_29762);

(statearr_29943[(15)] = inst_29744__$1);

(statearr_29943[(16)] = inst_29747__$1);

(statearr_29943[(17)] = inst_29745__$1);

return statearr_29943;
})();
var statearr_29944_32520 = state_29891__$1;
(statearr_29944_32520[(2)] = null);

(statearr_29944_32520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (21))){
var inst_29792 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
var statearr_29949_32524 = state_29891__$1;
(statearr_29949_32524[(2)] = inst_29792);

(statearr_29949_32524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (31))){
var inst_29821 = (state_29891[(10)]);
var inst_29825 = done(null);
var inst_29826 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29821);
var state_29891__$1 = (function (){var statearr_29950 = state_29891;
(statearr_29950[(19)] = inst_29825);

return statearr_29950;
})();
var statearr_29951_32531 = state_29891__$1;
(statearr_29951_32531[(2)] = inst_29826);

(statearr_29951_32531[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (32))){
var inst_29812 = (state_29891[(9)]);
var inst_29813 = (state_29891[(20)]);
var inst_29814 = (state_29891[(12)]);
var inst_29811 = (state_29891[(21)]);
var inst_29828 = (state_29891[(2)]);
var inst_29829 = (inst_29814 + (1));
var tmp29945 = inst_29812;
var tmp29946 = inst_29813;
var tmp29947 = inst_29811;
var inst_29811__$1 = tmp29947;
var inst_29812__$1 = tmp29945;
var inst_29813__$1 = tmp29946;
var inst_29814__$1 = inst_29829;
var state_29891__$1 = (function (){var statearr_29953 = state_29891;
(statearr_29953[(9)] = inst_29812__$1);

(statearr_29953[(20)] = inst_29813__$1);

(statearr_29953[(12)] = inst_29814__$1);

(statearr_29953[(22)] = inst_29828);

(statearr_29953[(21)] = inst_29811__$1);

return statearr_29953;
})();
var statearr_29956_32542 = state_29891__$1;
(statearr_29956_32542[(2)] = null);

(statearr_29956_32542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (40))){
var inst_29844 = (state_29891[(23)]);
var inst_29854 = done(null);
var inst_29855 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29844);
var state_29891__$1 = (function (){var statearr_29960 = state_29891;
(statearr_29960[(24)] = inst_29854);

return statearr_29960;
})();
var statearr_29963_32546 = state_29891__$1;
(statearr_29963_32546[(2)] = inst_29855);

(statearr_29963_32546[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (33))){
var inst_29835 = (state_29891[(25)]);
var inst_29837 = cljs.core.chunked_seq_QMARK_(inst_29835);
var state_29891__$1 = state_29891;
if(inst_29837){
var statearr_29965_32547 = state_29891__$1;
(statearr_29965_32547[(1)] = (36));

} else {
var statearr_29966_32548 = state_29891__$1;
(statearr_29966_32548[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (13))){
var inst_29756 = (state_29891[(26)]);
var inst_29759 = cljs.core.async.close_BANG_(inst_29756);
var state_29891__$1 = state_29891;
var statearr_29967_32549 = state_29891__$1;
(statearr_29967_32549[(2)] = inst_29759);

(statearr_29967_32549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (22))){
var inst_29781 = (state_29891[(8)]);
var inst_29785 = cljs.core.async.close_BANG_(inst_29781);
var state_29891__$1 = state_29891;
var statearr_29976_32550 = state_29891__$1;
(statearr_29976_32550[(2)] = inst_29785);

(statearr_29976_32550[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (36))){
var inst_29835 = (state_29891[(25)]);
var inst_29839 = cljs.core.chunk_first(inst_29835);
var inst_29840 = cljs.core.chunk_rest(inst_29835);
var inst_29841 = cljs.core.count(inst_29839);
var inst_29811 = inst_29840;
var inst_29812 = inst_29839;
var inst_29813 = inst_29841;
var inst_29814 = (0);
var state_29891__$1 = (function (){var statearr_29979 = state_29891;
(statearr_29979[(9)] = inst_29812);

(statearr_29979[(20)] = inst_29813);

(statearr_29979[(12)] = inst_29814);

(statearr_29979[(21)] = inst_29811);

return statearr_29979;
})();
var statearr_29981_32563 = state_29891__$1;
(statearr_29981_32563[(2)] = null);

(statearr_29981_32563[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (41))){
var inst_29835 = (state_29891[(25)]);
var inst_29857 = (state_29891[(2)]);
var inst_29858 = cljs.core.next(inst_29835);
var inst_29811 = inst_29858;
var inst_29812 = null;
var inst_29813 = (0);
var inst_29814 = (0);
var state_29891__$1 = (function (){var statearr_29982 = state_29891;
(statearr_29982[(9)] = inst_29812);

(statearr_29982[(20)] = inst_29813);

(statearr_29982[(27)] = inst_29857);

(statearr_29982[(12)] = inst_29814);

(statearr_29982[(21)] = inst_29811);

return statearr_29982;
})();
var statearr_29983_32569 = state_29891__$1;
(statearr_29983_32569[(2)] = null);

(statearr_29983_32569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (43))){
var state_29891__$1 = state_29891;
var statearr_29987_32570 = state_29891__$1;
(statearr_29987_32570[(2)] = null);

(statearr_29987_32570[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (29))){
var inst_29866 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
var statearr_29997_32571 = state_29891__$1;
(statearr_29997_32571[(2)] = inst_29866);

(statearr_29997_32571[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (44))){
var inst_29875 = (state_29891[(2)]);
var state_29891__$1 = (function (){var statearr_30003 = state_29891;
(statearr_30003[(28)] = inst_29875);

return statearr_30003;
})();
var statearr_30007_32573 = state_29891__$1;
(statearr_30007_32573[(2)] = null);

(statearr_30007_32573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (6))){
var inst_29802 = (state_29891[(29)]);
var inst_29801 = cljs.core.deref(cs);
var inst_29802__$1 = cljs.core.keys(inst_29801);
var inst_29803 = cljs.core.count(inst_29802__$1);
var inst_29804 = cljs.core.reset_BANG_(dctr,inst_29803);
var inst_29810 = cljs.core.seq(inst_29802__$1);
var inst_29811 = inst_29810;
var inst_29812 = null;
var inst_29813 = (0);
var inst_29814 = (0);
var state_29891__$1 = (function (){var statearr_30009 = state_29891;
(statearr_30009[(9)] = inst_29812);

(statearr_30009[(30)] = inst_29804);

(statearr_30009[(20)] = inst_29813);

(statearr_30009[(12)] = inst_29814);

(statearr_30009[(29)] = inst_29802__$1);

(statearr_30009[(21)] = inst_29811);

return statearr_30009;
})();
var statearr_30010_32580 = state_29891__$1;
(statearr_30010_32580[(2)] = null);

(statearr_30010_32580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (28))){
var inst_29835 = (state_29891[(25)]);
var inst_29811 = (state_29891[(21)]);
var inst_29835__$1 = cljs.core.seq(inst_29811);
var state_29891__$1 = (function (){var statearr_30012 = state_29891;
(statearr_30012[(25)] = inst_29835__$1);

return statearr_30012;
})();
if(inst_29835__$1){
var statearr_30013_32585 = state_29891__$1;
(statearr_30013_32585[(1)] = (33));

} else {
var statearr_30014_32586 = state_29891__$1;
(statearr_30014_32586[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (25))){
var inst_29813 = (state_29891[(20)]);
var inst_29814 = (state_29891[(12)]);
var inst_29817 = (inst_29814 < inst_29813);
var inst_29818 = inst_29817;
var state_29891__$1 = state_29891;
if(cljs.core.truth_(inst_29818)){
var statearr_30022_32589 = state_29891__$1;
(statearr_30022_32589[(1)] = (27));

} else {
var statearr_30023_32591 = state_29891__$1;
(statearr_30023_32591[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (34))){
var state_29891__$1 = state_29891;
var statearr_30025_32592 = state_29891__$1;
(statearr_30025_32592[(2)] = null);

(statearr_30025_32592[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (17))){
var state_29891__$1 = state_29891;
var statearr_30027_32597 = state_29891__$1;
(statearr_30027_32597[(2)] = null);

(statearr_30027_32597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (3))){
var inst_29880 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29891__$1,inst_29880);
} else {
if((state_val_29893 === (12))){
var inst_29797 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
var statearr_30028_32599 = state_29891__$1;
(statearr_30028_32599[(2)] = inst_29797);

(statearr_30028_32599[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (2))){
var state_29891__$1 = state_29891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29891__$1,(4),ch);
} else {
if((state_val_29893 === (23))){
var state_29891__$1 = state_29891;
var statearr_30035_32607 = state_29891__$1;
(statearr_30035_32607[(2)] = null);

(statearr_30035_32607[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (35))){
var inst_29864 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
var statearr_30042_32613 = state_29891__$1;
(statearr_30042_32613[(2)] = inst_29864);

(statearr_30042_32613[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (19))){
var inst_29766 = (state_29891[(7)]);
var inst_29770 = cljs.core.chunk_first(inst_29766);
var inst_29771 = cljs.core.chunk_rest(inst_29766);
var inst_29772 = cljs.core.count(inst_29770);
var inst_29744 = inst_29771;
var inst_29745 = inst_29770;
var inst_29746 = inst_29772;
var inst_29747 = (0);
var state_29891__$1 = (function (){var statearr_30043 = state_29891;
(statearr_30043[(13)] = inst_29746);

(statearr_30043[(15)] = inst_29744);

(statearr_30043[(16)] = inst_29747);

(statearr_30043[(17)] = inst_29745);

return statearr_30043;
})();
var statearr_30048_32616 = state_29891__$1;
(statearr_30048_32616[(2)] = null);

(statearr_30048_32616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (11))){
var inst_29744 = (state_29891[(15)]);
var inst_29766 = (state_29891[(7)]);
var inst_29766__$1 = cljs.core.seq(inst_29744);
var state_29891__$1 = (function (){var statearr_30053 = state_29891;
(statearr_30053[(7)] = inst_29766__$1);

return statearr_30053;
})();
if(inst_29766__$1){
var statearr_30054_32617 = state_29891__$1;
(statearr_30054_32617[(1)] = (16));

} else {
var statearr_30058_32618 = state_29891__$1;
(statearr_30058_32618[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (9))){
var inst_29799 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
var statearr_30063_32620 = state_29891__$1;
(statearr_30063_32620[(2)] = inst_29799);

(statearr_30063_32620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (5))){
var inst_29742 = cljs.core.deref(cs);
var inst_29743 = cljs.core.seq(inst_29742);
var inst_29744 = inst_29743;
var inst_29745 = null;
var inst_29746 = (0);
var inst_29747 = (0);
var state_29891__$1 = (function (){var statearr_30064 = state_29891;
(statearr_30064[(13)] = inst_29746);

(statearr_30064[(15)] = inst_29744);

(statearr_30064[(16)] = inst_29747);

(statearr_30064[(17)] = inst_29745);

return statearr_30064;
})();
var statearr_30065_32628 = state_29891__$1;
(statearr_30065_32628[(2)] = null);

(statearr_30065_32628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (14))){
var state_29891__$1 = state_29891;
var statearr_30072_32629 = state_29891__$1;
(statearr_30072_32629[(2)] = null);

(statearr_30072_32629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (45))){
var inst_29872 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
var statearr_30074_32631 = state_29891__$1;
(statearr_30074_32631[(2)] = inst_29872);

(statearr_30074_32631[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (26))){
var inst_29802 = (state_29891[(29)]);
var inst_29868 = (state_29891[(2)]);
var inst_29869 = cljs.core.seq(inst_29802);
var state_29891__$1 = (function (){var statearr_30075 = state_29891;
(statearr_30075[(31)] = inst_29868);

return statearr_30075;
})();
if(inst_29869){
var statearr_30076_32632 = state_29891__$1;
(statearr_30076_32632[(1)] = (42));

} else {
var statearr_30077_32633 = state_29891__$1;
(statearr_30077_32633[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (16))){
var inst_29766 = (state_29891[(7)]);
var inst_29768 = cljs.core.chunked_seq_QMARK_(inst_29766);
var state_29891__$1 = state_29891;
if(inst_29768){
var statearr_30078_32635 = state_29891__$1;
(statearr_30078_32635[(1)] = (19));

} else {
var statearr_30079_32636 = state_29891__$1;
(statearr_30079_32636[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (38))){
var inst_29861 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
var statearr_30080_32638 = state_29891__$1;
(statearr_30080_32638[(2)] = inst_29861);

(statearr_30080_32638[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (30))){
var state_29891__$1 = state_29891;
var statearr_30082_32639 = state_29891__$1;
(statearr_30082_32639[(2)] = null);

(statearr_30082_32639[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (10))){
var inst_29747 = (state_29891[(16)]);
var inst_29745 = (state_29891[(17)]);
var inst_29755 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29745,inst_29747);
var inst_29756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29755,(0),null);
var inst_29757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29755,(1),null);
var state_29891__$1 = (function (){var statearr_30083 = state_29891;
(statearr_30083[(26)] = inst_29756);

return statearr_30083;
})();
if(cljs.core.truth_(inst_29757)){
var statearr_30084_32640 = state_29891__$1;
(statearr_30084_32640[(1)] = (13));

} else {
var statearr_30085_32641 = state_29891__$1;
(statearr_30085_32641[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (18))){
var inst_29795 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
var statearr_30086_32644 = state_29891__$1;
(statearr_30086_32644[(2)] = inst_29795);

(statearr_30086_32644[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (42))){
var state_29891__$1 = state_29891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29891__$1,(45),dchan);
} else {
if((state_val_29893 === (37))){
var inst_29844 = (state_29891[(23)]);
var inst_29835 = (state_29891[(25)]);
var inst_29735 = (state_29891[(11)]);
var inst_29844__$1 = cljs.core.first(inst_29835);
var inst_29845 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29844__$1,inst_29735,done);
var state_29891__$1 = (function (){var statearr_30089 = state_29891;
(statearr_30089[(23)] = inst_29844__$1);

return statearr_30089;
})();
if(cljs.core.truth_(inst_29845)){
var statearr_30100_32656 = state_29891__$1;
(statearr_30100_32656[(1)] = (39));

} else {
var statearr_30103_32660 = state_29891__$1;
(statearr_30103_32660[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (8))){
var inst_29746 = (state_29891[(13)]);
var inst_29747 = (state_29891[(16)]);
var inst_29749 = (inst_29747 < inst_29746);
var inst_29750 = inst_29749;
var state_29891__$1 = state_29891;
if(cljs.core.truth_(inst_29750)){
var statearr_30106_32662 = state_29891__$1;
(statearr_30106_32662[(1)] = (10));

} else {
var statearr_30107_32664 = state_29891__$1;
(statearr_30107_32664[(1)] = (11));

}

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28210__auto__ = null;
var cljs$core$async$mult_$_state_machine__28210__auto____0 = (function (){
var statearr_30112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30112[(0)] = cljs$core$async$mult_$_state_machine__28210__auto__);

(statearr_30112[(1)] = (1));

return statearr_30112;
});
var cljs$core$async$mult_$_state_machine__28210__auto____1 = (function (state_29891){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_29891);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e30114){if((e30114 instanceof Object)){
var ex__28213__auto__ = e30114;
var statearr_30117_32669 = state_29891;
(statearr_30117_32669[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32672 = state_29891;
state_29891 = G__32672;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28210__auto__ = function(state_29891){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28210__auto____1.call(this,state_29891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28210__auto____0;
cljs$core$async$mult_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28210__auto____1;
return cljs$core$async$mult_$_state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_30120 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_30120[(6)] = c__28521__auto___32474);

return statearr_30120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30122 = arguments.length;
switch (G__30122) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32706 = arguments.length;
var i__4790__auto___32707 = (0);
while(true){
if((i__4790__auto___32707 < len__4789__auto___32706)){
args__4795__auto__.push((arguments[i__4790__auto___32707]));

var G__32709 = (i__4790__auto___32707 + (1));
i__4790__auto___32707 = G__32709;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30168){
var map__30171 = p__30168;
var map__30171__$1 = (((((!((map__30171 == null))))?(((((map__30171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30171):map__30171);
var opts = map__30171__$1;
var statearr_30178_32720 = state;
(statearr_30178_32720[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30182_32724 = state;
(statearr_30182_32724[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30184_32725 = state;
(statearr_30184_32725[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30156){
var G__30157 = cljs.core.first(seq30156);
var seq30156__$1 = cljs.core.next(seq30156);
var G__30158 = cljs.core.first(seq30156__$1);
var seq30156__$2 = cljs.core.next(seq30156__$1);
var G__30159 = cljs.core.first(seq30156__$2);
var seq30156__$3 = cljs.core.next(seq30156__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30157,G__30158,G__30159,seq30156__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30245 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30245 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30246){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30246 = meta30246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30247,meta30246__$1){
var self__ = this;
var _30247__$1 = this;
return (new cljs.core.async.t_cljs$core$async30245(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30246__$1));
}));

(cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30247){
var self__ = this;
var _30247__$1 = this;
return self__.meta30246;
}));

(cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30246","meta30246",-2045544023,null)], null);
}));

(cljs.core.async.t_cljs$core$async30245.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30245");

(cljs.core.async.t_cljs$core$async30245.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30245");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30245.
 */
cljs.core.async.__GT_t_cljs$core$async30245 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30245(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30246){
return (new cljs.core.async.t_cljs$core$async30245(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30246));
});

}

return (new cljs.core.async.t_cljs$core$async30245(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28521__auto___32766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_30411){
var state_val_30412 = (state_30411[(1)]);
if((state_val_30412 === (7))){
var inst_30307 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
var statearr_30414_32769 = state_30411__$1;
(statearr_30414_32769[(2)] = inst_30307);

(statearr_30414_32769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (20))){
var inst_30320 = (state_30411[(7)]);
var state_30411__$1 = state_30411;
var statearr_30418_32773 = state_30411__$1;
(statearr_30418_32773[(2)] = inst_30320);

(statearr_30418_32773[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (27))){
var state_30411__$1 = state_30411;
var statearr_30420_32775 = state_30411__$1;
(statearr_30420_32775[(2)] = null);

(statearr_30420_32775[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (1))){
var inst_30290 = (state_30411[(8)]);
var inst_30290__$1 = calc_state();
var inst_30292 = (inst_30290__$1 == null);
var inst_30293 = cljs.core.not(inst_30292);
var state_30411__$1 = (function (){var statearr_30421 = state_30411;
(statearr_30421[(8)] = inst_30290__$1);

return statearr_30421;
})();
if(inst_30293){
var statearr_30422_32778 = state_30411__$1;
(statearr_30422_32778[(1)] = (2));

} else {
var statearr_30423_32779 = state_30411__$1;
(statearr_30423_32779[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (24))){
var inst_30380 = (state_30411[(9)]);
var inst_30350 = (state_30411[(10)]);
var inst_30359 = (state_30411[(11)]);
var inst_30380__$1 = (inst_30350.cljs$core$IFn$_invoke$arity$1 ? inst_30350.cljs$core$IFn$_invoke$arity$1(inst_30359) : inst_30350.call(null,inst_30359));
var state_30411__$1 = (function (){var statearr_30425 = state_30411;
(statearr_30425[(9)] = inst_30380__$1);

return statearr_30425;
})();
if(cljs.core.truth_(inst_30380__$1)){
var statearr_30426_32781 = state_30411__$1;
(statearr_30426_32781[(1)] = (29));

} else {
var statearr_30427_32785 = state_30411__$1;
(statearr_30427_32785[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (4))){
var inst_30310 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
if(cljs.core.truth_(inst_30310)){
var statearr_30430_32789 = state_30411__$1;
(statearr_30430_32789[(1)] = (8));

} else {
var statearr_30431_32790 = state_30411__$1;
(statearr_30431_32790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (15))){
var inst_30343 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
if(cljs.core.truth_(inst_30343)){
var statearr_30434_32791 = state_30411__$1;
(statearr_30434_32791[(1)] = (19));

} else {
var statearr_30435_32792 = state_30411__$1;
(statearr_30435_32792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (21))){
var inst_30348 = (state_30411[(12)]);
var inst_30348__$1 = (state_30411[(2)]);
var inst_30350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30348__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30348__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30348__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30411__$1 = (function (){var statearr_30439 = state_30411;
(statearr_30439[(13)] = inst_30351);

(statearr_30439[(12)] = inst_30348__$1);

(statearr_30439[(10)] = inst_30350);

return statearr_30439;
})();
return cljs.core.async.ioc_alts_BANG_(state_30411__$1,(22),inst_30352);
} else {
if((state_val_30412 === (31))){
var inst_30390 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
if(cljs.core.truth_(inst_30390)){
var statearr_30441_32793 = state_30411__$1;
(statearr_30441_32793[(1)] = (32));

} else {
var statearr_30442_32794 = state_30411__$1;
(statearr_30442_32794[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (32))){
var inst_30358 = (state_30411[(14)]);
var state_30411__$1 = state_30411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30411__$1,(35),out,inst_30358);
} else {
if((state_val_30412 === (33))){
var inst_30348 = (state_30411[(12)]);
var inst_30320 = inst_30348;
var state_30411__$1 = (function (){var statearr_30446 = state_30411;
(statearr_30446[(7)] = inst_30320);

return statearr_30446;
})();
var statearr_30447_32796 = state_30411__$1;
(statearr_30447_32796[(2)] = null);

(statearr_30447_32796[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (13))){
var inst_30320 = (state_30411[(7)]);
var inst_30332 = inst_30320.cljs$lang$protocol_mask$partition0$;
var inst_30333 = (inst_30332 & (64));
var inst_30334 = inst_30320.cljs$core$ISeq$;
var inst_30335 = (cljs.core.PROTOCOL_SENTINEL === inst_30334);
var inst_30336 = ((inst_30333) || (inst_30335));
var state_30411__$1 = state_30411;
if(cljs.core.truth_(inst_30336)){
var statearr_30451_32797 = state_30411__$1;
(statearr_30451_32797[(1)] = (16));

} else {
var statearr_30452_32798 = state_30411__$1;
(statearr_30452_32798[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (22))){
var inst_30359 = (state_30411[(11)]);
var inst_30358 = (state_30411[(14)]);
var inst_30357 = (state_30411[(2)]);
var inst_30358__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30357,(0),null);
var inst_30359__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30357,(1),null);
var inst_30364 = (inst_30358__$1 == null);
var inst_30365 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30359__$1,change);
var inst_30366 = ((inst_30364) || (inst_30365));
var state_30411__$1 = (function (){var statearr_30453 = state_30411;
(statearr_30453[(11)] = inst_30359__$1);

(statearr_30453[(14)] = inst_30358__$1);

return statearr_30453;
})();
if(cljs.core.truth_(inst_30366)){
var statearr_30454_32802 = state_30411__$1;
(statearr_30454_32802[(1)] = (23));

} else {
var statearr_30456_32803 = state_30411__$1;
(statearr_30456_32803[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (36))){
var inst_30348 = (state_30411[(12)]);
var inst_30320 = inst_30348;
var state_30411__$1 = (function (){var statearr_30457 = state_30411;
(statearr_30457[(7)] = inst_30320);

return statearr_30457;
})();
var statearr_30459_32808 = state_30411__$1;
(statearr_30459_32808[(2)] = null);

(statearr_30459_32808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (29))){
var inst_30380 = (state_30411[(9)]);
var state_30411__$1 = state_30411;
var statearr_30464_32809 = state_30411__$1;
(statearr_30464_32809[(2)] = inst_30380);

(statearr_30464_32809[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (6))){
var state_30411__$1 = state_30411;
var statearr_30468_32810 = state_30411__$1;
(statearr_30468_32810[(2)] = false);

(statearr_30468_32810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (28))){
var inst_30374 = (state_30411[(2)]);
var inst_30375 = calc_state();
var inst_30320 = inst_30375;
var state_30411__$1 = (function (){var statearr_30471 = state_30411;
(statearr_30471[(7)] = inst_30320);

(statearr_30471[(15)] = inst_30374);

return statearr_30471;
})();
var statearr_30472_32815 = state_30411__$1;
(statearr_30472_32815[(2)] = null);

(statearr_30472_32815[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (25))){
var inst_30405 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
var statearr_30474_32816 = state_30411__$1;
(statearr_30474_32816[(2)] = inst_30405);

(statearr_30474_32816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (34))){
var inst_30403 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
var statearr_30475_32817 = state_30411__$1;
(statearr_30475_32817[(2)] = inst_30403);

(statearr_30475_32817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (17))){
var state_30411__$1 = state_30411;
var statearr_30476_32820 = state_30411__$1;
(statearr_30476_32820[(2)] = false);

(statearr_30476_32820[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (3))){
var state_30411__$1 = state_30411;
var statearr_30477_32821 = state_30411__$1;
(statearr_30477_32821[(2)] = false);

(statearr_30477_32821[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (12))){
var inst_30407 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30411__$1,inst_30407);
} else {
if((state_val_30412 === (2))){
var inst_30290 = (state_30411[(8)]);
var inst_30295 = inst_30290.cljs$lang$protocol_mask$partition0$;
var inst_30296 = (inst_30295 & (64));
var inst_30297 = inst_30290.cljs$core$ISeq$;
var inst_30298 = (cljs.core.PROTOCOL_SENTINEL === inst_30297);
var inst_30299 = ((inst_30296) || (inst_30298));
var state_30411__$1 = state_30411;
if(cljs.core.truth_(inst_30299)){
var statearr_30484_32822 = state_30411__$1;
(statearr_30484_32822[(1)] = (5));

} else {
var statearr_30485_32823 = state_30411__$1;
(statearr_30485_32823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (23))){
var inst_30358 = (state_30411[(14)]);
var inst_30369 = (inst_30358 == null);
var state_30411__$1 = state_30411;
if(cljs.core.truth_(inst_30369)){
var statearr_30487_32824 = state_30411__$1;
(statearr_30487_32824[(1)] = (26));

} else {
var statearr_30491_32825 = state_30411__$1;
(statearr_30491_32825[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (35))){
var inst_30393 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
if(cljs.core.truth_(inst_30393)){
var statearr_30492_32827 = state_30411__$1;
(statearr_30492_32827[(1)] = (36));

} else {
var statearr_30493_32828 = state_30411__$1;
(statearr_30493_32828[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (19))){
var inst_30320 = (state_30411[(7)]);
var inst_30345 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30320);
var state_30411__$1 = state_30411;
var statearr_30498_32829 = state_30411__$1;
(statearr_30498_32829[(2)] = inst_30345);

(statearr_30498_32829[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (11))){
var inst_30320 = (state_30411[(7)]);
var inst_30327 = (inst_30320 == null);
var inst_30328 = cljs.core.not(inst_30327);
var state_30411__$1 = state_30411;
if(inst_30328){
var statearr_30504_32830 = state_30411__$1;
(statearr_30504_32830[(1)] = (13));

} else {
var statearr_30505_32832 = state_30411__$1;
(statearr_30505_32832[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (9))){
var inst_30290 = (state_30411[(8)]);
var state_30411__$1 = state_30411;
var statearr_30506_32833 = state_30411__$1;
(statearr_30506_32833[(2)] = inst_30290);

(statearr_30506_32833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (5))){
var state_30411__$1 = state_30411;
var statearr_30507_32834 = state_30411__$1;
(statearr_30507_32834[(2)] = true);

(statearr_30507_32834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (14))){
var state_30411__$1 = state_30411;
var statearr_30508_32836 = state_30411__$1;
(statearr_30508_32836[(2)] = false);

(statearr_30508_32836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (26))){
var inst_30359 = (state_30411[(11)]);
var inst_30371 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30359);
var state_30411__$1 = state_30411;
var statearr_30513_32838 = state_30411__$1;
(statearr_30513_32838[(2)] = inst_30371);

(statearr_30513_32838[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (16))){
var state_30411__$1 = state_30411;
var statearr_30519_32839 = state_30411__$1;
(statearr_30519_32839[(2)] = true);

(statearr_30519_32839[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (38))){
var inst_30399 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
var statearr_30521_32848 = state_30411__$1;
(statearr_30521_32848[(2)] = inst_30399);

(statearr_30521_32848[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (30))){
var inst_30351 = (state_30411[(13)]);
var inst_30350 = (state_30411[(10)]);
var inst_30359 = (state_30411[(11)]);
var inst_30385 = cljs.core.empty_QMARK_(inst_30350);
var inst_30386 = (inst_30351.cljs$core$IFn$_invoke$arity$1 ? inst_30351.cljs$core$IFn$_invoke$arity$1(inst_30359) : inst_30351.call(null,inst_30359));
var inst_30387 = cljs.core.not(inst_30386);
var inst_30388 = ((inst_30385) && (inst_30387));
var state_30411__$1 = state_30411;
var statearr_30526_32852 = state_30411__$1;
(statearr_30526_32852[(2)] = inst_30388);

(statearr_30526_32852[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (10))){
var inst_30290 = (state_30411[(8)]);
var inst_30315 = (state_30411[(2)]);
var inst_30316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30315,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30315,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30315,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30320 = inst_30290;
var state_30411__$1 = (function (){var statearr_30527 = state_30411;
(statearr_30527[(7)] = inst_30320);

(statearr_30527[(16)] = inst_30316);

(statearr_30527[(17)] = inst_30318);

(statearr_30527[(18)] = inst_30319);

return statearr_30527;
})();
var statearr_30528_32854 = state_30411__$1;
(statearr_30528_32854[(2)] = null);

(statearr_30528_32854[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (18))){
var inst_30340 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
var statearr_30529_32856 = state_30411__$1;
(statearr_30529_32856[(2)] = inst_30340);

(statearr_30529_32856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (37))){
var state_30411__$1 = state_30411;
var statearr_30530_32857 = state_30411__$1;
(statearr_30530_32857[(2)] = null);

(statearr_30530_32857[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (8))){
var inst_30290 = (state_30411[(8)]);
var inst_30312 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30290);
var state_30411__$1 = state_30411;
var statearr_30535_32858 = state_30411__$1;
(statearr_30535_32858[(2)] = inst_30312);

(statearr_30535_32858[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__28210__auto__ = null;
var cljs$core$async$mix_$_state_machine__28210__auto____0 = (function (){
var statearr_30540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30540[(0)] = cljs$core$async$mix_$_state_machine__28210__auto__);

(statearr_30540[(1)] = (1));

return statearr_30540;
});
var cljs$core$async$mix_$_state_machine__28210__auto____1 = (function (state_30411){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_30411);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e30543){if((e30543 instanceof Object)){
var ex__28213__auto__ = e30543;
var statearr_30549_32863 = state_30411;
(statearr_30549_32863[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32864 = state_30411;
state_30411 = G__32864;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28210__auto__ = function(state_30411){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28210__auto____1.call(this,state_30411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28210__auto____0;
cljs$core$async$mix_$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28210__auto____1;
return cljs$core$async$mix_$_state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_30550 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_30550[(6)] = c__28521__auto___32766);

return statearr_30550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30579 = arguments.length;
switch (G__30579) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30599 = arguments.length;
switch (G__30599) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30597_SHARP_){
if(cljs.core.truth_((p1__30597_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30597_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30597_SHARP_.call(null,topic)))){
return p1__30597_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30597_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30605 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30606){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30606 = meta30606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30607,meta30606__$1){
var self__ = this;
var _30607__$1 = this;
return (new cljs.core.async.t_cljs$core$async30605(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30606__$1));
}));

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30607){
var self__ = this;
var _30607__$1 = this;
return self__.meta30606;
}));

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30606","meta30606",1860908526,null)], null);
}));

(cljs.core.async.t_cljs$core$async30605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30605");

(cljs.core.async.t_cljs$core$async30605.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30605.
 */
cljs.core.async.__GT_t_cljs$core$async30605 = (function cljs$core$async$__GT_t_cljs$core$async30605(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30606){
return (new cljs.core.async.t_cljs$core$async30605(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30606));
});

}

return (new cljs.core.async.t_cljs$core$async30605(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28521__auto___32935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_30702){
var state_val_30703 = (state_30702[(1)]);
if((state_val_30703 === (7))){
var inst_30698 = (state_30702[(2)]);
var state_30702__$1 = state_30702;
var statearr_30706_32936 = state_30702__$1;
(statearr_30706_32936[(2)] = inst_30698);

(statearr_30706_32936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (20))){
var state_30702__$1 = state_30702;
var statearr_30707_32937 = state_30702__$1;
(statearr_30707_32937[(2)] = null);

(statearr_30707_32937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (1))){
var state_30702__$1 = state_30702;
var statearr_30709_32942 = state_30702__$1;
(statearr_30709_32942[(2)] = null);

(statearr_30709_32942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (24))){
var inst_30679 = (state_30702[(7)]);
var inst_30689 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30679);
var state_30702__$1 = state_30702;
var statearr_30710_32945 = state_30702__$1;
(statearr_30710_32945[(2)] = inst_30689);

(statearr_30710_32945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (4))){
var inst_30627 = (state_30702[(8)]);
var inst_30627__$1 = (state_30702[(2)]);
var inst_30628 = (inst_30627__$1 == null);
var state_30702__$1 = (function (){var statearr_30713 = state_30702;
(statearr_30713[(8)] = inst_30627__$1);

return statearr_30713;
})();
if(cljs.core.truth_(inst_30628)){
var statearr_30714_32951 = state_30702__$1;
(statearr_30714_32951[(1)] = (5));

} else {
var statearr_30717_32952 = state_30702__$1;
(statearr_30717_32952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (15))){
var inst_30673 = (state_30702[(2)]);
var state_30702__$1 = state_30702;
var statearr_30720_32953 = state_30702__$1;
(statearr_30720_32953[(2)] = inst_30673);

(statearr_30720_32953[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (21))){
var inst_30695 = (state_30702[(2)]);
var state_30702__$1 = (function (){var statearr_30721 = state_30702;
(statearr_30721[(9)] = inst_30695);

return statearr_30721;
})();
var statearr_30723_32955 = state_30702__$1;
(statearr_30723_32955[(2)] = null);

(statearr_30723_32955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (13))){
var inst_30652 = (state_30702[(10)]);
var inst_30654 = cljs.core.chunked_seq_QMARK_(inst_30652);
var state_30702__$1 = state_30702;
if(inst_30654){
var statearr_30724_32957 = state_30702__$1;
(statearr_30724_32957[(1)] = (16));

} else {
var statearr_30725_32958 = state_30702__$1;
(statearr_30725_32958[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (22))){
var inst_30686 = (state_30702[(2)]);
var state_30702__$1 = state_30702;
if(cljs.core.truth_(inst_30686)){
var statearr_30727_32959 = state_30702__$1;
(statearr_30727_32959[(1)] = (23));

} else {
var statearr_30728_32960 = state_30702__$1;
(statearr_30728_32960[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (6))){
var inst_30681 = (state_30702[(11)]);
var inst_30679 = (state_30702[(7)]);
var inst_30627 = (state_30702[(8)]);
var inst_30679__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30627) : topic_fn.call(null,inst_30627));
var inst_30680 = cljs.core.deref(mults);
var inst_30681__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30680,inst_30679__$1);
var state_30702__$1 = (function (){var statearr_30734 = state_30702;
(statearr_30734[(11)] = inst_30681__$1);

(statearr_30734[(7)] = inst_30679__$1);

return statearr_30734;
})();
if(cljs.core.truth_(inst_30681__$1)){
var statearr_30735_32964 = state_30702__$1;
(statearr_30735_32964[(1)] = (19));

} else {
var statearr_30736_32966 = state_30702__$1;
(statearr_30736_32966[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (25))){
var inst_30692 = (state_30702[(2)]);
var state_30702__$1 = state_30702;
var statearr_30738_32967 = state_30702__$1;
(statearr_30738_32967[(2)] = inst_30692);

(statearr_30738_32967[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (17))){
var inst_30652 = (state_30702[(10)]);
var inst_30663 = cljs.core.first(inst_30652);
var inst_30665 = cljs.core.async.muxch_STAR_(inst_30663);
var inst_30666 = cljs.core.async.close_BANG_(inst_30665);
var inst_30667 = cljs.core.next(inst_30652);
var inst_30637 = inst_30667;
var inst_30638 = null;
var inst_30639 = (0);
var inst_30640 = (0);
var state_30702__$1 = (function (){var statearr_30741 = state_30702;
(statearr_30741[(12)] = inst_30637);

(statearr_30741[(13)] = inst_30639);

(statearr_30741[(14)] = inst_30640);

(statearr_30741[(15)] = inst_30666);

(statearr_30741[(16)] = inst_30638);

return statearr_30741;
})();
var statearr_30742_32970 = state_30702__$1;
(statearr_30742_32970[(2)] = null);

(statearr_30742_32970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (3))){
var inst_30700 = (state_30702[(2)]);
var state_30702__$1 = state_30702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30702__$1,inst_30700);
} else {
if((state_val_30703 === (12))){
var inst_30675 = (state_30702[(2)]);
var state_30702__$1 = state_30702;
var statearr_30745_32973 = state_30702__$1;
(statearr_30745_32973[(2)] = inst_30675);

(statearr_30745_32973[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (2))){
var state_30702__$1 = state_30702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30702__$1,(4),ch);
} else {
if((state_val_30703 === (23))){
var state_30702__$1 = state_30702;
var statearr_30752_32974 = state_30702__$1;
(statearr_30752_32974[(2)] = null);

(statearr_30752_32974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (19))){
var inst_30681 = (state_30702[(11)]);
var inst_30627 = (state_30702[(8)]);
var inst_30684 = cljs.core.async.muxch_STAR_(inst_30681);
var state_30702__$1 = state_30702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30702__$1,(22),inst_30684,inst_30627);
} else {
if((state_val_30703 === (11))){
var inst_30637 = (state_30702[(12)]);
var inst_30652 = (state_30702[(10)]);
var inst_30652__$1 = cljs.core.seq(inst_30637);
var state_30702__$1 = (function (){var statearr_30756 = state_30702;
(statearr_30756[(10)] = inst_30652__$1);

return statearr_30756;
})();
if(inst_30652__$1){
var statearr_30758_32977 = state_30702__$1;
(statearr_30758_32977[(1)] = (13));

} else {
var statearr_30760_32978 = state_30702__$1;
(statearr_30760_32978[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (9))){
var inst_30677 = (state_30702[(2)]);
var state_30702__$1 = state_30702;
var statearr_30761_32979 = state_30702__$1;
(statearr_30761_32979[(2)] = inst_30677);

(statearr_30761_32979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (5))){
var inst_30634 = cljs.core.deref(mults);
var inst_30635 = cljs.core.vals(inst_30634);
var inst_30636 = cljs.core.seq(inst_30635);
var inst_30637 = inst_30636;
var inst_30638 = null;
var inst_30639 = (0);
var inst_30640 = (0);
var state_30702__$1 = (function (){var statearr_30763 = state_30702;
(statearr_30763[(12)] = inst_30637);

(statearr_30763[(13)] = inst_30639);

(statearr_30763[(14)] = inst_30640);

(statearr_30763[(16)] = inst_30638);

return statearr_30763;
})();
var statearr_30764_32981 = state_30702__$1;
(statearr_30764_32981[(2)] = null);

(statearr_30764_32981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (14))){
var state_30702__$1 = state_30702;
var statearr_30771_32982 = state_30702__$1;
(statearr_30771_32982[(2)] = null);

(statearr_30771_32982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (16))){
var inst_30652 = (state_30702[(10)]);
var inst_30657 = cljs.core.chunk_first(inst_30652);
var inst_30659 = cljs.core.chunk_rest(inst_30652);
var inst_30660 = cljs.core.count(inst_30657);
var inst_30637 = inst_30659;
var inst_30638 = inst_30657;
var inst_30639 = inst_30660;
var inst_30640 = (0);
var state_30702__$1 = (function (){var statearr_30776 = state_30702;
(statearr_30776[(12)] = inst_30637);

(statearr_30776[(13)] = inst_30639);

(statearr_30776[(14)] = inst_30640);

(statearr_30776[(16)] = inst_30638);

return statearr_30776;
})();
var statearr_30777_32984 = state_30702__$1;
(statearr_30777_32984[(2)] = null);

(statearr_30777_32984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (10))){
var inst_30637 = (state_30702[(12)]);
var inst_30639 = (state_30702[(13)]);
var inst_30640 = (state_30702[(14)]);
var inst_30638 = (state_30702[(16)]);
var inst_30646 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30638,inst_30640);
var inst_30647 = cljs.core.async.muxch_STAR_(inst_30646);
var inst_30648 = cljs.core.async.close_BANG_(inst_30647);
var inst_30649 = (inst_30640 + (1));
var tmp30766 = inst_30637;
var tmp30767 = inst_30639;
var tmp30768 = inst_30638;
var inst_30637__$1 = tmp30766;
var inst_30638__$1 = tmp30768;
var inst_30639__$1 = tmp30767;
var inst_30640__$1 = inst_30649;
var state_30702__$1 = (function (){var statearr_30784 = state_30702;
(statearr_30784[(12)] = inst_30637__$1);

(statearr_30784[(13)] = inst_30639__$1);

(statearr_30784[(14)] = inst_30640__$1);

(statearr_30784[(17)] = inst_30648);

(statearr_30784[(16)] = inst_30638__$1);

return statearr_30784;
})();
var statearr_30786_32989 = state_30702__$1;
(statearr_30786_32989[(2)] = null);

(statearr_30786_32989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (18))){
var inst_30670 = (state_30702[(2)]);
var state_30702__$1 = state_30702;
var statearr_30787_32991 = state_30702__$1;
(statearr_30787_32991[(2)] = inst_30670);

(statearr_30787_32991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (8))){
var inst_30639 = (state_30702[(13)]);
var inst_30640 = (state_30702[(14)]);
var inst_30642 = (inst_30640 < inst_30639);
var inst_30643 = inst_30642;
var state_30702__$1 = state_30702;
if(cljs.core.truth_(inst_30643)){
var statearr_30788_33002 = state_30702__$1;
(statearr_30788_33002[(1)] = (10));

} else {
var statearr_30789_33003 = state_30702__$1;
(statearr_30789_33003[(1)] = (11));

}

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
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_30790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30790[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_30790[(1)] = (1));

return statearr_30790;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_30702){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_30702);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e30792){if((e30792 instanceof Object)){
var ex__28213__auto__ = e30792;
var statearr_30794_33009 = state_30702;
(statearr_30794_33009[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30792;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33010 = state_30702;
state_30702 = G__33010;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_30702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_30702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_30798 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_30798[(6)] = c__28521__auto___32935);

return statearr_30798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30810 = arguments.length;
switch (G__30810) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30816 = arguments.length;
switch (G__30816) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30829 = arguments.length;
switch (G__30829) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__28521__auto___33048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_30885){
var state_val_30886 = (state_30885[(1)]);
if((state_val_30886 === (7))){
var state_30885__$1 = state_30885;
var statearr_30888_33056 = state_30885__$1;
(statearr_30888_33056[(2)] = null);

(statearr_30888_33056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (1))){
var state_30885__$1 = state_30885;
var statearr_30891_33059 = state_30885__$1;
(statearr_30891_33059[(2)] = null);

(statearr_30891_33059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (4))){
var inst_30842 = (state_30885[(7)]);
var inst_30844 = (inst_30842 < cnt);
var state_30885__$1 = state_30885;
if(cljs.core.truth_(inst_30844)){
var statearr_30894_33070 = state_30885__$1;
(statearr_30894_33070[(1)] = (6));

} else {
var statearr_30895_33071 = state_30885__$1;
(statearr_30895_33071[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (15))){
var inst_30880 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30896_33072 = state_30885__$1;
(statearr_30896_33072[(2)] = inst_30880);

(statearr_30896_33072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (13))){
var inst_30873 = cljs.core.async.close_BANG_(out);
var state_30885__$1 = state_30885;
var statearr_30898_33073 = state_30885__$1;
(statearr_30898_33073[(2)] = inst_30873);

(statearr_30898_33073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (6))){
var state_30885__$1 = state_30885;
var statearr_30899_33082 = state_30885__$1;
(statearr_30899_33082[(2)] = null);

(statearr_30899_33082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (3))){
var inst_30882 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30885__$1,inst_30882);
} else {
if((state_val_30886 === (12))){
var inst_30870 = (state_30885[(8)]);
var inst_30870__$1 = (state_30885[(2)]);
var inst_30871 = cljs.core.some(cljs.core.nil_QMARK_,inst_30870__$1);
var state_30885__$1 = (function (){var statearr_30903 = state_30885;
(statearr_30903[(8)] = inst_30870__$1);

return statearr_30903;
})();
if(cljs.core.truth_(inst_30871)){
var statearr_30905_33085 = state_30885__$1;
(statearr_30905_33085[(1)] = (13));

} else {
var statearr_30906_33086 = state_30885__$1;
(statearr_30906_33086[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (2))){
var inst_30841 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30842 = (0);
var state_30885__$1 = (function (){var statearr_30907 = state_30885;
(statearr_30907[(9)] = inst_30841);

(statearr_30907[(7)] = inst_30842);

return statearr_30907;
})();
var statearr_30914_33088 = state_30885__$1;
(statearr_30914_33088[(2)] = null);

(statearr_30914_33088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (11))){
var inst_30842 = (state_30885[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_30885,(10),Object,null,(9));
var inst_30857 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30842) : chs__$1.call(null,inst_30842));
var inst_30858 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30842) : done.call(null,inst_30842));
var inst_30859 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30857,inst_30858);
var state_30885__$1 = state_30885;
var statearr_30915_33089 = state_30885__$1;
(statearr_30915_33089[(2)] = inst_30859);


cljs.core.async.impl.ioc_helpers.process_exception(state_30885__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (9))){
var inst_30842 = (state_30885[(7)]);
var inst_30861 = (state_30885[(2)]);
var inst_30862 = (inst_30842 + (1));
var inst_30842__$1 = inst_30862;
var state_30885__$1 = (function (){var statearr_30916 = state_30885;
(statearr_30916[(7)] = inst_30842__$1);

(statearr_30916[(10)] = inst_30861);

return statearr_30916;
})();
var statearr_30918_33097 = state_30885__$1;
(statearr_30918_33097[(2)] = null);

(statearr_30918_33097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (5))){
var inst_30868 = (state_30885[(2)]);
var state_30885__$1 = (function (){var statearr_30920 = state_30885;
(statearr_30920[(11)] = inst_30868);

return statearr_30920;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30885__$1,(12),dchan);
} else {
if((state_val_30886 === (14))){
var inst_30870 = (state_30885[(8)]);
var inst_30875 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30870);
var state_30885__$1 = state_30885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30885__$1,(16),out,inst_30875);
} else {
if((state_val_30886 === (16))){
var inst_30877 = (state_30885[(2)]);
var state_30885__$1 = (function (){var statearr_30924 = state_30885;
(statearr_30924[(12)] = inst_30877);

return statearr_30924;
})();
var statearr_30925_33106 = state_30885__$1;
(statearr_30925_33106[(2)] = null);

(statearr_30925_33106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (10))){
var inst_30852 = (state_30885[(2)]);
var inst_30853 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30885__$1 = (function (){var statearr_30927 = state_30885;
(statearr_30927[(13)] = inst_30852);

return statearr_30927;
})();
var statearr_30928_33110 = state_30885__$1;
(statearr_30928_33110[(2)] = inst_30853);


cljs.core.async.impl.ioc_helpers.process_exception(state_30885__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (8))){
var inst_30866 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30929_33114 = state_30885__$1;
(statearr_30929_33114[(2)] = inst_30866);

(statearr_30929_33114[(1)] = (5));


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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_30932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30932[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_30932[(1)] = (1));

return statearr_30932;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_30885){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_30885);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e30935){if((e30935 instanceof Object)){
var ex__28213__auto__ = e30935;
var statearr_30938_33116 = state_30885;
(statearr_30938_33116[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30935;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33119 = state_30885;
state_30885 = G__33119;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_30885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_30885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_30943 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_30943[(6)] = c__28521__auto___33048);

return statearr_30943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30953 = arguments.length;
switch (G__30953) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28521__auto___33123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_30986){
var state_val_30988 = (state_30986[(1)]);
if((state_val_30988 === (7))){
var inst_30964 = (state_30986[(7)]);
var inst_30965 = (state_30986[(8)]);
var inst_30964__$1 = (state_30986[(2)]);
var inst_30965__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30964__$1,(0),null);
var inst_30966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30964__$1,(1),null);
var inst_30967 = (inst_30965__$1 == null);
var state_30986__$1 = (function (){var statearr_30989 = state_30986;
(statearr_30989[(9)] = inst_30966);

(statearr_30989[(7)] = inst_30964__$1);

(statearr_30989[(8)] = inst_30965__$1);

return statearr_30989;
})();
if(cljs.core.truth_(inst_30967)){
var statearr_30990_33125 = state_30986__$1;
(statearr_30990_33125[(1)] = (8));

} else {
var statearr_30991_33126 = state_30986__$1;
(statearr_30991_33126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30988 === (1))){
var inst_30954 = cljs.core.vec(chs);
var inst_30955 = inst_30954;
var state_30986__$1 = (function (){var statearr_30993 = state_30986;
(statearr_30993[(10)] = inst_30955);

return statearr_30993;
})();
var statearr_30994_33140 = state_30986__$1;
(statearr_30994_33140[(2)] = null);

(statearr_30994_33140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30988 === (4))){
var inst_30955 = (state_30986[(10)]);
var state_30986__$1 = state_30986;
return cljs.core.async.ioc_alts_BANG_(state_30986__$1,(7),inst_30955);
} else {
if((state_val_30988 === (6))){
var inst_30981 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_30997_33145 = state_30986__$1;
(statearr_30997_33145[(2)] = inst_30981);

(statearr_30997_33145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30988 === (3))){
var inst_30983 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30986__$1,inst_30983);
} else {
if((state_val_30988 === (2))){
var inst_30955 = (state_30986[(10)]);
var inst_30957 = cljs.core.count(inst_30955);
var inst_30958 = (inst_30957 > (0));
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30958)){
var statearr_30999_33149 = state_30986__$1;
(statearr_30999_33149[(1)] = (4));

} else {
var statearr_31000_33151 = state_30986__$1;
(statearr_31000_33151[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30988 === (11))){
var inst_30955 = (state_30986[(10)]);
var inst_30974 = (state_30986[(2)]);
var tmp30998 = inst_30955;
var inst_30955__$1 = tmp30998;
var state_30986__$1 = (function (){var statearr_31001 = state_30986;
(statearr_31001[(10)] = inst_30955__$1);

(statearr_31001[(11)] = inst_30974);

return statearr_31001;
})();
var statearr_31002_33157 = state_30986__$1;
(statearr_31002_33157[(2)] = null);

(statearr_31002_33157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30988 === (9))){
var inst_30965 = (state_30986[(8)]);
var state_30986__$1 = state_30986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30986__$1,(11),out,inst_30965);
} else {
if((state_val_30988 === (5))){
var inst_30979 = cljs.core.async.close_BANG_(out);
var state_30986__$1 = state_30986;
var statearr_31006_33165 = state_30986__$1;
(statearr_31006_33165[(2)] = inst_30979);

(statearr_31006_33165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30988 === (10))){
var inst_30977 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31007_33178 = state_30986__$1;
(statearr_31007_33178[(2)] = inst_30977);

(statearr_31007_33178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30988 === (8))){
var inst_30966 = (state_30986[(9)]);
var inst_30964 = (state_30986[(7)]);
var inst_30965 = (state_30986[(8)]);
var inst_30955 = (state_30986[(10)]);
var inst_30969 = (function (){var cs = inst_30955;
var vec__30960 = inst_30964;
var v = inst_30965;
var c = inst_30966;
return (function (p1__30949_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30949_SHARP_);
});
})();
var inst_30970 = cljs.core.filterv(inst_30969,inst_30955);
var inst_30955__$1 = inst_30970;
var state_30986__$1 = (function (){var statearr_31009 = state_30986;
(statearr_31009[(10)] = inst_30955__$1);

return statearr_31009;
})();
var statearr_31010_33182 = state_30986__$1;
(statearr_31010_33182[(2)] = null);

(statearr_31010_33182[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_31011 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31011[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_31011[(1)] = (1));

return statearr_31011;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_30986){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_30986);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e31012){if((e31012 instanceof Object)){
var ex__28213__auto__ = e31012;
var statearr_31013_33187 = state_30986;
(statearr_31013_33187[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31012;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33190 = state_30986;
state_30986 = G__33190;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_30986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_30986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_31016 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_31016[(6)] = c__28521__auto___33123);

return statearr_31016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31021 = arguments.length;
switch (G__31021) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28521__auto___33202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_31062){
var state_val_31063 = (state_31062[(1)]);
if((state_val_31063 === (7))){
var inst_31044 = (state_31062[(7)]);
var inst_31044__$1 = (state_31062[(2)]);
var inst_31045 = (inst_31044__$1 == null);
var inst_31046 = cljs.core.not(inst_31045);
var state_31062__$1 = (function (){var statearr_31071 = state_31062;
(statearr_31071[(7)] = inst_31044__$1);

return statearr_31071;
})();
if(inst_31046){
var statearr_31072_33206 = state_31062__$1;
(statearr_31072_33206[(1)] = (8));

} else {
var statearr_31073_33207 = state_31062__$1;
(statearr_31073_33207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (1))){
var inst_31035 = (0);
var state_31062__$1 = (function (){var statearr_31080 = state_31062;
(statearr_31080[(8)] = inst_31035);

return statearr_31080;
})();
var statearr_31081_33215 = state_31062__$1;
(statearr_31081_33215[(2)] = null);

(statearr_31081_33215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (4))){
var state_31062__$1 = state_31062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31062__$1,(7),ch);
} else {
if((state_val_31063 === (6))){
var inst_31057 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31088_33226 = state_31062__$1;
(statearr_31088_33226[(2)] = inst_31057);

(statearr_31088_33226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (3))){
var inst_31059 = (state_31062[(2)]);
var inst_31060 = cljs.core.async.close_BANG_(out);
var state_31062__$1 = (function (){var statearr_31091 = state_31062;
(statearr_31091[(9)] = inst_31059);

return statearr_31091;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31062__$1,inst_31060);
} else {
if((state_val_31063 === (2))){
var inst_31035 = (state_31062[(8)]);
var inst_31037 = (inst_31035 < n);
var state_31062__$1 = state_31062;
if(cljs.core.truth_(inst_31037)){
var statearr_31092_33237 = state_31062__$1;
(statearr_31092_33237[(1)] = (4));

} else {
var statearr_31095_33238 = state_31062__$1;
(statearr_31095_33238[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (11))){
var inst_31035 = (state_31062[(8)]);
var inst_31049 = (state_31062[(2)]);
var inst_31050 = (inst_31035 + (1));
var inst_31035__$1 = inst_31050;
var state_31062__$1 = (function (){var statearr_31096 = state_31062;
(statearr_31096[(8)] = inst_31035__$1);

(statearr_31096[(10)] = inst_31049);

return statearr_31096;
})();
var statearr_31097_33247 = state_31062__$1;
(statearr_31097_33247[(2)] = null);

(statearr_31097_33247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (9))){
var state_31062__$1 = state_31062;
var statearr_31098_33255 = state_31062__$1;
(statearr_31098_33255[(2)] = null);

(statearr_31098_33255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (5))){
var state_31062__$1 = state_31062;
var statearr_31099_33256 = state_31062__$1;
(statearr_31099_33256[(2)] = null);

(statearr_31099_33256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (10))){
var inst_31054 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31101_33262 = state_31062__$1;
(statearr_31101_33262[(2)] = inst_31054);

(statearr_31101_33262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (8))){
var inst_31044 = (state_31062[(7)]);
var state_31062__$1 = state_31062;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31062__$1,(11),out,inst_31044);
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
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_31102 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31102[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_31102[(1)] = (1));

return statearr_31102;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_31062){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_31062);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e31103){if((e31103 instanceof Object)){
var ex__28213__auto__ = e31103;
var statearr_31104_33279 = state_31062;
(statearr_31104_33279[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31103;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33282 = state_31062;
state_31062 = G__33282;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_31062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_31062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_31105 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_31105[(6)] = c__28521__auto___33202);

return statearr_31105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31108 = (function (f,ch,meta31109){
this.f = f;
this.ch = ch;
this.meta31109 = meta31109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31110,meta31109__$1){
var self__ = this;
var _31110__$1 = this;
return (new cljs.core.async.t_cljs$core$async31108(self__.f,self__.ch,meta31109__$1));
}));

(cljs.core.async.t_cljs$core$async31108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31110){
var self__ = this;
var _31110__$1 = this;
return self__.meta31109;
}));

(cljs.core.async.t_cljs$core$async31108.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31108.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31108.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31108.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31108.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31115 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31115 = (function (f,ch,meta31109,_,fn1,meta31116){
this.f = f;
this.ch = ch;
this.meta31109 = meta31109;
this._ = _;
this.fn1 = fn1;
this.meta31116 = meta31116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31117,meta31116__$1){
var self__ = this;
var _31117__$1 = this;
return (new cljs.core.async.t_cljs$core$async31115(self__.f,self__.ch,self__.meta31109,self__._,self__.fn1,meta31116__$1));
}));

(cljs.core.async.t_cljs$core$async31115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31117){
var self__ = this;
var _31117__$1 = this;
return self__.meta31116;
}));

(cljs.core.async.t_cljs$core$async31115.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31115.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31115.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31115.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31107_SHARP_){
var G__31119 = (((p1__31107_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31107_SHARP_) : self__.f.call(null,p1__31107_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31119) : f1.call(null,G__31119));
});
}));

(cljs.core.async.t_cljs$core$async31115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31109","meta31109",1411543542,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31108","cljs.core.async/t_cljs$core$async31108",2105285056,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31116","meta31116",79610267,null)], null);
}));

(cljs.core.async.t_cljs$core$async31115.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31115");

(cljs.core.async.t_cljs$core$async31115.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31115");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31115.
 */
cljs.core.async.__GT_t_cljs$core$async31115 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31115(f__$1,ch__$1,meta31109__$1,___$2,fn1__$1,meta31116){
return (new cljs.core.async.t_cljs$core$async31115(f__$1,ch__$1,meta31109__$1,___$2,fn1__$1,meta31116));
});

}

return (new cljs.core.async.t_cljs$core$async31115(self__.f,self__.ch,self__.meta31109,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31126 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31126) : self__.f.call(null,G__31126));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31108.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31108.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31109","meta31109",1411543542,null)], null);
}));

(cljs.core.async.t_cljs$core$async31108.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31108");

(cljs.core.async.t_cljs$core$async31108.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31108");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31108.
 */
cljs.core.async.__GT_t_cljs$core$async31108 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31108(f__$1,ch__$1,meta31109){
return (new cljs.core.async.t_cljs$core$async31108(f__$1,ch__$1,meta31109));
});

}

return (new cljs.core.async.t_cljs$core$async31108(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31128 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31128 = (function (f,ch,meta31129){
this.f = f;
this.ch = ch;
this.meta31129 = meta31129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31130,meta31129__$1){
var self__ = this;
var _31130__$1 = this;
return (new cljs.core.async.t_cljs$core$async31128(self__.f,self__.ch,meta31129__$1));
}));

(cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31130){
var self__ = this;
var _31130__$1 = this;
return self__.meta31129;
}));

(cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31129","meta31129",1501844187,null)], null);
}));

(cljs.core.async.t_cljs$core$async31128.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31128");

(cljs.core.async.t_cljs$core$async31128.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31128");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31128.
 */
cljs.core.async.__GT_t_cljs$core$async31128 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31128(f__$1,ch__$1,meta31129){
return (new cljs.core.async.t_cljs$core$async31128(f__$1,ch__$1,meta31129));
});

}

return (new cljs.core.async.t_cljs$core$async31128(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31137 = (function (p,ch,meta31138){
this.p = p;
this.ch = ch;
this.meta31138 = meta31138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31139,meta31138__$1){
var self__ = this;
var _31139__$1 = this;
return (new cljs.core.async.t_cljs$core$async31137(self__.p,self__.ch,meta31138__$1));
}));

(cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31139){
var self__ = this;
var _31139__$1 = this;
return self__.meta31138;
}));

(cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31138","meta31138",192965016,null)], null);
}));

(cljs.core.async.t_cljs$core$async31137.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31137");

(cljs.core.async.t_cljs$core$async31137.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31137");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31137.
 */
cljs.core.async.__GT_t_cljs$core$async31137 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31137(p__$1,ch__$1,meta31138){
return (new cljs.core.async.t_cljs$core$async31137(p__$1,ch__$1,meta31138));
});

}

return (new cljs.core.async.t_cljs$core$async31137(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31150 = arguments.length;
switch (G__31150) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28521__auto___33388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_31173){
var state_val_31174 = (state_31173[(1)]);
if((state_val_31174 === (7))){
var inst_31169 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
var statearr_31176_33397 = state_31173__$1;
(statearr_31176_33397[(2)] = inst_31169);

(statearr_31176_33397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (1))){
var state_31173__$1 = state_31173;
var statearr_31177_33398 = state_31173__$1;
(statearr_31177_33398[(2)] = null);

(statearr_31177_33398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (4))){
var inst_31155 = (state_31173[(7)]);
var inst_31155__$1 = (state_31173[(2)]);
var inst_31156 = (inst_31155__$1 == null);
var state_31173__$1 = (function (){var statearr_31182 = state_31173;
(statearr_31182[(7)] = inst_31155__$1);

return statearr_31182;
})();
if(cljs.core.truth_(inst_31156)){
var statearr_31183_33403 = state_31173__$1;
(statearr_31183_33403[(1)] = (5));

} else {
var statearr_31184_33404 = state_31173__$1;
(statearr_31184_33404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (6))){
var inst_31155 = (state_31173[(7)]);
var inst_31160 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31155) : p.call(null,inst_31155));
var state_31173__$1 = state_31173;
if(cljs.core.truth_(inst_31160)){
var statearr_31185_33406 = state_31173__$1;
(statearr_31185_33406[(1)] = (8));

} else {
var statearr_31186_33409 = state_31173__$1;
(statearr_31186_33409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (3))){
var inst_31171 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31173__$1,inst_31171);
} else {
if((state_val_31174 === (2))){
var state_31173__$1 = state_31173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31173__$1,(4),ch);
} else {
if((state_val_31174 === (11))){
var inst_31163 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
var statearr_31189_33412 = state_31173__$1;
(statearr_31189_33412[(2)] = inst_31163);

(statearr_31189_33412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (9))){
var state_31173__$1 = state_31173;
var statearr_31192_33417 = state_31173__$1;
(statearr_31192_33417[(2)] = null);

(statearr_31192_33417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (5))){
var inst_31158 = cljs.core.async.close_BANG_(out);
var state_31173__$1 = state_31173;
var statearr_31199_33419 = state_31173__$1;
(statearr_31199_33419[(2)] = inst_31158);

(statearr_31199_33419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (10))){
var inst_31166 = (state_31173[(2)]);
var state_31173__$1 = (function (){var statearr_31201 = state_31173;
(statearr_31201[(8)] = inst_31166);

return statearr_31201;
})();
var statearr_31202_33421 = state_31173__$1;
(statearr_31202_33421[(2)] = null);

(statearr_31202_33421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (8))){
var inst_31155 = (state_31173[(7)]);
var state_31173__$1 = state_31173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31173__$1,(11),out,inst_31155);
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
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_31207 = [null,null,null,null,null,null,null,null,null];
(statearr_31207[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_31207[(1)] = (1));

return statearr_31207;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_31173){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_31173);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e31208){if((e31208 instanceof Object)){
var ex__28213__auto__ = e31208;
var statearr_31209_33438 = state_31173;
(statearr_31209_33438[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31208;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33445 = state_31173;
state_31173 = G__33445;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_31173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_31173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_31211 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_31211[(6)] = c__28521__auto___33388);

return statearr_31211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31214 = arguments.length;
switch (G__31214) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_31295){
var state_val_31296 = (state_31295[(1)]);
if((state_val_31296 === (7))){
var inst_31291 = (state_31295[(2)]);
var state_31295__$1 = state_31295;
var statearr_31300_33476 = state_31295__$1;
(statearr_31300_33476[(2)] = inst_31291);

(statearr_31300_33476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (20))){
var inst_31252 = (state_31295[(7)]);
var inst_31268 = (state_31295[(2)]);
var inst_31269 = cljs.core.next(inst_31252);
var inst_31234 = inst_31269;
var inst_31235 = null;
var inst_31236 = (0);
var inst_31237 = (0);
var state_31295__$1 = (function (){var statearr_31306 = state_31295;
(statearr_31306[(8)] = inst_31236);

(statearr_31306[(9)] = inst_31234);

(statearr_31306[(10)] = inst_31235);

(statearr_31306[(11)] = inst_31237);

(statearr_31306[(12)] = inst_31268);

return statearr_31306;
})();
var statearr_31307_33489 = state_31295__$1;
(statearr_31307_33489[(2)] = null);

(statearr_31307_33489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (1))){
var state_31295__$1 = state_31295;
var statearr_31309_33490 = state_31295__$1;
(statearr_31309_33490[(2)] = null);

(statearr_31309_33490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (4))){
var inst_31222 = (state_31295[(13)]);
var inst_31222__$1 = (state_31295[(2)]);
var inst_31224 = (inst_31222__$1 == null);
var state_31295__$1 = (function (){var statearr_31310 = state_31295;
(statearr_31310[(13)] = inst_31222__$1);

return statearr_31310;
})();
if(cljs.core.truth_(inst_31224)){
var statearr_31311_33501 = state_31295__$1;
(statearr_31311_33501[(1)] = (5));

} else {
var statearr_31312_33502 = state_31295__$1;
(statearr_31312_33502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (15))){
var state_31295__$1 = state_31295;
var statearr_31316_33504 = state_31295__$1;
(statearr_31316_33504[(2)] = null);

(statearr_31316_33504[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (21))){
var state_31295__$1 = state_31295;
var statearr_31317_33511 = state_31295__$1;
(statearr_31317_33511[(2)] = null);

(statearr_31317_33511[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (13))){
var inst_31236 = (state_31295[(8)]);
var inst_31234 = (state_31295[(9)]);
var inst_31235 = (state_31295[(10)]);
var inst_31237 = (state_31295[(11)]);
var inst_31248 = (state_31295[(2)]);
var inst_31249 = (inst_31237 + (1));
var tmp31313 = inst_31236;
var tmp31314 = inst_31234;
var tmp31315 = inst_31235;
var inst_31234__$1 = tmp31314;
var inst_31235__$1 = tmp31315;
var inst_31236__$1 = tmp31313;
var inst_31237__$1 = inst_31249;
var state_31295__$1 = (function (){var statearr_31319 = state_31295;
(statearr_31319[(8)] = inst_31236__$1);

(statearr_31319[(9)] = inst_31234__$1);

(statearr_31319[(10)] = inst_31235__$1);

(statearr_31319[(14)] = inst_31248);

(statearr_31319[(11)] = inst_31237__$1);

return statearr_31319;
})();
var statearr_31320_33525 = state_31295__$1;
(statearr_31320_33525[(2)] = null);

(statearr_31320_33525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (22))){
var state_31295__$1 = state_31295;
var statearr_31322_33529 = state_31295__$1;
(statearr_31322_33529[(2)] = null);

(statearr_31322_33529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (6))){
var inst_31222 = (state_31295[(13)]);
var inst_31232 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31222) : f.call(null,inst_31222));
var inst_31233 = cljs.core.seq(inst_31232);
var inst_31234 = inst_31233;
var inst_31235 = null;
var inst_31236 = (0);
var inst_31237 = (0);
var state_31295__$1 = (function (){var statearr_31323 = state_31295;
(statearr_31323[(8)] = inst_31236);

(statearr_31323[(9)] = inst_31234);

(statearr_31323[(10)] = inst_31235);

(statearr_31323[(11)] = inst_31237);

return statearr_31323;
})();
var statearr_31324_33541 = state_31295__$1;
(statearr_31324_33541[(2)] = null);

(statearr_31324_33541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (17))){
var inst_31252 = (state_31295[(7)]);
var inst_31261 = cljs.core.chunk_first(inst_31252);
var inst_31262 = cljs.core.chunk_rest(inst_31252);
var inst_31263 = cljs.core.count(inst_31261);
var inst_31234 = inst_31262;
var inst_31235 = inst_31261;
var inst_31236 = inst_31263;
var inst_31237 = (0);
var state_31295__$1 = (function (){var statearr_31328 = state_31295;
(statearr_31328[(8)] = inst_31236);

(statearr_31328[(9)] = inst_31234);

(statearr_31328[(10)] = inst_31235);

(statearr_31328[(11)] = inst_31237);

return statearr_31328;
})();
var statearr_31329_33555 = state_31295__$1;
(statearr_31329_33555[(2)] = null);

(statearr_31329_33555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (3))){
var inst_31293 = (state_31295[(2)]);
var state_31295__$1 = state_31295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31295__$1,inst_31293);
} else {
if((state_val_31296 === (12))){
var inst_31281 = (state_31295[(2)]);
var state_31295__$1 = state_31295;
var statearr_31331_33564 = state_31295__$1;
(statearr_31331_33564[(2)] = inst_31281);

(statearr_31331_33564[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (2))){
var state_31295__$1 = state_31295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31295__$1,(4),in$);
} else {
if((state_val_31296 === (23))){
var inst_31289 = (state_31295[(2)]);
var state_31295__$1 = state_31295;
var statearr_31333_33572 = state_31295__$1;
(statearr_31333_33572[(2)] = inst_31289);

(statearr_31333_33572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (19))){
var inst_31272 = (state_31295[(2)]);
var state_31295__$1 = state_31295;
var statearr_31334_33581 = state_31295__$1;
(statearr_31334_33581[(2)] = inst_31272);

(statearr_31334_33581[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (11))){
var inst_31234 = (state_31295[(9)]);
var inst_31252 = (state_31295[(7)]);
var inst_31252__$1 = cljs.core.seq(inst_31234);
var state_31295__$1 = (function (){var statearr_31338 = state_31295;
(statearr_31338[(7)] = inst_31252__$1);

return statearr_31338;
})();
if(inst_31252__$1){
var statearr_31340_33589 = state_31295__$1;
(statearr_31340_33589[(1)] = (14));

} else {
var statearr_31341_33592 = state_31295__$1;
(statearr_31341_33592[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (9))){
var inst_31283 = (state_31295[(2)]);
var inst_31284 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31295__$1 = (function (){var statearr_31343 = state_31295;
(statearr_31343[(15)] = inst_31283);

return statearr_31343;
})();
if(cljs.core.truth_(inst_31284)){
var statearr_31344_33597 = state_31295__$1;
(statearr_31344_33597[(1)] = (21));

} else {
var statearr_31346_33598 = state_31295__$1;
(statearr_31346_33598[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (5))){
var inst_31226 = cljs.core.async.close_BANG_(out);
var state_31295__$1 = state_31295;
var statearr_31347_33602 = state_31295__$1;
(statearr_31347_33602[(2)] = inst_31226);

(statearr_31347_33602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (14))){
var inst_31252 = (state_31295[(7)]);
var inst_31255 = cljs.core.chunked_seq_QMARK_(inst_31252);
var state_31295__$1 = state_31295;
if(inst_31255){
var statearr_31348_33605 = state_31295__$1;
(statearr_31348_33605[(1)] = (17));

} else {
var statearr_31349_33606 = state_31295__$1;
(statearr_31349_33606[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (16))){
var inst_31275 = (state_31295[(2)]);
var state_31295__$1 = state_31295;
var statearr_31350_33608 = state_31295__$1;
(statearr_31350_33608[(2)] = inst_31275);

(statearr_31350_33608[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (10))){
var inst_31235 = (state_31295[(10)]);
var inst_31237 = (state_31295[(11)]);
var inst_31244 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31235,inst_31237);
var state_31295__$1 = state_31295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31295__$1,(13),out,inst_31244);
} else {
if((state_val_31296 === (18))){
var inst_31252 = (state_31295[(7)]);
var inst_31266 = cljs.core.first(inst_31252);
var state_31295__$1 = state_31295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31295__$1,(20),out,inst_31266);
} else {
if((state_val_31296 === (8))){
var inst_31236 = (state_31295[(8)]);
var inst_31237 = (state_31295[(11)]);
var inst_31241 = (inst_31237 < inst_31236);
var inst_31242 = inst_31241;
var state_31295__$1 = state_31295;
if(cljs.core.truth_(inst_31242)){
var statearr_31352_33614 = state_31295__$1;
(statearr_31352_33614[(1)] = (10));

} else {
var statearr_31353_33615 = state_31295__$1;
(statearr_31353_33615[(1)] = (11));

}

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
var cljs$core$async$mapcat_STAR__$_state_machine__28210__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28210__auto____0 = (function (){
var statearr_31354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31354[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28210__auto__);

(statearr_31354[(1)] = (1));

return statearr_31354;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28210__auto____1 = (function (state_31295){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_31295);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e31355){if((e31355 instanceof Object)){
var ex__28213__auto__ = e31355;
var statearr_31356_33617 = state_31295;
(statearr_31356_33617[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31355;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33626 = state_31295;
state_31295 = G__33626;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28210__auto__ = function(state_31295){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28210__auto____1.call(this,state_31295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28210__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28210__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_31358 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_31358[(6)] = c__28521__auto__);

return statearr_31358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));

return c__28521__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31361 = arguments.length;
switch (G__31361) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31369 = arguments.length;
switch (G__31369) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31389 = arguments.length;
switch (G__31389) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28521__auto___33672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_31418){
var state_val_31419 = (state_31418[(1)]);
if((state_val_31419 === (7))){
var inst_31413 = (state_31418[(2)]);
var state_31418__$1 = state_31418;
var statearr_31421_33675 = state_31418__$1;
(statearr_31421_33675[(2)] = inst_31413);

(statearr_31421_33675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (1))){
var inst_31395 = null;
var state_31418__$1 = (function (){var statearr_31422 = state_31418;
(statearr_31422[(7)] = inst_31395);

return statearr_31422;
})();
var statearr_31423_33684 = state_31418__$1;
(statearr_31423_33684[(2)] = null);

(statearr_31423_33684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (4))){
var inst_31398 = (state_31418[(8)]);
var inst_31398__$1 = (state_31418[(2)]);
var inst_31399 = (inst_31398__$1 == null);
var inst_31400 = cljs.core.not(inst_31399);
var state_31418__$1 = (function (){var statearr_31424 = state_31418;
(statearr_31424[(8)] = inst_31398__$1);

return statearr_31424;
})();
if(inst_31400){
var statearr_31425_33693 = state_31418__$1;
(statearr_31425_33693[(1)] = (5));

} else {
var statearr_31426_33697 = state_31418__$1;
(statearr_31426_33697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (6))){
var state_31418__$1 = state_31418;
var statearr_31429_33709 = state_31418__$1;
(statearr_31429_33709[(2)] = null);

(statearr_31429_33709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (3))){
var inst_31415 = (state_31418[(2)]);
var inst_31416 = cljs.core.async.close_BANG_(out);
var state_31418__$1 = (function (){var statearr_31431 = state_31418;
(statearr_31431[(9)] = inst_31415);

return statearr_31431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31418__$1,inst_31416);
} else {
if((state_val_31419 === (2))){
var state_31418__$1 = state_31418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31418__$1,(4),ch);
} else {
if((state_val_31419 === (11))){
var inst_31398 = (state_31418[(8)]);
var inst_31407 = (state_31418[(2)]);
var inst_31395 = inst_31398;
var state_31418__$1 = (function (){var statearr_31432 = state_31418;
(statearr_31432[(7)] = inst_31395);

(statearr_31432[(10)] = inst_31407);

return statearr_31432;
})();
var statearr_31433_33764 = state_31418__$1;
(statearr_31433_33764[(2)] = null);

(statearr_31433_33764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (9))){
var inst_31398 = (state_31418[(8)]);
var state_31418__$1 = state_31418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31418__$1,(11),out,inst_31398);
} else {
if((state_val_31419 === (5))){
var inst_31398 = (state_31418[(8)]);
var inst_31395 = (state_31418[(7)]);
var inst_31402 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31398,inst_31395);
var state_31418__$1 = state_31418;
if(inst_31402){
var statearr_31437_33780 = state_31418__$1;
(statearr_31437_33780[(1)] = (8));

} else {
var statearr_31438_33781 = state_31418__$1;
(statearr_31438_33781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (10))){
var inst_31410 = (state_31418[(2)]);
var state_31418__$1 = state_31418;
var statearr_31439_33788 = state_31418__$1;
(statearr_31439_33788[(2)] = inst_31410);

(statearr_31439_33788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31419 === (8))){
var inst_31395 = (state_31418[(7)]);
var tmp31434 = inst_31395;
var inst_31395__$1 = tmp31434;
var state_31418__$1 = (function (){var statearr_31442 = state_31418;
(statearr_31442[(7)] = inst_31395__$1);

return statearr_31442;
})();
var statearr_31444_33801 = state_31418__$1;
(statearr_31444_33801[(2)] = null);

(statearr_31444_33801[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_31445 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31445[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_31445[(1)] = (1));

return statearr_31445;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_31418){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_31418);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e31446){if((e31446 instanceof Object)){
var ex__28213__auto__ = e31446;
var statearr_31447_33814 = state_31418;
(statearr_31447_33814[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31446;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33816 = state_31418;
state_31418 = G__33816;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_31418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_31418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_31448 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_31448[(6)] = c__28521__auto___33672);

return statearr_31448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31454 = arguments.length;
switch (G__31454) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28521__auto___33824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_31500){
var state_val_31501 = (state_31500[(1)]);
if((state_val_31501 === (7))){
var inst_31493 = (state_31500[(2)]);
var state_31500__$1 = state_31500;
var statearr_31502_33827 = state_31500__$1;
(statearr_31502_33827[(2)] = inst_31493);

(statearr_31502_33827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (1))){
var inst_31456 = (new Array(n));
var inst_31457 = inst_31456;
var inst_31458 = (0);
var state_31500__$1 = (function (){var statearr_31506 = state_31500;
(statearr_31506[(7)] = inst_31458);

(statearr_31506[(8)] = inst_31457);

return statearr_31506;
})();
var statearr_31507_33832 = state_31500__$1;
(statearr_31507_33832[(2)] = null);

(statearr_31507_33832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (4))){
var inst_31461 = (state_31500[(9)]);
var inst_31461__$1 = (state_31500[(2)]);
var inst_31463 = (inst_31461__$1 == null);
var inst_31464 = cljs.core.not(inst_31463);
var state_31500__$1 = (function (){var statearr_31510 = state_31500;
(statearr_31510[(9)] = inst_31461__$1);

return statearr_31510;
})();
if(inst_31464){
var statearr_31511_33834 = state_31500__$1;
(statearr_31511_33834[(1)] = (5));

} else {
var statearr_31512_33835 = state_31500__$1;
(statearr_31512_33835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (15))){
var inst_31487 = (state_31500[(2)]);
var state_31500__$1 = state_31500;
var statearr_31514_33837 = state_31500__$1;
(statearr_31514_33837[(2)] = inst_31487);

(statearr_31514_33837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (13))){
var state_31500__$1 = state_31500;
var statearr_31515_33839 = state_31500__$1;
(statearr_31515_33839[(2)] = null);

(statearr_31515_33839[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (6))){
var inst_31458 = (state_31500[(7)]);
var inst_31482 = (inst_31458 > (0));
var state_31500__$1 = state_31500;
if(cljs.core.truth_(inst_31482)){
var statearr_31517_33840 = state_31500__$1;
(statearr_31517_33840[(1)] = (12));

} else {
var statearr_31518_33842 = state_31500__$1;
(statearr_31518_33842[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (3))){
var inst_31496 = (state_31500[(2)]);
var state_31500__$1 = state_31500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31500__$1,inst_31496);
} else {
if((state_val_31501 === (12))){
var inst_31457 = (state_31500[(8)]);
var inst_31485 = cljs.core.vec(inst_31457);
var state_31500__$1 = state_31500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31500__$1,(15),out,inst_31485);
} else {
if((state_val_31501 === (2))){
var state_31500__$1 = state_31500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31500__$1,(4),ch);
} else {
if((state_val_31501 === (11))){
var inst_31475 = (state_31500[(2)]);
var inst_31476 = (new Array(n));
var inst_31457 = inst_31476;
var inst_31458 = (0);
var state_31500__$1 = (function (){var statearr_31521 = state_31500;
(statearr_31521[(7)] = inst_31458);

(statearr_31521[(10)] = inst_31475);

(statearr_31521[(8)] = inst_31457);

return statearr_31521;
})();
var statearr_31524_33862 = state_31500__$1;
(statearr_31524_33862[(2)] = null);

(statearr_31524_33862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (9))){
var inst_31457 = (state_31500[(8)]);
var inst_31473 = cljs.core.vec(inst_31457);
var state_31500__$1 = state_31500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31500__$1,(11),out,inst_31473);
} else {
if((state_val_31501 === (5))){
var inst_31461 = (state_31500[(9)]);
var inst_31458 = (state_31500[(7)]);
var inst_31467 = (state_31500[(11)]);
var inst_31457 = (state_31500[(8)]);
var inst_31466 = (inst_31457[inst_31458] = inst_31461);
var inst_31467__$1 = (inst_31458 + (1));
var inst_31468 = (inst_31467__$1 < n);
var state_31500__$1 = (function (){var statearr_31528 = state_31500;
(statearr_31528[(12)] = inst_31466);

(statearr_31528[(11)] = inst_31467__$1);

return statearr_31528;
})();
if(cljs.core.truth_(inst_31468)){
var statearr_31530_33875 = state_31500__$1;
(statearr_31530_33875[(1)] = (8));

} else {
var statearr_31531_33876 = state_31500__$1;
(statearr_31531_33876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (14))){
var inst_31490 = (state_31500[(2)]);
var inst_31491 = cljs.core.async.close_BANG_(out);
var state_31500__$1 = (function (){var statearr_31534 = state_31500;
(statearr_31534[(13)] = inst_31490);

return statearr_31534;
})();
var statearr_31535_33884 = state_31500__$1;
(statearr_31535_33884[(2)] = inst_31491);

(statearr_31535_33884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (10))){
var inst_31479 = (state_31500[(2)]);
var state_31500__$1 = state_31500;
var statearr_31536_33897 = state_31500__$1;
(statearr_31536_33897[(2)] = inst_31479);

(statearr_31536_33897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31501 === (8))){
var inst_31467 = (state_31500[(11)]);
var inst_31457 = (state_31500[(8)]);
var tmp31532 = inst_31457;
var inst_31457__$1 = tmp31532;
var inst_31458 = inst_31467;
var state_31500__$1 = (function (){var statearr_31537 = state_31500;
(statearr_31537[(7)] = inst_31458);

(statearr_31537[(8)] = inst_31457__$1);

return statearr_31537;
})();
var statearr_31538_33908 = state_31500__$1;
(statearr_31538_33908[(2)] = null);

(statearr_31538_33908[(1)] = (2));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_31548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31548[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_31548[(1)] = (1));

return statearr_31548;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_31500){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_31500);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e31549){if((e31549 instanceof Object)){
var ex__28213__auto__ = e31549;
var statearr_31550_33913 = state_31500;
(statearr_31550_33913[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31549;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33918 = state_31500;
state_31500 = G__33918;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_31500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_31500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_31555 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_31555[(6)] = c__28521__auto___33824);

return statearr_31555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31562 = arguments.length;
switch (G__31562) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28521__auto___33928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28522__auto__ = (function (){var switch__28209__auto__ = (function (state_31618){
var state_val_31619 = (state_31618[(1)]);
if((state_val_31619 === (7))){
var inst_31614 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
var statearr_31625_33932 = state_31618__$1;
(statearr_31625_33932[(2)] = inst_31614);

(statearr_31625_33932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (1))){
var inst_31567 = [];
var inst_31568 = inst_31567;
var inst_31569 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31618__$1 = (function (){var statearr_31628 = state_31618;
(statearr_31628[(7)] = inst_31569);

(statearr_31628[(8)] = inst_31568);

return statearr_31628;
})();
var statearr_31630_33940 = state_31618__$1;
(statearr_31630_33940[(2)] = null);

(statearr_31630_33940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (4))){
var inst_31572 = (state_31618[(9)]);
var inst_31572__$1 = (state_31618[(2)]);
var inst_31573 = (inst_31572__$1 == null);
var inst_31574 = cljs.core.not(inst_31573);
var state_31618__$1 = (function (){var statearr_31633 = state_31618;
(statearr_31633[(9)] = inst_31572__$1);

return statearr_31633;
})();
if(inst_31574){
var statearr_31635_33945 = state_31618__$1;
(statearr_31635_33945[(1)] = (5));

} else {
var statearr_31636_33946 = state_31618__$1;
(statearr_31636_33946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (15))){
var inst_31607 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
var statearr_31641_33954 = state_31618__$1;
(statearr_31641_33954[(2)] = inst_31607);

(statearr_31641_33954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (13))){
var state_31618__$1 = state_31618;
var statearr_31646_33959 = state_31618__$1;
(statearr_31646_33959[(2)] = null);

(statearr_31646_33959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (6))){
var inst_31568 = (state_31618[(8)]);
var inst_31601 = inst_31568.length;
var inst_31603 = (inst_31601 > (0));
var state_31618__$1 = state_31618;
if(cljs.core.truth_(inst_31603)){
var statearr_31648_33967 = state_31618__$1;
(statearr_31648_33967[(1)] = (12));

} else {
var statearr_31649_33971 = state_31618__$1;
(statearr_31649_33971[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (3))){
var inst_31616 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31618__$1,inst_31616);
} else {
if((state_val_31619 === (12))){
var inst_31568 = (state_31618[(8)]);
var inst_31605 = cljs.core.vec(inst_31568);
var state_31618__$1 = state_31618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31618__$1,(15),out,inst_31605);
} else {
if((state_val_31619 === (2))){
var state_31618__$1 = state_31618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31618__$1,(4),ch);
} else {
if((state_val_31619 === (11))){
var inst_31572 = (state_31618[(9)]);
var inst_31577 = (state_31618[(10)]);
var inst_31592 = (state_31618[(2)]);
var inst_31594 = [];
var inst_31595 = inst_31594.push(inst_31572);
var inst_31568 = inst_31594;
var inst_31569 = inst_31577;
var state_31618__$1 = (function (){var statearr_31657 = state_31618;
(statearr_31657[(7)] = inst_31569);

(statearr_31657[(8)] = inst_31568);

(statearr_31657[(11)] = inst_31595);

(statearr_31657[(12)] = inst_31592);

return statearr_31657;
})();
var statearr_31658_33979 = state_31618__$1;
(statearr_31658_33979[(2)] = null);

(statearr_31658_33979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (9))){
var inst_31568 = (state_31618[(8)]);
var inst_31589 = cljs.core.vec(inst_31568);
var state_31618__$1 = state_31618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31618__$1,(11),out,inst_31589);
} else {
if((state_val_31619 === (5))){
var inst_31572 = (state_31618[(9)]);
var inst_31577 = (state_31618[(10)]);
var inst_31569 = (state_31618[(7)]);
var inst_31577__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31572) : f.call(null,inst_31572));
var inst_31580 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31577__$1,inst_31569);
var inst_31582 = cljs.core.keyword_identical_QMARK_(inst_31569,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31583 = ((inst_31580) || (inst_31582));
var state_31618__$1 = (function (){var statearr_31665 = state_31618;
(statearr_31665[(10)] = inst_31577__$1);

return statearr_31665;
})();
if(cljs.core.truth_(inst_31583)){
var statearr_31669_33981 = state_31618__$1;
(statearr_31669_33981[(1)] = (8));

} else {
var statearr_31670_33982 = state_31618__$1;
(statearr_31670_33982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (14))){
var inst_31610 = (state_31618[(2)]);
var inst_31611 = cljs.core.async.close_BANG_(out);
var state_31618__$1 = (function (){var statearr_31673 = state_31618;
(statearr_31673[(13)] = inst_31610);

return statearr_31673;
})();
var statearr_31674_33985 = state_31618__$1;
(statearr_31674_33985[(2)] = inst_31611);

(statearr_31674_33985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (10))){
var inst_31598 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
var statearr_31676_33986 = state_31618__$1;
(statearr_31676_33986[(2)] = inst_31598);

(statearr_31676_33986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (8))){
var inst_31572 = (state_31618[(9)]);
var inst_31577 = (state_31618[(10)]);
var inst_31568 = (state_31618[(8)]);
var inst_31585 = inst_31568.push(inst_31572);
var tmp31671 = inst_31568;
var inst_31568__$1 = tmp31671;
var inst_31569 = inst_31577;
var state_31618__$1 = (function (){var statearr_31679 = state_31618;
(statearr_31679[(7)] = inst_31569);

(statearr_31679[(8)] = inst_31568__$1);

(statearr_31679[(14)] = inst_31585);

return statearr_31679;
})();
var statearr_31680_33989 = state_31618__$1;
(statearr_31680_33989[(2)] = null);

(statearr_31680_33989[(1)] = (2));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__28210__auto__ = null;
var cljs$core$async$state_machine__28210__auto____0 = (function (){
var statearr_31682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31682[(0)] = cljs$core$async$state_machine__28210__auto__);

(statearr_31682[(1)] = (1));

return statearr_31682;
});
var cljs$core$async$state_machine__28210__auto____1 = (function (state_31618){
while(true){
var ret_value__28211__auto__ = (function (){try{while(true){
var result__28212__auto__ = switch__28209__auto__(state_31618);
if(cljs.core.keyword_identical_QMARK_(result__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28212__auto__;
}
break;
}
}catch (e31684){if((e31684 instanceof Object)){
var ex__28213__auto__ = e31684;
var statearr_31687_33995 = state_31618;
(statearr_31687_33995[(5)] = ex__28213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31684;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34002 = state_31618;
state_31618 = G__34002;
continue;
} else {
return ret_value__28211__auto__;
}
break;
}
});
cljs$core$async$state_machine__28210__auto__ = function(state_31618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28210__auto____1.call(this,state_31618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28210__auto____0;
cljs$core$async$state_machine__28210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28210__auto____1;
return cljs$core$async$state_machine__28210__auto__;
})()
})();
var state__28523__auto__ = (function (){var statearr_31690 = (f__28522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28522__auto__.cljs$core$IFn$_invoke$arity$0() : f__28522__auto__.call(null));
(statearr_31690[(6)] = c__28521__auto___33928);

return statearr_31690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28523__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
