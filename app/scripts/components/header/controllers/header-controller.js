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
        name: 'Chat',
        sref: 'chat',
        url: '/chat'
      }
    ];

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

  });
