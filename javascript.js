const sr = ScrollReveal({
    duration: 1000,
    reset: true
});

sr.reveal(` .about,
            .about-content, .product,
            .tittle, .bakery-product,
            .inner-bakery-row,.inner-bakery-col .video,
            .contact, bakery-contact, .bakery-contact-row, .bakery-contact-col`, {
    interval: 200
})

$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fas fa-times');
        $('.navigate').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fas fa-times');
        $('.navigate').removeClass('nav-toggle');
    });
});

