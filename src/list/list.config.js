System.register(['./ListController'], function(exports_1) {
    var ListController_1;
    return {
        setters:[
            function (ListController_1_1) {
                ListController_1 = ListController_1_1;
            }],
        execute: function() {
            angular
                .module('todo.list', ['ngRoute'])
                .config(function ($routeProvider) {
                $routeProvider.when('/list', {
                    controller: 'ListController',
                    controllerAs: 'lc',
                    templateUrl: 'scripts/list/list.html'
                });
            })
                .controller('ListController', ListController_1.ListController);
        }
    }
});
//# sourceMappingURL=list.config.js.map