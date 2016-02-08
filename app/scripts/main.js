System.register(['angular', 'angular-route', 'app/scripts/list/list.config', 'app/scripts/list/ListController'], function(exports_1) {
    var angular_1, list_config_1, ListController_1;
    return {
        setters:[
            function (angular_1_1) {
                angular_1 = angular_1_1;
            },
            function (_1) {},
            function (list_config_1_1) {
                list_config_1 = list_config_1_1;
            },
            function (ListController_1_1) {
                ListController_1 = ListController_1_1;
            }],
        execute: function() {
            'use strict';
            angular_1["default"]
                .module('todo', ['ngRoute', 'todo.list'])
                .config(['$routeProvider', function ($routeProvider) {
                    $routeProvider.otherwise({ redirectTo: '/view1' });
                }]);
            angular_1["default"]
                .module('todo.list', ['ngRoute'])
                .config(list_config_1.ListConfig)
                .controller('ListController', ListController_1.ListController);
        }
    }
});
//# sourceMappingURL=main.js.map