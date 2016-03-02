'use strict';
angular.module('main')
.controller('TweetsListCtrl', function ($scope, TweetsService, $ionicLoading) {
  var self = this;

  this.tweets = [];

  $scope.$on('$ionicView.afterEnter', function () {
    $ionicLoading.show();
    TweetsService.getTweets()
    .then(function (tweets) {
      self.tweets = tweets;
    })
    .finally(function () {
      $ionicLoading.hide();
    });
  });

});
