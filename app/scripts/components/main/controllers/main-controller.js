'use strict';

/**
 * @ngdoc function
 * @name myAppMain.controller:MainCtrl
 * @description
 * # Controller for the about page
 */
angular.module('myAppMain')
  .controller('MainCtrl', function ($scope) {

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

    this.x = '2';
    var self = this;
    this.function = function () {
      console.log(self.x);
    };


    /*
    $scope.name = 'Success!';
    $scope.alert = function () {
      alert('Hello');
    };

    $scope.random = function () {
      var array = [
        'apples',
        'pears',
        'oranges',
        'peaches',
        'pugs',
        'carrots',
        'chocolate'
      ];

      var index = Math.floor(Math.random() * 6);

      return array[index];
    };
    */




  });
