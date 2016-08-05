'use strict';

/**
 * @ngdoc function
 * @name myIvu.controller:IvuCtrl
 * @description
 * # Controller for the IVU Loto page
 */
angular.module('myIvu')
  .controller('IvuCtrl', function ($scope, $state, IvuService) {
      
      this.init = function(){
          getWinningNumbers();
      };
      
      function getWinningNumbers(){
          IvuService.getNumbers()
            .then(function(response){
                if(response.error)
                    console.log(response.error);
                else
                    $scope.winningNumbers = response.data;
            });
      }

      // Initialize numbers
      this.init();
});