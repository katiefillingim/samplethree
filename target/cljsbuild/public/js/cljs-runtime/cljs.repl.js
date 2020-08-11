goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__57051){
var map__57052 = p__57051;
var map__57052__$1 = (((((!((map__57052 == null))))?(((((map__57052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57052):map__57052);
var m = map__57052__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57052__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57052__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__57054_57155 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__57055_57156 = null;
var count__57056_57157 = (0);
var i__57057_57158 = (0);
while(true){
if((i__57057_57158 < count__57056_57157)){
var f_57159 = chunk__57055_57156.cljs$core$IIndexed$_nth$arity$2(null,i__57057_57158);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57159], 0));


var G__57160 = seq__57054_57155;
var G__57161 = chunk__57055_57156;
var G__57162 = count__57056_57157;
var G__57163 = (i__57057_57158 + (1));
seq__57054_57155 = G__57160;
chunk__57055_57156 = G__57161;
count__57056_57157 = G__57162;
i__57057_57158 = G__57163;
continue;
} else {
var temp__5735__auto___57164 = cljs.core.seq(seq__57054_57155);
if(temp__5735__auto___57164){
var seq__57054_57165__$1 = temp__5735__auto___57164;
if(cljs.core.chunked_seq_QMARK_(seq__57054_57165__$1)){
var c__4556__auto___57166 = cljs.core.chunk_first(seq__57054_57165__$1);
var G__57167 = cljs.core.chunk_rest(seq__57054_57165__$1);
var G__57168 = c__4556__auto___57166;
var G__57169 = cljs.core.count(c__4556__auto___57166);
var G__57170 = (0);
seq__57054_57155 = G__57167;
chunk__57055_57156 = G__57168;
count__57056_57157 = G__57169;
i__57057_57158 = G__57170;
continue;
} else {
var f_57171 = cljs.core.first(seq__57054_57165__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57171], 0));


var G__57172 = cljs.core.next(seq__57054_57165__$1);
var G__57173 = null;
var G__57174 = (0);
var G__57175 = (0);
seq__57054_57155 = G__57172;
chunk__57055_57156 = G__57173;
count__57056_57157 = G__57174;
i__57057_57158 = G__57175;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_57176 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_57176], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_57176)))?cljs.core.second(arglists_57176):arglists_57176)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__57058_57177 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__57059_57178 = null;
var count__57060_57179 = (0);
var i__57061_57180 = (0);
while(true){
if((i__57061_57180 < count__57060_57179)){
var vec__57072_57181 = chunk__57059_57178.cljs$core$IIndexed$_nth$arity$2(null,i__57061_57180);
var name_57182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57072_57181,(0),null);
var map__57075_57183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57072_57181,(1),null);
var map__57075_57184__$1 = (((((!((map__57075_57183 == null))))?(((((map__57075_57183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57075_57183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57075_57183):map__57075_57183);
var doc_57185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57075_57184__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57075_57184__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57182], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57186], 0));

if(cljs.core.truth_(doc_57185)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57185], 0));
} else {
}


var G__57187 = seq__57058_57177;
var G__57188 = chunk__57059_57178;
var G__57189 = count__57060_57179;
var G__57190 = (i__57061_57180 + (1));
seq__57058_57177 = G__57187;
chunk__57059_57178 = G__57188;
count__57060_57179 = G__57189;
i__57061_57180 = G__57190;
continue;
} else {
var temp__5735__auto___57191 = cljs.core.seq(seq__57058_57177);
if(temp__5735__auto___57191){
var seq__57058_57192__$1 = temp__5735__auto___57191;
if(cljs.core.chunked_seq_QMARK_(seq__57058_57192__$1)){
var c__4556__auto___57193 = cljs.core.chunk_first(seq__57058_57192__$1);
var G__57194 = cljs.core.chunk_rest(seq__57058_57192__$1);
var G__57195 = c__4556__auto___57193;
var G__57196 = cljs.core.count(c__4556__auto___57193);
var G__57197 = (0);
seq__57058_57177 = G__57194;
chunk__57059_57178 = G__57195;
count__57060_57179 = G__57196;
i__57061_57180 = G__57197;
continue;
} else {
var vec__57077_57198 = cljs.core.first(seq__57058_57192__$1);
var name_57199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57077_57198,(0),null);
var map__57080_57200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57077_57198,(1),null);
var map__57080_57201__$1 = (((((!((map__57080_57200 == null))))?(((((map__57080_57200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57080_57200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57080_57200):map__57080_57200);
var doc_57202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57080_57201__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57080_57201__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57199], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57203], 0));

if(cljs.core.truth_(doc_57202)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57202], 0));
} else {
}


var G__57204 = cljs.core.next(seq__57058_57192__$1);
var G__57205 = null;
var G__57206 = (0);
var G__57207 = (0);
seq__57058_57177 = G__57204;
chunk__57059_57178 = G__57205;
count__57060_57179 = G__57206;
i__57061_57180 = G__57207;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__57082 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__57083 = null;
var count__57084 = (0);
var i__57085 = (0);
while(true){
if((i__57085 < count__57084)){
var role = chunk__57083.cljs$core$IIndexed$_nth$arity$2(null,i__57085);
var temp__5735__auto___57208__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57208__$1)){
var spec_57209 = temp__5735__auto___57208__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57209)], 0));
} else {
}


var G__57210 = seq__57082;
var G__57211 = chunk__57083;
var G__57212 = count__57084;
var G__57213 = (i__57085 + (1));
seq__57082 = G__57210;
chunk__57083 = G__57211;
count__57084 = G__57212;
i__57085 = G__57213;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__57082);
if(temp__5735__auto____$1){
var seq__57082__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__57082__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__57082__$1);
var G__57214 = cljs.core.chunk_rest(seq__57082__$1);
var G__57215 = c__4556__auto__;
var G__57216 = cljs.core.count(c__4556__auto__);
var G__57217 = (0);
seq__57082 = G__57214;
chunk__57083 = G__57215;
count__57084 = G__57216;
i__57085 = G__57217;
continue;
} else {
var role = cljs.core.first(seq__57082__$1);
var temp__5735__auto___57218__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57218__$2)){
var spec_57219 = temp__5735__auto___57218__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57219)], 0));
} else {
}


var G__57220 = cljs.core.next(seq__57082__$1);
var G__57221 = null;
var G__57222 = (0);
var G__57223 = (0);
seq__57082 = G__57220;
chunk__57083 = G__57221;
count__57084 = G__57222;
i__57085 = G__57223;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__57224 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__57225 = cljs.core.ex_cause(t);
via = G__57224;
t = G__57225;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__57088 = datafied_throwable;
var map__57088__$1 = (((((!((map__57088 == null))))?(((((map__57088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57088):map__57088);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57088__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57088__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57088__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__57089 = cljs.core.last(via);
var map__57089__$1 = (((((!((map__57089 == null))))?(((((map__57089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57089):map__57089);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57089__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57089__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57089__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__57090 = data;
var map__57090__$1 = (((((!((map__57090 == null))))?(((((map__57090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57090):map__57090);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57090__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57090__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57090__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__57091 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__57091__$1 = (((((!((map__57091 == null))))?(((((map__57091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57091):map__57091);
var top_data = map__57091__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57091__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__57096 = phase;
var G__57096__$1 = (((G__57096 instanceof cljs.core.Keyword))?G__57096.fqn:null);
switch (G__57096__$1) {
case "read-source":
var map__57097 = data;
var map__57097__$1 = (((((!((map__57097 == null))))?(((((map__57097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57097):map__57097);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57097__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57097__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__57099 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__57099__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57099,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__57099);
var G__57099__$2 = (cljs.core.truth_((function (){var fexpr__57100 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__57100.cljs$core$IFn$_invoke$arity$1 ? fexpr__57100.cljs$core$IFn$_invoke$arity$1(source) : fexpr__57100.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57099__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__57099__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57099__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__57099__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__57101 = top_data;
var G__57101__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57101,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__57101);
var G__57101__$2 = (cljs.core.truth_((function (){var fexpr__57102 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__57102.cljs$core$IFn$_invoke$arity$1 ? fexpr__57102.cljs$core$IFn$_invoke$arity$1(source) : fexpr__57102.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57101__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__57101__$1);
var G__57101__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57101__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__57101__$2);
var G__57101__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57101__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__57101__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57101__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__57101__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__57103 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57103,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57103,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57103,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57103,(3),null);
var G__57106 = top_data;
var G__57106__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57106,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__57106);
var G__57106__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57106__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__57106__$1);
var G__57106__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57106__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__57106__$2);
var G__57106__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57106__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__57106__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57106__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__57106__$4;
}

break;
case "execution":
var vec__57107 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57107,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57107,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57107,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57107,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__57087_SHARP_){
var or__4126__auto__ = (p1__57087_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__57111 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__57111.cljs$core$IFn$_invoke$arity$1 ? fexpr__57111.cljs$core$IFn$_invoke$arity$1(p1__57087_SHARP_) : fexpr__57111.call(null,p1__57087_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__57112 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__57112__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57112,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__57112);
var G__57112__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57112__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__57112__$1);
var G__57112__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57112__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__57112__$2);
var G__57112__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57112__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__57112__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57112__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__57112__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57096__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__57115){
var map__57116 = p__57115;
var map__57116__$1 = (((((!((map__57116 == null))))?(((((map__57116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57116):map__57116);
var triage_data = map__57116__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57116__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57116__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57116__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57116__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57116__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57116__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57116__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57116__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__57118 = phase;
var G__57118__$1 = (((G__57118 instanceof cljs.core.Keyword))?G__57118.fqn:null);
switch (G__57118__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__57119 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__57120 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57121 = loc;
var G__57122 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57123_57228 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57124_57229 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57125_57230 = true;
var _STAR_print_fn_STAR__temp_val__57126_57231 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57125_57230);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57126_57231);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57113_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__57113_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57124_57229);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57123_57228);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57119,G__57120,G__57121,G__57122) : format.call(null,G__57119,G__57120,G__57121,G__57122));

break;
case "macroexpansion":
var G__57127 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__57128 = cause_type;
var G__57129 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57130 = loc;
var G__57131 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57127,G__57128,G__57129,G__57130,G__57131) : format.call(null,G__57127,G__57128,G__57129,G__57130,G__57131));

break;
case "compile-syntax-check":
var G__57132 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__57133 = cause_type;
var G__57134 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57135 = loc;
var G__57136 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57132,G__57133,G__57134,G__57135,G__57136) : format.call(null,G__57132,G__57133,G__57134,G__57135,G__57136));

break;
case "compilation":
var G__57137 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__57138 = cause_type;
var G__57139 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57140 = loc;
var G__57141 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57137,G__57138,G__57139,G__57140,G__57141) : format.call(null,G__57137,G__57138,G__57139,G__57140,G__57141));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__57142 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__57143 = symbol;
var G__57144 = loc;
var G__57145 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57146_57232 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57147_57233 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57148_57234 = true;
var _STAR_print_fn_STAR__temp_val__57149_57235 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57148_57234);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57149_57235);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57114_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__57114_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57147_57233);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57146_57232);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57142,G__57143,G__57144,G__57145) : format.call(null,G__57142,G__57143,G__57144,G__57145));
} else {
var G__57150 = "Execution error%s at %s(%s).\n%s\n";
var G__57151 = cause_type;
var G__57152 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57153 = loc;
var G__57154 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57150,G__57151,G__57152,G__57153,G__57154) : format.call(null,G__57150,G__57151,G__57152,G__57153,G__57154));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57118__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
