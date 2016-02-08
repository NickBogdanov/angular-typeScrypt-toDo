import {ListController} from './ListController';

angular
	.module('todo.list', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider.when('/list', {
			controller: 'ListController',
			controllerAs: 'lc',
			templateUrl: 'scripts/list/list.html'
		})
	})
	.controller('ListController', ListController);
