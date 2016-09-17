'use strict';

angular.module('myApp.inventar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inventar', {
    templateUrl: 'inventar/inventar.html',
    controller: 'inventar'
  });
}])

.controller('inventar', ['objektService', function(objektService) {
  objektService.fetchObjekte().then(function(response) {
    $("#card1").attr("src", response.data[0].image)
  })
}]);
