'use strict';

angular.module('myApp.inventar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inventar', {
    templateUrl: 'inventar/inventar.html',
    controller: 'inventar'
  });
}])

.controller('inventar', ['objektService', '$scope', '$location', function(objektService, $scope, $location) {
  $scope.gotoDeckungen = function(objekt) {
    objektService.addObjekt(objekt);
    $location.path('deckung');
  }
  objektService.fetchObjekte().then(function(response) {
    $scope.objekte = response.data;
  })
}]);
