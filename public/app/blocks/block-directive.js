$(function() {
	angular.module('app.core')
		.directive('headerTemp', headerTemp)
		.directive('footerTemp', footerTemp)
		.directive('buttonScroll', buttonScroll);
	function headerTemp() {
		return {
			restrict: 'A',
			templateUrl: 'app/templates/header-temp.html',
			controller: function($scope,$filter,$rootScope){
				
			},
			link: function(scope, element, attrs, ngModelCtrl) {
				$(".for-banner .show-side .icon-show").click(function (argument) {
					$(".main-navigation").removeClass("hide");
					$(".overlay").removeClass("hide");
					$("body").addClass("lock-scroll");
					$(".for-banner").parent().addClass("for-blur");
					$(".container-fluid").addClass("for-blur");
				});

				$(".for-banner .show-side .icon-search").click(function (argument) {
					$(".main-search").removeClass("hide");
					$(".overlay").removeClass("hide");
					$("body").addClass("lock-scroll");
					$(".for-banner").parent().addClass("for-blur");
					$(".container-fluid").addClass("for-blur");
				});

				$(".overlay").click(function (argument) {
					$(".main-search ").addClass("hide");
					$(".main-navigation").addClass("hide");
					$(".overlay").addClass("hide");
					$("body").removeClass("lock-scroll");
					$(".for-banner").parent().removeClass("for-blur");
					$(".container-fluid").removeClass("for-blur");
				});

				//Anime svg
				// show light
				function showLight() {
					$(".light-show.on").addClass('hide');
					$(".light-show.off").removeClass('hide');
					$(".point-run").addClass('hide');
				}

				//hide color point
				function hidePoint() {
					$(".node").removeClass('active');
				}
				
				var animation;
				setTimeout(function() {
					var path = anime.path('.cls-1');
					animation = anime({
						targets: '.point-run',
						translateX: path,
						translateY: path,
						rotate: path,
						duration: 4000,
						direction: 'reverse',
						loop: false,
						easing: 'linear',
						update: function(animation) {
							if (animation.progress.toFixed(0) === "25") {
								if (animation.progress.toFixed(0) >= 25 && animation.progress.toFixed(0) <= 36) {
									$(".point-run").css("display", "none");
								}
								hidePoint();
								$(".node1").addClass('active');
							}
							
							if (animation.progress.toFixed(0) === "27") {
								if (animation.progress.toFixed(0) >= 25 && animation.progress.toFixed(0) <= 36) {
									$(".point-run").css("display", "none");
								}
								hidePoint();
								$(".node2").addClass('active');
							}
							if (animation.progress.toFixed(0) === "29") {
								if (animation.progress.toFixed(0) >= 25 && animation.progress.toFixed(0) <= 36) {
									$(".point-run").css("display", "none");
								}
								hidePoint();
								$(".node3").addClass('active');
							}
							if (animation.progress.toFixed(0) === "31") {
								if (animation.progress.toFixed(0) >= 25 && animation.progress.toFixed(0) <= 36) {
									$(".point-run").css("display", "none");
								}
								hidePoint();
								$(".node4").addClass('active');
							}
							if (animation.progress.toFixed(0) === "33") {
								if (animation.progress.toFixed(0) >= 25 && animation.progress.toFixed(0) <= 36) {
									$(".point-run").css("display", "none");
								}
								hidePoint();
								$(".node5").addClass('active');
							}
							if (animation.progress.toFixed(0) === "34") {
								if (animation.progress.toFixed(0) >= 25 && animation.progress.toFixed(0) <= 36) {
									$(".point-run").css("display", "none");
								}
								hidePoint();
								$(".node6").addClass('active');
							}
							if (animation.progress.toFixed(0) === "35") {
								if (animation.progress.toFixed(0) >= 25 && animation.progress.toFixed(0) <= 36) {
									$(".point-run").css("display", "none");
								}	
								hidePoint();
								$(".node7").addClass('active');
							}
							if (animation.progress.toFixed(0) > 36) {
								hidePoint();
								$(".point-run").css("display", "block");
							}
					  	},
					  	complete: function(animation) {
					  		showLight();
					  		var checkShowMenu = $(".overlay").hasClass('hide');
					  		if ($(".dashboard-page-scroll").length && $(window).width()>=1280 && checkShowMenu && $(window)[0].scrollY ===0 ) {
					  			var body = $("html, body");
					  			var heightBanner = $(window).height();
					  			body.stop().animate({scrollTop:heightBanner}, 1500);
					  		}
					  	}
					});
				}, 100);
				

				$(".name-box.left").click(function(event) {
					animation.pause();
				});
				$(".name-box.right").click(function(event) {
					animation.play();
				});

			}
		}
	}
	function footerTemp() {
		return {
			restrict: 'A',
			templateUrl: 'app/templates/footer-temp.html'
		}
	}
	function buttonScroll() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs, ngModelCtrl) {
				element.click(function () {
					var body = $("html, body");
					body.stop().animate({scrollTop:0}, '500', 'swing');
				});
			}
		}
	}
});
