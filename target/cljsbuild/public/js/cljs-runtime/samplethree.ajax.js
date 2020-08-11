goog.provide('samplethree.ajax');
samplethree.ajax.local_uri_QMARK_ = (function samplethree$ajax$local_uri_QMARK_(p__75319){
var map__75320 = p__75319;
var map__75320__$1 = (((((!((map__75320 == null))))?(((((map__75320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75320):map__75320);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75320__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return cljs.core.not(cljs.core.re_find(/^\w+?:\/\//,uri));
});
samplethree.ajax.default_headers = (function samplethree$ajax$default_headers(request){
if(samplethree.ajax.local_uri_QMARK_(request)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__75327_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["x-csrf-token",csrfToken], null),p1__75327_SHARP_], 0));
}));
} else {
return request;
}
});
samplethree.ajax.as_transit = (function samplethree$ajax$as_transit(opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"raw","raw",1604651272),false,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),luminus_transit.time.time_deserialization_handlers),new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),luminus_transit.time.time_serialization_handlers)], null),opts], 0));
});
samplethree.ajax.load_interceptors_BANG_ = (function samplethree$ajax$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ajax.core.default_interceptors,cljs.core.conj,(function (){var G__75329 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),samplethree.ajax.default_headers], null);
return (ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1 ? ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1(G__75329) : ajax.core.to_interceptor.call(null,G__75329));
})());
});

//# sourceMappingURL=samplethree.ajax.js.map
