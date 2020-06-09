 <?php /* Template Name: APPLY JOB */ ?>
<?php 
$rowid = $_GET['page_id'];
echo $rowid; exit;
//$id=$_GET[''];
//echo get_the_ID(); exit;

get_header();
?>
 <!-- html code here -->
<?php //echo do_shortcode( '[contact-form-7 id="1234" title="Contact form 1"]' ); ?>
<section>PHP Developer</section><br><br>
<section>
        <div class="applyjob_main">
            <div class="applyjob-container">
               <form action="javascript:;" method="POST" class="form-horizontal" id="apply_job" enctype='multipart/form-data'>
                <div class="input-container marB30">
                    <input class="input100" type="text" name="firstname" onkeypress="return lettersOnly(event)" maxlength="15" id="firstname">
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>First Name <span class="star_font1">*</span></label>
                    <div class="input_error" id="firstname_error"><span class="star_font">*</span> Kindly provide valid first name.</div>
                </div>
                 <div class="input-container marB30">
                    <input class="input100" type="email" name="email" id="email">
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Email <span class="star_font1">*</span></label>
                    <div class="input_error" id="email_error"><span class="star_font">*</span> Kindly provide valid email address.</div>
                </div>
                <div class="input-container marB30">
                    <input class="input100" type="text" name="phone" id="phone" minlength="10" maxlength="10" id="phone">
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Phone <span class="star_font1">*</span></label>
                    <div class="input_error" id="phone_error"><span class="star_font">*</span> Kindly provide valid 10 digit phone number</div>
                </div>
                <div class="input-container marB30">
                    <input class="input100" type="text" name="portfolio" id="portfolio" minlength="" maxlength="" id="portfolio">
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Portfolio URL <span class="star_font1">*</span></label>
                    <div class="input_error" id="portfolio_error"><span class="star_font">*</span> Kindly provide valid Portfolio URL</div>
                </div>
                <div class="input-container marB30">
                    <input class="input100" type="text" name="linkedin_profile" id="linkedin_profile" minlength="" maxlength="" id="linkedin_profile">
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>LinkedIn Profile <span class="star_font1">*</span></label>
                    <div class="input_error" id="linkedin_profile_error"><span class="star_font">*</span> Kindly provide valid LinkedIn Profile</div>
                </div>
                 <div class="input-container marB10">
                    <div class="upload-text">
                        <span>Upload your complete</span>
                        <span>resume here, preferably in pdf format</span> <span class="star_font12">*</span>
                    </div>
                    <div class="upload_box">
                        <input type="file" name="resume" id="resume" class="inputfile inputfile-2" onchange="checkextension()" data-multiple-caption="{count} files selected" multiple />
                        <label for="resume"><span><img src="<?php echo get_template_directory_uri(); ?>/images/pdf_icon.svg" width="16" /></span> <span id="file_name">Choose a Resume&hellip;</span></label>
                        <span class="delete_file"><img src="<?php echo get_template_directory_uri(); ?>/images/delete_icon.svg" width="18" /></span>
                    </div>
                    <div class="input_error input_errorupload" id="resume_error"><span class="star_font">*</span>
                    <!-- Resume file size should be below 5 MB. -->
                    Please Upload the Resume
                    </div>
                </div>
                <div class="input-container marB30">
					<button class="submit_btn" type="submit" id="submit_apply_job">SUBMIT APPLICATION</button>
                </div>      
     <?php //echo do_shortcode( '[contact-form-7 id="7773" title="Contact Form"]' ); ?>         </form> 
         </div>
        </div>
    </section>
    <div id="alert-message"></div>
<?php 
  get_footer(); 
?>

 <script>
        var ajaxurl = '<?php echo admin_url('admin-ajax.php') ?>';
       

       function lettersOnly() 
       {
            var charCode = event.keyCode;

            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8 )

                return true;
            else
                return false;
        }
        //phone number validation
        $("#phone").keypress(function (e) {
            if(this.value.length == 0 && e.which < 55)
            {
                e.preventDefault();
            }
        });
        $("#phone").keydown(function (e) {
            
            // Allow: backspace, delete, tab, escape, enter and .
              if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
               // Allow: Ctrl+A, Command+A
              (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
               // Allow: home, end, left, right, down, up
              (e.keyCode >= 35 && e.keyCode <= 40)) {
                   // let it happen, don't do anything
                   return;
              }
              // Ensure that it is a number and stop the keypress
             if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.    keypresseyCode > 105)) {
              e.preventDefault();
             }
        });

        
        $(document).on("submit", "#apply_job", function(e) {
            //alert("hey");
            $("#submit_apply_job").attr('disabled','disabled').text("Please Wait..");  
            setTimeout(function(){
                $("#submit_apply_job").prop('disabled','').text("SUBMIT APPLICATION");
            },5000);
            $('.input_error').css('display','none');
            var error = 0;
            if($('#firstname').val() == '' || isNaN($('#firstname').val()) == false)
            {
                $('#firstname_error').css('display','block'); 
                error = 1;
            }
            if($('#email').val() == '')
            {
                $('#email_error').css('display','block'); 
                error = 1;
            }
            if($('#phone').val() == '' || isNaN($('#phone').val()) == true)
            {
                $('#phone_error').css('display','block'); 
                error = 1;
            }
             if($('#resume').val() != '')
            {
                var file = document.querySelector("#resume");
                if ( /\.(docx|pdf)$/i.test(file.files[0].name) === false ) { 
                    alert("please upload the WORD and PDF files !");
                    error = 1; 
                }
                
            }
             if($('#resume').val() == '')
            {
                $('#resume_error').css('display','block'); 
                error = 1;
            }   
            if(error == 1)
            {
                return false;
               
            }
            
            $.ajax({
                url: ajaxurl + '?action=save_apply_job_data',
                type: 'POST',
                contentType: false,
                processData:false,
                data: new FormData(this),
                success: function(result) {
                    if (result.status == true) {
                        $("#alert-message").html("<div class='alert alert-success'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Thank you for your interest in Z5X, . <a href='http://stage.z5x.tech/' class='go_home'>Go Back to Home</a></div>");
                        setTimeout(function() {
                            $("#alert-message").empty();
                        }, 30000);

                        document.getElementById('apply_job').reset();
                        $("#resume").val('');
                        $("#file_name").text('Choose a Resume…');
                        $(".delete_file").css("display","none");
                        $("#cover_letter").val('');
                        $("#cover_file_name").text('ADD COVER LETTER');
                        $("#portfolio_file_name").text('ADD PORTFOLIO');
                        $('#portfolio').val('');
                    }
                    else if(result.status == false)
                    {
                        $("#alert-message").html("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Email id already used.</div>");
                        setTimeout(function() {
                            $("#alert-message").empty();
                        }, 30000);
                    }
                }
            });
        })

        $(document).on("change", '#resume', function(e) {
			var fileName = e.target.files[0].name;
			$("#file_name").text(fileName);
			$(".delete_file").css("display","block");
		});
		$(document).on("click",".delete_file",function(){
			$("#resume").val('');
			$("#file_name").text('Choose a Resume…');
			$(".delete_file").css("display","none");
		});
		function jsUcfirst(string) 
		{
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
    </script>

</body>
</html>