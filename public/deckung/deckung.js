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
              if (element.versicherbar) {
                  if (element.gedeckt) {
                      if (element.unterdeckung) {
                          return "error_outline";
                      }
                      return "done";
                  } else {
                      return "error_outline";
                  }
              } else {
                  return "not_interested";
              }
          };
          $scope.iconColor = function(element) {
              if (element.selected) {
                return "material-icons icon-blue";
              }
              if (element.versicherbar) {
                  if (element.gedeckt) {
                      if (element.unterdeckung) {
                          return "material-icons icon-yellow";
                      }
                      return "material-icons icon-green";
                  } else {
                      return "material-icons icon-red";
                  }
              } else {
                  return "material-icons icon-grey";
              }
          };
          $scope.currentObjekt = objektService.getCurrentObjekt();
          $scope.addToInventory = function(objekt) {
            if (objekt) {
              objekt.inInventory = true;
              objektService.postObjektToInventory(objekt).then(
                  function(response) {
                    $('#modal1').openModal();
                  });
            }
            ;
          };

          $scope.selectedDeckungen = [];

          $scope.nichtgedeckt = function(deckung) {
            return (deckung.versichbar && !deckung.gedeckt);
          }

          $scope.unterdeckung = function(deckung) {
            return (deckung.gedeckt && deckung.unterdeckung < 0);
          }

          $scope.selectDeckung = function(deckung) {
            if (!((deckung.versichbar && !deckung.gedeckt) || (deckung.gedeckt && deckung.unterdeckung < 0))) {
              return;
            }

            deckung.selected = !deckung.selected;
            if (deckung.selected) {
              $scope.selectedDeckungen.push(deckung);
            } else {
              var i = $scope.selectedDeckungen.indexOf(deckung);
              if (i >= 0) {
                $scope.selectedDeckungen.splice(i, 1);
              }
            }
          }
        } ]);
