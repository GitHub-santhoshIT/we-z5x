<?php
global $domain_url;
$domain_url = home_url()."/wp-content/themes/z5x";

$site_url = 'https://www.z5x.tech';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <?xml version="1.0" encoding="utf-8"?>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  
  <link rel="icon" sizes="512x512" href="<?php echo get_template_directory_uri(); ?>/images/android-chrome-512x512.png">
  <link rel="icon" sizes="192x192" href="<?php echo get_template_directory_uri(); ?>/images/android-chrome-192x192.png">
  <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/images/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/images/favicon-16x16.png">

  <title>Z5X</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap" rel="stylesheet">

  <!-- Theme CSS -->
  <link rel="stylesheet" href="https://www.z5x.tech/wp-content/themes/z5x/css/bootstrap.css">
  <link rel="stylesheet" href="<?php echo $domain_url; ?>/css/slick.css">

  <link rel="stylesheet" href="<?php echo $domain_url; ?>/css/animate.css" >
  <link rel="stylesheet" href="<?php echo $domain_url; ?>/css/style.css">

</head>

<body id="page-top">

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg bg-light text-uppercase fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="http://www.z5x.tech/index">
        <img src="<?php echo $domain_url; ?>/images/z5xlogo.png" />
      </a>
      <button class="navbar-toggler navbar-toggler-right mobile_menubtn text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="hamberger1"></span>
        <span class="hamberger2"></span>
        <span class="hamberger3"></span>
        <!-- <i class="fa fa-bars"></i> -->
      </button>
      <div class="collapse navbar-collapse mainmenu" id="navbarResponsive">
       <?php 
       if(is_page( 'aboutus' ) || is_page( 'services' ) || is_page( 'apply-job' ) || is_page( 'job-openings' ))
       {
       $home = $site_url; 
       $about_us = $site_url.'/aboutus/';  
       $our_services = $site_url.'/services/';
       $process = "#process";
       $our_thinking = "#ourthinking";
       $contact = "#contact";
       } else {
       $home = '#page-top'; 
       $about_us = "#aboutus";
       $our_services = "#services";
       $process = "#process";
       $our_thinking = "#ourthinking";
       $contact = "#contact";
       }
       
       /* for pages hidding */
       if(is_page( 'aboutus' ) || is_page( 'services' ) || is_page( 'job-openings' ) || is_page( 'apply-job' ))
       { 
        //$active = 'active_currentmenu';
        //$active1 = 'active_currentmenu';
        ?>
        <style>
        .hide {
           display: none;
           }
        </style>      
       <?php }  
       ?> 

       <?php
       if(is_page( 'aboutus' ))
       {
        $active = 'active_currentmenu';
       }
       if(is_page( 'services' ))
       {
        $active1 = 'active_currentmenu';
       }

       ?>
      
       <ul class="navbar-nav ml-auto"> 
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 js-scroll-trigger" href=<?php echo $home; ?>>Home</a>
          </li> 
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 js-scroll-trigger <?php echo $active; ?>" href= <?php echo $about_us; ?>>ABOUT US</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 js-scroll-trigger <?php echo $active1; ?>" href=<?php echo $our_services; ?>>SERVICES</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 js-scroll-trigger hide" href=<?php echo $process; ?>>PROCESS</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1" hidden>
            <a class="nav-link py-3 px-0 px-lg-3 js-scroll-trigger hide" href=<?php echo $our_thinking; ?>>OUR THINKING</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 js-scroll-trigger hide" href=<?php echo $contact; ?>>CONTACT</a>
          </li>
          <?php if(!is_page( 'job-openings' )) { ?>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 js-scroll-trigger hire_btn <?php echo $active; ?>" href="https://www.z5x.tech/job-openings" target="_blank">CURRENT OPENINGS</a>
          </li>
        <?php } ?>
       </ul>  

       <?php 
         /*  wp_nav_menu( array(
                 'container' => 'ul', 
                 'container_class' => 'nav-item mx-0 mx-lg-1',
                 'container_id' => '',
                 'menu_class' => 'navbar-nav ml-auto',
                 'menu_id' => '',
                 'echo' => true,
                 'fallback_cb' => 'wp_page_menu',
                 'before' => '', 
                 'after' => '',
                 'link_before' => '',
                 'link_after' => '',
                 'theme_location' => 'header-menu'
                  ) );   */
                //wp_nav_menu( array( 'theme_location' => 'header-menu' ) );
        ?>
      </div>
    </div>
  </nav>
