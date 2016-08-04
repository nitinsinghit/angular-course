angular.module('myApp')
  .directive('clippy', function () {
    return {
      controller: 'ClippyCtrl',
      template: '<span></span>'
    };

  });
