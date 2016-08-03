angular.module('myAppShoppingCustom')
  .controller('PLPCustomCtrl', function ($scope, $state, ShoppingCartCustomService) {

    this.init = function () {
      ShoppingCartCustomService.getProducts().then(
        function (response) {
          console.log(response);
          $scope.products = response.data;
        }
      )
    };

    this.init();

    $scope.selectProduct = function (product) {
      $state.go('shop-custom.pdp', {obj: product});
    };

  });
