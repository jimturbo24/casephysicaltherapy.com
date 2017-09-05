$(function(){

    $('.hamburger').click(function() {
      $('#topNav').toggleClass('responsive')
    });

    $('.navLink').click(function() {
      $('#topNav').children().removeClass('current-page');
      $(this).addClass('current-page');
    });

});
