(ns samplethree.events
  (:require
    [re-frame.core :as rf]
    [ajax.core :as ajax]
    [reitit.frontend.easy :as rfe]
    [reitit.frontend.controllers :as rfc]))

;;dispatchers

(rf/reg-event-db
  :common/navigate
  (fn [db [_ match]]
    (let [old-match (:common/route db)
          new-match (assoc match :controllers
                                 (rfc/apply-controllers (:controllers old-match) match))]
      (assoc db :common/route new-match))))

(rf/reg-fx
  :common/navigate-fx!
  (fn [[k & [params query]]]
    (rfe/push-state k params query)))

(rf/reg-event-fx
  :common/navigate!
  (fn [_ [_ url-key params query]]
    {:common/navigate-fx! [url-key params query]}))

(rf/reg-event-db
  :common/set-error
  (fn [db [_ error]]
    (assoc db :common/error error)))

(rf/reg-event-db
  :initialize
  (fn [_ _]
    {:x nil
     :y nil
     :op nil
     :result nil
     :color nil}))

(rf/dispatch-sync [:initialize])

(rf/reg-event-fx
  ::http-post
  (fn [_world [_ val]]
    {:http-xhrio {:method          :post
                  :uri             (str "/api/math/" (@(rf/subscribe[:op])))
                  :params          :x, :y
                  :timeout         5000
                  :format          (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [::success-post-result]
                  :on-failure      [::failure-post-result]}}))

(rf/reg-event-db
  ::success-post-result
  (fn [db [_ result]]
    (assoc db :result total)))

(rf/reg-event-db
  ::failure-http-result
  (fn [db [_ result]]
    ;; result is a map containing details of the failure
    (assoc db :failure-http-result result)))

(rf/reg-event-db
  :reset
  (fn [db _]
    (assoc db :x nil)
    (assoc db :y nil)
    (assoc db :op nil)
    (assoc db :result nil)
    (assoc db :color nil)))

(rf/reg-event-db
  :equals
  (fn [_ _]
    ::http-post)
  (fn[db _ [_ result]]
      (let [x (-> result)]
        (cond
          (< x 20) (swap! assoc :color "#90EE90")
          (< x 50) (swap! assoc :color "#ADD8E6")
          :else  (swap! assoc :color "#FFA07A")))))

(rf/reg-event-db
  :plus
  (fn [db _]
    (assoc db :op "plus")))

(rf/reg-event-db
  :minus
  (fn [db _]
    (assoc db :op "minus")))

(rf/reg-event-db
  :multiply
  (fn [db _]
    (assoc db :op "multiply")))

(rf/reg-event-db
  :divide
  (fn [db _]
    (assoc db :op "divide")))




;;subscriptions

(rf/reg-sub
  :common/route
  (fn [db _]
    (-> db :common/route)))

(rf/reg-sub
  :common/page-id
  :<- [:common/route]
  (fn [route _]
    (-> route :data :name)))

(rf/reg-sub
  :common/page
  :<- [:common/route]
  (fn [route _]
    (-> route :data :view)))

(rf/reg-sub
  :common/error
  (fn [db _]
    (:common/error db)))

(rf/reg-sub
  :color
  (fn [db _]
    (:color db)))

(rf/reg-sub
  :equation
  (fn [db _]
    ((str (:x db) " " (:op db) " " (:y db) (" = ") (:result db)))))