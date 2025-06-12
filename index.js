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

// $('.d1').colorbox({ rel: 'gal' });
$('.d1').colorbox({ iframe: true, innerWidth: 1240, innerHeight: 422 });
$('.d2').colorbox({ iframe: true, innerWidth: 1840, innerHeight: 904 });
$('.d3').colorbox({ iframe: true, innerWidth: 1075, innerHeight: 881 });
$('.d4').colorbox({ iframe: true, innerWidth: 548, innerHeight: 573 });
$('.d5').colorbox({ iframe: true, innerWidth: 1062, innerHeight: 796 });
$('.d6').colorbox({ iframe: true, innerWidth: 582, innerHeight: 834 });
$('.d7').colorbox({ iframe: true, innerWidth: 1393, innerHeight: 407 });