$(document).ready(function () {
    $("body").prepend('<div class="preloader"></div>');

    $(window).on("load", function () {
        $(".preloader").fadeOut("slow");
    });

    $("#telefone").mask("(00) 00000-0000", { maxlength: 15 });
    $("#cnpj").mask("00.000.000/0000-00", { maxlength: 18 });

    $(".play-button").on("click", function () {
        $(".video-container").html(
            '<iframe width="700" height="420" src="https://www.youtube.com/embed/oPh-4A_GKtM" frameborder="0" allowfullscreen></iframe>'
        );              
    });

    $(".cta-button").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(".contact").offset().top
        }, 800);
    });
});
