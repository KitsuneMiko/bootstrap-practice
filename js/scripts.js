$(function() {
    $(".carousel").carousel( { interval: 2000, pause: "false" } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});

$(function() {
    $("#reserveButton").click(function() {
        $("#reserveModal").modal("show")
    });
});

$(function () {
    $("#reserveClose").click(function(){
        $("#reserveModal").modal("hide")
    });
});

$(function() {
    $("#loginButton").click(function() {
        $("#loginModal").modal("show")
    });
});

$(function() {
    $("#loginClose").click(function() {
        $("#loginModal").modal("hide")
    });
});