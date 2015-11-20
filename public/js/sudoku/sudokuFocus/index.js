'use strict';

import 'angular';

angular.module('sudokuFocusDirective', [])
  .directive('sudokuFocus', [function() {
    // Focus directive
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        scope.$watch(attrs.sudokuFocus, function(val) {
          console.log(element, angular.isDefined(element.on));
          if (angular.isDefined(val) && val) {
            element.focus();
          }
        })
      }
    };
  }]);
