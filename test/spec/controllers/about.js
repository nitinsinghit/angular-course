'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module

  beforeEach(module('myAppAbout'));


  var AboutCtrl,
    scope, myUser, myAboutService;

  beforeEach(inject(function ($controller, $rootScope, User, AboutService) {
    scope = $rootScope.$new();
    myUser = User;
    myAboutService = AboutService;
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Should be defined', (function() {
    expect(AboutCtrl).toBeDefined();
  }));

  it('should attach a list of awesomeThings to the controller and have a length of 3', function () {
    expect(AboutCtrl.awesomeThings.length).toBe(3);
  });

  it('should attach a list of awesomeThings to the scope and have a length of 3', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should set user name to "Test User"', function () {
    myUser.setName('Test User');
    expect(myUser.getName()).toBe('Test User');
  });

  it('should return contact information from the server', function () {
    /*myAboutService.getContactInfo().then(function (response) {
      console.log(response);
      expect(response.name).toBe('Patrick Opie');
      expect(response.id).toBe(111);
      expect(response.phone).toBe('1238889999');
      expect(response.email).toBe('patrick.opie@deliote.com');
      expect(response.active).toBe(true);
      expect(response.dogs.length).toBe(4);
    });*/
  });
});
