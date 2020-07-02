new TypeIt('#typed-heading', {
  strings: ['Software developer.', 'Linguist.', 'Instructor.', 'Entrepreneur.'],
  speed: 40,
  lifeLike: true,
  breakLines: true
})
.go();

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

const siteKey = '6LedVKwZAAAAANtgaA4gd0wqFV4bHtYNmkr-Okdn';

const runCaptcha = () => {
  grecaptcha.execute(siteKey, {action: '/'}).then((token) => {
    const contacterName = $('#contacter-name').val();
    const contacterEmail = $('#contacter-email').val();
    const contacterMessage = $('#contacter-message').val();
    const captcha = token;

    sendData(contacterName, contacterEmail, contacterMessage, captcha);
  });
}

const sendData = (contacterName, contacterEmail, contacterMessage, captcha) => {
  const data  = JSON.stringify({contacterName: contacterName, contacterEmail: contacterEmail, contacterMessage: contacterMessage, captcha: captcha});
  $.ajax({
    url: '/',
    method: 'POST',
    contentType: 'application/json',
    data: data,
    success: (response) => {
      window.alert("Your message has been sent!");
    }
  });
}

$(() => {
    $('#contact-form').on('submit', (event) => {
      event.preventDefault();
      runCaptcha();
    });
});



