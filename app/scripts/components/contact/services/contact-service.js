'use strict';

/**
 * @ngdoc function
 * @name myAppContact.service:ContactService
 * @description
 * # service for the contact page
 */
angular.module('myAppContact')
  .service('ContactService', function ($http, $q, APP_CONSTS) {

    console.log(APP_CONSTS.SERVER_URL);
    this.getContactInfo = function () {
      return $http.get(APP_CONSTS.SERVER_URL + '/contact')
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
      /*
      return $http({
        method: 'GET',
        url: 'http://localhost:3000/contact'
      }).then(
        ///
      )*/
    };

    this.sendMessage = function (message) {
      return $http({
        method: 'POST',
        url: APP_CONSTS.SERVER_URL + '/message',
        data: message,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        console.log(response);
      })
    };

  });
