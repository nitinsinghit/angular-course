'use strict';

/**
 * @ngdoc function
 * @name myIvu.service:ContactService
 * @description
 * # service for the IVU Loto page
 */
angular.module('myIvu')
  .service('IvuService', function ($http) {

    this.getNumbers = function () {
      return $http.get('scripts/components/ivuloto/services/winning-numbers.json')
        .then(
          function success(response) {
            return {
              data: response.data,
              error: null
            };
          }, function error(response) {
            console.log(response.statusText);
            return {
              data: response.statusText,
              error: true
            };
          });
    };
  });