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
        controller: 'MainCtrl'
      })
      // Define state 'contact'
      .state('contact', {
        url: '/contact',
        templateUrl: 'scripts/components/contact/views/contact.html',
        css: 'scripts/components/contact/views/contact.css',
        controller: 'ContactCtrl'
      })
      // Define state 'about'
      .state('about', {
        url: '/about',
        templateUrl: 'scripts/components/about/views/about.html',
        css: 'scripts/components/about/views/about.css',
        controller: 'AboutCtrl'
      })
      // Define state 'chat'
      .state('chat', {
        url: '/chat',
        templateUrl: 'scripts/components/chat/views/chat.html',
        controller: 'ChatCtrl'
      })
      // Define state 'shop'
      .state('shop', {
        url: '/shop',
        abstract: true,
        template: '<ui-view>'
      })
      // Define state 'shop-custom'
      .state('shop-custom', {
        url: '/shop-custom',
        abstract: true,
        template: '<ui-view>'
      })
      .state('calculator', {
        url: '/calculator',
        templateUrl: 'scripts/components/calculator/views/calculator.html',
        controller: 'CalculatorCtrl'
      });


    // Set default route
    $urlRouterProvider.otherwise('/main');

    $urlRouterProvider.when('', '/');
  });
