/* Routes */
(function() {
    'use strict';

    angular
        .module('app.login')
        .config(config);

    //config
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('login', {
            url: '/login',
            views: {
                "default": {
                    templateUrl: "app/login/login.html"
                }
            }
        })
    }
})();
