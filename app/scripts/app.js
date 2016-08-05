'use strict';

/**
 * @ngdoc overview
 * @name myApp
 *
 * Main module of the application.
 */
angular.module('myApp', [
    // Vendor
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'angularUtils.directives.dirPagination',
    
    // Src Modules
    'myAppAbout',
    'myAppContact',
    'myAppMain',
    'myAppHeader',
    'myAppFooter',
    'myAppShopping',
    'myAppShoppingCustom',
    'myAppChat',
    'myIvu'
  ])
  .directive('app', function () {
    return {
      templateUrl: 'scripts/app.html'
    };
  })
  .controller('MyCtrl', function ($scope) {
    this.items = [
      'one',
      'two',
      'three'
    ]
  });
