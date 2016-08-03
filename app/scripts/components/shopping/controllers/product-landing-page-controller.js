'use strict';

angular.module('myAppShopping')
  .controller('PLPCtrl', function ($scope, $state, ShoppingService) {

    $scope.selectItem = function (item) {
      $state.go('shop.pdp', {obj: item});
    };

    this.init = function () {
      getProducts();
    };

    function getProducts () {
      ShoppingService.getProducts().then(function (response) {
        if (response.error) {
          console.log(response.error);
        } else {
          $scope.products = response.data;
        }
      });
    }

    this.init();
  });
