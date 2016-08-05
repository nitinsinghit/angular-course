/**
 * Created by MWA01_01 on 8/4/2016.
 */
'use strict';

  describe('my app', function() {


    it('should show correct path for main page', function() {
      browser.get('index.html');
      expect(browser.getLocationAbsUrl()).toMatch("/main");
    });

    it('should show correct path on navigating calculator tab', function() {
      browser.get('index.html#calculator');
      expect(browser.getLocationAbsUrl()).toMatch("/calculator");
    });

    it('should show correct value on sum', function() {
      browser.get('index.html#calculator');
      expect(browser.getLocationAbsUrl()).toMatch("/calculator");
      element(by.id("first")).sendKeys("1");
      element(by.id("second")).sendKeys("2");
      element(by.buttonText('Calculate')).click();
      //firstNumber.sendKeys("1");
      //secondNumber.sendKeys("2");
      //element(by.buttonText('+')).click();
      //expect(element(by.id('result'))).toMatch('3');


    });


  //describe('view1', function() {
  //
  //  beforeEach(function() {
  //    browser.get('index.html#!/view1');
  //  });
  //
  //
  //  it('should render view1 when user navigates to /view1', function() {
  //    browser.pause();
  //    expect(element.all(by.css('[ng-view] p')).first().getText()).
  //      toMatch(/partial for view 1/);
  //  });
  //
  //});
  //
  //
  //describe('view2', function() {
  //
  //  beforeEach(function() {
  //    browser.get('index.html#!/view2');
  //  });
  //
  //
  //  it('should render view2 when user navigates to /view2', function() {
  //    expect(element.all(by.css('[ng-view] p')).first().getText()).
  //      toMatch(/partial for view 2/);
  //  });
  //
  //});
});

