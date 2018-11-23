
    $(document).ready(function() {

  if ($("div").hasClass("main_login_div")) {
    $("body").addClass("body_signin");
  }

//  if ($("div").hasClass("main_signin_div")) {
//     $("body").css("background-image", "url('./assets/images/flower.jpg')");
//  }

 $('#go_signup').click(function(){
 // $("body").css("background-image", "url('./assets/images/flower.jpg')");
 $("body").removeClass("body_signin");
 $("body").addClass("body_signup");
 })

 $('#go_signin').click(function(){
  $("body").removeClass("body_signup");
  $("body").addClass("body_signin");

  //$("body").css("background-image", "url('./assets/images/sunflower.jpg')");
 })



 
      var user_account = '<i class="material-icons account_circle">account_circle&nbsp;&nbsp;</i>';
      var user_key = '<i class="material-icons">vpn_key&nbsp;&nbsp;</i>';

    $('div .mat-form-field-flex:first').prepend(user_account);
    $('div .mat-form-field-flex:last').prepend(user_key);



    

   });


  //  $(document).on("click", function(e) {
  //   if ($(e.target).is(".cdk-overlay-container") === false && $(e.target).is("#go_signin") === false) {
  //     //$("#user-login-wrapper").removeClass("wide");
  //     $("body").css("background-image", "url('./assets/images/sunflower.jpg')");
  //   }
  //});