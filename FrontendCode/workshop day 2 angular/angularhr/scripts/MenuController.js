angular.module('hrApp').controller('MenuController',['$scope',function($scope){
    $scope.demoActionList = [
        {
            label: "OtherScope",
            url: "childscope.html"
        },
        {
            label: "OtherScope222222",
            url: "childscope.html"
        }

    ]
}]);
