/**
 * Created by MWA01_01 on 8/4/2016.
 */


// Declare the model
calculatorModel = {
  result: 0, // Holds the actual result in memory
  operation: "",
  currentNumber: "0",
  currentDisplay: "", // Shows the input until the result is shown

  reset: function() {
    this.result = 0;
    this.operation = "";
    this.currentNumber = "0";
    this.currentDisplay = "" ;
  },

  setOperation: function(operationToSet) {
    this.operation = operationToSet;
    if(calculatorModel.currentNumber === "0") {
      this.currentDisplay += "0";
    }

    this.currentDisplay += " " + this.operation + " ";
    this.calculate();

    this.currentNumber = "";
  },

  calculate: function() {

    switch(this.operation) {
      case "+":
        this.result = this.result + parseFloat(this.currentNumber);
        break;

      case "-":
        this.result = this.result - parseFloat(this.currentNumber);
        break;
    }
  }

};

// Add the calculator-controller to module


angular.module('myAppCalculator')
  .controller('CalculatorCtrl', function ($scope) {

    $scope.calculator = calculatorModel;
    $scope.numberButtonClicked = function(clickedNumber) {
      if(calculatorModel.currentNumber === "0") {
        calculatorModel.currentNumber = "";
        calculatorModel.currentDisplay = "";
      }

      calculatorModel.currentNumber += clickedNumber;
      calculatorModel.currentDisplay += clickedNumber;
    };

    $scope.operationButtonClicked = function(clickedOperation) {
      calculatorModel.setOperation(clickedOperation);
    };

    $scope.enterClicked = function() {
      calculatorModel.calculate();
      calculatorModel.currentDisplay = calculatorModel.result;
    };

    $scope.resetClicked = function() {
      calculatorModel.reset();
    };

  });


