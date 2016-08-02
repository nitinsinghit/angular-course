'use strict';

/**
 * @ngdoc overview
 * @name myApp
 *
 * Main module of the application.
 */
angular.module('myApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'myAppAbout',
    'myAppMain',
    'myAppHeader',
    'myAppFooter'
  ])
  .directive('app', function () {
    return {
      templateUrl: 'scripts/app.html'
    };
  });
