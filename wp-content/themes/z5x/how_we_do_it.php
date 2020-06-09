<?php
/* Template Name: Our Thinking */

    $howedoit_args = array(
    'post_type'=> 'howedoit',
    'order'    => 'ASC',
    'orderby' => 'date',
    'posts_per_page' => 8,
    'post_status' => 'publish'
    );  
    $howedoit_post=get_posts($howedoit_args);
    //print_r($howedoit_post); exit; 
?>

  <section class="process_section" id="process">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 howdo_leftbox">
            <div class="sub_heading">HOW WE DO IT</div>
            <div class="heading_title wow bounceInUp">
              <p>Our web designers finish your website to provide you with a superior quality.</p>
              <div class="know_more" hidden>
                <a href="">Explore Server</a><i class="fa fa-angle-right"></i>
              </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="process-carousel wow bounceInRight">
              <div class="process-carouselitem">
               <?php  //foreach($howedoit_post as $howedoit) 
               foreach ($howedoit_post as $key => $howedoit)
                {
                 if($key == 0 || $key == 1 || $key == 2 || $key == 3 )
                 {  ?>
                <div class="process_container">
                <div class="process_icon"><?php echo get_the_post_thumbnail( $howedoit->ID, 'full'); ?></div>
                <div class="process_content">
                <p class="process_title"><?php echo get_the_title($howedoit->ID); ?></p>
                <p class="process_desc"><?php echo get_the_excerpt($howedoit->ID); ?></p>
                </div>
                </div>
                <?php } } ?>
                </div>

                <div class="process-carouselitem">
                <?php 
                foreach ($howedoit_post as $key => $howedoit)
                {
                  if($key == 4 || $key == 5 || $key == 6 || $key == 7 )
                  {  ?>
                <div class="process_container">
                  <div class="process_icon"><?php echo get_the_post_thumbnail( $howedoit->ID, 'full'); ?></div>
                  <div class="process_content">
                    <p class="process_title"><?php echo get_the_title($howedoit->ID); ?></p>
                    <p class="process_desc"><?php echo get_the_excerpt($howedoit->ID); ?></p>
                  </div>
                </div>
                <?php 
                   } 
                } ?>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
