/*
 Main Navigation
 */

// 1st page load
jQuery(document).ready(function($) {
  if (window.innerWidth < 768) {
    $('.main-navigation').hide();
  }

  // toggle button
  $('.nav-toggle').click(function(){
    $('.main-navigation').slideToggle('fast');
  });

  // browser resize, collapse mobile menu
  $(window).resize(function() {
    if (window.innerWidth > 767) {
      $('.main-navigation').show();
    }
    else if (window.innerWidth < 768) {
      $('.main-navigation').hide();
    }
  });

});
