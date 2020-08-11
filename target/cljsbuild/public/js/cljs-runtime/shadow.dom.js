goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_71958 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_71958(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_71960 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_71960(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__71349 = coll;
var G__71350 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__71349,G__71350) : shadow.dom.lazy_native_coll_seq.call(null,G__71349,G__71350));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__71369 = arguments.length;
switch (G__71369) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__71377 = arguments.length;
switch (G__71377) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__71384 = arguments.length;
switch (G__71384) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__71390 = arguments.length;
switch (G__71390) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__71395 = arguments.length;
switch (G__71395) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__71398 = arguments.length;
switch (G__71398) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e71399){if((e71399 instanceof Object)){
var e = e71399;
return console.log("didnt support attachEvent",el,e);
} else {
throw e71399;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__71401 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__71402 = null;
var count__71403 = (0);
var i__71404 = (0);
while(true){
if((i__71404 < count__71403)){
var el = chunk__71402.cljs$core$IIndexed$_nth$arity$2(null,i__71404);
var handler_71974__$1 = ((function (seq__71401,chunk__71402,count__71403,i__71404,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__71401,chunk__71402,count__71403,i__71404,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_71974__$1);


var G__71976 = seq__71401;
var G__71977 = chunk__71402;
var G__71978 = count__71403;
var G__71979 = (i__71404 + (1));
seq__71401 = G__71976;
chunk__71402 = G__71977;
count__71403 = G__71978;
i__71404 = G__71979;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__71401);
if(temp__5735__auto__){
var seq__71401__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71401__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71401__$1);
var G__71981 = cljs.core.chunk_rest(seq__71401__$1);
var G__71982 = c__4556__auto__;
var G__71983 = cljs.core.count(c__4556__auto__);
var G__71984 = (0);
seq__71401 = G__71981;
chunk__71402 = G__71982;
count__71403 = G__71983;
i__71404 = G__71984;
continue;
} else {
var el = cljs.core.first(seq__71401__$1);
var handler_71985__$1 = ((function (seq__71401,chunk__71402,count__71403,i__71404,el,seq__71401__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__71401,chunk__71402,count__71403,i__71404,el,seq__71401__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_71985__$1);


var G__71986 = cljs.core.next(seq__71401__$1);
var G__71987 = null;
var G__71988 = (0);
var G__71989 = (0);
seq__71401 = G__71986;
chunk__71402 = G__71987;
count__71403 = G__71988;
i__71404 = G__71989;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__71419 = arguments.length;
switch (G__71419) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__71425 = cljs.core.seq(events);
var chunk__71426 = null;
var count__71427 = (0);
var i__71428 = (0);
while(true){
if((i__71428 < count__71427)){
var vec__71439 = chunk__71426.cljs$core$IIndexed$_nth$arity$2(null,i__71428);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71439,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71439,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__71995 = seq__71425;
var G__71996 = chunk__71426;
var G__71997 = count__71427;
var G__71998 = (i__71428 + (1));
seq__71425 = G__71995;
chunk__71426 = G__71996;
count__71427 = G__71997;
i__71428 = G__71998;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__71425);
if(temp__5735__auto__){
var seq__71425__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71425__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71425__$1);
var G__71999 = cljs.core.chunk_rest(seq__71425__$1);
var G__72000 = c__4556__auto__;
var G__72001 = cljs.core.count(c__4556__auto__);
var G__72002 = (0);
seq__71425 = G__71999;
chunk__71426 = G__72000;
count__71427 = G__72001;
i__71428 = G__72002;
continue;
} else {
var vec__71449 = cljs.core.first(seq__71425__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71449,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71449,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__72003 = cljs.core.next(seq__71425__$1);
var G__72004 = null;
var G__72005 = (0);
var G__72006 = (0);
seq__71425 = G__72003;
chunk__71426 = G__72004;
count__71427 = G__72005;
i__71428 = G__72006;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__71456 = cljs.core.seq(styles);
var chunk__71457 = null;
var count__71458 = (0);
var i__71459 = (0);
while(true){
if((i__71459 < count__71458)){
var vec__71467 = chunk__71457.cljs$core$IIndexed$_nth$arity$2(null,i__71459);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71467,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71467,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__72008 = seq__71456;
var G__72009 = chunk__71457;
var G__72010 = count__71458;
var G__72011 = (i__71459 + (1));
seq__71456 = G__72008;
chunk__71457 = G__72009;
count__71458 = G__72010;
i__71459 = G__72011;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__71456);
if(temp__5735__auto__){
var seq__71456__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71456__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71456__$1);
var G__72013 = cljs.core.chunk_rest(seq__71456__$1);
var G__72014 = c__4556__auto__;
var G__72015 = cljs.core.count(c__4556__auto__);
var G__72016 = (0);
seq__71456 = G__72013;
chunk__71457 = G__72014;
count__71458 = G__72015;
i__71459 = G__72016;
continue;
} else {
var vec__71470 = cljs.core.first(seq__71456__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71470,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71470,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__72017 = cljs.core.next(seq__71456__$1);
var G__72018 = null;
var G__72019 = (0);
var G__72020 = (0);
seq__71456 = G__72017;
chunk__71457 = G__72018;
count__71458 = G__72019;
i__71459 = G__72020;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__71474_72021 = key;
var G__71474_72022__$1 = (((G__71474_72021 instanceof cljs.core.Keyword))?G__71474_72021.fqn:null);
switch (G__71474_72022__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_72026 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_72026,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_72026,"aria-");
}
})())){
el.setAttribute(ks_72026,value);
} else {
(el[ks_72026] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__71487){
var map__71488 = p__71487;
var map__71488__$1 = (((((!((map__71488 == null))))?(((((map__71488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71488):map__71488);
var props = map__71488__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71488__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__71490 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71490,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71490,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71490,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__71495 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__71495,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__71495;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__71499 = arguments.length;
switch (G__71499) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__71502){
var vec__71503 = p__71502;
var seq__71504 = cljs.core.seq(vec__71503);
var first__71505 = cljs.core.first(seq__71504);
var seq__71504__$1 = cljs.core.next(seq__71504);
var nn = first__71505;
var first__71505__$1 = cljs.core.first(seq__71504__$1);
var seq__71504__$2 = cljs.core.next(seq__71504__$1);
var np = first__71505__$1;
var nc = seq__71504__$2;
var node = vec__71503;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71506 = nn;
var G__71507 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__71506,G__71507) : create_fn.call(null,G__71506,G__71507));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71509 = nn;
var G__71510 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__71509,G__71510) : create_fn.call(null,G__71509,G__71510));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__71511 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71511,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71511,(1),null);
var seq__71514_72049 = cljs.core.seq(node_children);
var chunk__71515_72050 = null;
var count__71516_72051 = (0);
var i__71517_72052 = (0);
while(true){
if((i__71517_72052 < count__71516_72051)){
var child_struct_72053 = chunk__71515_72050.cljs$core$IIndexed$_nth$arity$2(null,i__71517_72052);
var children_72054 = shadow.dom.dom_node(child_struct_72053);
if(cljs.core.seq_QMARK_(children_72054)){
var seq__71536_72055 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_72054));
var chunk__71538_72056 = null;
var count__71539_72057 = (0);
var i__71540_72058 = (0);
while(true){
if((i__71540_72058 < count__71539_72057)){
var child_72061 = chunk__71538_72056.cljs$core$IIndexed$_nth$arity$2(null,i__71540_72058);
if(cljs.core.truth_(child_72061)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72061);


var G__72063 = seq__71536_72055;
var G__72064 = chunk__71538_72056;
var G__72065 = count__71539_72057;
var G__72066 = (i__71540_72058 + (1));
seq__71536_72055 = G__72063;
chunk__71538_72056 = G__72064;
count__71539_72057 = G__72065;
i__71540_72058 = G__72066;
continue;
} else {
var G__72069 = seq__71536_72055;
var G__72070 = chunk__71538_72056;
var G__72071 = count__71539_72057;
var G__72072 = (i__71540_72058 + (1));
seq__71536_72055 = G__72069;
chunk__71538_72056 = G__72070;
count__71539_72057 = G__72071;
i__71540_72058 = G__72072;
continue;
}
} else {
var temp__5735__auto___72074 = cljs.core.seq(seq__71536_72055);
if(temp__5735__auto___72074){
var seq__71536_72075__$1 = temp__5735__auto___72074;
if(cljs.core.chunked_seq_QMARK_(seq__71536_72075__$1)){
var c__4556__auto___72076 = cljs.core.chunk_first(seq__71536_72075__$1);
var G__72077 = cljs.core.chunk_rest(seq__71536_72075__$1);
var G__72078 = c__4556__auto___72076;
var G__72079 = cljs.core.count(c__4556__auto___72076);
var G__72080 = (0);
seq__71536_72055 = G__72077;
chunk__71538_72056 = G__72078;
count__71539_72057 = G__72079;
i__71540_72058 = G__72080;
continue;
} else {
var child_72081 = cljs.core.first(seq__71536_72075__$1);
if(cljs.core.truth_(child_72081)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72081);


var G__72082 = cljs.core.next(seq__71536_72075__$1);
var G__72083 = null;
var G__72084 = (0);
var G__72085 = (0);
seq__71536_72055 = G__72082;
chunk__71538_72056 = G__72083;
count__71539_72057 = G__72084;
i__71540_72058 = G__72085;
continue;
} else {
var G__72086 = cljs.core.next(seq__71536_72075__$1);
var G__72087 = null;
var G__72088 = (0);
var G__72089 = (0);
seq__71536_72055 = G__72086;
chunk__71538_72056 = G__72087;
count__71539_72057 = G__72088;
i__71540_72058 = G__72089;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_72054);
}


var G__72092 = seq__71514_72049;
var G__72093 = chunk__71515_72050;
var G__72094 = count__71516_72051;
var G__72095 = (i__71517_72052 + (1));
seq__71514_72049 = G__72092;
chunk__71515_72050 = G__72093;
count__71516_72051 = G__72094;
i__71517_72052 = G__72095;
continue;
} else {
var temp__5735__auto___72096 = cljs.core.seq(seq__71514_72049);
if(temp__5735__auto___72096){
var seq__71514_72097__$1 = temp__5735__auto___72096;
if(cljs.core.chunked_seq_QMARK_(seq__71514_72097__$1)){
var c__4556__auto___72098 = cljs.core.chunk_first(seq__71514_72097__$1);
var G__72100 = cljs.core.chunk_rest(seq__71514_72097__$1);
var G__72101 = c__4556__auto___72098;
var G__72102 = cljs.core.count(c__4556__auto___72098);
var G__72103 = (0);
seq__71514_72049 = G__72100;
chunk__71515_72050 = G__72101;
count__71516_72051 = G__72102;
i__71517_72052 = G__72103;
continue;
} else {
var child_struct_72104 = cljs.core.first(seq__71514_72097__$1);
var children_72105 = shadow.dom.dom_node(child_struct_72104);
if(cljs.core.seq_QMARK_(children_72105)){
var seq__71545_72107 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_72105));
var chunk__71547_72108 = null;
var count__71548_72109 = (0);
var i__71549_72110 = (0);
while(true){
if((i__71549_72110 < count__71548_72109)){
var child_72111 = chunk__71547_72108.cljs$core$IIndexed$_nth$arity$2(null,i__71549_72110);
if(cljs.core.truth_(child_72111)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72111);


var G__72112 = seq__71545_72107;
var G__72113 = chunk__71547_72108;
var G__72114 = count__71548_72109;
var G__72115 = (i__71549_72110 + (1));
seq__71545_72107 = G__72112;
chunk__71547_72108 = G__72113;
count__71548_72109 = G__72114;
i__71549_72110 = G__72115;
continue;
} else {
var G__72117 = seq__71545_72107;
var G__72118 = chunk__71547_72108;
var G__72119 = count__71548_72109;
var G__72120 = (i__71549_72110 + (1));
seq__71545_72107 = G__72117;
chunk__71547_72108 = G__72118;
count__71548_72109 = G__72119;
i__71549_72110 = G__72120;
continue;
}
} else {
var temp__5735__auto___72121__$1 = cljs.core.seq(seq__71545_72107);
if(temp__5735__auto___72121__$1){
var seq__71545_72122__$1 = temp__5735__auto___72121__$1;
if(cljs.core.chunked_seq_QMARK_(seq__71545_72122__$1)){
var c__4556__auto___72123 = cljs.core.chunk_first(seq__71545_72122__$1);
var G__72124 = cljs.core.chunk_rest(seq__71545_72122__$1);
var G__72125 = c__4556__auto___72123;
var G__72126 = cljs.core.count(c__4556__auto___72123);
var G__72127 = (0);
seq__71545_72107 = G__72124;
chunk__71547_72108 = G__72125;
count__71548_72109 = G__72126;
i__71549_72110 = G__72127;
continue;
} else {
var child_72128 = cljs.core.first(seq__71545_72122__$1);
if(cljs.core.truth_(child_72128)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72128);


var G__72129 = cljs.core.next(seq__71545_72122__$1);
var G__72130 = null;
var G__72131 = (0);
var G__72132 = (0);
seq__71545_72107 = G__72129;
chunk__71547_72108 = G__72130;
count__71548_72109 = G__72131;
i__71549_72110 = G__72132;
continue;
} else {
var G__72133 = cljs.core.next(seq__71545_72122__$1);
var G__72134 = null;
var G__72135 = (0);
var G__72136 = (0);
seq__71545_72107 = G__72133;
chunk__71547_72108 = G__72134;
count__71548_72109 = G__72135;
i__71549_72110 = G__72136;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_72105);
}


var G__72137 = cljs.core.next(seq__71514_72097__$1);
var G__72138 = null;
var G__72139 = (0);
var G__72140 = (0);
seq__71514_72049 = G__72137;
chunk__71515_72050 = G__72138;
count__71516_72051 = G__72139;
i__71517_72052 = G__72140;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__71559 = cljs.core.seq(node);
var chunk__71560 = null;
var count__71561 = (0);
var i__71562 = (0);
while(true){
if((i__71562 < count__71561)){
var n = chunk__71560.cljs$core$IIndexed$_nth$arity$2(null,i__71562);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__72148 = seq__71559;
var G__72149 = chunk__71560;
var G__72150 = count__71561;
var G__72151 = (i__71562 + (1));
seq__71559 = G__72148;
chunk__71560 = G__72149;
count__71561 = G__72150;
i__71562 = G__72151;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__71559);
if(temp__5735__auto__){
var seq__71559__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71559__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71559__$1);
var G__72152 = cljs.core.chunk_rest(seq__71559__$1);
var G__72153 = c__4556__auto__;
var G__72154 = cljs.core.count(c__4556__auto__);
var G__72155 = (0);
seq__71559 = G__72152;
chunk__71560 = G__72153;
count__71561 = G__72154;
i__71562 = G__72155;
continue;
} else {
var n = cljs.core.first(seq__71559__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__72157 = cljs.core.next(seq__71559__$1);
var G__72158 = null;
var G__72159 = (0);
var G__72160 = (0);
seq__71559 = G__72157;
chunk__71560 = G__72158;
count__71561 = G__72159;
i__71562 = G__72160;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__71576 = arguments.length;
switch (G__71576) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__71579 = arguments.length;
switch (G__71579) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__71581 = arguments.length;
switch (G__71581) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72170 = arguments.length;
var i__4737__auto___72171 = (0);
while(true){
if((i__4737__auto___72171 < len__4736__auto___72170)){
args__4742__auto__.push((arguments[i__4737__auto___72171]));

var G__72172 = (i__4737__auto___72171 + (1));
i__4737__auto___72171 = G__72172;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__71594_72175 = cljs.core.seq(nodes);
var chunk__71595_72176 = null;
var count__71596_72177 = (0);
var i__71597_72178 = (0);
while(true){
if((i__71597_72178 < count__71596_72177)){
var node_72179 = chunk__71595_72176.cljs$core$IIndexed$_nth$arity$2(null,i__71597_72178);
fragment.appendChild(shadow.dom._to_dom(node_72179));


var G__72183 = seq__71594_72175;
var G__72184 = chunk__71595_72176;
var G__72185 = count__71596_72177;
var G__72186 = (i__71597_72178 + (1));
seq__71594_72175 = G__72183;
chunk__71595_72176 = G__72184;
count__71596_72177 = G__72185;
i__71597_72178 = G__72186;
continue;
} else {
var temp__5735__auto___72187 = cljs.core.seq(seq__71594_72175);
if(temp__5735__auto___72187){
var seq__71594_72188__$1 = temp__5735__auto___72187;
if(cljs.core.chunked_seq_QMARK_(seq__71594_72188__$1)){
var c__4556__auto___72189 = cljs.core.chunk_first(seq__71594_72188__$1);
var G__72190 = cljs.core.chunk_rest(seq__71594_72188__$1);
var G__72191 = c__4556__auto___72189;
var G__72192 = cljs.core.count(c__4556__auto___72189);
var G__72193 = (0);
seq__71594_72175 = G__72190;
chunk__71595_72176 = G__72191;
count__71596_72177 = G__72192;
i__71597_72178 = G__72193;
continue;
} else {
var node_72195 = cljs.core.first(seq__71594_72188__$1);
fragment.appendChild(shadow.dom._to_dom(node_72195));


var G__72197 = cljs.core.next(seq__71594_72188__$1);
var G__72198 = null;
var G__72199 = (0);
var G__72200 = (0);
seq__71594_72175 = G__72197;
chunk__71595_72176 = G__72198;
count__71596_72177 = G__72199;
i__71597_72178 = G__72200;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq71591){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71591));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__71606_72203 = cljs.core.seq(scripts);
var chunk__71607_72204 = null;
var count__71608_72205 = (0);
var i__71609_72206 = (0);
while(true){
if((i__71609_72206 < count__71608_72205)){
var vec__71622_72208 = chunk__71607_72204.cljs$core$IIndexed$_nth$arity$2(null,i__71609_72206);
var script_tag_72209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71622_72208,(0),null);
var script_body_72210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71622_72208,(1),null);
eval(script_body_72210);


var G__72212 = seq__71606_72203;
var G__72213 = chunk__71607_72204;
var G__72214 = count__71608_72205;
var G__72215 = (i__71609_72206 + (1));
seq__71606_72203 = G__72212;
chunk__71607_72204 = G__72213;
count__71608_72205 = G__72214;
i__71609_72206 = G__72215;
continue;
} else {
var temp__5735__auto___72216 = cljs.core.seq(seq__71606_72203);
if(temp__5735__auto___72216){
var seq__71606_72217__$1 = temp__5735__auto___72216;
if(cljs.core.chunked_seq_QMARK_(seq__71606_72217__$1)){
var c__4556__auto___72218 = cljs.core.chunk_first(seq__71606_72217__$1);
var G__72219 = cljs.core.chunk_rest(seq__71606_72217__$1);
var G__72220 = c__4556__auto___72218;
var G__72221 = cljs.core.count(c__4556__auto___72218);
var G__72222 = (0);
seq__71606_72203 = G__72219;
chunk__71607_72204 = G__72220;
count__71608_72205 = G__72221;
i__71609_72206 = G__72222;
continue;
} else {
var vec__71628_72223 = cljs.core.first(seq__71606_72217__$1);
var script_tag_72224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71628_72223,(0),null);
var script_body_72225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71628_72223,(1),null);
eval(script_body_72225);


var G__72227 = cljs.core.next(seq__71606_72217__$1);
var G__72228 = null;
var G__72229 = (0);
var G__72230 = (0);
seq__71606_72203 = G__72227;
chunk__71607_72204 = G__72228;
count__71608_72205 = G__72229;
i__71609_72206 = G__72230;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__71631){
var vec__71633 = p__71631;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71633,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71633,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__71640 = arguments.length;
switch (G__71640) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__71650 = cljs.core.seq(style_keys);
var chunk__71651 = null;
var count__71652 = (0);
var i__71653 = (0);
while(true){
if((i__71653 < count__71652)){
var it = chunk__71651.cljs$core$IIndexed$_nth$arity$2(null,i__71653);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__72239 = seq__71650;
var G__72240 = chunk__71651;
var G__72241 = count__71652;
var G__72242 = (i__71653 + (1));
seq__71650 = G__72239;
chunk__71651 = G__72240;
count__71652 = G__72241;
i__71653 = G__72242;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__71650);
if(temp__5735__auto__){
var seq__71650__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71650__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71650__$1);
var G__72244 = cljs.core.chunk_rest(seq__71650__$1);
var G__72245 = c__4556__auto__;
var G__72246 = cljs.core.count(c__4556__auto__);
var G__72247 = (0);
seq__71650 = G__72244;
chunk__71651 = G__72245;
count__71652 = G__72246;
i__71653 = G__72247;
continue;
} else {
var it = cljs.core.first(seq__71650__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__72249 = cljs.core.next(seq__71650__$1);
var G__72250 = null;
var G__72251 = (0);
var G__72252 = (0);
seq__71650 = G__72249;
chunk__71651 = G__72250;
count__71652 = G__72251;
i__71653 = G__72252;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k71661,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__71668 = k71661;
var G__71668__$1 = (((G__71668 instanceof cljs.core.Keyword))?G__71668.fqn:null);
switch (G__71668__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71661,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__71669){
var vec__71670 = p__71669;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71670,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71670,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71660){
var self__ = this;
var G__71660__$1 = this;
return (new cljs.core.RecordIter((0),G__71660__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71662,other71663){
var self__ = this;
var this71662__$1 = this;
return (((!((other71663 == null)))) && ((this71662__$1.constructor === other71663.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71662__$1.x,other71663.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71662__$1.y,other71663.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71662__$1.__extmap,other71663.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__71660){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__71692 = cljs.core.keyword_identical_QMARK_;
var expr__71693 = k__4388__auto__;
if(cljs.core.truth_((pred__71692.cljs$core$IFn$_invoke$arity$2 ? pred__71692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__71693) : pred__71692.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__71693)))){
return (new shadow.dom.Coordinate(G__71660,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71692.cljs$core$IFn$_invoke$arity$2 ? pred__71692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__71693) : pred__71692.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__71693)))){
return (new shadow.dom.Coordinate(self__.x,G__71660,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__71660),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__71660){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__71660,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__71665){
var extmap__4419__auto__ = (function (){var G__71705 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71665,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__71665)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71705);
} else {
return G__71705;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__71665),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__71665),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k71712,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__71720 = k71712;
var G__71720__$1 = (((G__71720 instanceof cljs.core.Keyword))?G__71720.fqn:null);
switch (G__71720__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71712,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__71721){
var vec__71722 = p__71721;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71722,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71722,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71711){
var self__ = this;
var G__71711__$1 = this;
return (new cljs.core.RecordIter((0),G__71711__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71713,other71714){
var self__ = this;
var this71713__$1 = this;
return (((!((other71714 == null)))) && ((this71713__$1.constructor === other71714.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71713__$1.w,other71714.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71713__$1.h,other71714.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71713__$1.__extmap,other71714.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__71711){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__71743 = cljs.core.keyword_identical_QMARK_;
var expr__71744 = k__4388__auto__;
if(cljs.core.truth_((pred__71743.cljs$core$IFn$_invoke$arity$2 ? pred__71743.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__71744) : pred__71743.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__71744)))){
return (new shadow.dom.Size(G__71711,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71743.cljs$core$IFn$_invoke$arity$2 ? pred__71743.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__71744) : pred__71743.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__71744)))){
return (new shadow.dom.Size(self__.w,G__71711,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__71711),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__71711){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__71711,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__71715){
var extmap__4419__auto__ = (function (){var G__71751 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71715,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__71715)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71751);
} else {
return G__71751;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__71715),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__71715),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__72297 = (i + (1));
var G__72298 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__72297;
ret = G__72298;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__71767){
var vec__71768 = p__71767;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71768,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__71773 = arguments.length;
switch (G__71773) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__72303 = ps;
var G__72304 = (i + (1));
el__$1 = G__72303;
i = G__72304;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__71816 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71816,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71816,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71816,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__71819_72307 = cljs.core.seq(props);
var chunk__71820_72308 = null;
var count__71821_72309 = (0);
var i__71822_72310 = (0);
while(true){
if((i__71822_72310 < count__71821_72309)){
var vec__71839_72312 = chunk__71820_72308.cljs$core$IIndexed$_nth$arity$2(null,i__71822_72310);
var k_72313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71839_72312,(0),null);
var v_72314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71839_72312,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_72313);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_72313),v_72314);


var G__72316 = seq__71819_72307;
var G__72317 = chunk__71820_72308;
var G__72318 = count__71821_72309;
var G__72319 = (i__71822_72310 + (1));
seq__71819_72307 = G__72316;
chunk__71820_72308 = G__72317;
count__71821_72309 = G__72318;
i__71822_72310 = G__72319;
continue;
} else {
var temp__5735__auto___72322 = cljs.core.seq(seq__71819_72307);
if(temp__5735__auto___72322){
var seq__71819_72323__$1 = temp__5735__auto___72322;
if(cljs.core.chunked_seq_QMARK_(seq__71819_72323__$1)){
var c__4556__auto___72324 = cljs.core.chunk_first(seq__71819_72323__$1);
var G__72325 = cljs.core.chunk_rest(seq__71819_72323__$1);
var G__72326 = c__4556__auto___72324;
var G__72327 = cljs.core.count(c__4556__auto___72324);
var G__72328 = (0);
seq__71819_72307 = G__72325;
chunk__71820_72308 = G__72326;
count__71821_72309 = G__72327;
i__71822_72310 = G__72328;
continue;
} else {
var vec__71848_72329 = cljs.core.first(seq__71819_72323__$1);
var k_72330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71848_72329,(0),null);
var v_72331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71848_72329,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_72330);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_72330),v_72331);


var G__72333 = cljs.core.next(seq__71819_72323__$1);
var G__72334 = null;
var G__72335 = (0);
var G__72336 = (0);
seq__71819_72307 = G__72333;
chunk__71820_72308 = G__72334;
count__71821_72309 = G__72335;
i__71822_72310 = G__72336;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__71853 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71853,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71853,(1),null);
var seq__71857_72345 = cljs.core.seq(node_children);
var chunk__71859_72346 = null;
var count__71860_72347 = (0);
var i__71861_72348 = (0);
while(true){
if((i__71861_72348 < count__71860_72347)){
var child_struct_72350 = chunk__71859_72346.cljs$core$IIndexed$_nth$arity$2(null,i__71861_72348);
if((!((child_struct_72350 == null)))){
if(typeof child_struct_72350 === 'string'){
var text_72352 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_72352),child_struct_72350].join(''));
} else {
var children_72353 = shadow.dom.svg_node(child_struct_72350);
if(cljs.core.seq_QMARK_(children_72353)){
var seq__71895_72354 = cljs.core.seq(children_72353);
var chunk__71897_72355 = null;
var count__71898_72356 = (0);
var i__71899_72357 = (0);
while(true){
if((i__71899_72357 < count__71898_72356)){
var child_72358 = chunk__71897_72355.cljs$core$IIndexed$_nth$arity$2(null,i__71899_72357);
if(cljs.core.truth_(child_72358)){
node.appendChild(child_72358);


var G__72359 = seq__71895_72354;
var G__72360 = chunk__71897_72355;
var G__72361 = count__71898_72356;
var G__72362 = (i__71899_72357 + (1));
seq__71895_72354 = G__72359;
chunk__71897_72355 = G__72360;
count__71898_72356 = G__72361;
i__71899_72357 = G__72362;
continue;
} else {
var G__72363 = seq__71895_72354;
var G__72364 = chunk__71897_72355;
var G__72365 = count__71898_72356;
var G__72366 = (i__71899_72357 + (1));
seq__71895_72354 = G__72363;
chunk__71897_72355 = G__72364;
count__71898_72356 = G__72365;
i__71899_72357 = G__72366;
continue;
}
} else {
var temp__5735__auto___72367 = cljs.core.seq(seq__71895_72354);
if(temp__5735__auto___72367){
var seq__71895_72368__$1 = temp__5735__auto___72367;
if(cljs.core.chunked_seq_QMARK_(seq__71895_72368__$1)){
var c__4556__auto___72370 = cljs.core.chunk_first(seq__71895_72368__$1);
var G__72371 = cljs.core.chunk_rest(seq__71895_72368__$1);
var G__72372 = c__4556__auto___72370;
var G__72373 = cljs.core.count(c__4556__auto___72370);
var G__72374 = (0);
seq__71895_72354 = G__72371;
chunk__71897_72355 = G__72372;
count__71898_72356 = G__72373;
i__71899_72357 = G__72374;
continue;
} else {
var child_72376 = cljs.core.first(seq__71895_72368__$1);
if(cljs.core.truth_(child_72376)){
node.appendChild(child_72376);


var G__72377 = cljs.core.next(seq__71895_72368__$1);
var G__72378 = null;
var G__72379 = (0);
var G__72380 = (0);
seq__71895_72354 = G__72377;
chunk__71897_72355 = G__72378;
count__71898_72356 = G__72379;
i__71899_72357 = G__72380;
continue;
} else {
var G__72381 = cljs.core.next(seq__71895_72368__$1);
var G__72382 = null;
var G__72383 = (0);
var G__72384 = (0);
seq__71895_72354 = G__72381;
chunk__71897_72355 = G__72382;
count__71898_72356 = G__72383;
i__71899_72357 = G__72384;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_72353);
}
}


var G__72385 = seq__71857_72345;
var G__72386 = chunk__71859_72346;
var G__72387 = count__71860_72347;
var G__72388 = (i__71861_72348 + (1));
seq__71857_72345 = G__72385;
chunk__71859_72346 = G__72386;
count__71860_72347 = G__72387;
i__71861_72348 = G__72388;
continue;
} else {
var G__72391 = seq__71857_72345;
var G__72392 = chunk__71859_72346;
var G__72393 = count__71860_72347;
var G__72394 = (i__71861_72348 + (1));
seq__71857_72345 = G__72391;
chunk__71859_72346 = G__72392;
count__71860_72347 = G__72393;
i__71861_72348 = G__72394;
continue;
}
} else {
var temp__5735__auto___72396 = cljs.core.seq(seq__71857_72345);
if(temp__5735__auto___72396){
var seq__71857_72401__$1 = temp__5735__auto___72396;
if(cljs.core.chunked_seq_QMARK_(seq__71857_72401__$1)){
var c__4556__auto___72403 = cljs.core.chunk_first(seq__71857_72401__$1);
var G__72404 = cljs.core.chunk_rest(seq__71857_72401__$1);
var G__72405 = c__4556__auto___72403;
var G__72406 = cljs.core.count(c__4556__auto___72403);
var G__72407 = (0);
seq__71857_72345 = G__72404;
chunk__71859_72346 = G__72405;
count__71860_72347 = G__72406;
i__71861_72348 = G__72407;
continue;
} else {
var child_struct_72408 = cljs.core.first(seq__71857_72401__$1);
if((!((child_struct_72408 == null)))){
if(typeof child_struct_72408 === 'string'){
var text_72409 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_72409),child_struct_72408].join(''));
} else {
var children_72410 = shadow.dom.svg_node(child_struct_72408);
if(cljs.core.seq_QMARK_(children_72410)){
var seq__71916_72412 = cljs.core.seq(children_72410);
var chunk__71918_72413 = null;
var count__71919_72414 = (0);
var i__71920_72415 = (0);
while(true){
if((i__71920_72415 < count__71919_72414)){
var child_72417 = chunk__71918_72413.cljs$core$IIndexed$_nth$arity$2(null,i__71920_72415);
if(cljs.core.truth_(child_72417)){
node.appendChild(child_72417);


var G__72418 = seq__71916_72412;
var G__72419 = chunk__71918_72413;
var G__72420 = count__71919_72414;
var G__72421 = (i__71920_72415 + (1));
seq__71916_72412 = G__72418;
chunk__71918_72413 = G__72419;
count__71919_72414 = G__72420;
i__71920_72415 = G__72421;
continue;
} else {
var G__72422 = seq__71916_72412;
var G__72423 = chunk__71918_72413;
var G__72424 = count__71919_72414;
var G__72425 = (i__71920_72415 + (1));
seq__71916_72412 = G__72422;
chunk__71918_72413 = G__72423;
count__71919_72414 = G__72424;
i__71920_72415 = G__72425;
continue;
}
} else {
var temp__5735__auto___72426__$1 = cljs.core.seq(seq__71916_72412);
if(temp__5735__auto___72426__$1){
var seq__71916_72427__$1 = temp__5735__auto___72426__$1;
if(cljs.core.chunked_seq_QMARK_(seq__71916_72427__$1)){
var c__4556__auto___72428 = cljs.core.chunk_first(seq__71916_72427__$1);
var G__72429 = cljs.core.chunk_rest(seq__71916_72427__$1);
var G__72430 = c__4556__auto___72428;
var G__72431 = cljs.core.count(c__4556__auto___72428);
var G__72432 = (0);
seq__71916_72412 = G__72429;
chunk__71918_72413 = G__72430;
count__71919_72414 = G__72431;
i__71920_72415 = G__72432;
continue;
} else {
var child_72433 = cljs.core.first(seq__71916_72427__$1);
if(cljs.core.truth_(child_72433)){
node.appendChild(child_72433);


var G__72434 = cljs.core.next(seq__71916_72427__$1);
var G__72435 = null;
var G__72436 = (0);
var G__72437 = (0);
seq__71916_72412 = G__72434;
chunk__71918_72413 = G__72435;
count__71919_72414 = G__72436;
i__71920_72415 = G__72437;
continue;
} else {
var G__72438 = cljs.core.next(seq__71916_72427__$1);
var G__72439 = null;
var G__72440 = (0);
var G__72441 = (0);
seq__71916_72412 = G__72438;
chunk__71918_72413 = G__72439;
count__71919_72414 = G__72440;
i__71920_72415 = G__72441;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_72410);
}
}


var G__72442 = cljs.core.next(seq__71857_72401__$1);
var G__72443 = null;
var G__72444 = (0);
var G__72445 = (0);
seq__71857_72345 = G__72442;
chunk__71859_72346 = G__72443;
count__71860_72347 = G__72444;
i__71861_72348 = G__72445;
continue;
} else {
var G__72446 = cljs.core.next(seq__71857_72401__$1);
var G__72447 = null;
var G__72448 = (0);
var G__72449 = (0);
seq__71857_72345 = G__72446;
chunk__71859_72346 = G__72447;
count__71860_72347 = G__72448;
i__71861_72348 = G__72449;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72450 = arguments.length;
var i__4737__auto___72451 = (0);
while(true){
if((i__4737__auto___72451 < len__4736__auto___72450)){
args__4742__auto__.push((arguments[i__4737__auto___72451]));

var G__72452 = (i__4737__auto___72451 + (1));
i__4737__auto___72451 = G__72452;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq71925){
var G__71926 = cljs.core.first(seq71925);
var seq71925__$1 = cljs.core.next(seq71925);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71926,seq71925__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__71935 = arguments.length;
switch (G__71935) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__69318__auto___72457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69319__auto__ = (function (){var switch__69183__auto__ = (function (state_71944){
var state_val_71945 = (state_71944[(1)]);
if((state_val_71945 === (1))){
var state_71944__$1 = state_71944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71944__$1,(2),once_or_cleanup);
} else {
if((state_val_71945 === (2))){
var inst_71941 = (state_71944[(2)]);
var inst_71942 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_71944__$1 = (function (){var statearr_71949 = state_71944;
(statearr_71949[(7)] = inst_71941);

return statearr_71949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71944__$1,inst_71942);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__69184__auto__ = null;
var shadow$dom$state_machine__69184__auto____0 = (function (){
var statearr_71950 = [null,null,null,null,null,null,null,null];
(statearr_71950[(0)] = shadow$dom$state_machine__69184__auto__);

(statearr_71950[(1)] = (1));

return statearr_71950;
});
var shadow$dom$state_machine__69184__auto____1 = (function (state_71944){
while(true){
var ret_value__69185__auto__ = (function (){try{while(true){
var result__69186__auto__ = switch__69183__auto__(state_71944);
if(cljs.core.keyword_identical_QMARK_(result__69186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69186__auto__;
}
break;
}
}catch (e71951){var ex__69187__auto__ = e71951;
var statearr_71953_72459 = state_71944;
(statearr_71953_72459[(2)] = ex__69187__auto__);


if(cljs.core.seq((state_71944[(4)]))){
var statearr_71954_72460 = state_71944;
(statearr_71954_72460[(1)] = cljs.core.first((state_71944[(4)])));

} else {
throw ex__69187__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72462 = state_71944;
state_71944 = G__72462;
continue;
} else {
return ret_value__69185__auto__;
}
break;
}
});
shadow$dom$state_machine__69184__auto__ = function(state_71944){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__69184__auto____0.call(this);
case 1:
return shadow$dom$state_machine__69184__auto____1.call(this,state_71944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__69184__auto____0;
shadow$dom$state_machine__69184__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__69184__auto____1;
return shadow$dom$state_machine__69184__auto__;
})()
})();
var state__69320__auto__ = (function (){var statearr_71955 = f__69319__auto__();
(statearr_71955[(6)] = c__69318__auto___72457);

return statearr_71955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69320__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
