/*
 Main Navigation
 */
// 1st page load
$(window).load(function() {
    if (window.innerWidth < 768) {
        $(".main-navigation").hide();
    }
});

// toggle button
$(".nav-toggle").click(function() {
    $(".main-navigation").slideToggle("fast");
});

// browser resize, collapse mobile menu
$(window).resize(function() {
    if (window.innerWidth > 767) {
        $(".main-navigation").show();
    } else if (window.innerWidth < 768) {
        $(".main-navigation").hide();
    }
});

$(document).ready(function() {
    /*
   * back to top button
   */
    $.localScroll.defaults.axis = "y";
    // Scroll initially if there's a hash (#something) in the url
    $.localScroll.hash({
        duration: 500
    });
    $.localScroll({
        duration: 500,
        hash: true
    });
});

// SVG to PNG, older browsers: http://dbushell.com/2013/02/04/a-primer-to-front-end-svg-hacking/
if (!Modernizr.svg) {
    $('img[src$=".svg"]').each(function() {
        $(this).attr("src", $(this).attr("src").replace(".svg", ".png"));
    });
}