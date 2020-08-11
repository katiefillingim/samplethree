goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug');
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__57803__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__57803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57804__i = 0, G__57804__a = new Array(arguments.length -  0);
while (G__57804__i < G__57804__a.length) {G__57804__a[G__57804__i] = arguments[G__57804__i + 0]; ++G__57804__i;}
  args = new cljs.core.IndexedSeq(G__57804__a,0,null);
} 
return G__57803__delegate.call(this,args);};
G__57803.cljs$lang$maxFixedArity = 0;
G__57803.cljs$lang$applyTo = (function (arglist__57805){
var args = cljs.core.seq(arglist__57805);
return G__57803__delegate(args);
});
G__57803.cljs$core$IFn$_invoke$arity$variadic = G__57803__delegate;
return G__57803;
})()
);

(o.error = (function() { 
var G__57806__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__57806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57807__i = 0, G__57807__a = new Array(arguments.length -  0);
while (G__57807__i < G__57807__a.length) {G__57807__a[G__57807__i] = arguments[G__57807__i + 0]; ++G__57807__i;}
  args = new cljs.core.IndexedSeq(G__57807__a,0,null);
} 
return G__57806__delegate.call(this,args);};
G__57806.cljs$lang$maxFixedArity = 0;
G__57806.cljs$lang$applyTo = (function (arglist__57808){
var args = cljs.core.seq(arglist__57808);
return G__57806__delegate(args);
});
G__57806.cljs$core$IFn$_invoke$arity$variadic = G__57806__delegate;
return G__57806;
})()
);

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$debug$track_warnings(f){
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.tracking = true);

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings);
cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,null);

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.js.map
