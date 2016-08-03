'use strict';

/**
 * @ngdoc function
 * @name myAppContact.service:ContactService
 * @description
 * # service for the contact page
 */
angular.module('myAppContact')
  .service('ContactService', function ($http, $q) {

    this.getContactInfo = function () {
      return $http.get('http://localhost:3000/contact')
        .then(
          function successResponse(response) {
            console.log(response.data);
            return {
              response: response.data,
              error: null
            };
          }, function errorResponse(response) {
            console.log(response.statusText);
            return {
              response: response.statusText,
              error: true
            };
          });
    };

    this.hello = function () {
      return 'hello';
    };

  });
