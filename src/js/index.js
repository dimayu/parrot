$(".js-open-modal").click(function (e) {
    e.preventDefault();
    this.addClass("sss");
    dataModal = $(this).attr("data-modal");
    $("#" + dataModal).css({
        display: "block"
    });
    // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
});
document.querySelector(".js-open-modal").onclick = function () {
    console.log(123);
};

document.querySelectorAll(".js-open-modal")

$(".js-close-modal, .modal-bg").click(function () {
    $(".custom-modal").css({
        display: "none"
    });
    // $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
});