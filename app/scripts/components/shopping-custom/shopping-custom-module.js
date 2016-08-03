angular.module('myAppShoppingCustom', [])
  .config(function ($stateProvider) {

    $stateProvider
      .state('shop-custom.plp', {
        url: '/product-landing-page',
        templateUrl: 'scripts/components/shopping-custom/views/product-landing-page.html',
        controller: 'PLPCustomCtrl'
      })
      .state('shop-custom.pdp', {
        url: '/product-details-page',
        templateUrl: 'scripts/components/shopping-custom/views/product-details-page.html',
        controller: 'PDPCustomCtrl',
        // Allowing state to accept parameter 'obj'
        params: {
          obj: null
        }
      })
      .state('shop-custom.payment', {
        url: '/payment',
        templateUrl: 'scripts/components/shopping-custom/views/payment.html',
        controller: 'PaymentCustomCtrl',
        // Allowing state to accept parameter 'obj'
        params: {
          obj: null
        }
      });
  });
