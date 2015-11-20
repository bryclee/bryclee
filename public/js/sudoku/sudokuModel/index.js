'use strict';

import 'angular';


function createArray(n, value) {
  return Array.apply(null, Array(n)).map(() => {
    if (typeof value === 'function') {
      return value();
    }
    return value;
  });
};


angular.module('sudokuModel', [])
  .factory('sudokuModel', [function() {
    // Returns a constructor for sudoku model, which manages data and validation

    var SudokuModel = function() {
      var model = Object.create(SudokuModel.prototype);

      model.init();
      return model;
    };

    SudokuModel.prototype.init = function() {
      this.values = createArray(9, () => {
        return createArray(9, 0);
      });
    };

    SudokuModel.prototype.update = function() {

    };

    SudokuModel.prototype.update = function() {

    };


    return SudokuModel;
  }]);
