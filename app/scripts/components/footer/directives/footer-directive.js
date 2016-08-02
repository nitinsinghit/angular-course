angular.module('myAppFooter')
  .directive('footer', function () {
    return {
      templateUrl: 'scripts/components/footer/views/footer.html',
      controller: 'FooterCtrl'
    };
  });
