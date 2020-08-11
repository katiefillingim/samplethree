goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_enabled_QMARK_ = goog.define("day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$start_trace(p__60900){
var map__60901 = p__60900;
var map__60901__$1 = (((((!((map__60901 == null))))?(((((map__60901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60901):map__60901);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60901__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60901__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60901__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60901__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now()], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce((function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$tracing_cb_debounced(){
var seq__60903_60940 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_cbs));
var chunk__60904_60941 = null;
var count__60905_60942 = (0);
var i__60906_60943 = (0);
while(true){
if((i__60906_60943 < count__60905_60942)){
var vec__60917_60948 = chunk__60904_60941.cljs$core$IIndexed$_nth$arity$2(null,i__60906_60943);
var k_60949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60917_60948,(0),null);
var cb_60950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60917_60948,(1),null);
try{var G__60921_60951 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces);
(cb_60950.cljs$core$IFn$_invoke$arity$1 ? cb_60950.cljs$core$IFn$_invoke$arity$1(G__60921_60951) : cb_60950.call(null,G__60921_60951));
}catch (e60920){var e_60955 = e60920;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_60949,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces),e_60955], 0));
}

var G__60956 = seq__60903_60940;
var G__60957 = chunk__60904_60941;
var G__60958 = count__60905_60942;
var G__60959 = (i__60906_60943 + (1));
seq__60903_60940 = G__60956;
chunk__60904_60941 = G__60957;
count__60905_60942 = G__60958;
i__60906_60943 = G__60959;
continue;
} else {
var temp__5735__auto___60960 = cljs.core.seq(seq__60903_60940);
if(temp__5735__auto___60960){
var seq__60903_60961__$1 = temp__5735__auto___60960;
if(cljs.core.chunked_seq_QMARK_(seq__60903_60961__$1)){
var c__4556__auto___60962 = cljs.core.chunk_first(seq__60903_60961__$1);
var G__60963 = cljs.core.chunk_rest(seq__60903_60961__$1);
var G__60964 = c__4556__auto___60962;
var G__60965 = cljs.core.count(c__4556__auto___60962);
var G__60966 = (0);
seq__60903_60940 = G__60963;
chunk__60904_60941 = G__60964;
count__60905_60942 = G__60965;
i__60906_60943 = G__60966;
continue;
} else {
var vec__60922_60970 = cljs.core.first(seq__60903_60961__$1);
var k_60971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60922_60970,(0),null);
var cb_60972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60922_60970,(1),null);
try{var G__60926_60973 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces);
(cb_60972.cljs$core$IFn$_invoke$arity$1 ? cb_60972.cljs$core$IFn$_invoke$arity$1(G__60926_60973) : cb_60972.call(null,G__60926_60973));
}catch (e60925){var e_60974 = e60925;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_60971,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces),e_60974], 0));
}

var G__60975 = cljs.core.next(seq__60903_60961__$1);
var G__60976 = null;
var G__60977 = (0);
var G__60978 = (0);
seq__60903_60940 = G__60975;
chunk__60904_60941 = G__60976;
count__60905_60942 = G__60977;
i__60906_60943 = G__60978;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_delivery) - (25)) < now)){
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.js.map
