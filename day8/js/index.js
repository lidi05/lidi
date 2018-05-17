define(['jquery', 'hand', 'bscroll'], function($, hand, scroll) {
    document.documentElement.style.fontSize = window.innerWidth / 750 * 100 + 'px';
    var obj = {
        data: [{ tel: '推荐' }, { tel: '手机' }, { tel: '智能' }, { tel: '电视' }, { tel: '全面屏' }, { tel: '生活用品' }, { tel: '洗漱用品' }, { tel: '衣服' }],
        say: [{
            img: 'img/1.png',
            pic: '￥569'
        }, {
            img: 'img/2.png',
            pic: '￥569'
        }, {
            img: 'img/3.png',
            pic: '￥569'
        }, {
            img: 'img/3.png',
            pic: '￥569'
        }]
    };
    var html = $('.tel').html();
    var htmlData = hand.compile(html);
    $('.list').html(htmlData(obj));
    var banner = $('.del').html();
    var bannerData = hand.compile(banner);
    $('.main_banner>div').html(bannerData(obj));
    new scroll('.nav')
    new scroll('.main_banner')
})