/* Controllers */
(function() {
  'use strict';
  angular
    .module('app.core')
    .controller('Core', Core);

  //core 
  function Core($scope, dataSvc,$timeout,$window,$rootScope,$location,$filter) {
      var vmc = this;
      $scope.locationName = "Dashboard";

      $scope.hiddenAllToolTip = function () {
          angular.element(document.querySelectorAll(".main-navigation")).addClass("hide");
          angular.element(document.querySelectorAll(".main-search")).addClass("hide");
          angular.element(document.querySelectorAll(".overlay")).addClass("hide");
          angular.element(document.querySelectorAll("body")).removeClass("lock-scroll");
      }

      $scope.goDashboard =function () {
          $scope.hiddenAllToolTip();
          $scope.locationName = "Dashboard";
          $location.path('/dashboard');
      }

      $scope.goAbout =function () {
          $scope.hiddenAllToolTip();
          $scope.locationName = "About";
          $location.path('/about');
      }

      $scope.goContact =function () {
          $scope.hiddenAllToolTip();
          $scope.locationName = "Contact";
          $location.path('/contact');
      }

      $scope.goFAQ =function () {
          $scope.hiddenAllToolTip();
          $scope.locationName = "FAQ";
          $location.path('/faq');
      }

      $scope.changeLocation = function (title) {
        $scope.locationName = title;
      }

      vmc.scrollPos = 0;

      window.onscroll = angular.bind(this, function(){
        vmc.scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0;
        $scope.$digest();
        if (vmc.scrollPos >= ($window.innerHeight)) {
          angular.element(document.querySelectorAll(".scroll-top")).removeClass("hide");
        }else{
          angular.element(document.querySelectorAll(".scroll-top")).addClass("hide");
        }
      });
    }
})();
