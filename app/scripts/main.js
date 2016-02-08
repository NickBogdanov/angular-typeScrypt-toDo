System.register(['angular', 'angular-route', 'todoListModule'], function(exports_1) {
    var angular_1;
    return {
        setters:[
            function (angular_1_1) {
                angular_1 = angular_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            'use strict';
            angular_1["default"]
                .module('todo', ['ngRoute', 'todo.list'])
                .config(['$routeProvider', function ($routeProvider) {
                    $routeProvider.otherwise({ redirectTo: '/view1' });
                }]);
        }
    }
});
//# sourceMappingURL=main.js.map