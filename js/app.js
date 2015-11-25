(function() {
  'use strict';

  angular
    .module('shopper', [
      'ngRoute',
      'underscore',
      'moment'
    ])

    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '../views/customerHome.html',
          controller: 'MainController'
        })
        .when('/admin', {
          templateUrl: '../views/adminHome.html',
          controller: 'AdminController'
        })
        .when('/cart', {
          templateUrl: '../views/shoppingCart.html',
          controller: 'CartController'
        })
        .when('/404', {
          templateUrl: '../views/404.html',
          controller: 'MainController'
        })
        .otherwise({redirectTo: '/404'})
    });

angular
  .module('underscore', [])
  .factory('_', function ($window) {
    return $window._;
  });
angular
  .module('moment', [])
  .factory('moment', function ($window) {
    return $window.moment;
  });



}());
