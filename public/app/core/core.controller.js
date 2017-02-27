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
    }
})();
