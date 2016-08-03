var myMod = angular.module('myApp');

myMod.provider('greeting', function() {
  this.$get = function() {
    return function(name) {
      alert("Hello, " + name);
    };
  };
});

myMod.factory('greeting', function() {
  return function(name) {
    alert("Hello, " + name);
  };
});

myMod.service('greeting', function() {
  return function(name) {
    alert("Hello, " + name);
  };
});

myMod.value('greeting', function(name) {
  alert("Hello, " + name);
});

// All of these are valid to inject into a controller like so...

myMod.controller('sampleCtrl', function ($scope, greeting) {
  // 'greeting' is now injected into the controller
});
