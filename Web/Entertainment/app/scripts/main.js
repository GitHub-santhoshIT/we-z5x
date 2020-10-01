console.log("'Allo 'Allo!");

$(document).ready(function() {
	if ($(window).width() > 1024) {
		// Mouse over
		$('body').on('mouseover', '.dropdown', function(e) {
			$(this).children('.dropdown-toggle').dropdown('show');
		});
		// Mouse leave
		$('body').on('mouseleave', '.dropdown', function(e) {
			$(this).children('.dropdown-toggle').dropdown('hide');
		});
	}
});

if ($(window).width() > 992) {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 40) {
			$('#navbar_top').addClass('fixed-top');
			// add padding top to show content behind navbar
			$('body').css('padding-top', $('.navbar').outerHeight() + 'px');
		} else {
			$('#navbar_top').removeClass('fixed-top');
			// remove padding top from body
			$('body').css('padding-top', '0');
		}
	});
} // end if
var slideWrapper = $('.main-slider'),
	iframes = slideWrapper.find('.embed-player'),
	lazyImages = slideWrapper.find('.slide-image'),
	lazyCounter = 0;

// POST commands to YouTube or Vimeo API
function postMessageToPlayer(player, command) {
	if (player == null || command == null) return;
	player.contentWindow.postMessage(JSON.stringify(command), '*');
}

// When the slide is changing
function playPauseVideo(slick, control) {
	var currentSlide, slideType, startTime, player, video;

	currentSlide = slick.find('.slick-current');
	slideType = currentSlide.attr('class').split(' ')[1];
	player = currentSlide.find('iframe').get(0);
	startTime = currentSlide.data('video-start');

	if (slideType === 'vimeo') {
		switch (control) {
			case 'play':
				if (startTime != null && startTime > 0 && !currentSlide.hasClass('started')) {
					currentSlide.addClass('started');
					postMessageToPlayer(player, {
						method: 'setCurrentTime',
						value: startTime
					});
				}
				postMessageToPlayer(player, {
					method: 'play',
					value: 1
				});
				break;
			case 'pause':
				postMessageToPlayer(player, {
					method: 'pause',
					value: 1
				});
				break;
		}
	} else if (slideType === 'youtube') {
		switch (control) {
			case 'play':
				postMessageToPlayer(player, {
					event: 'command',
					func: 'mute'
				});
				postMessageToPlayer(player, {
					event: 'command',
					func: 'playVideo'
				});
				break;
			case 'pause':
				postMessageToPlayer(player, {
					event: 'command',
					func: 'pauseVideo'
				});
				break;
		}
	} else if (slideType === 'video') {
		video = currentSlide.children('video').get(0);
		if (video != null) {
			if (control === 'play') {
				video.play();
			} else {
				video.pause();
			}
		}
	}
}

// Resize player
function resizePlayer(iframes, ratio) {
	if (!iframes[0]) return;
	var win = $('.main-slider'),
		width = win.width(),
		playerWidth,
		height = win.height(),
		playerHeight,
		ratio = ratio || 16 / 9;

	iframes.each(function() {
		var current = $(this);
		if (width / ratio < height) {
			playerWidth = Math.ceil(height * ratio);
			current.width(playerWidth).height(height).css({
				left: (width - playerWidth) / 2,
				top: 0
			});
		} else {
			playerHeight = Math.ceil(width / ratio);
			current.width(width).height(playerHeight).css({
				left: 0,
				top: (height - playerHeight) / 2
			});
		}
	});
}

// DOM Ready
$(function() {
	// Initialize
	slideWrapper.on('init', function(slick) {
		slick = $(slick.currentTarget);
		setTimeout(function() {
			playPauseVideo(slick, 'play');
		}, 1000);
		resizePlayer(iframes, 16 / 9);
	});
	slideWrapper.on('beforeChange', function(event, slick) {
		slick = $(slick.$slider);
		playPauseVideo(slick, 'pause');
	});
	slideWrapper.on('afterChange', function(event, slick) {
		slick = $(slick.$slider);
		playPauseVideo(slick, 'play');
	});
	slideWrapper.on('lazyLoaded', function(event, slick, image, imageSource) {
		lazyCounter++;
		if (lazyCounter === lazyImages.length) {
			lazyImages.addClass('show');
			// slideWrapper.slick("slickPlay");
		}
	});

	//start the slider
	slideWrapper.slick({
		// fade:true,
		autoplaySpeed: 4000,
		lazyLoad: 'progressive',
		speed: 600,
		arrows: false,
		dots: true,
		cssEase: 'cubic-bezier(0.87, 0.03, 0.41, 0.9)'
	});
});

// Resize event
$(window).on('resize.slickVideoPlayer', function() {
	resizePlayer(iframes, 16 / 9);
});

///video player
//video player-x

$('.home-block-carousel').slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 6000,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: false,
	vertical: true,
	//   verticalSwiping: true,

	responsive: [
		{
			breakpoint: 1280,
			settings: {
				draggable: true,
				vertical: false,

				swipeToSlide: true
			}
		},
		{
			breakpoint: 767,
			settings: {
				vertical: false,
				arrows: false,
				dots: true,
				swipeToSlide: true
			}
		}
	]
});

$('.management-talk-carousel').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	dots: true,
	arrows: false,
	autoplaySpeed: 10000
});
$('.sider-counter').slick({
	slidesToShow: 1,
	// fade: true,
	slidesToScroll: 1,
	autoplay: true,
	dots: true,
	arrows: false,
	autoplaySpeed: 4000,
});
/*vertical nav*/
function dotsThrottle(func, wait, options) {
	var context, args, result;
	var timeout = null;
	var previous = 0;
	if (!options) options = {};
	var later = function() {
		previous = options.leading === false ? 0 : Date.now();
		timeout = null;
		result = func.apply(context, args);
		if (!timeout) context = args = null;
	};
	return function() {
		var now = Date.now();
		if (!previous && options.leading === false) previous = now;
		var remaining = wait - (now - previous);
		context = this;
		args = arguments;
		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			previous = now;
			result = func.apply(context, args);
			if (!timeout) context = args = null;
		} else if (!timeout && options.trailing !== false) {
			timeout = setTimeout(later, remaining);
		}
		return result;
	};
}

// global fixed nav options
let dotFixedNavPresent = false;
let dotFixedNavId = '';
let dotFixedNavUp = false;

// scroll indicator controller
function easyScrollDots(dotfixedOptions) {
	let scrollIndi = document.querySelectorAll('.scroll-indicator');
	dotfixedOptions.fixedNav === true ? (dotFixedNavPresent = true) : dotFixedNavPresent;
	dotfixedOptions.fixedNavId === '' ? (dotFixedNavId = false) : (dotFixedNavId = dotfixedOptions.fixedNavId);
	dotfixedOptions.fixedNavUpward === true ? (dotFixedNavUp = true) : dotFixedNavUp;

	if (scrollIndi.length) {
		const scrollIndiTemplate = '<div class="scroll-indicator-controller"><span></span></div>';
		document.querySelector('body').lastElementChild.insertAdjacentHTML('afterend', scrollIndiTemplate);
		const scrollIndiController = document.querySelector('.scroll-indicator-controller');
		if (typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1) {
			scrollIndiController.classList.add('indi-mobile');
		}
		const scrollIndiElems = Array.prototype.slice.call(scrollIndi);

		scrollIndiElems.forEach(function(e, i) {
			const scrollIndiId = e.getAttribute('id');
			const scrollIndiTitle = e.getAttribute('data-scroll-indicator-title');
			let firstActiveClass = '';

			if (i == 0) {
				firstActiveClass = 'active';
			}
			scrollIndiController.lastElementChild.insertAdjacentHTML(
				'afterend',
				'<div class="' +
					firstActiveClass +
					'" data-indi-controller-id="' +
					scrollIndiId +
					'" onclick="scrollIndiClicked(\'' +
					scrollIndiId +
					'\');"><span>' +
					scrollIndiTitle +
					'</span><div></div></div>'
			);
		});

		const scrollIndiControllerDots = scrollIndiController.querySelectorAll('[data-indi-controller-id]');

		var handleIndiScroll = dotsThrottle(function() {
			let indiScrollTopCollection = {};

			scrollIndiElems.forEach(function(e) {
				const scrollIndiIdScroll = e.getAttribute('id');
				const indiScrollTop = e.getBoundingClientRect().top;

				indiScrollTopCollection[scrollIndiIdScroll] = indiScrollTop;
			});

			const indiOffsetValues = Object.keys(indiScrollTopCollection).map(function(itm) {
				return indiScrollTopCollection[itm];
			});
			const indiOffsetMin = function() {
				const indiRemoveMinuses = indiOffsetValues.filter(function(x) {
					return x > -150;
				});

				return Math.min.apply(null, indiRemoveMinuses);
			};

			Object.keys(indiScrollTopCollection).forEach(function(e) {
				if (indiScrollTopCollection[e] == indiOffsetMin()) {
					Array.prototype.forEach.call(scrollIndiControllerDots, function(el) {
						if (el.classList.contains('active')) {
							el.classList.remove('active');
						}
					});
					scrollIndiController.querySelector('[data-indi-controller-id="' + e + '"]').classList.add('active');
				}
			});
		}, 300);

		window.onscroll = function() {
			handleIndiScroll();
		};
	}
}

function scrollIndiClicked(indiId) {
	if (window.jQuery) {
		if (dotFixedNavPresent === true && dotFixedNavId.length) {
			const dotNavHeightElem = document.getElementById(dotFixedNavId);
			const dotNavHeight = dotNavHeightElem.clientHeight;
			const dotDocumentHtml = $('html, body');
			const indiElement = $('#' + indiId);

			if (dotFixedNavUp === true) {
				dotDocumentHtml.animate(
					{
						scrollTop: indiElement.offset().top
					},
					700
				);
				const scrollPos = document.body.getBoundingClientRect().top;
				setTimeout(function() {
					if (document.body.getBoundingClientRect().top > scrollPos) {
						dotDocumentHtml.animate(
							{
								scrollTop: indiElement.offset().top - dotNavHeight
							},
							400
						);
					}
				}, 400);
			} else {
				dotDocumentHtml.animate(
					{
						scrollTop: indiElement.offset().top - dotNavHeight
					},
					700
				);
			}
		} else {
			$('html, body').animate(
				{
					scrollTop: $('#' + indiId).offset().top
				},
				700
			);
		}
	} else {
		if (dotFixedNavPresent === true && dotFixedNavId.length) {
			const dotNavHeightElem = document.getElementById(dotFixedNavId);
			const dotNavHeight = dotNavHeightElem.clientHeight;
			const indiElement = document.getElementById(indiId);

			if (dotFixedNavUp === true) {
				window.scrollTo({
					top: indiElement.offsetTop,
					left: 0,
					behavior: 'smooth'
				});
				const scrollPos = document.body.getBoundingClientRect().top;
				setTimeout(function() {
					if (document.body.getBoundingClientRect().top > scrollPos) {
						window.scrollTo({
							top: indiElement.offsetTop - dotNavHeight,
							left: 0,
							behavior: 'smooth'
						});
					}
				}, 400);
			} else {
				window.scrollTo({
					top: indiElement.offsetTop - dotNavHeight,
					left: 0,
					behavior: 'smooth'
				});
			}
		} else {
			window.scrollTo({
				top: document.getElementById(indiId).offsetTop,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
}

easyScrollDots({
	fixedNav: false,
	fixedNavId: '',
	fixedNavUpward: false
});

/*scroll to arrow*/
$(document).ready(function() {
	$('a').on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top
				},
				768,
				function() {
					window.location.hash = hash;
				}
			);
		}
	});
});

$.fn.visible = function(partial) {
	var $t = $(this),
		$w = $(window),
		viewTop = $w.scrollTop(),
		viewBottom = viewTop + $w.height(),
		_top = $t.offset().top,
		_bottom = _top + $t.height(),
		compareTop = partial === true ? _bottom : _top,
		compareBottom = partial === true ? _top : _bottom;

	return compareBottom <= viewBottom && compareTop >= viewTop;
};

// $(document).ready(function(e) {
//   checkVisible();
// });

$(window).scroll(function(e) {
	checkVisible();
});

function checkVisible() {
	$('.round-block').each(function(i, k) {
		if ($(this).visible()) {
			$(k).addClass('enlarge-circle');
		} else {
			// $(k).removeClass('enlarge-circle');
		}
	});
}

/*counter*/
(function($) {
	$.fn.countTo = function(options) {
		options = options || {};

		return $(this).each(function() {
			var settings = $.extend(
				{},
				$.fn.countTo.defaults,
				{
					from: $(this).data('from'),
					to: $(this).data('to'),
					speed: $(this).data('speed'),
					refreshInterval: $(this).data('refresh-interval'),
					decimals: $(this).data('decimals')
				},
				options
			);
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};

			$self.data('countTo', data);

			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);

			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;

				render(value);

				if (typeof settings.onUpdate == 'function') {
					settings.onUpdate.call(self, value);
				}

				if (loopCount >= loops) {
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;

					if (typeof settings.onComplete == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}

			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};

	$.fn.countTo.defaults = {
		from: 0, // the number the element should start at
		to: 0, // the number the element should end at
		speed: 1000, // how long it should take to count between the target numbers
		refreshInterval: 100, // how often the element should be updated
		decimals: 0, // the number of decimal places to show
		formatter: formatter, // handler for formatting the value before rendering
		onUpdate: null, // callback method for every time the element is updated
		onComplete: null // callback method for when the element finishes updating
	};

	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
})(jQuery);

jQuery(function($) {
	$('.count-number').data('countToOptions', {
		formatter: function(value, options) {
			return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
		}
	});

	$('.timer').each(count);

	function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
	}
});

/*scroll to show indicators*/
$(document).ready(function() {
	var prevScrollTop = $(window).scrollTop();

	$(window).on('scroll', function(e) {
		var $src = $('.scroll-indicator-controller');
		var currentScrollTop = $(this).scrollTop();
		///currentScrollTop >= prevScrollTop &&
		if (currentScrollTop > 300) {
			$src.css({
				position: 'fixed',
				top: '100',
				opacity: '1'
			});

			$('.scroll-indicator-controller').slideDown();
		} else {
			$src.css({
				position: 'static'
			});
			$('.scroll-indicator-controller').show();
		}

		prevScrollTop = currentScrollTop;
	});
});

/*hero carousel*/

// var $slider = $('.hero-slider');

// if ($slider.length) {
//   var currentSlide;
//   var slidesCount;
//   var sliderCounter = document.createElement('div');
//   sliderCounter.classList.add('slider__counter');

//   var updateSliderCounter = function(slick, currentIndex) {
//     currentSlide = slick.slickCurrentSlide() + 1;
//     slidesCount = slick.slideCount;
//     $(sliderCounter).text(currentSlide + '/' +'5')
//   };

//   $slider.on('init', function(event, slick) {
//     $slider.append(sliderCounter);
//     updateSliderCounter(slick);
//   });

//   $slider.on('afterChange', function(event, slick, currentSlide) {
//     updateSliderCounter(slick, currentSlide);
//   });

//   $slider.slick();
// }

//style added
$('.content').each(function() {
	var $this = $(this);
	if ($this.attr('style')) {
		console.log($(this).attr('style'));
		$this.parent().addClass('class-new');
	}
});

$(document).ready(function() {
	$('#archiveCarousel').carousel({
		interval: 4000
	});

	var clickEvent = false;
	$('#archiveCarousel')
		.on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');
		})
		.on('slid.bs.carousel', function(e) {
			if (!clickEvent) {
				var count = $('.nav').children().length - 1;
				var current = $('.nav li.active');
				current.removeClass('active').next().addClass('active');
				var id = parseInt(current.data('slide-to'));
				if (count == id) {
					$('.nav li').first().addClass('active');
				}
			}
			clickEvent = false;
		});
});

// var xxxx = document.querySelector('.xxxx');
// var origOffsetY = header.offsetTop;

// function onScroll(e) {
//   window.scrollY >= origOffsetY ? header.classList.add('sticky') :
//                                   header.classList.remove('sticky');
// }

// document.addEventListener('scroll', onScroll);

//stick scroll part

$('.container').stickem({
	item: '.stickem',
	container: '.stickem-container',
	stickClass: 'stickit',
	endStickClass: 'stickit-end',
	offset: 0,
	onStick: null,
	onUnstick: null
});

(function($, window, document, undefined) {
	var Stickem = function(elem, options) {
		this.elem = elem;
		this.$elem = $(elem);
		this.options = options;
		this.metadata = this.$elem.data('stickem-options');
		this.$win = $(window);
	};

	Stickem.prototype = {
		defaults: {
			item: '.stickem',
			container: '.stickem-container',
			stickClass: 'stickit',
			endStickClass: 'stickit-end',
			offset: 0,
			start: 0,
			onStick: null,
			onUnstick: null
		},

		init: function() {
			var _self = this;

			//Merge options
			_self.config = $.extend({}, _self.defaults, _self.options, _self.metadata);

			_self.setWindowHeight();
			_self.getItems();
			_self.bindEvents();

			return _self;
		},

		bindEvents: function() {
			var _self = this;

			_self.$win.on('scroll.stickem', $.proxy(_self.handleScroll, _self));
			_self.$win.on('resize.stickem', $.proxy(_self.handleResize, _self));
		},

		destroy: function() {
			var _self = this;

			_self.$win.off('scroll.stickem');
			_self.$win.off('resize.stickem');
		},

		getItem: function(index, element) {
			var _self = this;
			var $this = $(element);
			var item = {
				$elem: $this,
				elemHeight: $this.height(),
				$container: $this.parents(_self.config.container),
				isStuck: false
			};

			//If the element is smaller than the window
			if (_self.windowHeight > item.elemHeight) {
				item.containerHeight = item.$container.outerHeight();
				item.containerInner = {
					border: {
						bottom: parseInt(item.$container.css('border-bottom'), 10) || 0,
						top: parseInt(item.$container.css('border-top'), 10) || 0
					},
					padding: {
						bottom: parseInt(item.$container.css('padding-bottom'), 10) || 0,
						top: parseInt(item.$container.css('padding-top'), 10) || 0
					}
				};

				item.containerInnerHeight = item.$container.height();
				item.containerStart =
					item.$container.offset().top -
					_self.config.offset +
					_self.config.start +
					item.containerInner.padding.top +
					item.containerInner.border.top;
				item.scrollFinish =
					item.containerStart - _self.config.start + (item.containerInnerHeight - item.elemHeight);

				//If the element is smaller than the container
				if (item.containerInnerHeight > item.elemHeight) {
					_self.items.push(item);
				}
			} else {
				item.$elem.removeClass(_self.config.stickClass + ' ' + _self.config.endStickClass);
			}
		},

		getItems: function() {
			var _self = this;

			_self.items = [];

			_self.$elem.find(_self.config.item).each($.proxy(_self.getItem, _self));
		},

		handleResize: function() {
			var _self = this;

			_self.getItems();
			_self.setWindowHeight();
		},

		handleScroll: function() {
			var _self = this;

			if (_self.items.length > 0) {
				var pos = _self.$win.scrollTop();

				for (var i = 0, len = _self.items.length; i < len; i++) {
					var item = _self.items[i];

					//If it's stuck, and we need to unstick it, or if the page loads below it
					if (
						(item.isStuck && (pos < item.containerStart || pos > item.scrollFinish)) ||
						pos > item.scrollFinish
					) {
						item.$elem.removeClass(_self.config.stickClass);

						//only at the bottom
						if (pos > item.scrollFinish) {
							item.$elem.addClass(_self.config.endStickClass);
						}

						item.isStuck = false;

						//if supplied fire the onUnstick callback
						if (_self.config.onUnstick) {
							_self.config.onUnstick(item);
						}

						//If we need to stick it
					} else if (item.isStuck === false && pos > item.containerStart && pos < item.scrollFinish) {
						item.$elem.removeClass(_self.config.endStickClass).addClass(_self.config.stickClass);
						item.isStuck = true;

						//if supplied fire the onStick callback
						if (_self.config.onStick) {
							_self.config.onStick(item);
						}
					}
				}
			}
		},

		setWindowHeight: function() {
			var _self = this;

			_self.windowHeight = _self.$win.height() - _self.config.offset;
		}
	};

	Stickem.defaults = Stickem.prototype.defaults;

	$.fn.stickem = function(options) {
		//Create a destroy method so that you can kill it and call it again.
		this.destroy = function() {
			this.each(function() {
				new Stickem(this, options).destroy();
			});
		};

		return this.each(function() {
			new Stickem(this, options).init();
		});
	};
})(jQuery, window, document);

//responsive
$('#nav').children('li').first().children('a').addClass('active').next().addClass('is-open').show();

$('#nav').on('click', 'li > a', function() {
	if (!$(this).hasClass('active')) {
		$('#nav .is-open').removeClass('is-open').hide();
		$(this).next().toggleClass('is-open').toggle();

		$('#nav').find('.active').removeClass('active');
		$(this).addClass('active');
	} else {
	}
});

//Nav hover state
