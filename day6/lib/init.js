define(['jquery', 'swiper'], function($, Swiper) {
    document.documentElement.style.fontSize = window.innerWidth / 750 * 100 + 'px';
    new Swiper('.nav', {
        pagination: {
            el: '.page'
        }
    })
})