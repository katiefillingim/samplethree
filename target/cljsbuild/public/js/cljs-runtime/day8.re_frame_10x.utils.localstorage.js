goog.provide('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__66228 = arguments.length;
switch (G__66228) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__66245 = cljs.core.seq(Object.keys(localStorage));
var chunk__66246 = null;
var count__66247 = (0);
var i__66248 = (0);
while(true){
if((i__66248 < count__66247)){
var k = chunk__66246.cljs$core$IIndexed$_nth$arity$2(null,i__66248);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__66268 = seq__66245;
var G__66269 = chunk__66246;
var G__66270 = count__66247;
var G__66271 = (i__66248 + (1));
seq__66245 = G__66268;
chunk__66246 = G__66269;
count__66247 = G__66270;
i__66248 = G__66271;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66245);
if(temp__5735__auto__){
var seq__66245__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66245__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66245__$1);
var G__66272 = cljs.core.chunk_rest(seq__66245__$1);
var G__66273 = c__4556__auto__;
var G__66274 = cljs.core.count(c__4556__auto__);
var G__66275 = (0);
seq__66245 = G__66272;
chunk__66246 = G__66273;
count__66247 = G__66274;
i__66248 = G__66275;
continue;
} else {
var k = cljs.core.first(seq__66245__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__66276 = cljs.core.next(seq__66245__$1);
var G__66277 = null;
var G__66278 = (0);
var G__66279 = (0);
seq__66245 = G__66276;
chunk__66246 = G__66277;
count__66247 = G__66278;
i__66248 = G__66279;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
