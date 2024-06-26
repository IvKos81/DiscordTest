$(window).scroll(function() {
  if (window.scrollY !== 0 ) {
    $('#header').addClass('bg-white');
    $('.menu__link').addClass('t-dark');
    $('.burger').addClass('bg-dark');
    $('.logo>img').attr("src","./assets/img/header-logo-dark.png");
    
  } else {
    if (window.innerWidth<989 ) {
      $('#header').removeClass('bg-white');
      $('.burger').removeClass('bg-dark');
      $('.logo>img').attr("src","./assets/img/header-logo-white.png");
      return
    }
    $('#header').removeClass('bg-white');
    $('.menu__link').removeClass('t-dark');
    $('.burger').removeClass('bg-dark');
    $('.logo>img').attr("src","./assets/img/header-logo-white.png");
  }
})

$('.burger').click(function(){
  $('this').toggleClass('burger-rotate-before burger-rotate-after burger-transparent');
  $('.header__main').toggleClass('opened');
  $('.menu__link').addClass('t-dark');
  $('#header').addClass('bg-white');
  $('.menu__link').addClass('t-dark');
  $('.burger').addClass('bg-dark');
  $('.logo>img').attr("src","./assets/img/header-logo-dark.png");
})

$('.menu__link').click(function(){
  $('.header__main').removeClass('opened');
  $('.burger').removeClass('burger-rotate-before burger-rotate-after burger-transparent');
})

$('.burger').click(function(){
  $(this).toggleClass('burger-rotate-before burger-rotate-after burger-transparent');
})


$('.accordeon__title').click(function(){
  var acc = document.querySelectorAll('.accordeon__text')
  var stars = document.querySelectorAll('.accordeon__star')
  console.log(acc)
  for (var i=0; i<acc.length; i++) {
    if (!acc[i].classList.contains('hidden')) {
      acc[i].classList.toggle('hidden')
      stars[i].classList.toggle('rotate')
    }
  }
  $(this).siblings('.accordeon__text').toggleClass('hidden');
  $(this).siblings('.accordeon__star').toggleClass('rotate');
})

$('#reviews-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  centerPadding: '60px',
  arrows: true,
  // initialSlide: 2,

});
