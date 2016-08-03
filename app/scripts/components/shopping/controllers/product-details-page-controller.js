'use strict';

angular.module('myAppShopping')
  .controller('PDPCtrl', function ($scope, $state, $stateParams) {

    $scope.params = $stateParams.obj;
    $scope.back = function () {
      $state.go('shop.plp');
    };

    // Check if params are valid
    if (!$scope.params) {
      $scope.back();
    }

  });
