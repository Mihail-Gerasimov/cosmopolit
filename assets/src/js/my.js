const swiper = new Swiper('.swiper-cases', {
    // loop: true,
    // initialSlide: 1,
    // centeredSlides: true,
    // slidesPerView: 3,
    // spaceBetween: 20,
    navigation: {
        nextEl: '.next-slide',
        prevEl: '.prev-slide',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 'auto',
            spaceBetween: 10,
            initialSlide: 1,
            centeredSlides: true,
        },
        575: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            initialSlide: 1,
            centeredSlides: true,
        },
        767: {
            initialSlide: 1,
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
        },
    }
});