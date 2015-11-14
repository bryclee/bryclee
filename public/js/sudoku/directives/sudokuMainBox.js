'use strict';

import 'angular';
import { moduleName as sudokuSingleBox } from './sudokuSingleBox';

export var moduleName = 'sudokuMainBoxDirective';

angular
  .module(moduleName, [sudokuSingleBox])
  .directive('sudokuMainBox', [function() {
    return {
      restict: 'E',
      templateUrl: 'js/sudoku/directives/templates/sudokuMainBox.html'
    };
  }]);
