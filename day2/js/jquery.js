$('.nav').on('click', 'dl', function() {
    var index = $(this).index();
    $('.main div').eq(index).addClass('active').siblings().removeClass('active');
})