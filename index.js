// 페이지 조정
$('#fullpage').fullpage({
<<<<<<< HEAD
    anchors: ['HOME', 'ABOUTME', 'SKILL', 'WORK', 'CONTACT'],
    menu: 'nav',
    autoScrolling: true,
    scrollHorizontally: true,
    scrollOverflow: true,
    navigation: true,
    navigationPositon: 'right',
    afterLoad: function (origin, destination, direction, trigger) {

        if (destination.index == 0) {
            $.fn.fullpage.setAutoScrolling(true);
            document.querySelector('nav:nth-of-type(1)').style.display = 'flex';
            document.querySelector('nav:nth-of-type(2)').style.display = 'none';
            document.querySelector('nav:nth-of-type(3)').style.display = 'none';
            document.querySelector('nav:nth-of-type(4)').style.display = 'none';
            document.querySelector('nav:nth-of-type(5)').style.display = 'none';
        } else if (destination.index == 1) {
            $.fn.fullpage.setAutoScrolling(true);
            document.querySelector('nav:nth-of-type(1)').style.display = 'none';
            document.querySelector('nav:nth-of-type(2)').style.display = 'flex';
            document.querySelector('nav:nth-of-type(3)').style.display = 'none';
            document.querySelector('nav:nth-of-type(4)').style.display = 'none';
            document.querySelector('nav:nth-of-type(5)').style.display = 'none';
        } else if (destination.index == 2) {
            $.fn.fullpage.setAutoScrolling(true);
            document.querySelector('nav:nth-of-type(1)').style.display = 'none';
            document.querySelector('nav:nth-of-type(2)').style.display = 'none';
            document.querySelector('nav:nth-of-type(3)').style.display = 'flex';
            document.querySelector('nav:nth-of-type(4)').style.display = 'none';
            document.querySelector('nav:nth-of-type(5)').style.display = 'none';
        } else if (destination.index == 3) {
            $.fn.fullpage.setAutoScrolling(true);
            document.querySelector('nav:nth-of-type(1)').style.display = 'none';
            document.querySelector('nav:nth-of-type(2)').style.display = 'none';
            document.querySelector('nav:nth-of-type(3)').style.display = 'none';
            document.querySelector('nav:nth-of-type(4)').style.display = 'flex';
            document.querySelector('nav:nth-of-type(5)').style.display = 'none';
        } else if (destination.index == 4) {
            $.fn.fullpage.setAutoScrolling(true);
            document.querySelector('nav:nth-of-type(1)').style.display = 'none';
            document.querySelector('nav:nth-of-type(2)').style.display = 'none';
            document.querySelector('nav:nth-of-type(3)').style.display = 'none';
            document.querySelector('nav:nth-of-type(4)').style.display = 'none';
            document.querySelector('nav:nth-of-type(5)').style.display = 'flex';
        }

        if (destination.anchor === 'HOME') {
            const h1Span = document.querySelectorAll('#home-title span');
            const pSpan = document.querySelectorAll('#home-subtitle span');

            h1Span.forEach((span, i) => {
                span.style.animation = 'none';
                span.offsetHeight;
                span.style.animation = `fadeUp 0.6s ease ${i * 0.1}s forwards`;
            });

            pSpan.forEach((span, i) => {
                span.style.animation = 'none';
                span.offsetHeight;
                span.style.animation = `fadeUp 0.6s ease ${(i + h1Span.length) * 0.05}s forwards`;
            });
        }

        if (destination.anchor === 'SKILL') {
            animateCircle('skill-html', 80, '#e44d26');
            animateCircle('skill-css', 80, '#264de4');
            animateCircle('skill-js', 70, '#f7df1e');
            animateCircle('skill-react', 50, '#61DBFB');
            animateCircle('skill-ps', 50, '#31a8ff');
            animateCircle('skill-ai', 50, '#ff9a00');
            animateCircle('skill-figma', 70, '#a259ff');
=======
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
>>>>>>> 9f128699fb36964ac6eebce5fea1f5d500630d6f
        }
    }
});

// mini-project를 popup창 띄우기
// $('.d1').colorbox({ rel: 'gal' });
<<<<<<< HEAD
// $('.d1').colorbox({ iframe: true, innerWidth: 1240, innerHeight: 422 });
// $('.d2').colorbox({ iframe: true, innerWidth: 1840, innerHeight: 800 });
// $('.d3').colorbox({ iframe: true, innerWidth: 1075, innerHeight: 881 });
// $('.d4').colorbox({ iframe: true, innerWidth: 548, innerHeight: 573 });
// $('.d5').colorbox({ iframe: true, innerWidth: 1062, innerHeight: 796 });
// $('.d6').colorbox({ iframe: true, innerWidth: 582, innerHeight: 834 });
// $('.d7').colorbox({ iframe: true, innerWidth: 1393, innerHeight: 407 });

// skills 그래프로 출력
function animateCircle(canvasId, targetPercent, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !canvas.getContext) return;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 40;
    const lineWidth = 10;
    let currentPercent = 0;

    function draw(percent) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 배경 원
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#ddd';
        ctx.lineWidth = lineWidth;
        ctx.stroke();

        // 진행 원
        const startAngle = -0.5 * Math.PI;
        const endAngle = startAngle + (percent / 100) * 2 * Math.PI;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();

        // 텍스트
        ctx.fillStyle = '#333';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${Math.round(percent)}%`, centerX, centerY);
    }

    function animate() {
        draw(currentPercent);
        if (currentPercent < targetPercent) {
            currentPercent += 1;
            requestAnimationFrame(animate);
        }
    }
    animate();
}

document.addEventListener('DOMContentLoaded', () => {
    animateCircle('skill-html', 80, '#e44d26');       // HTML
    animateCircle('skill-css', 80, '#264de4');        // CSS
    animateCircle('skill-js', 70, '#f7df1e');         // JS
    animateCircle('skill-react', 40, '#61DBFB');      // React
    animateCircle('skill-ps', 50, '#31a8ff');         // Photoshop
    animateCircle('skill-ai', 50, '#ff9a00');         // Illustrator
    animateCircle('skill-figma', 70, '#a259ff');      // Figma
});
=======
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
>>>>>>> 9f128699fb36964ac6eebce5fea1f5d500630d6f
