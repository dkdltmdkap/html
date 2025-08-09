const input_a1 = document.querySelector('#a_01 input');
const input_a2 = document.querySelector('#a_02 input');
const total_a = document.querySelector('#total_a p');

function calculateTotal_a() {
    const val_a1 = parseInt(input_a1.value) || 0; // 빈 값일 경우 0 처리
    const val_a2 = parseInt(input_a2.value) || 0;

    const result_a = val_a1 * val_a2;
    total_a.textContent = result_a.toLocaleString(); // 천 단위 콤마 출력
}

// input이 바뀔 때마다 계산 실행
input_a1.addEventListener('input', calculateTotal_a);
input_a2.addEventListener('input', calculateTotal_a);

// 초기값도 계산해 반영
calculateTotal_a();


const input_b1 = document.querySelector('#b_01 input');
const input_b2 = document.querySelector('#b_02 input');
const total_b = document.querySelector('#total_b p');

function calculateTotal_b() {
    const val_b1 = parseInt(input_b1.value) || 0; // 빈 값일 경우 0 처리
    const val_b2 = parseInt(input_b2.value) || 0;

    const result_b = val_b1 * val_b2;
    total_b.textContent = result_b.toLocaleString(); // 천 단위 콤마 출력
}

// input이 바뀔 때마다 계산 실행
input_b1.addEventListener('input', calculateTotal_b);
input_b2.addEventListener('input', calculateTotal_b);

// 초기값도 계산해 반영
calculateTotal_b();


const input_c1 = document.querySelector('#c_01 input');
const input_c2 = document.querySelector('#c_02 input');
const total_c = document.querySelector('#total_c p');

function calculateTotal_c() {
    const val_c1 = parseInt(input_c1.value) || 0; // 빈 값일 경우 0 처리
    const val_c2 = parseInt(input_c2.value) || 0;

    const result_c = val_c1 * val_c2;
    total_c.textContent = result_c.toLocaleString(); // 천 단위 콤마 출력
}

// input이 바뀔 때마다 계산 실행
input_c1.addEventListener('input', calculateTotal_c);
input_c2.addEventListener('input', calculateTotal_c);

// 초기값도 계산해 반영
calculateTotal_c();


const input_d1 = document.querySelector('#d_01 input');
const input_d2 = document.querySelector('#d_02 input');
const total_d = document.querySelector('#total_d p');

function calculateTotal_d() {
    const val_d1 = parseInt(input_d1.value) || 0; // 빈 값일 경우 0 처리
    const val_d2 = parseInt(input_d2.value) || 0;

    const result_d = val_d1 * val_d2;
    total_d.textContent = result_d.toLocaleString(); // 천 단위 콤마 출력
}

// input이 바뀔 때마다 계산 실행
input_d1.addEventListener('input', calculateTotal_d);
input_d2.addEventListener('input', calculateTotal_d);

// 초기값도 계산해 반영
calculateTotal_d();


const input_e1 = document.querySelector('#e_01 input');
const input_e2 = document.querySelector('#e_02 input');
const total_e = document.querySelector('#total_e p');

function calculateTotal_e() {
    const val_e1 = parseInt(input_e1.value) || 0; // 빈 값일 경우 0 처리
    const val_e2 = parseInt(input_e2.value) || 0;

    const result_d = val_e1 * val_e2;
    total_e.textContent = result_d.toLocaleString(); // 천 단위 콤마 출력
}

// input이 바뀔 때마다 계산 실행
input_e1.addEventListener('input', calculateTotal_e);
input_e2.addEventListener('input', calculateTotal_e);

// 초기값도 계산해 반영
calculateTotal_e();


const input_f1 = document.querySelector('#f_01 input');
const input_f2 = document.querySelector('#f_02 input');
const total_f = document.querySelector('#total_f p');

function calculateTotal_f() {
    const val_f1 = parseInt(input_f1.value) || 0; // 빈 값일 경우 0 처리
    const val_f2 = parseInt(input_f2.value) || 0;

    const result_f = val_f1 * val_f2;
    total_f.textContent = result_f.toLocaleString(); // 천 단위 콤마 출력
}

// input이 바뀔 때마다 계산 실행
input_f1.addEventListener('input', calculateTotal_f);
input_f2.addEventListener('input', calculateTotal_f);

// 초기값도 계산해 반영
calculateTotal_f();





document.getElementById("click").addEventListener("click", function () {
    const getInputValue = (selector) => {
        const input = document.querySelector(selector);
        return parseInt(input.value || input.placeholder || 0);
    };

    const volumeA = getInputValue('#a_02 input');
    const volumeB = getInputValue('#b_02 input');
    const volumeC = getInputValue('#c_02 input');
    const volumeD = getInputValue('#d_02 input');
    const volumeE = getInputValue('#e_02 input');
    const volumeF = getInputValue('#f_02 input');
    // console.log(volumeA);

    const salesVolumes = [volumeA, volumeB, volumeC, volumeD, volumeE, volumeF];

    const totalA = parseInt(document.querySelector('#total_a p').textContent.replace(/,/g, '')) || 0;
    const totalB = parseInt(document.querySelector('#total_b p').textContent.replace(/,/g, '')) || 0;
    const totalC = parseInt(document.querySelector('#total_c p').textContent.replace(/,/g, '')) || 0;
    const totalD = parseInt(document.querySelector('#total_d p').textContent.replace(/,/g, '')) || 0;
    const totalE = parseInt(document.querySelector('#total_e p').textContent.replace(/,/g, '')) || 0;
    const totalF = parseInt(document.querySelector('#total_f p').textContent.replace(/,/g, '')) || 0;

    const totalSales = [totalA, totalB, totalC, totalD, totalE, totalF];

    const ctx = document.getElementById('salesChart').getContext('2d');

    if (window.salesChartInstance) {
        window.salesChartInstance.destroy();
    }

    // 최댓값 계산
    const maxVolume = 1600;
    const maxTotalSales = 25000000;

    // 여유 공간 주기 위해 max 값 약간 키움
    const adjustedMaxVolume = Math.ceil(maxVolume);
    const adjustedMaxSales = Math.ceil(maxTotalSales);


    window.salesChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['A', 'B', 'C', 'D', 'E', 'F'],
            datasets: [
                {
                    label: '판매량',
                    data: salesVolumes,
                    type: 'line',
                    backgroundColor: 'transparent',
                    borderColor: '#f97316',
                    borderWidth: 2,
                    pointBackgroundColor: '#f97316',
                    tension: 0.4,
                    yAxisID: 'y-left',
                    order: 1,
                },
                {
                    label: '총판매액',
                    data: totalSales,
                    backgroundColor: '#4c898a',
                    barThickness: 30,
                    yAxisID: 'y-right',
                    order: 2,
                },
            ],
        },
        options: {
            responsive: false,
            plugins: {
                title: {
                    display: true,
                    text: '상품별 매출 현황'
                },
                legend: {
                    position: 'left',
                    align: 'start'
                },
                tooltip: {
                    enabled: false
                },
            },
            scales: {
                'y-left': {
                    position: 'left',
                    beginAtZero: true,
                    max: adjustedMaxVolume,
                    grid: {
                        drawOnChartArea: false
                    }
                },
                'y-right': {
                    position: 'right',
                    beginAtZero: true,
                    max: adjustedMaxSales,
                    grid: {
                        drawOnChartArea: false
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawOnChartArea: false,
                        drawTicks: false,
                        drawBorder: false
                    }
                }
            }
        }
    });
});



// 리셋 버튼
document.getElementById("reset").addEventListener("click", function () {
    // 1. 초기 값 설정
    const initialValues = [1253, 1004, 987, 1352, 726, 876];

    // 2. input에 초기 값 다시 세팅
    const selectors = ['#a_02 input', '#b_02 input', '#c_02 input', '#d_02 input', '#e_02 input', '#f_02 input'];
    selectors.forEach((selector, index) => {
        document.querySelector(selector).value = initialValues[index];
    });

    // 3. total 값도 다시 세팅
    const pricePerUnit = [15000, 16000, 17500, 15500, 16500, 17000];
    initialValues.forEach((quantity, i) => {
        const total = quantity * pricePerUnit[i];
        const formatted = total.toLocaleString();
        document.querySelector(`#total_${String.fromCharCode(97 + i)} p`).textContent = formatted;
    });

    // 4. 그래프 다시 그리기 (기존 클릭 이벤트 호출)
    document.getElementById("click").click();
});
