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
  'myIvu',
  'myAppPlay',
  'myAppComics',
  'myAppMap',
  'myAppCalculator',
  'myAppContactCustom'
])
  .directive('app', function () {
    return {
      templateUrl: 'scripts/app.html'
    };
  });
