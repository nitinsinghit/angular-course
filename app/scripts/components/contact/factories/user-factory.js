'use strict';

/**
 * @ngdoc function
 * @name myAppContact.factory:User
 * @description
 * # Factory for User
 */
angular.module('myAppContact')
  .factory('Author', function () {
    var Author = {};

    Author.hello = function () {
      return 'hello';
    };

    return Author;

  });
