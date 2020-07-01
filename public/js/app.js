new TypeIt('#typed-heading', {
  strings: ['Software developer.', 'Linguist.', 'Instructor.', 'Entrepreneur.'],
  speed: 40,
  lifeLike: true,
  breakLines: true
})
.go();


// tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});


$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$(function() {

    $('#contact-form').on('submit', function(event) {
      event.preventDefault();
      runVerify(event);

      function runVerify(e){
        e.preventDefault();
        runCaptcha();
      }

      function runCaptcha(){
        grecaptcha.execute('6Le1srUUAAAAAH2d_p4BBoLF7oxGqix2-FGI4Onw', {action: '/'}).then(function(token) {
          const contacterName = $('#contacter-name').val();
          const contacterEmail = $('#contacter-email').val();
          const contacterMessage = $('#contacter-message').val();
          const captcha = token;
          console.log(captcha);

          sendData(contacterName, contacterEmail, contacterMessage, captcha);
        });
      }

      function sendData(contacterName, contacterEmail, contacterMessage, captcha){
        const data  = JSON.stringify({contacterName: contacterName, contacterEmail: contacterEmail, contacterMessage: contacterMessage, captcha: captcha});
        $.ajax({
          url: '/',
          method: 'POST',
          contentType: 'application/json',
          data: data,
          success: function(response) {
            console.log(response);
            window.alert("Your message has been sent!");
          }
        });
      }
    });

});



