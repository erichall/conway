(ns conways-game-of-life.worker)

(defn init
  []
  (js/self.addEventListener "message"
                            (fn [^js e]
                              (js/console.log "HELLO WORKER" e)
                              (js/postMessage (.. e -data)))))
