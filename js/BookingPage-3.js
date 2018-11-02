jQuery(document).ready(function () {
    $("body").on("click", ".drop_down", function () {
        $(this).toggleClass("open")
    }), $("body").on("click", ".zkt_page .contras .head", function () {
        $(this).toggleClass("open")
    }), window.matchMedia("(max-width: 800px)").matches && $(".planting_page .by_indication .items_wrap").slick({
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
