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
  'leaflet-directive',

  // Src Modules
  'myAppAbout',
  'myAppContact',
  'myAppMain',
  'myAppHeader',
  'myAppFooter',
  'myAppShopping',
  'myAppShoppingCustom',
  'myAppChat',
  'myAppMap'
])
  .directive('app', function () {
    return {
      templateUrl: 'scripts/app.html'
    };
  });
