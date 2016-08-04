angular.module('myAppAbout')
  .service('AboutService', function ($http) {

    this.getContactInfo = function () {
      return $http.get('http://localhost:3000/contact')
        .then(function successResponse(response) {
          console.log(response);
          return response.data;
        }, function failedResponse(response) {
          console.log(response);
          return response.statusText;
        });
    };

  });
