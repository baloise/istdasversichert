var myModule = angular.module('myApp');
myModule.factory('objektService', function() {

	var currentObjekt = undefined;

	return {
		addObjekt : function(objekt) {
			this.currentObjekt = objekt;
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