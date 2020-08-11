goog.provide('markdown.common');
markdown.common._STAR_inhibit_separator_STAR_ = null;
markdown.common.escape_delimiter = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((254))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((491)))].join('');
markdown.common.gen_token = (function markdown$common$gen_token(n){
return [markdown.common.escape_delimiter,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),markdown.common.escape_delimiter].join('');
});
/**
 * Freezes an output string.  Converts to a placeholder token and puts that into the output.
 *   Returns the [text, state] pair.  Adds it into the state, the 'frozen-strings' hashmap
 *   So that it can be unfrozen later.
 */
markdown.common.freeze_string = (function markdown$common$freeze_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74136 = arguments.length;
var i__4737__auto___74137 = (0);
while(true){
if((i__4737__auto___74137 < len__4736__auto___74136)){
args__4742__auto__.push((arguments[i__4737__auto___74137]));

var G__74142 = (i__4737__auto___74137 + (1));
i__4737__auto___74137 = G__74142;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var state = cljs.core.last(args);
var token = markdown.common.gen_token(cljs.core.count(new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token,cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),token], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.flatten(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(args))))], null);
}));

(markdown.common.freeze_string.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.common.freeze_string.cljs$lang$applyTo = (function (seq74090){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74090));
}));

/**
 * Recursively replaces the frozen strings in the output with the original text.
 */
markdown.common.thaw_string = (function markdown$common$thaw_string(text,state){
while(true){
var temp__5733__auto__ = cljs.core.re_seq(cljs.core.re_pattern([markdown.common.escape_delimiter,"\\d+",markdown.common.escape_delimiter].join('')),text);
if(cljs.core.truth_(temp__5733__auto__)){
var matches = temp__5733__auto__;
var G__74153 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (text,state,matches,temp__5733__auto__){
return (function (s,r){
return clojure.string.replace(s,cljs.core.re_pattern(r),((function (text,state,matches,temp__5733__auto__){
return (function (p1__74091_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state),p1__74091_SHARP_,p1__74091_SHARP_);
});})(text,state,matches,temp__5733__auto__))
);
});})(text,state,matches,temp__5733__auto__))
,text,matches);
var G__74154 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),((function (text,state,matches,temp__5733__auto__){
return (function (p1__74092_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__74092_SHARP_,matches);
});})(text,state,matches,temp__5733__auto__))
);
text = G__74153;
state = G__74154;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
break;
}
});
/**
 * Terminally encoded strings are ones that we've determined should no longer be processed or evaluated
 */
markdown.common.thaw_strings = (function markdown$common$thaw_strings(text,state){
if((!(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state))))){
return markdown.common.thaw_string(text,state);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.common.escape_code = (function markdown$common$escape_code(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(s,/&/,"&amp;"),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"),/\</,"&lt;"),/\>/,"&gt;"),/\[/,"&#91;"),/\]/,"&#93;"),/\(/,"&#40;"),/\)/,"&#41;"),/\"/,"&quot;");
});
markdown.common.escaped_chars = (function markdown$common$escaped_chars(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(text,/\\\\/,"&#92;"),/\\`/,"&#8216;"),/\\\*/,"&#42;"),/\\_/,"&#95;"),/\\\{/,"&#123;"),/\\\}/,"&#125;"),/\\\[/,"&#91;"),/\\\]/,"&#93;"),/\\\(/,"&#40;"),/\\\)/,"&#41;"),/\\#/,"&#35;"),/\\\+/,"&#43;"),/\\-/,"&#45;"),/\\\./,"&#46;"),/\\!/,"&#33;"),/\\\^/,"&#94;")),state], null);
});
markdown.common.open_html_tags = (function markdown$common$open_html_tags(open_QMARK_,token_seq){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,token){
var G__74095 = token;
switch (G__74095) {
case "<":
return new cljs.core.Keyword(null,"open","open",-1763596448);

break;
case ">":
return new cljs.core.Keyword(null,"closed","closed",-919675359);

break;
default:
return state;

}
}),(cljs.core.truth_(open_QMARK_)?new cljs.core.Keyword(null,"open","open",-1763596448):new cljs.core.Keyword(null,"closed","closed",-919675359)),token_seq));
});
/**
 * Return a transformer to
 * - find all the chunks of the string delimited by the `separator',
 * - wrap the output with the `open' and `close' markers, and
 * - apply the `transformer' to the text inside the chunk.
 */
markdown.common.make_separator = (function markdown$common$make_separator(var_args){
var G__74099 = arguments.length;
switch (G__74099) {
case 3:
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3 = (function (separator,open,close){
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4(separator,open,close,cljs.core.identity);
}));

(markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4 = (function (separator,open,close,transformer){
var separator__$1 = cljs.core.seq(separator);
return (function (text,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var buf = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.first(separator__$1)),cljs.core.seq(text));
var cur_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"in-tag?","in-tag?",1693672911),false], 0));
while(true){
if(cljs.core.empty_QMARK_(tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,separator__$1):out),buf)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576))], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(tokens),separator__$1)){
var vec__74110 = (((transformer === cljs.core.identity))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [buf,cur_state], null):(function (){var vec__74113 = (function (){var G__74116 = clojure.string.join.cljs$core$IFn$_invoke$arity$1(buf);
var G__74117 = cur_state;
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__74116,G__74117) : transformer.call(null,G__74116,G__74117));
})();
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74113,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74113,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(s),new_state], null);
})());
var new_buf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74110,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74110,(1),null);
var G__74242 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.seq(open),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_buf,cljs.core.seq(close)], 0)));
var G__74243 = cljs.core.PersistentVector.EMPTY;
var G__74244 = cljs.core.rest(tokens);
var G__74245 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false);
out = G__74242;
buf = G__74243;
tokens = G__74244;
cur_state = G__74245;
continue;
} else {
var G__74246 = out;
var G__74247 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.first(tokens));
var G__74248 = cljs.core.rest(tokens);
var G__74249 = cur_state;
out = G__74246;
buf = G__74247;
tokens = G__74248;
cur_state = G__74249;
continue;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(tokens),separator__$1)) && (cljs.core.not(new cljs.core.Keyword(null,"in-tag?","in-tag?",1693672911).cljs$core$IFn$_invoke$arity$1(cur_state))))){
var G__74256 = out;
var G__74257 = buf;
var G__74258 = cljs.core.rest(tokens);
var G__74259 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),true);
out = G__74256;
buf = G__74257;
tokens = G__74258;
cur_state = G__74259;
continue;
} else {
var G__74260 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(tokens));
var G__74261 = buf;
var G__74262 = cljs.core.rest(tokens);
var G__74263 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur_state,new cljs.core.Keyword(null,"in-tag?","in-tag?",1693672911),markdown.common.open_html_tags(new cljs.core.Keyword(null,"in-tag?","in-tag?",1693672911).cljs$core$IFn$_invoke$arity$1(cur_state),cljs.core.first(tokens)));
out = G__74260;
buf = G__74261;
tokens = G__74262;
cur_state = G__74263;
continue;

}
}
}
break;
}
}
});
}));

(markdown.common.make_separator.cljs$lang$maxFixedArity = 4);

markdown.common.escape_code_transformer = (function markdown$common$escape_code_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.common.escape_code(text),state], null);
});
markdown.common.separator = (function markdown$common$separator(escape_QMARK_,text,open,close,separator,state){
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4(separator,open,close,(cljs.core.truth_(escape_QMARK_)?markdown.common.escape_code_transformer:cljs.core.identity))(text,state);
});
markdown.common.strong = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("**","<strong>","</strong>");
markdown.common.bold_italic = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("***","<b><i>","</i></b>");
markdown.common.bold = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("__","<b>","</b>");
markdown.common.em = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("*","<em>","</em>");
markdown.common.italics = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("_","<i>","</i>");
markdown.common.strikethrough = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3("~~","<del>","</del>");
markdown.common.inline_code = markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4("`","<code>","</code>",markdown.common.escape_code_transformer);
markdown.common.inhibit = (function markdown$common$inhibit(text,state){
if(cljs.core.truth_(markdown.common._STAR_inhibit_separator_STAR_)){
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4(markdown.common._STAR_inhibit_separator_STAR_,"","",markdown.common.freeze_string)(text,state);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.common.escape_inhibit_separator = (function markdown$common$escape_inhibit_separator(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(markdown.common._STAR_inhibit_separator_STAR_)?clojure.string.replace(text,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(markdown.common._STAR_inhibit_separator_STAR_,markdown.common._STAR_inhibit_separator_STAR_)),clojure.string.join.cljs$core$IFn$_invoke$arity$1(markdown.common._STAR_inhibit_separator_STAR_)):text),state], null);
});
markdown.common.heading_text = (function markdown$common$heading_text(text){
return clojure.string.trim(clojure.string.replace(clojure.string.replace(text,/^([ ]+)?[#]+/,""),/[#]+$/,""));
});
markdown.common.heading_level = (function markdown$common$heading_level(text){
var num_hashes = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74124_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__74124_SHARP_);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__74125_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",p1__74125_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__74125_SHARP_)));
}),cljs.core.seq(text))));
if((num_hashes > (0))){
return num_hashes;
} else {
return null;
}
});
markdown.common.make_heading = (function markdown$common$make_heading(text,heading_anchors){
var temp__5735__auto__ = markdown.common.heading_level(text);
if(cljs.core.truth_(temp__5735__auto__)){
var heading = temp__5735__auto__;
var text__$1 = markdown.common.heading_text(text);
return ["<h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),(cljs.core.truth_(heading_anchors)?[" id=\"",clojure.string.replace(clojure.string.lower_case(text__$1)," ","&#95;"),"\""].join(''):null),">",text__$1,"</h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),">"].join('');
} else {
return null;
}
});
markdown.common.dashes = (function markdown$common$dashes(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(clojure.string.replace(clojure.string.replace(text,/\-\-\-/,"&mdash;"),/\-\-/,"&ndash;"),/<code>.*<\/code>/,(function (s){
return clojure.string.replace(clojure.string.replace(s,/&mdash;/,"---"),/&ndash;/,"--");
}))),state], null);
});

//# sourceMappingURL=markdown.common.js.map
