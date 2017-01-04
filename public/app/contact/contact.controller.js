/* Controllers */
(function() {
    'use strict';

    angular
        .module('app.contact')
        .controller('contactCtrl', contactCtrl);

    //login
    function contactCtrl($scope, $filter, $location,dataSvc,$timeout,$window) {
       	var vm = this;
        $scope.changeLocation("Contact");

        $scope.setHeightForBanner = function () {
          $timeout(function(){
           if ($window.innerWidth < 568) {  
             var heightSet = $window.innerWidth * 3/4;
             angular.element(document.querySelectorAll(".for-banner")).css("height",heightSet + "px");
           }else if($window.innerWidth > 767 && $window.innerWidth < 1024){
             var heightSet = $window.innerWidth * 3/4;
             angular.element(document.querySelectorAll(".for-banner")).css("height",heightSet + "px");
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
        
        var promise = dataSvc.query('app/data/contact.json');
        promise.then(function(data) {
          vm.dataJson = data;
          $scope.initMap();
        });

        $scope.initMap = function() {
          var companyLocation = {lat: vm.dataJson.latitude, lng: vm.dataJson.longitude};
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: companyLocation
          });
          var marker = new google.maps.Marker({
            position: companyLocation,
            icon: "i/mylocation.png",
            map: map
          });
        }
    }
})();
