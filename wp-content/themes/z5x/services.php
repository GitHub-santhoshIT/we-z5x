<?php /* Template Name: SERVICES */ ?>

<?php
 get_header();

 global $post;
 $my_postid = $post->ID;
 $content_post = get_post($my_postid);
 $content = $content_post->post_content;
 $content = apply_filters('the_content', $content);
//$content = str_replace(']]>', ']]&gt;', $content);
 echo $content;
 ?>

<?php 
get_footer();
?>
