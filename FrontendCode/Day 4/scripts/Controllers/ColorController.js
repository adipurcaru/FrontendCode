/**
 * Created by Adrian.Purcaru on 30/06/2017.
 */
angular.module('myApp').controller('ColorsController',['$rootScope', '$scope',function($rootScope, $scope) {
    $scope.colors = [
        {
            "text": "muted",
            "class": "text-muted",
            'type': 'strong'
        },
        {
            "text": "primary",
            "class": "text-primary",
            'type': 'strong'
        },
        {
            "text": "success",
            "class": "text-success",
            'type': 'strong'
        },
        {
            "text": "info",
            "class": "text-info",
            'type': 'boring'
        },
        {
            "text": "warning",
            "class": "text-warning",
            'type': 'boring'
        },
        {
            "text": "danger",
            "class": "text-danger",
            'type': 'boring'
        }
    ];

    $scope.changeColor = function (){
        $scope.selected3 = $scope.selected.text;
        // $scope.ceva = $scope.selected.class;
    }

}])