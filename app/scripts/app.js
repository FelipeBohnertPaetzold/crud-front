'use strict';

/**
 * @ngdoc overview
 * @name crudApp
 * @description
 * # crudApp
 *
 * Main module of the application.
 */
angular
  .module('crudApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .run(function ($rootScope, $location){
    $rootScope.serviceBase = "http://localhost:9999/api/";
    $rootScope.headers = {'Content-Type': 'application/json;charset=utf-8;'};
    $rootScope.navigateTo = function (url) {
        $location.path(url);
    };
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      })
      .when('/pessoas',{
        templateUrl: 'views/listar-pessoas.html',
        controller: 'PessoaCtrl',
        controllerAs: 'main'
      })
      .when('/pessoas/new', {
        templateUrl: 'views/form-pessoa.html',
        controller: 'PessoaCtrl',
        controllerAs: 'main'
      })
      .when('/pessoas/edit/:id',{
        templateUrl: 'views/editar-pessoa.html',
        controller: 'PessoaCtrl',
        controllerAs: 'main'
      });
  });
