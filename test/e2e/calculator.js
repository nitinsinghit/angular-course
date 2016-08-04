/**
 * Created by MWA01_01 on 8/4/2016.
 */
'use strict';

  describe('my app', function() {


    it('should show correct value on add', function() {
      browser.get('index.html');
      expect(browser.getLocationAbsUrl()).toMatch("/calculator");
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

