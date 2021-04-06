goog.provide('conways_game_of_life.worker');
goog.require('cljs.core');
conways_game_of_life.worker.init = (function conways_game_of_life$worker$init(){
return self.addEventListener("message",(function (e){
console.log("HELLO WORKER",e);

return postMessage(e.data);
}));
});

//# sourceMappingURL=conways_game_of_life.worker.js.map
