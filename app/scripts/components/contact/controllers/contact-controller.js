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

  });
