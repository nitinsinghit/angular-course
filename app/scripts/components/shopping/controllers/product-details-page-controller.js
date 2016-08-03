'use strict';

angular.module('myAppShopping')
  .controller('PDPCtrl', function ($scope, $state, $stateParams, $filter) {

    function init () {
      //Use filter in controller
      $scope.params.name = $filter('MakeUppercase')($scope.params.name);
      $scope.params.group = $filter('MakeUppercase')($scope.params.group);
    }

    $scope.description = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam elementum est, at vestibulum augue consequat at. Donec euismod convallis felis. Nam sed molestie dolor. Proin in tortor sed augue consequat viverra.'];
    $scope.array = [
      'addasjd Helol jsdhshd sdjasd',
      'shdahsd dahsdh askdka',
      'kksjdsd wdghds adsda'
    ];

    $scope.params = $stateParams.obj;
    $scope.back = function () {
      $state.go('shop.plp');
    };

    // Check if params are valid
    if (!$scope.params) {
      $scope.back();
    } else {
      init();
    }

  });
