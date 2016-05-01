function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments);
   var filtering = args.splice(0, 1);
   return arr.filter(function (element) {
    return args.indexOf(element) === -1;
    });
}﻿