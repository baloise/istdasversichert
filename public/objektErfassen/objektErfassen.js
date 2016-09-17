'use strict';

angular.module('myApp.objektErfassen', [ 'ngRoute' ])

.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/objektErfassen', {
		templateUrl : 'objektErfassen/objektErfassen.html',
		controller : 'objektErfassen'
	});
} ])

.controller('objektErfassen', ['$scope', '$location', 'objektService', function($scope, $location, objektService) {
	$scope.newItem = {
			mobile: false
	};
	$scope.setMobile = function(elment) {
			console.log(element);
			$scope.newItem.mobile = element.checked;
	}

	$scope.setFile = function(element) {
			console.log(element);
			var reader = new FileReader();
			var file = element.files[0];
			if (file) {
					console.log("has file");
					reader.readAsDataURL(file);
					reader.addEventListener("loadend", function(r) {
							// console.log(r.target.result);
							$scope.newItem.image = r.target.result;
							$scope.$digest();
							$("#category-input").focus();
					})
			}
	}

	$('.datepicker').pickadate({
			selectMonths: true, // Creates a dropdown to control month
			selectYears: 5 // Creates a dropdown of 15 years to control year
	});
	$scope.autocomplete = {data: {}};
	$scope.keys = Object.keys(objektService.kategorien());

	for (var i = 0; i < $scope.keys.length; i++) {
		var key = $scope.keys[i];
		$scope.autocomplete.data[key] = null;
	};


	$('input.autocomplete').autocomplete($scope.autocomplete);

	$scope.onSubmit = function() {
			$scope.newItem.category = $('#category-input').val();
			$scope.newItem.buyDate = $('.datepicker').val();
			objektService.addObjekt($scope.newItem);
			$location.path('/deckung');
	}

//	$("#form").submit(function(e) {
//		var data = {};
//		data.image = image;
//		data.description = "test";
//		$.post("http://192.168.1.124:3000/items", data, null, "json");
//	})
//
//	$("#category-input").autocomplete({
//		data : {
//			"Apple" : null,
//			"Microsoft" : null,
//			"Google" : 'http://placehold.it/250x250'
//		}
//	});
} ]);
