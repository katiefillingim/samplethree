(ns samplethree.core
  (:require
    [ajax.core :refer [GET POST]]
    [day8.re-frame.http-fx]
    [reagent.dom :as rdom]
    [reagent.core :as r]
    [re-frame.core :as rf]
    [goog.events :as events]
    [goog.history.EventType :as HistoryEventType]
    [markdown.core :refer [md->html]]
    [samplethree.ajax :as ajax]
    [samplethree.events]
    [reitit.core :as reitit]
    [reitit.frontend.easy :as rfe]
    [clojure.string :as string])
  (:import goog.History))

(defn nav-link [uri title page]
  [:a.navbar-item
   {:href   uri
    :class (when (= page @(rf/subscribe [:common/page])) :is-active)}
   title])

(defn navbar [] 
  (r/with-let [expanded? (r/atom false)]
              [:nav.navbar.is-info>div.container
               [:div.navbar-brand
                [:a.navbar-item {:href "/" :style {:font-weight :bold}} "samplethree"]
                [:span.navbar-burger.burger
                 {:data-target :nav-menu
                  :on-click #(swap! expanded? not)
                  :class (when @expanded? :is-active)}
                 [:span][:span][:span]]]
               [:div#nav-menu.navbar-menu
                {:class (when @expanded? :is-active)}
                [:div.navbar-start
                 [nav-link "#/" "Home" :home]]]]))


 ;;(def calc-atom (r/atom {:x nil :y nil :result nil :op nil :color "#90EE90"}))
 (def ops {"+" "plus", "-" "minus", "*" "multiply", "/" "divide"})
 (def equals "")


 ;;(defn color [ref]
 ;;  (let [x (-> @ref :result)]
 ;;    (cond
 ;;      (< x 20) (swap! ref assoc :color "#90EE90")
 ;;      (< x 50) (swap! ref assoc :color "#ADD8E6")
 ;;      :else  (swap! ref assoc :color "#FFA07A"))))


 (defn handler [x]
   (prn "in handler" x)
   (rf/dispatch-sync[:set-key :result x])
   (rf/dispatch[:color x]))


 ;;(defn math []
 ;;  (prn "in math :x" @(rf/subscribe[:get-value :x]) " :y " @(rf/subscribe[:get-value :y]))
 ;;       (POST (str "/api/math/" (get ops @(rf/subscribe[:get-value :op])))
 ;;        {:headers {"Accept" "application/transit+json"}
 ;;         :params {:x @(rf/subscribe[:get-value :x]) :y @(rf/subscribe[:get-value :y])}
 ;;         :handler #(handler (:total %))}))
(defn math [x y]
  (prn "in math :x" x " :y " y)
  (POST (str "/api/math/" (get ops @(rf/subscribe[:get-value :op])))
        {:headers {"Accept" "application/transit+json"}
         :params {:x x :y y}
         :handler #(handler (:total %))}))


 (defn do-math [num]
   ((cond
      (and (= 0 @(rf/subscribe[:get-value :x]))
           (= 0 @(rf/subscribe[:get-value :result])))
      (do (rf/dispatch-sync [:set-key :x num]) (math num 0) (set! equals " = "))

      (and (= 0 @(rf/subscribe[:get-value :y]))
           (= 0 @(rf/subscribe[:get-value :result])))
      (do (rf/dispatch-sync [:set-key :y num]) (math @(rf/subscribe[:get-value :x]) num))

      :default (do (rf/dispatch [:set-key :x @(rf/subscribe[:get-value :result])])
                   (rf/dispatch-sync [:set-key :y num]) (math @(rf/subscribe[:get-value :result]) num)))
    ))


 (defn make-calc-btns [num]
   [:button.button
    {:class "button is-info"
     :key num
     :on-click #(do-math num)}
    num])


 (defn make-calc []
   [:div#calc-btns (map make-calc-btns (range 1 10))])


(defn home-page []
     [:section.section>div.container>div.content
      [:div.calc-size
       (make-calc)
       ;;[:button
       ;; {:class "button is-info"
       ;;  :name "EQUALS"
       ;;  :on-click #(rf/dispatch[:equals])} "="]
       [:button
        {:class "button is-info"
         :name "RESET"
         :key "RESET"
         :on-click #(rf/dispatch [:reset])} "RESET!"]
       [:button.button
        {:class "button is-primary"
         :key "plus"
         :on-click #(rf/dispatch [:set-key :op "+"])} "+"]
       [:button.button
        {:class "button is-primary"
         :key "minus"
         :on-click #(rf/dispatch [:set-key :op "-"])} "-"]
       [:button.button
        {:class "button is-primary"
         :key "multiply"
         :on-click #(rf/dispatch [:set-key :op "*"])} "*"]
       [:button.button
        {:class "button is-primary"
         :key "divide"
         :on-click #(rf/dispatch [:set-key :op "/"])} "/"]
       [:br]
       [:span.calc-size.numbers {:style {:color @(rf/subscribe[:get-color])} }
          @(rf/subscribe[:equation])
        ]]])


(defn page []
  (if-let [page @(rf/subscribe [:common/page])]
    [:div
     [navbar]
     [page]]))

(defn navigate! [match _]
  (rf/dispatch [:common/navigate match]))

(def router
  (reitit/router
    [["/" {:name        :home
           :view        #'home-page}]]))

(defn start-router! []
  (rfe/start!
    router
    navigate!
    {}))

;; -------------------------
;; Initialize app
(defn ^:dev/after-load mount-components []
  (rf/clear-subscription-cache!)
  (rdom/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (start-router!)
  (ajax/load-interceptors!)
  (rf/dispatch-sync [:initialize])
  (mount-components))
