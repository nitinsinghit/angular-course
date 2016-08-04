'use strict';

/**
 * @ngdoc function
 * @name myAppAbout.controller:AboutCtrl
 * @description
 * # Controller for the about page
 */
angular.module('myAppAbout')
  .controller('AboutCtrl', function ($scope, User, AboutService) {

    this.awesomeThings = [
      'Angular',
      'Bower',
      'Karma'
    ];
    this.userCreated = false;
    var self = this;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.awesomeThings = [
      {
        name: 'HTML5 Boilerplate',
        description: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'
      },
      {
        name: 'AngularJS',
        description: 'AngularJS is a toolset for building the framework most suited to your application development.'
      },
      {
        name: 'Karma',
        description: 'Spectacular Test Runner for JavaScript.'
      }
    ];

    $scope.getContactInfo = function () {
      AboutService.getContactInfo().then(function (response) {
        console.log(response);
        User.setName(response.name);
        User.setEmail(response.email);
        User.setPhone(response.phone);
        User.setId(response.id);
        self.userCreated = true;
      });
    };

    $scope.isUser = function () {
      return self.userCreated;
    };
    $scope.userName = function () {
      return User.getName();
    };
    $scope.userEmail = function () {
      return User.getEmail();
    };
    $scope.userPhone = function () {
      return User.getPhone();
    };
    $scope.userId = function () {
      return User.getId();
    };
  });
