/* Routes */
(function() {
    'use strict';

    angular
        .module('app.about')
        .config(config);

    //config
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('about', {
            url: '/about',
            views: {
                "default": {
                    templateUrl: "app/about/about.html"
                }
            }
        })
    }
})();
