angular.module('myAppShoppingCustom')
  .controller('PLPCustomCtrl', function ($scope, $state) {

    $scope.products = [
      {
        'name': 'test1',
        'group': 'test1',
        'price': 10
      },
      {
        'name': 'test2',
        'group': 'test2',
        'price': 15
      }
    ];

    $scope.selectProduct = function (product) {
      $state.go('shop-custom.pdp', {obj: product});
    };

  });
