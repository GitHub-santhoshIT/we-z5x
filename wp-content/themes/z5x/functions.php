<?php

function ourthinking_posttype() {
   add_theme_support( 'post-thumbnails' );
   register_post_type( 'ourthinking',
        array(
            'labels' => array(
                'name' => __( 'Our Thinking' ),
                'singular_name' => __( 'Our Thinking' ),
                'menu_name' => __( 'Our Thinking' ),
                'all_items' => __( 'All Our Thinking' ),
                'add_new' => __( 'Add New' ),
                'add_new_item' => __( 'Add New' ),
                'edit' => __( 'Edit' ),
                'edit_item' => __( 'Edit Our Thinking' ),
                'new_item' => __( 'New Our Thinking' ),
                'view' => __( 'View' ),
                'view_item' => __( 'View Our Thinking' ),
                'search_items' => __( 'Search Our Thinking' ),
                'not_found' => __( 'No Our Thinking Founder' ),
                'not_found_in_trash' => __( 'No Our Thinking Found in Trash' ),
                'parent' => __( 'Parent Our Thinking' ),

            ),
            'public' => true,
            'description' => "",
            'show_ui' => true,
            'has_archive' => true,
            'show_in_menu' => true,
            'exclude_from_search' => false,
            "capability_type" => 'post',
            'map_meta_cap' => true,
            'hierarchical' => true,        
            'menu_icon' => 'dashicons-format-status',
            'rewrite' => array('slug' => 'Our Thinking'),
            'query_var' => true,
            'taxonomies' => array('post_tag'),
            'supports' => array( "title", "thumbnail", "excerpt","editor")
        )
    );
}
add_action( 'init', 'ourthinking_posttype' ); 

/* How we Do It post */
function how_we_do_it_posttype() {
   add_theme_support( 'post-thumbnails' );
  //set_post_thumbnail_size( 50, 50, true );
   register_post_type( 'howedoit',
        array(
            'labels' => array(
                'name' => __( 'How We Do It' ),
                'singular_name' => __( 'How We Do It' ),
                'menu_name' => __( 'How We Do It' ),
                'all_items' => __( 'All How We Do It' ),
                'add_new' => __( 'Add New' ),
                'add_new_item' => __( 'Add New' ),
                'edit' => __( 'Edit' ),
                'edit_item' => __( 'Edit How We Do It' ),
                'new_item' => __( 'New How We Do It' ),
                'view' => __( 'View' ),
                'view_item' => __( 'View How We Do It' ),
                'search_items' => __( 'Search How We Do It' ),
                'not_found' => __( 'No How We Do It' ),
                'not_found_in_trash' => __( 'No How We Do It in Trash' ),
                'parent' => __( 'Parent How We Do It' ),

            ),
            'public' => true,
            'description' => "",
            'show_ui' => true,
            'has_archive' => true,
            'show_in_menu' => true,
            'exclude_from_search' => false,
            "capability_type" => 'post',
            'map_meta_cap' => true,
            'hierarchical' => true,
            'menu_icon' => 'dashicons-welcome-write-blog',
            'rewrite' => array('slug' => 'How We Do It'),
            'query_var' => true,
            'taxonomies' => array('post_tag'),
            'supports' => array( "title", "thumbnail", "excerpt","editor")
        )
    );
}
add_action( 'init', 'how_we_do_it_posttype' ); 

/* How we Do It post */
function what_we_do_posttype() {
   add_theme_support( 'post-thumbnails' );
   register_post_type( 'whatwedo',
        array(
            'labels' => array(
                'name' => __( 'What We Do' ),
                'singular_name' => __( 'What We Do' ),
                'menu_name' => __( 'What We Do' ),
                'all_items' => __( 'What We Do' ),
                'add_new' => __( 'Add New' ),
                'add_new_item' => __( 'Add New' ),
                'edit' => __( 'Edit' ),
                'edit_item' => __( 'Edit What We Do' ),
                'new_item' => __( 'New What We Do' ),
                'view' => __( 'View' ),
                'view_item' => __( 'View What We Do' ),
                'search_items' => __( 'Search What We Do' ),
                'not_found' => __( 'No What We Do' ),
                'not_found_in_trash' => __( 'No What We Do in Trash' ),
                'parent' => __( 'Parent What We Do' ),

            ),
            'public' => true,
            'description' => "",
            'show_ui' => true,
            'has_archive' => true,
            'show_in_menu' => true,
            'exclude_from_search' => false,
            "capability_type" => 'post',
            'map_meta_cap' => true,
            'hierarchical' => true,
            'menu_icon' => 'dashicons-welcome-write-blog',
            'rewrite' => array('slug' => 'What We Do It'),
            'query_var' => true,
            'taxonomies' => array('post_tag'),
            'supports' => array( "title", "thumbnail", "excerpt","editor")
        )
    );
}
add_action( 'init', 'what_we_do_posttype' ); 

/* News */
//Registering post type for News
function news_posttype() {
   add_theme_support( 'post-thumbnails' );
   register_post_type( 'news',
        array(
            'labels' => array(
                'name' => __( 'News' ),
                'singular_name' => __( 'News' ),
                'menu_name' => __( 'News' ),
                'all_items' => __( 'All News' ),
                'add_new' => __( 'Add New' ),
                'add_new_item' => __( 'Add New' ),
                'edit' => __( 'Edit' ),
                'edit_item' => __( 'Edit News' ),
                'new_item' => __( 'New News' ),
                'view' => __( 'View' ),
                'view_item' => __( 'View News' ),
                'search_items' => __( 'Search News' ),
                'not_found' => __( 'No News Founder' ),
                'not_found_in_trash' => __( 'No News Found in Trash' ),
                'parent' => __( 'Parent News' ),

            ),
            'public' => true,
            'description' => "",
            'show_ui' => true,
            'has_archive' => true,
            'show_in_menu' => true,
            'exclude_from_search' => false,
            "capability_type" => 'post',
            'map_meta_cap' => true,
            'hierarchical' => true,
            'menu_icon' => 'dashicons-nametag',
            'rewrite' => array('slug' => 'News'),
            'query_var' => true,
            'taxonomies' => array('post_tag'),
            'supports' => array( "title", "thumbnail", "excerpt","editor")
        )
    );
}
add_action( 'init', 'news_posttype' );

//Registering post type for Job Openings
function job_posttype() {
   add_theme_support( 'post-thumbnails' );
   register_post_type( 'job_openings',
        array(
            'labels' => array(
                'name' => __( 'Job Openings' ),
                'singular_name' => __( 'Job Openings' ),
                'menu_name' => __( 'Job Openings' ),
                'all_items' => __( 'All Job Openings' ),
                'add_new' => __( 'Add Job Openings' ),
                'add_new_item' => __( 'Add Job Openings' ),
                'edit' => __( 'Edit' ),
                'edit_item' => __( 'Edit Job Openings' ),
                'new_item' => __( 'New Job Openings' ),
                'view' => __( 'View' ),
                'view_item' => __( 'View Job Openings' ),
                'search_items' => __( 'Search job Openings' ),
                'not_found' => __( 'No Job Openings Founder' ),
                'not_found_in_trash' => __( 'No Job Openings Found in Trash' ),
                'parent' => __( 'Parent Job Openings' ),

            ),
            'public' => true,
            'description' => "",
            'show_ui' => true,
            'has_archive' => true,
            'show_in_menu' => true,
            'exclude_from_search' => false,
            "capability_type" => 'post',
            'map_meta_cap' => true,
            'hierarchical' => true,
            'menu_icon' => 'dashicons-welcome-learn-more',
            'rewrite' => array('slug' => 'job_openings'),
            'query_var' => true,
            'taxonomies' => array('post_tag'),
            'supports' => array( "title", "thumbnail","editor")
        )
    );
}
add_action( 'init', 'job_posttype' );

//Registering post type for Job Openings
function weare_posttype() {
   add_theme_support( 'post-thumbnails' );
   register_post_type( 'we_are',
        array(
            'labels' => array(
                'name' => __( 'We Are' ),
                'singular_name' => __( 'We Are' ),
                'menu_name' => __( 'We Are' ),
                'all_items' => __( 'All We Are' ),
                'add_new' => __( 'Add We Are' ),
                'add_new_item' => __( 'Add We Are' ),
                'edit' => __( 'Edit' ),
                'edit_item' => __( 'Edit We Are' ),
                'new_item' => __( 'New We Are' ),
                'view' => __( 'View' ),
                'view_item' => __( 'View We Are' ),
                'search_items' => __( 'Search We Are' ),
                'not_found' => __( 'No We Are Founder' ),
                'not_found_in_trash' => __( 'No We Are Found in Trash' ),
                'parent' => __( 'Parent We Are' ),

            ),
            'public' => true,
            'description' => "",
            'show_ui' => true,
            'has_archive' => true,
            'show_in_menu' => true,
            'exclude_from_search' => false,
            "capability_type" => 'post',
            'map_meta_cap' => true,
            'hierarchical' => true,
            'menu_icon' => 'dashicons-welcome-learn-more',
            'rewrite' => array('slug' => 'we_are'),
            'query_var' => true,
            'taxonomies' => array('post_tag'),
            'supports' => array( "title", "thumbnail","editor")
        )
    );
}
add_action( 'init', 'weare_posttype' );


//save apply a job data
    add_action( 'wp_ajax_save_apply_job_data', 'save_apply_job_data');
    add_action("wp_ajax_nopriv_save_apply_job_data", "save_apply_job_data");
    function save_apply_job_data(){
    $post_values = $_REQUEST;
    
    //resume file
    $resume_details = pathinfo($_FILES['resume']['name']);
    $resume_ext = $resume_details['extension']; // get the extension of the file
    $resume_name = $post_values['firstname']."_resume.".$resume_ext; 

    $date = date("Y-m-d H:i:s");
    $resume_target = ABSPATH.'/wp-content/uploads/cfdb7_uploads/'.$resume_name;
    move_uploaded_file($_FILES["resume"]["tmp_name"],$resume_target);
    
    $data['name'] = $post_values['name'];
    $data['email'] = $post_values['email'];
    $data['phone'] = $post_values['phone'];
    $data['gender'] = $post_values['gender'];
    $data['portfolio'] = $post_values['portfolio'];
    $data['resumecfdb7_file'] = $resume_name;

    $form_values = serialize($data);
    global $wpdb;
    $table_name  = $wpdb->prefix .'db7_forms';//table name in which contact form 7 data is getting stored

    $sql = "select form_value from {$table_name} where form_post_id = 27";
    $results = $wpdb->get_results($sql,ARRAY_A);
    foreach ($results as $key => $result) {
        $data = unserialize($result['form_value']);
         if($post_values['email'] == $data['email'])
        {
            return wp_send_json(['status'=>false]);
             
        }  
    }
    $wpdb->insert(
                $table_name,
                array(
                    'form_post_id'       => '27',//contact form 7 form id to add the data of html form
                    'form_value'  => $form_values,
                    'form_date'   => $date,
                ),
                array(
                    '%s',
                    '%s',
                    '%s',
                )
            );
    return wp_send_json(['status'=>true]);
}

//add SVG to allowed file uploads
function upload_svg_files( $allowed ) {
    if ( !current_user_can( 'manage_options' ) )
        return $allowed;
    $allowed['svg'] = 'image/svg+xml';
    return $allowed;
}
add_filter( 'upload_mimes', 'upload_svg_files');

// js validation

/*  add_action('admin_enqueue_scripts', 'add_my_js');   
function add_my_js(){    
  wp_enqueue_script('my_validate', get_template_directory_uri() . '/js/validate.js', array('jquery'));
  
}
*/
add_action('admin_print_scripts-post-new.php', 'custom_admin_script', 11);
add_action('admin_print_scripts-post.php', 'custom_admin_script', 11);
function custom_admin_script()
{
    global $post_type;
    if ('news' == $post_type || 'we_are' == $post_type || 'ourthinking' == $post_type || 'howedoit' == $post_type || 'howedoit' == $post_type || 'job_openings' == $post_type) 
    {
        //wp_register_style('custom_wp_admin_css', get_template_directory_uri() . '/css/admin-style.css', false, time());
        //wp_enqueue_style('custom_wp_admin_css');
        wp_enqueue_script( 'admin-js', 'http://stage.z5x.tech/wp-content/themes/z5x/js/validate.js?v=1.3.3', array( 'jquery' ), '', true );
    }
}

// header menu

function register_my_menu() {
   register_nav_menu('header-menu',__( 'Menu' ));
}
add_action( 'init', 'register_my_menu' );


/* $menu_name = 'header-menu'; //menu slug
$locations = get_nav_menu_locations();
$menu = wp_get_nav_menu_object( $locations[ $menu_name ] );
$menuitems = wp_get_nav_menu_items( $menu->term_id, array( 'order' => 'DESC' ) );
foreach ($menuitems as $menu ) {
if($menu->title == 'WE ARE HIRING') {   
     $we_are_hiring = 'nav-link py-3 px-0 px-lg-3 js-scroll-trigger hire_btn'; 

}
else{
    $we_are_hiring = 'nav-link py-3 px-0 px-lg-3 js-scroll-trigger';
}
} */

 /* function my_walker_nav_menu_start_el($item_output, $item, $depth, $args) {
    
  
 $we_are_hiring = 'nav-link py-3 px-0 px-lg-3 js-scroll-trigger';

    $item_output = preg_replace('/<a /', '<a class="'.$we_are_hiring.'"', $item_output, 1);
    return $item_output;
 }
add_filter('walker_nav_menu_start_el', 'my_walker_nav_menu_start_el', 10, 4); 
*/


    