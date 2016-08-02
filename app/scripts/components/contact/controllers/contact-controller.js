'use strict';

/**
 * @ngdoc function
 * @name myAppContact.controller:ContactCtrl
 * @description
 * # Controller for the about page
 */
angular.module('myAppContact')
  .controller('ContactCtrl', function ($scope, Author, ContactService) {
    console.log(Author.hello());
    console.log(ContactService.hello());

    $scope.getContactInfo = function () {
      ContactService.getContactInfo()
        .then(function (response) {
          if (response.error || !response) {
            $scope.error = true;
          } else {
            $scope.user = response.response;
          }
        });
    }
  });
