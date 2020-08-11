goog.provide('samplethree.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("common","navigate","common/navigate",-1770818836),(function (db,p__56890){
var vec__56891 = p__56890;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56891,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56891,(1),null);
var old_match = new cljs.core.Keyword("common","route","common/route",1651124616).cljs$core$IFn$_invoke$arity$1(db);
var new_match = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),match));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("common","route","common/route",1651124616),new_match);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("common","navigate-fx!","common/navigate-fx!",-1088243503),(function (p__56894){
var vec__56895 = p__56894;
var seq__56896 = cljs.core.seq(vec__56895);
var first__56897 = cljs.core.first(seq__56896);
var seq__56896__$1 = cljs.core.next(seq__56896);
var k = first__56897;
var vec__56898 = seq__56896__$1;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56898,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56898,(1),null);
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(k,params,query);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("common","navigate!","common/navigate!",1409668023),(function (_,p__56901){
var vec__56902 = p__56901;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56902,(0),null);
var url_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56902,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56902,(2),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56902,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("common","navigate-fx!","common/navigate-fx!",-1088243503),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [url_key,params,query], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"x","x",2099068185),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"op","op",-1882987955),"+",new cljs.core.Keyword(null,"result","result",1415092211),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#90EE90"], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__56905){
var vec__56906 = p__56905;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56906,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56906,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56906,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,key,val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset","reset",-800929946),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"x","x",2099068185),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"op","op",-1882987955),"+",new cljs.core.Keyword(null,"result","result",1415092211),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#90EE90"], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color","color",1011675173),(function (db,p__56909){
var vec__56910 = p__56909;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56910,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56910,(1),null);
var x = result;
if((x < (20))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"color","color",1011675173),"#90EE90");
} else {
if((x < (50))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"color","color",1011675173),"#ADD8E6");
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"color","color",1011675173),"#FFA07A");

}
}
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("common","route","common/route",1651124616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("common","route","common/route",1651124616).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("common","page-id","common/page-id",-1732721743),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","route","common/route",1651124616)], null),(function (route,_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("common","page","common/page",-2099452134),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","route","common/route",1651124616)], null),(function (route,_){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("common","error","common/error",-1805182973),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("common","error","common/error",-1805182973).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-docs","set-docs",405672054),(function (db,p__56913){
var vec__56914 = p__56913;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56914,(0),null);
var docs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56914,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"docs","docs",-1974280502),docs);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fetch-docs","fetch-docs",1057143748),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/docs",new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.raw_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-docs","set-docs",405672054)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("common","set-error","common/set-error",-1337739361),(function (db,p__56917){
var vec__56918 = p__56917;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56918,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56918,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("common","error","common/error",-1805182973),error);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("page","init-home","page/init-home",-915420304),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-docs","fetch-docs",1057143748)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-color","get-color",-2122105193),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-value","get-value",2108514284),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__56921){
var vec__56922 = p__56921;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56922,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56922,(1),null);
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(db) : key.call(null,db));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"equation","equation",-499527745),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(db))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(db))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(db))," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(db))].join('');
})], 0));

//# sourceMappingURL=samplethree.events.js.map
