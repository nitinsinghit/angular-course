angular.module('myIvu')
  .controller('IvuUserCtrl', function ($scope, $state, IvuService) {
      $scope.item = '';
      $scope.myNumbers = ['1234-abcd', 'ABCD-AS12D'];
      $scope.winningNumbers = [
        {
          ivuNumber: 'ABCD-AS12D',
          prize: 50
        }];
      $scope.myPrizes = [];
      $scope.cashWon = 0;

      $scope.addNumber = function (ivuItem) {
        $scope.myNumbers.push(ivuItem.toUpperCase());
        $scope.ivuItem = '';
        $scope.getPrizes();
      };

      $scope.removeNumber = function (item) {
        var index;
        if (typeof item === 'string') {
          index = $scope.myNumbers.indexOf(item);
        } else if (typeof item === 'number') {
          index = item;
        } else {
          return null;
        }
        if (index > -1) {
          $scope.myNumbers.splice(index, 1);
        }
        $scope.getPrizes();
      };

      $scope.getPrizes = function () {
        $scope.myPrizes = [];
        $scope.cashWon = 0;
        for (var i=1; i < $scope.myNumbers.length; i++){
          // Check against each winning number
          for(var key in $scope.winningNumbers){  
            if($scope.winningNumbers[key].ivuNumber == $scope.myNumbers[i]){
              $scope.myPrizes.push($scope.winningNumbers[key]);
              $scope.cashWon += $scope.winningNumbers[key].prize;
            }
          }
        }
      };
    
});