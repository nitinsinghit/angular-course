'use strict';

/**
 * @ngdoc function
 * @name myAppHeader.controller:HeaderCtrl
 * @description
 * # Controller for the Header page
 */
angular.module('myAppHeader')
  .controller('HeaderCtrl', function ($scope) {

    $scope.routes = [
      {
        name: 'Main',
        sref: 'main'
      },
      {
        name: 'About',
        sref: 'about'
      },
      {
        name: 'Contact',
        sref: 'main'
      }
    ];

  });
