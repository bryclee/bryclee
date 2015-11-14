'use strict';

import 'angular';

import {moduleName as sudokuController} from 'sudoku/controllers/sudokuController';
import {moduleName as sudokuMainBoxDirective} from 'sudoku/directives/sudokuMainBox';

console.log(sudokuController, sudokuMainBoxDirective);

angular.bootstrap(document, [sudokuController, sudokuMainBoxDirective]);
