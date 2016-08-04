'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module

  beforeEach(module('myAppMain'));

  var MainCtrl,
    myScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    myScope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: myScope
      // place here mocked dependencies
    });
  }));

  it('It should be defined', function () {
    expect(MainCtrl).toBeDefined();
  });
  it('should attach a list of awesomeThings to the controller', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });
});
