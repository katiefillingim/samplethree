goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73709 = arguments.length;
var i__4737__auto___73710 = (0);
while(true){
if((i__4737__auto___73710 < len__4736__auto___73709)){
args__4742__auto__.push((arguments[i__4737__auto___73710]));

var G__73711 = (i__4737__auto___73710 + (1));
i__4737__auto___73710 = G__73711;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq73393){
var G__73394 = cljs.core.first(seq73393);
var seq73393__$1 = cljs.core.next(seq73393);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73394,seq73393__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__73408 = cljs.core.seq(sources);
var chunk__73409 = null;
var count__73410 = (0);
var i__73411 = (0);
while(true){
if((i__73411 < count__73410)){
var map__73433 = chunk__73409.cljs$core$IIndexed$_nth$arity$2(null,i__73411);
var map__73433__$1 = (((((!((map__73433 == null))))?(((((map__73433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73433):map__73433);
var src = map__73433__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73433__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73433__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73433__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73433__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e73437){var e_73712 = e73437;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_73712);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_73712.message)].join('')));
}

var G__73713 = seq__73408;
var G__73714 = chunk__73409;
var G__73715 = count__73410;
var G__73716 = (i__73411 + (1));
seq__73408 = G__73713;
chunk__73409 = G__73714;
count__73410 = G__73715;
i__73411 = G__73716;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__73408);
if(temp__5735__auto__){
var seq__73408__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73408__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73408__$1);
var G__73717 = cljs.core.chunk_rest(seq__73408__$1);
var G__73718 = c__4556__auto__;
var G__73719 = cljs.core.count(c__4556__auto__);
var G__73720 = (0);
seq__73408 = G__73717;
chunk__73409 = G__73718;
count__73410 = G__73719;
i__73411 = G__73720;
continue;
} else {
var map__73440 = cljs.core.first(seq__73408__$1);
var map__73440__$1 = (((((!((map__73440 == null))))?(((((map__73440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73440):map__73440);
var src = map__73440__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73440__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73440__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73440__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73440__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e73442){var e_73721 = e73442;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_73721);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_73721.message)].join('')));
}

var G__73722 = cljs.core.next(seq__73408__$1);
var G__73723 = null;
var G__73724 = (0);
var G__73725 = (0);
seq__73408 = G__73722;
chunk__73409 = G__73723;
count__73410 = G__73724;
i__73411 = G__73725;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__73451 = cljs.core.seq(js_requires);
var chunk__73452 = null;
var count__73453 = (0);
var i__73454 = (0);
while(true){
if((i__73454 < count__73453)){
var js_ns = chunk__73452.cljs$core$IIndexed$_nth$arity$2(null,i__73454);
var require_str_73729 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_73729);


var G__73730 = seq__73451;
var G__73731 = chunk__73452;
var G__73732 = count__73453;
var G__73733 = (i__73454 + (1));
seq__73451 = G__73730;
chunk__73452 = G__73731;
count__73453 = G__73732;
i__73454 = G__73733;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__73451);
if(temp__5735__auto__){
var seq__73451__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73451__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73451__$1);
var G__73734 = cljs.core.chunk_rest(seq__73451__$1);
var G__73735 = c__4556__auto__;
var G__73736 = cljs.core.count(c__4556__auto__);
var G__73737 = (0);
seq__73451 = G__73734;
chunk__73452 = G__73735;
count__73453 = G__73736;
i__73454 = G__73737;
continue;
} else {
var js_ns = cljs.core.first(seq__73451__$1);
var require_str_73738 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_73738);


var G__73739 = cljs.core.next(seq__73451__$1);
var G__73740 = null;
var G__73741 = (0);
var G__73742 = (0);
seq__73451 = G__73739;
chunk__73452 = G__73740;
count__73453 = G__73741;
i__73454 = G__73742;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__73467){
var map__73468 = p__73467;
var map__73468__$1 = (((((!((map__73468 == null))))?(((((map__73468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73468):map__73468);
var msg = map__73468__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73468__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73468__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73472(s__73473){
return (new cljs.core.LazySeq(null,(function (){
var s__73473__$1 = s__73473;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__73473__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__73483 = cljs.core.first(xs__6292__auto__);
var map__73483__$1 = (((((!((map__73483 == null))))?(((((map__73483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73483):map__73483);
var src = map__73483__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73483__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73483__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__73473__$1,map__73483,map__73483__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__73468,map__73468__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73472_$_iter__73474(s__73475){
return (new cljs.core.LazySeq(null,((function (s__73473__$1,map__73483,map__73483__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__73468,map__73468__$1,msg,info,reload_info){
return (function (){
var s__73475__$1 = s__73475;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__73475__$1);
if(temp__5735__auto____$1){
var s__73475__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__73475__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__73475__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__73477 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__73476 = (0);
while(true){
if((i__73476 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__73476);
cljs.core.chunk_append(b__73477,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__73744 = (i__73476 + (1));
i__73476 = G__73744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73477),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73472_$_iter__73474(cljs.core.chunk_rest(s__73475__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73477),null);
}
} else {
var warning = cljs.core.first(s__73475__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73472_$_iter__73474(cljs.core.rest(s__73475__$2)));
}
} else {
return null;
}
break;
}
});})(s__73473__$1,map__73483,map__73483__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__73468,map__73468__$1,msg,info,reload_info))
,null,null));
});})(s__73473__$1,map__73483,map__73483__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__73468,map__73468__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73472(cljs.core.rest(s__73473__$1)));
} else {
var G__73745 = cljs.core.rest(s__73473__$1);
s__73473__$1 = G__73745;
continue;
}
} else {
var G__73746 = cljs.core.rest(s__73473__$1);
s__73473__$1 = G__73746;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__73503_73751 = cljs.core.seq(warnings);
var chunk__73504_73752 = null;
var count__73505_73753 = (0);
var i__73506_73754 = (0);
while(true){
if((i__73506_73754 < count__73505_73753)){
var map__73517_73755 = chunk__73504_73752.cljs$core$IIndexed$_nth$arity$2(null,i__73506_73754);
var map__73517_73756__$1 = (((((!((map__73517_73755 == null))))?(((((map__73517_73755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73517_73755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73517_73755):map__73517_73755);
var w_73757 = map__73517_73756__$1;
var msg_73758__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73517_73756__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_73759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73517_73756__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_73760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73517_73756__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_73761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73517_73756__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_73761)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_73759),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_73760),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_73758__$1)].join(''));


var G__73763 = seq__73503_73751;
var G__73764 = chunk__73504_73752;
var G__73765 = count__73505_73753;
var G__73766 = (i__73506_73754 + (1));
seq__73503_73751 = G__73763;
chunk__73504_73752 = G__73764;
count__73505_73753 = G__73765;
i__73506_73754 = G__73766;
continue;
} else {
var temp__5735__auto___73767 = cljs.core.seq(seq__73503_73751);
if(temp__5735__auto___73767){
var seq__73503_73768__$1 = temp__5735__auto___73767;
if(cljs.core.chunked_seq_QMARK_(seq__73503_73768__$1)){
var c__4556__auto___73769 = cljs.core.chunk_first(seq__73503_73768__$1);
var G__73770 = cljs.core.chunk_rest(seq__73503_73768__$1);
var G__73771 = c__4556__auto___73769;
var G__73772 = cljs.core.count(c__4556__auto___73769);
var G__73773 = (0);
seq__73503_73751 = G__73770;
chunk__73504_73752 = G__73771;
count__73505_73753 = G__73772;
i__73506_73754 = G__73773;
continue;
} else {
var map__73524_73775 = cljs.core.first(seq__73503_73768__$1);
var map__73524_73776__$1 = (((((!((map__73524_73775 == null))))?(((((map__73524_73775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73524_73775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73524_73775):map__73524_73775);
var w_73777 = map__73524_73776__$1;
var msg_73778__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73524_73776__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_73779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73524_73776__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_73780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73524_73776__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_73781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73524_73776__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_73781)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_73779),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_73780),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_73778__$1)].join(''));


var G__73786 = cljs.core.next(seq__73503_73768__$1);
var G__73787 = null;
var G__73788 = (0);
var G__73789 = (0);
seq__73503_73751 = G__73786;
chunk__73504_73752 = G__73787;
count__73505_73753 = G__73788;
i__73506_73754 = G__73789;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__73463_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__73463_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__73537){
var map__73538 = p__73537;
var map__73538__$1 = (((((!((map__73538 == null))))?(((((map__73538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73538):map__73538);
var msg = map__73538__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73538__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__73542 = cljs.core.seq(updates);
var chunk__73544 = null;
var count__73545 = (0);
var i__73546 = (0);
while(true){
if((i__73546 < count__73545)){
var path = chunk__73544.cljs$core$IIndexed$_nth$arity$2(null,i__73546);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__73602_73795 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__73605_73796 = null;
var count__73606_73797 = (0);
var i__73607_73798 = (0);
while(true){
if((i__73607_73798 < count__73606_73797)){
var node_73799 = chunk__73605_73796.cljs$core$IIndexed$_nth$arity$2(null,i__73607_73798);
var path_match_73800 = shadow.cljs.devtools.client.browser.match_paths(node_73799.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73800)){
var new_link_73801 = (function (){var G__73628 = node_73799.cloneNode(true);
G__73628.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73800),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73628;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73800], 0));

goog.dom.insertSiblingAfter(new_link_73801,node_73799);

goog.dom.removeNode(node_73799);


var G__73802 = seq__73602_73795;
var G__73803 = chunk__73605_73796;
var G__73804 = count__73606_73797;
var G__73805 = (i__73607_73798 + (1));
seq__73602_73795 = G__73802;
chunk__73605_73796 = G__73803;
count__73606_73797 = G__73804;
i__73607_73798 = G__73805;
continue;
} else {
var G__73806 = seq__73602_73795;
var G__73807 = chunk__73605_73796;
var G__73808 = count__73606_73797;
var G__73809 = (i__73607_73798 + (1));
seq__73602_73795 = G__73806;
chunk__73605_73796 = G__73807;
count__73606_73797 = G__73808;
i__73607_73798 = G__73809;
continue;
}
} else {
var temp__5735__auto___73810 = cljs.core.seq(seq__73602_73795);
if(temp__5735__auto___73810){
var seq__73602_73811__$1 = temp__5735__auto___73810;
if(cljs.core.chunked_seq_QMARK_(seq__73602_73811__$1)){
var c__4556__auto___73812 = cljs.core.chunk_first(seq__73602_73811__$1);
var G__73813 = cljs.core.chunk_rest(seq__73602_73811__$1);
var G__73814 = c__4556__auto___73812;
var G__73815 = cljs.core.count(c__4556__auto___73812);
var G__73816 = (0);
seq__73602_73795 = G__73813;
chunk__73605_73796 = G__73814;
count__73606_73797 = G__73815;
i__73607_73798 = G__73816;
continue;
} else {
var node_73817 = cljs.core.first(seq__73602_73811__$1);
var path_match_73818 = shadow.cljs.devtools.client.browser.match_paths(node_73817.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73818)){
var new_link_73819 = (function (){var G__73629 = node_73817.cloneNode(true);
G__73629.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73818),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73629;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73818], 0));

goog.dom.insertSiblingAfter(new_link_73819,node_73817);

goog.dom.removeNode(node_73817);


var G__73820 = cljs.core.next(seq__73602_73811__$1);
var G__73821 = null;
var G__73822 = (0);
var G__73823 = (0);
seq__73602_73795 = G__73820;
chunk__73605_73796 = G__73821;
count__73606_73797 = G__73822;
i__73607_73798 = G__73823;
continue;
} else {
var G__73824 = cljs.core.next(seq__73602_73811__$1);
var G__73825 = null;
var G__73826 = (0);
var G__73827 = (0);
seq__73602_73795 = G__73824;
chunk__73605_73796 = G__73825;
count__73606_73797 = G__73826;
i__73607_73798 = G__73827;
continue;
}
}
} else {
}
}
break;
}


var G__73828 = seq__73542;
var G__73829 = chunk__73544;
var G__73830 = count__73545;
var G__73831 = (i__73546 + (1));
seq__73542 = G__73828;
chunk__73544 = G__73829;
count__73545 = G__73830;
i__73546 = G__73831;
continue;
} else {
var G__73832 = seq__73542;
var G__73833 = chunk__73544;
var G__73834 = count__73545;
var G__73835 = (i__73546 + (1));
seq__73542 = G__73832;
chunk__73544 = G__73833;
count__73545 = G__73834;
i__73546 = G__73835;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__73542);
if(temp__5735__auto__){
var seq__73542__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73542__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73542__$1);
var G__73836 = cljs.core.chunk_rest(seq__73542__$1);
var G__73837 = c__4556__auto__;
var G__73838 = cljs.core.count(c__4556__auto__);
var G__73839 = (0);
seq__73542 = G__73836;
chunk__73544 = G__73837;
count__73545 = G__73838;
i__73546 = G__73839;
continue;
} else {
var path = cljs.core.first(seq__73542__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__73630_73840 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__73633_73841 = null;
var count__73634_73842 = (0);
var i__73635_73843 = (0);
while(true){
if((i__73635_73843 < count__73634_73842)){
var node_73844 = chunk__73633_73841.cljs$core$IIndexed$_nth$arity$2(null,i__73635_73843);
var path_match_73845 = shadow.cljs.devtools.client.browser.match_paths(node_73844.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73845)){
var new_link_73846 = (function (){var G__73640 = node_73844.cloneNode(true);
G__73640.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73845),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73640;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73845], 0));

goog.dom.insertSiblingAfter(new_link_73846,node_73844);

goog.dom.removeNode(node_73844);


var G__73847 = seq__73630_73840;
var G__73848 = chunk__73633_73841;
var G__73849 = count__73634_73842;
var G__73850 = (i__73635_73843 + (1));
seq__73630_73840 = G__73847;
chunk__73633_73841 = G__73848;
count__73634_73842 = G__73849;
i__73635_73843 = G__73850;
continue;
} else {
var G__73854 = seq__73630_73840;
var G__73855 = chunk__73633_73841;
var G__73856 = count__73634_73842;
var G__73857 = (i__73635_73843 + (1));
seq__73630_73840 = G__73854;
chunk__73633_73841 = G__73855;
count__73634_73842 = G__73856;
i__73635_73843 = G__73857;
continue;
}
} else {
var temp__5735__auto___73858__$1 = cljs.core.seq(seq__73630_73840);
if(temp__5735__auto___73858__$1){
var seq__73630_73859__$1 = temp__5735__auto___73858__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73630_73859__$1)){
var c__4556__auto___73860 = cljs.core.chunk_first(seq__73630_73859__$1);
var G__73861 = cljs.core.chunk_rest(seq__73630_73859__$1);
var G__73862 = c__4556__auto___73860;
var G__73863 = cljs.core.count(c__4556__auto___73860);
var G__73864 = (0);
seq__73630_73840 = G__73861;
chunk__73633_73841 = G__73862;
count__73634_73842 = G__73863;
i__73635_73843 = G__73864;
continue;
} else {
var node_73865 = cljs.core.first(seq__73630_73859__$1);
var path_match_73866 = shadow.cljs.devtools.client.browser.match_paths(node_73865.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73866)){
var new_link_73867 = (function (){var G__73641 = node_73865.cloneNode(true);
G__73641.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73866),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73641;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73866], 0));

goog.dom.insertSiblingAfter(new_link_73867,node_73865);

goog.dom.removeNode(node_73865);


var G__73868 = cljs.core.next(seq__73630_73859__$1);
var G__73869 = null;
var G__73870 = (0);
var G__73871 = (0);
seq__73630_73840 = G__73868;
chunk__73633_73841 = G__73869;
count__73634_73842 = G__73870;
i__73635_73843 = G__73871;
continue;
} else {
var G__73872 = cljs.core.next(seq__73630_73859__$1);
var G__73873 = null;
var G__73874 = (0);
var G__73875 = (0);
seq__73630_73840 = G__73872;
chunk__73633_73841 = G__73873;
count__73634_73842 = G__73874;
i__73635_73843 = G__73875;
continue;
}
}
} else {
}
}
break;
}


var G__73876 = cljs.core.next(seq__73542__$1);
var G__73877 = null;
var G__73878 = (0);
var G__73879 = (0);
seq__73542 = G__73876;
chunk__73544 = G__73877;
count__73545 = G__73878;
i__73546 = G__73879;
continue;
} else {
var G__73880 = cljs.core.next(seq__73542__$1);
var G__73881 = null;
var G__73882 = (0);
var G__73883 = (0);
seq__73542 = G__73880;
chunk__73544 = G__73881;
count__73545 = G__73882;
i__73546 = G__73883;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__73645){
var map__73646 = p__73645;
var map__73646__$1 = (((((!((map__73646 == null))))?(((((map__73646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73646):map__73646);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73646__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__73649){
var map__73650 = p__73649;
var map__73650__$1 = (((((!((map__73650 == null))))?(((((map__73650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73650):map__73650);
var _ = map__73650__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73650__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__73655,done,error){
var map__73656 = p__73655;
var map__73656__$1 = (((((!((map__73656 == null))))?(((((map__73656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73656):map__73656);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73656__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__73662,done,error){
var map__73663 = p__73662;
var map__73663__$1 = (((((!((map__73663 == null))))?(((((map__73663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73663):map__73663);
var msg = map__73663__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73663__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73663__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73663__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__73665){
var map__73666 = p__73665;
var map__73666__$1 = (((((!((map__73666 == null))))?(((((map__73666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73666):map__73666);
var src = map__73666__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73666__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__73668 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__73668) : done.call(null,G__73668));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__73670){
var map__73671 = p__73670;
var map__73671__$1 = (((((!((map__73671 == null))))?(((((map__73671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73671):map__73671);
var msg__$1 = map__73671__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73671__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e73678){var ex = e73678;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__73679){
var map__73680 = p__73679;
var map__73680__$1 = (((((!((map__73680 == null))))?(((((map__73680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73680):map__73680);
var env = map__73680__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73680__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__73687){
var map__73688 = p__73687;
var map__73688__$1 = (((((!((map__73688 == null))))?(((((map__73688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73688):map__73688);
var msg = map__73688__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73688__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__73697){
var map__73699 = p__73697;
var map__73699__$1 = (((((!((map__73699 == null))))?(((((map__73699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73699):map__73699);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73699__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73699__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__73704){
var map__73705 = p__73704;
var map__73705__$1 = (((((!((map__73705 == null))))?(((((map__73705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73705):map__73705);
var svc = map__73705__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73705__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
