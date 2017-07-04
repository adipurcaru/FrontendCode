/**
 * Created by Adrian.Purcaru on 03/07/2017.
 */
hrApp.controller('JobViewController', ['$scope', '$http', '$routeParams', '$location', 'JobService',
    function ($scope, $http, $routeParams, $location, JobService) {

        // Handle a promise
        JobService.findById($routeParams.jobId)
            .then(function (res) {
                $scope.allJobs = res.data;
            }, function (err) {
                console.log("Error at job/findOne: " + err);
            });

        $scope.viewJob = function (jobId) {
            $location.url('/jobView/' + jobId);
        };

        $scope.back = function () {
            $location.url('/employeeList');
        }
    }]);