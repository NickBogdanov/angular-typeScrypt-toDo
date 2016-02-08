import angular from 'angular';
import 'angular-route';
import {ListConfig} from 'app/scripts/list/list.config';
import {ListController} from 'app/scripts/list/ListController';

'use strict';

angular
	.module('todo', ['ngRoute', 'todo.list'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/view1'});
	}]);

angular
	.module('todo.list', ['ngRoute'])
	.config(ListConfig)
	.controller('ListController', ListController);


