/**
 * Created by Adrian.Purcaru on 30/06/2017.
 */
angular.module('myApp').controller('FormsController',['$rootScope', '$scope',function($rootScope, $scope) {

    $scope.submitForm = function (){
        if($scope.text){
            alert("you have entered: " + $scope.text);
        }
    }
}])