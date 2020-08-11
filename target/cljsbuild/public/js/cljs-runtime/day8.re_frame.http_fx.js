goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__74132){
var vec__74133 = p__74132;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74133,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74133,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__74144){
var map__74145 = p__74144;
var map__74145__$1 = (((((!((map__74145 == null))))?(((((map__74145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74145):map__74145);
var request = map__74145__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74145__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74145__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__74138_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__74138_SHARP_));
}),(function (p1__74140_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__74140_SHARP_));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__74159 = cljs.core.seq(seq_request_maps);
var chunk__74160 = null;
var count__74161 = (0);
var i__74162 = (0);
while(true){
if((i__74162 < count__74161)){
var request__$1 = chunk__74160.cljs$core$IIndexed$_nth$arity$2(null,i__74162);
var G__74172_74193 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__74172_74193) : ajax.core.ajax_request.call(null,G__74172_74193));


var G__74194 = seq__74159;
var G__74195 = chunk__74160;
var G__74196 = count__74161;
var G__74197 = (i__74162 + (1));
seq__74159 = G__74194;
chunk__74160 = G__74195;
count__74161 = G__74196;
i__74162 = G__74197;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__74159);
if(temp__5735__auto__){
var seq__74159__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74159__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__74159__$1);
var G__74201 = cljs.core.chunk_rest(seq__74159__$1);
var G__74202 = c__4556__auto__;
var G__74203 = cljs.core.count(c__4556__auto__);
var G__74204 = (0);
seq__74159 = G__74201;
chunk__74160 = G__74202;
count__74161 = G__74203;
i__74162 = G__74204;
continue;
} else {
var request__$1 = cljs.core.first(seq__74159__$1);
var G__74173_74209 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__74173_74209) : ajax.core.ajax_request.call(null,G__74173_74209));


var G__74210 = cljs.core.next(seq__74159__$1);
var G__74211 = null;
var G__74212 = (0);
var G__74213 = (0);
seq__74159 = G__74210;
chunk__74160 = G__74211;
count__74161 = G__74212;
i__74162 = G__74213;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=day8.re_frame.http_fx.js.map
