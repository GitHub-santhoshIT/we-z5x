"use strict";$(document).ready(function(){1024<$(window).width()&&($("body").on("mouseover",".dropdown",function(e){$(this).children(".dropdown-toggle").dropdown("show")}),$("body").on("mouseleave",".dropdown",function(e){$(this).children(".dropdown-toggle").dropdown("hide")}))}),992<$(window).width()&&$(window).scroll(function(){40<$(this).scrollTop()?($("#navbar_top").addClass("fixed-top"),$("body").css("padding-top",$(".navbar").outerHeight()+"px")):($("#navbar_top").removeClass("fixed-top"),$("body").css("padding-top","0"))});var slideWrapper=$(".main-slider"),iframes=slideWrapper.find(".embed-player"),lazyImages=slideWrapper.find(".slide-image"),lazyCounter=0;function postMessageToPlayer(e,t){null!=e&&null!=t&&e.contentWindow.postMessage(JSON.stringify(t),"*")}function playPauseVideo(e,t){var o,i,n,a,s;if(i=(o=e.find(".slick-current")).attr("class").split(" ")[1],a=o.find("iframe").get(0),n=o.data("video-start"),"vimeo"===i)switch(t){case"play":null!=n&&0<n&&!o.hasClass("started")&&(o.addClass("started"),postMessageToPlayer(a,{method:"setCurrentTime",value:n})),postMessageToPlayer(a,{method:"play",value:1});break;case"pause":postMessageToPlayer(a,{method:"pause",value:1})}else if("youtube"===i)switch(t){case"play":postMessageToPlayer(a,{event:"command",func:"mute"}),postMessageToPlayer(a,{event:"command",func:"playVideo"});break;case"pause":postMessageToPlayer(a,{event:"command",func:"pauseVideo"})}else"video"===i&&null!=(s=o.children("video").get(0))&&("play"===t?s.play():s.pause())}function resizePlayer(e,t){if(e[0]){var o,i,n=$(".main-slider"),a=n.width(),s=n.height();t=t||16/9;e.each(function(){var e=$(this);a/t<s?(o=Math.ceil(s*t),e.width(o).height(s).css({left:(a-o)/2,top:0})):(i=Math.ceil(a/t),e.width(a).height(i).css({left:0,top:(s-i)/2}))})}}function dotsThrottle(o,i,n){var a,s,l,r=null,c=0;n||(n={});var d=function(){c=!1===n.leading?0:Date.now(),r=null,l=o.apply(a,s),r||(a=s=null)};return function(){var e=Date.now();c||!1!==n.leading||(c=e);var t=i-(e-c);return a=this,s=arguments,t<=0||i<t?(r&&(clearTimeout(r),r=null),c=e,l=o.apply(a,s),r||(a=s=null)):r||!1===n.trailing||(r=setTimeout(d,t)),l}}$(function(){slideWrapper.on("init",function(e){e=$(e.currentTarget),setTimeout(function(){playPauseVideo(e,"play")},1e3),resizePlayer(iframes,16/9)}),slideWrapper.on("beforeChange",function(e,t){playPauseVideo(t=$(t.$slider),"pause")}),slideWrapper.on("afterChange",function(e,t){playPauseVideo(t=$(t.$slider),"play")}),slideWrapper.on("lazyLoaded",function(e,t,o,i){++lazyCounter===lazyImages.length&&lazyImages.addClass("show")}),slideWrapper.slick({autoplaySpeed:4e3,lazyLoad:"progressive",speed:600,arrows:!1,dots:!0,cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)"})}),$(window).on("resize.slickVideoPlayer",function(){resizePlayer(iframes,16/9)}),$(".home-block-carousel").slick({dots:!1,infinite:!0,fade:!0,autoplay:!1,autoplaySpeed:6e3,draggable:!1,slidesToShow:1,slidesToScroll:1,arrows:!0,responsive:[{breakpoint:1024,settings:{draggable:!0}},{breakpoint:767,settings:{arrows:!1,dots:!0}}]}),$(".management-talk-carousel").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,dots:!0,arrows:!1,autoplaySpeed:1e4}),$(".sider-counter").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,dots:!0,arrows:!1,autoplaySpeed:1e4});var dotFixedNavPresent=!1,dotFixedNavId="",dotFixedNavUp=!1;function easyScrollDots(e){var t=document.querySelectorAll(".scroll-indicator");if(!0===e.fixedNav&&(dotFixedNavPresent=!0),dotFixedNavId=""!==e.fixedNavId&&e.fixedNavId,!0===e.fixedNavUpward&&(dotFixedNavUp=!0),t.length){document.querySelector("body").lastElementChild.insertAdjacentHTML("afterend",'<div class="scroll-indicator-controller"><span></span></div>');var a=document.querySelector(".scroll-indicator-controller");void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")||a.classList.add("indi-mobile");var n=Array.prototype.slice.call(t);n.forEach(function(e,t){var o=e.getAttribute("id"),i=e.getAttribute("data-scroll-indicator-title"),n="";0==t&&(n="active"),a.lastElementChild.insertAdjacentHTML("afterend",'<div class="'+n+'" data-indi-controller-id="'+o+'" onclick="scrollIndiClicked(\''+o+"');\"><span>"+i+"</span><div></div></div>")});var s=a.querySelectorAll("[data-indi-controller-id]"),o=dotsThrottle(function(){var i={};n.forEach(function(e){var t=e.getAttribute("id"),o=e.getBoundingClientRect().top;i[t]=o});var o=Object.keys(i).map(function(e){return i[e]});Object.keys(i).forEach(function(e){var t;i[e]==(t=o.filter(function(e){return-150<e}),Math.min.apply(null,t))&&(Array.prototype.forEach.call(s,function(e){e.classList.contains("active")&&e.classList.remove("active")}),a.querySelector('[data-indi-controller-id="'+e+'"]').classList.add("active"))})},300);window.onscroll=function(){o()}}}function scrollIndiClicked(e){if(window.jQuery)if(!0===dotFixedNavPresent&&dotFixedNavId.length){var t=document.getElementById(dotFixedNavId).clientHeight,o=$("html, body"),i=$("#"+e);if(!0===dotFixedNavUp){o.animate({scrollTop:i.offset().top},700);var n=document.body.getBoundingClientRect().top;setTimeout(function(){document.body.getBoundingClientRect().top>n&&o.animate({scrollTop:i.offset().top-t},400)},400)}else o.animate({scrollTop:i.offset().top-t},700)}else $("html, body").animate({scrollTop:$("#"+e).offset().top},700);else if(!0===dotFixedNavPresent&&dotFixedNavId.length){var a=document.getElementById(dotFixedNavId).clientHeight,s=document.getElementById(e);if(!0===dotFixedNavUp){window.scrollTo({top:s.offsetTop,left:0,behavior:"smooth"});var l=document.body.getBoundingClientRect().top;setTimeout(function(){document.body.getBoundingClientRect().top>l&&window.scrollTo({top:s.offsetTop-a,left:0,behavior:"smooth"})},400)}else window.scrollTo({top:s.offsetTop-a,left:0,behavior:"smooth"})}else window.scrollTo({top:document.getElementById(e).offsetTop,left:0,behavior:"smooth"})}function checkVisible(){$(".round-block").each(function(e,t){$(this).visible()&&$(t).addClass("enlarge-circle")})}easyScrollDots({fixedNav:!1,fixedNavId:"",fixedNavUpward:!1}),$(document).ready(function(){$("a").on("click",function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},768,function(){window.location.hash=t})}})}),$.fn.visible=function(e){var t=$(this),o=$(window),i=o.scrollTop(),n=i+o.height(),a=t.offset().top,s=a+t.height();return(!0===e?a:s)<=n&&i<=(!0===e?s:a)},$(document).ready(function(e){checkVisible()}),$(window).scroll(function(e){checkVisible()}),function(d){d.fn.countTo=function(c){return c=c||{},d(this).each(function(){var o=d.extend({},d.fn.countTo.defaults,{from:d(this).data("from"),to:d(this).data("to"),speed:d(this).data("speed"),refreshInterval:d(this).data("refresh-interval"),decimals:d(this).data("decimals")},c),e=Math.ceil(o.speed/o.refreshInterval),t=(o.to-o.from)/e,i=this,n=d(this),a=0,s=o.from,l=n.data("countTo")||{};function r(e){var t=o.formatter.call(i,e,o);n.html(t)}n.data("countTo",l),l.interval&&clearInterval(l.interval),l.interval=setInterval(function(){a++,r(s+=t),"function"==typeof o.onUpdate&&o.onUpdate.call(i,s);e<=a&&(n.removeData("countTo"),clearInterval(l.interval),s=o.to,"function"==typeof o.onComplete&&o.onComplete.call(i,s))},o.refreshInterval),r(s)})},d.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:function(e,t){return e.toFixed(t.decimals)},onUpdate:null,onComplete:null}}(jQuery),jQuery(function(o){o(".count-number").data("countToOptions",{formatter:function(e,t){return e.toFixed(t.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g,",")}}),o(".timer").each(function(e){var t=o(this);e=o.extend({},e||{},t.data("countToOptions")||{}),t.countTo(e)})}),$(document).ready(function(){var i=$(window).scrollTop();$(window).on("scroll",function(e){var t=$(".scroll-indicator-controller"),o=$(this).scrollTop();i<=o&&44<o?(t.css({position:"fixed",top:"100",opacity:"1"}),$(".scroll-indicator-controller").slideDown()):(t.css({position:"static"}),$(".scroll-indicator-controller").show()),i=o})}),$(".content").each(function(){var e=$(this);e.attr("style")&&e.parent().addClass("class-new")}),$(document).ready(function(){$("#archiveCarousel").carousel({interval:4e3});var i=!1;$("#archiveCarousel").on("click",".nav a",function(){i=!0,$(".nav li").removeClass("active"),$(this).parent().addClass("active")}).on("slid.bs.carousel",function(e){if(!i){var t=$(".nav").children().length-1,o=$(".nav li.active");o.removeClass("active").next().addClass("active"),t==parseInt(o.data("slide-to"))&&$(".nav li").first().addClass("active")}i=!1})}),$(".container").stickem({item:".stickem",container:".stickem-container",stickClass:"stickit",endStickClass:"stickit-end",offset:0,onStick:null,onUnstick:null}),function(a,o,e,t){var i=function(e,t){this.elem=e,this.$elem=a(e),this.options=t,this.metadata=this.$elem.data("stickem-options"),this.$win=a(o)};i.defaults=(i.prototype={defaults:{item:".stickem",container:".stickem-container",stickClass:"stickit",endStickClass:"stickit-end",offset:0,start:0,onStick:null,onUnstick:null},init:function(){var e=this;return e.config=a.extend({},e.defaults,e.options,e.metadata),e.setWindowHeight(),e.getItems(),e.bindEvents(),e},bindEvents:function(){var e=this;e.$win.on("scroll.stickem",a.proxy(e.handleScroll,e)),e.$win.on("resize.stickem",a.proxy(e.handleResize,e))},destroy:function(){this.$win.off("scroll.stickem"),this.$win.off("resize.stickem")},getItem:function(e,t){var o=this,i=a(t),n={$elem:i,elemHeight:i.height(),$container:i.parents(o.config.container),isStuck:!1};o.windowHeight>n.elemHeight?(n.containerHeight=n.$container.outerHeight(),n.containerInner={border:{bottom:parseInt(n.$container.css("border-bottom"),10)||0,top:parseInt(n.$container.css("border-top"),10)||0},padding:{bottom:parseInt(n.$container.css("padding-bottom"),10)||0,top:parseInt(n.$container.css("padding-top"),10)||0}},n.containerInnerHeight=n.$container.height(),n.containerStart=n.$container.offset().top-o.config.offset+o.config.start+n.containerInner.padding.top+n.containerInner.border.top,n.scrollFinish=n.containerStart-o.config.start+(n.containerInnerHeight-n.elemHeight),n.containerInnerHeight>n.elemHeight&&o.items.push(n)):n.$elem.removeClass(o.config.stickClass+" "+o.config.endStickClass)},getItems:function(){var e=this;e.items=[],e.$elem.find(e.config.item).each(a.proxy(e.getItem,e))},handleResize:function(){this.getItems(),this.setWindowHeight()},handleScroll:function(){var e=this;if(0<e.items.length)for(var t=e.$win.scrollTop(),o=0,i=e.items.length;o<i;o++){var n=e.items[o];n.isStuck&&(t<n.containerStart||t>n.scrollFinish)||t>n.scrollFinish?(n.$elem.removeClass(e.config.stickClass),t>n.scrollFinish&&n.$elem.addClass(e.config.endStickClass),n.isStuck=!1,e.config.onUnstick&&e.config.onUnstick(n)):!1===n.isStuck&&t>n.containerStart&&t<n.scrollFinish&&(n.$elem.removeClass(e.config.endStickClass).addClass(e.config.stickClass),n.isStuck=!0,e.config.onStick&&e.config.onStick(n))}},setWindowHeight:function(){this.windowHeight=this.$win.height()-this.config.offset}}).defaults,a.fn.stickem=function(e){return this.destroy=function(){this.each(function(){new i(this,e).destroy()})},this.each(function(){new i(this,e).init()})}}(jQuery,window,document),$("#nav").children("li").first().children("a").addClass("active").next().addClass("is-open").show(),$("#nav").on("click","li > a",function(){$(this).hasClass("active")||($("#nav .is-open").removeClass("is-open").hide(),$(this).next().toggleClass("is-open").toggle(),$("#nav").find(".active").removeClass("active"),$(this).addClass("active"))});