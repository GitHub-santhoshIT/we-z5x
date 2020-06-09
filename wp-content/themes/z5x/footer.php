<?php
global $domain_url;
$domain_url = home_url()."/wp-content/themes/z5x";
?>


<section class="contact_section">
	<div class="container contact_line">
	  <div class="row">
		<div class="col-12 col-md-4" hidden>
		  <div class="contact_icon"><img src="<?php echo $domain_url; ?>/images/mobile_icon.svg"></div>
		  <div class="contact_details">
			  <div class="contact_title">Calls us</div>
			  <div class="contact_number">
				<a href="tel:+91 9966567143">+91 1234567890</a>
			  </div>
		  </div>            
		</div>
		<div class="col-12 col-md-6">
		  <div class="contact_icon"><img src="<?php echo $domain_url; ?>/images/mail_icon.svg"></div>
		  <div class="contact_details">
			  <div class="contact_title">Email us</div>
			  <div class="contact_number">
				<a href="mailto:info.in@z5x.com">info@z5x.com</a>
			  </div>
		  </div>            
		</div>
		<div class="col-12 col-md-6">
		  <div class="contact_icon"><img src="<?php echo $domain_url; ?>/images/location_icon.svg"></div>
		  <div class="contact_details">
			  <div class="contact_title">Address</div>
			  <div class="contact_number">Western Aqua, Whitefields, HITEC City, Hyderabad, Telangana 500081</div>
		  </div>            
		</div>
	  </div>
	</div>
	<div class="container">
	  <div class="row footer_links">
		<div class="col-12 col-md-6 mobile_marB20">
		  <a href="http://www.z5x.tech">Home</a>
		  <a href="http://www.z5x.tech/aboutus/">About us</a>
		  <a href="http://www.z5x.tech/services/">Services</a>
		  <a href="http://www.esselgroup.com/privacy-policy.html" target="_blank">Privacy Policy</a>     
		</div>
		<div class="col-12 col-md-6 mobile_marB20" >
			<div class="social_icons" hidden>
			  <a href=""><i class="fa fa-facebook"></i></a>
			  <a href=""><i class="fa fa-twitter"></i></a>
			  <a href=""><i class="fa fa-google-plus"></i></a>
			  <a href=""><i class="fa fa-linkedin"></i></a>
			</div>         
		  <div class="copyright">&copy; Z5X.2019. All rights reserved.</div>
		</div>
	  </div>
	</div>

</section>

<div class="scroll-to-top position-fixed ">
  <a class="js-scroll-trigger scroll_top" href="#page-top">
	<i class="fa fa-chevron-up"></i>
  </a>
</div>

  <!-- Bootstrap -->
  <script src="<?php echo $domain_url; ?>/js/jquery.js"></script>
  <script src="<?php echo $domain_url; ?>/js/slick.js"></script>
  <script src="<?php echo $domain_url; ?>/js/bootstrap.min.js"></script>
  <script src="<?php echo $domain_url; ?>/js/jquery.easing.min.js"></script>

  <script src="<?php echo $domain_url; ?>/js/particles.js" ></script>
  <script src="<?php echo $domain_url; ?>/js/custom.js"></script>
  <script src="<?php echo $domain_url; ?>/js/wow.js"></script>
  <script>
      wow = new WOW(
          {
          animateClass: 'animated',
          offset:       100,
          callback:     function(box) {
              console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
          }
          }
      );
      wow.init();

      $(document).ready(function() {

        // About Us Carousel
        $('.aboutus-carousel').slick({
            dots: true,
            arrows: false,
            infinite: false,
            centerMode: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        // services Carousel
        $('.services-carousel').slick({
              dots: true,
              arrows: false,
              infinite: false,
              centerMode: false,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 3,
              responsive: [
                  {
                      breakpoint: 1024,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                          infinite: true,
                          dots: false
                      }
                  },
                  {
                      breakpoint: 770,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2
                      }
                  },
                  {
                      breakpoint: 600,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 500,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
              ]
          });

          
        // Process Carousel
        $('.process-carousel').slick({
            dots: true,
            arrows: false,
            infinite: false,
            centerMode: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        
        // ourthinking Carousel
        $('.ourthinking-carousel').slick({
            dots: true,
            arrows: false,
            infinite: false,
            centerMode: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

      });
  </script>

</body>

</html>

