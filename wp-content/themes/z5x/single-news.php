<?php
global $domain_url; 
global $post;
$id = get_the_id();

$news_args = array(
    'post_type'=> 'news',
    //'order'    => 'DESC',
    'orderby' => 'date',
    'posts_per_page' => 6,
    'post_status' => 'publish',
    'meta_query' => array(
    'relation' => 'AND',
    'featured' => array(
    'key' => 'featured',
    'value' => '"yes"',
    'compare' => 'LIKE'
    ),
   )
  );  
  $all_news=get_posts($news_args);
  //print_r($all_news); exit;
?>
<!doctype html>
<html lang="en">
  <body>
		<?php get_header(); ?>
		<main role="main" class="news_main">
			<div class="container">
				<div class="news_header">NEWS</div>
				<div class="row">
					<div class="col-12 col-md-9">                    
						<div class="news_title">
							<h2><?php the_title(); ?></h2>
							<p><?php echo get_the_date( 'F d, Y' ); ?></p>
						</div>  
						<div class="main_news">
							<div class="new-wrap">
								<div class="news_img">
									<?php echo get_the_post_thumbnail( $post->ID, 'full', array( 'class' => '')); ?>    
								</div>
								<?php 
								   $my_postid = $id;
								   $content_post = get_post($my_postid);
								   $content = $content_post->post_content;
								   $content = apply_filters('the_content', $content);
								   $content = str_replace(']]>', ']]&gt;', $content);
								   echo $content;
								?>
							</div> 
						   
						</div> 
					</div>
					<div class="col-12 col-md-3 top_news">                    
						<div class="topnews_title"><i class="fa fa-newspaper-o" aria-hidden="true"></i> Top News</div>
						<ul>
						   <?php foreach ($all_news as $key => $news) { ?>
							<li>
								<a href="<?php echo get_permalink( $news->ID ); ?>" >
									<i class="fa fa-caret-right" aria-hidden="true"></i> 
									<?php echo get_the_title($news->ID); ?>
								</a>
							</li>
				           <?php } ?>
						</ul>
					</div>
				</div>
			</div>          
		</main>
		 <!-- FOOTER -->
		<?php get_footer(); ?>
    </body>
</html>