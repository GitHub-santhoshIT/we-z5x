<?php
get_header();
global $domain_url;
//echo $domain_url; 
?>
  <!-- Home Section -->
  <section class="home_section" id="home" style="min-height:400px">
    <div class="container">
      <div class="coming-content wow bounceInLeft">
        <div class="banner_subtext">WE'RE Z5X</div>
        <h1 class="animate-element spirit-fade-in-elements">CREATIVE<br />DESIGN & <br/>STRATEGIES</h1>
        <a href="http://www.z5x.tech/aboutus/" class="knowmore_btn btn btn-4c btn-4 btn1 icon-arrow-right">TO KNOW MORE!</a>
      </div>
    </div>
    <div id="particles-js">
    </div>
</section>
  <!-- About Us Section -->
  
  <?php get_template_part( 'we-are' ); 
        //get_template_part( 'content', 'we_are' );
  ?> 
  <?php get_template_part( 'what_we_do' ); ?> 
  <?php get_template_part( 'how_we_do_it' ); ?>
  <?php // get_template_part( 'our-thinking' ); ?>
  <section class="" id="contact">
    <section class="joinus_section">
      <div class="container wow fadeInUp">
        <div class="joinus_logo"><img src="<?php echo $domain_url; ?>/images/joinus_logo.png" /></div>
        <div class="joisus_title">Care to join Us?</div>
        <div class="joisus_subtitle">Z5X on an exciting career with us to learn and grow alongside the best in the industry</div>
        <div class="current_openings">
          <a href="http://www.z5x.tech/job-openings/">View Current Openings</a>
        </div>
      </div>
    </section>
  </section>
    
    <?php echo get_footer(); ?>