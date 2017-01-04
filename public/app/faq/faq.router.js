/* Routes */
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .config(config);

    //config
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('faq', {
            url: '/faq',
            views: {
                "default": {
                    templateUrl: "app/faq/faq.html"
                }
            }
        })
    }
})();
