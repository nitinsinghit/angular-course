angular.module('myAppHeader')
  .directive('header', function () {
    return {
      templateUrl: 'scripts/components/header/views/header.html',
      controller: 'HeaderCtrl'
    };
  });
