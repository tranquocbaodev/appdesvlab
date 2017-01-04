/* Controllers */
(function() {
    'use strict';

    angular
        .module('app.faq')
        .controller('faqCtrl', faqCtrl);

    //login
    function faqCtrl($scope, $filter, $location,dataSvc,$timeout,$window) {
        var vm = this;
        $scope.changeLocation("FAQ");
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
       //get data Json
       var promise = dataSvc.query('app/data/faq.json');
       promise.then(function(data) {
          vm.dataJson = data;
       });

       //click show iem faq
       $scope.showFAQItem = function (event) {
        if (angular.element(event.currentTarget).parent().parent().hasClass('active')) {
          angular.element(event.currentTarget).parent().parent().removeClass('active');
        }else{
          angular.element(event.currentTarget).parent().parent().addClass('active');
        }
       }

    }
})();
