 <?php /* Template Name: APPLY JOB */ ?>
<?php 
get_header();

$job_id = $_GET['job_id'];
if($job_id)
{
    $job_title = get_the_title($job_id); 
}
else
{
    //$job_title = "PHP DEVELOPER";
    $job_title = "DEVELOPER";
}
?>

<style type="text/css">
.input_error {
	display: none;
	font-size: 12px;
    color: red;
}
label.addcover_btn span {
    color: #4b26d2 !important;
} 
.delete_file
{
    display:none;
}
.star_font {
    font-size: 20px;
    position: relative;
    top: 6px;
    display:none;
}
.star_font1 {
	font-size: 14px !important;
    position: relative;
    top: 2px;
    left: 5px;
    color: #ff0707 !important;
}
.star_font12 {
    position: absolute;
    top: 16px;
    left: 235px;
    font-weight: normal !important;
    font-family: "Gotham-book" !important;
    color: #ff0707 !important;
    font-size: 20px !important;
}
</style>

<section class="opening_section">
    <div class="container">
        <div class="heading_title">
            <p><?php echo strtoupper($job_title); ?></p>
        </div>
        	<form action="javascript:;" method="POST" class="" id="apply_job" enctype='multipart/form-data'> 
            <div class="row">                 
                <div class="col-12 col-md-6 form-group">
                    <label for="name">NAME<span class="star_font1">*</span></label>
                    <input type="name" name="name" onkeypress="return ValidateAlpha(event)" maxlength="15" class="form-control" id="name" placeholder="Enter your name">
                    <div class="input_error" id="name_error">Kindly provide valid Name.</div>
                </div>               
                <div class="col-12 col-md-6 form-group">
                    <label for="email">EMAIL<span class="star_font1">*</span></label>
                    <input type="email" name="email" class="form-control" id="email" placeholder="Enter your email address">
                    <div class="input_error" id="email_error"><span class="star_font">*</span> Kindly provide valid Email Address.</div>
                </div>
                <div class="col-12 col-md-6 form-group">
                    <label for="phonenumber">PHONE NUMBER<span class="star_font1">*</span></label>
                    <input type="phone" name="phone" class="form-control" id="phone" minlength="10" maxlength="10" placeholder="Enter your phone number">
                    <div class="input_error" id="phone_error"><span class="star_font">*</span> Kindly provide valid Phone Number.</div>
                </div>
                 
               <div class="col-12 col-md-6 form-group web-gender">
                    <label for="gender_label">GENDER IDENTITY<span class="star_font1">*</span></label>
                    <select  class="custom-select" name="gender" id="gender">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Non-Binary</option>
                        <option value="other">Do not want to disclose</option>
                    </select>
                    <div class="input_error" id="gender_error">Kindly provide gender.</div>
                </div>
                
                <div class="col-12 col-md-6 form-group">
                    <label>PORTFOLIO URL (Optional)</label>
                    <input type="text" name="portfolio" id="portfolio" minlength="" maxlength="" class="form-control" placeholder="Enter your portfolio URL">
                </div>  
                
                <div class="col-12 col-md-6 form-group">
                    <label>UPLOAD RESUME (PDF, DOC, DPCX- 10MB MAX)<span class="star_font1">*</span></label>
                    <div class="upload_box">
                        <input type="file" name="resume" id="resume" class="inputfile inputfile-2" onchange="checkextension()" data-multiple-caption="{count} files selected" multiple" />
                        <label for="resume"><span><img src="<?php echo get_template_directory_uri(); ?>/images/pdf_icon.svg" width="16" /></span> <span id="file_name">Choose a Resume&hellip;</span></label>
                        <span class="delete_file"><img src="<?php echo get_template_directory_uri(); ?>/images/delete_icon.svg" width="18" /></span>
                    </div>
                     <div class="input_error input_errorupload" id="resume_error">Please Upload the Resume</div>      
                </div>

            </div>            
            <div class="job_submit">
                <button type="submit" id="submit_apply_job" class="btn btn-primary btn-4c btn-4 btn1 icon-arrow-right">Submit</button>
            </div>
        </form>
      </div>
  </section>
 <div id="alert-message"></div>
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

<script>
        var ajaxurl = '<?php echo admin_url('admin-ajax.php') ?>';
       
      function ValidateAlpha(evt)
    {
        var keyCode = (evt.which) ? evt.which : evt.keyCode
        if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)
         
        return false;
            return true;
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
                $("#submit_apply_job").prop('disabled','').text("SUBMIT");
            },5000);
            $('.input_error').css('display','none');
            var error = 0;
            if($('#name').val() == '' || isNaN($('#name').val()) == false)
            {
                $('#name_error').css('display','block'); 
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
            if($('#gender').val() == '')
            {
                $('#gender_error').css('display','block'); 
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
                        $("#alert-message").html("<div class='alert alert-success'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Thank you for your interest in Z5X. <a href='http://www.z5x.tech/' class='go_home'>Go Back to Home</a></div>");
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
            //alert("gi");
			var fileName = e.target.files[0].name;
			$("#file_name").text(fileName);
			$(".delete_file").css("display","block");
		});
		$(document).on("click",".delete_file",function(){
			//alert("alert");
            $("#resume").val('');
			$("#file_name").text('Choose a Resume…');
			$(".delete_file").css("display","none");
		});
		function jsUcfirst(string) 
		{
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
    </script>