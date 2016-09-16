'use strict';

angular.module('myApp.view1', [ 'ngRoute' ])

.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/objektErfassen', {
		templateUrl : 'objektErfassen/view1.html',
		controller : 'View1Ctrl'
	});
} ])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
	$scope.newItem = {};
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
			})
		}
	}
	
	$scope.onSubmit = function() {
		//$http.post('/items', asd);
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