$(document).ready(function() {
    // header
    $(".header").click(function() {
        $(".header").css("background-color", "lightpink")
    });

    // siderbar
    $(".sidebar").click(function() {
        $("#lside").text("Leftbar");
    })

    // extracontent
    $(".extra-content").click(function() {
        $(".main-content").fadeOut();
        $(".extra-content").css("height", "35%");
    });
});