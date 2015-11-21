'use strict';

import 'angular';

angular.module('sudokuKeycodes', [])
  .factory('sudokuKeycodes', [function() {
    return {
      'LEFT': 37,
      'UP': 38,
      'RIGHT': 39,
      'DOWN': 40,
      'BKSP': 8
    };
  }]);
