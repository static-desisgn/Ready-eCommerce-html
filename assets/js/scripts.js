(function ($) {
    "use strict";

    /*********************************
    /* Sticky Navbar
    *********************************/
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var stikey = $(".header");

        if (scrolling >= 2) {
            $(stikey).addClass("nav-bg");
        } else {
            $(stikey).removeClass("nav-bg");
        }
    });

    /*********************************
    /*  Mobile Menu Expand (Main Dropdown)
    *********************************/
    $(".offcanvas-nav-menu > .has-dropdown > .nav-link").on("click", function (event) {
        event.preventDefault();
        // Close other top-level submenus
        $(".offcanvas-nav-menu > .has-dropdown > .nav-link").not(this).next(".sub-menu").slideUp(400);
        // Toggle current submenu
        $(this).next(".sub-menu").stop(true, true).slideToggle(400);
    });

    /*********************************
    /*  Mobile Menu Expand (Sub Dropdown)
    *********************************/
    $(".offcanvas-nav-menu .sub-menu .has-dropdown > .nav-link").on("click", function (event) {
        event.preventDefault();
        // Close sibling sub-sub-menus within same sub-menu
        $(this).parent().siblings(".has-dropdown").find(".sub-sub-menu").slideUp(400);
        // Toggle current sub-sub-menu
        $(this).next(".sub-sub-menu").stop(true, true).slideToggle(400);
    });

    /********************************
     * Language Dropdown
     ********************************/
    $(document).ready(function () {
        $(".dropdown__item .selected").on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(".dropdown__list").not($(this).next()).removeClass("active");
            $(this).next().toggleClass("active");
        });

        $(".dropdown__list li a").on("click", function (e) {
            e.preventDefault();
            $(this).closest(".dropdown__item").find(".selected").html($(this).html());
            $(".dropdown__list").removeClass("active");
        });

        $(document).click(() => $(".dropdown__list").removeClass("active"));
    });

    /********************************
     * All Category Filter Toggle
     ********************************/
    $(".filter__header").on("click", function () {
        $(".categoryFilter__wrapper").toggleClass("active");
    });
    // Close filter when clicking outside
    $(document).click(function (e) {
        if (!$(e.target).closest(".categoryFilter__wrapper, .filter__header").length) {
            $(".categoryFilter__wrapper").removeClass("active");
        }
    });

    /*********************************
    /*  Banner Slider 
    *********************************/
    if ($(".banner__slider").length > 0) {
        var bannerSlider = new Swiper(".banner__slider", {
            effect: "fade",
            slidesPerView: 1,
            spaceBetween: 30,
            grabCursor: true,
            loop: true,
            autoplay: {
                enabled: true,
                delay: 3000,
            },
            pagination: {
                el: ".banner-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".banner-swipe-next",
                prevEl: ".banner-swipe-prev",
            },
        });
    }

    /*********************************
    /*  Category Slider 
    *********************************/
    if ($(".category__slider").length > 0) {
        var categorySlider = new Swiper(".category__slider", {
            loop: true,
            spaceBetween: 24,
            grabCursor: true,
            // watchOverflow: true,
            autoplay: {
                enabled: true,
                delay: 3000,
            },
            navigation: {
                nextEl: ".category-swipe-next",
                prevEl: ".category-swipe-prev",
            },
            breakpoints: {
                320: { slidesPerView: 2 },
                375: { slidesPerView: 2.8 },
                480: { slidesPerView: 2.8 },
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                992: { slidesPerView: 5 },
                1200: { slidesPerView: 6 },
                1400: { slidesPerView: 6 },
            },
        });
    }

    /*********************************
    /*  Recent Slider 
    *********************************/
    if ($(".recent__slider").length > 0) {
        var recentSlider = new Swiper(".recent__slider", {
            loop: false,
            spaceBetween: 24,
            grabCursor: true,
            // watchOverflow: true,
            autoplay: {
                enabled: true,
                delay: 3000,
            },
            navigation: {
                nextEl: ".recent-swipe-next",
                prevEl: ".recent-swipe-prev",
            },
            breakpoints: {
                320: { slidesPerView: 1 },
                375: { slidesPerView: 1 },
                480: { slidesPerView: 1.5 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 2.2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
                1400: { slidesPerView: 4 },
            },
        });
    }

    /*********************************
    /*  Ads Slider
    *********************************/
    if ($(".ads__slider").length > 0) {
        var adsSlider = new Swiper(".ads__slider", {
            loop: false,
            spaceBetween: 30,
            grabCursor: true,
            autoplay: {
                enabled: true,
                delay: 2000,
            },

            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                400: {
                    slidesPerView: 1,
                },
                479: {
                    slidesPerView: 1.3,
                },
                575: {
                    slidesPerView: 1.3,
                },
                767: {
                    slidesPerView: 1.5,
                },
                991: {
                    slidesPerView: 2.3,
                },
                1199: {
                    slidesPerView: 2.4,
                },
            },
        });
    }

    /*********************************
    /* Add/Minus Quantity
    *********************************/
    $(".incressQnt").on("click", function () {
        var $qty = $(this).closest("div").find(".qnttinput");
        var currentVal = parseInt($qty.val(), 10);
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    $(".decressQnt").on("click", function () {
        var $qty = $(this).closest("div").find(".qnttinput");
        var currentVal = parseInt($qty.val(), 10);
        if (!isNaN(currentVal) && currentVal > 1) {
            $qty.val(currentVal - 1);
        } else {
            $(this).parents(".cart__action__btn").find(".cart__quantity").css("display", "none");
        }
    });

    /*********************************
    /* CountDown 
    *********************************/
    $(document).ready(function () {
        var endDate = "2025/12/25";

        var myCountDown = new ysCountDown(endDate, function (remaining, finished) {
            const daysEl = document.getElementById("days");
            const hoursEl = document.getElementById("hours");
            const minutesEl = document.getElementById("minutes");
            const secondsEl = document.getElementById("seconds");
            const dealsEl = document.querySelector("#dealsCountdown");

            if (finished) {
                if (dealsEl) {
                    dealsEl.textContent = "Expired";
                }
            } else {
                if (daysEl) daysEl.textContent = String(remaining.totalDays).padStart(2, "0");
                if (hoursEl) hoursEl.textContent = String(remaining.hours).padStart(2, "0");
                if (minutesEl) minutesEl.textContent = String(remaining.minutes).padStart(2, "0");
                if (secondsEl) secondsEl.textContent = String(remaining.seconds).padStart(2, "0");
            }
        });
    });

    /*********************************
    /*   Select2  Start
    *********************************/
    if ($(".form__dropdown").length > 0) {
        $(".form__dropdown").select2({
            tags: true,
            tokenSeparators: [",", " "],
        });
    }

    /*********************************
    /* Price Range Slider
    *********************************/
    if ($("#slider__range").length > 0) {
        $("#slider__range").slider({
            range: true,
            min: 0,
            max: 5000,
            values: [300, 4200],
            slide: function (event, ui) {
                $("#minamount").html("$" + ui.values[0]);
                $("#maxamount").html("$" + ui.values[1]);
            },
        });
        $("#minamount").html("$" + $("#slider__range").slider("values", 0));
        $("#maxamount").html("$" + $("#slider__range").slider("values", 1));
    }

    /*********************************
    /*  productGallerySwiper Slider
    *********************************/
    document.addEventListener("DOMContentLoaded", function () {
        var gallery__thumb = new Swiper(".gallery__thumb", {
            spaceBetween: 16,
            slidesPerView: 4,
            // freeMode: true,
            // watchSlidesProgress: true,
            // centerSlide: true,
            navigation: {
                nextEl: ".gallery-swipe-next",
                prevEl: ".gallery-swipe-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 3,
                },
                479: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                },
            },
        });

        var gallery__main = new Swiper(".gallery__main", {
            spaceBetween: 16,
            navigation: {
                nextEl: ".galleryThumb-swipe-next",
                prevEl: ".galleryThumb-swipe-prev",
            },
            thumbs: {
                swiper: gallery__thumb,
            },
        });
    });

    /**********************************
     *  Back to Top JS
     **********************************/
    $("body").append('<div id="toTop" class="back__icon"><i class="ri-arrow-up-double-line"></i></div>');
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 300) {
            $("#toTop").addClass("active");
        } else {
            $("#toTop").removeClass("active");
        }
    });
    $("#toTop").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 0);
        return false;
    });
})(jQuery);
