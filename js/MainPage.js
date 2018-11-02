jQuery(document).ready(function () {
    var e;
    $("body").on("click", ".zkt_page .contras .head, .one_hotel_page .contras .head", function () {
        $(this).toggleClass("open")
    }), $(".main_header .mob_nav").on("click", function () {
        var e = $(this).find("img");
        e.attr("src") === e.data("openIconSrc") ? e.attr("src", e.data("closeIconSrc")) : e.attr("src", e.data("openIconSrc")), $("#main_menu_modal").toggleClass("open")
    }), $("body").on("click", ".modal_btn", function () {
        var e = $(this).data("modal-for"), o = $(e);
        $("body").css("overflow", "hidden"), o.addClass("open")
    }), $("body").on("click", ".modal_close", function () {
        $(this).closest(".modal").removeClass("open"), $("body").css("overflow", "auto")
    }), $("body").on("click", function (e) {
        var o = $(e.target);
        o.hasClass("modal") && (o.removeClass("open"), $("body").css("overflow", "auto"))
    }), $("body").on("click", function (e) {
        var o = $(".drop_down.open"), a = $(e.target);
        a.hasClass("drop_down") ? a.toggleClass("open") : o.removeClass("open")
    }), $(".search_page .main .items_wrap .item .body .left .slick_slider").slick({
        infinite: !1,
        prevArrow: $(".search_page .main .items_wrap .item .body .left .prev_arrow"),
        nextArrow: $(".search_page .main .items_wrap .item .body .left .next_arrow")
    }), $(".home_page").length && (e = !0, $(".home_page .items_wrap .item").on("mouseenter", function () {
        e && ($(".home_page .items_wrap .item").removeClass("active"), e = !1), $(this).addClass("active")
    }), $(".home_page .items_wrap .item").on("mouseleave", function () {
        $(this).removeClass("active")
    }), $(".home_page .items_wrap .item").on("click touchstart", function () {
        $(".home_page .items_wrap .item").removeClass("active"), $(this).addClass("active")
    })), $(".one_hotel_page").length && function () {
        window.matchMedia("(max-width: 800px)").matches && $(".one_hotel_page .hotel_rooms_static .items_wrap").slick({
            slidesToShow: 2,
            arrows: !1,
            dots: !0,
            responsive: [{breakpoint: 480, settings: {slidesToShow: 1}}]
        }), window.matchMedia("(min-width:480px) and (max-width:800px)").matches && ScrollbarX.init(document.querySelector(".one_hotel_page .services .services_wrapper"), {
            speed: 1.5,
            damping: .1,
            overscrollEffect: !1
        }), window.matchMedia("(max-width: 480px)").matches && ($(".one_hotel_page .procedures .items_wrap").slick({
            arrows: !1,
            dots: !0,
            infinite: !1
        }), $(".one_hotel_page .articles .items_wrap").slick({
            arrows: !1,
            dots: !0,
            infinite: !1
        })), $(".one_hotel_page .description .right .switch_btns .btn").on("click", function () {
            var e = $(this);
            $(".one_hotel_page .description .right .switch_btns .btn, .one_hotel_page .description .right .benefits").removeClass("active"), e.addClass("active"), e.hasClass("plus") ? $(".one_hotel_page .description .right .benefits.plus").addClass("active") : $(".one_hotel_page .description .right .benefits.minus").addClass("active")
        }), $(".one_hotel_head_gallery .items_wrap").slick({
            prevArrow: $(".one_hotel_head_gallery .slick_prev"),
            nextArrow: $(".one_hotel_head_gallery .slick_next"),
            asNavFor: $(".one_hotel_head_gallery .items_wrap_nav"),
            autoplay: !0,
            autoplaySpeed: 3e3,
            pauseOnHover: !0,
            responsive: [{breakpoint: 480, settings: {arrows: !1, dots: !0}}]
        }), $(".one_hotel_head_gallery .items_wrap_nav").slick({
            arrows: !1,
            asNavFor: $(".one_hotel_head_gallery .items_wrap, #one_hotel_head_modal_gallery .modal_gallery_slider"),
            slidesToShow: 8,
            focusOnSelect: !0,
            responsive: [{breakpoint: 1200, settings: {slidesToShow: 6}}, {
                breakpoint: 800,
                settings: {slidesToShow: 4}
            }, {breakpoint: 600, settings: {slidesToShow: 3}}]
        }), $("#one_hotel_head_modal_gallery .modal_gallery_slider").slick({
            prevArrow: $("#one_hotel_head_modal_gallery .slick_prev"),
            nextArrow: $("#one_hotel_head_modal_gallery .slick_next"),
            asNavFor: $("#one_hotel_head_modal_gallery .modal_gallery_slider_nav"),
            responsive: [{breakpoint: 480, settings: {arrows: !1, dots: !0}}]
        }), $("#one_hotel_head_modal_gallery .modal_gallery_slider_nav").slick({
            arrows: !1,
            asNavFor: $("#one_hotel_head_modal_gallery .modal_gallery_slider"),
            slidesToShow: 6,
            focusOnSelect: !0,
            responsive: [{breakpoint: 800, settings: {slidesToShow: 4}}]
        }), $(".one_hotel_page_nav").on("click", ".link", function (e) {
            var o, a = $(this).data("linkTo");
            a && (o = $(a).offset().top + 10, $("body,html").animate({scrollTop: o}, 1500))
        }), $(".hotel_rooms_static").on("mouseleave", ".items_wrap .item_wrapper.hover", function () {
            $(this).removeClass("hover")
        }), $(".hotel_rooms_static").on("mouseenter", ".items_wrap .item_wrapper h5", function () {
            $(this).closest(".item_wrapper").addClass("hover")
        }), $("#procedure_modal .procedure_modal_gallery .items_wrap").slick({
            prevArrow: $("#procedure_modal .procedure_modal_gallery .slick_prev"),
            nextArrow: $("#procedure_modal .procedure_modal_gallery .slick_next"),
            responsive: [{breakpoint: 480, settings: {arrows: !1, dots: !0}}]
        }), $("#hotel_room_modal .hotel_room_modal_gallery .items_wrap").slick({
            arrows: !1,
            asNavFor: $("#hotel_room_modal .hotel_room_modal_gallery .items_wrap_nav_wrap"),
            responsive: [{breakpoint: 480, settings: {dots: !0}}]
        }), $("#hotel_room_modal .hotel_room_modal_gallery .items_wrap_nav_wrap").slick({
            prevArrow: $("#hotel_room_modal .items_wrap_nav .slick_prev"),
            nextArrow: $("#hotel_room_modal .items_wrap_nav .slick_next"),
            slidesToShow: 4,
            asNavFor: $("#hotel_room_modal .hotel_room_modal_gallery .items_wrap"),
            focusOnSelect: !0
        }), $(".one_hotel_page .services .items_wrap .item").viewportChecker();
        var e = $(".one_hotel_page_nav"), o = $(".main_header"), a = e.offset().top, t = !0;
        $(window).on("scroll", function (s) {
            var i;
            !function () {
                var s = $(this).scrollTop();
                t && s > a ? (o.css("position", "absolute"), e.addClass("fixed"), t = !1) : !t && s < a && (o.css("position", "fixed"), e.removeClass("fixed"), t = !0)
            }(), i = $(document).scrollTop(), $(".one_hotel_page_nav .link").each(function () {
                var e, o = $(this).data("linkTo"), a = $(o);
                if (!a.length) return !1;
                (e = a.position().top) <= i && e + a.outerHeight() > i ? ($(".one_hotel_page_nav .link.active").removeClass("active"), $(this).addClass("active")) : $(this).removeClass("active")
            })
        })
    }(), window.matchMedia("(max-width: 800px)").matches && $(".planting_page .by_indication .items_wrap").slick({
        slidesToShow: 2,
        dots: !0,
        arrows: !1,
        infinite: !1,
        responsive: [{breakpoint: 480, settings: {slidesToShow: 1}}]
    }), window.matchMedia("(max-width: 600px)").matches && ($(".children_page .indicators .items_wrap").addClass("drop_down_content"), $(".how_choose_page .articles .items_wrap").slick({
        arrows: !1,
        dots: !0,
        infinite: !1
    }), $(".article_page .articles .items_wrap").slick({
        arrows: !1,
        dots: !0,
        infinite: !1
    }), $(".children_page .by_indicators .items_wrap, .children_page .articles .items_wrap").slick({
        arrows: !1,
        dots: !0,
        infinite: !1
    }), $(".general_page .articles .items_wrap").slick({
        arrows: !1,
        dots: !0,
        infinite: !1
    }), $(".resorts_page .articles .items_wrap").slick({
        arrows: !1,
        dots: !0,
        infinite: !1
    }), $(".treatment_page .hotels .items_wrap, .treatment_page .articles .items_wrap").slick({
        arrows: !1,
        dots: !0,
        infinite: !1
    }), $(".zkt_page .articles .items_wrap").slick({
        arrows: !1,
        dots: !0,
        infinite: !1
    })), window.matchMedia("(max-width: 480px)").matches && ($(".zkt_page .resorts .items_wrap").slick({
        arrows: !1,
        dots: !0,
        infinite: !1
    }), $(".planting_page .articles .items_wrap").slick({
        arrows: !1,
        dots: !0,
        infinite: !1
    }), $(".planting_page .resorts .items_wrap").slick({arrows: !1, dots: !0, infinite: !1}))
});
