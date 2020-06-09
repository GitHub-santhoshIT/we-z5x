jQuery(document).ready(function ($) {

    if ($("#post").length > 0) {

        //var frm = true;
        $("#publish,#save-post").click(function () {
          var title = $("#title").val();
          var excerpt = $("#excerpt").val();
          var content = $(".wp-editor-area").val();

          if (!title) {
                alert("Please enter title");
                $("#title").focus();
                return false;
            }
            if ($("#title").val().length > 120) {
                alert("Post title should not be more than 120 characters");
                $("#title").focus();
                return false;
            }
            /*Body Content*/
            if (jQuery.trim(content) == '') {
                alert("Please enter content");
                $(".wp-editor-area").focus();
                return false;
            }
            /*Excerpt*/
            if ($("#excerpt").val().length >= 150 || $("#excerpt").val() == '') {
                alert("Please enter the excerpt value less than or equal to 150 character");
                $("#excerpt").focus();
                return false;
            }
            
            if (jQuery("#set-post-thumbnail").find('img').size() > 0) {
                        jQuery('#ajax-loading').hide();
                        jQuery('#publish').removeClass('button-primary-disabled');
                        return true;
                    }else{
                        alert("please set a featured image!!!");
                        jQuery('#ajax-loading').hide();
                        jQuery('#publish').removeClass('button-primary-disabled');
                        //frm = false;
                        return false;
                    }

                   
        
                 });
            }

        });
