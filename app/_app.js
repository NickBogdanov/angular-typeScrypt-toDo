/// <reference path="../typings/browser.d.ts" />
var todo;
(function (todo) {
    'use strict';
    angular
        .module('todo', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({ redirectTo: '/view1' });
        }]);
})(todo || (todo = {}));
//# sourceMappingURL=_app.js.map