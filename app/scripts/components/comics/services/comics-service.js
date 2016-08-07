angular.module('myAppComics')
  .service('ComicsService', function ($http) {

    this.getComics = function () {
      return $http.get('scripts/components/comics/services/comics.json')
        .then(
          function success(response) {
            return {
              data: response.data,
              error: null
            };
          }, function error(response) {
            return {
              data: response.statusText,
              error: true
            };
          });
    };
  });
