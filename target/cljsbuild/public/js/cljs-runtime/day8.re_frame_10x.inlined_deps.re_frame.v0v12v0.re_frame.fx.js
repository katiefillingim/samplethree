goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__61193 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__61194 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__61194);

try{try{var seq__61196 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__61197 = null;
var count__61198 = (0);
var i__61199 = (0);
while(true){
if((i__61199 < count__61198)){
var vec__61207 = chunk__61197.cljs$core$IIndexed$_nth$arity$2(null,i__61199);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61207,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61207,(1),null);
var temp__5733__auto___61268 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___61268)){
var effect_fn_61269 = temp__5733__auto___61268;
(effect_fn_61269.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61269.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61269.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61270 = seq__61196;
var G__61271 = chunk__61197;
var G__61272 = count__61198;
var G__61273 = (i__61199 + (1));
seq__61196 = G__61270;
chunk__61197 = G__61271;
count__61198 = G__61272;
i__61199 = G__61273;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61196);
if(temp__5735__auto__){
var seq__61196__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61196__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61196__$1);
var G__61274 = cljs.core.chunk_rest(seq__61196__$1);
var G__61275 = c__4556__auto__;
var G__61276 = cljs.core.count(c__4556__auto__);
var G__61277 = (0);
seq__61196 = G__61274;
chunk__61197 = G__61275;
count__61198 = G__61276;
i__61199 = G__61277;
continue;
} else {
var vec__61211 = cljs.core.first(seq__61196__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61211,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61211,(1),null);
var temp__5733__auto___61278 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___61278)){
var effect_fn_61279 = temp__5733__auto___61278;
(effect_fn_61279.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61279.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61279.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61280 = cljs.core.next(seq__61196__$1);
var G__61281 = null;
var G__61282 = (0);
var G__61283 = (0);
seq__61196 = G__61280;
chunk__61197 = G__61281;
count__61198 = G__61282;
i__61199 = G__61283;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__60880__auto___61284 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now();
var duration__60881__auto___61285 = (end__60880__auto___61284 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__60881__auto___61285,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.run_tracing_callbacks_BANG_(end__60880__auto___61284);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__61193);
}} else {
var seq__61216 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__61217 = null;
var count__61218 = (0);
var i__61219 = (0);
while(true){
if((i__61219 < count__61218)){
var vec__61232 = chunk__61217.cljs$core$IIndexed$_nth$arity$2(null,i__61219);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61232,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61232,(1),null);
var temp__5733__auto___61298 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___61298)){
var effect_fn_61299 = temp__5733__auto___61298;
(effect_fn_61299.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61299.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61299.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61300 = seq__61216;
var G__61301 = chunk__61217;
var G__61302 = count__61218;
var G__61303 = (i__61219 + (1));
seq__61216 = G__61300;
chunk__61217 = G__61301;
count__61218 = G__61302;
i__61219 = G__61303;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61216);
if(temp__5735__auto__){
var seq__61216__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61216__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61216__$1);
var G__61304 = cljs.core.chunk_rest(seq__61216__$1);
var G__61305 = c__4556__auto__;
var G__61306 = cljs.core.count(c__4556__auto__);
var G__61307 = (0);
seq__61216 = G__61304;
chunk__61217 = G__61305;
count__61218 = G__61306;
i__61219 = G__61307;
continue;
} else {
var vec__61239 = cljs.core.first(seq__61216__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61239,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61239,(1),null);
var temp__5733__auto___61308 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___61308)){
var effect_fn_61309 = temp__5733__auto___61308;
(effect_fn_61309.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61309.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61309.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61310 = cljs.core.next(seq__61216__$1);
var G__61311 = null;
var G__61312 = (0);
var G__61313 = (0);
seq__61216 = G__61310;
chunk__61217 = G__61311;
count__61218 = G__61312;
i__61219 = G__61313;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__61243 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__61244 = null;
var count__61245 = (0);
var i__61246 = (0);
while(true){
if((i__61246 < count__61245)){
var map__61252 = chunk__61244.cljs$core$IIndexed$_nth$arity$2(null,i__61246);
var map__61252__$1 = (((((!((map__61252 == null))))?(((((map__61252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61252):map__61252);
var effect = map__61252__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61252__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61252__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__61243,chunk__61244,count__61245,i__61246,map__61252,map__61252__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__61243,chunk__61244,count__61245,i__61246,map__61252,map__61252__$1,effect,ms,dispatch))
,ms);
}


var G__61315 = seq__61243;
var G__61316 = chunk__61244;
var G__61317 = count__61245;
var G__61318 = (i__61246 + (1));
seq__61243 = G__61315;
chunk__61244 = G__61316;
count__61245 = G__61317;
i__61246 = G__61318;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61243);
if(temp__5735__auto__){
var seq__61243__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61243__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61243__$1);
var G__61320 = cljs.core.chunk_rest(seq__61243__$1);
var G__61321 = c__4556__auto__;
var G__61322 = cljs.core.count(c__4556__auto__);
var G__61323 = (0);
seq__61243 = G__61320;
chunk__61244 = G__61321;
count__61245 = G__61322;
i__61246 = G__61323;
continue;
} else {
var map__61254 = cljs.core.first(seq__61243__$1);
var map__61254__$1 = (((((!((map__61254 == null))))?(((((map__61254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61254):map__61254);
var effect = map__61254__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61254__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61254__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__61243,chunk__61244,count__61245,i__61246,map__61254,map__61254__$1,effect,ms,dispatch,seq__61243__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__61243,chunk__61244,count__61245,i__61246,map__61254,map__61254__$1,effect,ms,dispatch,seq__61243__$1,temp__5735__auto__))
,ms);
}


var G__61324 = cljs.core.next(seq__61243__$1);
var G__61325 = null;
var G__61326 = (0);
var G__61327 = (0);
seq__61243 = G__61324;
chunk__61244 = G__61325;
count__61245 = G__61326;
i__61246 = G__61327;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__61256 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__61257 = null;
var count__61258 = (0);
var i__61259 = (0);
while(true){
if((i__61259 < count__61258)){
var event = chunk__61257.cljs$core$IIndexed$_nth$arity$2(null,i__61259);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__61330 = seq__61256;
var G__61331 = chunk__61257;
var G__61332 = count__61258;
var G__61333 = (i__61259 + (1));
seq__61256 = G__61330;
chunk__61257 = G__61331;
count__61258 = G__61332;
i__61259 = G__61333;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61256);
if(temp__5735__auto__){
var seq__61256__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61256__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61256__$1);
var G__61334 = cljs.core.chunk_rest(seq__61256__$1);
var G__61335 = c__4556__auto__;
var G__61336 = cljs.core.count(c__4556__auto__);
var G__61337 = (0);
seq__61256 = G__61334;
chunk__61257 = G__61335;
count__61258 = G__61336;
i__61259 = G__61337;
continue;
} else {
var event = cljs.core.first(seq__61256__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__61338 = cljs.core.next(seq__61256__$1);
var G__61339 = null;
var G__61340 = (0);
var G__61341 = (0);
seq__61256 = G__61338;
chunk__61257 = G__61339;
count__61258 = G__61340;
i__61259 = G__61341;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__61261 = cljs.core.seq(value);
var chunk__61262 = null;
var count__61263 = (0);
var i__61264 = (0);
while(true){
if((i__61264 < count__61263)){
var event = chunk__61262.cljs$core$IIndexed$_nth$arity$2(null,i__61264);
clear_event(event);


var G__61342 = seq__61261;
var G__61343 = chunk__61262;
var G__61344 = count__61263;
var G__61345 = (i__61264 + (1));
seq__61261 = G__61342;
chunk__61262 = G__61343;
count__61263 = G__61344;
i__61264 = G__61345;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61261);
if(temp__5735__auto__){
var seq__61261__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61261__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61261__$1);
var G__61348 = cljs.core.chunk_rest(seq__61261__$1);
var G__61349 = c__4556__auto__;
var G__61350 = cljs.core.count(c__4556__auto__);
var G__61351 = (0);
seq__61261 = G__61348;
chunk__61262 = G__61349;
count__61263 = G__61350;
i__61264 = G__61351;
continue;
} else {
var event = cljs.core.first(seq__61261__$1);
clear_event(event);


var G__61352 = cljs.core.next(seq__61261__$1);
var G__61353 = null;
var G__61354 = (0);
var G__61355 = (0);
seq__61261 = G__61352;
chunk__61262 = G__61353;
count__61263 = G__61354;
i__61264 = G__61355;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.js.map
