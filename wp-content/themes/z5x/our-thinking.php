<?php
/* Template Name: Our Thinking */

    $ourthinking_args = array(
    'post_type'=> 'ourthinking',
    'order'    => 'ASC',
    'orderby' => 'date',
    'posts_per_page' => 8,
    'post_status' => 'publish'
    );  
    $ourthinking_post=get_posts($ourthinking_args);
    //print_r($ourthinking_post); 
?>

<section class="ourthinking_section" id="ourthinking">
    <div class="container">
        <div class="sub_heading">OUR THINKING</div>
        <div class="heading_title wow bounceInUp">
          <p>We love to talk about skills and everything else</p>
          <div class="know_more" hidden>
            <a href="">Explore Server</a><i class="fa fa-angle-right"></i>
          </div>
        </div>
        <div class="ourthinking-carousel wow bounceInDown">
          <?php foreach($ourthinking_post as $ourthinking) {?>
          <div class="ourthinking-carouselitem">

            <div class="ourthinking_img"><?php echo get_the_post_thumbnail( $ourthinking->ID, 'full'); ?></div>
            <div class="ourthinking_title"><?php echo get_the_title($ourthinking->ID); ?></div>
            <div class="ourthinking_desc"><?php echo get_the_excerpt($ourthinking->ID); ?></div>
            <div class="know_more">
              <a href="#">Read More</a><i class="fa fa-angle-right"></i>
            </div>
          </div>
          <?php } ?>
        </div>
    </div>
  </section>