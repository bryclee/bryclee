'use strict';

require.config({
  baseUrl: 'js/sudoku'
});

require(['angular'], function(angular) {

  require([
    'controllers/sudokuController',
    'directives/sudokuMainBox'
  ], function(sudokuController, sudokuMainBox) {

    for (var i = 0; i < arguments.length; i++) {
      console.log('loaded ', i, arguments[i]);
    }

    angular.bootstrap(document, Array.prototype.slice.call(arguments));

  });

});
