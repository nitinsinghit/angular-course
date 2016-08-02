'use strict';
/**
 * @ngdoc module
 * @name myTmoApp
 * @description # Set's the root state configuration and router handeling
 */
angular.module('myApp')
  .config(function ($stateProvider, $urlRouterProvider) {


    // Define routes in main application using stateProvider
    $stateProvider
    // Define state 'main'
      .state('main', {
        url: '/main',
        templateUrl: 'scripts/components/main/views/main.html',
        controllerUrl: 'scripts/components/main/controllers/main-controller.js'
      })

      // Define state 'about'
      .state('about', {
        url: '/about',
        templateUrl: 'scripts/components/about/views/about.html',
        controllerUrl: 'scripts/components/about/controllers/about-controller.js'
      });


    // Set default route
    $urlRouterProvider.otherwise('/main');

    $urlRouterProvider.when('', '/');
  });
