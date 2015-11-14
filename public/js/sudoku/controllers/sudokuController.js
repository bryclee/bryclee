'use strict';

import 'angular';

export var moduleName = 'sudokuControllerModule';

angular
  .module(moduleName, [])
  .controller('sudokuController', ['$scope',
    function($scope) {
      console.log('sudokuController');
  }]);
