'use strict';

// var IndexModel = require('../models/index');
var posts = [
  {
    title: 'Hello',
    text: 'This is my first post.',
    tags: ['Fish', 'Make a wish']
  }
];

module.exports = function (router) {

    // var model = new IndexModel();

    router.get('/', function (req, res) {


        res.render('index', {posts: posts});


    });

};
