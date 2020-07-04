new TypeIt('#typed-heading', {
  strings: ['Software developer.', 'Linguist.', 'Instructor.', 'Entrepreneur.'],
  speed: 40,
  lifeLike: true,
  breakLines: true
})
.go();

$(document).ready(() => {
  $('[data-toggle="tooltip"]').tooltip();
});

$('.navbar-nav>li>a').on('click', () => {
    $('.navbar-collapse').collapse('hide');
});

$(() => {
    $('#contact-form').on('submit', (event) => {
      event.preventDefault();

      const contacterName = $('#contacter-name').val();
      const contacterEmail = $('#contacter-email').val();
      const contacterMessage = $('#contacter-message').val();
      const data  = JSON.stringify({contacterName: contacterName, contacterEmail: contacterEmail, contacterMessage: contacterMessage});

      if (contacterName !== undefined && contacterEmail !== undefined && contacterMessage !== undefined) {
        $.ajax({
          url: '/',
          method: 'POST',
          contentType: 'application/json',
          data: data,
          timeout: 5000,
          success: (response) => {
              alert("Your message has been sent!");
          },
          error: (response) => {
            if (!response.success) {
              alert("I'm sorry, but there was an issue sending your message. Please feel free to contact me directly at brody.dingel@gmail.com.");
            }
          }
        });
      }
    });
});



