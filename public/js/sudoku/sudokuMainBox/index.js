'use strict';

import 'angular';
import 'sudoku/sudokuSingleBox/index';
import 'sudoku/sudokuModel/index';


angular
  .module('sudokuMainBox', [
    'sudokuSingleBox',
    'sudokuModel'
  ])
  .directive('sudokuMainBox', [
    '$timeout',
    'sudokuModel',
    function($timeout, SudokuModel) {

      return {
        restict: 'E',
        templateUrl: 'js/sudoku/sudokuMainBox/template.html',
        link: function(scope, element, attrs) {
          var sudokuElements = new SudokuModel();

          scope.mainSelect = null;
          scope.subSelect = null;

          scope.boxChange = function(value, idx, subIdx) {
            console.log('validate() arguments: ', arguments);
            scope.mainSelect = idx;
            scope.subSelect = subIdx;
          };

          $timeout(() => {
            scope.$apply(() => { scope.boxChange(1, 3, 3) });
          }, 5000);
        }

      };
    }
  ]);
