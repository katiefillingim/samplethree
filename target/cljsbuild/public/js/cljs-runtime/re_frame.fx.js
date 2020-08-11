goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__65869 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__65870 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__65870);

try{try{var seq__65871 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__65872 = null;
var count__65873 = (0);
var i__65874 = (0);
while(true){
if((i__65874 < count__65873)){
var vec__65881 = chunk__65872.cljs$core$IIndexed$_nth$arity$2(null,i__65874);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65881,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65881,(1),null);
var temp__5733__auto___65957 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___65957)){
var effect_fn_65958 = temp__5733__auto___65957;
(effect_fn_65958.cljs$core$IFn$_invoke$arity$1 ? effect_fn_65958.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_65958.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__65959 = seq__65871;
var G__65960 = chunk__65872;
var G__65961 = count__65873;
var G__65962 = (i__65874 + (1));
seq__65871 = G__65959;
chunk__65872 = G__65960;
count__65873 = G__65961;
i__65874 = G__65962;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65871);
if(temp__5735__auto__){
var seq__65871__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65871__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65871__$1);
var G__65965 = cljs.core.chunk_rest(seq__65871__$1);
var G__65966 = c__4556__auto__;
var G__65967 = cljs.core.count(c__4556__auto__);
var G__65968 = (0);
seq__65871 = G__65965;
chunk__65872 = G__65966;
count__65873 = G__65967;
i__65874 = G__65968;
continue;
} else {
var vec__65885 = cljs.core.first(seq__65871__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65885,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65885,(1),null);
var temp__5733__auto___65969 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___65969)){
var effect_fn_65974 = temp__5733__auto___65969;
(effect_fn_65974.cljs$core$IFn$_invoke$arity$1 ? effect_fn_65974.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_65974.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__65975 = cljs.core.next(seq__65871__$1);
var G__65976 = null;
var G__65977 = (0);
var G__65978 = (0);
seq__65871 = G__65975;
chunk__65872 = G__65976;
count__65873 = G__65977;
i__65874 = G__65978;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__65516__auto___65980 = re_frame.interop.now();
var duration__65517__auto___65981 = (end__65516__auto___65980 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__65517__auto___65981,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__65516__auto___65980);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__65869);
}} else {
var seq__65888 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__65889 = null;
var count__65890 = (0);
var i__65891 = (0);
while(true){
if((i__65891 < count__65890)){
var vec__65901 = chunk__65889.cljs$core$IIndexed$_nth$arity$2(null,i__65891);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65901,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65901,(1),null);
var temp__5733__auto___65983 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___65983)){
var effect_fn_65987 = temp__5733__auto___65983;
(effect_fn_65987.cljs$core$IFn$_invoke$arity$1 ? effect_fn_65987.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_65987.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__65991 = seq__65888;
var G__65992 = chunk__65889;
var G__65993 = count__65890;
var G__65994 = (i__65891 + (1));
seq__65888 = G__65991;
chunk__65889 = G__65992;
count__65890 = G__65993;
i__65891 = G__65994;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65888);
if(temp__5735__auto__){
var seq__65888__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65888__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65888__$1);
var G__65996 = cljs.core.chunk_rest(seq__65888__$1);
var G__65997 = c__4556__auto__;
var G__65998 = cljs.core.count(c__4556__auto__);
var G__65999 = (0);
seq__65888 = G__65996;
chunk__65889 = G__65997;
count__65890 = G__65998;
i__65891 = G__65999;
continue;
} else {
var vec__65906 = cljs.core.first(seq__65888__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65906,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65906,(1),null);
var temp__5733__auto___66001 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___66001)){
var effect_fn_66002 = temp__5733__auto___66001;
(effect_fn_66002.cljs$core$IFn$_invoke$arity$1 ? effect_fn_66002.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_66002.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__66004 = cljs.core.next(seq__65888__$1);
var G__66005 = null;
var G__66006 = (0);
var G__66007 = (0);
seq__65888 = G__66004;
chunk__65889 = G__66005;
count__65890 = G__66006;
i__65891 = G__66007;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__65909 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__65910 = null;
var count__65911 = (0);
var i__65912 = (0);
while(true){
if((i__65912 < count__65911)){
var map__65918 = chunk__65910.cljs$core$IIndexed$_nth$arity$2(null,i__65912);
var map__65918__$1 = (((((!((map__65918 == null))))?(((((map__65918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65918):map__65918);
var effect = map__65918__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65918__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65918__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__65909,chunk__65910,count__65911,i__65912,map__65918,map__65918__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__65909,chunk__65910,count__65911,i__65912,map__65918,map__65918__$1,effect,ms,dispatch))
,ms);
}


var G__66033 = seq__65909;
var G__66034 = chunk__65910;
var G__66035 = count__65911;
var G__66036 = (i__65912 + (1));
seq__65909 = G__66033;
chunk__65910 = G__66034;
count__65911 = G__66035;
i__65912 = G__66036;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65909);
if(temp__5735__auto__){
var seq__65909__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65909__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65909__$1);
var G__66038 = cljs.core.chunk_rest(seq__65909__$1);
var G__66039 = c__4556__auto__;
var G__66040 = cljs.core.count(c__4556__auto__);
var G__66041 = (0);
seq__65909 = G__66038;
chunk__65910 = G__66039;
count__65911 = G__66040;
i__65912 = G__66041;
continue;
} else {
var map__65923 = cljs.core.first(seq__65909__$1);
var map__65923__$1 = (((((!((map__65923 == null))))?(((((map__65923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65923):map__65923);
var effect = map__65923__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65923__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65923__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__65909,chunk__65910,count__65911,i__65912,map__65923,map__65923__$1,effect,ms,dispatch,seq__65909__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__65909,chunk__65910,count__65911,i__65912,map__65923,map__65923__$1,effect,ms,dispatch,seq__65909__$1,temp__5735__auto__))
,ms);
}


var G__66042 = cljs.core.next(seq__65909__$1);
var G__66043 = null;
var G__66044 = (0);
var G__66045 = (0);
seq__65909 = G__66042;
chunk__65910 = G__66043;
count__65911 = G__66044;
i__65912 = G__66045;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__65929 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__65930 = null;
var count__65931 = (0);
var i__65932 = (0);
while(true){
if((i__65932 < count__65931)){
var event = chunk__65930.cljs$core$IIndexed$_nth$arity$2(null,i__65932);
re_frame.router.dispatch(event);


var G__66064 = seq__65929;
var G__66065 = chunk__65930;
var G__66066 = count__65931;
var G__66067 = (i__65932 + (1));
seq__65929 = G__66064;
chunk__65930 = G__66065;
count__65931 = G__66066;
i__65932 = G__66067;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65929);
if(temp__5735__auto__){
var seq__65929__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65929__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65929__$1);
var G__66068 = cljs.core.chunk_rest(seq__65929__$1);
var G__66069 = c__4556__auto__;
var G__66070 = cljs.core.count(c__4556__auto__);
var G__66071 = (0);
seq__65929 = G__66068;
chunk__65930 = G__66069;
count__65931 = G__66070;
i__65932 = G__66071;
continue;
} else {
var event = cljs.core.first(seq__65929__$1);
re_frame.router.dispatch(event);


var G__66079 = cljs.core.next(seq__65929__$1);
var G__66080 = null;
var G__66081 = (0);
var G__66082 = (0);
seq__65929 = G__66079;
chunk__65930 = G__66080;
count__65931 = G__66081;
i__65932 = G__66082;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__65934 = cljs.core.seq(value);
var chunk__65935 = null;
var count__65936 = (0);
var i__65937 = (0);
while(true){
if((i__65937 < count__65936)){
var event = chunk__65935.cljs$core$IIndexed$_nth$arity$2(null,i__65937);
clear_event(event);


var G__66097 = seq__65934;
var G__66098 = chunk__65935;
var G__66099 = count__65936;
var G__66100 = (i__65937 + (1));
seq__65934 = G__66097;
chunk__65935 = G__66098;
count__65936 = G__66099;
i__65937 = G__66100;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65934);
if(temp__5735__auto__){
var seq__65934__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65934__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65934__$1);
var G__66101 = cljs.core.chunk_rest(seq__65934__$1);
var G__66102 = c__4556__auto__;
var G__66103 = cljs.core.count(c__4556__auto__);
var G__66104 = (0);
seq__65934 = G__66101;
chunk__65935 = G__66102;
count__65936 = G__66103;
i__65937 = G__66104;
continue;
} else {
var event = cljs.core.first(seq__65934__$1);
clear_event(event);


var G__66106 = cljs.core.next(seq__65934__$1);
var G__66107 = null;
var G__66108 = (0);
var G__66109 = (0);
seq__65934 = G__66106;
chunk__65935 = G__66107;
count__65936 = G__66108;
i__65937 = G__66109;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
