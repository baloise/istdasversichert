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
					$scope.deckungen = objektService.deckung();
					$scope.icon = function(element) {
						if (element.unterdeckung) 	{ return "error_outline"; }
						if (element.gedeckt) 		{ return "done"; }
						if (!element.versicherbar) 	{ return "not_interested"; }
					};
				} ]);