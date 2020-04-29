import selectric from 'selectric';

//select
$('select').selectric();


//fixed header
$(window).scroll(function() {
  if($(window).width() >= 992) {
    if($(window).scrollTop() >= 100) {
      $('.header').addClass('scroll');
    } else{
      $('.header').removeClass('scroll');
    }
  } else{
    if($(window).scrollTop() >= 40) {
      $('.header').addClass('scroll');
    } else{
      $('.header').removeClass('scroll');
    }
  }
});



//open menu
$('.menu-open').on('click', function() {
  $('.header').toggleClass('active');
  $('.mobile-menu').fadeToggle();
});



//tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this).addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});
