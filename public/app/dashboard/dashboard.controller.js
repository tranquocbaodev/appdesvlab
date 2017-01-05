/* Controllers */
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('dashboardCtrl', dashboardCtrl);

    //login
    function dashboardCtrl($scope, $filter, $location,dataSvc,$timeout,$window) {
        var vm = this;
        $scope.setHeightForBanner = function () {
          $timeout(function(){
            if ($window.innerWidth < 568 || ($window.innerWidth > 767 && $window.innerWidth < 1024)) {  
              var heightSet = $window.innerWidth * 3/4;
              angular.element(document.querySelectorAll(".for-banner")).css("height",heightSet + "px");
            }else if($window.innerWidth >=1280){
              angular.element(document.querySelectorAll(".for-banner")).css("height",576 + "px");
            }else{
              angular.element(document.querySelectorAll(".for-banner")).css("height",$window.innerHeight + "px");
            }
          }, 100);
        }
        $scope.setHeightForBanner();

        angular.element($window).bind('orientationchange', function () {
          $scope.setHeightForBanner();
        });

        angular.element($window).bind('resize', function () {
          $scope.setHeightForBanner();
        });

        //get data Json
        var promise = dataSvc.query('app/data/dashboard.json');
        promise.then(function(data) {
          vm.dataJson = data;
        });
        //get data Json
        var promise = dataSvc.query('app/data/products.json');
        promise.then(function(data) {
          vm.productsJson = data;
        });
    }
})();
