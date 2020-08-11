goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__75815,match){
var map__75816 = p__75815;
var map__75816__$1 = (((((!((map__75816 == null))))?(((((map__75816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75816):map__75816);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75816__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75816__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75816__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4115__auto__ = identity;
if(cljs.core.truth_(and__4115__auto__)){
return parameters;
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__75818(s__75819){
return (new cljs.core.LazySeq(null,(function (){
var s__75819__$1 = s__75819;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__75819__$1);
if(temp__5735__auto__){
var s__75819__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75819__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__75819__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__75821 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__75820 = (0);
while(true){
if((i__75820 < size__4528__auto__)){
var vec__75822 = cljs.core._nth(c__4527__auto__,i__75820);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75822,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75822,(1),null);
cljs.core.chunk_append(b__75821,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__75869 = (i__75820 + (1));
i__75820 = G__75869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75821),reitit$frontend$controllers$get_identity_$_iter__75818(cljs.core.chunk_rest(s__75819__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75821),null);
}
} else {
var vec__75825 = cljs.core.first(s__75819__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75825,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75825,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__75818(cljs.core.rest(s__75819__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__75840 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__75840) : f.call(null,G__75840));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__75848_75873 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__75849_75874 = null;
var count__75850_75875 = (0);
var i__75851_75876 = (0);
while(true){
if((i__75851_75876 < count__75850_75875)){
var controller_75877 = chunk__75849_75874.cljs$core$IIndexed$_nth$arity$2(null,i__75851_75876);
reitit.frontend.controllers.apply_controller(controller_75877,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__75878 = seq__75848_75873;
var G__75879 = chunk__75849_75874;
var G__75880 = count__75850_75875;
var G__75881 = (i__75851_75876 + (1));
seq__75848_75873 = G__75878;
chunk__75849_75874 = G__75879;
count__75850_75875 = G__75880;
i__75851_75876 = G__75881;
continue;
} else {
var temp__5735__auto___75882 = cljs.core.seq(seq__75848_75873);
if(temp__5735__auto___75882){
var seq__75848_75883__$1 = temp__5735__auto___75882;
if(cljs.core.chunked_seq_QMARK_(seq__75848_75883__$1)){
var c__4556__auto___75884 = cljs.core.chunk_first(seq__75848_75883__$1);
var G__75885 = cljs.core.chunk_rest(seq__75848_75883__$1);
var G__75886 = c__4556__auto___75884;
var G__75887 = cljs.core.count(c__4556__auto___75884);
var G__75888 = (0);
seq__75848_75873 = G__75885;
chunk__75849_75874 = G__75886;
count__75850_75875 = G__75887;
i__75851_75876 = G__75888;
continue;
} else {
var controller_75889 = cljs.core.first(seq__75848_75883__$1);
reitit.frontend.controllers.apply_controller(controller_75889,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__75890 = cljs.core.next(seq__75848_75883__$1);
var G__75891 = null;
var G__75892 = (0);
var G__75893 = (0);
seq__75848_75873 = G__75890;
chunk__75849_75874 = G__75891;
count__75850_75875 = G__75892;
i__75851_75876 = G__75893;
continue;
}
} else {
}
}
break;
}

var seq__75859_75894 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__75860_75895 = null;
var count__75861_75896 = (0);
var i__75862_75897 = (0);
while(true){
if((i__75862_75897 < count__75861_75896)){
var controller_75899 = chunk__75860_75895.cljs$core$IIndexed$_nth$arity$2(null,i__75862_75897);
reitit.frontend.controllers.apply_controller(controller_75899,new cljs.core.Keyword(null,"start","start",-355208981));


var G__75900 = seq__75859_75894;
var G__75901 = chunk__75860_75895;
var G__75902 = count__75861_75896;
var G__75903 = (i__75862_75897 + (1));
seq__75859_75894 = G__75900;
chunk__75860_75895 = G__75901;
count__75861_75896 = G__75902;
i__75862_75897 = G__75903;
continue;
} else {
var temp__5735__auto___75904 = cljs.core.seq(seq__75859_75894);
if(temp__5735__auto___75904){
var seq__75859_75905__$1 = temp__5735__auto___75904;
if(cljs.core.chunked_seq_QMARK_(seq__75859_75905__$1)){
var c__4556__auto___75906 = cljs.core.chunk_first(seq__75859_75905__$1);
var G__75907 = cljs.core.chunk_rest(seq__75859_75905__$1);
var G__75908 = c__4556__auto___75906;
var G__75909 = cljs.core.count(c__4556__auto___75906);
var G__75910 = (0);
seq__75859_75894 = G__75907;
chunk__75860_75895 = G__75908;
count__75861_75896 = G__75909;
i__75862_75897 = G__75910;
continue;
} else {
var controller_75911 = cljs.core.first(seq__75859_75905__$1);
reitit.frontend.controllers.apply_controller(controller_75911,new cljs.core.Keyword(null,"start","start",-355208981));


var G__75912 = cljs.core.next(seq__75859_75905__$1);
var G__75913 = null;
var G__75914 = (0);
var G__75915 = (0);
seq__75859_75894 = G__75912;
chunk__75860_75895 = G__75913;
count__75861_75896 = G__75914;
i__75862_75897 = G__75915;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
