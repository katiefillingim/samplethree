(ns samplethree.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[samplethree started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[samplethree has shut down successfully]=-"))
   :middleware identity})
