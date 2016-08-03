angular.module('myAppShoppingCustom')
  .controller('PDPCustomCtrl', function ($scope, $stateParams) {

    $scope.params = $stateParams.obj;

  });
