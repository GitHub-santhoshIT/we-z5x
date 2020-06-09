 <?php /* Template Name: JOB OPENINGS */ ?>

<?php 
get_header();

  //code for featured News Post
  $job_args = array(
  'post_type'=> 'job_openings',
  //'order'    => 'ASC',
  'orderby' => 'date',
  'posts_per_page' => 100,
  'post_status' => 'publish'
  );  
  $job_post=get_posts($job_args);
  //print_r($job_post); exit;
?>
<section class="opening_section">
    <div class="container">
        <div class="sub_heading">WE ARE HIRING</div>
        <div class="heading_title">
            <p>Open Position in</p>
        </div>
        <div class="accordion" id="accordion">
          <?php foreach($job_post as $key => $job) { 
                switch ($key) {
                            case 0:
                               $collapse='collapseOne';
                                break;
                            case 1:
                               $collapse='collapseTwo';
                                break;
                            case 2:
                               $collapse='collapseThree';
                                break;
                            case 3:
                               $collapse='collapseFour';
                                break;
                            case 4:
                               $collapse='collapseFive';
                                break;
                            case 5:
                               $collapse='collapseSix';
                                break; 
                            case 6:
                               $collapse='collapseSeven';
                                break;
                            case 7:
                               $collapse='collapseEight';
                                break;
                            case 8:
                               $collapse='collapseNine';
                                break;  
                            case 9:
                               $collapse='collapseTen';
                                break; 
                            case 10:
                               $collapse='collapseEleven';
                                break; 
                            case 11:
                               $collapse='collapseTwovelve';
                                break;
                            case 12:
                               $collapse='collapseThirteen';
                                break;
                            case 13:
                               $collapse='collapseFourteen';
                                break;  
                            case 14:
                               $collapse='collapseFifteen';
                                break;
                            case 15:
                               $collapse='collapsesixteen';
                                break;
                            case 16:
                               $collapse='collapseseventeen';
                                break;                                                
                            case 17:
                               $collapse='collapseeighteen';
                                break;
                            case 18:
                               $collapse='collapsenineteen';
                                break;
                            case 19:
                               $collapse='collapsetwenty';
                                break;
                            case 20:
                               $collapse='collapsetwentyone';
                                break;
                            case 21:
                               $collapse='collapsetwentytwo';
                                break;
                            case 22:
                               $collapse='collapsetwentythree';
                                break;
                            case 23:
                               $collapse='collapsetwentyfour';
                                break;
                            case 24:
                               $collapse='collapsetwentyfive';
                                break;
                            default:
                               $collapse='collapseOne'; 
                                break;
                        }   
          ?>          
          <div class="card">
            <div class="card-header">
              <a class="collapsed card-link" data-toggle="collapse" href="#<?php echo $collapse; ?>">
                <?php echo get_the_title($job->ID); ?>
              </a>
            </div>
            <div id="<?php echo $collapse; ?>" class="collapse" data-parent="#accordion">
              <div class="card-body">
                <p> 
                  <?php 
                       $my_postid = $job->ID;//This is page id or post id
                       $content_post = get_post($my_postid);
                       $content = $content_post->post_content;
                       $content = apply_filters('the_content', $content);
                     //$content = str_replace(']]>', ']]&gt;', $content);
                       echo $content;
                 ?>
                </p>
                <?php 
                 $job_type=get_field( 'job_type',$job->ID );
                 if(empty($job_type))
                 {
                  $job_type = 'Full-time';
                 }
                 $salary=get_field( 'salary',$job->ID );
                 if(empty($salary))
                 {
                  $salary = 'As Per Comapany Policy';
                 }
                 $experience=get_field( 'experience',$job->ID );
                 $education=get_field( 'education',$job->ID );
                 ?>
                <p><span class="bold_text">Job Type:</span> <span><?php echo $job_type; ?></span></p>

                <p><span class="bold_text">Salary:</span> <span><?php echo $salary; ?>/year</span></p>
                <p><span class="bold_text">Experience:</span> <span><?php echo $experience;?>&nbspYears</span></p>
                <p><span class="bold_text">Education:</span> <span><?php echo $education;?></span></p>
                <div class="apply_job">
                    <a href="<?php echo site_url(); ?>/apply-job/?job_id=<?php echo $job->ID;?>" target="_blank">I'm Interested</a> 
                </div>
              </div>
            </div>
          </div>
          <?php } ?>
        </div>
      </div>
  </section>
   <section class="" id="contact">
    <section class="joinus_section">
      <div class="container wow fadeInUp">
        <div class="joinus_logo"><img src="<?php echo $domain_url; ?>/images/joinus_logo.png" /></div>
        <div class="joisus_title">Care to join Us?</div>
        <div class="joisus_subtitle">Z5X on an exciting career with us to learn and grow alongside the best in the industry</div>
        <div class="current_openings">
          <a href="http://stage.z5x.tech/job-openings/">View Current Openings</a>
        </div>
      </div>
    </section>
  </section>
  <?php 
  get_footer(); 
  ?>