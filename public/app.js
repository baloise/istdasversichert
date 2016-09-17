'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.objektErfassen',
  'myApp.inventar',
  'myApp.deckung'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/objektErfassen'});
}])
.controller('NavbarController', ['$scope', '$location', function($scope, $location) {
  $scope.activeClass = function(path) {
    return $location.path() === '/' + path ? 'active' : '';
  }
}]);
