(ns samplethree.env
  (:require
    [selmer.parser :as parser]
    [clojure.tools.logging :as log]
    [samplethree.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[samplethree started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[samplethree has shut down successfully]=-"))
   :middleware wrap-dev})
