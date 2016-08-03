'use strict';

/**
 * @ngdoc function
 * @name myAppContact.service:ContactService
 * @description
 * # service for the contact page
 */
angular.module('myAppShopping')
  .service('ShoppingService', function ($http) {

    this.getProducts = function () {
      return $http.get('scripts/components/shopping/services/products.json') //make sure update grunt file to include .json files
        .then(
          function success(response) {
            console.log(response.data);
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

    this.hello = function () {
      return 'hello';
    };

  });
