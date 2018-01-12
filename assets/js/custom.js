
function setRateElement(objects, x, y) {
    var w = x || 5;
    var h = y || 3;
    // objects.height(objects.width() * h / w);
    objects.each(function () {
        $(this).height($(this).width() * h / w);
    });
}

function openNav() {
    document.getElementById("mainSidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mainSidenav").style.width = "0";
}

(function ($) {
    $(document).ready(function () {
        $('a[href^="."]').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
            }
        });
        // RESIZE
        var logo = $('.factoria-temp .logo-item > div').width();
        $('.factoria-temp .logo-item > div').height(logo);

        setRateElement($('.imgResize-19-16'), 19, 16);
        setRateElement($('.imgResize-16-9'), 16, 9);
        setRateElement($('.imgResize-9-5'), 9, 5);
        setRateElement($('.imgResize-5-3'), 5, 3);
        setRateElement($('.imgResize-4-3'), 4, 3);
        setRateElement($('.imgResize-3-2'), 3, 2);
        setRateElement($('.imgResize-3-1'), 3, 1);
        setRateElement($('.imgResize-2-1'), 2, 1);
        setRateElement($('.imgResize-1-1'), 1, 1);

        var heightPost = $('.post-lists .post-item .imgResize-1-1').height();
        $('.post-lists .item-first .post-bg').height(heightPost);

        //Home Banner Slider
        $('.slider-home').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 750,
            items: 1,
            nav: true,
            navText: ['<div class="btn-nav"><i class="fa fa-angle-left" aria-hidden="true"></i></div>', '<div class="btn-nav"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'],
            dots: false
        });

        //Journals Slider
        $('.journals-slider').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 500,
            center: true,
            nav: true,
            navText: ['<div class="btn-nav"><i class="fa fa-angle-left" aria-hidden="true"></i></div>', '<div class="btn-nav"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'],
            dots: false,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                },
                992: {
                    items: 6
                }
            }
        });

        if ($(window).width() > 991) {
            $('.journals-slider .owl-item.center').prev().addClass('prevslide');
            $('.journals-slider .owl-item.center').next().addClass('nextslide');
            $('.journals-slider').on('translated.owl.carousel', function () {
                $('.journals-slider .owl-item').removeClass('prevslide').removeClass('nextslide');
                $('.journals-slider .owl-item.center').prev().addClass('prevslide');
                $('.journals-slider .owl-item.center').next().addClass('nextslide');
            });
        }

        //Revistas Slider
        $('.revistas-slider').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 500,
            center: true,
            nav: true,
            navText: ['<div class="btn-nav"><i class="fa fa-angle-left" aria-hidden="true"></i></div>', '<div class="btn-nav"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'],
            dots: false,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                },
                992: {
                    items: 4
                },
                1199: {
                    items: 6
                }
            }
        });

        // Evento Carousel
        $('.evento-owl-carousel').owlCarousel({
            loop: true,
            smartSpeed: 500,
            dots: false,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    autoplay: true,
                    autoplayTimeout: 5000,
                    smartSpeed: 500,
                    items: 1,
                    nav: true
                },
                580: {
                    autoplay: true,
                    autoplayTimeout: 5000,
                    smartSpeed: 500,
                    items: 2,
                    nav: true
                },
                768: {
                    autoplay: true,
                    autoplayTimeout: 5000,
                    smartSpeed: 500,
                    items: 3,
                    nav: true
                },
                992: {
                    items: 4,
                    nav: false
                }
            }
        });

        $(".evento-owl-carousel .item").height($(".evento-owl-carousel .item").width() * 1 / 3);

        //timeline
        var timeCtnH1 = $('.programa-section .timeline .col-timeline.first').height() / 2 + 25;
        var timeCtnH2 = $('.programa-section .timeline .col-timeline.last').height() / 2 + 25;
        var timeCtnH3 = timeCtnH1 + timeCtnH2 - 20;

        $('<style>.programa-section .timeline::after { top: ' + timeCtnH1 + 'px; height: calc(100% - ' + timeCtnH3 + 'px );}</style>').appendTo('head');

        $('.btn-filter').on('click', function () {
            var collapsed = $('.eventos-filter-select').hasClass('hidden-xs');
            if (!collapsed) {
                $('.eventos-filter-select').addClass('hidden-xs');
            } else {
                $('.eventos-filter-select').removeClass('hidden-xs');
            }
        });

    });
    $(window).resize(function () {
        // RESIZE
        setRateElement($('.imgResize-19-16'), 19, 16);
        setRateElement($('.imgResize-16-9'), 16, 9);
        setRateElement($('.imgResize-9-5'), 9, 5);
        setRateElement($('.imgResize-5-3'), 5, 3);
        setRateElement($('.imgResize-4-3'), 4, 3);
        setRateElement($('.imgResize-3-2'), 3, 2);
        setRateElement($('.imgResize-3-1'), 3, 1);
        setRateElement($('.imgResize-2-1'), 2, 1);
        setRateElement($('.imgResize-1-1'), 1, 1);

        var heightPost = $('.post-lists .post-item .imgResize-1-1').height();
        $('.post-lists .item-first .post-bg').height(heightPost);

        $(".evento-owl-carousel .item").height($(".evento-owl-carousel .item").width() * 1 / 3);

    });

    $(window).bind('scroll', function (e) {

    });
})(jQuery);