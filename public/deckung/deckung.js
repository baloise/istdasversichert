'use strict';

angular.module('myApp.deckung', [ 'ngRoute' ])

.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/deckung', {
		templateUrl : 'deckung/deckung.html',
		controller : 'deckungCtrl'
	});
} ])

.controller(
		'deckungCtrl',
		[ '$scope', '$location', 'objektService',
				function($scope, $location, objektService) {
					// $scope.deckung = objektService.deckung();

				} ]);