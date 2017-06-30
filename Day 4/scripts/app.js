var myApp = angular.module('myApp', ['ngRoute']);

// TODO #2 load ngRoute module
myApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/colors', {
            templateUrl: 'views/colors.html',
            controller: 'ColorsController'
        }).when('/forms', {
            templateUrl: 'views/form.html',
            controller: 'FormsController'
    }).otherwise({
            redirectTo: '/'
        });
    }]);
