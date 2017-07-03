hrApp.controller('JobListController', ['$scope', '$http', '$location', 'CommonResourcesFactory',
    function ($scope, $http, $location, CommonResourcesFactory) {

        $scope.allJobs = [];

        $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.allJobs = data;
            });


    }]);
