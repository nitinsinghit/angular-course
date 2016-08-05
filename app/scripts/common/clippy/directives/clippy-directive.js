angular.module('myApp')
  .directive('clippy', function () {
    return {
      controller: 'ClippyCtrl',
      templateUrl: 'scripts/common/clippy/views/clippy.html'
    };

  });
