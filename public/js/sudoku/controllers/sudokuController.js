'use strict';

define([
  'angular'
], function(angular) {

  var moduleName = 'sudokuControllerModule';

  angular
    .module(moduleName, [])
    .controller('sudokuController', ['$scope',
      function($scope) {
        console.log('sudokuController');
    }]);

  return moduleName;

});
