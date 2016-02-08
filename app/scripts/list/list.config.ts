export class ListConfig {
	'use strict';
	constructor($routeProvider) {
		$routeProvider.when('/list', {
			controller: 'ListController',
			controllerAs: 'lc',
			templateUrl: 'scripts/list/list.html'
		})
	}

}


//angular
//	.module('todo.list', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
//	$routeProvider
//		.when('/list', {
//			controller: 'ListController',
//			controllerAs: 'lc',
//			templateUrl: 'list/list.html'
//		})
//}]);
