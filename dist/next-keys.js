(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var returnValue = function(inValue){ return inValue };

  nx.keys = function (inObject, inCallback, inContext) {
    var callback = inCallback || returnValue;
    return nx.map( inObject, function(key){
      return callback.call(inContext, key);
    });
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.keys;
  }

}());
