'use strict';

define([
  'angular'
], function(angular) {

  var moduleName = 'sudokuSingleBoxDirective';

  angular
    .module(moduleName, [])
    .directive('sudokuSingleBox', [function() {
      return {
        restrict: 'E',
        replace: true,
        template: '<input class="sudoku-single-box"/>',
        link: function(scope, element, attrs) {

          element.on('keydown', function(e) {
            var key = e.keyCode;
            var character = String.fromCharCode(key);

            console.log(character, key);

            if (character >= 1 && character <= 9 || key === 8) {
              element.val('');
            } else if (key !== 9) {
              e.preventDefault();
            }
          });

        }
      };
    }]);

  return moduleName;

});
