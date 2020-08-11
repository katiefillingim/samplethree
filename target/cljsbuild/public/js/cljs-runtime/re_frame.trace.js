goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = true;
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__65554){
var map__65555 = p__65554;
var map__65555__$1 = (((((!((map__65555 == null))))?(((((map__65555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65555):map__65555);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65555__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65555__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65555__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65555__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__65557_65593 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__65558_65594 = null;
var count__65559_65595 = (0);
var i__65560_65596 = (0);
while(true){
if((i__65560_65596 < count__65559_65595)){
var vec__65571_65597 = chunk__65558_65594.cljs$core$IIndexed$_nth$arity$2(null,i__65560_65596);
var k_65598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65571_65597,(0),null);
var cb_65599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65571_65597,(1),null);
try{var G__65575_65600 = cljs.core.deref(re_frame.trace.traces);
(cb_65599.cljs$core$IFn$_invoke$arity$1 ? cb_65599.cljs$core$IFn$_invoke$arity$1(G__65575_65600) : cb_65599.call(null,G__65575_65600));
}catch (e65574){var e_65601 = e65574;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_65598,"while storing",cljs.core.deref(re_frame.trace.traces),e_65601], 0));
}

var G__65603 = seq__65557_65593;
var G__65604 = chunk__65558_65594;
var G__65605 = count__65559_65595;
var G__65606 = (i__65560_65596 + (1));
seq__65557_65593 = G__65603;
chunk__65558_65594 = G__65604;
count__65559_65595 = G__65605;
i__65560_65596 = G__65606;
continue;
} else {
var temp__5735__auto___65608 = cljs.core.seq(seq__65557_65593);
if(temp__5735__auto___65608){
var seq__65557_65609__$1 = temp__5735__auto___65608;
if(cljs.core.chunked_seq_QMARK_(seq__65557_65609__$1)){
var c__4556__auto___65610 = cljs.core.chunk_first(seq__65557_65609__$1);
var G__65611 = cljs.core.chunk_rest(seq__65557_65609__$1);
var G__65612 = c__4556__auto___65610;
var G__65613 = cljs.core.count(c__4556__auto___65610);
var G__65614 = (0);
seq__65557_65593 = G__65611;
chunk__65558_65594 = G__65612;
count__65559_65595 = G__65613;
i__65560_65596 = G__65614;
continue;
} else {
var vec__65576_65645 = cljs.core.first(seq__65557_65609__$1);
var k_65646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65576_65645,(0),null);
var cb_65647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65576_65645,(1),null);
try{var G__65580_65648 = cljs.core.deref(re_frame.trace.traces);
(cb_65647.cljs$core$IFn$_invoke$arity$1 ? cb_65647.cljs$core$IFn$_invoke$arity$1(G__65580_65648) : cb_65647.call(null,G__65580_65648));
}catch (e65579){var e_65649 = e65579;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_65646,"while storing",cljs.core.deref(re_frame.trace.traces),e_65649], 0));
}

var G__65650 = cljs.core.next(seq__65557_65609__$1);
var G__65651 = null;
var G__65652 = (0);
var G__65653 = (0);
seq__65557_65593 = G__65650;
chunk__65558_65594 = G__65651;
count__65559_65595 = G__65652;
i__65560_65596 = G__65653;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
