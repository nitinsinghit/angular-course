'use strict';

/**
 * @ngdoc function
 * @name myAppHeader.controller:HeaderCtrl
 * @description
 * # Controller for the Header page
 */
angular.module('myAppHeader')
  .controller('HeaderCtrl', function ($scope, $location) {

    $scope.routes = [
      {
        name: 'Main',
        sref: 'main',
        url: '/main'
      },
      {
        name: 'About',
        sref: 'about',
        url: '/about'
      },
      {
        name: 'Contact',
        sref: 'contact',
        url: '/contact'
      },
      {
        name: 'Shop',
        sref: 'shop.plp',
        url: '/shop/product-landing-page'
        //can't use 'shop' since it is an abstract state.
        // We must instead direct the user to one of its children
      },
      {
        name: 'Custom Shopping',
        sref: 'shop-custom.plp',
        url: '/shop-custom/product-landing-page'
      },
      {
        name: 'Comics',
        sref: 'comics',
        url: '/comics'
      },
      {
        name: 'Chat',
        sref: 'chat',
        url: '/chat'
      },
      {
        name: 'Calculator',
        sref: 'calculator',
        url: '/calculator'
      },
      {
        name: 'Ivuloto',
        sref: 'ivuloto.home',
        url: '/ivuloto/home'
      },
      {
        name: 'Play',
        sref: 'play',
        url: '/play'
      },
      {
        name: 'Map',
        sref: 'map',
        url: '/map'
      },
      {
        name: 'Address Book',
        sref: 'contacts-custom',
        url: '/contacts-custom'
      },
      {
        name: 'Carousel',
        sref: 'carousel',
        url: '/carousel'
      }
    ];

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

  });
