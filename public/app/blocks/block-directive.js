$(function() {
	angular.module('app.core')
		.directive('logoAnimate', logoAnimate)
		.directive('customScroll',customScroll)
		.directive('sliderAnimate', sliderAnimate)
		.directive('backgroundSlide', backgroundSlide)
		.directive('listenScroll',listenScroll);


	function backgroundSlide() {
		return {
			restrict: 'AE',
			scope:{
				image:"=backgroundSlide"
			},
			link : function (scope,el,attr) {
				$(el).css('background-image', 'url('+scope.image+')');
			}
		}

	}

	//Logo Animate
	function logoAnimate() {
		return {
			restrict: 'AE',
			scope: {
				
			},
			templateUrl: 'app/blocks/logo-animate.html',
			controller: function($scope,$rootScope,$filter,$rootScope){
			},
			link: function(scope, el, attr) {
				// responsive logo svg
				scope.responsiveLogo = function() {
					// get width screen
					scope.wScreen = $( window ).width();
					//get height screen
					scope.hScreen = $( window ).height();
					// device ratio
					scope.dRatio = scope.hScreen/scope.wScreen;
					//newHeight
					scope.hLogo = scope.hScreen*424/1067;
					// new width
					// scope.wLogo = scope.wScreen*430/1920;
					scope.wLogo = scope.hLogo*430/424;
					// set responsive
					if (scope.wScreen >= 1900) {
						// logo
						angular.element(document.querySelectorAll('.main-logo')).css('width',430 +'px'); 
						angular.element(document.querySelectorAll('.main-logo')).css('height',424 +'px'); 
						angular.element(document.querySelectorAll('.main-logo')).css('top','calc(50% - '+(424/2) + 'px)'); 

						//galaxy
							// top-left
							angular.element(document.querySelectorAll('.universe-top-left')).css('width',334 +'px'); 
							angular.element(document.querySelectorAll('.universe-top-left')).css('height',215 +'px'); 
							// bottom-right
							angular.element(document.querySelectorAll('.universe-bottom-right')).css('width',585 +'px'); 
							angular.element(document.querySelectorAll('.universe-bottom-right')).css('height',671 +'px'); 
							// bottom-left
							angular.element(document.querySelectorAll('.universe-bottom-left')).css('width',99 +'px'); 
							angular.element(document.querySelectorAll('.universe-bottom-left')).css('height',218 +'px'); 

					} else{
						//logo
						angular.element(document.querySelectorAll('.main-logo')).css('width',scope.wLogo +'px'); 
						angular.element(document.querySelectorAll('.main-logo')).css('height',scope.hLogo+'px'); 
						angular.element(document.querySelectorAll('.main-logo')).css('top','calc(50% - '+((scope.hLogo)/2)+ 'px)'); 

						//galaxy
							// top-left
							angular.element(document.querySelectorAll('.universe-top-left')).css('width',334*scope.dRatio +'px'); 
							angular.element(document.querySelectorAll('.universe-top-left')).css('height',215*scope.dRatio +'px'); 
							// bottom-right
							angular.element(document.querySelectorAll('.universe-bottom-right')).css('width',585*scope.dRatio +'px'); 
							angular.element(document.querySelectorAll('.universe-bottom-right')).css('height',671*scope.dRatio +'px'); 
							// bottom-left
							angular.element(document.querySelectorAll('.universe-bottom-left')).css('width',99*scope.dRatio +'px'); 
							angular.element(document.querySelectorAll('.universe-bottom-left')).css('height',218*scope.dRatio +'px'); 
					} 
				}
				scope.responsiveLogo();
				// resize window
				$(window).resize(function(event) {
					scope.responsiveLogo();
				});

		  	// anima logo js
		  	scope.animateLogoDraw = function () {
		  		var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
		  		var ff = navigator.userAgent.indexOf('Firefox') > 0;
		  		var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
		  		if (iOS) document.body.classList.add('iOS');

		  		var fireworks = (function() {

		  			var getFontSize = function() {
		  				return parseFloat(getComputedStyle(document.documentElement).fontSize);
		  			}

		  			var canvas = document.querySelector('.fireworks');
		  			var ctx = canvas.getContext('2d');
		  			var numberOfParticules = 24;
		  			var distance = 200;
		  			var x = 0;
		  			var y = 0;
		  			var animations = [];

		  			$(".small-text path").css("fill","#fff");
		  			$(".top-logo path").hide();
		  			$(".small-text path").hide();

		  			var setCanvasSize = function() {
		  				canvas.width = window.innerWidth;
		  				canvas.height = window.innerHeight;
		  			}

		  			var updateCoords = function(e) {
		  				x = e.clientX || e.touches[0].clientX;
		  				y = e.clientY || e.touches[0].clientY;
		  			}

		  			// var colors = ['#FF324A', '#31FFA6', '#206EFF', '#FFFF99'];
		  			var colors = ['#9c51a1', '#fff','#e4c460'];

		  			var createCircle = function(x,y) {
		  				var p = {};
		  				p.x = x;
		  				p.y = y;
		  				p.color = colors[anime.random(0, colors.length - 1)];
		  				p.color = '#FFF';
		  				p.radius = 0;
		  				p.alpha = 1;
		  				p.lineWidth = 6;
		  				p.draw = function() {
		  					ctx.globalAlpha = p.alpha;
		  					ctx.beginPath();
		  					ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
		  					ctx.lineWidth = p.lineWidth;
		  					ctx.strokeStyle = p.color;
		  					ctx.stroke();
		  					ctx.globalAlpha = 1;
		  				}
		  				return p;
		  			}

		  			var createParticule = function(x,y) {
		  				var p = {};
		  				p.x = x;
		  				p.y = y;
		  				p.color = colors[anime.random(0, colors.length - 1)];
		  				p.radius = anime.random(getFontSize(), getFontSize() * 2);
		  				p.draw = function() {
		  					ctx.beginPath();
		  					ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
		  					ctx.fillStyle = p.color;
		  					ctx.fill();
		  				}
		  				return p;
		  			}

		  			var createParticles = function(x,y) {
		  				var particules = [];
		  				for (var i = 0; i < numberOfParticules; i++) {
		  					var p = createParticule(x, y);
		  					particules.push(p);
		  				}
		  				return particules;
		  			}

		  			var removeAnimation = function(animation) {
		  				var index = animations.indexOf(animation);
		  				if (index > -1) animations.splice(index, 1);
		  			}

		  			var animateParticules = function(x, y) {
		  				setCanvasSize();
		  				var particules = createParticles(x, y);
		  				var circle = createCircle(x, y);
		  				var particulesAnimation = anime({
		  					targets: particules,
		  					x: function(p) { return p.x + anime.random(-distance, distance); },
		  					y: function(p) { return p.y + anime.random(-distance, distance); },
		  					radius: 0,
		  					duration: function() { return anime.random(1200, 1800); },
		  					easing: 'easeOutExpo',
		  					complete: removeAnimation
		  				});
		  				var circleAnimation = anime({
		  					targets: circle,
		  					radius: function() { return anime.random(getFontSize() * 8.75, getFontSize() * 11.25); },
		  					lineWidth: 0,
		  					alpha: {
		  						value: 0,
		  						easing: 'linear',
		  						duration: function() { return anime.random(400, 600); }
		  					},
		  					duration: function() { return anime.random(1200, 1800); },
		  					easing: 'easeOutExpo',
		  					complete: removeAnimation
		  				});
		  				animations.push(particulesAnimation);
		  				animations.push(circleAnimation);
		  			}

		  			var mainLoop = anime({
		  				duration: Infinity,
		  				update: function() {
		  					ctx.clearRect(0, 0, canvas.width, canvas.height);
		  					animations.forEach(function(anim) {
		  						anim.animatables.forEach(function(animatable) {
		  							animatable.target.draw();
		  						});
		  					});
		  				}
		  			});

		  			document.addEventListener(tap, function(e) {
		  				updateCoords(e);
		  				animateParticules(x, y);
		  			}, false);

		  			window.addEventListener('resize', setCanvasSize, false);

		  			return {
		  				boom: animateParticules
		  			}

		  		})();

		  		var logoAnimation = function() {
		  			document.body.classList.add('ready');
		  			var setDashoffset = function(el) {
		  				var l = el.getTotalLength();
		  				el.setAttribute('stroke-dasharray', l);
		  				return [l,0];
		  			}

		  			var letters = anime({
		  				targets: '#lines path',
		  				strokeDashoffset: {
		  					value: setDashoffset,
		  					duration: 700,
		  					easing: 'easeOutQuad'
		  				},
		  				transform: ['translate(0 128)', 'translate(0 0)'],
		  				delay: function(el, i) {
		  					return 750 + (i * 120)
		  				},
		  				duration: 1400
		  			});

		  			var textFills;
		  			
		  			var dotJSRoll = anime({
		  				targets: '#dot-js',
		  				transform: ['translate(0 0)', 'translate(544 0)'],
		  				delay: letters.duration - 800,
		  				duration: 800,
		  				elasticity: 300
		  			});

		  			var dotJSDown = anime({
		  				targets: '#dot-js',
		  				transform: ['translate(0 -304)', 'translate(0 0)'],
		  				duration: 500,
		  				elasticity: 600,
		  				autoplay: false
		  			});

		  			var dotJSUp = anime({
		  				targets: '#dot-js',
		  				transform: ['translate(0 0) scale(1 3)', 'translate(0 -352) scale(1 1)'],
		  				duration: 800,
		  				easing: 'easeOutCirc',
		  				complete: dotJSDown.play
		  			});

		  			var boom = anime({
		  				duration: 880,
		  				complete: function(a) {
		  					var dot = dotJSDown.animatables[0].target.getBoundingClientRect();
		  					var pos = {x: dot.left + (dot.width / 2), y: dot.top + (dot.height / 2)}
		  					fireworks.boom(pos.x, pos.y);
		  					setTimeout(function() {
		  						$("#dot-js").hide();
		  						$(".top-logo path").show(300);
		  					}, 250);
		  					
		  				}
		  			});

		  			var letterI = anime({
		  				targets: '#line-m-2',
		  				strokeDashoffset: {
		  					value: setDashoffset,
		  					duration: 700,
		  					easing: 'easeOutQuad'
		  				},
		  				// transform: function() {
		  				// 	return ff ? ['rotate(360)', 'rotate(0)'] : ['rotate(360 240 64)', 'rotate(0 240 64)'];
		  				// },
		  				duration: 2500,
		  				delay: letters.duration - 780,
		  				complete: function () {
		  					$(".small-text path").show(300);
		  				}
		  			});

		  			var dotI = anime({
		  				targets: '#dot-i',
		  				transform: ['translate(0 -352) scale(1 3)', 'translate(0 0) scale(1 1)'],
		  				opacity: {
		  					value: [0, 1],
		  					easing: 'linear',
		  					duration: 100
		  				},
		  				delay: letters.duration + 250
		  			});

		  			var JSletters = anime({
		  				targets: ['#line-j', '#line-s'],
		  				strokeDashoffset: setDashoffset,
		  				duration: 1400,
		  				delay: function(el, i) { return (letterI.duration - 1400) + (i * 60) },
		  				easing: 'easeInOutQuart'
		  			});

		  			var gradients = anime({
		  				targets: '#fills *:not(#dot-i)',
		  				opacity: [0, 1],
		  				delay: letterI.duration - 300,
		  				delay: function(el, i, l) {
		  					var mid = l/2;
		  					var index = (i - mid) > mid ? 0 : i;
		  					var delay = Math.abs(index - mid);
		  					return (letterI.duration - 1300) + (delay * 30);
		  				},
		  				duration: 500,
		  				easing: 'linear',
		  				complete: function() {
		  					// textFills = anime({
		  					// 	targets: '.small-text path',
		  					// 	opacity: 0,
		  					// 	delay: function(t, i) { return 200 + (anime.random(0, 1000)) },
		  					// 	duration: 200,
		  					// 	fill: '#fff',
		  					// 	direction: 'reverse',
		  					// 	easing: 'easeOutExpo',
		  					// 	complete: function() {
		  					// 		anime({
		  					// 			targets: '.line',
		  					// 			opacity: 0,
		  					// 			duration: 500
		  					// 		})
		  					// 	}
		  					// });
		  				}
		  			});

		  		}
		  		logoAnimation();

		  	}
		  	scope.animateLogoDraw();
			}
		}
	}

	//Logo Animate
	function sliderAnimate() {
		return {
			restrict: 'AE',
			scope: {
				
			},
			templateUrl: 'app/blocks/slider-animate.html',
			controller: function($scope,$rootScope,$filter,$rootScope,$timeout, dataSvc){
				dataSvc.query("app/data/logoSlider.json").then(function (data) {
					$scope.logoArray = data;
					$scope.logoLink = $scope.logoArray[1].image;
					$scope.drawSlider = function() {
						var settings = {
							pagination: '.swiper-pagination',
							effect: 'coverflow',
							grabCursor: true,
							centeredSlides: true,
							slidesPerView: 'auto',
							coverflow: {
								rotate: 50,
								stretch: 0,
								depth: 100,
								modifier: 1,
								slideShadows : true,
							}
						},
						swiper = new Swiper('.swiper-container', settings);
						swiper.slideTo(1);

						// callback event change logo
						swiper.on('onTransitionStart', function (sw) {
							$scope.logoLink =$scope.logoArray[sw.activeIndex].image;
							$scope.$apply();
						});
					}
					$timeout(function() {
						$scope.drawSlider();
					}, 500);
				}) 
			},
			link: function(scope, el, attr,dataSvc,$rootScope) {
				// silder
				// responsive slider
				// get width screen
				scope.wScreen = $( window ).width();
				//get height screen
				scope.hScreen = $( window ).height();
				// device ratio
				scope.dRatio = scope.hScreen/scope.wScreen;
				//real height mini
				scope.hMini = scope.hScreen*626/1080;
				//real width mini
				scope.wMini = scope.hMini*1047/623;
				// real top slider
				scope.tMini = (scope.hScreen*370/1080)-40;
				
				scope.responsiveSlider = function() {
					// set responsive
					// mini
					angular.element(document.querySelectorAll('.swiper-slide')).css('width',scope.wMini +'px'); 
					angular.element(document.querySelectorAll('.swiper-slide')).css('height', scope.hMini +'px'); 
					angular.element(document.querySelectorAll('.desvlab-swiper-slider')).css('top',scope.tMini +'px');
					
				}
				setTimeout(function() {
					scope.responsiveSlider();
				}, 100);

				//real height logo
				scope.hLogo = scope.hScreen*185/1080;
				//real width logo
				scope.wLogo = scope.hLogo*403/185;
				// top logo
				scope.tLogo = scope.hScreen*106/1080;
				scope.drawLogo = function() {

					angular.element(document.querySelectorAll('.logo-web-show')).css('width', scope.wLogo+'px'); 
					angular.element(document.querySelectorAll('.logo-web-show')).css('height', (scope.tMini+40)+'px'); 
					angular.element(document.querySelectorAll('.logo-web-show')).css('left','calc(50% - '+((scope.wLogo)/2)+ 'px)'); 

					angular.element(document.querySelectorAll('.sg-svg svg')).css('height', scope.hLogo+'px'); 
					angular.element(document.querySelectorAll('.sg-svg svg')).css('width', scope.wLogo+'px'); 
					angular.element(document.querySelectorAll('.sg-svg svg')).css('top','calc(50% - '+((scope.hLogo)/2)+ 'px)'); 
				}
				setTimeout(function() {
					scope.drawLogo();
				}, 100);
			}
		}
	}

	//custom scroll
	function customScroll() {
		return {
			restrict: 'AE',
			link: function (scope,el, attr) {
				var textarea = $('#customtextarea'), 
				    scroller = $('<div/>').addClass('scroller').insertAfter(textarea),
				    scroll = $('<div/>').addClass('scroll').appendTo(scroller);

				function placeScroller() {
				    scroller.css({
				        top:"0",
				        left:"0",
				        height: textarea.outerHeight() + 'px'
				    });
				    scroll.css({
				        top: Math.floor(textarea.scrollTop()/textarea[0].scrollHeight * textarea.outerHeight()) + 'px',
				        left: '0',
				        height: Math.floor(textarea.height()/textarea[0].scrollHeight * textarea.outerHeight()) + 'px'
				    });
				}

				// place scroller initially.
				placeScroller();

				// update scroller on data change
				textarea.on('scroll keyup paste cut undo', placeScroller);

				// make mousewheel scrollable
				textarea.on('wheel', function(_e) {
				    textarea.scrollTop(textarea.scrollTop() + _e.originalEvent.deltaY);
				    placeScroller();
				});

				//hover lock scroll
				textarea.mouseleave(function( event ) {
				 	$('body').off('wheel.modal mousewheel.modal');
				});

				textarea.mouseover(function( event ) {
					$('body').on('wheel.modal mousewheel.modal', function () {return false;});
				});
			}
		}
	}

	//listen scroll
	function listenScroll() {
		return {
			restrict: 'AE',
			link: function (scope,el,attr) {
				setTimeout(function() {
					$('#fullpage').fullpage({
					 	scrollingSpeed: 800,
					 	onLeave: function(index, nextIndex, direction){
					 		// toright
					 		if (nextIndex===2) {
								angular.element(document.querySelectorAll('.animated')).addClass("toright"); 
					 		}else {
					 			angular.element(document.querySelectorAll('.animated')).removeClass("toright"); 
					 		}
					 	}
					});
				}, 300);
			}
		}
	}
});
