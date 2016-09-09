'use strict';

/**
 * @ngdoc function
 * @name crudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crudApp
 */
angular.module('crudApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('PessoaCtrl', function($http, $scope, $rootScope, $location, $routeParams){
  	$http.get($rootScope.serviceBase + "pessoas").then(function(response){
	  		$scope.pessoas = response.data;
  		});

	if ($routeParams.id != null) {
        // GetOne - Chama Pessoa solicitada
        $http.get($rootScope.serviceBase + "pessoas/" + $routeParams.id).then(function (response) {
            $scope.pessoa = response.data;
        });
    }

  	$scope.cadastrar = function(pessoa){
  		$http.post($rootScope.serviceBase + "pessoas", pessoa).then(function(response){
  			$scope.pessoa = {};
  			$location.path("/pessoas");
  		});
  	};

  	$scope.editar = function(pessoa){
  		$http.put($rootScope.serviceBase + "pessoas", pessoa).then(function(response){
  			$scope.pessoa = response.data;
  			this.getAll();
  		});
  	};

  	$scope.delete = function(pessoa){
  		$http.delete($rootScope.serviceBase + "pessoas/drop/" + pessoa.id).then(function(response){
  			$http.get($rootScope.serviceBase + "pessoas").then(function(response){
	  			$scope.pessoas = response.data;
  			});
  		});
  	}

  });
