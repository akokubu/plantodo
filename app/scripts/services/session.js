'use strict';

angular.module('plantodoApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
