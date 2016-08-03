angular.module('myAppShoppingCustom')
  .service('ShoppingCartCustomService', function ($http) {

    this.getProducts = function () {
      return $http({
        method: 'GET',
        url: 'scripts/components/shopping-custom/services/products.json'
      }).then(
        function (response) {
          return response;
        }
      )
    };

    this.getAccessories = function () {
      return $http({
        method: 'GET',
        url: 'scripts/components/shopping-custom/services/accessories.json'
      }).then(
        function (response) {
          return response;
        }
      );
    };
  });
