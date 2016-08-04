'use strict';

/**
 * @ngdoc function
 * @name myAppMain.controller:MainCtrl
 * @description
 * # Controller for the about page
 */
angular.module('myAppMain')
  .controller('MainCtrl', function ($scope, MainService) {

    this.awesomeThings = [
      'Angular',
      'Bower',
      'Karma'
    ];
    $scope.todoList = ['Clean', 'Bake'];


    $scope.addTodo = function (todoItem) {
      $scope.todoList.push(todoItem);
    };

    $scope.removeTodo = function (item) {
      var index;
      if (typeof item === 'string') {
        index = $scope.todoList.indexOf(item);
      } else if (typeof item === 'number') {
        index = item;
      } else {
        return null;
      }
      if (index > -1) {
        $scope.todoList.splice(index, 1);
      }
    };

    // Simple promise
    $scope.resolvePromise = function () {
      MainService.sampleAsync().then(function (greeting) {
        alert('Success: ' + greeting);
      }, function (reason) {
        alert('Failed: ' + reason);
      });
    };

    $scope.resolveDefer = function () {
      MainService.sampleDefer().then(function (greeting) {
        alert('Success: ' + greeting);
      }, function (reason) {
        alert('Failed: ' + reason);
      });
    };

  });
