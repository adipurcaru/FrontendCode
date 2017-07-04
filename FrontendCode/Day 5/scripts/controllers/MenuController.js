hrApp.controller('MenuController', ['$scope', 'EmployeeActionsService','JobsActionsService', function ($scope, EmployeeActionsService, JobsActionsService) {
    /*
    $scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    }];
    */

    $scope.employeeActionList = EmployeeActionsService;
    $scope.jobActionList= JobsActionsService;
    $scope.currentDate = new Date();
}]);
