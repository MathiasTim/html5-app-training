'use strict';
angular.module('main')
.service('TweetsService', function ($log, $http, $q) {

  this.getTweets = function () {
    return $http.get('main/assets/tweets.json')
    .then(function (result) {
      return result.data;
    })
    .catch(function (error) {
      $log.log(error);
      return $q.reject(error);
    });
  };

});
