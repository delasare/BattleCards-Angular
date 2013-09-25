'use strict';

var app = angular.module('battleCardsApp', ['ui.bootstrap']);
app.url = "http://192.168.47.89:3000/skylanders";
console.log(app.url);

app.config(["$routeProvider", "$httpProvider", function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.contentType = "application/json";
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    delete $httpProvider.defaults.headers.common['Content-Type'];


    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/skylanders', {
         templateUrl: 'views/skylanders.html',
         controller: 'SkylandersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);


