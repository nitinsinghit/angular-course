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
      })
      // Define state 'ivu-loto'
      // .state('shop-ivu-loto', {
      //   url: '/ivuloto',
      //   controller: 'IvuCtrl',
      //   templateUrl: 'scripts/components/ivuloto/views/numbers-landing-page.html'
      // })
      .state('ivuloto', {
        url: '/ivuloto',
        abstract: true,
        template: '<ui-view>'
      })
      .state('play', {
        url: '/play',
        templateUrl: 'scripts/components/play/views/play.html',
        controller: 'PlayCtrl'
      })
      .state('comics', {
        url: '/comics',
        templateUrl: 'scripts/components/comics/views/comics-view.html',
        controller: 'ComicsCtrl'
      })
      // Define state 'map'
      .state('map', {
        url: '/map',
        templateUrl: 'scripts/components/map/views/map.html',
        controller: 'MapCtrl'
      })
      // Define state 'contacts-custom'
      .state('contacts-custom', {
        url: '/contacts-custom',
        templateUrl: 'scripts/components/contacts-custom/views/contacts-custom.html',
        controller: 'ContactCtrl'
      });


    // Set default route
    $urlRouterProvider.otherwise('/main');

    $urlRouterProvider.when('', '/');
  });
