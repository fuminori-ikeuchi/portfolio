

$('.address').hide();

$('.mail').on('click', () => {
  $('.address').show();
});

$('.address').on('click', () => {
  $('.address').hide();
});

$('.popup').magnificPopup({
  type: 'image',
  gallery: { enabled: true },
});


$('.hidden').hide();