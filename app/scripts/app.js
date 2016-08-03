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

    // Src Modules
    'myAppAbout',
    'myAppContact',
    'myAppMain',
    'myAppHeader',
    'myAppFooter',
    'myAppShopping'
  ])
  .directive('app', function () {
    return {
      templateUrl: 'scripts/app.html'
    };
  });
