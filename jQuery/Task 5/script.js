$(document).ready(function() {
    $(".open").click(function() {
        $(".pop-outer").fadeIn();
    });

    $(".close-btn").click(function() {
        $(".pop-outer").fadeOut();
    });
});