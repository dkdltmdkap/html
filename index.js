$('#fullpage').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    navigationPositon: 'right',
    anchors: ['1', '2', '3', '4'],
    menu: '.menu',
    afterLoad: function (origin, destination, direction, trigger) {
        console.log(destination.index);
        if (destination.index == 0) {
            $.fn.fullpage.setAutoScrolling(true);
            document.querySelector('.menu').style.display = 'none';
        } else if (destination.index <= 2) {
            $.fn.fullpage.setAutoScrolling(true);
            document.querySelector('.menu').style.display = 'block';
        } else if (destination.index == 3) {
            $.fn.fullpage.setAutoScrolling(false);
            document.querySelector('.menu').style.display = 'block';
        }
    }
});

$('.d1').colorbox({ rel: 'gal' });
$('.d1pop').colorbox({ iframe: true, innerWidth: 800, innerHeight: 600 });

$('.win').on('click', () => {
    window.open('./popup.html', 'popup', 'width=600, height=400');
});