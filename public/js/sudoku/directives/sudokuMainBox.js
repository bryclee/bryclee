'use strict';

define([
  'angular',
  'directives/sudokuSingleBox'
], function(angular, sudokuSingleBox) {

  var moduleName = 'sudokuMainBoxDirective';

  angular
    .module(moduleName, [sudokuSingleBox])
    .directive('sudokuMainBox', [function() {
      return {
        restict: 'E',
        templateUrl: 'js/sudoku/directives/templates/sudokuMainBox.html'
      };
    }]);

  return moduleName;

});
