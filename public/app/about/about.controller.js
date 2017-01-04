/* Controllers */
(function() {
    'use strict';

    angular
        .module('app.about')
        .controller('aboutCtrl', aboutCtrl);

    //login
    function aboutCtrl($scope, $filter, $location,dataSvc,$timeout,$window) {
      var vm = this;
      $scope.changeLocation("About");
      //set height banner
      $scope.setHeightForBanner = function () {
        $timeout(function(){
          if ($window.innerWidth < 568) {  
            var heightSet = $window.innerWidth * 3/4;
            angular.element(document.querySelectorAll(".for-banner")).css("height",heightSet + "px");
          }else if($window.innerWidth > 767 && $window.innerWidth < 1024){
            var heightSet = $window.innerWidth * 3/4;
            angular.element(document.querySelectorAll(".for-banner")).css("height",heightSet + "px");
          }else{
            angular.element(document.querySelectorAll(".for-banner")).css("height",576 + "px");
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

      var promise = dataSvc.query('app/data/about.json');
      promise.then(function(data) {
         vm.dataJson = data;
      });
    }
})();
