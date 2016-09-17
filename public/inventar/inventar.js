'use strict';

angular.module('myApp.inventar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inventar', {
    templateUrl: 'inventar/inventar.html',
    controller: 'inventar'
  });
}])

.controller('inventar', ['objektService', '$scope', function(objektService, $scope) {
  objektService.fetchObjekte().then(function(response) {
    $scope.objekte = response.data;
  })
}]);
