'use strict';

angular.module('myApp.inventar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inventar', {
    templateUrl: 'inventar/inventar.html',
    controller: 'inventar'
  });
}])

.controller('inventar', [function() {
    $.get("http://192.168.1.124:3000/items/2", function(data) {
        $("#card1").attr("src", data.image);
    })
}]);