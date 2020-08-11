goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__63895__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__63895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63896__i = 0, G__63896__a = new Array(arguments.length -  0);
while (G__63896__i < G__63896__a.length) {G__63896__a[G__63896__i] = arguments[G__63896__i + 0]; ++G__63896__i;}
  args = new cljs.core.IndexedSeq(G__63896__a,0,null);
} 
return G__63895__delegate.call(this,args);};
G__63895.cljs$lang$maxFixedArity = 0;
G__63895.cljs$lang$applyTo = (function (arglist__63897){
var args = cljs.core.seq(arglist__63897);
return G__63895__delegate(args);
});
G__63895.cljs$core$IFn$_invoke$arity$variadic = G__63895__delegate;
return G__63895;
})()
);

(o.error = (function() { 
var G__63922__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__63922 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63941__i = 0, G__63941__a = new Array(arguments.length -  0);
while (G__63941__i < G__63941__a.length) {G__63941__a[G__63941__i] = arguments[G__63941__i + 0]; ++G__63941__i;}
  args = new cljs.core.IndexedSeq(G__63941__a,0,null);
} 
return G__63922__delegate.call(this,args);};
G__63922.cljs$lang$maxFixedArity = 0;
G__63922.cljs$lang$applyTo = (function (arglist__63942){
var args = cljs.core.seq(arglist__63942);
return G__63922__delegate(args);
});
G__63922.cljs$core$IFn$_invoke$arity$variadic = G__63922__delegate;
return G__63922;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
