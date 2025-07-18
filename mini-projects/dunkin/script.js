let current = 0;
const slide = document.querySelector('.main_slide ul');
const total = document.querySelectorAll('.main_slide ul li').length;
const dots = document.querySelectorAll('.dot');

function updateSlide(index) {
    slide.style.transform = `translateX(-${index * 100}%)`;

    // 모든 dot에서 active 제거
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// 자동 슬라이드
setInterval(() => {
    current = (current + 1) % total;
    updateSlide(current);
}, 3000);

// dot 클릭 시 이동
dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        current = idx;
        updateSlide(current);
    });
});


const img_slide = document.querySelector('.img_slide ul');
let slideWidth = img_slide.scrollWidth; // 실제 컨텐츠 가로 크기
let containerWidth = img_slide.parentElement.offsetWidth; // 보이는 영역 가로 크기

let maxTranslateX = slideWidth - containerWidth; // 최대 이동 거리 (음수)

let currentTranslateX = 0;
let lastMouseX = null;

img_slide.parentElement.addEventListener('mousemove', (e) => {
    if (lastMouseX === null) {
        lastMouseX = e.clientX;
        return;
    }

    let deltaX = e.clientX - lastMouseX;
    lastMouseX = e.clientX;

    // 마우스 오른쪽으로 이동하면 deltaX > 0, 슬라이드는 왼쪽으로 이동(음수 방향)
    // 마우스 왼쪽으로 이동하면 deltaX < 0, 슬라이드는 오른쪽으로 이동(양수 방향)
    currentTranslateX -= deltaX; // 방향 반대

    // 범위 제한
    if (currentTranslateX < 0) currentTranslateX = 0;
    if (currentTranslateX > maxTranslateX) currentTranslateX = maxTranslateX;

    img_slide.style.transform = `translateX(-${currentTranslateX}px)`;
});

// 마우스가 슬라이드 영역을 벗어나면 위치 초기화 (필요 시)
img_slide.parentElement.addEventListener('mouseleave', () => {
    lastMouseX = null;
});

