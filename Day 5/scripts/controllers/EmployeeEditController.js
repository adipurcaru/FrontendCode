hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory', 'EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory, EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        $scope.getDepartments = function () {
            $http({url: CommonResourcesFactory.findAllDepartmentsUrl, method: 'GET'})
                .success(function (data) {
                    $scope.departments = data;
                });
        };
        $scope.getManagers = function () {
            $http({url: CommonResourcesFactory.findAllEmployeesUrl, method: 'GET'})
                .success(function (data) {
                    $scope.managers = data;
                });
        };

        $scope.getJobs = function () {
            $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
                .success(function (data) {
                    $scope.jobs = data;
                });
        };

        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

    $scope.getDepartments();
    $scope.getJobs();
    $scope.getManagers();
        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);