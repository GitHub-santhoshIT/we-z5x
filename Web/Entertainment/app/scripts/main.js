console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

///////////////// fixed menu on scroll for desktop
if ($(window).width() > 992) {
  $(window).scroll(function(){  
     if ($(this).scrollTop() > 40) {
        $('#navbar_top').addClass("fixed-top");
        // add padding top to show content behind navbar
        $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
      }else{
        $('#navbar_top').removeClass("fixed-top");
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