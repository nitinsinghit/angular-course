'use strict';

/**
 * @ngdoc overview
 * @name myIvu
 * @description
 * # IVU Loto page component
 *
 */
angular.module('myIvu', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('ivuloto.home', {
        url: '/home',
        templateUrl:'scripts/components/ivuloto/views/numbers-landing-page.html',
        controller: 'IvuCtrl'
      })
      .state('ivuloto.mynumbers', {
        url: '/my-numbers',
        templateUrl:'scripts/components/ivuloto/views/my-numbers-page.html',
        controller: 'IvuUserCtrl'
      })
  });
