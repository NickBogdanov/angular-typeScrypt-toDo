System.register([], function(exports_1) {
    var ListConfig;
    return {
        setters:[],
        execute: function() {
            ListConfig = (function () {
                function ListConfig($routeProvider) {
                    $routeProvider.when('/list', {
                        controller: 'ListController',
                        controllerAs: 'lc',
                        templateUrl: 'scripts/list/list.html'
                    });
                }
                return ListConfig;
            })();
            exports_1("ListConfig", ListConfig);
        }
    }
});
//angular
//	.module('todo.list', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
//	$routeProvider
//		.when('/list', {
//			controller: 'ListController',
//			controllerAs: 'lc',
//			templateUrl: 'list/list.html'
//		})
//}]);
//# sourceMappingURL=list.config.js.map