;$(function () {
    var mySwiper = new Swiper ('.indpro', {
        loop: true, // 循环模式选项
        autoplay:true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
});







;$(function () {
    var mySwiper = new Swiper ('.inproductb', {
        loop: true, // 循环模式选项
        autoplay:true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
});


;$(function () {
    var swiper = new Swiper('.aboutaonuous', {
        autoplay:true,
        slidesPerView: 4,
        spaceBetween: 80,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
