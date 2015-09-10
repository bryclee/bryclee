'use strict';

// var IndexModel = require('../models/index');
var posts = [
  {
    title: 'Hello',
    text: 'First post goes here',
    tags: ['Tags', 'Go here']
  },
  {
    title: 'Hello again',
    text: 'Second post goes here',
    tags: []
  }
];

module.exports = function (router) {

    // var model = new IndexModel();

    router.get('/', function (req, res) {


        res.render('index', {posts: posts});


    });

};
