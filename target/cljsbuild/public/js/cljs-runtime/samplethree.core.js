goog.provide('samplethree.core');
samplethree.core.nav_link = (function samplethree$core$nav_link(uri,title,page){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),uri,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","page","common/page",-2099452134)], null)))))?new cljs.core.Keyword(null,"is-active","is-active",-1424968720):null)], null),title], null);
});
samplethree.core.navbar = (function samplethree$core$navbar(){
var with_let56925 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let56925","with-let56925",377802810));
var temp__5739__auto___56929 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___56929 == null)){
} else {
var c__54083__auto___56930 = temp__5739__auto___56929;
if((with_let56925.generation === c__54083__auto___56930.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let56925.generation = c__54083__auto___56930.ratomGeneration);
}


var init56926 = (with_let56925.length === (0));
var expanded_QMARK_ = ((init56926)?(with_let56925[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let56925[(0)]));
var res__54084__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.is-info>div.container","nav.navbar.is-info>div.container",1621679245),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-brand","div.navbar-brand",1304438848),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535)], null)], null),"samplethree"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.navbar-burger.burger","span.navbar-burger.burger",1784367377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-target","data-target",-113904678),new cljs.core.Keyword(null,"nav-menu","nav-menu",-1710804493),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
}),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?new cljs.core.Keyword(null,"is-active","is-active",-1424968720):null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#nav-menu.navbar-menu","div#nav-menu.navbar-menu",1772317719),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?new cljs.core.Keyword(null,"is-active","is-active",-1424968720):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-start","div.navbar-start",1801160723),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [samplethree.core.nav_link,"#/","Home",new cljs.core.Keyword(null,"home","home",-74557309)], null)], null)], null)], null);

return res__54084__auto__;
});
samplethree.core.ops = new cljs.core.PersistentArrayMap(null, 4, ["+","plus","-","minus","*","multiply","/","divide"], null);
samplethree.core.equals = "";
samplethree.core.handler = (function samplethree$core$handler(x){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in handler",x], 0));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-key","set-key",-48186176),new cljs.core.Keyword(null,"result","result",1415092211),x], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),x], null));
});
samplethree.core.math = (function samplethree$core$math(x,y){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in math :x",x," :y ",y], 0));

return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(["/api/math/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(samplethree.core.ops,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-value","get-value",2108514284),new cljs.core.Keyword(null,"op","op",-1882987955)], null)))))].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Accept","application/transit+json"], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__56927_SHARP_){
return samplethree.core.handler(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(p1__56927_SHARP_));
})], null)], 0));
});
samplethree.core.do_math = (function samplethree$core$do_math(num){
var fexpr__56928 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-value","get-value",2108514284),new cljs.core.Keyword(null,"x","x",2099068185)], null))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-value","get-value",2108514284),new cljs.core.Keyword(null,"result","result",1415092211)], null)))))))?(function (){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-key","set-key",-48186176),new cljs.core.Keyword(null,"x","x",2099068185),num], null));

samplethree.core.math(num,(0));

return (samplethree.core.equals = " = ");
})()
:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-value","get-value",2108514284),new cljs.core.Keyword(null,"y","y",-1757859776)], null))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-value","get-value",2108514284),new cljs.core.Keyword(null,"result","result",1415092211)], null)))))))?(function (){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-key","set-key",-48186176),new cljs.core.Keyword(null,"y","y",-1757859776),num], null));

return samplethree.core.math(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-value","get-value",2108514284),new cljs.core.Keyword(null,"x","x",2099068185)], null))),num);
})()
:(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-key","set-key",-48186176),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-value","get-value",2108514284),new cljs.core.Keyword(null,"result","result",1415092211)], null)))], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-key","set-key",-48186176),new cljs.core.Keyword(null,"y","y",-1757859776),num], null));

return samplethree.core.math(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-value","get-value",2108514284),new cljs.core.Keyword(null,"result","result",1415092211)], null))),num);
})()

));
return (fexpr__56928.cljs$core$IFn$_invoke$arity$0 ? fexpr__56928.cljs$core$IFn$_invoke$arity$0() : fexpr__56928.call(null));
});
samplethree.core.make_calc_btns = (function samplethree$core$make_calc_btns(num){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"button is-info",new cljs.core.Keyword(null,"key","key",-1516042587),num,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return samplethree.core.do_math(num);
})], null),num], null);
});
samplethree.core.make_calc = (function samplethree$core$make_calc(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#calc-btns","div#calc-btns",1223349323),cljs.core.map.cljs$core$IFn$_invoke$arity$2(samplethree.core.make_calc_btns,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)))], null);
});
samplethree.core.home_page = (function samplethree$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.section>div.container>div.content","section.section>div.container>div.content",-1570006034),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.calc-size","div.calc-size",-1326437549),samplethree.core.make_calc(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"button is-info",new cljs.core.Keyword(null,"name","name",1843675177),"RESET",new cljs.core.Keyword(null,"key","key",-1516042587),"RESET",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset","reset",-800929946)], null));
})], null),"RESET!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"button is-primary",new cljs.core.Keyword(null,"key","key",-1516042587),"plus",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-key","set-key",-48186176),new cljs.core.Keyword(null,"op","op",-1882987955),"+"], null));
})], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"button is-primary",new cljs.core.Keyword(null,"key","key",-1516042587),"minus",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-key","set-key",-48186176),new cljs.core.Keyword(null,"op","op",-1882987955),"-"], null));
})], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"button is-primary",new cljs.core.Keyword(null,"key","key",-1516042587),"multiply",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-key","set-key",-48186176),new cljs.core.Keyword(null,"op","op",-1882987955),"*"], null));
})], null),"*"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"button is-primary",new cljs.core.Keyword(null,"key","key",-1516042587),"divide",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-key","set-key",-48186176),new cljs.core.Keyword(null,"op","op",-1882987955),"/"], null));
})], null),"/"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.calc-size.numbers","span.calc-size.numbers",629724788),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-color","get-color",-2122105193)], null)))], null)], null),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"equation","equation",-499527745)], null)))], null)], null)], null);
});
samplethree.core.page = (function samplethree$core$page(){
var temp__5733__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","page","common/page",-2099452134)], null)));
if(cljs.core.truth_(temp__5733__auto__)){
var page = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [samplethree.core.navbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null)], null);
} else {
return null;
}
});
samplethree.core.navigate_BANG_ = (function samplethree$core$navigate_BANG_(match,_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","navigate","common/navigate",-1770818836),match], null));
});
samplethree.core.router = reitit.core.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Var(function(){return samplethree.core.home_page;},new cljs.core.Symbol("samplethree.core","home-page","samplethree.core/home-page",-1431712766,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"samplethree.core","samplethree.core",-1827114630,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"samplethree/core.cljs",16,1,100,100,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(samplethree.core.home_page)?samplethree.core.home_page.cljs$lang$test:null)]))], null)], null)], null));
samplethree.core.start_router_BANG_ = (function samplethree$core$start_router_BANG_(){
return reitit.frontend.easy.start_BANG_(samplethree.core.router,samplethree.core.navigate_BANG_,cljs.core.PersistentArrayMap.EMPTY);
});
samplethree.core.mount_components = (function samplethree$core$mount_components(){
re_frame.core.clear_subscription_cache_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return samplethree.core.page;},new cljs.core.Symbol("samplethree.core","page","samplethree.core/page",-200519601,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"samplethree.core","samplethree.core",-1827114630,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"samplethree/core.cljs",11,1,135,135,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(samplethree.core.page)?samplethree.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
samplethree.core.init_BANG_ = (function samplethree$core$init_BANG_(){
samplethree.core.start_router_BANG_();

samplethree.ajax.load_interceptors_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return samplethree.core.mount_components();
});

//# sourceMappingURL=samplethree.core.js.map
