'use strict';

var path = require('path');
var baseDir = process.cwd();

module.exports = function webpack(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-webpack');

	// Options
	return {
        build: {
            context: path.join(baseDir, 'public/js'),
            output: {
                path: path.join(baseDir, '.build/js'),
                filename: '[name].bundle.js'
            },
            entry: {
                app: './sudoku',
                name: './name'
            },

            resolve: {
                alias: {
                    angular: 'angular/angular.min'
                },

                root: path.join(baseDir, 'public', 'js'),
                modulesDirectories: ['public/components'],
                fallback: [ path.join(baseDir, 'public', 'components') ]
            },

            resolveLoader: {
                root: path.join(baseDir, 'node_modules')
            },

            module: {
                loaders: [
                    { test: /[\/]angular\.js&/, loader: 'exports?angular' },
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: /(node_modules|components)/,
                        query: {
                            presets: ['es2015']
                        }
                    }
                ]
            }
        }
	};
};
