/// <reference path="../typings/browser.d.ts" />

module todo {
	'use strict';
	angular
		.module('todo', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/view1'});
	}]);
}