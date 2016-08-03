angular.module('myAppShopping', [])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('shop.plp', {
        url: '/product-landing-page',
        templateUrl: 'scripts/components/shopping/views/product-landing-page.html',
        controller: 'PLPCtrl'
      })
      .state('shop.pdp', {
        url: '/product-details-page',
        templateUrl: 'scripts/components/shopping/views/product-details-page.html',
        controller: 'PDPCtrl',
        // Allowing state to accept parameter 'obj'
        params: {
          obj: null
        }
      })
  });
