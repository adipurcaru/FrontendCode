/**
 * Created by Adrian.Purcaru on 03/07/2017.
 */
hrApp.service('EmployeeAddService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
    return {
        getManagers: function () {
            return $http.get(CommonResourcesFactory.findAllEmployeesUrl);
        }}}]
);