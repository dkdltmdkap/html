new fullpage('#fullpage', {
    licenseKey: 'gplv3-license',
    autoScrolling: true,
    scrollHorizontally: true
});

document.addEventListener("DOMContentLoaded", () => {
    /* -----------------------------
        1) HOME: 글자 span으로 감싸기
        - 공백(space) 문자는 &nbsp;로 대체해서 렌더링 보장
        - 각 span에 data-delay 저장
       ----------------------------- */
    function wrapChars(element) {
        const text = element.textContent || '';
        element.textContent = ''; // 기존 텍스트 제거
        const frag = document.createDocumentFragment();
        [...text].forEach((ch, i) => {
            const span = document.createElement('span');
            // 공백은 유지(HTML에서 연속 공백이 깨지므로 non-breaking space로 처리)
            if (ch === ' ') span.innerHTML = '&nbsp;';
            else span.textContent = ch;
            span.dataset.delay = (i * 0.09).toString(); // 재시작시 사용할 delay
            span.style.display = 'inline-block';
            frag.appendChild(span);
        });
        element.appendChild(frag);
    }

    const title = document.getElementById('home-title');
    const subtitle = document.getElementById('home-subtitle');
    wrapChars(title);
    wrapChars(subtitle);

    /* -----------------------------
        2) HOME: '완전 재시작' 함수
        - clone 교체 + requestAnimationFrame + setTimeout으로 안전하게 재시작
       ----------------------------- */
    function restartHomeAnimation() {
        // clone 모든 span (이로써 애니메이션 타임라인 초기화)
        const homeSpans = document.querySelectorAll('.HOME span');
        homeSpans.forEach(old => {
            const clone = old.cloneNode(true);
            // 클론은 inline style 없으므로 애니메이션 재설정 용이
            old.replaceWith(clone);
        });

        // 다음 프레임에서 애니메이션 inline 설정 (딜레이 유지)
        requestAnimationFrame(() => {
            // 작은 타임아웃을 주면 브라우저가 확실히 새 타임라인을 적용
            setTimeout(() => {
                document.querySelectorAll('.HOME span').forEach(s => {
                    const d = Number(s.dataset.delay) || 0;
                    // inline animation 설정: bounce 0.8s, 딜레이, 무한 반복
                    s.style.animation = `bounce 0.8s ease ${d}s infinite`;
                    s.style.animationFillMode = 'both';
                    s.style.willChange = 'transform';
                });
            }, 10);
        });
    }

    function stopHomeAnimation() {
        // 애니메이션 일시정지 (reset 시 재시작 용이)
        document.querySelectorAll('.HOME span').forEach(s => {
            // 일시정지보다 아예 animation을 제거하고 opacity/transform 유지시키려면 사용 가능
            s.style.animation = 'none';
        });
    }

    // 처음 로드 시 실행
    restartHomeAnimation();

    /* -----------------------------
        3) IntersectionObserver: HOME 및 ABOUTME 감시
        - HOME: 화면에 들어오면 restart, 나가면 stop
        - ABOUTME: .show 토글
       ----------------------------- */
    const homeSection = document.querySelector('.HOME');
    const aboutSection = document.querySelector('.ABOUTME');

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const el = entry.target;
            if (el === homeSection) {
                if (entry.isIntersecting) {
                    restartHomeAnimation(); // 재진입할 때마다 처음부터 다시 실행
                } else {
                    stopHomeAnimation();
                }
            } else if (el === aboutSection) {
                if (entry.isIntersecting) aboutSection.classList.add('show');
                else aboutSection.classList.remove('show');
            }
        });
    }, { threshold: 0.4 });

    io.observe(homeSection);
    io.observe(aboutSection);

    // WORK IntersectionObserver
    const work = document.querySelector('.WORK');
    const workObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                work.classList.add('show');
            } else {
                work.classList.remove('show'); // 스크롤 벗어나면 다시 초기화
            }
        });
    }, { threshold: 0.3 });

    workObserver.observe(work);
});


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

const skills = [
    { id: "skill-html", percent: 90, color: "#E34F26" },
    { id: "skill-css", percent: 80, color: "#264DE4" },
    { id: "skill-js", percent: 70, color: "#F0DB4F" },
    { id: "skill-react", percent: 60, color: "#61DBFB" },
    { id: "skill-ps", percent: 85, color: "#31A8FF" },
    { id: "skill-ai", percent: 75, color: "#FF9A00" },
    { id: "skill-figma", percent: 70, color: "#F24E1E" }
];

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
            currentPercent++;
            requestAnimationFrame(animate);
        }
    }

    animate();
}

// IntersectionObserver로 SKILL 재진입 시 애니메이션 반복
const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skills.forEach(skill => animateCircle(skill.id, skill.percent, skill.color));
        }
    });
}, { threshold: 0.5 });

const granphSection = document.querySelector(".SKILL .granph");
if (granphSection) skillObserver.observe(granphSection);


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
