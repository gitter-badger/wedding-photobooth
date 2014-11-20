(function(angular) {
  'use strict';

  /**
   * @description
   * Configuration for app,
   */
  var config = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('app', {
        'abstract': true,
        templateUrl: 'html/frame.html'
      })
      .state('app.main', {
        url: '/',
        views: {
          'contents': {
            templateUrl: 'html/main.html',
            controller: 'MainCtrl',
            controllerAs: 'ctrl'
          }
        }
      });
  };

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  /**
   * @ngdoc module
   * @name app
   * @description
   * A Root Module.
   */
  angular.module('app', [
    'ui.router',
    'ngSanitize',
    'app.controllers',
    'app.services',
    'app.directives',
    'app.filters'
  ]).config(config);

})(angular);
