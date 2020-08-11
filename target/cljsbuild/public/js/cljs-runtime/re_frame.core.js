goog.provide('re_frame.core');
/**
 * Enqueue `event` for processing by event handling machinery.
 * 
 *   `event` is a vector of length >= 1. The 1st element identifies the kind of event.
 * 
 *   Note: the event handler is not run immediately - it is not run
 *   synchronously. It will likely be run 'very soon', although it may be
 *   added to the end of a FIFO queue which already contain events.
 * 
 *   Usage:
 *   (dispatch [:order-pizza {:supreme 2 :meatlovers 1 :veg 1}])
 */
re_frame.core.dispatch = (function re_frame$core$dispatch(event){
return re_frame.router.dispatch(event);
});
/**
 * Synchronously (immediately) process `event`. Do not queue.
 * 
 *   Generally, don't use this. Instead use `dispatch`. It is an error
 *   to use `dispatch-sync` within an event handler.
 * 
 *   Useful when any delay in processing is a problem:
 *   1. the `:on-change` handler of a text field where we are expecting fast typing.
 *   2  when initialising your app - see 'main' in todomvc examples
 *   3. in a unit test where we don't want the action 'later'
 * 
 *   Usage:
 *   (dispatch-sync [:sing :falsetto 634])
 */
re_frame.core.dispatch_sync = (function re_frame$core$dispatch_sync(event_v){
return re_frame.router.dispatch_sync(event_v);
});
/**
 * For a given `query-id`, register two functions: a `computation` function and an `input signals` function.
 * 
 *   During program execution, a call to `subscribe`, such as `(subscribe [:sub-id 3 "blue"])`,
 *   will create a new `:sub-id` node in the Signal Graph. And, at that time, re-frame
 *   needs to know how to create the node.   By calling `reg-sub`, you are registering
 *   'the template' or 'the mechanism' by which nodes in the Signal Graph can be created.
 * 
 *   Repeating: calling `reg-sub` does not create a node. It only creates the template
 *   from which nodes can be created later.
 * 
 *   `reg-sub` arguments are:
 *  - a `query-id` (typically a namespaced keyword)
 *  - a function which returns the inputs required by this kind of node (can be supplied  in one of three ways)
 *  - a function which computes the value of this kind of node
 * 
 *   The `computation function` is always the last argument supplied and it is expected to have the signature:
 *  `(input-values, query-vector) -> a-value`
 * 
 *   When `computation function` is called, the `query-vector` argument will be the vector supplied to the
 *   the `subscribe` which caused the node to be created. So, if the call was `(subscribe [:sub-id 3 "blue"])`,
 *   then the `query-vector` supplied to the computaton function will be `[:sub-id 3 "blue"]`.
 * 
 *   The arguments supplied between the `query-id` and the `computation-function` can vary in 3 ways,
 *   but whatever is there defines the `input signals` part of the template, controlling what input
 *  values "flow into" the `computation function` gets when it is called.
 * 
 *   `reg-sub` can be called in one of three ways, because there are three ways to define the input signals part.
 *   But note, the 2nd method, in which a `signal-fn` is explicitly supplied, is the most canonical and instructive. The other
 *   two are really just sugary variations.
 * 
 *   1. No input signals given:
 *    ```clj
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; has signature:  (fn [db query-vec]  ... ret-value)
 *   ```
 * 
 *   In the absence of an explicit `input-fn`, the node's input signal defaults to `app-db`
 *   and, as a result, the value within `app-db` (a map) is
 *   is given as the 1st argument when `a-computation-fn` is called.
 * 
 * 
 *   2. A signal function is explicitly supplied:
 *   ```clj
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 *   ```
 * 
 *   This is the most canonical and instructive of the three variations.
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from returned nominated signals will be supplied as the 1st argument to
 *   the `a-computation-fn` when it is called - and subject to what this `signal-fn` returns,
 *   this value will be either a singleton, sequence or map of them (paralleling
 *   the structure returned by the `signal-fn`).
 * 
 *   This example `signal-fn` returns a vector of input signals.
 *     ```clj
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 *     ```
 *   The associated computation function must be written
 *   to expect a vector of values for its first argument:
 *     ```clj
 *     (fn [[a b] query-vec]     ;; 1st argument is a seq of two values
 *       ....)
 *      ```
 * 
 *   If, on the other hand, the signal function was simpler and returned a singleton, like this:
 *      ```clj
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 *      ```
 *   then the associated computation function must be written to expect a single value
 *   as the 1st argument:
 *      ```clj
 *      (fn [a query-vec]       ;; 1st argument is a single value
 *        ...)
 *      ```
 * 
 *   Further Note: variation #1 above, in which an `input-fn` was not supplied, like this:
 *     ```clj
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; has signature:  (fn [db query-vec]  ... ret-value)
 *   ```
 *   is the equivalent of using this
 *   2nd variation and explicitly suppling a `signal-fn` which returns `app-db`:
 *   ```clj
 *   (reg-sub
 *     :query-id
 *     (fn [_ _]  re-frame/app-db)   ;; <--- explicit input-fn
 *     a-computation-fn)             ;; has signature:  (fn [db query-vec]  ... ret-value)
 *   ```
 * 
 *   3. Syntax Sugar
 * 
 *   ```clj
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] query-vec]    ;; 1st argument is a seq of two values
 *       {:a a :b b}))
 *   ```
 * 
 *   This 3rd variation is just syntactic sugar for the 2nd.  Instead of providing an
 *   `signals-fn` you provide one or more pairs of `:<-` and a subscription vector.
 * 
 *   If you supply only one pair a singleton will be supplied to the computation function,
 *   as if you had supplied a `signal-fn` returning only a single value:
 * 
 *   ```clj
 *   (reg-sub
 *     :a-sub
 *     :<- [:a-sub]
 *     (fn [a query-vec]      ;; only one pair, so 1st argument is a single value
 *       ...))
 *   ```
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
re_frame.core.reg_sub = (function re_frame$core$reg_sub(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66724 = arguments.length;
var i__4737__auto___66729 = (0);
while(true){
if((i__4737__auto___66729 < len__4736__auto___66724)){
args__4742__auto__.push((arguments[i__4737__auto___66729]));

var G__66730 = (i__4737__auto___66729 + (1));
i__4737__auto___66729 = G__66730;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.subs.reg_sub,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_id], null),args));
}));

(re_frame.core.reg_sub.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.core.reg_sub.cljs$lang$applyTo = (function (seq66468){
var G__66472 = cljs.core.first(seq66468);
var seq66468__$1 = cljs.core.next(seq66468);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66472,seq66468__$1);
}));

/**
 * Given a `query` vector, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a `Signal`.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   Two, or more, concurrent subscriptions for the same query will source reactive
 *   updates from the one executing handler.
 *   
 */
re_frame.core.subscribe = (function re_frame$core$subscribe(var_args){
var G__66481 = arguments.length;
switch (G__66481) {
case 1:
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(query);
}));

(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2(query,dynv);
}));

(re_frame.core.subscribe.cljs$lang$maxFixedArity = 2);

/**
 * When called with no args, unregisters all subscription handlers. When given
 * one arg, assumed to be a `query-id` of a registered subscription handler,
 * unregisters the associated handler.
 * 
 * NOTE: Depending on the usecase it may also be necessary to call 
 *       `clear-subscription-cache!`.
 */
re_frame.core.clear_sub = (function re_frame$core$clear_sub(var_args){
var G__66492 = arguments.length;
switch (G__66492) {
case 0:
return re_frame.core.clear_sub.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.core.clear_sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.clear_sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind);
}));

(re_frame.core.clear_sub.cljs$core$IFn$_invoke$arity$1 = (function (query_id){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
}));

(re_frame.core.clear_sub.cljs$lang$maxFixedArity = 1);

/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running `on-dispose` on all cached subscriptions
 *   2. Each `on-dispose` will perform the removal of themselves.
 * 
 *   This is for development time use. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
re_frame.core.clear_subscription_cache_BANG_ = (function re_frame$core$clear_subscription_cache_BANG_(){
return re_frame.subs.clear_subscription_cache_BANG_();
});
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/day8/re-frame/blob/master/docs/flow-mechanics.md
 */
re_frame.core.reg_sub_raw = (function re_frame$core$reg_sub_raw(query_id,handler_fn){
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,handler_fn);
});
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.core.reg_fx = (function re_frame$core$reg_fx(id,handler){
return re_frame.fx.reg_fx(id,handler);
});
/**
 * When called with no args, unregisters all effect handlers. When given one arg,
 * assumed to be the `id` of a registered effect handler, unregisters the 
 * associated handler.
 */
re_frame.core.clear_fx = (function re_frame$core$clear_fx(var_args){
var G__66529 = arguments.length;
switch (G__66529) {
case 0:
return re_frame.core.clear_fx.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.core.clear_fx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.clear_fx.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind);
}));

(re_frame.core.clear_fx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2(re_frame.fx.kind,id);
}));

(re_frame.core.clear_fx.cljs$lang$maxFixedArity = 1);

/**
 * Register the given coeffect `handler` for the given `id`, for later use
 *   within `inject-cofx`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a function which takes either one or two arguements, the first of which is
 *   always `coeffects` and which returns an updated `coeffects`.
 * 
 *   See the docs for `inject-cofx` for example use.
 */
re_frame.core.reg_cofx = (function re_frame$core$reg_cofx(id,handler){
return re_frame.cofx.reg_cofx(id,handler);
});
/**
 * Given an `id`, and an optional, arbitrary `value`, returns an interceptor
 * whose `:before` adds to the `:coeffects` (map) by calling a pre-registered
 * 'coeffect handler' identified by the `id`.
 * 
 * The previous association of a `coeffect handler` with an `id` will have
 * happened via a call to `re-frame.core/reg-cofx` - generally on program startup.
 * 
 * Within the created interceptor, this 'looked up' `coeffect handler` will
 * be called (within the `:before`) with two arguments:
 *   - the current value of `:coeffects`
 *   - optionally, the originally supplied arbitrary `value`
 * 
 * This `coeffect handler` is expected to modify and return its first, `coeffects` argument.
 * 
 * Example Of how `inject-cofx` and `reg-cofx` work together
 * ---------------------------------------------------------
 * 
 * 1. Early in app startup, you register a `coeffect handler` for `:datetime`:
 * 
 *    (re-frame.core/reg-cofx
 *      :datetime                        ;; usage  (inject-cofx :datetime)
 *      (fn coeffect-handler
 *        [coeffect]
 *        (assoc coeffect :now (js/Date.))))   ;; modify and return first arg
 * 
 * 2. Later, add an interceptor to an -fx event handler, using `inject-cofx`:
 * 
 *    (re-frame.core/reg-event-fx        ;; we are registering an event handler
 *       :event-id
 *       [ ... (inject-cofx :datetime) ... ]    ;; <-- create an injecting interceptor
 *       (fn event-handler
 *         [coeffect event]
 *         ... in here can access (:now coeffect) to obtain current datetime ... )))
 * 
 * Background
 * ----------
 * 
 * `coeffects` are the input resources required by an event handler
 * to perform its job. The two most obvious ones are `db` and `event`.
 * But sometimes an event handler might need other resources.
 * 
 * Perhaps an event handler needs a random number or a GUID or the current
 * datetime. Perhaps it needs access to a DataScript database connection.
 * 
 * If an event handler directly accesses these resources, it stops being
 * pure and, consequently, it becomes harder to test, etc. So we don't
 * want that.
 * 
 * Instead, the interceptor created by this function is a way to 'inject'
 * 'necessary resources' into the `:coeffects` (map) subsequently given
 * to the event handler at call time.
 */
re_frame.core.inject_cofx = (function re_frame$core$inject_cofx(var_args){
var G__66547 = arguments.length;
switch (G__66547) {
case 1:
return re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1(id);
}));

(re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2 = (function (id,value){
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2(id,value);
}));

(re_frame.core.inject_cofx.cljs$lang$maxFixedArity = 2);

/**
 * When called with no args, unregisters all coeffect handlers. When given one arg,
 * assumed to be the `id` of a registered coeffect handler, unregisters the 
 * associated handler.
 */
re_frame.core.clear_cofx = (function re_frame$core$clear_cofx(var_args){
var G__66549 = arguments.length;
switch (G__66549) {
case 0:
return re_frame.core.clear_cofx.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.core.clear_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.clear_cofx.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.cofx.kind);
}));

(re_frame.core.clear_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2(re_frame.cofx.kind,id);
}));

(re_frame.core.clear_cofx.cljs$lang$maxFixedArity = 1);

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
re_frame.core.reg_event_db = (function re_frame$core$reg_event_db(var_args){
var G__66552 = arguments.length;
switch (G__66552) {
case 2:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,re_frame.std_interceptors.inject_global_interceptors,interceptors,re_frame.std_interceptors.db_handler__GT_interceptor(handler)], null));
}));

(re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3);

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
re_frame.core.reg_event_fx = (function re_frame$core$reg_event_fx(var_args){
var G__66555 = arguments.length;
switch (G__66555) {
case 2:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,re_frame.std_interceptors.inject_global_interceptors,interceptors,re_frame.std_interceptors.fx_handler__GT_interceptor(handler)], null));
}));

(re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3);

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
re_frame.core.reg_event_ctx = (function re_frame$core$reg_event_ctx(var_args){
var G__66557 = arguments.length;
switch (G__66557) {
case 2:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,re_frame.std_interceptors.inject_global_interceptors,interceptors,re_frame.std_interceptors.ctx_handler__GT_interceptor(handler)], null));
}));

(re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3);

/**
 * When called with no args, unregisters all event handlers. When given one arg,
 * assumed to be the `id` of a registered event handler, unregisters the 
 * associated handler.
 */
re_frame.core.clear_event = (function re_frame$core$clear_event(var_args){
var G__66559 = arguments.length;
switch (G__66559) {
case 0:
return re_frame.core.clear_event.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.core.clear_event.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.clear_event.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.events.kind);
}));

(re_frame.core.clear_event.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2(re_frame.events.kind,id);
}));

(re_frame.core.clear_event.cljs$lang$maxFixedArity = 1);

/**
 * An interceptor which logs/instruments an event handler's actions to
 *   `js/console.debug`. See examples/todomvc/src/events.cljs for use.
 * 
 *   Output includes:
 *   1. the event vector
 *   2. a `clojure.data/diff` of db, before vs after, which shows
 *   the changes caused by the event handler.  You will absolutely have
 *   to understand https://clojuredocs.org/clojure.data/diff to
 *   understand the output.
 * 
 *   You'd typically include this interceptor after (to the right of) any
 *   path interceptor.
 * 
 *   Warning:  calling clojure.data/diff on large, complex data structures
 *   can be slow. So, you won't want this interceptor present in production
 *   code. So condition it out like this :
 * 
 *    (re-frame.core/reg-event-db
 *       :evt-id
 *       [(when ^boolean goog.DEBUG re-frame.core/debug)]  ;; <-- conditional
 *       (fn [db v]
 *         ...))
 * 
 *   To make this code fragment work, you'll also have to set goog.DEBUG to
 *   false in your production builds - look in `project.clj` of /examples/todomvc.
 *   
 */
re_frame.core.debug = re_frame.std_interceptors.debug;
/**
 * returns an interceptor whose `:before` substitutes the coeffects `:db` with
 *   a sub-path of `:db`. Within `:after` it grafts the handler's return value
 *   back into db, at the right path.
 * 
 *   So, its overall action is to make the event handler behave like the function
 *   you might give to clojure's `update-in`.
 * 
 *   Examples:
 * 
 *    (path :some :path)
 *    (path [:some :path])
 *    (path [:some :path] :to :here)
 *    (path [:some :path] [:to] :here)
 * 
 *   Example Use:
 * 
 *    (reg-event-db
 *      :event-id
 *      (path [:a :b])  ;; used here, in interceptor chain
 *      (fn [b v]       ;; 1st arg is now not db. Is the value from path [:a :b] within db
 *        ... new-b))   ;; returns a new value for that path (not the entire db)
 * 
 *   Notes:
 *  1. `path` may appear more than once in an interceptor chain. Progressive narrowing.
 *  2. if `:effects` contains no `:db` effect, can't graft a value back in.
 *   
 */
re_frame.core.path = re_frame.std_interceptors.path;
/**
 * Interceptor factory which runs the given function `f` in the `after handler`
 *   position.  `f` is called with two arguments: `db` and `v`, and is expected to
 *   return a modified `db`.
 * 
 *   Unlike the `after` interceptor which is only about side effects, `enrich`
 *   expects `f` to process and alter the given `db` coeffect in some useful way,
 *   contributing to the derived data, flowing vibe.
 * 
 *   Example Use:
 *   ------------
 * 
 *   Imagine that todomvc needed to do duplicate detection - if any two todos had
 *   the same text, then highlight their background, and report them via a warning
 *   at the bottom of the panel.
 * 
 *   Almost any user action (edit text, add new todo, remove a todo) requires a
 *   complete reassessment of duplication errors and warnings. Eg: that edit
 *   just made might have introduced a new duplicate, or removed one. Same with
 *   any todo removal. So we need to re-calculate warnings after any CRUD events
 *   associated with the todos list.
 * 
 *   Unless we are careful, we might end up coding subtly different checks
 *   for each kind of CRUD operation.  The duplicates check made after
 *   'delete todo' event might be subtly different to that done after an
 *   editing operation. Nice and efficient, but fiddly. A bug generator
 *   approach.
 * 
 *   So, instead, we create an `f` which recalculates ALL warnings from scratch
 *   every time there is ANY change. It will inspect all the todos, and
 *   reset ALL FLAGS every time (overwriting what was there previously)
 *   and fully recalculate the list of duplicates (displayed at the bottom?).
 * 
 *   https://twitter.com/nathanmarz/status/879722740776939520
 * 
 *   By applying `f` in an `:enrich` interceptor, after every CRUD event,
 *   we keep the handlers simple and yet we ensure this important step
 *   (of getting warnings right) is not missed on any change.
 * 
 *   We can test `f` easily - it is a pure function - independently of
 *   any CRUD operation.
 * 
 *   This brings huge simplicity at the expense of some re-computation
 *   each time. This may be a very satisfactory trade-off in many cases.
 */
re_frame.core.enrich = re_frame.std_interceptors.enrich;
/**
 * An interceptor which removes the first element of the event vector,
 *   allowing you to write more aesthetically pleasing event handlers. No
 *   leading underscore on the event-v!
 *   Your event handlers will look like this:
 * 
 *    (defn my-handler
 *      [db [x y z]]    ;; <-- instead of [_ x y z]
 *      ....)
 */
re_frame.core.trim_v = re_frame.std_interceptors.trim_v;
/**
 * returns an interceptor which runs a given function `f` in the `:after`
 *   position, presumably for side effects.
 * 
 *   `f` is called with two arguments: the `:effects` value for `:db`
 *   (or the `coeffect` value of db if no db effect is returned) and the event.
 *   Its return value is ignored, so `f` can only side-effect.
 * 
 *   Examples use can be seen in the /examples/todomvc:
 *   - `f` runs schema validation (reporting any errors found).
 *   - `f` writes to localstorage.
 */
re_frame.core.after = re_frame.std_interceptors.after;
/**
 * Interceptor factory which acts a bit like `reaction`  (but it flows into
 *   `db`, rather than out). It observes N paths within `db` and if any of them
 *   test not identical? to their previous value  (as a result of a event handler
 *   being run) then it runs `f` to compute a new value, which is then assoc-ed
 *   into the given `out-path` within `db`.
 * 
 *   Usage:
 * 
 *    (defn my-f
 *      [a-val b-val]
 *      ... some computation on a and b in here)
 * 
 *    (on-changes my-f [:c]  [:a] [:b])
 * 
 *   Put this Interceptor on the right handlers (ones which might change :a or :b).
 *   It will:
 *   - call `f` each time the value at path [:a] or [:b] changes
 *   - call `f` with the values extracted from [:a] [:b]
 *   - assoc the return value from `f` into the path  [:c]
 *   
 */
re_frame.core.on_changes = re_frame.std_interceptors.on_changes;
/**
 * Registers `interceptor` as a global interceptor. Global interceptors are
 * included in the processing of every event.
 * 
 * When you register an event handler you have the option of supplying an
 * interceptor chain. Any global interceptors you register are effectively
 * prepending to this chain in the order that they are registered.
 */
re_frame.core.reg_global_interceptor = (function re_frame$core$reg_global_interceptor(interceptor){
return re_frame.settings.reg_global_interceptor(interceptor);
});
/**
 * When called with no args, unregisters all global interceptors. When given
 * one arg, assumed to be the `id` of a currently registered global
 * interceptor, it unregisters the associated interceptor.
 */
re_frame.core.clear_global_interceptor = (function re_frame$core$clear_global_interceptor(var_args){
var G__66561 = arguments.length;
switch (G__66561) {
case 0:
return re_frame.core.clear_global_interceptor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.core.clear_global_interceptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.clear_global_interceptor.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$0();
}));

(re_frame.core.clear_global_interceptor.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$1(id);
}));

(re_frame.core.clear_global_interceptor.cljs$lang$maxFixedArity = 1);

/**
 * Create an interceptor from named arguments
 */
re_frame.core.__GT_interceptor = (function re_frame$core$__GT_interceptor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66816 = arguments.length;
var i__4737__auto___66817 = (0);
while(true){
if((i__4737__auto___66817 < len__4736__auto___66816)){
args__4742__auto__.push((arguments[i__4737__auto___66817]));

var G__66818 = (i__4737__auto___66817 + (1));
i__4737__auto___66817 = G__66818;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = (function (p__66565){
var map__66566 = p__66565;
var map__66566__$1 = (((((!((map__66566 == null))))?(((((map__66566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66566):map__66566);
var m = map__66566__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66566__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66566__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66566__$1,new cljs.core.Keyword(null,"after","after",594996914));
return re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic(re_frame.interceptor.__GT_interceptor,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
}));

(re_frame.core.__GT_interceptor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.core.__GT_interceptor.cljs$lang$applyTo = (function (seq66563){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66563));
}));

/**
 * When called with one arg, returns the coeffects map from the `context`.
 * When called with two or three args, behaves like `clojure.core/get`, 
 * returns the value mapped to `key` in the coeffects map, `not-found` or
 * `nil` if `key` is not present.
 */
re_frame.core.get_coeffect = (function re_frame$core$get_coeffect(var_args){
var G__66569 = arguments.length;
switch (G__66569) {
case 1:
return re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
}));

(re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,key);
}));

(re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3(context,key,not_found);
}));

(re_frame.core.get_coeffect.cljs$lang$maxFixedArity = 3);

/**
 * Returns a new `context` with a new coeffects map that contains `key`
 * mapped to the `value`.
 */
re_frame.core.assoc_coeffect = (function re_frame$core$assoc_coeffect(context,key,value){
return re_frame.interceptor.assoc_coeffect(context,key,value);
});
/**
 * When called with one arg, returns the effects map from the `context`.
 * When called with two or three args, behaves like `clojure.core/get`, 
 * returns the value mapped to `key` in the effects map, `not-found` or
 * `nil` if `key` is not present.
 */
re_frame.core.get_effect = (function re_frame$core$get_effect(var_args){
var G__66580 = arguments.length;
switch (G__66580) {
case 1:
return re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context);
}));

(re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,key);
}));

(re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,key,not_found);
}));

(re_frame.core.get_effect.cljs$lang$maxFixedArity = 3);

/**
 * Returns a new `context` with a new effects map that contains `key`
 * mapped to the `value`.
 */
re_frame.core.assoc_effect = (function re_frame$core$assoc_effect(context,key,value){
return re_frame.interceptor.assoc_effect(context,key,value);
});
/**
 * Add a collection of `interceptors` to the end of `context's` execution `:queue`.
 *   Returns the updated `context`.
 * 
 *   In an advanced case, this function could allow an interceptor to add new
 *   interceptors to the `:queue` of a context.
 */
re_frame.core.enqueue = (function re_frame$core$enqueue(context,interceptors){
return re_frame.interceptor.enqueue(context,interceptors);
});
/**
 * Change the set (or a subset) of logging functions used by re-frame.
 *   `new-loggers` should be a map with the same keys as `loggers` (above)
 */
re_frame.core.set_loggers_BANG_ = (function re_frame$core$set_loggers_BANG_(new_loggers){
return re_frame.loggers.set_loggers_BANG_(new_loggers);
});
/**
 * Logs `args` to the console at `level`. 
 * Level can be one of `:log` `:error` `:warn` `:debug` `:group` `:groupEnd`.
 * If you are writing an extension to re-frame, like prehaps an effect handler,
 * you may want to use re-frame logging so that users can configure logging 
 * from a central location.
 * 
 * usage: (console :error "Oh, dear God, it happened:" a-var "and" another)
 *        (console :warn "Possible breach of containment wall at:" dt)
 */
re_frame.core.console = (function re_frame$core$console(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66866 = arguments.length;
var i__4737__auto___66868 = (0);
while(true){
if((i__4737__auto___66868 < len__4736__auto___66866)){
args__4742__auto__.push((arguments[i__4737__auto___66868]));

var G__66871 = (i__4737__auto___66868 + (1));
i__4737__auto___66868 = G__66871;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.loggers.console,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level], null),args));
}));

(re_frame.core.console.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.core.console.cljs$lang$applyTo = (function (seq66622){
var G__66624 = cljs.core.first(seq66622);
var seq66622__$1 = cljs.core.next(seq66622);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66624,seq66622__$1);
}));

/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
re_frame.core.make_restore_fn = (function re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref(re_frame.db.app_db);
var subs_cache = cljs.core.deref(re_frame.subs.query__GT_reaction);
return (function (){
var original_subs_66884 = cljs.core.set(cljs.core.vals(subs_cache));
var current_subs_66885 = cljs.core.set(cljs.core.vals(cljs.core.deref(re_frame.subs.query__GT_reaction)));
var seq__66652_66886 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_subs_66885,original_subs_66884));
var chunk__66653_66887 = null;
var count__66654_66888 = (0);
var i__66655_66889 = (0);
while(true){
if((i__66655_66889 < count__66654_66888)){
var sub_66894 = chunk__66653_66887.cljs$core$IIndexed$_nth$arity$2(null,i__66655_66889);
re_frame.interop.dispose_BANG_(sub_66894);


var G__66895 = seq__66652_66886;
var G__66896 = chunk__66653_66887;
var G__66897 = count__66654_66888;
var G__66898 = (i__66655_66889 + (1));
seq__66652_66886 = G__66895;
chunk__66653_66887 = G__66896;
count__66654_66888 = G__66897;
i__66655_66889 = G__66898;
continue;
} else {
var temp__5735__auto___66900 = cljs.core.seq(seq__66652_66886);
if(temp__5735__auto___66900){
var seq__66652_66904__$1 = temp__5735__auto___66900;
if(cljs.core.chunked_seq_QMARK_(seq__66652_66904__$1)){
var c__4556__auto___66905 = cljs.core.chunk_first(seq__66652_66904__$1);
var G__66906 = cljs.core.chunk_rest(seq__66652_66904__$1);
var G__66907 = c__4556__auto___66905;
var G__66908 = cljs.core.count(c__4556__auto___66905);
var G__66909 = (0);
seq__66652_66886 = G__66906;
chunk__66653_66887 = G__66907;
count__66654_66888 = G__66908;
i__66655_66889 = G__66909;
continue;
} else {
var sub_66912 = cljs.core.first(seq__66652_66904__$1);
re_frame.interop.dispose_BANG_(sub_66912);


var G__66915 = cljs.core.next(seq__66652_66904__$1);
var G__66916 = null;
var G__66917 = (0);
var G__66918 = (0);
seq__66652_66886 = G__66915;
chunk__66653_66887 = G__66916;
count__66654_66888 = G__66917;
i__66655_66889 = G__66918;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_(re_frame.db.app_db,app_db);

return null;
});
});
/**
 * Remove all events queued for processing
 */
re_frame.core.purge_event_queue = (function re_frame$core$purge_event_queue(){
return re_frame.router.event_queue.re_frame$router$IEventQueue$purge$arity$1(null);
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
re_frame.core.add_post_event_callback = (function re_frame$core$add_post_event_callback(var_args){
var G__66665 = arguments.length;
switch (G__66665) {
case 1:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(f,f);
}));

(re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return re_frame.router.event_queue.re_frame$router$IEventQueue$add_post_event_callback$arity$3(null,id,f);
}));

(re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2);

/**
 * Unregisters the function identified by `id` to be called after each event is
 * processed.
 */
re_frame.core.remove_post_event_callback = (function re_frame$core$remove_post_event_callback(id){
return re_frame.router.event_queue.re_frame$router$IEventQueue$remove_post_event_callback$arity$2(null,id);
});
/**
 * Deprecated. Use `reg-event-db` instead.
 */
re_frame.core.register_handler = (function re_frame$core$register_handler(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66934 = arguments.length;
var i__4737__auto___66939 = (0);
while(true){
if((i__4737__auto___66939 < len__4736__auto___66934)){
args__4742__auto__.push((arguments[i__4737__auto___66939]));

var G__66940 = (i__4737__auto___66939 + (1));
i__4737__auto___66939 = G__66940;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args)),")"], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_event_db,args);
}));

(re_frame.core.register_handler.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.core.register_handler.cljs$lang$applyTo = (function (seq66690){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66690));
}));

/**
 * Deprecated. Use `reg-sub-raw` instead.
 */
re_frame.core.register_sub = (function re_frame$core$register_sub(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66949 = arguments.length;
var i__4737__auto___66950 = (0);
while(true){
if((i__4737__auto___66950 < len__4736__auto___66949)){
args__4742__auto__.push((arguments[i__4737__auto___66950]));

var G__66954 = (i__4737__auto___66950 + (1));
i__4737__auto___66950 = G__66954;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args)),")"], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_sub_raw,args);
}));

(re_frame.core.register_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.core.register_sub.cljs$lang$applyTo = (function (seq66705){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66705));
}));


//# sourceMappingURL=re_frame.core.js.map
