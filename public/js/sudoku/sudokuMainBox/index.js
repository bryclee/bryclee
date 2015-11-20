'use strict';

import 'angular';
import 'sudoku/sudokuSingleBox/index';

var moduleName = 'sudokuMainBoxDirective';

angular
  .module(moduleName, ['sudokuSingleBoxDirective'])
  .directive('sudokuMainBox', [function() {
    return {
      restict: 'E',
      templateUrl: 'js/sudoku/sudokuMainBox/template.html',
      link: function(scope, element, attrs) {
        var sudokuElements = {};

        scope.boxChange = function() {
          console.log('validate() arguments: ', arguments);
        };
      }
    };
  }]);
