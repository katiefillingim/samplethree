goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__69380 = arguments.length;
switch (G__69380) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69381 = (function (f,blockable,meta69382){
this.f = f;
this.blockable = blockable;
this.meta69382 = meta69382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69383,meta69382__$1){
var self__ = this;
var _69383__$1 = this;
return (new cljs.core.async.t_cljs$core$async69381(self__.f,self__.blockable,meta69382__$1));
}));

(cljs.core.async.t_cljs$core$async69381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69383){
var self__ = this;
var _69383__$1 = this;
return self__.meta69382;
}));

(cljs.core.async.t_cljs$core$async69381.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69381.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async69381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async69381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta69382","meta69382",-696755284,null)], null);
}));

(cljs.core.async.t_cljs$core$async69381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69381");

(cljs.core.async.t_cljs$core$async69381.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async69381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69381.
 */
cljs.core.async.__GT_t_cljs$core$async69381 = (function cljs$core$async$__GT_t_cljs$core$async69381(f__$1,blockable__$1,meta69382){
return (new cljs.core.async.t_cljs$core$async69381(f__$1,blockable__$1,meta69382));
});

}

return (new cljs.core.async.t_cljs$core$async69381(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__69386 = arguments.length;
switch (G__69386) {
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
var G__69388 = arguments.length;
switch (G__69388) {
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
var G__69390 = arguments.length;
switch (G__69390) {
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
var val_71344 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_71344) : fn1.call(null,val_71344));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_71344) : fn1.call(null,val_71344));
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
var G__69392 = arguments.length;
switch (G__69392) {
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
var n__4613__auto___71346 = n;
var x_71347 = (0);
while(true){
if((x_71347 < n__4613__auto___71346)){
(a[x_71347] = x_71347);

var G__71348 = (x_71347 + (1));
x_71347 = G__71348;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69393 = (function (flag,meta69394){
this.flag = flag;
this.meta69394 = meta69394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69395,meta69394__$1){
var self__ = this;
var _69395__$1 = this;
return (new cljs.core.async.t_cljs$core$async69393(self__.flag,meta69394__$1));
}));

(cljs.core.async.t_cljs$core$async69393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69395){
var self__ = this;
var _69395__$1 = this;
return self__.meta69394;
}));

(cljs.core.async.t_cljs$core$async69393.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async69393.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async69393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta69394","meta69394",-291751233,null)], null);
}));

(cljs.core.async.t_cljs$core$async69393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69393");

(cljs.core.async.t_cljs$core$async69393.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async69393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69393.
 */
cljs.core.async.__GT_t_cljs$core$async69393 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async69393(flag__$1,meta69394){
return (new cljs.core.async.t_cljs$core$async69393(flag__$1,meta69394));
});

}

return (new cljs.core.async.t_cljs$core$async69393(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69396 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69396 = (function (flag,cb,meta69397){
this.flag = flag;
this.cb = cb;
this.meta69397 = meta69397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69398,meta69397__$1){
var self__ = this;
var _69398__$1 = this;
return (new cljs.core.async.t_cljs$core$async69396(self__.flag,self__.cb,meta69397__$1));
}));

(cljs.core.async.t_cljs$core$async69396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69398){
var self__ = this;
var _69398__$1 = this;
return self__.meta69397;
}));

(cljs.core.async.t_cljs$core$async69396.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async69396.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async69396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta69397","meta69397",-54476330,null)], null);
}));

(cljs.core.async.t_cljs$core$async69396.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69396");

(cljs.core.async.t_cljs$core$async69396.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async69396");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69396.
 */
cljs.core.async.__GT_t_cljs$core$async69396 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async69396(flag__$1,cb__$1,meta69397){
return (new cljs.core.async.t_cljs$core$async69396(flag__$1,cb__$1,meta69397));
});

}

return (new cljs.core.async.t_cljs$core$async69396(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__69403_SHARP_){
var G__69405 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69403_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__69405) : fret.call(null,G__69405));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__69404_SHARP_){
var G__69406 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69404_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__69406) : fret.call(null,G__69406));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__71357 = (i + (1));
i = G__71357;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___71362 = arguments.length;
var i__4737__auto___71363 = (0);
while(true){
if((i__4737__auto___71363 < len__4736__auto___71362)){
args__4742__auto__.push((arguments[i__4737__auto___71363]));

var G__71365 = (i__4737__auto___71363 + (1));
i__4737__auto___71363 = G__71365;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__69409){
var map__69410 = p__69409;
var map__69410__$1 = (((((!((map__69410 == null))))?(((((map__69410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69410):map__69410);
var opts = map__69410__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq69407){
var G__69408 = cljs.core.first(seq69407);
var seq69407__$1 = cljs.core.next(seq69407);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69408,seq69407__$1);
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
var G__69415 = arguments.length;
switch (G__69415) {
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
var c__69318__auto___71405 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_69443){
var state_val_69447 = (state_69443[(1)]);
if((state_val_69447 === (7))){
var inst_69435 = (state_69443[(2)]);
var state_69443__$1 = state_69443;
var statearr_69449_71406 = state_69443__$1;
(statearr_69449_71406[(2)] = inst_69435);

(statearr_69449_71406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69447 === (1))){
var state_69443__$1 = state_69443;
var statearr_69450_71407 = state_69443__$1;
(statearr_69450_71407[(2)] = null);

(statearr_69450_71407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69447 === (4))){
var inst_69418 = (state_69443[(7)]);
var inst_69418__$1 = (state_69443[(2)]);
var inst_69419 = (inst_69418__$1 == null);
var state_69443__$1 = (function (){var statearr_69452 = state_69443;
(statearr_69452[(7)] = inst_69418__$1);

return statearr_69452;
})();
if(cljs.core.truth_(inst_69419)){
var statearr_69453_71408 = state_69443__$1;
(statearr_69453_71408[(1)] = (5));

} else {
var statearr_69454_71409 = state_69443__$1;
(statearr_69454_71409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69447 === (13))){
var state_69443__$1 = state_69443;
var statearr_69456_71410 = state_69443__$1;
(statearr_69456_71410[(2)] = null);

(statearr_69456_71410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69447 === (6))){
var inst_69418 = (state_69443[(7)]);
var state_69443__$1 = state_69443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69443__$1,(11),to,inst_69418);
} else {
if((state_val_69447 === (3))){
var inst_69441 = (state_69443[(2)]);
var state_69443__$1 = state_69443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69443__$1,inst_69441);
} else {
if((state_val_69447 === (12))){
var state_69443__$1 = state_69443;
var statearr_69462_71411 = state_69443__$1;
(statearr_69462_71411[(2)] = null);

(statearr_69462_71411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69447 === (2))){
var state_69443__$1 = state_69443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69443__$1,(4),from);
} else {
if((state_val_69447 === (11))){
var inst_69428 = (state_69443[(2)]);
var state_69443__$1 = state_69443;
if(cljs.core.truth_(inst_69428)){
var statearr_69463_71412 = state_69443__$1;
(statearr_69463_71412[(1)] = (12));

} else {
var statearr_69464_71413 = state_69443__$1;
(statearr_69464_71413[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69447 === (9))){
var state_69443__$1 = state_69443;
var statearr_69466_71414 = state_69443__$1;
(statearr_69466_71414[(2)] = null);

(statearr_69466_71414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69447 === (5))){
var state_69443__$1 = state_69443;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69467_71415 = state_69443__$1;
(statearr_69467_71415[(1)] = (8));

} else {
var statearr_69468_71416 = state_69443__$1;
(statearr_69468_71416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69447 === (14))){
var inst_69433 = (state_69443[(2)]);
var state_69443__$1 = state_69443;
var statearr_69469_71418 = state_69443__$1;
(statearr_69469_71418[(2)] = inst_69433);

(statearr_69469_71418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69447 === (10))){
var inst_69425 = (state_69443[(2)]);
var state_69443__$1 = state_69443;
var statearr_69470_71420 = state_69443__$1;
(statearr_69470_71420[(2)] = inst_69425);

(statearr_69470_71420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69447 === (8))){
var inst_69422 = cljs.core.async.close_BANG_(to);
var state_69443__$1 = state_69443;
var statearr_69472_71421 = state_69443__$1;
(statearr_69472_71421[(2)] = inst_69422);

(statearr_69472_71421[(1)] = (10));


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
var cljs$core$async$state_machine__69184__auto__ = null;
var cljs$core$async$state_machine__69184__auto____0 = (function (){
var statearr_69477 = [null,null,null,null,null,null,null,null];
(statearr_69477[(0)] = cljs$core$async$state_machine__69184__auto__);

(statearr_69477[(1)] = (1));

return statearr_69477;
});
var cljs$core$async$state_machine__69184__auto____1 = (function (state_69443){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_69443);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e69478){var ex__69187__auto__ = e69478;
var statearr_69479_71422 = state_69443;
(statearr_69479_71422[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_69443[(4)]))){
var statearr_69480_71423 = state_69443;
(statearr_69480_71423[(1)] = cljs.core.first((state_69443[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71424 = state_69443;
state_69443 = G__71424;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$state_machine__69184__auto__ = function(state_69443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69184__auto____1.call(this,state_69443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69184__auto____0;
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69184__auto____1;
return cljs$core$async$state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_69481 = f__69319__auto__();
(statearr_69481[(6)] = c__69318__auto___71405);

return statearr_69481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
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
var process = (function (p__69482){
var vec__69483 = p__69482;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69483,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69483,(1),null);
var job = vec__69483;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__69318__auto___71432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_69490){
var state_val_69491 = (state_69490[(1)]);
if((state_val_69491 === (1))){
var state_69490__$1 = state_69490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69490__$1,(2),res,v);
} else {
if((state_val_69491 === (2))){
var inst_69487 = (state_69490[(2)]);
var inst_69488 = cljs.core.async.close_BANG_(res);
var state_69490__$1 = (function (){var statearr_69492 = state_69490;
(statearr_69492[(7)] = inst_69487);

return statearr_69492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69490__$1,inst_69488);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____0 = (function (){
var statearr_69493 = [null,null,null,null,null,null,null,null];
(statearr_69493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__);

(statearr_69493[(1)] = (1));

return statearr_69493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____1 = (function (state_69490){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_69490);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e69494){var ex__69187__auto__ = e69494;
var statearr_69495_71436 = state_69490;
(statearr_69495_71436[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_69490[(4)]))){
var statearr_69496_71437 = state_69490;
(statearr_69496_71437[(1)] = cljs.core.first((state_69490[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71438 = state_69490;
state_69490 = G__71438;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__ = function(state_69490){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____1.call(this,state_69490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_69497 = f__69319__auto__();
(statearr_69497[(6)] = c__69318__auto___71432);

return statearr_69497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__69498){
var vec__69499 = p__69498;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69499,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69499,(1),null);
var job = vec__69499;
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
var n__4613__auto___71442 = n;
var __71443 = (0);
while(true){
if((__71443 < n__4613__auto___71442)){
var G__69502_71444 = type;
var G__69502_71445__$1 = (((G__69502_71444 instanceof cljs.core.Keyword))?G__69502_71444.fqn:null);
switch (G__69502_71445__$1) {
case "compute":
var c__69318__auto___71447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__71443,c__69318__auto___71447,G__69502_71444,G__69502_71445__$1,n__4613__auto___71442,jobs,results,process,async){
return (function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = ((function (__71443,c__69318__auto___71447,G__69502_71444,G__69502_71445__$1,n__4613__auto___71442,jobs,results,process,async){
return (function (state_69516){
var state_val_69517 = (state_69516[(1)]);
if((state_val_69517 === (1))){
var state_69516__$1 = state_69516;
var statearr_69519_71448 = state_69516__$1;
(statearr_69519_71448[(2)] = null);

(statearr_69519_71448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69517 === (2))){
var state_69516__$1 = state_69516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69516__$1,(4),jobs);
} else {
if((state_val_69517 === (3))){
var inst_69513 = (state_69516[(2)]);
var state_69516__$1 = state_69516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69516__$1,inst_69513);
} else {
if((state_val_69517 === (4))){
var inst_69505 = (state_69516[(2)]);
var inst_69506 = process(inst_69505);
var state_69516__$1 = state_69516;
if(cljs.core.truth_(inst_69506)){
var statearr_69520_71452 = state_69516__$1;
(statearr_69520_71452[(1)] = (5));

} else {
var statearr_69521_71453 = state_69516__$1;
(statearr_69521_71453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69517 === (5))){
var state_69516__$1 = state_69516;
var statearr_69522_71454 = state_69516__$1;
(statearr_69522_71454[(2)] = null);

(statearr_69522_71454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69517 === (6))){
var state_69516__$1 = state_69516;
var statearr_69523_71455 = state_69516__$1;
(statearr_69523_71455[(2)] = null);

(statearr_69523_71455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69517 === (7))){
var inst_69511 = (state_69516[(2)]);
var state_69516__$1 = state_69516;
var statearr_69524_71463 = state_69516__$1;
(statearr_69524_71463[(2)] = inst_69511);

(statearr_69524_71463[(1)] = (3));


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
});})(__71443,c__69318__auto___71447,G__69502_71444,G__69502_71445__$1,n__4613__auto___71442,jobs,results,process,async))
;
return ((function (__71443,switch__69183__auto__,c__69318__auto___71447,G__69502_71444,G__69502_71445__$1,n__4613__auto___71442,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____0 = (function (){
var statearr_69526 = [null,null,null,null,null,null,null];
(statearr_69526[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__);

(statearr_69526[(1)] = (1));

return statearr_69526;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____1 = (function (state_69516){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_69516);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e69528){var ex__69187__auto__ = e69528;
var statearr_69529_71473 = state_69516;
(statearr_69529_71473[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_69516[(4)]))){
var statearr_69534_71475 = state_69516;
(statearr_69534_71475[(1)] = cljs.core.first((state_69516[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71476 = state_69516;
state_69516 = G__71476;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__ = function(state_69516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____1.call(this,state_69516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__;
})()
;})(__71443,switch__69183__auto__,c__69318__auto___71447,G__69502_71444,G__69502_71445__$1,n__4613__auto___71442,jobs,results,process,async))
})();
var state__69320__auto__ = (function (){var statearr_69538 = f__69319__auto__();
(statearr_69538[(6)] = c__69318__auto___71447);

return statearr_69538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
});})(__71443,c__69318__auto___71447,G__69502_71444,G__69502_71445__$1,n__4613__auto___71442,jobs,results,process,async))
);


break;
case "async":
var c__69318__auto___71477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__71443,c__69318__auto___71477,G__69502_71444,G__69502_71445__$1,n__4613__auto___71442,jobs,results,process,async){
return (function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = ((function (__71443,c__69318__auto___71477,G__69502_71444,G__69502_71445__$1,n__4613__auto___71442,jobs,results,process,async){
return (function (state_69554){
var state_val_69555 = (state_69554[(1)]);
if((state_val_69555 === (1))){
var state_69554__$1 = state_69554;
var statearr_69559_71478 = state_69554__$1;
(statearr_69559_71478[(2)] = null);

(statearr_69559_71478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69555 === (2))){
var state_69554__$1 = state_69554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69554__$1,(4),jobs);
} else {
if((state_val_69555 === (3))){
var inst_69552 = (state_69554[(2)]);
var state_69554__$1 = state_69554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69554__$1,inst_69552);
} else {
if((state_val_69555 === (4))){
var inst_69544 = (state_69554[(2)]);
var inst_69545 = async(inst_69544);
var state_69554__$1 = state_69554;
if(cljs.core.truth_(inst_69545)){
var statearr_69563_71479 = state_69554__$1;
(statearr_69563_71479[(1)] = (5));

} else {
var statearr_69564_71480 = state_69554__$1;
(statearr_69564_71480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69555 === (5))){
var state_69554__$1 = state_69554;
var statearr_69565_71481 = state_69554__$1;
(statearr_69565_71481[(2)] = null);

(statearr_69565_71481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69555 === (6))){
var state_69554__$1 = state_69554;
var statearr_69566_71482 = state_69554__$1;
(statearr_69566_71482[(2)] = null);

(statearr_69566_71482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69555 === (7))){
var inst_69550 = (state_69554[(2)]);
var state_69554__$1 = state_69554;
var statearr_69567_71483 = state_69554__$1;
(statearr_69567_71483[(2)] = inst_69550);

(statearr_69567_71483[(1)] = (3));


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
});})(__71443,c__69318__auto___71477,G__69502_71444,G__69502_71445__$1,n__4613__auto___71442,jobs,results,process,async))
;
return ((function (__71443,switch__69183__auto__,c__69318__auto___71477,G__69502_71444,G__69502_71445__$1,n__4613__auto___71442,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____0 = (function (){
var statearr_69568 = [null,null,null,null,null,null,null];
(statearr_69568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__);

(statearr_69568[(1)] = (1));

return statearr_69568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____1 = (function (state_69554){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_69554);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e69570){var ex__69187__auto__ = e69570;
var statearr_69571_71484 = state_69554;
(statearr_69571_71484[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_69554[(4)]))){
var statearr_69573_71485 = state_69554;
(statearr_69573_71485[(1)] = cljs.core.first((state_69554[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71486 = state_69554;
state_69554 = G__71486;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__ = function(state_69554){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____1.call(this,state_69554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__;
})()
;})(__71443,switch__69183__auto__,c__69318__auto___71477,G__69502_71444,G__69502_71445__$1,n__4613__auto___71442,jobs,results,process,async))
})();
var state__69320__auto__ = (function (){var statearr_69574 = f__69319__auto__();
(statearr_69574[(6)] = c__69318__auto___71477);

return statearr_69574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
});})(__71443,c__69318__auto___71477,G__69502_71444,G__69502_71445__$1,n__4613__auto___71442,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69502_71445__$1)].join('')));

}

var G__71493 = (__71443 + (1));
__71443 = G__71493;
continue;
} else {
}
break;
}

var c__69318__auto___71494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_69599){
var state_val_69600 = (state_69599[(1)]);
if((state_val_69600 === (7))){
var inst_69595 = (state_69599[(2)]);
var state_69599__$1 = state_69599;
var statearr_69601_71496 = state_69599__$1;
(statearr_69601_71496[(2)] = inst_69595);

(statearr_69601_71496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69600 === (1))){
var state_69599__$1 = state_69599;
var statearr_69602_71498 = state_69599__$1;
(statearr_69602_71498[(2)] = null);

(statearr_69602_71498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69600 === (4))){
var inst_69577 = (state_69599[(7)]);
var inst_69577__$1 = (state_69599[(2)]);
var inst_69578 = (inst_69577__$1 == null);
var state_69599__$1 = (function (){var statearr_69603 = state_69599;
(statearr_69603[(7)] = inst_69577__$1);

return statearr_69603;
})();
if(cljs.core.truth_(inst_69578)){
var statearr_69604_71500 = state_69599__$1;
(statearr_69604_71500[(1)] = (5));

} else {
var statearr_69605_71501 = state_69599__$1;
(statearr_69605_71501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69600 === (6))){
var inst_69585 = (state_69599[(8)]);
var inst_69577 = (state_69599[(7)]);
var inst_69585__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_69586 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69587 = [inst_69577,inst_69585__$1];
var inst_69588 = (new cljs.core.PersistentVector(null,2,(5),inst_69586,inst_69587,null));
var state_69599__$1 = (function (){var statearr_69606 = state_69599;
(statearr_69606[(8)] = inst_69585__$1);

return statearr_69606;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69599__$1,(8),jobs,inst_69588);
} else {
if((state_val_69600 === (3))){
var inst_69597 = (state_69599[(2)]);
var state_69599__$1 = state_69599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69599__$1,inst_69597);
} else {
if((state_val_69600 === (2))){
var state_69599__$1 = state_69599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69599__$1,(4),from);
} else {
if((state_val_69600 === (9))){
var inst_69592 = (state_69599[(2)]);
var state_69599__$1 = (function (){var statearr_69607 = state_69599;
(statearr_69607[(9)] = inst_69592);

return statearr_69607;
})();
var statearr_69608_71508 = state_69599__$1;
(statearr_69608_71508[(2)] = null);

(statearr_69608_71508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69600 === (5))){
var inst_69580 = cljs.core.async.close_BANG_(jobs);
var state_69599__$1 = state_69599;
var statearr_69609_71518 = state_69599__$1;
(statearr_69609_71518[(2)] = inst_69580);

(statearr_69609_71518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69600 === (8))){
var inst_69585 = (state_69599[(8)]);
var inst_69590 = (state_69599[(2)]);
var state_69599__$1 = (function (){var statearr_69610 = state_69599;
(statearr_69610[(10)] = inst_69590);

return statearr_69610;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69599__$1,(9),results,inst_69585);
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
var cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____0 = (function (){
var statearr_69611 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69611[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__);

(statearr_69611[(1)] = (1));

return statearr_69611;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____1 = (function (state_69599){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_69599);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e69612){var ex__69187__auto__ = e69612;
var statearr_69613_71525 = state_69599;
(statearr_69613_71525[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_69599[(4)]))){
var statearr_69614_71526 = state_69599;
(statearr_69614_71526[(1)] = cljs.core.first((state_69599[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71527 = state_69599;
state_69599 = G__71527;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__ = function(state_69599){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____1.call(this,state_69599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_69615 = f__69319__auto__();
(statearr_69615[(6)] = c__69318__auto___71494);

return statearr_69615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
}));


var c__69318__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_69653){
var state_val_69654 = (state_69653[(1)]);
if((state_val_69654 === (7))){
var inst_69649 = (state_69653[(2)]);
var state_69653__$1 = state_69653;
var statearr_69655_71534 = state_69653__$1;
(statearr_69655_71534[(2)] = inst_69649);

(statearr_69655_71534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (20))){
var state_69653__$1 = state_69653;
var statearr_69656_71535 = state_69653__$1;
(statearr_69656_71535[(2)] = null);

(statearr_69656_71535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (1))){
var state_69653__$1 = state_69653;
var statearr_69657_71542 = state_69653__$1;
(statearr_69657_71542[(2)] = null);

(statearr_69657_71542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (4))){
var inst_69618 = (state_69653[(7)]);
var inst_69618__$1 = (state_69653[(2)]);
var inst_69619 = (inst_69618__$1 == null);
var state_69653__$1 = (function (){var statearr_69658 = state_69653;
(statearr_69658[(7)] = inst_69618__$1);

return statearr_69658;
})();
if(cljs.core.truth_(inst_69619)){
var statearr_69659_71543 = state_69653__$1;
(statearr_69659_71543[(1)] = (5));

} else {
var statearr_69660_71544 = state_69653__$1;
(statearr_69660_71544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (15))){
var inst_69631 = (state_69653[(8)]);
var state_69653__$1 = state_69653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69653__$1,(18),to,inst_69631);
} else {
if((state_val_69654 === (21))){
var inst_69644 = (state_69653[(2)]);
var state_69653__$1 = state_69653;
var statearr_69661_71551 = state_69653__$1;
(statearr_69661_71551[(2)] = inst_69644);

(statearr_69661_71551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (13))){
var inst_69646 = (state_69653[(2)]);
var state_69653__$1 = (function (){var statearr_69662 = state_69653;
(statearr_69662[(9)] = inst_69646);

return statearr_69662;
})();
var statearr_69664_71552 = state_69653__$1;
(statearr_69664_71552[(2)] = null);

(statearr_69664_71552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (6))){
var inst_69618 = (state_69653[(7)]);
var state_69653__$1 = state_69653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69653__$1,(11),inst_69618);
} else {
if((state_val_69654 === (17))){
var inst_69639 = (state_69653[(2)]);
var state_69653__$1 = state_69653;
if(cljs.core.truth_(inst_69639)){
var statearr_69665_71553 = state_69653__$1;
(statearr_69665_71553[(1)] = (19));

} else {
var statearr_69666_71554 = state_69653__$1;
(statearr_69666_71554[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (3))){
var inst_69651 = (state_69653[(2)]);
var state_69653__$1 = state_69653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69653__$1,inst_69651);
} else {
if((state_val_69654 === (12))){
var inst_69628 = (state_69653[(10)]);
var state_69653__$1 = state_69653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69653__$1,(14),inst_69628);
} else {
if((state_val_69654 === (2))){
var state_69653__$1 = state_69653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69653__$1,(4),results);
} else {
if((state_val_69654 === (19))){
var state_69653__$1 = state_69653;
var statearr_69667_71555 = state_69653__$1;
(statearr_69667_71555[(2)] = null);

(statearr_69667_71555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (11))){
var inst_69628 = (state_69653[(2)]);
var state_69653__$1 = (function (){var statearr_69668 = state_69653;
(statearr_69668[(10)] = inst_69628);

return statearr_69668;
})();
var statearr_69669_71556 = state_69653__$1;
(statearr_69669_71556[(2)] = null);

(statearr_69669_71556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (9))){
var state_69653__$1 = state_69653;
var statearr_69670_71557 = state_69653__$1;
(statearr_69670_71557[(2)] = null);

(statearr_69670_71557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (5))){
var state_69653__$1 = state_69653;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69671_71563 = state_69653__$1;
(statearr_69671_71563[(1)] = (8));

} else {
var statearr_69672_71564 = state_69653__$1;
(statearr_69672_71564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (14))){
var inst_69631 = (state_69653[(8)]);
var inst_69631__$1 = (state_69653[(2)]);
var inst_69632 = (inst_69631__$1 == null);
var inst_69633 = cljs.core.not(inst_69632);
var state_69653__$1 = (function (){var statearr_69673 = state_69653;
(statearr_69673[(8)] = inst_69631__$1);

return statearr_69673;
})();
if(inst_69633){
var statearr_69674_71565 = state_69653__$1;
(statearr_69674_71565[(1)] = (15));

} else {
var statearr_69675_71566 = state_69653__$1;
(statearr_69675_71566[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (16))){
var state_69653__$1 = state_69653;
var statearr_69676_71567 = state_69653__$1;
(statearr_69676_71567[(2)] = false);

(statearr_69676_71567[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (10))){
var inst_69625 = (state_69653[(2)]);
var state_69653__$1 = state_69653;
var statearr_69682_71568 = state_69653__$1;
(statearr_69682_71568[(2)] = inst_69625);

(statearr_69682_71568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (18))){
var inst_69636 = (state_69653[(2)]);
var state_69653__$1 = state_69653;
var statearr_69695_71569 = state_69653__$1;
(statearr_69695_71569[(2)] = inst_69636);

(statearr_69695_71569[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69654 === (8))){
var inst_69622 = cljs.core.async.close_BANG_(to);
var state_69653__$1 = state_69653;
var statearr_69702_71570 = state_69653__$1;
(statearr_69702_71570[(2)] = inst_69622);

(statearr_69702_71570[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____0 = (function (){
var statearr_69703 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__);

(statearr_69703[(1)] = (1));

return statearr_69703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____1 = (function (state_69653){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_69653);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e69704){var ex__69187__auto__ = e69704;
var statearr_69705_71571 = state_69653;
(statearr_69705_71571[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_69653[(4)]))){
var statearr_69707_71572 = state_69653;
(statearr_69707_71572[(1)] = cljs.core.first((state_69653[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71574 = state_69653;
state_69653 = G__71574;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__ = function(state_69653){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____1.call(this,state_69653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69184__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_69708 = f__69319__auto__();
(statearr_69708[(6)] = c__69318__auto__);

return statearr_69708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
}));

return c__69318__auto__;
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
var G__69712 = arguments.length;
switch (G__69712) {
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
var G__69730 = arguments.length;
switch (G__69730) {
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
var G__69753 = arguments.length;
switch (G__69753) {
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
var c__69318__auto___71583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_69805){
var state_val_69806 = (state_69805[(1)]);
if((state_val_69806 === (7))){
var inst_69796 = (state_69805[(2)]);
var state_69805__$1 = state_69805;
var statearr_69807_71584 = state_69805__$1;
(statearr_69807_71584[(2)] = inst_69796);

(statearr_69807_71584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69806 === (1))){
var state_69805__$1 = state_69805;
var statearr_69808_71585 = state_69805__$1;
(statearr_69808_71585[(2)] = null);

(statearr_69808_71585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69806 === (4))){
var inst_69770 = (state_69805[(7)]);
var inst_69770__$1 = (state_69805[(2)]);
var inst_69771 = (inst_69770__$1 == null);
var state_69805__$1 = (function (){var statearr_69809 = state_69805;
(statearr_69809[(7)] = inst_69770__$1);

return statearr_69809;
})();
if(cljs.core.truth_(inst_69771)){
var statearr_69810_71586 = state_69805__$1;
(statearr_69810_71586[(1)] = (5));

} else {
var statearr_69811_71587 = state_69805__$1;
(statearr_69811_71587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69806 === (13))){
var state_69805__$1 = state_69805;
var statearr_69812_71588 = state_69805__$1;
(statearr_69812_71588[(2)] = null);

(statearr_69812_71588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69806 === (6))){
var inst_69770 = (state_69805[(7)]);
var inst_69779 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_69770) : p.call(null,inst_69770));
var state_69805__$1 = state_69805;
if(cljs.core.truth_(inst_69779)){
var statearr_69813_71589 = state_69805__$1;
(statearr_69813_71589[(1)] = (9));

} else {
var statearr_69814_71590 = state_69805__$1;
(statearr_69814_71590[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69806 === (3))){
var inst_69799 = (state_69805[(2)]);
var state_69805__$1 = state_69805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69805__$1,inst_69799);
} else {
if((state_val_69806 === (12))){
var state_69805__$1 = state_69805;
var statearr_69816_71592 = state_69805__$1;
(statearr_69816_71592[(2)] = null);

(statearr_69816_71592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69806 === (2))){
var state_69805__$1 = state_69805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69805__$1,(4),ch);
} else {
if((state_val_69806 === (11))){
var inst_69770 = (state_69805[(7)]);
var inst_69787 = (state_69805[(2)]);
var state_69805__$1 = state_69805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69805__$1,(8),inst_69787,inst_69770);
} else {
if((state_val_69806 === (9))){
var state_69805__$1 = state_69805;
var statearr_69817_71593 = state_69805__$1;
(statearr_69817_71593[(2)] = tc);

(statearr_69817_71593[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69806 === (5))){
var inst_69774 = cljs.core.async.close_BANG_(tc);
var inst_69776 = cljs.core.async.close_BANG_(fc);
var state_69805__$1 = (function (){var statearr_69818 = state_69805;
(statearr_69818[(8)] = inst_69774);

return statearr_69818;
})();
var statearr_69819_71598 = state_69805__$1;
(statearr_69819_71598[(2)] = inst_69776);

(statearr_69819_71598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69806 === (14))){
var inst_69794 = (state_69805[(2)]);
var state_69805__$1 = state_69805;
var statearr_69820_71599 = state_69805__$1;
(statearr_69820_71599[(2)] = inst_69794);

(statearr_69820_71599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69806 === (10))){
var state_69805__$1 = state_69805;
var statearr_69821_71600 = state_69805__$1;
(statearr_69821_71600[(2)] = fc);

(statearr_69821_71600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69806 === (8))){
var inst_69789 = (state_69805[(2)]);
var state_69805__$1 = state_69805;
if(cljs.core.truth_(inst_69789)){
var statearr_69822_71601 = state_69805__$1;
(statearr_69822_71601[(1)] = (12));

} else {
var statearr_69823_71602 = state_69805__$1;
(statearr_69823_71602[(1)] = (13));

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
var cljs$core$async$state_machine__69184__auto__ = null;
var cljs$core$async$state_machine__69184__auto____0 = (function (){
var statearr_69824 = [null,null,null,null,null,null,null,null,null];
(statearr_69824[(0)] = cljs$core$async$state_machine__69184__auto__);

(statearr_69824[(1)] = (1));

return statearr_69824;
});
var cljs$core$async$state_machine__69184__auto____1 = (function (state_69805){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_69805);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e69825){var ex__69187__auto__ = e69825;
var statearr_69826_71603 = state_69805;
(statearr_69826_71603[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_69805[(4)]))){
var statearr_69827_71604 = state_69805;
(statearr_69827_71604[(1)] = cljs.core.first((state_69805[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71605 = state_69805;
state_69805 = G__71605;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$state_machine__69184__auto__ = function(state_69805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69184__auto____1.call(this,state_69805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69184__auto____0;
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69184__auto____1;
return cljs$core$async$state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_69832 = f__69319__auto__();
(statearr_69832[(6)] = c__69318__auto___71583);

return statearr_69832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
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
var c__69318__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_69863){
var state_val_69864 = (state_69863[(1)]);
if((state_val_69864 === (7))){
var inst_69858 = (state_69863[(2)]);
var state_69863__$1 = state_69863;
var statearr_69865_71610 = state_69863__$1;
(statearr_69865_71610[(2)] = inst_69858);

(statearr_69865_71610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69864 === (1))){
var inst_69841 = init;
var inst_69842 = inst_69841;
var state_69863__$1 = (function (){var statearr_69866 = state_69863;
(statearr_69866[(7)] = inst_69842);

return statearr_69866;
})();
var statearr_69867_71614 = state_69863__$1;
(statearr_69867_71614[(2)] = null);

(statearr_69867_71614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69864 === (4))){
var inst_69845 = (state_69863[(8)]);
var inst_69845__$1 = (state_69863[(2)]);
var inst_69846 = (inst_69845__$1 == null);
var state_69863__$1 = (function (){var statearr_69868 = state_69863;
(statearr_69868[(8)] = inst_69845__$1);

return statearr_69868;
})();
if(cljs.core.truth_(inst_69846)){
var statearr_69869_71615 = state_69863__$1;
(statearr_69869_71615[(1)] = (5));

} else {
var statearr_69870_71616 = state_69863__$1;
(statearr_69870_71616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69864 === (6))){
var inst_69845 = (state_69863[(8)]);
var inst_69849 = (state_69863[(9)]);
var inst_69842 = (state_69863[(7)]);
var inst_69849__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_69842,inst_69845) : f.call(null,inst_69842,inst_69845));
var inst_69850 = cljs.core.reduced_QMARK_(inst_69849__$1);
var state_69863__$1 = (function (){var statearr_69872 = state_69863;
(statearr_69872[(9)] = inst_69849__$1);

return statearr_69872;
})();
if(inst_69850){
var statearr_69873_71620 = state_69863__$1;
(statearr_69873_71620[(1)] = (8));

} else {
var statearr_69874_71621 = state_69863__$1;
(statearr_69874_71621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69864 === (3))){
var inst_69861 = (state_69863[(2)]);
var state_69863__$1 = state_69863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69863__$1,inst_69861);
} else {
if((state_val_69864 === (2))){
var state_69863__$1 = state_69863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69863__$1,(4),ch);
} else {
if((state_val_69864 === (9))){
var inst_69849 = (state_69863[(9)]);
var inst_69842 = inst_69849;
var state_69863__$1 = (function (){var statearr_69876 = state_69863;
(statearr_69876[(7)] = inst_69842);

return statearr_69876;
})();
var statearr_69877_71632 = state_69863__$1;
(statearr_69877_71632[(2)] = null);

(statearr_69877_71632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69864 === (5))){
var inst_69842 = (state_69863[(7)]);
var state_69863__$1 = state_69863;
var statearr_69878_71643 = state_69863__$1;
(statearr_69878_71643[(2)] = inst_69842);

(statearr_69878_71643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69864 === (10))){
var inst_69856 = (state_69863[(2)]);
var state_69863__$1 = state_69863;
var statearr_69879_71646 = state_69863__$1;
(statearr_69879_71646[(2)] = inst_69856);

(statearr_69879_71646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69864 === (8))){
var inst_69849 = (state_69863[(9)]);
var inst_69852 = cljs.core.deref(inst_69849);
var state_69863__$1 = state_69863;
var statearr_69880_71647 = state_69863__$1;
(statearr_69880_71647[(2)] = inst_69852);

(statearr_69880_71647[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__69184__auto__ = null;
var cljs$core$async$reduce_$_state_machine__69184__auto____0 = (function (){
var statearr_69881 = [null,null,null,null,null,null,null,null,null,null];
(statearr_69881[(0)] = cljs$core$async$reduce_$_state_machine__69184__auto__);

(statearr_69881[(1)] = (1));

return statearr_69881;
});
var cljs$core$async$reduce_$_state_machine__69184__auto____1 = (function (state_69863){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_69863);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e69882){var ex__69187__auto__ = e69882;
var statearr_69883_71654 = state_69863;
(statearr_69883_71654[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_69863[(4)]))){
var statearr_69884_71655 = state_69863;
(statearr_69884_71655[(1)] = cljs.core.first((state_69863[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71656 = state_69863;
state_69863 = G__71656;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__69184__auto__ = function(state_69863){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__69184__auto____1.call(this,state_69863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__69184__auto____0;
cljs$core$async$reduce_$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__69184__auto____1;
return cljs$core$async$reduce_$_state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_69885 = f__69319__auto__();
(statearr_69885[(6)] = c__69318__auto__);

return statearr_69885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
}));

return c__69318__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__69318__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_69891){
var state_val_69892 = (state_69891[(1)]);
if((state_val_69892 === (1))){
var inst_69886 = cljs.core.async.reduce(f__$1,init,ch);
var state_69891__$1 = state_69891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69891__$1,(2),inst_69886);
} else {
if((state_val_69892 === (2))){
var inst_69888 = (state_69891[(2)]);
var inst_69889 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_69888) : f__$1.call(null,inst_69888));
var state_69891__$1 = state_69891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69891__$1,inst_69889);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__69184__auto__ = null;
var cljs$core$async$transduce_$_state_machine__69184__auto____0 = (function (){
var statearr_69893 = [null,null,null,null,null,null,null];
(statearr_69893[(0)] = cljs$core$async$transduce_$_state_machine__69184__auto__);

(statearr_69893[(1)] = (1));

return statearr_69893;
});
var cljs$core$async$transduce_$_state_machine__69184__auto____1 = (function (state_69891){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_69891);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e69894){var ex__69187__auto__ = e69894;
var statearr_69895_71666 = state_69891;
(statearr_69895_71666[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_69891[(4)]))){
var statearr_69896_71673 = state_69891;
(statearr_69896_71673[(1)] = cljs.core.first((state_69891[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71688 = state_69891;
state_69891 = G__71688;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__69184__auto__ = function(state_69891){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__69184__auto____1.call(this,state_69891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__69184__auto____0;
cljs$core$async$transduce_$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__69184__auto____1;
return cljs$core$async$transduce_$_state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_69897 = f__69319__auto__();
(statearr_69897[(6)] = c__69318__auto__);

return statearr_69897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
}));

return c__69318__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__69899 = arguments.length;
switch (G__69899) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__69318__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_69924){
var state_val_69925 = (state_69924[(1)]);
if((state_val_69925 === (7))){
var inst_69906 = (state_69924[(2)]);
var state_69924__$1 = state_69924;
var statearr_69926_71716 = state_69924__$1;
(statearr_69926_71716[(2)] = inst_69906);

(statearr_69926_71716[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69925 === (1))){
var inst_69900 = cljs.core.seq(coll);
var inst_69901 = inst_69900;
var state_69924__$1 = (function (){var statearr_69927 = state_69924;
(statearr_69927[(7)] = inst_69901);

return statearr_69927;
})();
var statearr_69928_71719 = state_69924__$1;
(statearr_69928_71719[(2)] = null);

(statearr_69928_71719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69925 === (4))){
var inst_69901 = (state_69924[(7)]);
var inst_69904 = cljs.core.first(inst_69901);
var state_69924__$1 = state_69924;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69924__$1,(7),ch,inst_69904);
} else {
if((state_val_69925 === (13))){
var inst_69918 = (state_69924[(2)]);
var state_69924__$1 = state_69924;
var statearr_69929_71726 = state_69924__$1;
(statearr_69929_71726[(2)] = inst_69918);

(statearr_69929_71726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69925 === (6))){
var inst_69909 = (state_69924[(2)]);
var state_69924__$1 = state_69924;
if(cljs.core.truth_(inst_69909)){
var statearr_69930_71728 = state_69924__$1;
(statearr_69930_71728[(1)] = (8));

} else {
var statearr_69931_71729 = state_69924__$1;
(statearr_69931_71729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69925 === (3))){
var inst_69922 = (state_69924[(2)]);
var state_69924__$1 = state_69924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69924__$1,inst_69922);
} else {
if((state_val_69925 === (12))){
var state_69924__$1 = state_69924;
var statearr_69932_71730 = state_69924__$1;
(statearr_69932_71730[(2)] = null);

(statearr_69932_71730[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69925 === (2))){
var inst_69901 = (state_69924[(7)]);
var state_69924__$1 = state_69924;
if(cljs.core.truth_(inst_69901)){
var statearr_69933_71732 = state_69924__$1;
(statearr_69933_71732[(1)] = (4));

} else {
var statearr_69934_71733 = state_69924__$1;
(statearr_69934_71733[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69925 === (11))){
var inst_69915 = cljs.core.async.close_BANG_(ch);
var state_69924__$1 = state_69924;
var statearr_69935_71738 = state_69924__$1;
(statearr_69935_71738[(2)] = inst_69915);

(statearr_69935_71738[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69925 === (9))){
var state_69924__$1 = state_69924;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69936_71739 = state_69924__$1;
(statearr_69936_71739[(1)] = (11));

} else {
var statearr_69937_71740 = state_69924__$1;
(statearr_69937_71740[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69925 === (5))){
var inst_69901 = (state_69924[(7)]);
var state_69924__$1 = state_69924;
var statearr_69938_71741 = state_69924__$1;
(statearr_69938_71741[(2)] = inst_69901);

(statearr_69938_71741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69925 === (10))){
var inst_69920 = (state_69924[(2)]);
var state_69924__$1 = state_69924;
var statearr_69939_71742 = state_69924__$1;
(statearr_69939_71742[(2)] = inst_69920);

(statearr_69939_71742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69925 === (8))){
var inst_69901 = (state_69924[(7)]);
var inst_69911 = cljs.core.next(inst_69901);
var inst_69901__$1 = inst_69911;
var state_69924__$1 = (function (){var statearr_69940 = state_69924;
(statearr_69940[(7)] = inst_69901__$1);

return statearr_69940;
})();
var statearr_69941_71746 = state_69924__$1;
(statearr_69941_71746[(2)] = null);

(statearr_69941_71746[(1)] = (2));


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
var cljs$core$async$state_machine__69184__auto__ = null;
var cljs$core$async$state_machine__69184__auto____0 = (function (){
var statearr_69942 = [null,null,null,null,null,null,null,null];
(statearr_69942[(0)] = cljs$core$async$state_machine__69184__auto__);

(statearr_69942[(1)] = (1));

return statearr_69942;
});
var cljs$core$async$state_machine__69184__auto____1 = (function (state_69924){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_69924);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e69943){var ex__69187__auto__ = e69943;
var statearr_69944_71750 = state_69924;
(statearr_69944_71750[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_69924[(4)]))){
var statearr_69945_71753 = state_69924;
(statearr_69945_71753[(1)] = cljs.core.first((state_69924[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71754 = state_69924;
state_69924 = G__71754;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$state_machine__69184__auto__ = function(state_69924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69184__auto____1.call(this,state_69924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69184__auto____0;
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69184__auto____1;
return cljs$core$async$state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_69946 = f__69319__auto__();
(statearr_69946[(6)] = c__69318__auto__);

return statearr_69946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
}));

return c__69318__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__69948 = arguments.length;
switch (G__69948) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_71771 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_71771(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_71774 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_71774(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_71776 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_71776(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_71777 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_71777(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69949 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69949 = (function (ch,cs,meta69950){
this.ch = ch;
this.cs = cs;
this.meta69950 = meta69950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69951,meta69950__$1){
var self__ = this;
var _69951__$1 = this;
return (new cljs.core.async.t_cljs$core$async69949(self__.ch,self__.cs,meta69950__$1));
}));

(cljs.core.async.t_cljs$core$async69949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69951){
var self__ = this;
var _69951__$1 = this;
return self__.meta69950;
}));

(cljs.core.async.t_cljs$core$async69949.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69949.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async69949.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69949.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async69949.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async69949.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async69949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta69950","meta69950",-1544976844,null)], null);
}));

(cljs.core.async.t_cljs$core$async69949.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69949");

(cljs.core.async.t_cljs$core$async69949.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async69949");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69949.
 */
cljs.core.async.__GT_t_cljs$core$async69949 = (function cljs$core$async$mult_$___GT_t_cljs$core$async69949(ch__$1,cs__$1,meta69950){
return (new cljs.core.async.t_cljs$core$async69949(ch__$1,cs__$1,meta69950));
});

}

return (new cljs.core.async.t_cljs$core$async69949(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__69318__auto___71786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_70084){
var state_val_70085 = (state_70084[(1)]);
if((state_val_70085 === (7))){
var inst_70080 = (state_70084[(2)]);
var state_70084__$1 = state_70084;
var statearr_70086_71787 = state_70084__$1;
(statearr_70086_71787[(2)] = inst_70080);

(statearr_70086_71787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (20))){
var inst_69985 = (state_70084[(7)]);
var inst_69997 = cljs.core.first(inst_69985);
var inst_69998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69997,(0),null);
var inst_69999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69997,(1),null);
var state_70084__$1 = (function (){var statearr_70087 = state_70084;
(statearr_70087[(8)] = inst_69998);

return statearr_70087;
})();
if(cljs.core.truth_(inst_69999)){
var statearr_70088_71788 = state_70084__$1;
(statearr_70088_71788[(1)] = (22));

} else {
var statearr_70089_71789 = state_70084__$1;
(statearr_70089_71789[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (27))){
var inst_69954 = (state_70084[(9)]);
var inst_70029 = (state_70084[(10)]);
var inst_70034 = (state_70084[(11)]);
var inst_70027 = (state_70084[(12)]);
var inst_70034__$1 = cljs.core._nth(inst_70027,inst_70029);
var inst_70035 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_70034__$1,inst_69954,done);
var state_70084__$1 = (function (){var statearr_70090 = state_70084;
(statearr_70090[(11)] = inst_70034__$1);

return statearr_70090;
})();
if(cljs.core.truth_(inst_70035)){
var statearr_70091_71790 = state_70084__$1;
(statearr_70091_71790[(1)] = (30));

} else {
var statearr_70092_71791 = state_70084__$1;
(statearr_70092_71791[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (1))){
var state_70084__$1 = state_70084;
var statearr_70093_71792 = state_70084__$1;
(statearr_70093_71792[(2)] = null);

(statearr_70093_71792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (24))){
var inst_69985 = (state_70084[(7)]);
var inst_70004 = (state_70084[(2)]);
var inst_70005 = cljs.core.next(inst_69985);
var inst_69963 = inst_70005;
var inst_69964 = null;
var inst_69965 = (0);
var inst_69966 = (0);
var state_70084__$1 = (function (){var statearr_70094 = state_70084;
(statearr_70094[(13)] = inst_69963);

(statearr_70094[(14)] = inst_69966);

(statearr_70094[(15)] = inst_70004);

(statearr_70094[(16)] = inst_69964);

(statearr_70094[(17)] = inst_69965);

return statearr_70094;
})();
var statearr_70095_71793 = state_70084__$1;
(statearr_70095_71793[(2)] = null);

(statearr_70095_71793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (39))){
var state_70084__$1 = state_70084;
var statearr_70099_71797 = state_70084__$1;
(statearr_70099_71797[(2)] = null);

(statearr_70099_71797[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (4))){
var inst_69954 = (state_70084[(9)]);
var inst_69954__$1 = (state_70084[(2)]);
var inst_69955 = (inst_69954__$1 == null);
var state_70084__$1 = (function (){var statearr_70100 = state_70084;
(statearr_70100[(9)] = inst_69954__$1);

return statearr_70100;
})();
if(cljs.core.truth_(inst_69955)){
var statearr_70101_71798 = state_70084__$1;
(statearr_70101_71798[(1)] = (5));

} else {
var statearr_70102_71802 = state_70084__$1;
(statearr_70102_71802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (15))){
var inst_69963 = (state_70084[(13)]);
var inst_69966 = (state_70084[(14)]);
var inst_69964 = (state_70084[(16)]);
var inst_69965 = (state_70084[(17)]);
var inst_69981 = (state_70084[(2)]);
var inst_69982 = (inst_69966 + (1));
var tmp70096 = inst_69963;
var tmp70097 = inst_69964;
var tmp70098 = inst_69965;
var inst_69963__$1 = tmp70096;
var inst_69964__$1 = tmp70097;
var inst_69965__$1 = tmp70098;
var inst_69966__$1 = inst_69982;
var state_70084__$1 = (function (){var statearr_70103 = state_70084;
(statearr_70103[(18)] = inst_69981);

(statearr_70103[(13)] = inst_69963__$1);

(statearr_70103[(14)] = inst_69966__$1);

(statearr_70103[(16)] = inst_69964__$1);

(statearr_70103[(17)] = inst_69965__$1);

return statearr_70103;
})();
var statearr_70104_71804 = state_70084__$1;
(statearr_70104_71804[(2)] = null);

(statearr_70104_71804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (21))){
var inst_70008 = (state_70084[(2)]);
var state_70084__$1 = state_70084;
var statearr_70108_71806 = state_70084__$1;
(statearr_70108_71806[(2)] = inst_70008);

(statearr_70108_71806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (31))){
var inst_70034 = (state_70084[(11)]);
var inst_70038 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_70034);
var state_70084__$1 = state_70084;
var statearr_70109_71808 = state_70084__$1;
(statearr_70109_71808[(2)] = inst_70038);

(statearr_70109_71808[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (32))){
var inst_70029 = (state_70084[(10)]);
var inst_70028 = (state_70084[(19)]);
var inst_70026 = (state_70084[(20)]);
var inst_70027 = (state_70084[(12)]);
var inst_70040 = (state_70084[(2)]);
var inst_70041 = (inst_70029 + (1));
var tmp70105 = inst_70028;
var tmp70106 = inst_70026;
var tmp70107 = inst_70027;
var inst_70026__$1 = tmp70106;
var inst_70027__$1 = tmp70107;
var inst_70028__$1 = tmp70105;
var inst_70029__$1 = inst_70041;
var state_70084__$1 = (function (){var statearr_70110 = state_70084;
(statearr_70110[(10)] = inst_70029__$1);

(statearr_70110[(19)] = inst_70028__$1);

(statearr_70110[(21)] = inst_70040);

(statearr_70110[(20)] = inst_70026__$1);

(statearr_70110[(12)] = inst_70027__$1);

return statearr_70110;
})();
var statearr_70111_71809 = state_70084__$1;
(statearr_70111_71809[(2)] = null);

(statearr_70111_71809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (40))){
var inst_70053 = (state_70084[(22)]);
var inst_70057 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_70053);
var state_70084__$1 = state_70084;
var statearr_70112_71810 = state_70084__$1;
(statearr_70112_71810[(2)] = inst_70057);

(statearr_70112_71810[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (33))){
var inst_70044 = (state_70084[(23)]);
var inst_70046 = cljs.core.chunked_seq_QMARK_(inst_70044);
var state_70084__$1 = state_70084;
if(inst_70046){
var statearr_70113_71811 = state_70084__$1;
(statearr_70113_71811[(1)] = (36));

} else {
var statearr_70114_71812 = state_70084__$1;
(statearr_70114_71812[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (13))){
var inst_69975 = (state_70084[(24)]);
var inst_69978 = cljs.core.async.close_BANG_(inst_69975);
var state_70084__$1 = state_70084;
var statearr_70115_71813 = state_70084__$1;
(statearr_70115_71813[(2)] = inst_69978);

(statearr_70115_71813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (22))){
var inst_69998 = (state_70084[(8)]);
var inst_70001 = cljs.core.async.close_BANG_(inst_69998);
var state_70084__$1 = state_70084;
var statearr_70116_71814 = state_70084__$1;
(statearr_70116_71814[(2)] = inst_70001);

(statearr_70116_71814[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (36))){
var inst_70044 = (state_70084[(23)]);
var inst_70048 = cljs.core.chunk_first(inst_70044);
var inst_70049 = cljs.core.chunk_rest(inst_70044);
var inst_70050 = cljs.core.count(inst_70048);
var inst_70026 = inst_70049;
var inst_70027 = inst_70048;
var inst_70028 = inst_70050;
var inst_70029 = (0);
var state_70084__$1 = (function (){var statearr_70117 = state_70084;
(statearr_70117[(10)] = inst_70029);

(statearr_70117[(19)] = inst_70028);

(statearr_70117[(20)] = inst_70026);

(statearr_70117[(12)] = inst_70027);

return statearr_70117;
})();
var statearr_70118_71815 = state_70084__$1;
(statearr_70118_71815[(2)] = null);

(statearr_70118_71815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (41))){
var inst_70044 = (state_70084[(23)]);
var inst_70059 = (state_70084[(2)]);
var inst_70060 = cljs.core.next(inst_70044);
var inst_70026 = inst_70060;
var inst_70027 = null;
var inst_70028 = (0);
var inst_70029 = (0);
var state_70084__$1 = (function (){var statearr_70119 = state_70084;
(statearr_70119[(10)] = inst_70029);

(statearr_70119[(19)] = inst_70028);

(statearr_70119[(20)] = inst_70026);

(statearr_70119[(12)] = inst_70027);

(statearr_70119[(25)] = inst_70059);

return statearr_70119;
})();
var statearr_70120_71852 = state_70084__$1;
(statearr_70120_71852[(2)] = null);

(statearr_70120_71852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (43))){
var state_70084__$1 = state_70084;
var statearr_70121_71856 = state_70084__$1;
(statearr_70121_71856[(2)] = null);

(statearr_70121_71856[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (29))){
var inst_70068 = (state_70084[(2)]);
var state_70084__$1 = state_70084;
var statearr_70122_71864 = state_70084__$1;
(statearr_70122_71864[(2)] = inst_70068);

(statearr_70122_71864[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (44))){
var inst_70077 = (state_70084[(2)]);
var state_70084__$1 = (function (){var statearr_70123 = state_70084;
(statearr_70123[(26)] = inst_70077);

return statearr_70123;
})();
var statearr_70124_71871 = state_70084__$1;
(statearr_70124_71871[(2)] = null);

(statearr_70124_71871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (6))){
var inst_70018 = (state_70084[(27)]);
var inst_70017 = cljs.core.deref(cs);
var inst_70018__$1 = cljs.core.keys(inst_70017);
var inst_70019 = cljs.core.count(inst_70018__$1);
var inst_70020 = cljs.core.reset_BANG_(dctr,inst_70019);
var inst_70025 = cljs.core.seq(inst_70018__$1);
var inst_70026 = inst_70025;
var inst_70027 = null;
var inst_70028 = (0);
var inst_70029 = (0);
var state_70084__$1 = (function (){var statearr_70125 = state_70084;
(statearr_70125[(10)] = inst_70029);

(statearr_70125[(27)] = inst_70018__$1);

(statearr_70125[(19)] = inst_70028);

(statearr_70125[(20)] = inst_70026);

(statearr_70125[(12)] = inst_70027);

(statearr_70125[(28)] = inst_70020);

return statearr_70125;
})();
var statearr_70126_71874 = state_70084__$1;
(statearr_70126_71874[(2)] = null);

(statearr_70126_71874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (28))){
var inst_70044 = (state_70084[(23)]);
var inst_70026 = (state_70084[(20)]);
var inst_70044__$1 = cljs.core.seq(inst_70026);
var state_70084__$1 = (function (){var statearr_70127 = state_70084;
(statearr_70127[(23)] = inst_70044__$1);

return statearr_70127;
})();
if(inst_70044__$1){
var statearr_70128_71876 = state_70084__$1;
(statearr_70128_71876[(1)] = (33));

} else {
var statearr_70129_71877 = state_70084__$1;
(statearr_70129_71877[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (25))){
var inst_70029 = (state_70084[(10)]);
var inst_70028 = (state_70084[(19)]);
var inst_70031 = (inst_70029 < inst_70028);
var inst_70032 = inst_70031;
var state_70084__$1 = state_70084;
if(cljs.core.truth_(inst_70032)){
var statearr_70130_71878 = state_70084__$1;
(statearr_70130_71878[(1)] = (27));

} else {
var statearr_70131_71880 = state_70084__$1;
(statearr_70131_71880[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (34))){
var state_70084__$1 = state_70084;
var statearr_70132_71887 = state_70084__$1;
(statearr_70132_71887[(2)] = null);

(statearr_70132_71887[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (17))){
var state_70084__$1 = state_70084;
var statearr_70133_71888 = state_70084__$1;
(statearr_70133_71888[(2)] = null);

(statearr_70133_71888[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (3))){
var inst_70082 = (state_70084[(2)]);
var state_70084__$1 = state_70084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70084__$1,inst_70082);
} else {
if((state_val_70085 === (12))){
var inst_70013 = (state_70084[(2)]);
var state_70084__$1 = state_70084;
var statearr_70134_71890 = state_70084__$1;
(statearr_70134_71890[(2)] = inst_70013);

(statearr_70134_71890[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (2))){
var state_70084__$1 = state_70084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70084__$1,(4),ch);
} else {
if((state_val_70085 === (23))){
var state_70084__$1 = state_70084;
var statearr_70135_71891 = state_70084__$1;
(statearr_70135_71891[(2)] = null);

(statearr_70135_71891[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (35))){
var inst_70066 = (state_70084[(2)]);
var state_70084__$1 = state_70084;
var statearr_70136_71892 = state_70084__$1;
(statearr_70136_71892[(2)] = inst_70066);

(statearr_70136_71892[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (19))){
var inst_69985 = (state_70084[(7)]);
var inst_69989 = cljs.core.chunk_first(inst_69985);
var inst_69990 = cljs.core.chunk_rest(inst_69985);
var inst_69991 = cljs.core.count(inst_69989);
var inst_69963 = inst_69990;
var inst_69964 = inst_69989;
var inst_69965 = inst_69991;
var inst_69966 = (0);
var state_70084__$1 = (function (){var statearr_70137 = state_70084;
(statearr_70137[(13)] = inst_69963);

(statearr_70137[(14)] = inst_69966);

(statearr_70137[(16)] = inst_69964);

(statearr_70137[(17)] = inst_69965);

return statearr_70137;
})();
var statearr_70138_71894 = state_70084__$1;
(statearr_70138_71894[(2)] = null);

(statearr_70138_71894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (11))){
var inst_69963 = (state_70084[(13)]);
var inst_69985 = (state_70084[(7)]);
var inst_69985__$1 = cljs.core.seq(inst_69963);
var state_70084__$1 = (function (){var statearr_70139 = state_70084;
(statearr_70139[(7)] = inst_69985__$1);

return statearr_70139;
})();
if(inst_69985__$1){
var statearr_70140_71901 = state_70084__$1;
(statearr_70140_71901[(1)] = (16));

} else {
var statearr_70141_71902 = state_70084__$1;
(statearr_70141_71902[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (9))){
var inst_70015 = (state_70084[(2)]);
var state_70084__$1 = state_70084;
var statearr_70142_71903 = state_70084__$1;
(statearr_70142_71903[(2)] = inst_70015);

(statearr_70142_71903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (5))){
var inst_69961 = cljs.core.deref(cs);
var inst_69962 = cljs.core.seq(inst_69961);
var inst_69963 = inst_69962;
var inst_69964 = null;
var inst_69965 = (0);
var inst_69966 = (0);
var state_70084__$1 = (function (){var statearr_70143 = state_70084;
(statearr_70143[(13)] = inst_69963);

(statearr_70143[(14)] = inst_69966);

(statearr_70143[(16)] = inst_69964);

(statearr_70143[(17)] = inst_69965);

return statearr_70143;
})();
var statearr_70144_71904 = state_70084__$1;
(statearr_70144_71904[(2)] = null);

(statearr_70144_71904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (14))){
var state_70084__$1 = state_70084;
var statearr_70145_71905 = state_70084__$1;
(statearr_70145_71905[(2)] = null);

(statearr_70145_71905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (45))){
var inst_70074 = (state_70084[(2)]);
var state_70084__$1 = state_70084;
var statearr_70146_71907 = state_70084__$1;
(statearr_70146_71907[(2)] = inst_70074);

(statearr_70146_71907[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (26))){
var inst_70018 = (state_70084[(27)]);
var inst_70070 = (state_70084[(2)]);
var inst_70071 = cljs.core.seq(inst_70018);
var state_70084__$1 = (function (){var statearr_70147 = state_70084;
(statearr_70147[(29)] = inst_70070);

return statearr_70147;
})();
if(inst_70071){
var statearr_70148_71922 = state_70084__$1;
(statearr_70148_71922[(1)] = (42));

} else {
var statearr_70149_71923 = state_70084__$1;
(statearr_70149_71923[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (16))){
var inst_69985 = (state_70084[(7)]);
var inst_69987 = cljs.core.chunked_seq_QMARK_(inst_69985);
var state_70084__$1 = state_70084;
if(inst_69987){
var statearr_70150_71927 = state_70084__$1;
(statearr_70150_71927[(1)] = (19));

} else {
var statearr_70151_71928 = state_70084__$1;
(statearr_70151_71928[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (38))){
var inst_70063 = (state_70084[(2)]);
var state_70084__$1 = state_70084;
var statearr_70152_71929 = state_70084__$1;
(statearr_70152_71929[(2)] = inst_70063);

(statearr_70152_71929[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (30))){
var state_70084__$1 = state_70084;
var statearr_70153_71930 = state_70084__$1;
(statearr_70153_71930[(2)] = null);

(statearr_70153_71930[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (10))){
var inst_69966 = (state_70084[(14)]);
var inst_69964 = (state_70084[(16)]);
var inst_69974 = cljs.core._nth(inst_69964,inst_69966);
var inst_69975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69974,(0),null);
var inst_69976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69974,(1),null);
var state_70084__$1 = (function (){var statearr_70154 = state_70084;
(statearr_70154[(24)] = inst_69975);

return statearr_70154;
})();
if(cljs.core.truth_(inst_69976)){
var statearr_70155_71931 = state_70084__$1;
(statearr_70155_71931[(1)] = (13));

} else {
var statearr_70156_71932 = state_70084__$1;
(statearr_70156_71932[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (18))){
var inst_70011 = (state_70084[(2)]);
var state_70084__$1 = state_70084;
var statearr_70157_71933 = state_70084__$1;
(statearr_70157_71933[(2)] = inst_70011);

(statearr_70157_71933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (42))){
var state_70084__$1 = state_70084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70084__$1,(45),dchan);
} else {
if((state_val_70085 === (37))){
var inst_69954 = (state_70084[(9)]);
var inst_70044 = (state_70084[(23)]);
var inst_70053 = (state_70084[(22)]);
var inst_70053__$1 = cljs.core.first(inst_70044);
var inst_70054 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_70053__$1,inst_69954,done);
var state_70084__$1 = (function (){var statearr_70158 = state_70084;
(statearr_70158[(22)] = inst_70053__$1);

return statearr_70158;
})();
if(cljs.core.truth_(inst_70054)){
var statearr_70159_71936 = state_70084__$1;
(statearr_70159_71936[(1)] = (39));

} else {
var statearr_70160_71937 = state_70084__$1;
(statearr_70160_71937[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70085 === (8))){
var inst_69966 = (state_70084[(14)]);
var inst_69965 = (state_70084[(17)]);
var inst_69968 = (inst_69966 < inst_69965);
var inst_69969 = inst_69968;
var state_70084__$1 = state_70084;
if(cljs.core.truth_(inst_69969)){
var statearr_70161_71938 = state_70084__$1;
(statearr_70161_71938[(1)] = (10));

} else {
var statearr_70162_71939 = state_70084__$1;
(statearr_70162_71939[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__69184__auto__ = null;
var cljs$core$async$mult_$_state_machine__69184__auto____0 = (function (){
var statearr_70163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70163[(0)] = cljs$core$async$mult_$_state_machine__69184__auto__);

(statearr_70163[(1)] = (1));

return statearr_70163;
});
var cljs$core$async$mult_$_state_machine__69184__auto____1 = (function (state_70084){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_70084);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e70164){var ex__69187__auto__ = e70164;
var statearr_70165_71946 = state_70084;
(statearr_70165_71946[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_70084[(4)]))){
var statearr_70166_71947 = state_70084;
(statearr_70166_71947[(1)] = cljs.core.first((state_70084[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71948 = state_70084;
state_70084 = G__71948;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__69184__auto__ = function(state_70084){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__69184__auto____1.call(this,state_70084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__69184__auto____0;
cljs$core$async$mult_$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__69184__auto____1;
return cljs$core$async$mult_$_state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_70167 = f__69319__auto__();
(statearr_70167[(6)] = c__69318__auto___71786);

return statearr_70167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
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
var G__70169 = arguments.length;
switch (G__70169) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_71956 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_71956(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_71959 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_71959(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_71961 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_71961(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_71966 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_71966(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_71968 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_71968(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71970 = arguments.length;
var i__4737__auto___71971 = (0);
while(true){
if((i__4737__auto___71971 < len__4736__auto___71970)){
args__4742__auto__.push((arguments[i__4737__auto___71971]));

var G__71972 = (i__4737__auto___71971 + (1));
i__4737__auto___71971 = G__71972;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__70176){
var map__70177 = p__70176;
var map__70177__$1 = (((((!((map__70177 == null))))?(((((map__70177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70177):map__70177);
var opts = map__70177__$1;
var statearr_70179_71973 = state;
(statearr_70179_71973[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_70180_71975 = state;
(statearr_70180_71975[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_70181_71980 = state;
(statearr_70181_71980[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq70172){
var G__70173 = cljs.core.first(seq70172);
var seq70172__$1 = cljs.core.next(seq70172);
var G__70174 = cljs.core.first(seq70172__$1);
var seq70172__$2 = cljs.core.next(seq70172__$1);
var G__70175 = cljs.core.first(seq70172__$2);
var seq70172__$3 = cljs.core.next(seq70172__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70173,G__70174,G__70175,seq70172__$3);
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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70182 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70182 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta70183){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta70183 = meta70183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70184,meta70183__$1){
var self__ = this;
var _70184__$1 = this;
return (new cljs.core.async.t_cljs$core$async70182(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta70183__$1));
}));

(cljs.core.async.t_cljs$core$async70182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70184){
var self__ = this;
var _70184__$1 = this;
return self__.meta70183;
}));

(cljs.core.async.t_cljs$core$async70182.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70182.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async70182.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70182.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70182.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70182.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70182.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70182.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta70183","meta70183",553636237,null)], null);
}));

(cljs.core.async.t_cljs$core$async70182.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70182");

(cljs.core.async.t_cljs$core$async70182.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async70182");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70182.
 */
cljs.core.async.__GT_t_cljs$core$async70182 = (function cljs$core$async$mix_$___GT_t_cljs$core$async70182(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta70183){
return (new cljs.core.async.t_cljs$core$async70182(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta70183));
});

}

return (new cljs.core.async.t_cljs$core$async70182(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__69318__auto___72027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_70286){
var state_val_70287 = (state_70286[(1)]);
if((state_val_70287 === (7))){
var inst_70201 = (state_70286[(2)]);
var state_70286__$1 = state_70286;
var statearr_70288_72028 = state_70286__$1;
(statearr_70288_72028[(2)] = inst_70201);

(statearr_70288_72028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (20))){
var inst_70213 = (state_70286[(7)]);
var state_70286__$1 = state_70286;
var statearr_70289_72029 = state_70286__$1;
(statearr_70289_72029[(2)] = inst_70213);

(statearr_70289_72029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (27))){
var state_70286__$1 = state_70286;
var statearr_70290_72031 = state_70286__$1;
(statearr_70290_72031[(2)] = null);

(statearr_70290_72031[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (1))){
var inst_70188 = (state_70286[(8)]);
var inst_70188__$1 = calc_state();
var inst_70190 = (inst_70188__$1 == null);
var inst_70191 = cljs.core.not(inst_70190);
var state_70286__$1 = (function (){var statearr_70291 = state_70286;
(statearr_70291[(8)] = inst_70188__$1);

return statearr_70291;
})();
if(inst_70191){
var statearr_70292_72032 = state_70286__$1;
(statearr_70292_72032[(1)] = (2));

} else {
var statearr_70293_72033 = state_70286__$1;
(statearr_70293_72033[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (24))){
var inst_70246 = (state_70286[(9)]);
var inst_70237 = (state_70286[(10)]);
var inst_70260 = (state_70286[(11)]);
var inst_70260__$1 = (inst_70237.cljs$core$IFn$_invoke$arity$1 ? inst_70237.cljs$core$IFn$_invoke$arity$1(inst_70246) : inst_70237.call(null,inst_70246));
var state_70286__$1 = (function (){var statearr_70294 = state_70286;
(statearr_70294[(11)] = inst_70260__$1);

return statearr_70294;
})();
if(cljs.core.truth_(inst_70260__$1)){
var statearr_70295_72036 = state_70286__$1;
(statearr_70295_72036[(1)] = (29));

} else {
var statearr_70296_72038 = state_70286__$1;
(statearr_70296_72038[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (4))){
var inst_70204 = (state_70286[(2)]);
var state_70286__$1 = state_70286;
if(cljs.core.truth_(inst_70204)){
var statearr_70297_72039 = state_70286__$1;
(statearr_70297_72039[(1)] = (8));

} else {
var statearr_70298_72040 = state_70286__$1;
(statearr_70298_72040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (15))){
var inst_70231 = (state_70286[(2)]);
var state_70286__$1 = state_70286;
if(cljs.core.truth_(inst_70231)){
var statearr_70299_72041 = state_70286__$1;
(statearr_70299_72041[(1)] = (19));

} else {
var statearr_70300_72042 = state_70286__$1;
(statearr_70300_72042[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (21))){
var inst_70236 = (state_70286[(12)]);
var inst_70236__$1 = (state_70286[(2)]);
var inst_70237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70236__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70236__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70236__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_70286__$1 = (function (){var statearr_70301 = state_70286;
(statearr_70301[(12)] = inst_70236__$1);

(statearr_70301[(13)] = inst_70238);

(statearr_70301[(10)] = inst_70237);

return statearr_70301;
})();
return cljs.core.async.ioc_alts_BANG_(state_70286__$1,(22),inst_70239);
} else {
if((state_val_70287 === (31))){
var inst_70268 = (state_70286[(2)]);
var state_70286__$1 = state_70286;
if(cljs.core.truth_(inst_70268)){
var statearr_70302_72044 = state_70286__$1;
(statearr_70302_72044[(1)] = (32));

} else {
var statearr_70303_72045 = state_70286__$1;
(statearr_70303_72045[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (32))){
var inst_70245 = (state_70286[(14)]);
var state_70286__$1 = state_70286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70286__$1,(35),out,inst_70245);
} else {
if((state_val_70287 === (33))){
var inst_70236 = (state_70286[(12)]);
var inst_70213 = inst_70236;
var state_70286__$1 = (function (){var statearr_70304 = state_70286;
(statearr_70304[(7)] = inst_70213);

return statearr_70304;
})();
var statearr_70305_72059 = state_70286__$1;
(statearr_70305_72059[(2)] = null);

(statearr_70305_72059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (13))){
var inst_70213 = (state_70286[(7)]);
var inst_70220 = inst_70213.cljs$lang$protocol_mask$partition0$;
var inst_70221 = (inst_70220 & (64));
var inst_70222 = inst_70213.cljs$core$ISeq$;
var inst_70223 = (cljs.core.PROTOCOL_SENTINEL === inst_70222);
var inst_70224 = ((inst_70221) || (inst_70223));
var state_70286__$1 = state_70286;
if(cljs.core.truth_(inst_70224)){
var statearr_70306_72068 = state_70286__$1;
(statearr_70306_72068[(1)] = (16));

} else {
var statearr_70307_72073 = state_70286__$1;
(statearr_70307_72073[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (22))){
var inst_70245 = (state_70286[(14)]);
var inst_70246 = (state_70286[(9)]);
var inst_70244 = (state_70286[(2)]);
var inst_70245__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70244,(0),null);
var inst_70246__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70244,(1),null);
var inst_70247 = (inst_70245__$1 == null);
var inst_70248 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_70246__$1,change);
var inst_70249 = ((inst_70247) || (inst_70248));
var state_70286__$1 = (function (){var statearr_70308 = state_70286;
(statearr_70308[(14)] = inst_70245__$1);

(statearr_70308[(9)] = inst_70246__$1);

return statearr_70308;
})();
if(cljs.core.truth_(inst_70249)){
var statearr_70309_72090 = state_70286__$1;
(statearr_70309_72090[(1)] = (23));

} else {
var statearr_70310_72091 = state_70286__$1;
(statearr_70310_72091[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (36))){
var inst_70236 = (state_70286[(12)]);
var inst_70213 = inst_70236;
var state_70286__$1 = (function (){var statearr_70311 = state_70286;
(statearr_70311[(7)] = inst_70213);

return statearr_70311;
})();
var statearr_70312_72099 = state_70286__$1;
(statearr_70312_72099[(2)] = null);

(statearr_70312_72099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (29))){
var inst_70260 = (state_70286[(11)]);
var state_70286__$1 = state_70286;
var statearr_70313_72106 = state_70286__$1;
(statearr_70313_72106[(2)] = inst_70260);

(statearr_70313_72106[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (6))){
var state_70286__$1 = state_70286;
var statearr_70314_72116 = state_70286__$1;
(statearr_70314_72116[(2)] = false);

(statearr_70314_72116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (28))){
var inst_70256 = (state_70286[(2)]);
var inst_70257 = calc_state();
var inst_70213 = inst_70257;
var state_70286__$1 = (function (){var statearr_70315 = state_70286;
(statearr_70315[(15)] = inst_70256);

(statearr_70315[(7)] = inst_70213);

return statearr_70315;
})();
var statearr_70316_72156 = state_70286__$1;
(statearr_70316_72156[(2)] = null);

(statearr_70316_72156[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (25))){
var inst_70282 = (state_70286[(2)]);
var state_70286__$1 = state_70286;
var statearr_70317_72164 = state_70286__$1;
(statearr_70317_72164[(2)] = inst_70282);

(statearr_70317_72164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (34))){
var inst_70280 = (state_70286[(2)]);
var state_70286__$1 = state_70286;
var statearr_70318_72169 = state_70286__$1;
(statearr_70318_72169[(2)] = inst_70280);

(statearr_70318_72169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (17))){
var state_70286__$1 = state_70286;
var statearr_70319_72173 = state_70286__$1;
(statearr_70319_72173[(2)] = false);

(statearr_70319_72173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (3))){
var state_70286__$1 = state_70286;
var statearr_70320_72174 = state_70286__$1;
(statearr_70320_72174[(2)] = false);

(statearr_70320_72174[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (12))){
var inst_70284 = (state_70286[(2)]);
var state_70286__$1 = state_70286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70286__$1,inst_70284);
} else {
if((state_val_70287 === (2))){
var inst_70188 = (state_70286[(8)]);
var inst_70193 = inst_70188.cljs$lang$protocol_mask$partition0$;
var inst_70194 = (inst_70193 & (64));
var inst_70195 = inst_70188.cljs$core$ISeq$;
var inst_70196 = (cljs.core.PROTOCOL_SENTINEL === inst_70195);
var inst_70197 = ((inst_70194) || (inst_70196));
var state_70286__$1 = state_70286;
if(cljs.core.truth_(inst_70197)){
var statearr_70321_72194 = state_70286__$1;
(statearr_70321_72194[(1)] = (5));

} else {
var statearr_70322_72196 = state_70286__$1;
(statearr_70322_72196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (23))){
var inst_70245 = (state_70286[(14)]);
var inst_70251 = (inst_70245 == null);
var state_70286__$1 = state_70286;
if(cljs.core.truth_(inst_70251)){
var statearr_70323_72201 = state_70286__$1;
(statearr_70323_72201[(1)] = (26));

} else {
var statearr_70324_72202 = state_70286__$1;
(statearr_70324_72202[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (35))){
var inst_70271 = (state_70286[(2)]);
var state_70286__$1 = state_70286;
if(cljs.core.truth_(inst_70271)){
var statearr_70325_72207 = state_70286__$1;
(statearr_70325_72207[(1)] = (36));

} else {
var statearr_70326_72211 = state_70286__$1;
(statearr_70326_72211[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (19))){
var inst_70213 = (state_70286[(7)]);
var inst_70233 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_70213);
var state_70286__$1 = state_70286;
var statearr_70327_72226 = state_70286__$1;
(statearr_70327_72226[(2)] = inst_70233);

(statearr_70327_72226[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (11))){
var inst_70213 = (state_70286[(7)]);
var inst_70217 = (inst_70213 == null);
var inst_70218 = cljs.core.not(inst_70217);
var state_70286__$1 = state_70286;
if(inst_70218){
var statearr_70328_72234 = state_70286__$1;
(statearr_70328_72234[(1)] = (13));

} else {
var statearr_70329_72235 = state_70286__$1;
(statearr_70329_72235[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (9))){
var inst_70188 = (state_70286[(8)]);
var state_70286__$1 = state_70286;
var statearr_70330_72237 = state_70286__$1;
(statearr_70330_72237[(2)] = inst_70188);

(statearr_70330_72237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (5))){
var state_70286__$1 = state_70286;
var statearr_70331_72238 = state_70286__$1;
(statearr_70331_72238[(2)] = true);

(statearr_70331_72238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (14))){
var state_70286__$1 = state_70286;
var statearr_70332_72243 = state_70286__$1;
(statearr_70332_72243[(2)] = false);

(statearr_70332_72243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (26))){
var inst_70246 = (state_70286[(9)]);
var inst_70253 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_70246);
var state_70286__$1 = state_70286;
var statearr_70333_72248 = state_70286__$1;
(statearr_70333_72248[(2)] = inst_70253);

(statearr_70333_72248[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (16))){
var state_70286__$1 = state_70286;
var statearr_70334_72253 = state_70286__$1;
(statearr_70334_72253[(2)] = true);

(statearr_70334_72253[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (38))){
var inst_70276 = (state_70286[(2)]);
var state_70286__$1 = state_70286;
var statearr_70335_72254 = state_70286__$1;
(statearr_70335_72254[(2)] = inst_70276);

(statearr_70335_72254[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (30))){
var inst_70238 = (state_70286[(13)]);
var inst_70246 = (state_70286[(9)]);
var inst_70237 = (state_70286[(10)]);
var inst_70263 = cljs.core.empty_QMARK_(inst_70237);
var inst_70264 = (inst_70238.cljs$core$IFn$_invoke$arity$1 ? inst_70238.cljs$core$IFn$_invoke$arity$1(inst_70246) : inst_70238.call(null,inst_70246));
var inst_70265 = cljs.core.not(inst_70264);
var inst_70266 = ((inst_70263) && (inst_70265));
var state_70286__$1 = state_70286;
var statearr_70339_72255 = state_70286__$1;
(statearr_70339_72255[(2)] = inst_70266);

(statearr_70339_72255[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (10))){
var inst_70188 = (state_70286[(8)]);
var inst_70209 = (state_70286[(2)]);
var inst_70210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70209,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70209,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70209,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_70213 = inst_70188;
var state_70286__$1 = (function (){var statearr_70340 = state_70286;
(statearr_70340[(16)] = inst_70211);

(statearr_70340[(17)] = inst_70210);

(statearr_70340[(18)] = inst_70212);

(statearr_70340[(7)] = inst_70213);

return statearr_70340;
})();
var statearr_70342_72259 = state_70286__$1;
(statearr_70342_72259[(2)] = null);

(statearr_70342_72259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (18))){
var inst_70228 = (state_70286[(2)]);
var state_70286__$1 = state_70286;
var statearr_70343_72261 = state_70286__$1;
(statearr_70343_72261[(2)] = inst_70228);

(statearr_70343_72261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (37))){
var state_70286__$1 = state_70286;
var statearr_70344_72262 = state_70286__$1;
(statearr_70344_72262[(2)] = null);

(statearr_70344_72262[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70287 === (8))){
var inst_70188 = (state_70286[(8)]);
var inst_70206 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_70188);
var state_70286__$1 = state_70286;
var statearr_70345_72265 = state_70286__$1;
(statearr_70345_72265[(2)] = inst_70206);

(statearr_70345_72265[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__69184__auto__ = null;
var cljs$core$async$mix_$_state_machine__69184__auto____0 = (function (){
var statearr_70348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70348[(0)] = cljs$core$async$mix_$_state_machine__69184__auto__);

(statearr_70348[(1)] = (1));

return statearr_70348;
});
var cljs$core$async$mix_$_state_machine__69184__auto____1 = (function (state_70286){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_70286);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e70349){var ex__69187__auto__ = e70349;
var statearr_70350_72268 = state_70286;
(statearr_70350_72268[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_70286[(4)]))){
var statearr_70351_72269 = state_70286;
(statearr_70351_72269[(1)] = cljs.core.first((state_70286[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72270 = state_70286;
state_70286 = G__72270;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__69184__auto__ = function(state_70286){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__69184__auto____1.call(this,state_70286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__69184__auto____0;
cljs$core$async$mix_$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__69184__auto____1;
return cljs$core$async$mix_$_state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_70355 = f__69319__auto__();
(statearr_70355[(6)] = c__69318__auto___72027);

return statearr_70355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_72278 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_72278(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_72282 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_72282(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_72287 = (function() {
var G__72291 = null;
var G__72291__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__72291__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__72291 = function(p,v){
switch(arguments.length){
case 1:
return G__72291__1.call(this,p);
case 2:
return G__72291__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__72291.cljs$core$IFn$_invoke$arity$1 = G__72291__1;
G__72291.cljs$core$IFn$_invoke$arity$2 = G__72291__2;
return G__72291;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__70376 = arguments.length;
switch (G__70376) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_72287(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_72287(p,v);
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
var G__70388 = arguments.length;
switch (G__70388) {
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
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__70383_SHARP_){
if(cljs.core.truth_((p1__70383_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70383_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__70383_SHARP_.call(null,topic)))){
return p1__70383_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__70383_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70394 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70394 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta70395){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta70395 = meta70395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70396,meta70395__$1){
var self__ = this;
var _70396__$1 = this;
return (new cljs.core.async.t_cljs$core$async70394(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta70395__$1));
}));

(cljs.core.async.t_cljs$core$async70394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70396){
var self__ = this;
var _70396__$1 = this;
return self__.meta70395;
}));

(cljs.core.async.t_cljs$core$async70394.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70394.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async70394.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70394.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async70394.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async70394.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async70394.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async70394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta70395","meta70395",850325222,null)], null);
}));

(cljs.core.async.t_cljs$core$async70394.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70394");

(cljs.core.async.t_cljs$core$async70394.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async70394");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70394.
 */
cljs.core.async.__GT_t_cljs$core$async70394 = (function cljs$core$async$__GT_t_cljs$core$async70394(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70395){
return (new cljs.core.async.t_cljs$core$async70394(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70395));
});

}

return (new cljs.core.async.t_cljs$core$async70394(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__69318__auto___72306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_70490){
var state_val_70491 = (state_70490[(1)]);
if((state_val_70491 === (7))){
var inst_70486 = (state_70490[(2)]);
var state_70490__$1 = state_70490;
var statearr_70500_72311 = state_70490__$1;
(statearr_70500_72311[(2)] = inst_70486);

(statearr_70500_72311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (20))){
var state_70490__$1 = state_70490;
var statearr_70501_72320 = state_70490__$1;
(statearr_70501_72320[(2)] = null);

(statearr_70501_72320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (1))){
var state_70490__$1 = state_70490;
var statearr_70502_72332 = state_70490__$1;
(statearr_70502_72332[(2)] = null);

(statearr_70502_72332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (24))){
var inst_70469 = (state_70490[(7)]);
var inst_70478 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_70469);
var state_70490__$1 = state_70490;
var statearr_70505_72337 = state_70490__$1;
(statearr_70505_72337[(2)] = inst_70478);

(statearr_70505_72337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (4))){
var inst_70415 = (state_70490[(8)]);
var inst_70415__$1 = (state_70490[(2)]);
var inst_70416 = (inst_70415__$1 == null);
var state_70490__$1 = (function (){var statearr_70506 = state_70490;
(statearr_70506[(8)] = inst_70415__$1);

return statearr_70506;
})();
if(cljs.core.truth_(inst_70416)){
var statearr_70507_72339 = state_70490__$1;
(statearr_70507_72339[(1)] = (5));

} else {
var statearr_70508_72340 = state_70490__$1;
(statearr_70508_72340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (15))){
var inst_70463 = (state_70490[(2)]);
var state_70490__$1 = state_70490;
var statearr_70509_72351 = state_70490__$1;
(statearr_70509_72351[(2)] = inst_70463);

(statearr_70509_72351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (21))){
var inst_70483 = (state_70490[(2)]);
var state_70490__$1 = (function (){var statearr_70510 = state_70490;
(statearr_70510[(9)] = inst_70483);

return statearr_70510;
})();
var statearr_70511_72369 = state_70490__$1;
(statearr_70511_72369[(2)] = null);

(statearr_70511_72369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (13))){
var inst_70443 = (state_70490[(10)]);
var inst_70446 = cljs.core.chunked_seq_QMARK_(inst_70443);
var state_70490__$1 = state_70490;
if(inst_70446){
var statearr_70512_72389 = state_70490__$1;
(statearr_70512_72389[(1)] = (16));

} else {
var statearr_70514_72390 = state_70490__$1;
(statearr_70514_72390[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (22))){
var inst_70475 = (state_70490[(2)]);
var state_70490__$1 = state_70490;
if(cljs.core.truth_(inst_70475)){
var statearr_70516_72400 = state_70490__$1;
(statearr_70516_72400[(1)] = (23));

} else {
var statearr_70517_72402 = state_70490__$1;
(statearr_70517_72402[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (6))){
var inst_70415 = (state_70490[(8)]);
var inst_70469 = (state_70490[(7)]);
var inst_70471 = (state_70490[(11)]);
var inst_70469__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_70415) : topic_fn.call(null,inst_70415));
var inst_70470 = cljs.core.deref(mults);
var inst_70471__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70470,inst_70469__$1);
var state_70490__$1 = (function (){var statearr_70518 = state_70490;
(statearr_70518[(7)] = inst_70469__$1);

(statearr_70518[(11)] = inst_70471__$1);

return statearr_70518;
})();
if(cljs.core.truth_(inst_70471__$1)){
var statearr_70519_72411 = state_70490__$1;
(statearr_70519_72411[(1)] = (19));

} else {
var statearr_70520_72416 = state_70490__$1;
(statearr_70520_72416[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (25))){
var inst_70480 = (state_70490[(2)]);
var state_70490__$1 = state_70490;
var statearr_70521_72458 = state_70490__$1;
(statearr_70521_72458[(2)] = inst_70480);

(statearr_70521_72458[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (17))){
var inst_70443 = (state_70490[(10)]);
var inst_70454 = cljs.core.first(inst_70443);
var inst_70455 = cljs.core.async.muxch_STAR_(inst_70454);
var inst_70456 = cljs.core.async.close_BANG_(inst_70455);
var inst_70457 = cljs.core.next(inst_70443);
var inst_70425 = inst_70457;
var inst_70426 = null;
var inst_70427 = (0);
var inst_70428 = (0);
var state_70490__$1 = (function (){var statearr_70522 = state_70490;
(statearr_70522[(12)] = inst_70456);

(statearr_70522[(13)] = inst_70425);

(statearr_70522[(14)] = inst_70427);

(statearr_70522[(15)] = inst_70428);

(statearr_70522[(16)] = inst_70426);

return statearr_70522;
})();
var statearr_70523_72464 = state_70490__$1;
(statearr_70523_72464[(2)] = null);

(statearr_70523_72464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (3))){
var inst_70488 = (state_70490[(2)]);
var state_70490__$1 = state_70490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70490__$1,inst_70488);
} else {
if((state_val_70491 === (12))){
var inst_70465 = (state_70490[(2)]);
var state_70490__$1 = state_70490;
var statearr_70526_72465 = state_70490__$1;
(statearr_70526_72465[(2)] = inst_70465);

(statearr_70526_72465[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (2))){
var state_70490__$1 = state_70490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70490__$1,(4),ch);
} else {
if((state_val_70491 === (23))){
var state_70490__$1 = state_70490;
var statearr_70527_72466 = state_70490__$1;
(statearr_70527_72466[(2)] = null);

(statearr_70527_72466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (19))){
var inst_70415 = (state_70490[(8)]);
var inst_70471 = (state_70490[(11)]);
var inst_70473 = cljs.core.async.muxch_STAR_(inst_70471);
var state_70490__$1 = state_70490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70490__$1,(22),inst_70473,inst_70415);
} else {
if((state_val_70491 === (11))){
var inst_70425 = (state_70490[(13)]);
var inst_70443 = (state_70490[(10)]);
var inst_70443__$1 = cljs.core.seq(inst_70425);
var state_70490__$1 = (function (){var statearr_70528 = state_70490;
(statearr_70528[(10)] = inst_70443__$1);

return statearr_70528;
})();
if(inst_70443__$1){
var statearr_70529_72467 = state_70490__$1;
(statearr_70529_72467[(1)] = (13));

} else {
var statearr_70530_72468 = state_70490__$1;
(statearr_70530_72468[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (9))){
var inst_70467 = (state_70490[(2)]);
var state_70490__$1 = state_70490;
var statearr_70532_72473 = state_70490__$1;
(statearr_70532_72473[(2)] = inst_70467);

(statearr_70532_72473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (5))){
var inst_70422 = cljs.core.deref(mults);
var inst_70423 = cljs.core.vals(inst_70422);
var inst_70424 = cljs.core.seq(inst_70423);
var inst_70425 = inst_70424;
var inst_70426 = null;
var inst_70427 = (0);
var inst_70428 = (0);
var state_70490__$1 = (function (){var statearr_70536 = state_70490;
(statearr_70536[(13)] = inst_70425);

(statearr_70536[(14)] = inst_70427);

(statearr_70536[(15)] = inst_70428);

(statearr_70536[(16)] = inst_70426);

return statearr_70536;
})();
var statearr_70537_72476 = state_70490__$1;
(statearr_70537_72476[(2)] = null);

(statearr_70537_72476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (14))){
var state_70490__$1 = state_70490;
var statearr_70541_72478 = state_70490__$1;
(statearr_70541_72478[(2)] = null);

(statearr_70541_72478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (16))){
var inst_70443 = (state_70490[(10)]);
var inst_70448 = cljs.core.chunk_first(inst_70443);
var inst_70449 = cljs.core.chunk_rest(inst_70443);
var inst_70450 = cljs.core.count(inst_70448);
var inst_70425 = inst_70449;
var inst_70426 = inst_70448;
var inst_70427 = inst_70450;
var inst_70428 = (0);
var state_70490__$1 = (function (){var statearr_70542 = state_70490;
(statearr_70542[(13)] = inst_70425);

(statearr_70542[(14)] = inst_70427);

(statearr_70542[(15)] = inst_70428);

(statearr_70542[(16)] = inst_70426);

return statearr_70542;
})();
var statearr_70555_72481 = state_70490__$1;
(statearr_70555_72481[(2)] = null);

(statearr_70555_72481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (10))){
var inst_70425 = (state_70490[(13)]);
var inst_70427 = (state_70490[(14)]);
var inst_70428 = (state_70490[(15)]);
var inst_70426 = (state_70490[(16)]);
var inst_70433 = cljs.core._nth(inst_70426,inst_70428);
var inst_70434 = cljs.core.async.muxch_STAR_(inst_70433);
var inst_70435 = cljs.core.async.close_BANG_(inst_70434);
var inst_70436 = (inst_70428 + (1));
var tmp70538 = inst_70425;
var tmp70539 = inst_70427;
var tmp70540 = inst_70426;
var inst_70425__$1 = tmp70538;
var inst_70426__$1 = tmp70540;
var inst_70427__$1 = tmp70539;
var inst_70428__$1 = inst_70436;
var state_70490__$1 = (function (){var statearr_70564 = state_70490;
(statearr_70564[(13)] = inst_70425__$1);

(statearr_70564[(14)] = inst_70427__$1);

(statearr_70564[(15)] = inst_70428__$1);

(statearr_70564[(17)] = inst_70435);

(statearr_70564[(16)] = inst_70426__$1);

return statearr_70564;
})();
var statearr_70565_72485 = state_70490__$1;
(statearr_70565_72485[(2)] = null);

(statearr_70565_72485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (18))){
var inst_70460 = (state_70490[(2)]);
var state_70490__$1 = state_70490;
var statearr_70566_72486 = state_70490__$1;
(statearr_70566_72486[(2)] = inst_70460);

(statearr_70566_72486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70491 === (8))){
var inst_70427 = (state_70490[(14)]);
var inst_70428 = (state_70490[(15)]);
var inst_70430 = (inst_70428 < inst_70427);
var inst_70431 = inst_70430;
var state_70490__$1 = state_70490;
if(cljs.core.truth_(inst_70431)){
var statearr_70567_72491 = state_70490__$1;
(statearr_70567_72491[(1)] = (10));

} else {
var statearr_70568_72492 = state_70490__$1;
(statearr_70568_72492[(1)] = (11));

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
var cljs$core$async$state_machine__69184__auto__ = null;
var cljs$core$async$state_machine__69184__auto____0 = (function (){
var statearr_70569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70569[(0)] = cljs$core$async$state_machine__69184__auto__);

(statearr_70569[(1)] = (1));

return statearr_70569;
});
var cljs$core$async$state_machine__69184__auto____1 = (function (state_70490){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_70490);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e70570){var ex__69187__auto__ = e70570;
var statearr_70571_72493 = state_70490;
(statearr_70571_72493[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_70490[(4)]))){
var statearr_70572_72494 = state_70490;
(statearr_70572_72494[(1)] = cljs.core.first((state_70490[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72495 = state_70490;
state_70490 = G__72495;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$state_machine__69184__auto__ = function(state_70490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69184__auto____1.call(this,state_70490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69184__auto____0;
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69184__auto____1;
return cljs$core$async$state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_70573 = f__69319__auto__();
(statearr_70573[(6)] = c__69318__auto___72306);

return statearr_70573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
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
var G__70575 = arguments.length;
switch (G__70575) {
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
var G__70577 = arguments.length;
switch (G__70577) {
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
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
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
var G__70599 = arguments.length;
switch (G__70599) {
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
var c__69318__auto___72507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_70642){
var state_val_70643 = (state_70642[(1)]);
if((state_val_70643 === (7))){
var state_70642__$1 = state_70642;
var statearr_70644_72508 = state_70642__$1;
(statearr_70644_72508[(2)] = null);

(statearr_70644_72508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70643 === (1))){
var state_70642__$1 = state_70642;
var statearr_70645_72509 = state_70642__$1;
(statearr_70645_72509[(2)] = null);

(statearr_70645_72509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70643 === (4))){
var inst_70602 = (state_70642[(7)]);
var inst_70603 = (state_70642[(8)]);
var inst_70605 = (inst_70603 < inst_70602);
var state_70642__$1 = state_70642;
if(cljs.core.truth_(inst_70605)){
var statearr_70646_72511 = state_70642__$1;
(statearr_70646_72511[(1)] = (6));

} else {
var statearr_70647_72512 = state_70642__$1;
(statearr_70647_72512[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70643 === (15))){
var inst_70628 = (state_70642[(9)]);
var inst_70633 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_70628);
var state_70642__$1 = state_70642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70642__$1,(17),out,inst_70633);
} else {
if((state_val_70643 === (13))){
var inst_70628 = (state_70642[(9)]);
var inst_70628__$1 = (state_70642[(2)]);
var inst_70629 = cljs.core.some(cljs.core.nil_QMARK_,inst_70628__$1);
var state_70642__$1 = (function (){var statearr_70648 = state_70642;
(statearr_70648[(9)] = inst_70628__$1);

return statearr_70648;
})();
if(cljs.core.truth_(inst_70629)){
var statearr_70649_72520 = state_70642__$1;
(statearr_70649_72520[(1)] = (14));

} else {
var statearr_70650_72521 = state_70642__$1;
(statearr_70650_72521[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70643 === (6))){
var state_70642__$1 = state_70642;
var statearr_70651_72522 = state_70642__$1;
(statearr_70651_72522[(2)] = null);

(statearr_70651_72522[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70643 === (17))){
var inst_70635 = (state_70642[(2)]);
var state_70642__$1 = (function (){var statearr_70653 = state_70642;
(statearr_70653[(10)] = inst_70635);

return statearr_70653;
})();
var statearr_70654_72526 = state_70642__$1;
(statearr_70654_72526[(2)] = null);

(statearr_70654_72526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70643 === (3))){
var inst_70640 = (state_70642[(2)]);
var state_70642__$1 = state_70642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70642__$1,inst_70640);
} else {
if((state_val_70643 === (12))){
var _ = (function (){var statearr_70655 = state_70642;
(statearr_70655[(4)] = cljs.core.rest((state_70642[(4)])));

return statearr_70655;
})();
var state_70642__$1 = state_70642;
var ex70652 = (state_70642__$1[(2)]);
var statearr_70656_72530 = state_70642__$1;
(statearr_70656_72530[(5)] = ex70652);


if((ex70652 instanceof Object)){
var statearr_70657_72531 = state_70642__$1;
(statearr_70657_72531[(1)] = (11));

(statearr_70657_72531[(5)] = null);

} else {
throw ex70652;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70643 === (2))){
var inst_70601 = cljs.core.reset_BANG_(dctr,cnt);
var inst_70602 = cnt;
var inst_70603 = (0);
var state_70642__$1 = (function (){var statearr_70658 = state_70642;
(statearr_70658[(11)] = inst_70601);

(statearr_70658[(7)] = inst_70602);

(statearr_70658[(8)] = inst_70603);

return statearr_70658;
})();
var statearr_70659_72535 = state_70642__$1;
(statearr_70659_72535[(2)] = null);

(statearr_70659_72535[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70643 === (11))){
var inst_70607 = (state_70642[(2)]);
var inst_70608 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_70642__$1 = (function (){var statearr_70660 = state_70642;
(statearr_70660[(12)] = inst_70607);

return statearr_70660;
})();
var statearr_70661_72536 = state_70642__$1;
(statearr_70661_72536[(2)] = inst_70608);

(statearr_70661_72536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70643 === (9))){
var inst_70603 = (state_70642[(8)]);
var _ = (function (){var statearr_70662 = state_70642;
(statearr_70662[(4)] = cljs.core.cons((12),(state_70642[(4)])));

return statearr_70662;
})();
var inst_70614 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_70603) : chs__$1.call(null,inst_70603));
var inst_70615 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_70603) : done.call(null,inst_70603));
var inst_70616 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_70614,inst_70615);
var ___$1 = (function (){var statearr_70663 = state_70642;
(statearr_70663[(4)] = cljs.core.rest((state_70642[(4)])));

return statearr_70663;
})();
var state_70642__$1 = state_70642;
var statearr_70664_72539 = state_70642__$1;
(statearr_70664_72539[(2)] = inst_70616);

(statearr_70664_72539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70643 === (5))){
var inst_70626 = (state_70642[(2)]);
var state_70642__$1 = (function (){var statearr_70665 = state_70642;
(statearr_70665[(13)] = inst_70626);

return statearr_70665;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70642__$1,(13),dchan);
} else {
if((state_val_70643 === (14))){
var inst_70631 = cljs.core.async.close_BANG_(out);
var state_70642__$1 = state_70642;
var statearr_70666_72541 = state_70642__$1;
(statearr_70666_72541[(2)] = inst_70631);

(statearr_70666_72541[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70643 === (16))){
var inst_70638 = (state_70642[(2)]);
var state_70642__$1 = state_70642;
var statearr_70667_72542 = state_70642__$1;
(statearr_70667_72542[(2)] = inst_70638);

(statearr_70667_72542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70643 === (10))){
var inst_70603 = (state_70642[(8)]);
var inst_70619 = (state_70642[(2)]);
var inst_70620 = (inst_70603 + (1));
var inst_70603__$1 = inst_70620;
var state_70642__$1 = (function (){var statearr_70668 = state_70642;
(statearr_70668[(14)] = inst_70619);

(statearr_70668[(8)] = inst_70603__$1);

return statearr_70668;
})();
var statearr_70669_72543 = state_70642__$1;
(statearr_70669_72543[(2)] = null);

(statearr_70669_72543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70643 === (8))){
var inst_70624 = (state_70642[(2)]);
var state_70642__$1 = state_70642;
var statearr_70670_72544 = state_70642__$1;
(statearr_70670_72544[(2)] = inst_70624);

(statearr_70670_72544[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__69184__auto__ = null;
var cljs$core$async$state_machine__69184__auto____0 = (function (){
var statearr_70671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70671[(0)] = cljs$core$async$state_machine__69184__auto__);

(statearr_70671[(1)] = (1));

return statearr_70671;
});
var cljs$core$async$state_machine__69184__auto____1 = (function (state_70642){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_70642);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e70672){var ex__69187__auto__ = e70672;
var statearr_70673_72545 = state_70642;
(statearr_70673_72545[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_70642[(4)]))){
var statearr_70674_72547 = state_70642;
(statearr_70674_72547[(1)] = cljs.core.first((state_70642[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72548 = state_70642;
state_70642 = G__72548;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$state_machine__69184__auto__ = function(state_70642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69184__auto____1.call(this,state_70642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69184__auto____0;
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69184__auto____1;
return cljs$core$async$state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_70675 = f__69319__auto__();
(statearr_70675[(6)] = c__69318__auto___72507);

return statearr_70675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
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
var G__70678 = arguments.length;
switch (G__70678) {
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
var c__69318__auto___72550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_70710){
var state_val_70711 = (state_70710[(1)]);
if((state_val_70711 === (7))){
var inst_70690 = (state_70710[(7)]);
var inst_70689 = (state_70710[(8)]);
var inst_70689__$1 = (state_70710[(2)]);
var inst_70690__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70689__$1,(0),null);
var inst_70691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70689__$1,(1),null);
var inst_70692 = (inst_70690__$1 == null);
var state_70710__$1 = (function (){var statearr_70712 = state_70710;
(statearr_70712[(7)] = inst_70690__$1);

(statearr_70712[(9)] = inst_70691);

(statearr_70712[(8)] = inst_70689__$1);

return statearr_70712;
})();
if(cljs.core.truth_(inst_70692)){
var statearr_70713_72555 = state_70710__$1;
(statearr_70713_72555[(1)] = (8));

} else {
var statearr_70714_72556 = state_70710__$1;
(statearr_70714_72556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70711 === (1))){
var inst_70679 = cljs.core.vec(chs);
var inst_70680 = inst_70679;
var state_70710__$1 = (function (){var statearr_70715 = state_70710;
(statearr_70715[(10)] = inst_70680);

return statearr_70715;
})();
var statearr_70716_72557 = state_70710__$1;
(statearr_70716_72557[(2)] = null);

(statearr_70716_72557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70711 === (4))){
var inst_70680 = (state_70710[(10)]);
var state_70710__$1 = state_70710;
return cljs.core.async.ioc_alts_BANG_(state_70710__$1,(7),inst_70680);
} else {
if((state_val_70711 === (6))){
var inst_70706 = (state_70710[(2)]);
var state_70710__$1 = state_70710;
var statearr_70717_72558 = state_70710__$1;
(statearr_70717_72558[(2)] = inst_70706);

(statearr_70717_72558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70711 === (3))){
var inst_70708 = (state_70710[(2)]);
var state_70710__$1 = state_70710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70710__$1,inst_70708);
} else {
if((state_val_70711 === (2))){
var inst_70680 = (state_70710[(10)]);
var inst_70682 = cljs.core.count(inst_70680);
var inst_70683 = (inst_70682 > (0));
var state_70710__$1 = state_70710;
if(cljs.core.truth_(inst_70683)){
var statearr_70719_72559 = state_70710__$1;
(statearr_70719_72559[(1)] = (4));

} else {
var statearr_70720_72561 = state_70710__$1;
(statearr_70720_72561[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70711 === (11))){
var inst_70680 = (state_70710[(10)]);
var inst_70699 = (state_70710[(2)]);
var tmp70718 = inst_70680;
var inst_70680__$1 = tmp70718;
var state_70710__$1 = (function (){var statearr_70721 = state_70710;
(statearr_70721[(11)] = inst_70699);

(statearr_70721[(10)] = inst_70680__$1);

return statearr_70721;
})();
var statearr_70722_72562 = state_70710__$1;
(statearr_70722_72562[(2)] = null);

(statearr_70722_72562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70711 === (9))){
var inst_70690 = (state_70710[(7)]);
var state_70710__$1 = state_70710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70710__$1,(11),out,inst_70690);
} else {
if((state_val_70711 === (5))){
var inst_70704 = cljs.core.async.close_BANG_(out);
var state_70710__$1 = state_70710;
var statearr_70723_72565 = state_70710__$1;
(statearr_70723_72565[(2)] = inst_70704);

(statearr_70723_72565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70711 === (10))){
var inst_70702 = (state_70710[(2)]);
var state_70710__$1 = state_70710;
var statearr_70724_72566 = state_70710__$1;
(statearr_70724_72566[(2)] = inst_70702);

(statearr_70724_72566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70711 === (8))){
var inst_70690 = (state_70710[(7)]);
var inst_70691 = (state_70710[(9)]);
var inst_70680 = (state_70710[(10)]);
var inst_70689 = (state_70710[(8)]);
var inst_70694 = (function (){var cs = inst_70680;
var vec__70685 = inst_70689;
var v = inst_70690;
var c = inst_70691;
return (function (p1__70676_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__70676_SHARP_);
});
})();
var inst_70695 = cljs.core.filterv(inst_70694,inst_70680);
var inst_70680__$1 = inst_70695;
var state_70710__$1 = (function (){var statearr_70729 = state_70710;
(statearr_70729[(10)] = inst_70680__$1);

return statearr_70729;
})();
var statearr_70730_72576 = state_70710__$1;
(statearr_70730_72576[(2)] = null);

(statearr_70730_72576[(1)] = (2));


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
var cljs$core$async$state_machine__69184__auto__ = null;
var cljs$core$async$state_machine__69184__auto____0 = (function (){
var statearr_70732 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70732[(0)] = cljs$core$async$state_machine__69184__auto__);

(statearr_70732[(1)] = (1));

return statearr_70732;
});
var cljs$core$async$state_machine__69184__auto____1 = (function (state_70710){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_70710);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e70733){var ex__69187__auto__ = e70733;
var statearr_70734_72578 = state_70710;
(statearr_70734_72578[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_70710[(4)]))){
var statearr_70735_72582 = state_70710;
(statearr_70735_72582[(1)] = cljs.core.first((state_70710[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72587 = state_70710;
state_70710 = G__72587;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$state_machine__69184__auto__ = function(state_70710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69184__auto____1.call(this,state_70710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69184__auto____0;
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69184__auto____1;
return cljs$core$async$state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_70737 = f__69319__auto__();
(statearr_70737[(6)] = c__69318__auto___72550);

return statearr_70737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
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
var G__70743 = arguments.length;
switch (G__70743) {
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
var c__69318__auto___72604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_70767){
var state_val_70768 = (state_70767[(1)]);
if((state_val_70768 === (7))){
var inst_70749 = (state_70767[(7)]);
var inst_70749__$1 = (state_70767[(2)]);
var inst_70750 = (inst_70749__$1 == null);
var inst_70751 = cljs.core.not(inst_70750);
var state_70767__$1 = (function (){var statearr_70769 = state_70767;
(statearr_70769[(7)] = inst_70749__$1);

return statearr_70769;
})();
if(inst_70751){
var statearr_70770_72619 = state_70767__$1;
(statearr_70770_72619[(1)] = (8));

} else {
var statearr_70771_72620 = state_70767__$1;
(statearr_70771_72620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70768 === (1))){
var inst_70744 = (0);
var state_70767__$1 = (function (){var statearr_70772 = state_70767;
(statearr_70772[(8)] = inst_70744);

return statearr_70772;
})();
var statearr_70773_72628 = state_70767__$1;
(statearr_70773_72628[(2)] = null);

(statearr_70773_72628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70768 === (4))){
var state_70767__$1 = state_70767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70767__$1,(7),ch);
} else {
if((state_val_70768 === (6))){
var inst_70762 = (state_70767[(2)]);
var state_70767__$1 = state_70767;
var statearr_70774_72629 = state_70767__$1;
(statearr_70774_72629[(2)] = inst_70762);

(statearr_70774_72629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70768 === (3))){
var inst_70764 = (state_70767[(2)]);
var inst_70765 = cljs.core.async.close_BANG_(out);
var state_70767__$1 = (function (){var statearr_70775 = state_70767;
(statearr_70775[(9)] = inst_70764);

return statearr_70775;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_70767__$1,inst_70765);
} else {
if((state_val_70768 === (2))){
var inst_70744 = (state_70767[(8)]);
var inst_70746 = (inst_70744 < n);
var state_70767__$1 = state_70767;
if(cljs.core.truth_(inst_70746)){
var statearr_70776_72632 = state_70767__$1;
(statearr_70776_72632[(1)] = (4));

} else {
var statearr_70777_72633 = state_70767__$1;
(statearr_70777_72633[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70768 === (11))){
var inst_70744 = (state_70767[(8)]);
var inst_70754 = (state_70767[(2)]);
var inst_70755 = (inst_70744 + (1));
var inst_70744__$1 = inst_70755;
var state_70767__$1 = (function (){var statearr_70778 = state_70767;
(statearr_70778[(10)] = inst_70754);

(statearr_70778[(8)] = inst_70744__$1);

return statearr_70778;
})();
var statearr_70779_72636 = state_70767__$1;
(statearr_70779_72636[(2)] = null);

(statearr_70779_72636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70768 === (9))){
var state_70767__$1 = state_70767;
var statearr_70780_72637 = state_70767__$1;
(statearr_70780_72637[(2)] = null);

(statearr_70780_72637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70768 === (5))){
var state_70767__$1 = state_70767;
var statearr_70781_72638 = state_70767__$1;
(statearr_70781_72638[(2)] = null);

(statearr_70781_72638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70768 === (10))){
var inst_70759 = (state_70767[(2)]);
var state_70767__$1 = state_70767;
var statearr_70782_72639 = state_70767__$1;
(statearr_70782_72639[(2)] = inst_70759);

(statearr_70782_72639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70768 === (8))){
var inst_70749 = (state_70767[(7)]);
var state_70767__$1 = state_70767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70767__$1,(11),out,inst_70749);
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
var cljs$core$async$state_machine__69184__auto__ = null;
var cljs$core$async$state_machine__69184__auto____0 = (function (){
var statearr_70783 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70783[(0)] = cljs$core$async$state_machine__69184__auto__);

(statearr_70783[(1)] = (1));

return statearr_70783;
});
var cljs$core$async$state_machine__69184__auto____1 = (function (state_70767){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_70767);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e70787){var ex__69187__auto__ = e70787;
var statearr_70788_72643 = state_70767;
(statearr_70788_72643[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_70767[(4)]))){
var statearr_70789_72644 = state_70767;
(statearr_70789_72644[(1)] = cljs.core.first((state_70767[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72645 = state_70767;
state_70767 = G__72645;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$state_machine__69184__auto__ = function(state_70767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69184__auto____1.call(this,state_70767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69184__auto____0;
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69184__auto____1;
return cljs$core$async$state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_70790 = f__69319__auto__();
(statearr_70790[(6)] = c__69318__auto___72604);

return statearr_70790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70792 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70792 = (function (f,ch,meta70793){
this.f = f;
this.ch = ch;
this.meta70793 = meta70793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70794,meta70793__$1){
var self__ = this;
var _70794__$1 = this;
return (new cljs.core.async.t_cljs$core$async70792(self__.f,self__.ch,meta70793__$1));
}));

(cljs.core.async.t_cljs$core$async70792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70794){
var self__ = this;
var _70794__$1 = this;
return self__.meta70793;
}));

(cljs.core.async.t_cljs$core$async70792.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async70792.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async70792.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70795 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70795 = (function (f,ch,meta70793,_,fn1,meta70796){
this.f = f;
this.ch = ch;
this.meta70793 = meta70793;
this._ = _;
this.fn1 = fn1;
this.meta70796 = meta70796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70797,meta70796__$1){
var self__ = this;
var _70797__$1 = this;
return (new cljs.core.async.t_cljs$core$async70795(self__.f,self__.ch,self__.meta70793,self__._,self__.fn1,meta70796__$1));
}));

(cljs.core.async.t_cljs$core$async70795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70797){
var self__ = this;
var _70797__$1 = this;
return self__.meta70796;
}));

(cljs.core.async.t_cljs$core$async70795.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70795.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async70795.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async70795.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__70791_SHARP_){
var G__70799 = (((p1__70791_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__70791_SHARP_) : self__.f.call(null,p1__70791_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__70799) : f1.call(null,G__70799));
});
}));

(cljs.core.async.t_cljs$core$async70795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70793","meta70793",1070858388,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async70792","cljs.core.async/t_cljs$core$async70792",-27540164,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta70796","meta70796",-1242717704,null)], null);
}));

(cljs.core.async.t_cljs$core$async70795.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70795");

(cljs.core.async.t_cljs$core$async70795.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async70795");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70795.
 */
cljs.core.async.__GT_t_cljs$core$async70795 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async70795(f__$1,ch__$1,meta70793__$1,___$2,fn1__$1,meta70796){
return (new cljs.core.async.t_cljs$core$async70795(f__$1,ch__$1,meta70793__$1,___$2,fn1__$1,meta70796));
});

}

return (new cljs.core.async.t_cljs$core$async70795(self__.f,self__.ch,self__.meta70793,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__70800 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__70800) : self__.f.call(null,G__70800));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async70792.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async70792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70793","meta70793",1070858388,null)], null);
}));

(cljs.core.async.t_cljs$core$async70792.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70792");

(cljs.core.async.t_cljs$core$async70792.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async70792");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70792.
 */
cljs.core.async.__GT_t_cljs$core$async70792 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async70792(f__$1,ch__$1,meta70793){
return (new cljs.core.async.t_cljs$core$async70792(f__$1,ch__$1,meta70793));
});

}

return (new cljs.core.async.t_cljs$core$async70792(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70808 = (function (f,ch,meta70809){
this.f = f;
this.ch = ch;
this.meta70809 = meta70809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70810,meta70809__$1){
var self__ = this;
var _70810__$1 = this;
return (new cljs.core.async.t_cljs$core$async70808(self__.f,self__.ch,meta70809__$1));
}));

(cljs.core.async.t_cljs$core$async70808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70810){
var self__ = this;
var _70810__$1 = this;
return self__.meta70809;
}));

(cljs.core.async.t_cljs$core$async70808.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70808.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async70808.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70808.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async70808.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70808.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async70808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70809","meta70809",-1816997109,null)], null);
}));

(cljs.core.async.t_cljs$core$async70808.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70808");

(cljs.core.async.t_cljs$core$async70808.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async70808");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70808.
 */
cljs.core.async.__GT_t_cljs$core$async70808 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async70808(f__$1,ch__$1,meta70809){
return (new cljs.core.async.t_cljs$core$async70808(f__$1,ch__$1,meta70809));
});

}

return (new cljs.core.async.t_cljs$core$async70808(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70817 = (function (p,ch,meta70818){
this.p = p;
this.ch = ch;
this.meta70818 = meta70818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70819,meta70818__$1){
var self__ = this;
var _70819__$1 = this;
return (new cljs.core.async.t_cljs$core$async70817(self__.p,self__.ch,meta70818__$1));
}));

(cljs.core.async.t_cljs$core$async70817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70819){
var self__ = this;
var _70819__$1 = this;
return self__.meta70818;
}));

(cljs.core.async.t_cljs$core$async70817.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70817.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async70817.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async70817.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70817.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async70817.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70817.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async70817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70818","meta70818",-1862984978,null)], null);
}));

(cljs.core.async.t_cljs$core$async70817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70817");

(cljs.core.async.t_cljs$core$async70817.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async70817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70817.
 */
cljs.core.async.__GT_t_cljs$core$async70817 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async70817(p__$1,ch__$1,meta70818){
return (new cljs.core.async.t_cljs$core$async70817(p__$1,ch__$1,meta70818));
});

}

return (new cljs.core.async.t_cljs$core$async70817(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__70831 = arguments.length;
switch (G__70831) {
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
var c__69318__auto___72744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_70852){
var state_val_70853 = (state_70852[(1)]);
if((state_val_70853 === (7))){
var inst_70848 = (state_70852[(2)]);
var state_70852__$1 = state_70852;
var statearr_70856_72746 = state_70852__$1;
(statearr_70856_72746[(2)] = inst_70848);

(statearr_70856_72746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70853 === (1))){
var state_70852__$1 = state_70852;
var statearr_70857_72750 = state_70852__$1;
(statearr_70857_72750[(2)] = null);

(statearr_70857_72750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70853 === (4))){
var inst_70834 = (state_70852[(7)]);
var inst_70834__$1 = (state_70852[(2)]);
var inst_70835 = (inst_70834__$1 == null);
var state_70852__$1 = (function (){var statearr_70861 = state_70852;
(statearr_70861[(7)] = inst_70834__$1);

return statearr_70861;
})();
if(cljs.core.truth_(inst_70835)){
var statearr_70862_72782 = state_70852__$1;
(statearr_70862_72782[(1)] = (5));

} else {
var statearr_70863_72786 = state_70852__$1;
(statearr_70863_72786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70853 === (6))){
var inst_70834 = (state_70852[(7)]);
var inst_70839 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_70834) : p.call(null,inst_70834));
var state_70852__$1 = state_70852;
if(cljs.core.truth_(inst_70839)){
var statearr_70867_72797 = state_70852__$1;
(statearr_70867_72797[(1)] = (8));

} else {
var statearr_70868_72798 = state_70852__$1;
(statearr_70868_72798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70853 === (3))){
var inst_70850 = (state_70852[(2)]);
var state_70852__$1 = state_70852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70852__$1,inst_70850);
} else {
if((state_val_70853 === (2))){
var state_70852__$1 = state_70852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70852__$1,(4),ch);
} else {
if((state_val_70853 === (11))){
var inst_70842 = (state_70852[(2)]);
var state_70852__$1 = state_70852;
var statearr_70869_72809 = state_70852__$1;
(statearr_70869_72809[(2)] = inst_70842);

(statearr_70869_72809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70853 === (9))){
var state_70852__$1 = state_70852;
var statearr_70872_72810 = state_70852__$1;
(statearr_70872_72810[(2)] = null);

(statearr_70872_72810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70853 === (5))){
var inst_70837 = cljs.core.async.close_BANG_(out);
var state_70852__$1 = state_70852;
var statearr_70874_72816 = state_70852__$1;
(statearr_70874_72816[(2)] = inst_70837);

(statearr_70874_72816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70853 === (10))){
var inst_70845 = (state_70852[(2)]);
var state_70852__$1 = (function (){var statearr_70875 = state_70852;
(statearr_70875[(8)] = inst_70845);

return statearr_70875;
})();
var statearr_70876_72852 = state_70852__$1;
(statearr_70876_72852[(2)] = null);

(statearr_70876_72852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70853 === (8))){
var inst_70834 = (state_70852[(7)]);
var state_70852__$1 = state_70852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70852__$1,(11),out,inst_70834);
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
var cljs$core$async$state_machine__69184__auto__ = null;
var cljs$core$async$state_machine__69184__auto____0 = (function (){
var statearr_70877 = [null,null,null,null,null,null,null,null,null];
(statearr_70877[(0)] = cljs$core$async$state_machine__69184__auto__);

(statearr_70877[(1)] = (1));

return statearr_70877;
});
var cljs$core$async$state_machine__69184__auto____1 = (function (state_70852){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_70852);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e70878){var ex__69187__auto__ = e70878;
var statearr_70879_72887 = state_70852;
(statearr_70879_72887[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_70852[(4)]))){
var statearr_70880_72906 = state_70852;
(statearr_70880_72906[(1)] = cljs.core.first((state_70852[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72910 = state_70852;
state_70852 = G__72910;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$state_machine__69184__auto__ = function(state_70852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69184__auto____1.call(this,state_70852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69184__auto____0;
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69184__auto____1;
return cljs$core$async$state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_70881 = f__69319__auto__();
(statearr_70881[(6)] = c__69318__auto___72744);

return statearr_70881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__70886 = arguments.length;
switch (G__70886) {
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
var c__69318__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_70954){
var state_val_70955 = (state_70954[(1)]);
if((state_val_70955 === (7))){
var inst_70950 = (state_70954[(2)]);
var state_70954__$1 = state_70954;
var statearr_70960_72946 = state_70954__$1;
(statearr_70960_72946[(2)] = inst_70950);

(statearr_70960_72946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (20))){
var inst_70920 = (state_70954[(7)]);
var inst_70931 = (state_70954[(2)]);
var inst_70932 = cljs.core.next(inst_70920);
var inst_70906 = inst_70932;
var inst_70907 = null;
var inst_70908 = (0);
var inst_70909 = (0);
var state_70954__$1 = (function (){var statearr_70963 = state_70954;
(statearr_70963[(8)] = inst_70908);

(statearr_70963[(9)] = inst_70907);

(statearr_70963[(10)] = inst_70909);

(statearr_70963[(11)] = inst_70906);

(statearr_70963[(12)] = inst_70931);

return statearr_70963;
})();
var statearr_70964_72977 = state_70954__$1;
(statearr_70964_72977[(2)] = null);

(statearr_70964_72977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (1))){
var state_70954__$1 = state_70954;
var statearr_70965_72978 = state_70954__$1;
(statearr_70965_72978[(2)] = null);

(statearr_70965_72978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (4))){
var inst_70895 = (state_70954[(13)]);
var inst_70895__$1 = (state_70954[(2)]);
var inst_70896 = (inst_70895__$1 == null);
var state_70954__$1 = (function (){var statearr_70966 = state_70954;
(statearr_70966[(13)] = inst_70895__$1);

return statearr_70966;
})();
if(cljs.core.truth_(inst_70896)){
var statearr_70967_72995 = state_70954__$1;
(statearr_70967_72995[(1)] = (5));

} else {
var statearr_70968_72997 = state_70954__$1;
(statearr_70968_72997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (15))){
var state_70954__$1 = state_70954;
var statearr_70972_72999 = state_70954__$1;
(statearr_70972_72999[(2)] = null);

(statearr_70972_72999[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (21))){
var state_70954__$1 = state_70954;
var statearr_70973_73001 = state_70954__$1;
(statearr_70973_73001[(2)] = null);

(statearr_70973_73001[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (13))){
var inst_70908 = (state_70954[(8)]);
var inst_70907 = (state_70954[(9)]);
var inst_70909 = (state_70954[(10)]);
var inst_70906 = (state_70954[(11)]);
var inst_70916 = (state_70954[(2)]);
var inst_70917 = (inst_70909 + (1));
var tmp70969 = inst_70908;
var tmp70970 = inst_70907;
var tmp70971 = inst_70906;
var inst_70906__$1 = tmp70971;
var inst_70907__$1 = tmp70970;
var inst_70908__$1 = tmp70969;
var inst_70909__$1 = inst_70917;
var state_70954__$1 = (function (){var statearr_70974 = state_70954;
(statearr_70974[(8)] = inst_70908__$1);

(statearr_70974[(9)] = inst_70907__$1);

(statearr_70974[(14)] = inst_70916);

(statearr_70974[(10)] = inst_70909__$1);

(statearr_70974[(11)] = inst_70906__$1);

return statearr_70974;
})();
var statearr_70978_73043 = state_70954__$1;
(statearr_70978_73043[(2)] = null);

(statearr_70978_73043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (22))){
var state_70954__$1 = state_70954;
var statearr_70979_73045 = state_70954__$1;
(statearr_70979_73045[(2)] = null);

(statearr_70979_73045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (6))){
var inst_70895 = (state_70954[(13)]);
var inst_70904 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_70895) : f.call(null,inst_70895));
var inst_70905 = cljs.core.seq(inst_70904);
var inst_70906 = inst_70905;
var inst_70907 = null;
var inst_70908 = (0);
var inst_70909 = (0);
var state_70954__$1 = (function (){var statearr_70980 = state_70954;
(statearr_70980[(8)] = inst_70908);

(statearr_70980[(9)] = inst_70907);

(statearr_70980[(10)] = inst_70909);

(statearr_70980[(11)] = inst_70906);

return statearr_70980;
})();
var statearr_70981_73089 = state_70954__$1;
(statearr_70981_73089[(2)] = null);

(statearr_70981_73089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (17))){
var inst_70920 = (state_70954[(7)]);
var inst_70924 = cljs.core.chunk_first(inst_70920);
var inst_70925 = cljs.core.chunk_rest(inst_70920);
var inst_70926 = cljs.core.count(inst_70924);
var inst_70906 = inst_70925;
var inst_70907 = inst_70924;
var inst_70908 = inst_70926;
var inst_70909 = (0);
var state_70954__$1 = (function (){var statearr_70983 = state_70954;
(statearr_70983[(8)] = inst_70908);

(statearr_70983[(9)] = inst_70907);

(statearr_70983[(10)] = inst_70909);

(statearr_70983[(11)] = inst_70906);

return statearr_70983;
})();
var statearr_70987_73098 = state_70954__$1;
(statearr_70987_73098[(2)] = null);

(statearr_70987_73098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (3))){
var inst_70952 = (state_70954[(2)]);
var state_70954__$1 = state_70954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70954__$1,inst_70952);
} else {
if((state_val_70955 === (12))){
var inst_70940 = (state_70954[(2)]);
var state_70954__$1 = state_70954;
var statearr_70989_73102 = state_70954__$1;
(statearr_70989_73102[(2)] = inst_70940);

(statearr_70989_73102[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (2))){
var state_70954__$1 = state_70954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70954__$1,(4),in$);
} else {
if((state_val_70955 === (23))){
var inst_70948 = (state_70954[(2)]);
var state_70954__$1 = state_70954;
var statearr_70990_73111 = state_70954__$1;
(statearr_70990_73111[(2)] = inst_70948);

(statearr_70990_73111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (19))){
var inst_70935 = (state_70954[(2)]);
var state_70954__$1 = state_70954;
var statearr_70991_73112 = state_70954__$1;
(statearr_70991_73112[(2)] = inst_70935);

(statearr_70991_73112[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (11))){
var inst_70920 = (state_70954[(7)]);
var inst_70906 = (state_70954[(11)]);
var inst_70920__$1 = cljs.core.seq(inst_70906);
var state_70954__$1 = (function (){var statearr_70992 = state_70954;
(statearr_70992[(7)] = inst_70920__$1);

return statearr_70992;
})();
if(inst_70920__$1){
var statearr_70993_73113 = state_70954__$1;
(statearr_70993_73113[(1)] = (14));

} else {
var statearr_70994_73114 = state_70954__$1;
(statearr_70994_73114[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (9))){
var inst_70942 = (state_70954[(2)]);
var inst_70943 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_70954__$1 = (function (){var statearr_70995 = state_70954;
(statearr_70995[(15)] = inst_70942);

return statearr_70995;
})();
if(cljs.core.truth_(inst_70943)){
var statearr_70996_73118 = state_70954__$1;
(statearr_70996_73118[(1)] = (21));

} else {
var statearr_70997_73119 = state_70954__$1;
(statearr_70997_73119[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (5))){
var inst_70898 = cljs.core.async.close_BANG_(out);
var state_70954__$1 = state_70954;
var statearr_70998_73120 = state_70954__$1;
(statearr_70998_73120[(2)] = inst_70898);

(statearr_70998_73120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (14))){
var inst_70920 = (state_70954[(7)]);
var inst_70922 = cljs.core.chunked_seq_QMARK_(inst_70920);
var state_70954__$1 = state_70954;
if(inst_70922){
var statearr_70999_73121 = state_70954__$1;
(statearr_70999_73121[(1)] = (17));

} else {
var statearr_71000_73122 = state_70954__$1;
(statearr_71000_73122[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (16))){
var inst_70938 = (state_70954[(2)]);
var state_70954__$1 = state_70954;
var statearr_71001_73123 = state_70954__$1;
(statearr_71001_73123[(2)] = inst_70938);

(statearr_71001_73123[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70955 === (10))){
var inst_70907 = (state_70954[(9)]);
var inst_70909 = (state_70954[(10)]);
var inst_70914 = cljs.core._nth(inst_70907,inst_70909);
var state_70954__$1 = state_70954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70954__$1,(13),out,inst_70914);
} else {
if((state_val_70955 === (18))){
var inst_70920 = (state_70954[(7)]);
var inst_70929 = cljs.core.first(inst_70920);
var state_70954__$1 = state_70954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70954__$1,(20),out,inst_70929);
} else {
if((state_val_70955 === (8))){
var inst_70908 = (state_70954[(8)]);
var inst_70909 = (state_70954[(10)]);
var inst_70911 = (inst_70909 < inst_70908);
var inst_70912 = inst_70911;
var state_70954__$1 = state_70954;
if(cljs.core.truth_(inst_70912)){
var statearr_71004_73124 = state_70954__$1;
(statearr_71004_73124[(1)] = (10));

} else {
var statearr_71006_73125 = state_70954__$1;
(statearr_71006_73125[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__69184__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__69184__auto____0 = (function (){
var statearr_71007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71007[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__69184__auto__);

(statearr_71007[(1)] = (1));

return statearr_71007;
});
var cljs$core$async$mapcat_STAR__$_state_machine__69184__auto____1 = (function (state_70954){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_70954);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e71008){var ex__69187__auto__ = e71008;
var statearr_71009_73126 = state_70954;
(statearr_71009_73126[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_70954[(4)]))){
var statearr_71010_73127 = state_70954;
(statearr_71010_73127[(1)] = cljs.core.first((state_70954[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73128 = state_70954;
state_70954 = G__73128;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__69184__auto__ = function(state_70954){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__69184__auto____1.call(this,state_70954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__69184__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__69184__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_71011 = f__69319__auto__();
(statearr_71011[(6)] = c__69318__auto__);

return statearr_71011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
}));

return c__69318__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__71013 = arguments.length;
switch (G__71013) {
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
var G__71018 = arguments.length;
switch (G__71018) {
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
var G__71032 = arguments.length;
switch (G__71032) {
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
var c__69318__auto___73136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_71059){
var state_val_71060 = (state_71059[(1)]);
if((state_val_71060 === (7))){
var inst_71054 = (state_71059[(2)]);
var state_71059__$1 = state_71059;
var statearr_71064_73137 = state_71059__$1;
(statearr_71064_73137[(2)] = inst_71054);

(statearr_71064_73137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71060 === (1))){
var inst_71036 = null;
var state_71059__$1 = (function (){var statearr_71065 = state_71059;
(statearr_71065[(7)] = inst_71036);

return statearr_71065;
})();
var statearr_71066_73138 = state_71059__$1;
(statearr_71066_73138[(2)] = null);

(statearr_71066_73138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71060 === (4))){
var inst_71039 = (state_71059[(8)]);
var inst_71039__$1 = (state_71059[(2)]);
var inst_71040 = (inst_71039__$1 == null);
var inst_71041 = cljs.core.not(inst_71040);
var state_71059__$1 = (function (){var statearr_71067 = state_71059;
(statearr_71067[(8)] = inst_71039__$1);

return statearr_71067;
})();
if(inst_71041){
var statearr_71068_73139 = state_71059__$1;
(statearr_71068_73139[(1)] = (5));

} else {
var statearr_71069_73140 = state_71059__$1;
(statearr_71069_73140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71060 === (6))){
var state_71059__$1 = state_71059;
var statearr_71070_73141 = state_71059__$1;
(statearr_71070_73141[(2)] = null);

(statearr_71070_73141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71060 === (3))){
var inst_71056 = (state_71059[(2)]);
var inst_71057 = cljs.core.async.close_BANG_(out);
var state_71059__$1 = (function (){var statearr_71076 = state_71059;
(statearr_71076[(9)] = inst_71056);

return statearr_71076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71059__$1,inst_71057);
} else {
if((state_val_71060 === (2))){
var state_71059__$1 = state_71059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71059__$1,(4),ch);
} else {
if((state_val_71060 === (11))){
var inst_71039 = (state_71059[(8)]);
var inst_71048 = (state_71059[(2)]);
var inst_71036 = inst_71039;
var state_71059__$1 = (function (){var statearr_71078 = state_71059;
(statearr_71078[(10)] = inst_71048);

(statearr_71078[(7)] = inst_71036);

return statearr_71078;
})();
var statearr_71079_73142 = state_71059__$1;
(statearr_71079_73142[(2)] = null);

(statearr_71079_73142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71060 === (9))){
var inst_71039 = (state_71059[(8)]);
var state_71059__$1 = state_71059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71059__$1,(11),out,inst_71039);
} else {
if((state_val_71060 === (5))){
var inst_71036 = (state_71059[(7)]);
var inst_71039 = (state_71059[(8)]);
var inst_71043 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71039,inst_71036);
var state_71059__$1 = state_71059;
if(inst_71043){
var statearr_71081_73143 = state_71059__$1;
(statearr_71081_73143[(1)] = (8));

} else {
var statearr_71084_73144 = state_71059__$1;
(statearr_71084_73144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71060 === (10))){
var inst_71051 = (state_71059[(2)]);
var state_71059__$1 = state_71059;
var statearr_71089_73145 = state_71059__$1;
(statearr_71089_73145[(2)] = inst_71051);

(statearr_71089_73145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71060 === (8))){
var inst_71036 = (state_71059[(7)]);
var tmp71080 = inst_71036;
var inst_71036__$1 = tmp71080;
var state_71059__$1 = (function (){var statearr_71090 = state_71059;
(statearr_71090[(7)] = inst_71036__$1);

return statearr_71090;
})();
var statearr_71091_73146 = state_71059__$1;
(statearr_71091_73146[(2)] = null);

(statearr_71091_73146[(1)] = (2));


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
var cljs$core$async$state_machine__69184__auto__ = null;
var cljs$core$async$state_machine__69184__auto____0 = (function (){
var statearr_71093 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71093[(0)] = cljs$core$async$state_machine__69184__auto__);

(statearr_71093[(1)] = (1));

return statearr_71093;
});
var cljs$core$async$state_machine__69184__auto____1 = (function (state_71059){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_71059);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e71097){var ex__69187__auto__ = e71097;
var statearr_71098_73147 = state_71059;
(statearr_71098_73147[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_71059[(4)]))){
var statearr_71099_73148 = state_71059;
(statearr_71099_73148[(1)] = cljs.core.first((state_71059[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73149 = state_71059;
state_71059 = G__73149;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$state_machine__69184__auto__ = function(state_71059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69184__auto____1.call(this,state_71059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69184__auto____0;
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69184__auto____1;
return cljs$core$async$state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_71100 = f__69319__auto__();
(statearr_71100[(6)] = c__69318__auto___73136);

return statearr_71100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__71102 = arguments.length;
switch (G__71102) {
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
var c__69318__auto___73151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_71146){
var state_val_71147 = (state_71146[(1)]);
if((state_val_71147 === (7))){
var inst_71142 = (state_71146[(2)]);
var state_71146__$1 = state_71146;
var statearr_71151_73152 = state_71146__$1;
(statearr_71151_73152[(2)] = inst_71142);

(statearr_71151_73152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71147 === (1))){
var inst_71108 = (new Array(n));
var inst_71109 = inst_71108;
var inst_71110 = (0);
var state_71146__$1 = (function (){var statearr_71152 = state_71146;
(statearr_71152[(7)] = inst_71109);

(statearr_71152[(8)] = inst_71110);

return statearr_71152;
})();
var statearr_71153_73153 = state_71146__$1;
(statearr_71153_73153[(2)] = null);

(statearr_71153_73153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71147 === (4))){
var inst_71114 = (state_71146[(9)]);
var inst_71114__$1 = (state_71146[(2)]);
var inst_71115 = (inst_71114__$1 == null);
var inst_71116 = cljs.core.not(inst_71115);
var state_71146__$1 = (function (){var statearr_71154 = state_71146;
(statearr_71154[(9)] = inst_71114__$1);

return statearr_71154;
})();
if(inst_71116){
var statearr_71155_73154 = state_71146__$1;
(statearr_71155_73154[(1)] = (5));

} else {
var statearr_71156_73155 = state_71146__$1;
(statearr_71156_73155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71147 === (15))){
var inst_71136 = (state_71146[(2)]);
var state_71146__$1 = state_71146;
var statearr_71161_73156 = state_71146__$1;
(statearr_71161_73156[(2)] = inst_71136);

(statearr_71161_73156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71147 === (13))){
var state_71146__$1 = state_71146;
var statearr_71162_73157 = state_71146__$1;
(statearr_71162_73157[(2)] = null);

(statearr_71162_73157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71147 === (6))){
var inst_71110 = (state_71146[(8)]);
var inst_71132 = (inst_71110 > (0));
var state_71146__$1 = state_71146;
if(cljs.core.truth_(inst_71132)){
var statearr_71163_73158 = state_71146__$1;
(statearr_71163_73158[(1)] = (12));

} else {
var statearr_71164_73159 = state_71146__$1;
(statearr_71164_73159[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71147 === (3))){
var inst_71144 = (state_71146[(2)]);
var state_71146__$1 = state_71146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71146__$1,inst_71144);
} else {
if((state_val_71147 === (12))){
var inst_71109 = (state_71146[(7)]);
var inst_71134 = cljs.core.vec(inst_71109);
var state_71146__$1 = state_71146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71146__$1,(15),out,inst_71134);
} else {
if((state_val_71147 === (2))){
var state_71146__$1 = state_71146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71146__$1,(4),ch);
} else {
if((state_val_71147 === (11))){
var inst_71126 = (state_71146[(2)]);
var inst_71127 = (new Array(n));
var inst_71109 = inst_71127;
var inst_71110 = (0);
var state_71146__$1 = (function (){var statearr_71168 = state_71146;
(statearr_71168[(10)] = inst_71126);

(statearr_71168[(7)] = inst_71109);

(statearr_71168[(8)] = inst_71110);

return statearr_71168;
})();
var statearr_71169_73160 = state_71146__$1;
(statearr_71169_73160[(2)] = null);

(statearr_71169_73160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71147 === (9))){
var inst_71109 = (state_71146[(7)]);
var inst_71124 = cljs.core.vec(inst_71109);
var state_71146__$1 = state_71146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71146__$1,(11),out,inst_71124);
} else {
if((state_val_71147 === (5))){
var inst_71109 = (state_71146[(7)]);
var inst_71119 = (state_71146[(11)]);
var inst_71114 = (state_71146[(9)]);
var inst_71110 = (state_71146[(8)]);
var inst_71118 = (inst_71109[inst_71110] = inst_71114);
var inst_71119__$1 = (inst_71110 + (1));
var inst_71120 = (inst_71119__$1 < n);
var state_71146__$1 = (function (){var statearr_71170 = state_71146;
(statearr_71170[(12)] = inst_71118);

(statearr_71170[(11)] = inst_71119__$1);

return statearr_71170;
})();
if(cljs.core.truth_(inst_71120)){
var statearr_71171_73161 = state_71146__$1;
(statearr_71171_73161[(1)] = (8));

} else {
var statearr_71172_73162 = state_71146__$1;
(statearr_71172_73162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71147 === (14))){
var inst_71139 = (state_71146[(2)]);
var inst_71140 = cljs.core.async.close_BANG_(out);
var state_71146__$1 = (function (){var statearr_71174 = state_71146;
(statearr_71174[(13)] = inst_71139);

return statearr_71174;
})();
var statearr_71175_73163 = state_71146__$1;
(statearr_71175_73163[(2)] = inst_71140);

(statearr_71175_73163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71147 === (10))){
var inst_71130 = (state_71146[(2)]);
var state_71146__$1 = state_71146;
var statearr_71179_73164 = state_71146__$1;
(statearr_71179_73164[(2)] = inst_71130);

(statearr_71179_73164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71147 === (8))){
var inst_71109 = (state_71146[(7)]);
var inst_71119 = (state_71146[(11)]);
var tmp71173 = inst_71109;
var inst_71109__$1 = tmp71173;
var inst_71110 = inst_71119;
var state_71146__$1 = (function (){var statearr_71180 = state_71146;
(statearr_71180[(7)] = inst_71109__$1);

(statearr_71180[(8)] = inst_71110);

return statearr_71180;
})();
var statearr_71181_73165 = state_71146__$1;
(statearr_71181_73165[(2)] = null);

(statearr_71181_73165[(1)] = (2));


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
var cljs$core$async$state_machine__69184__auto__ = null;
var cljs$core$async$state_machine__69184__auto____0 = (function (){
var statearr_71182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71182[(0)] = cljs$core$async$state_machine__69184__auto__);

(statearr_71182[(1)] = (1));

return statearr_71182;
});
var cljs$core$async$state_machine__69184__auto____1 = (function (state_71146){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_71146);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e71183){var ex__69187__auto__ = e71183;
var statearr_71184_73166 = state_71146;
(statearr_71184_73166[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_71146[(4)]))){
var statearr_71186_73167 = state_71146;
(statearr_71186_73167[(1)] = cljs.core.first((state_71146[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73168 = state_71146;
state_71146 = G__73168;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$state_machine__69184__auto__ = function(state_71146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69184__auto____1.call(this,state_71146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69184__auto____0;
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69184__auto____1;
return cljs$core$async$state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_71189 = f__69319__auto__();
(statearr_71189[(6)] = c__69318__auto___73151);

return statearr_71189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__71191 = arguments.length;
switch (G__71191) {
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
var c__69318__auto___73173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_71275){
var state_val_71276 = (state_71275[(1)]);
if((state_val_71276 === (7))){
var inst_71271 = (state_71275[(2)]);
var state_71275__$1 = state_71275;
var statearr_71280_73174 = state_71275__$1;
(statearr_71280_73174[(2)] = inst_71271);

(statearr_71280_73174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71276 === (1))){
var inst_71199 = [];
var inst_71206 = inst_71199;
var inst_71207 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_71275__$1 = (function (){var statearr_71281 = state_71275;
(statearr_71281[(7)] = inst_71206);

(statearr_71281[(8)] = inst_71207);

return statearr_71281;
})();
var statearr_71282_73175 = state_71275__$1;
(statearr_71282_73175[(2)] = null);

(statearr_71282_73175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71276 === (4))){
var inst_71216 = (state_71275[(9)]);
var inst_71216__$1 = (state_71275[(2)]);
var inst_71217 = (inst_71216__$1 == null);
var inst_71218 = cljs.core.not(inst_71217);
var state_71275__$1 = (function (){var statearr_71283 = state_71275;
(statearr_71283[(9)] = inst_71216__$1);

return statearr_71283;
})();
if(inst_71218){
var statearr_71284_73176 = state_71275__$1;
(statearr_71284_73176[(1)] = (5));

} else {
var statearr_71285_73177 = state_71275__$1;
(statearr_71285_73177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71276 === (15))){
var inst_71265 = (state_71275[(2)]);
var state_71275__$1 = state_71275;
var statearr_71294_73178 = state_71275__$1;
(statearr_71294_73178[(2)] = inst_71265);

(statearr_71294_73178[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71276 === (13))){
var state_71275__$1 = state_71275;
var statearr_71299_73179 = state_71275__$1;
(statearr_71299_73179[(2)] = null);

(statearr_71299_73179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71276 === (6))){
var inst_71206 = (state_71275[(7)]);
var inst_71257 = inst_71206.length;
var inst_71258 = (inst_71257 > (0));
var state_71275__$1 = state_71275;
if(cljs.core.truth_(inst_71258)){
var statearr_71300_73180 = state_71275__$1;
(statearr_71300_73180[(1)] = (12));

} else {
var statearr_71301_73181 = state_71275__$1;
(statearr_71301_73181[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71276 === (3))){
var inst_71273 = (state_71275[(2)]);
var state_71275__$1 = state_71275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71275__$1,inst_71273);
} else {
if((state_val_71276 === (12))){
var inst_71206 = (state_71275[(7)]);
var inst_71263 = cljs.core.vec(inst_71206);
var state_71275__$1 = state_71275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71275__$1,(15),out,inst_71263);
} else {
if((state_val_71276 === (2))){
var state_71275__$1 = state_71275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71275__$1,(4),ch);
} else {
if((state_val_71276 === (11))){
var inst_71216 = (state_71275[(9)]);
var inst_71221 = (state_71275[(10)]);
var inst_71244 = (state_71275[(2)]);
var inst_71245 = [];
var inst_71246 = inst_71245.push(inst_71216);
var inst_71206 = inst_71245;
var inst_71207 = inst_71221;
var state_71275__$1 = (function (){var statearr_71302 = state_71275;
(statearr_71302[(11)] = inst_71244);

(statearr_71302[(7)] = inst_71206);

(statearr_71302[(8)] = inst_71207);

(statearr_71302[(12)] = inst_71246);

return statearr_71302;
})();
var statearr_71303_73182 = state_71275__$1;
(statearr_71303_73182[(2)] = null);

(statearr_71303_73182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71276 === (9))){
var inst_71206 = (state_71275[(7)]);
var inst_71242 = cljs.core.vec(inst_71206);
var state_71275__$1 = state_71275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71275__$1,(11),out,inst_71242);
} else {
if((state_val_71276 === (5))){
var inst_71207 = (state_71275[(8)]);
var inst_71216 = (state_71275[(9)]);
var inst_71221 = (state_71275[(10)]);
var inst_71221__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_71216) : f.call(null,inst_71216));
var inst_71228 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71221__$1,inst_71207);
var inst_71229 = cljs.core.keyword_identical_QMARK_(inst_71207,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_71230 = ((inst_71228) || (inst_71229));
var state_71275__$1 = (function (){var statearr_71304 = state_71275;
(statearr_71304[(10)] = inst_71221__$1);

return statearr_71304;
})();
if(cljs.core.truth_(inst_71230)){
var statearr_71305_73183 = state_71275__$1;
(statearr_71305_73183[(1)] = (8));

} else {
var statearr_71306_73184 = state_71275__$1;
(statearr_71306_73184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71276 === (14))){
var inst_71268 = (state_71275[(2)]);
var inst_71269 = cljs.core.async.close_BANG_(out);
var state_71275__$1 = (function (){var statearr_71308 = state_71275;
(statearr_71308[(13)] = inst_71268);

return statearr_71308;
})();
var statearr_71309_73187 = state_71275__$1;
(statearr_71309_73187[(2)] = inst_71269);

(statearr_71309_73187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71276 === (10))){
var inst_71252 = (state_71275[(2)]);
var state_71275__$1 = state_71275;
var statearr_71310_73188 = state_71275__$1;
(statearr_71310_73188[(2)] = inst_71252);

(statearr_71310_73188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71276 === (8))){
var inst_71206 = (state_71275[(7)]);
var inst_71216 = (state_71275[(9)]);
var inst_71221 = (state_71275[(10)]);
var inst_71239 = inst_71206.push(inst_71216);
var tmp71307 = inst_71206;
var inst_71206__$1 = tmp71307;
var inst_71207 = inst_71221;
var state_71275__$1 = (function (){var statearr_71311 = state_71275;
(statearr_71311[(14)] = inst_71239);

(statearr_71311[(7)] = inst_71206__$1);

(statearr_71311[(8)] = inst_71207);

return statearr_71311;
})();
var statearr_71312_73189 = state_71275__$1;
(statearr_71312_73189[(2)] = null);

(statearr_71312_73189[(1)] = (2));


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
var cljs$core$async$state_machine__69184__auto__ = null;
var cljs$core$async$state_machine__69184__auto____0 = (function (){
var statearr_71313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71313[(0)] = cljs$core$async$state_machine__69184__auto__);

(statearr_71313[(1)] = (1));

return statearr_71313;
});
var cljs$core$async$state_machine__69184__auto____1 = (function (state_71275){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_71275);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e71314){var ex__69187__auto__ = e71314;
var statearr_71315_73190 = state_71275;
(statearr_71315_73190[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_71275[(4)]))){
var statearr_71316_73191 = state_71275;
(statearr_71316_73191[(1)] = cljs.core.first((state_71275[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73192 = state_71275;
state_71275 = G__73192;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
cljs$core$async$state_machine__69184__auto__ = function(state_71275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69184__auto____1.call(this,state_71275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69184__auto____0;
cljs$core$async$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69184__auto____1;
return cljs$core$async$state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_71317 = f__69319__auto__();
(statearr_71317[(6)] = c__69318__auto___73173);

return statearr_71317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
