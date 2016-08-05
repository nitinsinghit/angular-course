angular.module('myAppComics')
  .controller('ComicsCtrl', function ($scope, ComicsService) {

    var self = this;

    this.init = function () {
      getComics();
    }

    $scope.comicIndex = 0;

    $scope.comicFirst = function () {
      $scope.comicIndex = 0;
      checkToDisable();
      console.log($scope.comicIndex);
    }

    $scope.comicPrev = function () {
      $scope.comicIndex--;
      checkToDisable();
      console.log($scope.comicIndex);
    }

    $scope.comicNext = function () {
      $scope.comicIndex++;
      checkToDisable();
      console.log($scope.comicIndex);
    }

    $scope.comicLast = function () {
      $scope.comicIndex = $scope.comics.length-1;
      checkToDisable();
      console.log($scope.comicIndex);
    }

    function checkToDisable () {
      if ($scope.comicIndex < 0) {
        $scope.comicIndex = 0;
      }
      else if ($scope.comicIndex > $scope.comics.length-1) {
        $scope.comicIndex = $scope.comics.length-1;
      }
    }

    function getComics () {
      ComicsService.getComics().then(function (response) {
        if (response.error) {
          console.log(response.error);
        } else {
          $scope.comics = response.data;
          console.log($scope.comics);
        }
      });
    }

    this.init();
  });
