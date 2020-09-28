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
  autoplaySpeed: 6000,
  draggable: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        draggable: true,
    
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        dots: true
      }
    },
  ]
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
    // fade: true,
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
        if (dotFixedNavPresent === true && dotFixedNavId.length) {
            const dotNavHeightElem = document.getElementById(dotFixedNavId);
            const dotNavHeight = dotNavHeightElem.clientHeight;
            const dotDocumentHtml = $('html, body');
            const indiElement = $('#' + indiId);
    
            if (dotFixedNavUp === true) {
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
                dotDocumentHtml.animate({
                    scrollTop: indiElement.offset().top - dotNavHeight
                }, 700);
            }
        }
        else {
            $('html, body').animate({
                scrollTop: $('#' + indiId).offset().top
            }, 700);
        }    
    }
    else {
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
                window.scrollTo({
                    top: indiElement.offsetTop - dotNavHeight,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
        else {
            window.scrollTo({
                top: document.getElementById(indiId).offsetTop,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}


easyScrollDots({
  'fixedNav': false,
  'fixedNavId': '',
  'fixedNavUpward': false
});

/*scroll to arrow*/
//     $(document).ready(function(){
//   $('a').on('click', function(event) {
//     if (this.hash !== '') {
//       event.preventDefault();
//       var hash = this.hash;
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
//         window.location.hash = hash;
//       });
//     } 
//   });
// });




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
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
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
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
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
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
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
  var prevScrollTop = $(window).scrollTop()
  
  $(window).on('scroll', function(e) {
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
      $('.scroll-indicator-controller').show();
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
    $(sliderCounter).text(currentSlide + '/' +'7') 
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






//style added
$('.content').each(function() {
  var $this = $(this);
if($this.attr('style')){
  console.log($(this).attr('style'));
  $this.parent().addClass('class-new');
}
});


$(document).ready( function() {
  $('#archiveCarousel').carousel({
  interval:   4000
});

var clickEvent = false;
$('#archiveCarousel').on('click', '.nav a', function() {
    clickEvent = true;
    $('.nav li').removeClass('active');
    $(this).parent().addClass('active');		
}).on('slid.bs.carousel', function(e) {
  if(!clickEvent) {
    var count = $('.nav').children().length -1;
    var current = $('.nav li.active');
    current.removeClass('active').next().addClass('active');
    var id = parseInt(current.data('slide-to'));
    if(count == id) {
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
  
 
 ;(function($, window, document, undefined) {
 
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
       if(_self.windowHeight > item.elemHeight) {
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
         item.containerStart = item.$container.offset().top - _self.config.offset + _self.config.start + item.containerInner.padding.top + item.containerInner.border.top;
         item.scrollFinish = item.containerStart - _self.config.start + (item.containerInnerHeight - item.elemHeight);
 
         //If the element is smaller than the container
         if(item.containerInnerHeight > item.elemHeight) {
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
 
       if(_self.items.length > 0) {
         var pos = _self.$win.scrollTop();
 
         for(var i = 0, len = _self.items.length; i < len; i++) {
           var item = _self.items[i];
 
           //If it's stuck, and we need to unstick it, or if the page loads below it
           if((item.isStuck && (pos < item.containerStart || pos > item.scrollFinish)) || pos > item.scrollFinish) {
             item.$elem.removeClass(_self.config.stickClass);
 
             //only at the bottom
             if(pos > item.scrollFinish) {
               item.$elem.addClass(_self.config.endStickClass);
             }
 
             item.isStuck = false;
 
             //if supplied fire the onUnstick callback
             if(_self.config.onUnstick) {
               _self.config.onUnstick(item);
             }
 
           //If we need to stick it
           } else if(item.isStuck === false && pos > item.containerStart && pos < item.scrollFinish) {
               item.$elem.removeClass(_self.config.endStickClass).addClass(_self.config.stickClass);
               item.isStuck = true;
 
               //if supplied fire the onStick callback
               if(_self.config.onStick) {
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
 
 })(jQuery, window , document);


//responsive
$('#nav').children('li').first().children('a').addClass('active')
        .next().addClass('is-open').show();
        
    $('#nav').on('click', 'li > a', function() {
        
      if (!$(this).hasClass('active')) {

        $('#nav .is-open').removeClass('is-open').hide();
        $(this).next().toggleClass('is-open').toggle();
          
        $('#nav').find('.active').removeClass('active');
        $(this).addClass('active');
      } else {
        
      }
   });


   //accordion step 1
   ; (function ($, window, undefined) {

    /** Default settings */
    var defaults = {
       active: null,
       event: 'click',
       disabled: [],
       collapsible: 'accordion',
       startCollapsed: false,
       rotate: false,
       setHash: false,
       animation: 'default',
       animationQueue: false,
       duration: 500,
       fluidHeight: true,
       scrollToAccordion: false,
       scrollToAccordionOnLoad: true,
       scrollToAccordionOffset: 0,
       accordionTabElement: '<div></div>',
       navigationContainer: '',
       click: function () { },
       activate: function () { },
       deactivate: function () { },
       load: function () { },
       activateState: function () { },
       classes: {
          stateDefault: 'r-tabs-state-default',
          stateActive: 'r-tabs-state-active',
          stateDisabled: 'r-tabs-state-disabled',
          stateExcluded: 'r-tabs-state-excluded',
          container: 'r-tabs',
          ul: 'r-tabs-nav',
          tab: 'r-tabs-tab',
          anchor: 'r-tabs-anchor',
          panel: 'r-tabs-panel',
          accordionTitle: 'r-tabs-accordion-title'
       }
    };

    /**
     * Responsive Tabs
     * @constructor
     * @param {object} element - The HTML element the validator should be bound to
     * @param {object} options - An option map
     */
    function ResponsiveTabs(element, options) {
       this.element = element; // Selected DOM element
       this.$element = $(element); // Selected jQuery element

       this.tabs = []; // Create tabs array
       this.state = ''; // Define the plugin state (tabs/accordion)
       this.rotateInterval = 0; // Define rotate interval
       this.$queue = $({});

       // Extend the defaults with the passed options
       this.options = $.extend({}, defaults, options);

       this.init();
    }


    /**
     * This function initializes the tab plugin
     */
    ResponsiveTabs.prototype.init = function () {
       var _this = this;

       // Load all the elements
       this.tabs = this._loadElements();
       this._loadClasses();
       this._loadEvents();

       // Window resize bind to check state
       $(window).on('resize', function (e) {
          _this._setState(e);
          if (_this.options.fluidHeight !== true) {
             _this._equaliseHeights();
          }
       });

       // Hashchange event
       $(window).on('hashchange', function (e) {
          var tabRef = _this._getTabRefBySelector(window.location.hash);
          var oTab = _this._getTab(tabRef);

          // Check if a tab is found that matches the hash
          if (tabRef >= 0 && !oTab._ignoreHashChange && !oTab.disabled) {
             // If so, open the tab and auto close the current one
             _this._openTab(e, _this._getTab(tabRef), true);
          }
       });

       // Start rotate event if rotate option is defined
       if (this.options.rotate !== false) {
          this.startRotation();
       }

       // Set fluid height
       if (this.options.fluidHeight !== true) {
          _this._equaliseHeights();
       }

       // --------------------
       // Define plugin events
       //

       // Activate: this event is called when a tab is selected
       this.$element.bind('tabs-click', function (e, oTab) {
          _this.options.click.call(this, e, oTab);
       });

       // Activate: this event is called when a tab is selected
       this.$element.bind('tabs-activate', function (e, oTab) {
          _this.options.activate.call(this, e, oTab);
       });
       // Deactivate: this event is called when a tab is closed
       this.$element.bind('tabs-deactivate', function (e, oTab) {
          _this.options.deactivate.call(this, e, oTab);
       });
       // Activate State: this event is called when the plugin switches states
       this.$element.bind('tabs-activate-state', function (e, state) {
          _this.options.activateState.call(this, e, state);
       });

       // Load: this event is called when the plugin has been loaded
       this.$element.bind('tabs-load', function (e) {
          var startTab;

          _this._setState(e); // Set state

          // Check if the panel should be collaped on load
          if (_this.options.startCollapsed !== true && !(_this.options.startCollapsed === 'accordion' && _this.state === 'accordion')) {

             startTab = _this._getStartTab();

             // Open the initial tab
             _this._openTab(e, startTab); // Open first tab

             // Call the callback function
             _this.options.load.call(this, e, startTab); // Call the load callback
          }
       });
       // Trigger loaded event
       this.$element.trigger('tabs-load');
    };

    //
    // PRIVATE FUNCTIONS
    //

    /**
     * This function loads the tab elements and stores them in an array
     * @returns {Array} Array of tab elements
     */
    ResponsiveTabs.prototype._loadElements = function () {
       var _this = this;
       var $ul = (_this.options.navigationContainer === '') ? this.$element.children('ul:first') : this.$element.find(_this.options.navigationContainer).children('ul:first');
       var tabs = [];
       var id = 0;

       // Add the classes to the basic html elements
       this.$element.addClass(_this.options.classes.container); // Tab container
       $ul.addClass(_this.options.classes.ul); // List container

       // Get tab buttons and store their data in an array
       $('li', $ul).each(function () {
          var $tab = $(this);
          var isExcluded = $tab.hasClass(_this.options.classes.stateExcluded);
          var $anchor, $panel, $accordionTab, $accordionAnchor, panelSelector;

          // Check if the tab should be excluded
          if (!isExcluded) {

             $anchor = $('a', $tab);
             panelSelector = $anchor.attr('href');
             $panel = $(panelSelector);
             $accordionTab = $(_this.options.accordionTabElement).insertBefore($panel);
             $accordionAnchor = $('<a></a>').attr('href', panelSelector).html($anchor.html()).appendTo($accordionTab);

             var oTab = {
                _ignoreHashChange: false,
                id: id,
                disabled: ($.inArray(id, _this.options.disabled) !== -1),
                tab: $(this),
                anchor: $('a', $tab),
                panel: $panel,
                selector: panelSelector,
                accordionTab: $accordionTab,
                accordionAnchor: $accordionAnchor,
                active: false
             };

             // 1up the ID
             id++;
             // Add to tab array
             tabs.push(oTab);
          }
       });
       return tabs;
    };


    /**
     * This function adds classes to the tab elements based on the options
     */
    ResponsiveTabs.prototype._loadClasses = function () {
       for (var i = 0; i < this.tabs.length; i++) {
          this.tabs[i].tab.addClass(this.options.classes.stateDefault).addClass(this.options.classes.tab);
          this.tabs[i].anchor.addClass(this.options.classes.anchor);
          this.tabs[i].panel.addClass(this.options.classes.stateDefault).addClass(this.options.classes.panel);
          this.tabs[i].accordionTab.addClass(this.options.classes.accordionTitle);
          this.tabs[i].accordionAnchor.addClass(this.options.classes.anchor);
          if (this.tabs[i].disabled) {
             this.tabs[i].tab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
             this.tabs[i].accordionTab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
          }
       }
    };

    /**
     * This function adds events to the tab elements
     */
    ResponsiveTabs.prototype._loadEvents = function () {
       var _this = this;

       // Define activate event on a tab element
       var fActivate = function (e) {
          var current = _this._getCurrentTab(); // Fetch current tab
          var activatedTab = e.data.tab;

          e.preventDefault();

          // Trigger click event for whenever a tab is clicked/touched even if the tab is disabled
          activatedTab.tab.trigger('tabs-click', activatedTab);

          // Make sure this tab isn't disabled
          if (!activatedTab.disabled) {

             // Check if hash has to be set in the URL location
             if (_this.options.setHash) {
                // Set the hash using the history api if available to tackle Chromes repaint bug on hash change
                if (history.pushState) {
                   // Fix for missing window.location.origin in IE
                   if (!window.location.origin) {
                      window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
                   }

                   history.pushState(null, null, window.location.origin + window.location.pathname + window.location.search + activatedTab.selector);
                } else {
                   // Otherwise fallback to the hash update for sites that don't support the history api
                   window.location.hash = activatedTab.selector;
                }
             }

             e.data.tab._ignoreHashChange = true;

             // Check if the activated tab isnt the current one or if its collapsible. If not, do nothing
             if (current !== activatedTab || _this._isCollapisble()) {
                // The activated tab is either another tab of the current one. If it's the current tab it is collapsible
                // Either way, the current tab can be closed
                _this._closeTab(e, current);

                // Check if the activated tab isnt the current one or if it isnt collapsible
                if (current !== activatedTab || !_this._isCollapisble()) {
                   _this._openTab(e, activatedTab, false, true);
                }
             }
          }
       };

       // Loop tabs
       for (var i = 0; i < this.tabs.length; i++) {
          // Add activate function to the tab and accordion selection element
          this.tabs[i].anchor.on(_this.options.event, { tab: _this.tabs[i] }, fActivate);
          this.tabs[i].accordionAnchor.on(_this.options.event, { tab: _this.tabs[i] }, fActivate);
       }
    };

    /**
     * This function gets the tab that should be opened at start
     * @returns {Object} Tab object
     */
    ResponsiveTabs.prototype._getStartTab = function () {
       var tabRef = this._getTabRefBySelector(window.location.hash);
       var startTab;

       // Check if the page has a hash set that is linked to a tab
       if (tabRef >= 0 && !this._getTab(tabRef).disabled) {
          // If so, set the current tab to the linked tab
          startTab = this._getTab(tabRef);
       } else if (this.options.active > 0 && !this._getTab(this.options.active).disabled) {
          startTab = this._getTab(this.options.active);
       } else {
          // If not, just get the first one
          startTab = this._getTab(0);
       }

       return startTab;
    };

    /**
     * This function sets the current state of the plugin
     * @param {Event} e - The event that triggers the state change
     */
    ResponsiveTabs.prototype._setState = function (e) {
       var $ul = $('ul:first', this.$element);
       var oldState = this.state;
       var startCollapsedIsState = (typeof this.options.startCollapsed === 'string');
       var startTab;

       // The state is based on the visibility of the tabs list
       if ($ul.is(':visible')) {
          // Tab list is visible, so the state is 'tabs'
          this.state = 'tabs';
       } else {
          // Tab list is invisible, so the state is 'accordion'
          this.state = 'accordion';
       }

       // If the new state is different from the old state
       if (this.state !== oldState) {
          // If so, the state activate trigger must be called
          this.$element.trigger('tabs-activate-state', { oldState: oldState, newState: this.state });

          // Check if the state switch should open a tab
          if (oldState && startCollapsedIsState && this.options.startCollapsed !== this.state && this._getCurrentTab() === undefined) {
             // Get initial tab
             startTab = this._getStartTab(e);
             // Open the initial tab
             this._openTab(e, startTab); // Open first tab
          }
       }
    };

    /**
     * This function opens a tab
     * @param {Event} e - The event that triggers the tab opening
     * @param {Object} oTab - The tab object that should be opened
     * @param {Boolean} closeCurrent - Defines if the current tab should be closed
     * @param {Boolean} stopRotation - Defines if the tab rotation loop should be stopped
     */
    ResponsiveTabs.prototype._openTab = function (e, oTab, closeCurrent, stopRotation) {
       var _this = this;
       var scrollOffset;

       // Check if the current tab has to be closed
       if (closeCurrent) {
          this._closeTab(e, this._getCurrentTab());
       }

       // Check if the rotation has to be stopped when activated
       if (stopRotation && this.rotateInterval > 0) {
          this.stopRotation();
       }

       // Set this tab to active
       oTab.active = true;
       // Set active classes to the tab button and accordion tab button
       oTab.tab.removeClass(_this.options.classes.stateDefault).addClass(_this.options.classes.stateActive);
       oTab.accordionTab.removeClass(_this.options.classes.stateDefault).addClass(_this.options.classes.stateActive);

       // Run panel transiton
       _this._doTransition(oTab.panel, _this.options.animation, 'open', function () {
          var scrollOnLoad = (e.type !== 'tabs-load' || _this.options.scrollToAccordionOnLoad);

          // When finished, set active class to the panel
          oTab.panel.removeClass(_this.options.classes.stateDefault).addClass(_this.options.classes.stateActive);

          // And if enabled and state is accordion, scroll to the accordion tab
          if (_this.getState() === 'accordion' && _this.options.scrollToAccordion && (!_this._isInView(oTab.accordionTab) || _this.options.animation !== 'default') && scrollOnLoad) {

             // Add offset element's height to scroll position
             scrollOffset = oTab.accordionTab.offset().top - _this.options.scrollToAccordionOffset;

             // Check if the animation option is enabled, and if the duration isn't 0
             if (_this.options.animation !== 'default' && _this.options.duration > 0) {
                // If so, set scrollTop with animate and use the 'animation' duration
                $('html, body').animate({
                   scrollTop: scrollOffset
                }, _this.options.duration);
             } else {
                //  If not, just set scrollTop
                $('html, body').scrollTop(scrollOffset);
             }
          }
       });

       this.$element.trigger('tabs-activate', oTab);
    };

    /**
     * This function closes a tab
     * @param {Event} e - The event that is triggered when a tab is closed
     * @param {Object} oTab - The tab object that should be closed
     */
    ResponsiveTabs.prototype._closeTab = function (e, oTab) {
       var _this = this;
       var doQueueOnState = typeof _this.options.animationQueue === 'string';
       var doQueue;

       if (oTab !== undefined) {
          if (doQueueOnState && _this.getState() === _this.options.animationQueue) {
             doQueue = true;
          } else if (doQueueOnState) {
             doQueue = false;
          } else {
             doQueue = _this.options.animationQueue;
          }

          // Deactivate tab
          oTab.active = false;
          // Set default class to the tab button
          oTab.tab.removeClass(_this.options.classes.stateActive).addClass(_this.options.classes.stateDefault);

          // Run panel transition
          _this._doTransition(oTab.panel, _this.options.animation, 'close', function () {
             // Set default class to the accordion tab button and tab panel
             oTab.accordionTab.removeClass(_this.options.classes.stateActive).addClass(_this.options.classes.stateDefault);
             oTab.panel.removeClass(_this.options.classes.stateActive).addClass(_this.options.classes.stateDefault);
          }, !doQueue);

          this.$element.trigger('tabs-deactivate', oTab);
       }
    };

    /**
     * This function runs an effect on a panel
     * @param {Element} panel - The HTML element of the tab panel
     * @param {String} method - The transition method reference
     * @param {String} state - The state (open/closed) that the panel should transition to
     * @param {Function} callback - The callback function that is called after the transition
     * @param {Boolean} dequeue - Defines if the event queue should be dequeued after the transition
     */
    ResponsiveTabs.prototype._doTransition = function (panel, method, state, callback, dequeue) {
       var effect;
       var _this = this;

       // Get effect based on method
       switch (method) {
          case 'slide':
             effect = (state === 'open') ? 'slideDown' : 'slideUp';
             break;
          case 'fade':
             effect = (state === 'open') ? 'fadeIn' : 'fadeOut';
             break;
          default:
             effect = (state === 'open') ? 'show' : 'hide';
             // When default is used, set the duration to 0
             _this.options.duration = 0;
             break;
       }

       // Add the transition to a custom queue
       this.$queue.queue('responsive-tabs', function (next) {
          // Run the transition on the panel
          panel[effect]({
             duration: _this.options.duration,
             complete: function () {
                // Call the callback function
                callback.call(panel, method, state);
                // Run the next function in the queue
                next();
             }
          });
       });

       // When the panel is openend, dequeue everything so the animation starts
       if (state === 'open' || dequeue) {
          this.$queue.dequeue('responsive-tabs');
       }

    };

    /**
     * This function returns the collapsibility of the tab in this state
     * @returns {Boolean} The collapsibility of the tab
     */
    ResponsiveTabs.prototype._isCollapisble = function () {
       return (typeof this.options.collapsible === 'boolean' && this.options.collapsible) || (typeof this.options.collapsible === 'string' && this.options.collapsible === this.getState());
    };

    /**
     * This function returns a tab by numeric reference
     * @param {Integer} numRef - Numeric tab reference
     * @returns {Object} Tab object
     */
    ResponsiveTabs.prototype._getTab = function (numRef) {
       return this.tabs[numRef];
    };

    /**
     * This function returns the numeric tab reference based on a hash selector
     * @param {String} selector - Hash selector
     * @returns {Integer} Numeric tab reference
     */
    ResponsiveTabs.prototype._getTabRefBySelector = function (selector) {
       // Loop all tabs
       for (var i = 0; i < this.tabs.length; i++) {
          // Check if the hash selector is equal to the tab selector
          if (this.tabs[i].selector === selector) {
             return i;
          }
       }
       // If none is found return a negative index
       return -1;
    };

    /**
     * This function returns the current tab element
     * @returns {Object} Current tab element
     */
    ResponsiveTabs.prototype._getCurrentTab = function () {
       return this._getTab(this._getCurrentTabRef());
    };

    /**
     * This function returns the next tab's numeric reference
     * @param {Integer} currentTabRef - Current numeric tab reference
     * @returns {Integer} Numeric tab reference
     */
    ResponsiveTabs.prototype._getNextTabRef = function (currentTabRef) {
       var tabRef = (currentTabRef || this._getCurrentTabRef());
       var nextTabRef = (tabRef === this.tabs.length - 1) ? 0 : tabRef + 1;
       return (this._getTab(nextTabRef).disabled) ? this._getNextTabRef(nextTabRef) : nextTabRef;
    };

    /**
     * This function returns the previous tab's numeric reference
     * @returns {Integer} Numeric tab reference
     */
    ResponsiveTabs.prototype._getPreviousTabRef = function () {
       return (this._getCurrentTabRef() === 0) ? this.tabs.length - 1 : this._getCurrentTabRef() - 1;
    };

    /**
     * This function returns the current tab's numeric reference
     * @returns {Integer} Numeric tab reference
     */
    ResponsiveTabs.prototype._getCurrentTabRef = function () {
       // Loop all tabs
       for (var i = 0; i < this.tabs.length; i++) {
          // If this tab is active, return it
          if (this.tabs[i].active) {
             return i;
          }
       }
       // No tabs have been found, return negative index
       return -1;
    };

    /**
     * This function gets the tallest tab and applied the height to all tabs
     */
    ResponsiveTabs.prototype._equaliseHeights = function () {
       var maxHeight = 0;

       $.each($.map(this.tabs, function (tab) {
          maxHeight = Math.max(maxHeight, tab.panel.css('minHeight', '').height());
          return tab.panel;
       }), function () {
          this.css('minHeight', maxHeight);
       });
    };

    //
    // HELPER FUNCTIONS
    //

    ResponsiveTabs.prototype._isInView = function ($element) {
       var docViewTop = $(window).scrollTop(),
          docViewBottom = docViewTop + $(window).height(),
          elemTop = $element.offset().top,
          elemBottom = elemTop + $element.height();
       return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    };

    //
    // PUBLIC FUNCTIONS
    //

    /**
     * This function activates a tab
     * @param {Integer} tabRef - Numeric tab reference
     * @param {Boolean} stopRotation - Defines if the tab rotation should stop after activation
     */
    ResponsiveTabs.prototype.activate = function (tabRef, stopRotation) {
       var e = jQuery.Event('tabs-activate');
       var oTab = this._getTab(tabRef);
       if (!oTab.disabled) {
          this._openTab(e, oTab, true, stopRotation || true);
       }
    };

    /**
     * This function deactivates a tab
     * @param {Integer} tabRef - Numeric tab reference
     */
    ResponsiveTabs.prototype.deactivate = function (tabRef) {
       var e = jQuery.Event('tabs-dectivate');
       var oTab = this._getTab(tabRef);
       if (!oTab.disabled) {
          this._closeTab(e, oTab);
       }
    };

    /**
     * This function enables a tab
     * @param {Integer} tabRef - Numeric tab reference
     */
    ResponsiveTabs.prototype.enable = function (tabRef) {
       var oTab = this._getTab(tabRef);
       if (oTab) {
          oTab.disabled = false;
          oTab.tab.addClass(this.options.classes.stateDefault).removeClass(this.options.classes.stateDisabled);
          oTab.accordionTab.addClass(this.options.classes.stateDefault).removeClass(this.options.classes.stateDisabled);
       }
    };

    /**
     * This function disable a tab
     * @param {Integer} tabRef - Numeric tab reference
     */
    ResponsiveTabs.prototype.disable = function (tabRef) {
       var oTab = this._getTab(tabRef);
       if (oTab) {
          oTab.disabled = true;
          oTab.tab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
          oTab.accordionTab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
       }
    };

    /**
     * This function gets the current state of the plugin
     * @returns {String} State of the plugin
     */
    ResponsiveTabs.prototype.getState = function () {
       return this.state;
    };

    /**
     * This function starts the rotation of the tabs
     * @param {Integer} speed - The speed of the rotation
     */
    ResponsiveTabs.prototype.startRotation = function (speed) {
       var _this = this;
       // Make sure not all tabs are disabled
       if (this.tabs.length > this.options.disabled.length) {
          this.rotateInterval = setInterval(function () {
             var e = jQuery.Event('rotate');
             _this._openTab(e, _this._getTab(_this._getNextTabRef()), true);
          }, speed || (($.isNumeric(_this.options.rotate)) ? _this.options.rotate : 4000));
       } else {
          throw new Error("Rotation is not possible if all tabs are disabled");
       }
    };

    /**
     * This function stops the rotation of the tabs
     */
    ResponsiveTabs.prototype.stopRotation = function () {
       window.clearInterval(this.rotateInterval);
       this.rotateInterval = 0;
    };

    /**
     * This function can be used to get/set options
     * @return {any} Option value
     */
    ResponsiveTabs.prototype.option = function (key, value) {
       if (value) {
          this.options[key] = value;
       }
       return this.options[key];
    };

    /** jQuery wrapper */
    $.fn.responsiveTabs = function (options) {
       var args = arguments;
       var instance;

       if (options === undefined || typeof options === 'object') {
          return this.each(function () {
             if (!$.data(this, 'responsivetabs')) {
                $.data(this, 'responsivetabs', new ResponsiveTabs(this, options));
             }
          });
       } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
          instance = $.data(this[0], 'responsivetabs');

          // Allow instances to be destroyed via the 'destroy' method
          if (options === 'destroy') {
             // TODO: destroy instance classes, etc
             $.data(this, 'responsivetabs', null);
          }

          if (instance instanceof ResponsiveTabs && typeof instance[options] === 'function') {
             return instance[options].apply(instance, Array.prototype.slice.call(args, 1));
          } else {
             return this;
          }
       }
    };

 }(jQuery, window));
   //accordion step 2
   $(document).ready(function () {
    var $tabs = $('#horizontalTab');
    $tabs.responsiveTabs({
       rotate: false,
       startCollapsed: 'accordion',
       collapsible: 'accordion',
       setHash: true,


    });


 });