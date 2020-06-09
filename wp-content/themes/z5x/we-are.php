<?php /* Template Name: WE ARE */ ?>
<?php 
  get_header();
  global $domain_url; 
  //code for featured News Post
  $weare_args = array(
  'post_type'=> 'we_are',
 
  'orderby' => 'date',
  'posts_per_page' => 100,
  'post_status' => 'publish'
  );  
  $weare_post=get_posts($weare_args); 
  //print_r($weare_post); exit;
?>

<section class="aboutus_section" id="aboutus">
    <div class="container">
      <div class="sub_heading">WE ARE</div>
      <div class="heading_title wow bounceInUp">
        <p>A highly specialized Management team with Great experience  in Technology and other solutions.</p>
        <div class="know_more">
          <a href="http://stage.z5x.tech/aboutus/">Know More</a><i class="fa fa-angle-right"></i>
        </div>
      </div>
      <div class="aboutus-carousel wow bounceInDown">
        <?php foreach($weare_post as $weare) { ?>
        <div class="aboutus-carouselitem">
        <?php echo get_the_post_thumbnail( $weare->ID, 'full', array( 'class' => '')); ?>  
        </div>
        <!-- <div class="aboutus-carouselitem"><img src="<?php echo $domain_url; ?>/images/aboutimg1.svg"></div>
        <div class="aboutus-carouselitem"><img src="<?php echo $domain_url; ?>/images/aboutimg3.svg"></div> -->
      <?php } ?>
      </div>
    </div>
  </section>