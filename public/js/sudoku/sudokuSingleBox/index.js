'use strict';

import 'angular';
import 'sudoku/sudokuFocus/index';
import 'sudoku/sudokuKeycodes/index';

angular
  .module('sudokuSingleBox', [
    'sudokuFocus',
    'sudokuKeycodes'
  ])
  .directive('sudokuSingleBox', [
    'sudokuKeycodes',
    function(KEYS) {

      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'js/sudoku/sudokuSingleBox/template.html',
        scope: {
          'mainIndex': '@',
          'subIndex': '@',
          'onChange': '&',
          'navigate': '&',
          'focused': '='
        },
        link: function(scope, element, attrs) {
          var navigate = scope.navigate;

          function updateValue(value) {
            scope.onChange({value: value, idx:scope.mainIndex, subIdx: scope.subIndex})
          };

          scope.keyHandler = function(e) {
            var key = e.keyCode;
            var main = parseInt(scope.mainIndex);
            var sub = parseInt(scope.subIndex);

            if (key >= 48 && key <= 58) {
              scope.value = key - 48;
              updateValue(scope.value);
              e.preventDefault();
              return;
            }
            switch (key) {
              case KEYS.LEFT:
              case KEYS.UP:
              case KEYS.RIGHT:
              case KEYS.DOWN:
                navigate({dir:key, main:main, sub:sub});
                break;
              case KEYS.BKSP:
                scope.value = '';
                break;
              default:
                return;
            }
            e.preventDefault();
          };
        }
      };
    }]);
