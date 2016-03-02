'use strict';

describe('module: main, controller: TweetsListCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var TweetsListCtrl;
  beforeEach(inject(function ($controller) {
    TweetsListCtrl = $controller('TweetsListCtrl');
  }));

  it('should do something', function () {
    expect(!!TweetsListCtrl).toBe(true);
  });

});
