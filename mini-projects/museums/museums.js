document.querySelector('.notices_title h1').addEventListener('click', () => {
    // alert('알림');

    document.querySelector('.notices ul').style.display = 'block';
    document.querySelector('.notices_title h1').style.borderBottom = '4px solid #000';
    document.querySelector('.notices_date').style.display = 'block';

    document.querySelector('.announcements ul').style.display = 'none';
    document.querySelector('.announcements_title h1').style.borderBottom = 'none';
    document.querySelector('.announcements_date').style.display = 'none';

    document.querySelector('.carrers ul').style.display = 'none';
    document.querySelector('.careers_title h1').style.borderBottom = 'none';
    document.querySelector('.carrers_date').style.display = 'none';

    document.querySelector('.pressreleases ul').style.display = 'none';
    document.querySelector('.pressreleases_title h1').style.borderBottom = 'none';
    document.querySelector('.pressreleases_date').style.display = 'none';
});

document.querySelector('.announcements_title h1').addEventListener('click', () => {
    // alert('고시/공고');

    document.querySelector('.notices ul').style.display = 'none';
    document.querySelector('.notices_title h1').style.borderBottom = 'none';
    document.querySelector('.notices_date').style.display = 'none';

    document.querySelector('.announcements ul').style.display = 'block';
    document.querySelector('.announcements_title h1').style.borderBottom = '4px solid #000';
    document.querySelector('.announcements_date').style.display = 'block';

    document.querySelector('.carrers ul').style.display = 'none';
    document.querySelector('.careers_title h1').style.borderBottom = 'none';
    document.querySelector('.carrers_date').style.display = 'none';

    document.querySelector('.pressreleases ul').style.display = 'none';
    document.querySelector('.pressreleases_title h1').style.borderBottom = 'none';
    document.querySelector('.pressreleases_date').style.display = 'none';
});

document.querySelector('.careers_title h1').addEventListener('click', () => {
    // alert('채용 안내');

    document.querySelector('.notices ul').style.display = 'none';
    document.querySelector('.notices_title h1').style.borderBottom = 'none';
    document.querySelector('.notices_date').style.display = 'none';

    document.querySelector('.announcements ul').style.display = 'none';
    document.querySelector('.announcements_title h1').style.borderBottom = 'none';
    document.querySelector('.announcements_date').style.display = 'none';

    document.querySelector('.carrers ul').style.display = 'block';
    document.querySelector('.careers_title h1').style.borderBottom = '4px solid #000';
    document.querySelector('.carrers_date').style.display = 'block';

    document.querySelector('.pressreleases ul').style.display = 'none';
    document.querySelector('.pressreleases_title h1').style.borderBottom = 'none';
    document.querySelector('.pressreleases_date').style.display = 'none';
});

document.querySelector('.pressreleases_title h1').addEventListener('click', () => {
    // alert('보도자료');

    document.querySelector('.notices ul').style.display = 'none';
    document.querySelector('.notices_title h1').style.borderBottom = 'none';
    document.querySelector('.notices_date').style.display = 'none';

    document.querySelector('.announcements ul').style.display = 'none';
    document.querySelector('.announcements_title h1').style.borderBottom = 'none';
    document.querySelector('.announcements_date').style.display = 'none';

    document.querySelector('.carrers ul').style.display = 'none';
    document.querySelector('.careers_title h1').style.borderBottom = 'none';
    document.querySelector('.carrers_date').style.display = 'none';

    document.querySelector('.pressreleases ul').style.display = 'block';
    document.querySelector('.pressreleases_title h1').style.borderBottom = '4px solid #000';
    document.querySelector('.pressreleases_date').style.display = 'block';
});

// ---------------------------------------------------------

const slideUl = document.querySelector('.slide ul');
const slideItems = document.querySelectorAll('.slide li');
const imgWidth = 1250; // 이미지 1장의 너비
let index = 0;

// 복제 슬라이드 추가 (무한 슬라이드를 위해 첫 이미지 복제)
const clone = slideItems[0].cloneNode(true);
slideUl.appendChild(clone);
console.log('clone : ', clone);

setInterval(() => {
    index++;
    slideUl.style.transform = `translateX(-${imgWidth * index}px)`;

    // 마지막(복제된 슬라이드)까지 도달하면
    if (index === slideItems.length) {
        // 1초 기다린 후 위치 초기화
        setTimeout(() => {
            slideUl.style.transition = 'none';
            slideUl.style.transform = 'translateX(0)';
            index = 0;

            // 다음 이동을 위해 다시 transition 적용
            setTimeout(() => {
                slideUl.style.transition = 'transform 0.8s ease-in-out';
            }, 20);
        }, 1000); // 멈추는 시간
    }
}, 3000); // 한 장당 총 시간 (이동 + 정지)

// ---------------------------------------------------------

const slide = document.querySelector(".showcase_slide ul");
const items = document.querySelectorAll(".showcase_slide li");
const prevBtn = document.querySelector("#left");
const nextBtn = document.querySelector("#right");
const toggleBtn = document.querySelector("#go");

const visibleCount = 4;
const totalCount = items.length;
const itemWidth = items[0].offsetWidth;

let currentIndex = 0;
let autoPlay = true;
let interval = null;

function updateSlide() {
    slide.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
}

function showNext() {
    if (currentIndex + visibleCount < totalCount) {
        currentIndex += visibleCount;
    } else {
        currentIndex = 0;
    }
    updateSlide();
}

function showPrev() {
    if (currentIndex - visibleCount >= 0) {
        currentIndex -= visibleCount;
    } else {
        currentIndex = totalCount - visibleCount;
    }
    updateSlide();
}

function startAutoSlide() {
    interval = setInterval(showNext, 5000);
    autoPlay = true;
}

function stopAutoSlide() {
    clearInterval(interval);
    autoPlay = false;
}

toggleBtn.addEventListener("click", () => {
    autoPlay ? stopAutoSlide() : startAutoSlide();
});

prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

window.addEventListener("load", () => {
    updateSlide();
    startAutoSlide();
});

// ---------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    new fullpage('#fullpage', {
        autoScrolling: true,
        fitToSection: false,
        scrollingSpeed: 1000,
        scrollOverflow: false,
        touchSensitivity: 15,
        keyboardScrolling: true,
        animateAnchor: false,
        anchors: ['slide1', 'slide2', 'slide3', 'slide4'],
        onLeave: function (origin, destination, direction) {
            console.log(`Leaving ${origin.anchor} to ${destination.anchor}`);
        }
    });
});
