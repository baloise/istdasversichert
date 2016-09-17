'use strict';

angular.module('myApp.deckung', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/deckung', {
        templateUrl: 'deckung/deckung.html',
        controller: 'deckungCtrl'
    });
}])

.controller(
    'deckungCtrl', ['$scope', '$location', 'objektService',
        function($scope, $location, objektService) {
            $scope.deckungen = objektService.deckung();
            $scope.icon = function(element) {
                if (element.unterdeckung) {
                    return "error_outline";
                }
                if (element.gedeckt) {
                    return "done";
                }
                if (!element.versicherbar) {
                    return "not_interested";
                }
            };
            $scope.iconColor = function(element) {
                if (element.unterdeckung) {
                    return "material-icons icon-yellow";
                }
                if (element.gedeckt) {
                    return "material-icons icon-green";
                } else {
                    return "material-icons icon-red";
                }
                if (!element.versicherbar) {
                    return "material-icons icon-grey";
                }
            }
            $scope.currentObjekt = objektService.getCurrentObjekt();
            $scope.addToInventory = function(objekt) {
                if (objekt) {
                    objekt.inInventory = true;
                    objektService
                        .postObjektToInventory(objekt)
                        .then(function(response) {
                            $('#modal1').openModal();
                        });
                };
            };
        }
    ]);
