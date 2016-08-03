'use strict';

/**
 * @ngdoc function
 * @name myAppContact.controller:ContactCtrl
 * @description
 * # Controller for the about page
 */
angular.module('myAppContact')
  .controller('ContactCtrl', function ($scope, Author, ContactService) {

    $scope.AuthorSet = false;
    $scope.getContactInfo = function () {
      ContactService.getContactInfo()
        .then(function (response) {
          if (!response || response.error) {
            $scope.error = true;
          } else {
            Author.init(response.response);
            $scope.AuthorSet = true;
          }
        });
    };

    $scope.sendMessage = function (message) {
      var obj = {
        message: message
      };
      ContactService.sendMessage(obj);
    };

    $scope.getName = function () {
      return Author.getName();
    };
    $scope.getEmail = function () {
      return Author.getEmail();
    };
    $scope.getPhone = function () {
      return Author.getPhone();
    };
    $scope.getAge = function () {
      return Author.getAge();
    };

    $scope.increaseAge = function () {
      Author.increaseAge();
    };

    $scope.decreaseAge = function () {
      Author.decreaseAge();
    };


    var promise1 = ContactService.sendMessage('hi');
    var promise2 = ContactService.sendMessage('hi');
    var promise3 = ContactService.sendMessage('hi');
    var promise4 = ContactService.sendMessage('hi');
    var promise5 = ContactService.sendMessage('hi');
    var promise6 = ContactService.sendMessage('hi');

    $q.all([promise1, promise2, promise3/*, ...*/])
      .then(function (response1, response2 /*, ... */) {

      })

    function asyncFun1() {
      return $q(function (resolve, reject) {
        setTimeout(function () {
          if (condition) {
            resolve('Hello');
          } else {
            reject('Bye');
          }
        }, 2000);
      });
    }

    function asyncFun2(callback) {
      setTimeout(function () {
        if (condition) {
          callback('Hello');
        } else {
          callback('Bye');
        }
      }, 2000);
    }

    asyncFun1().then(function () {

    });
    asyncFun2(function (response) {

    });

  });
