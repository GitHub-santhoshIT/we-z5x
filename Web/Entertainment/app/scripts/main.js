console.log('\'Allo \'Allo!');

if ($(window).width() > 992) {
  $(window).scroll(function(){  
     if ($(this).scrollTop() > 40) {
        $('#navbar_top').addClass('fixed-top');
        // add padding top to show content behind navbar
        $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
      }else{
        $('#navbar_top').removeClass('fixed-top');
         // remove padding top from body
        $('body').css('padding-top', '0');
      }   
  });
} // end if
$('.home-block-carousel').slick({
  dots: false,
  infinite: true,
  fade: true,
  autoplay: true,
autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true
  });

  $('.management-talk-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots:true,
    arrows:false,
    autoplaySpeed: 10000,
  });
  $('.sider-counter').slick({
    slidesToShow: 1,
  fade: true,

    slidesToScroll: 1,
    autoplay: true,
    dots:true,
    arrows:false,
    autoplaySpeed: 10000,
  });
  /*vertical nav*/
  function dotsThrottle(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function () {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function () {
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
    dotfixedOptions.fixedNav === true ? dotFixedNavPresent = true : dotFixedNavPresent;
    dotfixedOptions.fixedNavId === '' ? dotFixedNavId = false : dotFixedNavId = dotfixedOptions.fixedNavId;
    dotfixedOptions.fixedNavUpward === true ? dotFixedNavUp = true : dotFixedNavUp;

    if (scrollIndi.length) {
        const scrollIndiTemplate = '<div class="scroll-indicator-controller"><span></span></div>';
        document.querySelector('body').lastElementChild.insertAdjacentHTML('afterend', scrollIndiTemplate);
        const scrollIndiController = document.querySelector('.scroll-indicator-controller');
        if ((typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1)) { scrollIndiController.classList.add('indi-mobile'); }
        const scrollIndiElems = Array.prototype.slice.call(scrollIndi);

        scrollIndiElems.forEach(function (e, i) {
            const scrollIndiId = e.getAttribute('id');
            const scrollIndiTitle = e.getAttribute('data-scroll-indicator-title');
            let firstActiveClass = '';

            if (i == 0) {
                firstActiveClass = 'active';
            }
            scrollIndiController.lastElementChild.insertAdjacentHTML('afterend', '<div class="' + firstActiveClass + '" data-indi-controller-id="' + scrollIndiId + '" onclick="scrollIndiClicked(\'' + scrollIndiId + '\');"><span>' + scrollIndiTitle + '</span><div></div></div>');
        });

        const scrollIndiControllerDots = scrollIndiController.querySelectorAll('[data-indi-controller-id]');

        var handleIndiScroll = dotsThrottle(function () {
            let indiScrollTopCollection = {};

            scrollIndiElems.forEach(function (e) {
                const scrollIndiIdScroll = e.getAttribute('id');
                const indiScrollTop = e.getBoundingClientRect().top;

                indiScrollTopCollection[scrollIndiIdScroll] = indiScrollTop;
            });

            // const indiOffsetValues = Object.values(indiScrollTopCollection); not supported in ie
            const indiOffsetValues = Object.keys(indiScrollTopCollection).map(function (itm) { return indiScrollTopCollection[itm]; });
            const indiOffsetMin = function () {
                const indiRemoveMinuses = indiOffsetValues.filter(function (x) { return x > -150; });

                return Math.min.apply(null, indiRemoveMinuses);
            }; 

            Object.keys(indiScrollTopCollection).forEach(function (e) {
                if (indiScrollTopCollection[e] == indiOffsetMin()) {
                    Array.prototype.forEach.call(scrollIndiControllerDots, function (el) {
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
        // if jquery is availble then we can use jquery animations
        if (dotFixedNavPresent === true && dotFixedNavId.length) {
            // there is a fixed nav and its id has been defined
            const dotNavHeightElem = document.getElementById(dotFixedNavId);
            const dotNavHeight = dotNavHeightElem.clientHeight;
            const dotDocumentHtml = $('html, body');
            const indiElement = $('#' + indiId);
    
            if (dotFixedNavUp === true) {
                // fix nav on upward scroll only
                dotDocumentHtml.animate({
                    scrollTop: indiElement.offset().top
                }, 700);
                const scrollPos = document.body.getBoundingClientRect().top;
                setTimeout(function () {
                    if (document.body.getBoundingClientRect().top > scrollPos) {
                        dotDocumentHtml.animate({
                            scrollTop: indiElement.offset().top - dotNavHeight
                        }, 400);
                    }
                }, 400);
            }
            else {
                // fixed nav scroll
                dotDocumentHtml.animate({
                    scrollTop: indiElement.offset().top - dotNavHeight
                }, 700);
            }
        }
        else {
            // normal scroll
            $('html, body').animate({
                scrollTop: $('#' + indiId).offset().top
            }, 700);
        }    
    }
    else {
        // there is no jquery so we use vanilla scroll animations
        if (dotFixedNavPresent === true && dotFixedNavId.length) {
            // there is a fixed nav and its id has been defined
            const dotNavHeightElem = document.getElementById(dotFixedNavId);
            const dotNavHeight = dotNavHeightElem.clientHeight;
            const indiElement = document.getElementById(indiId);
    
            if (dotFixedNavUp === true) {
                // fix nav on upward scroll only
                window.scrollTo({
                    top: indiElement.offsetTop,
                    left: 0,
                    behavior: 'smooth'
                });
                const scrollPos = document.body.getBoundingClientRect().top;
                setTimeout(function () {
                    if (document.body.getBoundingClientRect().top > scrollPos) {
                        window.scrollTo({
                            top: indiElement.offsetTop - dotNavHeight,
                            left: 0,
                            behavior: 'smooth'
                        });
                    }
                }, 400);
            }
            else {
                // fixed nav scroll
                window.scrollTo({
                    top: indiElement.offsetTop - dotNavHeight,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
        else {
            // normal scroll
            window.scrollTo({
                top: document.getElementById(indiId).offsetTop,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}


// Init
easyScrollDots({
  'fixedNav': false,
  'fixedNavId': '',
  'fixedNavUpward': false
});

/**
 * This was built using the scrollie jQuery Plugin
 * https://github.com/Funsella/jquery-scrollie
 */


$( window ).ready(function() {
  
  var wHeight = $(window).height();

  $('.slide')
    .height(wHeight)
    .scrollie({
      scrollOffset : -50,
      scrollingInView : function(elem) {
                 
        var bgColor = elem.data('background');
        
        $('body').css('background-color', bgColor);
        
      }
    });


/*scroll to arrow*/
    $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

});
/* scroll to arrow*/


  //scroll add class for the circle
//   window.onscroll = function() {myFunction()};

// var header = document.getElementById("expandcircle");
// var sticky = header.offsetTop({top:'200px'});

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("enlarge-circle");
//   } 
//   else {
//     header.classList.remove("enlarge-circle");
//   }
// }


$.fn.visible = function(partial) {

  var $t = $(this),
    $w = $(window),
    viewTop = $w.scrollTop(),
    viewBottom = viewTop + $w.height(),
    _top = $t.offset().top,
    _bottom = _top + $t.height(),
    compareTop = partial === true ? _bottom : _top,
    compareBottom = partial === true ? _top : _bottom;

  return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
}

$(document).ready(function(e) {
  checkVisible();
});

$(window).scroll(function(e) {
  checkVisible();
});


function checkVisible() {
  $('.round-block').each(function(i, k) {
    if ($(this).visible()) {
      $(k).addClass('enlarge-circle');
    } else {
      $(k).removeClass('enlarge-circle');
    }
  });
}



/*counter*/
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
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
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});


/*scroll to show indicators*/
$(document).ready(function() {
  var prevScrollTop = $(window).scrollTop()
  
  $(window).on('scroll', function(e) {
    // Variable declaration for search container
    var $src = $('.scroll-indicator-controller');
    var currentScrollTop = $(this).scrollTop()
   
    if (currentScrollTop >= prevScrollTop && currentScrollTop > 44) {
     
      $src.css({
        'position': 'fixed',
        'top': '100',
        'opacity':'1'
      });
      
      $('.scroll-indicator-controller').slideDown();
    } else {
      $src.css({
        'position': 'static',
      });
      $(".scroll-indicator-controller").show();
    }
    
    prevScrollTop = currentScrollTop
  });
});




/*hero carousel*/

var $slider = $('.hero-slider');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + '/' +'5') 
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick();
}




