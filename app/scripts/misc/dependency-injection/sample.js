var myMod = angular.module('myApp');

myMod.provider('greeting', function() {
  this.$get = function() {
    var obj = {};
    obj.greeting = function(name) {
      alert("Hello, " + name);
    };
    return obj;
  };
});

myMod.factory('greeting', function() {
  var obj = {};

  obj.greeting = function(name) {
    alert("Hello, " + name);
  };

  return obj;
});

myMod.service('greeting', function() {
  this.greeting = function(name) {
    alert("Hello, " + name);
  };
});

myMod.value('greeting', function(name) {
  alert("Hello, " + name);
});

// All of these are valid to inject into a controller like so...

myMod.controller('sampleCtrl', function ($scope, greeting) {
  greeting.greeting();
  // 'greeting' is now injected into the controller
});
