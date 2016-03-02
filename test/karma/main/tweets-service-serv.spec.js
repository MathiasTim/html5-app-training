'use strict';

describe('module: main, service: TweetsService', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var TweetsService;
  beforeEach(inject(function (_TweetsService_) {
    TweetsService = _TweetsService_;
  }));

  it('should do something', function () {
    expect(!!TweetsService).toBe(true);
  });

});
