 <?php /* Template Name: Page news */ ?>
 <?php 
 // code for featured News Post
    $args = array(
    'post_type'=> 'news',
    //'order'    => 'ASC',
    'orderby' => 'date',
    'posts_per_page' => 3,
    'post_status' => 'publish'
    );  
    $news=get_posts($args);
    //print_r($news); exit;
    if($news){

    $src1 = wp_get_attachment_image_src( get_post_thumbnail_id($news[0]->ID), 'full' );
    $url1 = $src1[0];

    $src2 = get_field('thumb_image',$news[1]->ID); 

    $src3 = get_field('thumb_image',$news[2]->ID);
   ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Z5X News Letter</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Roboto', Verdana, sans-serif;
            background-color: #000000;
            width: 640px;
            margin: 0 auto;
            color: #354052;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <table width="640" border="0" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5;">
        <tr>
            <td><img src="<?php echo get_template_directory_uri(); ?>/images/news_header.jpg" 
                 width="640" height="101" /></td>
        </tr>
        <tr>
            <td height="7"></td>
        </tr>
        <tr>
            <td>
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td width="40">&nbsp;</td>
                        <td>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td>
                                        <table border="0" cellspacing="0" cellpadding="0" style="border-radius: 30px;border: 1px solid #ccc;padding: 3px 7px;">
                                            <tr>
                                                <td width="18">
                                                  <img src="<?php echo get_template_directory_uri(); ?>/images/top_news.jpg" width="14" height="15" />
                                                </td>
                                                <td style="text-transform: uppercase;color: #7D8798;font-size: 12px;">TOP NEWS</td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td style="text-align: right;columns: #434f64;font-size:12px;">Thursday, May 30, 2019</td>
                                </tr>
                                <tr><td height="20"></td></tr>
                            </table>
                        </td>
                        <td width="40">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <table  width="100%" border="0" cellspacing="0" cellpadding="0">                
                    <tr>
                        <td width="40">&nbsp;</td>
                        <td>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td style="color: #354052;font-size:18px;font-weight:500;"><?php echo $news[0]->post_title; ?></td>
                                </tr>
                                <tr><td height="10"></td></tr>
                                <tr>
                                    <td style="color: #434F64;font-size:14px;"><?php echo $news[0]->post_excerpt; ?></td>
                                </tr>
                                <tr><td height="10"></td></tr>
                                <tr>
                                    <td>
                                      <img src = "<?php echo $url1; ?>">
                                    </td>
                                </tr>
                                <tr><td height="15"></td></tr>
                                <tr>
                                    <td valign="top" style="border-bottom: 1px solid #ccc;height: 40px;">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>                                                
                                                <td width="5" style="background-color: #fdb811;width:4px;"></td>
                                                <td width="75"><a href="<?php echo get_permalink( $news[0]->ID ); ?>"  target="_blank" style="text-decoration: none;
                                                color:#000000;padding-left: 7px;">Read More</a></td>
                                                <td><img src="<?php echo get_template_directory_uri(); ?>/images/read_arrow.png" width="18" height="18" style="position: relative;top: 2px;" /></td>                                                
                                            </tr>
                                        </table>
                                    </td>
                                </tr>                            
                                <tr><td height="20"></td></tr>
                            </table>
                        </td>
                        <td width="40">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td width="40">&nbsp;</td>
                        <td>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td style="border-bottom: 1px solid #cccccc;">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                               <td width="195">   
                                               <?php if( $src2 ): ?>  
                                               <img class="" alt="<?php esc_attr_e( $src2['alt'] ); ?>" src="<?php echo esc_url( $src2['url'] ); ?>" width="175" height="130">    
                                               <?php 
                                               endif;
                                               ?>
                                            </td>
                                                <td valign="top">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td style="color: #354052;font-size:16px;font-weight: 500;line-height: 16px;"><?php echo $news[1]->post_title; ?></td>
                                                        </tr>
                                                        <tr><td height="10"></td></tr>
                                                        <tr>
                                                            <td style="color: #434F64;font-size:14px;"><?php echo $news[1]->post_excerpt; ?>
                                                            </td>
                                                        </tr>
                                                        <tr><td height="20"></td></tr>
                                                        <tr>
                                                            <td>
                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <td width="5" style="background-color: #fdb811;width:4px;"></td>
                                                                        <td width="75"><a href="<?php echo get_permalink( $news[1]->ID ); ?>"   target="_blank" style="text-decoration: none;
                                                                            color:#000000;padding-left: 7px;">Read More</a></td>
                                                                        <td><img src="<?php echo get_template_directory_uri(); ?>/images/read_arrow.png" width="18" height="18" style="position: relative;top: 2px;" /></td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>                                            
                                            <tr><td height="10"></td></tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr><td height="12"></td></tr>
                                <tr>
                                    <td style="border-bottom: 1px solid #cccccc;">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td width="195">   
                                               <?php if( $src2 ): ?>  
                                               <img class="" alt="<?php esc_attr_e( $src2['alt'] ); ?>" src="<?php echo esc_url( $src2['url'] ); ?>" width="175" height="130">    
                                                <?php 
                                                endif;
                                                ?>
                                                </td>
                                                <td valign="top">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td style="color: #354052;font-size:16px;font-weight: 500;line-height: 16px;"><?php echo $news[2]->post_title; ?></td>
                                                        </tr>
                                                        <tr><td height="10"></td></tr>
                                                        <tr>
                                                            <td style="color: #434F64;font-size:14px;"><?php echo $news[1]->post_excerpt; ?></td>
                                                        </tr>
                                                        <tr><td height="20"></td></tr>
                                                        <tr>
                                                        <td>
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                        <td width="5" style="background-color: #fdb811;width:4px;">
                                                        </td>
                                                         <td width="75"><a href="<?php echo get_permalink( $news[2]->ID ); ?>"  target="_blank" style="text-decoration: none;color:#000000;padding-left: 7px;">Read More</a></td>
                                                        <td><img src="<?php echo get_template_directory_uri(); ?>/images/read_arrow.png" width="18" height="18" style="position: relative;top: 2px;"/></td>
                                                         </tr>

                                                         </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>                                            
                                            <tr><td height="10"></td></tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr><td height="20"></td></tr>
                                <tr>
                                    <td style="color: #7D8798;font-size:12px;">This message is intended only for the recipient(s) who is specifically addressed or named in the mail and who is also a current employee of Esselgroup. If you are not the intended recipient, you are notified that disclosing, copying, distributing or taking any action in reliance on the contents of this information is strictly prohibited. Please notify the sender immediately bty e-mail if you have received this e-mail by mistake and delete this e-mail from your system. You may not copy this message or disclose its contents to anyone. The contents of this E-mail and any attachment(s) are confidential and intended for the named recipient(s) only.</td>
                                </tr>
                                <tr><td height="30"></td></tr>
                                <tr>
                                    <td>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="color: #7D8798;font-size:12px;">&copy; Copyright 2019 Essel Corporate. All rights reserved.</td>
                                                <td style="color: #7D8798;font-size:12px;text-align: right;">
                                                <a href="" style="text-decoration: none;color:#7D8798;">Privacy Plolicy</a> | 
                                                <a href="" style="text-decoration: none;color:#7D8798;">Terms of use</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr><td height="30"></td></tr>                                
                            </table>
                        </td>
                        <td width="40">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td><img src="<?php echo get_template_directory_uri(); ?>/images/footer_bg.jpg" width="640" height="12" style="display: block" /></td>
        </tr>
        
    </table>
    

</body>
</html>

<?php } ?>
 















