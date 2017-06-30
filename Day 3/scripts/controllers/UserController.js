/**
 * Created by adrian.purcaru on 29/06/2017.
 */
hrApp.controller('UserController', ['$scope', '$http', '$routeParams', '$location','commonResourcesFactory','userList',
    function($scope, $http, $routeParams, $location, commonResourcesFactory, $userList) {

    $scope.user = {};
    $scope.users=[];

        $scope.back = function() {
            // TODO back to Employee List page
            $location.url('/main');

        }

        $scope.reset = function(){
            $scope.user.firstName= "";
            $scope.user.lastName = "";
            $scope.user.email ="";
            $scope.user.phone="";
        }

        $scope.save = function(){
           // var obj = {
           //      firstName: $scope.user.firstName,
           //      lastName: $scope.user.lastName,
           //      email: $scope.user.email,
           //      phone: $scope.user.phone
           //  }

            $userList.push(angular.copy($scope.user));
            $scope.users = $userList;

            $scope.reset();
        }

        $scope.showOrHide = function() {
            $scope.showHide = !$scope.showHide;
        }
    }]);