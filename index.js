// 페이지 조정
$('#fullpage').fullpage({
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
        }
    }
});

// mini-project를 popup창 띄우기
// $('.d1').colorbox({ rel: 'gal' });
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


// 포트폴리오 페이지 넘기기
const miniProjectUl = document.querySelector('.miniProject_list'); // 슬라이드 대상
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        miniProjectUl.style.transform = `translateX(-${100 * currentIndex}vw)`;
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < 1) {
        currentIndex++;
        miniProjectUl.style.transform = `translateX(-${100 * currentIndex}vw)`;
    }
});
