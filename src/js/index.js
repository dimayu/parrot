$('.products-items__item--link').hover(function () {
}, function () {
    $(this)('.tooltip').fadeOut(200);
}).mousemove(function (e) {
    let mousex = e.pageX - 140;
    let mousey = e.pageY - 150;
    $('.tooltip').css({
        top: mousey,
        left: mousex
    })
});


//search-mobile
$(".search__label").click(function(e) {
    e.preventDefault();
    $(".search__input").toggleClass('active');
})

//Menu button on click event
$(".header-mobile__button").on("click", function () {
    // Toggles a class on the menu button to transform the burger menu into a cross
    $(".header-mobile__button--line:nth-of-type(1)").toggleClass("header-mobile__button--line--1");
    $(".header-mobile__button--line:nth-of-type(2)").toggleClass("header-mobile__button--line--2");
    $(".header-mobile__button--line:nth-of-type(3)").toggleClass("header-mobile__button--line--3");

    // Toggles a class that slides the menu into view on the screen
    $(".mobile-menu").toggleClass("mobile-menu--open");
    return false;
});

//fixed menu
jQuery(function(){
    jQuery(window).scroll(function() {
        if(jQuery(this).scrollTop() >= 110) {
            jQuery('.nav').addClass('fixed-top');
        }
        else{
            jQuery('.nav').removeClass('fixed-top');
        }
    });
});
