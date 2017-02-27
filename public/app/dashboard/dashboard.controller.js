/* Controllers */
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('dashboardCtrl', dashboardCtrl);

    //login
    function dashboardCtrl($scope, $filter, $location,dataSvc,$timeout,$window) {
      var vm = this;
      $scope.setHeight = function () {
      	$timeout(function(){
      		angular.element(document.querySelectorAll(".ideal-from-idea")).css('height', $window.innerHeight+"px");
      		angular.element(document.querySelectorAll(".sir-desvlab")).css('height', $window.innerHeight+"px");
      		angular.element(document.querySelectorAll(".service-desvlab")).css('height', $window.innerHeight+"px");
      		angular.element(document.querySelectorAll(".project-desvlab")).css('height', $window.innerHeight+"px");
      		angular.element(document.querySelectorAll(".contact-desvlab")).css('height', $window.innerHeight+"px");
      		//set height for group
          var height1 = $window.innerHeight * 818/1080;;
      		angular.element(document.querySelectorAll(".white-div-service ul li h2")).css('font-size',"1.5625vw");
      		angular.element(document.querySelectorAll(".white-div-service ul li p")).css('font-size',(21.54/19.2)+"vw");
      		angular.element(document.querySelectorAll(".service-desvlab .left-service .title-service .text-detail")).css('font-size',"0.9375vw");
          if ((height1*30/818) < (1.5625*$window.innerWidth/100)) {
            angular.element(document.querySelectorAll(".white-div-service ul li h2")).css('font-size', height1*30/818 +"px");
          }
          if ((height1*18/818) < (0.9375*$window.innerWidth/100)) {
            angular.element(document.querySelectorAll(".white-div-service ul li p")).css('font-size', height1*21.54/818 +"px");
            angular.element(document.querySelectorAll(".service-desvlab .left-service .title-service .text-detail")).css('font-size', height1*18/818 +"px");
          }
      		angular.element(document.querySelectorAll(".logo-company")).css('height', height1*283/818 +"px");
      		angular.element(document.querySelectorAll(".logo-company")).css('top', "calc( 50% - "+(height1*283/1630)+"px)");
      		angular.element(document.querySelectorAll(".service-desvlab .left-service .title-service")).css("padding-top",(height1*268)/818+"px");
      		angular.element(document.querySelectorAll(".white-div-service")).css('top', ($window.innerHeight-height1)/2 +"px");
      		angular.element(document.querySelectorAll(".white-div-service")).css('height', height1+"px");
      		angular.element(document.querySelectorAll(".white-div-service ul li")).css('padding-top', (height1*152/818)+"px");
      		angular.element(document.querySelectorAll(".white-div-service ul li img")).css('top', (height1*47/818)+"px");
          angular.element(document.querySelectorAll(".white-div-service ul li .detail-item")).css('margin-top', height1*44/818 +"px");
          //================================================
          //member
          angular.element(document.querySelectorAll(".sir-desvlab .cover-sir.animated")).css('height', $window.innerHeight*486/1080 +"px");
          angular.element(document.querySelectorAll(".sir-desvlab .cover-sir.animated")).css('top', $window.innerHeight*208/1080 +"px");
          angular.element(document.querySelectorAll(".sir-desvlab .cover-sir.animated .cover-img .green-right")).css('height', $window.innerHeight*310/1080 +"px");
          angular.element(document.querySelectorAll(".sir-desvlab .cover-sir.animated .cover-img .green-right")).css('top', $window.innerHeight*88/1080 +"px");
          angular.element(document.querySelectorAll(".sir-desvlab .cover-sir .img-div.pink .before-div")).css('height', $window.innerHeight*310/1080 +"px");
          angular.element(document.querySelectorAll(".sir-desvlab .cover-sir .img-div.pink .before-div")).css('top', $window.innerHeight*88/1080 +"px");

          angular.element(document.querySelectorAll(".sir-desvlab .cover-sir.animated .cover-img .green-left")).css('height', $window.innerHeight*310/1080 +"px");
          angular.element(document.querySelectorAll(".sir-desvlab .cover-sir.animated .cover-img .green-left")).css('top', $window.innerHeight*88/1080 +"px");



          //font size
          // angular.element(document.querySelectorAll(".cover-text-big .img-div .cover-text .name-sir")).css('font-size', $window.innerHeight*32/1080 +"px");
          // angular.element(document.querySelectorAll(".cover-text-big .img-div .cover-text .position-sir")).css('font-size', $window.innerHeight*26/1080 +"px");
          // angular.element(document.querySelectorAll(".cover-text-big .img-div .cover-text .detail-text")).css('font-size', $window.innerHeight*26/1080 +"px");

          //tranform image
          angular.element(document.querySelectorAll(".group-tranform .img-div")).css('transform', "skewX("+$window.innerWidth*18/1920+"deg)");
          angular.element(document.querySelectorAll(".group-tranform .img-div")).css('-webkit-transform', "skewX("+$window.innerWidth*18/1920+"deg)");
          angular.element(document.querySelectorAll(".group-tranform .img-div")).css('-ms-transform', "skewX("+$window.innerWidth*18/1920+"deg)");

          angular.element(document.querySelectorAll(".group-tranform .img-div img")).css('transform', "skewX(-"+$window.innerWidth*18/1920+"deg)");
          angular.element(document.querySelectorAll(".group-tranform .img-div img")).css('-webkit-transform', "skewX(-"+$window.innerWidth*18/1920+"deg)");
          angular.element(document.querySelectorAll(".group-tranform .img-div img")).css('-ms-transform', "skewX(-"+$window.innerWidth*18/1920+"deg)");

          //Group tranform
          // var calHeigh = ;
          // angular.element(document.querySelectorAll(".group-tranform")).css('padding-right', (81*($window.innerWidth/$window.innerHeight))/(16/9) +"px");

          angular.element(document.querySelectorAll(".group-tranform .img-div.pink .before-div")).css('transform', "skewX(-"+$window.innerWidth*18/1920+"deg)");
          angular.element(document.querySelectorAll(".group-tranform .img-div.pink .before-div")).css('-webkit-transform', "skewX(-"+$window.innerWidth*18/1920+"deg)");
          angular.element(document.querySelectorAll(".group-tranform .img-div.pink .before-div")).css('-ms-transform', "skewX(-"+$window.innerWidth*18/1920+"deg)");

          angular.element(document.querySelectorAll(".sir-desvlab .cover-sir.animated .cover-img .green-left")).css('transform', "skewX("+$window.innerWidth*18/1920+"deg)");
          angular.element(document.querySelectorAll(".sir-desvlab .cover-sir.animated .cover-img .green-left")).css('-webkit-transform', "skewX("+$window.innerWidth*18/1920+"deg)");
          angular.element(document.querySelectorAll(".sir-desvlab .cover-sir.animated .cover-img .green-left")).css('-ms-transform', "skewX("+$window.innerWidth*18/1920+"deg)");


          //================================================
          //slider
          angular.element(document.querySelectorAll(".project-desvlab .white-div .title-project")).css('padding-top', $window.innerHeight*62/1080 +"px");
          //================================================
          // Contact
          var heigtContact = $window.innerHeight*888/1080;
          angular.element(document.querySelectorAll(".contact-desvlab .wrapper-all")).css('padding-top', ($window.innerHeight*274/1080)+"px");
          angular.element(document.querySelectorAll(".contact-desvlab .title-contact")).css('top', ($window.innerHeight*90/1080)+"px");
          //font size
          // left
          angular.element(document.querySelectorAll(".contact-desvlab .left-contact .group .title-yellow")).css('font-size', "1.042vw");
          angular.element(document.querySelectorAll(".contact-desvlab .left-contact .group .group-input input")).css('font-size', "1.354vw");
          angular.element(document.querySelectorAll(".contact-desvlab .left-contact .group .group-input input")).css('line-height', "1.6667vw");
          angular.element(document.querySelectorAll(".contact-desvlab .left-contact .group")).css('margin-bottom',"1.71875vw");
          angular.element(document.querySelectorAll(".contact-desvlab .left-contact .group")).css('padding-bottom',(14/19.2)+"vw");

          //right
          angular.element(document.querySelectorAll(".contact-desvlab .right-contact .title-right i")).css('font-size', "2.680vw");
          angular.element(document.querySelectorAll(".contact-desvlab .right-contact .title-right span")).css('font-size', "1.843vw");
          angular.element(document.querySelectorAll(".contact-desvlab .right-contact .title-right")).css('font-size', "2.680vw");

          if ((heigtContact*20/888) < (1.042 * 19.2)) {
            angular.element(document.querySelectorAll(".contact-desvlab .left-contact .group .title-yellow")).css('font-size', (heigtContact*20/888) +"px");
            angular.element(document.querySelectorAll(".contact-desvlab .left-contact .group .group-input input")).css('line-height', (heigtContact*32/888) +"px");
            angular.element(document.querySelectorAll(".contact-desvlab .left-contact .group")).css('margin-bottom', (heigtContact*33/888) +"px");
            angular.element(document.querySelectorAll(".contact-desvlab .left-contact .group")).css('padding-bottom',(heigtContact*14/888) +"px");

            //right
            angular.element(document.querySelectorAll(".contact-desvlab .right-contact .title-right")).css('font-size', (heigtContact*51.456/888) +"px");
            angular.element(document.querySelectorAll(".contact-desvlab .right-contact .title-right i")).css('font-size', (heigtContact*51.456/888) +"px");
            angular.element(document.querySelectorAll(".contact-desvlab .right-contact .title-right span")).css('font-size', (heigtContact*35.3856/888) +"px");
          }
          var heightWrapper = angular.element(document.querySelectorAll(".contact-desvlab .wrapper-all .left-contact"))[0].clientHeight;
          angular.element(document.querySelectorAll(".contact-desvlab .right-contact")).css('height',heightWrapper+"px");
      	}, 100);
      }
      angular.element($window).bind('resize', function () {
      	$scope.setHeight();
      });
      $scope.setHeight();

      //get data our Service
      dataSvc.query("app/data/ourService.json").then(function (data) {
        $scope.dataOurService = data;
        $scope.packagesOurServices = data.packages; 
      })  
    }
})();
