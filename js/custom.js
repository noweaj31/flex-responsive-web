$(function(){
   
  // trigger
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
})
$('.gnb a').click(function(){
  $('.gnb, .trigger').removeClass('active')
})

// sliding jQuery
$('.gnb a, .gototop').click(function(e){
  $.scroll(this.hash || 0, 800);
  e.preventDefault();
})

  // header scroll change
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header, .gototop').addClass('active')
      
    }
    else {
      $('header, .gototop').removeClass('active')
    }
  })

  // slick.js
  $('.myslider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
})