"use strict";function dotsThrottle(o,n,i){var l,r,a,d=null,c=0;i||(i={});var s=function(){c=!1===i.leading?0:Date.now(),d=null,a=o.apply(l,r),d||(l=r=null)};return function(){var t=Date.now();c||!1!==i.leading||(c=t);var e=n-(t-c);return l=this,r=arguments,e<=0||n<e?(d&&(clearTimeout(d),d=null),c=t,a=o.apply(l,r),d||(l=r=null)):d||!1===i.trailing||(d=setTimeout(s,e)),a}}992<$(window).width()&&$(window).scroll(function(){40<$(this).scrollTop()?($("#navbar_top").addClass("fixed-top"),$("body").css("padding-top",$(".navbar").outerHeight()+"px")):($("#navbar_top").removeClass("fixed-top"),$("body").css("padding-top","0"))}),$(".home-block-carousel").slick({dots:!1,infinite:!0,fade:!0,autoplay:!0,autoplaySpeed:6e3,draggable:!1,slidesToShow:1,slidesToScroll:1,arrows:!0}),$(".management-talk-carousel").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,dots:!0,arrows:!1,autoplaySpeed:1e4}),$(".sider-counter").slick({slidesToShow:1,fade:!0,slidesToScroll:1,autoplay:!0,dots:!0,arrows:!1,autoplaySpeed:1e4});var dotFixedNavPresent=!1,dotFixedNavId="",dotFixedNavUp=!1;function easyScrollDots(t){var e=document.querySelectorAll(".scroll-indicator");if(!0===t.fixedNav&&(dotFixedNavPresent=!0),dotFixedNavId=""!==t.fixedNavId&&t.fixedNavId,!0===t.fixedNavUpward&&(dotFixedNavUp=!0),e.length){document.querySelector("body").lastElementChild.insertAdjacentHTML("afterend",'<div class="scroll-indicator-controller"><span></span></div>');var l=document.querySelector(".scroll-indicator-controller");void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")||l.classList.add("indi-mobile");var i=Array.prototype.slice.call(e);i.forEach(function(t,e){var o=t.getAttribute("id"),n=t.getAttribute("data-scroll-indicator-title"),i="";0==e&&(i="active"),l.lastElementChild.insertAdjacentHTML("afterend",'<div class="'+i+'" data-indi-controller-id="'+o+'" onclick="scrollIndiClicked(\''+o+"');\"><span>"+n+"</span><div></div></div>")});var r=l.querySelectorAll("[data-indi-controller-id]"),o=dotsThrottle(function(){var n={};i.forEach(function(t){var e=t.getAttribute("id"),o=t.getBoundingClientRect().top;n[e]=o});var o=Object.keys(n).map(function(t){return n[t]});Object.keys(n).forEach(function(t){var e;n[t]==(e=o.filter(function(t){return-150<t}),Math.min.apply(null,e))&&(Array.prototype.forEach.call(r,function(t){t.classList.contains("active")&&t.classList.remove("active")}),l.querySelector('[data-indi-controller-id="'+t+'"]').classList.add("active"))})},300);window.onscroll=function(){o()}}}function scrollIndiClicked(t){if(window.jQuery)if(!0===dotFixedNavPresent&&dotFixedNavId.length){var e=document.getElementById(dotFixedNavId).clientHeight,o=$("html, body"),n=$("#"+t);if(!0===dotFixedNavUp){o.animate({scrollTop:n.offset().top},700);var i=document.body.getBoundingClientRect().top;setTimeout(function(){document.body.getBoundingClientRect().top>i&&o.animate({scrollTop:n.offset().top-e},400)},400)}else o.animate({scrollTop:n.offset().top-e},700)}else $("html, body").animate({scrollTop:$("#"+t).offset().top},700);else if(!0===dotFixedNavPresent&&dotFixedNavId.length){var l=document.getElementById(dotFixedNavId).clientHeight,r=document.getElementById(t);if(!0===dotFixedNavUp){window.scrollTo({top:r.offsetTop,left:0,behavior:"smooth"});var a=document.body.getBoundingClientRect().top;setTimeout(function(){document.body.getBoundingClientRect().top>a&&window.scrollTo({top:r.offsetTop-l,left:0,behavior:"smooth"})},400)}else window.scrollTo({top:r.offsetTop-l,left:0,behavior:"smooth"})}else window.scrollTo({top:document.getElementById(t).offsetTop,left:0,behavior:"smooth"})}function checkVisible(){$(".round-block").each(function(t,e){$(this).visible()?$(e).addClass("enlarge-circle"):$(e).removeClass("enlarge-circle")})}easyScrollDots({fixedNav:!1,fixedNavId:"",fixedNavUpward:!1}),$(document).ready(function(){$("a").on("click",function(t){if(""!==this.hash){t.preventDefault();var e=this.hash;$("html, body").animate({scrollTop:$(e).offset().top},800,function(){window.location.hash=e})}})}),$.fn.visible=function(t){var e=$(this),o=$(window),n=o.scrollTop(),i=n+o.height(),l=e.offset().top,r=l+e.height();return(!0===t?l:r)<=i&&n<=(!0===t?r:l)},$(document).ready(function(t){checkVisible()}),$(window).scroll(function(t){checkVisible()}),function(s){s.fn.countTo=function(c){return c=c||{},s(this).each(function(){var o=s.extend({},s.fn.countTo.defaults,{from:s(this).data("from"),to:s(this).data("to"),speed:s(this).data("speed"),refreshInterval:s(this).data("refresh-interval"),decimals:s(this).data("decimals")},c),t=Math.ceil(o.speed/o.refreshInterval),e=(o.to-o.from)/t,n=this,i=s(this),l=0,r=o.from,a=i.data("countTo")||{};function d(t){var e=o.formatter.call(n,t,o);i.html(e)}i.data("countTo",a),a.interval&&clearInterval(a.interval),a.interval=setInterval(function(){l++,d(r+=e),"function"==typeof o.onUpdate&&o.onUpdate.call(n,r);t<=l&&(i.removeData("countTo"),clearInterval(a.interval),r=o.to,"function"==typeof o.onComplete&&o.onComplete.call(n,r))},o.refreshInterval),d(r)})},s.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:function(t,e){return t.toFixed(e.decimals)},onUpdate:null,onComplete:null}}(jQuery),jQuery(function(o){o(".count-number").data("countToOptions",{formatter:function(t,e){return t.toFixed(e.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g,",")}}),o(".timer").each(function(t){var e=o(this);t=o.extend({},t||{},e.data("countToOptions")||{}),e.countTo(t)})}),$(document).ready(function(){var n=$(window).scrollTop();$(window).on("scroll",function(t){var e=$(".scroll-indicator-controller"),o=$(this).scrollTop();n<=o&&44<o?(e.css({position:"fixed",top:"100",opacity:"1"}),$(".scroll-indicator-controller").slideDown()):(e.css({position:"static"}),$(".scroll-indicator-controller").show()),n=o})});var $slider=$(".hero-slider");if($slider.length){var currentSlide,slidesCount,sliderCounter=document.createElement("div");sliderCounter.classList.add("slider__counter");var updateSliderCounter=function(t,e){currentSlide=t.slickCurrentSlide()+1,slidesCount=t.slideCount,$(sliderCounter).text(currentSlide+"/7")};$slider.on("init",function(t,e){$slider.append(sliderCounter),updateSliderCounter(e)}),$slider.on("afterChange",function(t,e,o){updateSliderCounter(e,o)}),$slider.slick()}$(".content").each(function(){var t=$(this);t.attr("style")&&t.parent().addClass("class-new")});