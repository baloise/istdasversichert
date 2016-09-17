var myModule = angular.module('myApp');
myModule.factory('objektService', function($http) {

	var host = 'http://localhost:3000';
	var currentObjekt = undefined;

	return {
		addObjekt : function(objekt) {
			currentObjekt = objekt;
		},
		getCurrentObjekt: function() {
			return currentObjekt;
		},
		postObjektToInventory: function(objekt) {
			return $http.post(host + '/items', objekt || currentObjekt);
		},
		fetchObjekte: function() {
			return $http.get(host + '/items');
		},
		deckung : function() {
			return {
				feuerElementar : {
					name : "Feuer/Elementar",
					home : {
						gedeckt : true,
						versicherbar : true,
						unterdeckung : false
					},
					travel : {
						gedeckt : true,
						versicherbar : true,
						unterdeckung : 2000
					}
				},
				diebstahl : {
					name : "Diebstahl",
					home : {
						gedeckt : true,
						versicherbar : true,
						unterdeckung : 2000
					},
					travel : {
						gedeckt : true,
						versicherbar : true,
						unterdeckung : 2000
					}
				},
				wasser : {
					name : "Wasserschaden",
					home : {
						gedeckt : true,
						versicherbar : true,
						unterdeckung : 2000
					},
					travel : {
						gedeckt : true,
						versicherbar : true,
						unterdeckung : 2000
					}
				},
			}
		}
	};
});
