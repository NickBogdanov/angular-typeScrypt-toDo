/// <reference path="../../typings/browser.d.ts" />
'use strict';
angular
    .module('todo.list', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/list', {
            controller: 'ListController',
            controllerAs: 'lc',
            templateUrl: 'list/list.html'
        });
    }]);
//# sourceMappingURL=list.config.js.map