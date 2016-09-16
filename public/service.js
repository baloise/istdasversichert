var myModule = angular.module('myApp', []);
myModule.factory('objektService', function() {

	var currentObjekt = undefined;

	return {
		addObjekt : function(objekt) {
			this.currentObjekt = objekt;
		},
		deckung : function() {
			return {
				home : {
					feuerElementar : {
						gedeckt : true,
						versicherbar : true,
						unterdeckung : 2000
					},
				},
				travel : {
					feuerElementar : {
						gedeckt : true,
						versicherbar : true,
						unterdeckung : 2000
					},
					diebstahl : {
						gedeckt : true,
						versicherbar : true,
						unterdeckung : 2000
					},
					wasser : {
						gedeckt : true,
						versicherbar : true,
						unterdeckung : 2000

					}
				}
			}
		}
	};
});