goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__71192,p__71193){
var map__71194 = p__71192;
var map__71194__$1 = (((((!((map__71194 == null))))?(((((map__71194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71194):map__71194);
var svc = map__71194__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71194__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71194__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71194__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__71195 = p__71193;
var map__71195__$1 = (((((!((map__71195 == null))))?(((((map__71195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71195):map__71195);
var msg = map__71195__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71195__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71195__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71195__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71195__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__71200,p__71201){
var map__71202 = p__71200;
var map__71202__$1 = (((((!((map__71202 == null))))?(((((map__71202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71202):map__71202);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71202__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__71203 = p__71201;
var map__71203__$1 = (((((!((map__71203 == null))))?(((((map__71203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71203):map__71203);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71203__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__71209,p__71210){
var map__71211 = p__71209;
var map__71211__$1 = (((((!((map__71211 == null))))?(((((map__71211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71211):map__71211);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71211__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71211__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__71212 = p__71210;
var map__71212__$1 = (((((!((map__71212 == null))))?(((((map__71212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71212):map__71212);
var msg = map__71212__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71212__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__71220,tid){
var map__71222 = p__71220;
var map__71222__$1 = (((((!((map__71222 == null))))?(((((map__71222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71222):map__71222);
var svc = map__71222__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71222__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__71231 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__71232 = null;
var count__71233 = (0);
var i__71234 = (0);
while(true){
if((i__71234 < count__71233)){
var vec__71254 = chunk__71232.cljs$core$IIndexed$_nth$arity$2(null,i__71234);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71254,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71254,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__71286 = seq__71231;
var G__71287 = chunk__71232;
var G__71288 = count__71233;
var G__71289 = (i__71234 + (1));
seq__71231 = G__71286;
chunk__71232 = G__71287;
count__71233 = G__71288;
i__71234 = G__71289;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__71231);
if(temp__5735__auto__){
var seq__71231__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71231__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71231__$1);
var G__71290 = cljs.core.chunk_rest(seq__71231__$1);
var G__71291 = c__4556__auto__;
var G__71292 = cljs.core.count(c__4556__auto__);
var G__71293 = (0);
seq__71231 = G__71290;
chunk__71232 = G__71291;
count__71233 = G__71292;
i__71234 = G__71293;
continue;
} else {
var vec__71259 = cljs.core.first(seq__71231__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71259,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71259,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__71295 = cljs.core.next(seq__71231__$1);
var G__71296 = null;
var G__71297 = (0);
var G__71298 = (0);
seq__71231 = G__71295;
chunk__71232 = G__71296;
count__71233 = G__71297;
i__71234 = G__71298;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__71224_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__71224_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__71225_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__71225_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__71226_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__71226_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__71227_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__71227_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__71277){
var map__71278 = p__71277;
var map__71278__$1 = (((((!((map__71278 == null))))?(((((map__71278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71278):map__71278);
var svc = map__71278__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71278__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71278__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
