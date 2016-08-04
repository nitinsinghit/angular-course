angular.module('myAppMain')
  .service('MainService', function ($q) {

    this.condition = true;
    var self = this;
    // Resolve and Reject
    this.sampleAsync = function () {
      return $q(function(resolve, reject) {
        setTimeout(function() {
          if (self.condition) {
            resolve('Hello');
          } else {
            reject('Failed');
          }
        }, 1000);
      });
    };

    this.sampleDefer = function () {
      var defer = $q.defer();
      $timeout(function() {
        if (self.condition) {
          defer.resolve('Hello');
        } else {
          defer.reject('Failed')
        }
      }, 5000);
      return defer.promise;
    };

  });
