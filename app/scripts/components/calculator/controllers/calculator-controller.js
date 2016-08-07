/**
 * Created by MWA01_01 on 8/4/2016.
 */


// Declare the model
//calculatorModel = {
//  result: 0, // Holds the actual result in memory
//  operation: "",
//  currentNumber: "0",
//  currentDisplay: "", // Shows the input until the result is shown
//
//  reset: function() {
//    this.result = 0;
//    this.operation = "";
//    this.currentNumber = "0";
//    this.currentDisplay = "" ;
//  },
//
//  setOperation: function(operationToSet) {
//    this.operation = operationToSet;
//    if(calculatorModel.currentNumber === "0") {
//      this.currentDisplay += "0";
//    }
//
//    this.currentDisplay += " " + this.operation + " ";
//    this.calculate();
//
//    this.currentNumber = "";
//  },
//
//  calculate: function() {
//
//    switch(this.operation) {
//      case "+":
//        this.result = this.result + parseFloat(this.currentNumber);
//        break;
//
//      case "-":
//        this.result = this.result - (this.currentNumber);
//        break;
//    }
//  }
//
//};



angular.module('myAppCalculator')
  .controller('CalculatorCtrl', function ($scope) {

    function add(x, y) {
      return x + y;
    }

    function sub(x, y) {
      return x - y;
    }

    function mul(x, y) {
      return x * y;
    }

    function div(x, y) {
      return x / y;
    }

    function calc(op, x, y) {
      return $scope.operators[op](parseInt(x, 10), parseInt(y));
    }

    $scope.reset = function reset(){
      $scope.firstNumber = "";
      $scope.secondNumber = "";
      $scope.result = "";
      $scope.op = '+';
    };

    $scope.operators = {
      '+': add,
      '-': sub,
      '*': mul,
      '/': div
    };
    $scope.op = '+';
    $scope.calc = calc;


  });


