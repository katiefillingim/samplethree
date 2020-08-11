goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__74478){
var map__74482 = p__74478;
var map__74482__$1 = (((((!((map__74482 == null))))?(((((map__74482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74482):map__74482);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74482__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74482__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74482__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__74491 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__74492 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__74492);

try{var vec__74496 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__74499,transformer){
var vec__74501 = p__74499;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74501,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74501,(1),null);
var G__74506 = text;
var G__74507 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__74506,G__74507) : transformer.call(null,G__74506,G__74507));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4126__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74496,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74496,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__74491);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74667 = arguments.length;
var i__4737__auto___74669 = (0);
while(true){
if((i__4737__auto___74669 < len__4736__auto___74667)){
args__4742__auto__.push((arguments[i__4737__auto___74669]));

var G__74670 = (i__4737__auto___74669 + (1));
i__4737__auto___74669 = G__74670;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq74508){
var G__74509 = cljs.core.first(seq74508);
var seq74508__$1 = cljs.core.next(seq74508);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74509,seq74508__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__74515_74675 = cljs.core.seq(lines);
var chunk__74516_74676 = null;
var count__74517_74677 = (0);
var i__74518_74678 = (0);
while(true){
if((i__74518_74678 < count__74517_74677)){
var line_74682 = chunk__74516_74676.cljs$core$IIndexed$_nth$arity$2(null,i__74518_74678);
markdown.links.parse_reference_link(line_74682,references);


var G__74683 = seq__74515_74675;
var G__74684 = chunk__74516_74676;
var G__74685 = count__74517_74677;
var G__74686 = (i__74518_74678 + (1));
seq__74515_74675 = G__74683;
chunk__74516_74676 = G__74684;
count__74517_74677 = G__74685;
i__74518_74678 = G__74686;
continue;
} else {
var temp__5735__auto___74687 = cljs.core.seq(seq__74515_74675);
if(temp__5735__auto___74687){
var seq__74515_74697__$1 = temp__5735__auto___74687;
if(cljs.core.chunked_seq_QMARK_(seq__74515_74697__$1)){
var c__4556__auto___74698 = cljs.core.chunk_first(seq__74515_74697__$1);
var G__74699 = cljs.core.chunk_rest(seq__74515_74697__$1);
var G__74700 = c__4556__auto___74698;
var G__74701 = cljs.core.count(c__4556__auto___74698);
var G__74702 = (0);
seq__74515_74675 = G__74699;
chunk__74516_74676 = G__74700;
count__74517_74677 = G__74701;
i__74518_74678 = G__74702;
continue;
} else {
var line_74703 = cljs.core.first(seq__74515_74697__$1);
markdown.links.parse_reference_link(line_74703,references);


var G__74704 = cljs.core.next(seq__74515_74697__$1);
var G__74705 = null;
var G__74706 = (0);
var G__74707 = (0);
seq__74515_74675 = G__74704;
chunk__74516_74676 = G__74705;
count__74517_74677 = G__74706;
i__74518_74678 = G__74707;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__74525_74711 = cljs.core.seq(lines);
var chunk__74526_74712 = null;
var count__74527_74713 = (0);
var i__74528_74714 = (0);
while(true){
if((i__74528_74714 < count__74527_74713)){
var line_74715 = chunk__74526_74712.cljs$core$IIndexed$_nth$arity$2(null,i__74528_74714);
markdown.links.parse_footnote_link(line_74715,footnotes);


var G__74716 = seq__74525_74711;
var G__74717 = chunk__74526_74712;
var G__74718 = count__74527_74713;
var G__74719 = (i__74528_74714 + (1));
seq__74525_74711 = G__74716;
chunk__74526_74712 = G__74717;
count__74527_74713 = G__74718;
i__74528_74714 = G__74719;
continue;
} else {
var temp__5735__auto___74721 = cljs.core.seq(seq__74525_74711);
if(temp__5735__auto___74721){
var seq__74525_74722__$1 = temp__5735__auto___74721;
if(cljs.core.chunked_seq_QMARK_(seq__74525_74722__$1)){
var c__4556__auto___74723 = cljs.core.chunk_first(seq__74525_74722__$1);
var G__74724 = cljs.core.chunk_rest(seq__74525_74722__$1);
var G__74725 = c__4556__auto___74723;
var G__74726 = cljs.core.count(c__4556__auto___74723);
var G__74727 = (0);
seq__74525_74711 = G__74724;
chunk__74526_74712 = G__74725;
count__74527_74713 = G__74726;
i__74528_74714 = G__74727;
continue;
} else {
var line_74728 = cljs.core.first(seq__74525_74722__$1);
markdown.links.parse_footnote_link(line_74728,footnotes);


var G__74729 = cljs.core.next(seq__74525_74722__$1);
var G__74730 = null;
var G__74731 = (0);
var G__74732 = (0);
seq__74525_74711 = G__74729;
chunk__74526_74712 = G__74730;
count__74527_74713 = G__74731;
i__74528_74714 = G__74732;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__74538 = cljs.core.split_with((function (p1__74536_SHARP_){
return cljs.core.not_empty(p1__74536_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74538,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74538,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__74542 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__74543 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__74544 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__74545 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__74544);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__74545);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__74548 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74548,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74548,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__74554_74740 = lines__$1;
var vec__74555_74741 = G__74554_74740;
var seq__74556_74742 = cljs.core.seq(vec__74555_74741);
var first__74557_74743 = cljs.core.first(seq__74556_74742);
var seq__74556_74744__$1 = cljs.core.next(seq__74556_74742);
var line_74745 = first__74557_74743;
var more_74746 = seq__74556_74744__$1;
var state_74747 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__74554_74756__$1 = G__74554_74740;
var state_74757__$1 = state_74747;
while(true){
var vec__74563_74758 = G__74554_74756__$1;
var seq__74564_74759 = cljs.core.seq(vec__74563_74758);
var first__74565_74760 = cljs.core.first(seq__74564_74759);
var seq__74564_74761__$1 = cljs.core.next(seq__74564_74759);
var line_74762__$1 = first__74565_74760;
var more_74763__$1 = seq__74564_74761__$1;
var state_74764__$2 = state_74757__$1;
var line_74765__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_74764__$2))?"":line_74762__$1);
var state_74766__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_74764__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_74764__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_74764__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_74764__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_74764__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_74763__$1))){
var G__74770 = more_74763__$1;
var G__74771 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_74765__$2,cljs.core.first(more_74763__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_74766__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_74765__$2.trim()));
G__74554_74756__$1 = G__74770;
state_74757__$1 = G__74771;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_74766__$3))),line_74765__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_74766__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__74543);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__74542);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74779 = arguments.length;
var i__4737__auto___74780 = (0);
while(true){
if((i__4737__auto___74780 < len__4736__auto___74779)){
args__4742__auto__.push((arguments[i__4737__auto___74780]));

var G__74784 = (i__4737__auto___74780 + (1));
i__4737__auto___74780 = G__74784;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq74568){
var G__74569 = cljs.core.first(seq74568);
var seq74568__$1 = cljs.core.next(seq74568);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74569,seq74568__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74786 = arguments.length;
var i__4737__auto___74787 = (0);
while(true){
if((i__4737__auto___74787 < len__4736__auto___74786)){
args__4742__auto__.push((arguments[i__4737__auto___74787]));

var G__74788 = (i__4737__auto___74787 + (1));
i__4737__auto___74787 = G__74788;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq74574){
var G__74575 = cljs.core.first(seq74574);
var seq74574__$1 = cljs.core.next(seq74574);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74575,seq74574__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74790 = arguments.length;
var i__4737__auto___74791 = (0);
while(true){
if((i__4737__auto___74791 < len__4736__auto___74790)){
args__4742__auto__.push((arguments[i__4737__auto___74791]));

var G__74793 = (i__4737__auto___74791 + (1));
i__4737__auto___74791 = G__74793;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq74579){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74579));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74798 = arguments.length;
var i__4737__auto___74799 = (0);
while(true){
if((i__4737__auto___74799 < len__4736__auto___74798)){
args__4742__auto__.push((arguments[i__4737__auto___74799]));

var G__74803 = (i__4737__auto___74799 + (1));
i__4737__auto___74799 = G__74803;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq74655){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74655));
}));


//# sourceMappingURL=markdown.core.js.map
