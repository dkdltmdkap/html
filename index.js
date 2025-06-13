// 페이지 조정
$('#fullpage').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    navigationPositon: 'right',
    anchors: ['1', '2', '3', '4'],
    menu: '.menu',
    afterLoad: function (origin, destination, direction, trigger) {
        // console.log(destination.index);
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

// mini-project를 popup창 띄우기
// $('.d1').colorbox({ rel: 'gal' });
$('.d1').colorbox({ iframe: true, innerWidth: 1240, innerHeight: 422 });
$('.d2').colorbox({ iframe: true, innerWidth: 1840, innerHeight: 800 });
$('.d3').colorbox({ iframe: true, innerWidth: 1075, innerHeight: 881 });
$('.d4').colorbox({ iframe: true, innerWidth: 548, innerHeight: 573 });
$('.d5').colorbox({ iframe: true, innerWidth: 1062, innerHeight: 796 });
$('.d6').colorbox({ iframe: true, innerWidth: 582, innerHeight: 834 });
$('.d7').colorbox({ iframe: true, innerWidth: 1393, innerHeight: 407 });

// skills 그래프로 출력
let ctx = document.querySelector('#skills').getContext('2d');
ctx.strokeStyle = 'rgba(44, 43, 43, 0.8)';

let dis = 0;
for (let i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.moveTo(dis, 570);
    ctx.lineTo(dis, 35);
    ctx.stroke();
    dis += 115;
}
ctx.closePath();

ctx.fillStyle = '372948';
ctx.fillRect(0, 60, 115, 30);
ctx.fillRect(0, 135, 115, 30);
ctx.fillRect(0, 210, 233, 30);
ctx.fillRect(0, 290, 300, 30);
ctx.fillRect(0, 365, 280, 30);
ctx.fillRect(0, 445, 250, 30);
ctx.fillRect(0, 525, 10, 30);