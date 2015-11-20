'use strict';

import 'angular';

var moduleName = 'sudokuSingleBoxDirective';

var keys = {
  'LEFT': 37,
  'UP': 38,
  'RIGHT': 39,
  'DOWN': 40,
  'BKSP': 8,
  'TAB': 9
};

angular
  .module(moduleName, [])
  .directive('sudokuSingleBox', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'js/sudoku/sudokuSingleBox/template.html',
      scope: {
        'mainIndex': '@',
        'subIndex': '@',
        'onChange': '&'
      },
      link: function(scope, element, attrs) {

        scope.submitChange = function(value) {
          console.log(arguments);
          scope.onChange({value: value, idx:scope.mainIndex, subIdx: scope.subIndex})
        };

        element.on('keydown', function keyHandler(e) {
          var key = e.keyCode;
          var character = String.fromCharCode(key);

          if (character >= 1 && character <= 9 || key === 8) {
            scope.value = '';
          } else if (key !== 9) {
            e.preventDefault();
          }
        });

      }
    };
  }]);