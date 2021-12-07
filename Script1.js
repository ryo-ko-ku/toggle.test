// JavaScript source code
$(function () {

    $("#open-close").click(function () {
        $("#toggle-answer").toggle();
    });

    $(".btn-danger").click(function () {
        $("#target").toggleClass("active");
    });
    $(".btn-dark").click(function () {
        $("#target2").slideToggle();
    })
});