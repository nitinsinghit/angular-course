'use strict';


angular.module('myAppMap')
  .controller('MapCtrl', function ($scope, $location, $timeout, leafletData) {
    angular.extend($scope, {
      center: {
        lat: 40.704392,
        lng: -74.009485,
        zoom: 15
      },
      tiles: {
        name: 'Pen & Ink',
        url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
        type: 'xyz',
        options: {
          apikey: 'pk.eyJ1IjoicHV6emxlYm9rcyIsImEiOiI3VERYTHI0In0.Tzm7kzevYPXkHdxfckoWfA',
          mapid: 'puzzleboks.fa4d7f3b'
        }
      }
    });
    $scope.$on("centerUrlHash", function(event, centerHash) {
      console.log("url", centerHash);
      $location.search({ c: centerHash });
    });

    $scope.changeLocation = function(centerHash) {
      $location.search({ c: centerHash });
    };

    $scope.showMap = true;
    $scope.$watch("showMap", function(value) {
      if (value === true) {
        leafletData.getMap().then(function(map) {
          $timeout(function() {
            map.invalidateSize();
          }, 300);
        });
      }
    });
  });
