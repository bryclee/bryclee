'use strict';


requirejs.config({
    baseUrl: '../components',
    paths: {
      js: '.'
    }
});


require(['js/name.js'], function () {

    var app = {
        initialize: function () {
          var banner = new window.WordBanner(document.querySelector('#header-banner'));
          banner.wordList = [
            'bl', 'bryclee', 'bryan c lee', 'cats are cool', 'so are dogs'
          ];
          banner.rotateWords(2000);
        }
    };

    app.initialize();

});
