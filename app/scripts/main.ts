import angular from 'angular';
import 'angular-route';
import 'todoListModule';

'use strict';

angular
	.module('todo', ['ngRoute', 'todo.list'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/view1'});
	}]);




