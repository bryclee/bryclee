'use strict';

import 'angular';
import 'sudoku/sudokuSingleBox/index';
import 'sudoku/sudokuModel/index';
import 'sudoku/sudokuKeycodes/index';


angular
  .module('sudokuMainBox', [
    'sudokuSingleBox',
    'sudokuModel',
    'sudokuKeycodes'
  ])
  .directive('sudokuMainBox', [
    'sudokuModel',
    'sudokuKeycodes',
    function(SudokuModel, KEYS) {

      return {
        restict: 'E',
        templateUrl: 'js/sudoku/sudokuMainBox/template.html',
        link: function(scope, element, attrs) {
          var sudokuElements = new SudokuModel();

          scope.mainSelect = null;
          scope.subSelect = null;

          function setSelect(main, sub) {
            scope.mainSelect = main;
            scope.subSelect = sub;
          }

          scope.navigator = function(dir, main, sub) {
            switch (dir) {
              case KEYS.LEFT:
                if (sub % 3 === 1) {
                  if (main % 3 === 1) {
                    return;
                  } else {
                    setSelect(main - 1, sub + 2);
                  }
                } else {
                  setSelect(main, sub - 1);
                }
                break;
              case KEYS.UP:
                if (Math.ceil(sub / 3) === 1) {
                  if (Math.ceil(main / 3) === 1) {
                    return;
                  } else {
                    setSelect(main - 3, sub + 6);
                  }
                } else {
                  setSelect(main, sub - 3);
                }
                break;
              case KEYS.RIGHT:
                if (sub % 3 === 0) {
                  if (main % 3 === 0) {
                    return;
                  } else {
                    setSelect(main + 1, sub - 2);
                  }
                } else {
                  setSelect(main, sub + 1);
                }
                break;
              case KEYS.DOWN:
                if (Math.ceil(sub / 3) === 3) {
                  if (Math.ceil(main / 3) === 3) {
                    return;
                  } else {
                    setSelect(main + 3, sub - 6);
                  }
                } else {
                  setSelect(main, sub + 3);
                }
                break;
            }
          };

          scope.updateValue = function(value, idx, subIdx) {
            scope.mainSelect = idx;
            scope.subSelect = subIdx;
          };
        }

      };
    }
  ]);


function isLeftEdge() {

}
