<?php
/* Template Name: Our Thinking */
    
    $whatwedo_args = array(
    'post_type'=> 'whatwedo',
    'order'    => 'ASC',
    'orderby' => 'date',
    'posts_per_page' => 10,
    'post_status' => 'publish'
    );  
    $whatwedo_post=get_posts($whatwedo_args);
  ?>

<section class="sevices_section" id="services">
    <div class="container">
      <div class="sub_heading">WHAT WE DO</div>
      <div class="heading_title wow bounceInUp">
        <p>We believe in building strong brands, good clean design, well-crafted content, and integrated strategies.</p>
        <div class="know_more">
          <a href="http://www.z5x.tech/services/">Explore Services</a><i class="fa fa-angle-right"></i>
        </div>
      </div>
      <div class="services-carousel wow bounceInDown">
        <?php foreach($whatwedo_post as $whatwedo) { ?>
        <div class="services-carouselitem">
            <div class="card_container">
                <div class="service_icon">
                <?php
                 $img = get_field('icon2',$whatwedo->ID); 
                 if( $img ): ?>
                  <img class="" alt="<?php esc_attr_e( $img['alt'] ); ?>" src="<?php echo esc_url( $img['url'] ); ?>" width="" height="">
                    <?php 
                    endif;
                    ?>
                </div>
                <div class="service_title"><?php echo get_the_title($whatwedo->ID); ?></div>
                <div class="service_description"><?php echo get_the_excerpt($whatwedo->ID); ?></div>
            </div>
            <div class="card_container_hover">
                <div class="service_icon">
                  <?php
                 $img = get_field('icon',$whatwedo->ID); 
                 if( $img ): ?>
                  <img class="" alt="<?php esc_attr_e( $img['alt'] ); ?>" src="<?php echo esc_url( $img['url'] ); ?>" width="" height="">
                    <?php 
                    endif;
                    ?>
                </div>
                <div class="service_title"><?php echo get_the_title($whatwedo->ID); ?></div>
                <div class="service_description"><?php echo get_the_excerpt($whatwedo->ID); ?></div>
            </div>
        </div>
       <?php } ?>
      </div>
    </div>
  </section>