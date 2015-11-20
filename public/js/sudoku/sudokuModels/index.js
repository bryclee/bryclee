'use strict';

import 'angular';

var moduleName = 'sudokuModel';

angular.module(moduleName, [])
  .factory('sudokuModel', [function() {
    // Returns a constructor for sudoku model, which manages data and validation
    var sudokuModel = function(model) {
      model = model || {};
    };

    return sudokuModel;
  }])
  .factor('sudokuValueModel', [function() {
    // Returns a constructor for 9x9 grid size model
    var valueModel = function() {
      var model = {};

      var createArray = function(n, value) {
        return Array.apply(null, Array(n)).map(function() {
          if (typeof value === 'function') {
            return value();
          }
          return value;
        });
      };

      model.data = createArray(9, createArray.bind(null, 9));

      return model;
    };

    return valueModel;
  }])
