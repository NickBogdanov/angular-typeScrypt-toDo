/// <reference path="../typings/browser.d.ts" />
'use strict';
angular
    .module('todo', ['ngRoute', 'todo.list']).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/view1' });
    }]);
//# sourceMappingURL=app.js.map