//fixed menu
window.addEventListener("scroll", function() {
    if (pageYOffset >= 110) {
        document.querySelector(".nav").classList.add("fixed-top");
    }else {
        document.querySelector(".nav").classList.remove("fixed-top");
    }
});

//search-mobile
document.querySelector(".search__label").onclick = function() {
    document.querySelector(".search__input").classList.toggle("active");
};

//Menu button on click event
document.querySelector(".header-mobile__button").onclick = function () {
    // Toggles a class on the menu button to transform the burger menu into a cross
    document.querySelector(".header-mobile__button--line:nth-of-type(1)").classList.toggle("header-mobile__button--line--1");
    document.querySelector(".header-mobile__button--line:nth-of-type(2)").classList.toggle("header-mobile__button--line--2");
    document.querySelector(".header-mobile__button--line:nth-of-type(3)").classList.toggle("header-mobile__button--line--3");

    // Toggles a class that slides the menu into view on the screen
    document.querySelector(".mobile-menu").classList.toggle("mobile-menu--open");
    return false;
};


