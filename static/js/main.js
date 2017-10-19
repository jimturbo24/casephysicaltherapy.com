$(function(){

    $('.menuIcon').click(function() {
      $('#topNav').toggleClass('responsive')
    });

    $('.navLink').each(function() {
        if ($(this).prop('href') == window.location.href) {
          $(this).addClass('current-page');
        }
    });
});
