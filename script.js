$(function () {
    $("#content1").hide();
    $("#content2").hide();
    $("#content3").hide();
    $("#content4").hide();

    setTimeout(() => {
        $("#content1").hide().fadeIn(2000);
        setTimeout(function () {
            $("#content2").fadeIn(2000);
        }, 1000);
        setTimeout(function () {
            $("#content3").fadeIn(2000);
        }, 2000);
        setTimeout(function () {
            $("#content4").fadeIn(2000);
        }, 3000);
    }, 1000);
});