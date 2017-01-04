/* Routes */
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .config(config);

    //config
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('contact', {
            url: '/contact',
            views: {
                "default": {
                    templateUrl: "app/contact/contact.html"
                }
            }
        })
    }
})();
