(ns samplethree.core
  (:require
    [ajax.core :as ajax]
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
   (rf/dispatch[:set-key :result x]))
   ;;(swap! (@rf/subscribe[:x]) assoc :result x))
  ;; (color (@rf/subscribe[:y])))


 (defn math []
   (cond
     (nil? @(rf/subscribe[:op])) (rf/dispatch [:set-key :op "+"])))

   (POST (str "/api/math/" (get ops (@(rf/subscribe[:op])))
         {:headers {"Accept" "application/transit+json"}
          :params {:x @(rf/subscribe[:x]) :y @(rf/subscribe[:y])}
          :handler #(handler (:total %))}))


 (defn do-math [num]
   ((cond
      (and (nil? @(rf/subscribe[:x])) (nil? @(rf/subscribe[:result]))) (do (rf/dispatch [:set-key :x num]) (set! equals " = "))
      (and (nil? @(rf/subscribe[:y])) (nil? @(rf/subscribe[:result]))) (rf/dispatch [:set-key :y num])
      :default (do (rf/dispatch [:set-key :x (rf/subscribe[:result])]) (rf/dispatch [:set-key :y num])))
    (math)))

   ;;(rf/dispatch [:set-key :x num])


 (defn make-calc-btns [num]
   [:button.button
    {:class "button is-info"
     :on-click #(do-math[num])}
    num])


 (defn make-calc []
   [:div#calc-btns (map make-calc-btns (range 1 10))])


(defn home-page []
     [:section.section>div.container>div.content
      [:div.calc-size
       (rf/dispatch-sync [:initialize])
       (make-calc)
       ;;[:button
       ;; {:class "button is-info"
       ;;  :name "EQUALS"
       ;;  :on-click #(rf/dispatch[:equals])} "="]
       [:button
        {:class "button is-info"
         :name "RESET"
         :on-click #(rf/dispatch [:reset])} "RESET!"]
       [:button.button
        {:class "button is-primary"
         :on-click #(rf/dispatch [:set-key :op "+"])} "+"]
       [:button.button
        {:class "button is-primary"
         :on-click #(rf/dispatch [:set-key :op "-"])} "-"]
       [:button.button
        {:class "button is-primary"
         :on-click #(rf/dispatch [:set-key :op "*"])} "*"]
       [:button.button
        {:class "button is-primary"
         :on-click #(rf/dispatch [:set-key :op "/"])} "/"]
       [:br]
       [:span.calc-size.numbers {:style {:color @(rf/subscribe[:get-color])} } @(rf/subscribe[:equation])]]])


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
           :view        #'home-page
           :controllers [{:start (fn [_] (rf/dispatch [:page/init-home]))}]}]]))

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
  (mount-components))
