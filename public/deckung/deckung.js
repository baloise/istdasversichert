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
    [
        '$scope',
        '$location',
        'objektService',
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

          $scope.currentObjekt = objektService.getCurrentObjekt();

          $scope.addToInventory = function(objekt) {
            if (objekt) {
              objektService.postObjektToInventory(objekt).then(
                  function(response) {
                    console.log('added objekt');
                  });
            }
            ;
          };

          $scope.unterdeckungSelected = false;
          $scope.fehlendeDeckungSelected = false;

          $scope.selectDeckung = function(deckung) {
            $scope.unterdeckungSelected = deckung.unterdeckung;
            $scope.fehlendeDeckungSelected = !deckung.gedeckt
                && deckung.versicherbar;
            $scope.selectedDeckung = deckung;
          }
        } ]);
