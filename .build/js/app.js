'use strict';


requirejs.config({
    paths: {
      js: '.',
      angular: '../components/angular/angular'
    },
    shim: {
      angular: {
        exports: 'angular'
      }
    }
});


require(['angular'], function(angular) {
  console.log('loaded', angular);
});
