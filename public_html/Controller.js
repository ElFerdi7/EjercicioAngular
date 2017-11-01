/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/*var miModulo = angular.module("angular1", []).controller(
        'MiControlador', ['$scope', '$http',
            function ($scope, $http) {
                $http({
                    method: 'GET',
                    url: 'http://localhost:8081/ejercicioInterfaces/json?ob=producto&op=getpage&np=1&rpp=10'
                }).then(function successCallback(response) {
                    if (response.data.status == 200) {
                        $scope.alberto = response.data.json;
                    } else {
                        $scope.error_angular = "Error en la recepción de datos";
                    }
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            }])*/

var miModulo = angular.module("angular1", []);
miModulo.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }]);
miModulo.controller('MiControlador', ['$scope', '$http',
    function ($scope, $http) {
        $scope.mostrarProducto = false;
        $scope.mostrarTabla = false;
        $scope.idproducto = 1;
        $scope.pagina = 1;
        $scope.traerProducto = function () {
            if ($scope.idproducto > 0) {
                $http({
                    method: 'GET',
                    url: 'http://localhost:8081/ejercicioInterfaces/json?ob=producto&op=get&id=' + $scope.idproducto
                }).then(function successCallback(response) {
                    if (response.data.status == 200) {
                        $scope.oProducto = response.data.json;
                        
                    } else {
                        $scope.error_angular = "Error en la recepción de datos";
                    }
                }, function errorCallback(response) {
                    $scope.error_angular = "Error en la recepción de datos";
                });
            }
        }
        $scope.traerTabla = function () {
            $http({
                method: 'GET',
                url: 'http://localhost:8081/ejercicioInterfaces/json?ob=producto&op=getpage&rpp=3&np=' + $scope.pagina
            }).then(function successCallback(response) {
                if (response.data.status == 200) {
                    $scope.arrProductos = response.data.json;
                } else {
                    $scope.error_angular = "Error en la recepción de datos";
                }
            }, function errorCallback(response) {
                $scope.error_angular = "Error en la recepción de datos";
            });
 
        }
    }])
  