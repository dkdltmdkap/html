// 스크롤될 때 header에 클래스 추가/제거
window.addEventListener("scroll", () => {
    const search = document.querySelector("main .search");
    const search_etc = document.querySelector("main section .search_etc");
    const input = search.querySelector("input[type='search']");

    if (window.scrollY > 190) {
        search.classList.add("scrolled");
        search.style.border = "none";
        search.style.borderRadius = "0";
        search_etc.classList.add("scrolled");
        search_etc.style.width = "100%";
        search_etc.style.display = "flex";
        input.style.width = "100%";
        input.style.border = "none";
        input.style.borderRadius = "0"; // 사각형으로
    } else {
        search.classList.remove("scrolled");
        search.style.border = "1px solid green";
        search.style.borderRadius = "30px";
        search_etc.classList.remove("scrolled");
        search_etc.style.display = "none";
        input.style.width = "100%";
        input.style.border = "none";
        input.style.borderRadius = "0"; // 사각형으로
    }
});

// dd9f7bebb8b23c6b6f89f9ad9afd1459

// 페이지가 로드되자마자 날씨 호출
const API_KEY = "dd9f7bebb8b23c6b6f89f9ad9afd1459";
const city = "Seoul";

// 등급에 따른 텍스트
function getDustGrade(value) {
    if (value <= 30) return '좋음';
    else if (value <= 80) return '보통';
    else return '나쁨';
}

// 등급에 따른 색상 반환
function getDustColor(grade) {
    switch (grade) {
        case '좋음': return 'rgb(101, 167, 247)';
        case '보통': return 'orange';
        case '나쁨': return 'red';
        default: return 'gray';
    }
}

// 날씨 + 미세먼지 통합 호출
function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`)
        .then(res => res.json())
        .then(data => {
            const temp = data.main.temp;
            const weather = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            document.querySelector("#weatherIcon").src = iconUrl;
            document.querySelector("#weatherText").textContent = `${temp}° ${weather}`;

            const lat = data.coord.lat;
            const lon = data.coord.lon;

            return fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        })
        .then(res => res.json())
        .then(data => {
            const pm10 = data.list[0].components.pm10;
            const pm25 = data.list[0].components.pm2_5;

            const pm10Grade = getDustGrade(pm10);
            const pm25Grade = getDustGrade(pm25);

            const pm10Color = getDustColor(pm10Grade);
            const pm25Color = getDustColor(pm25Grade);

            document.querySelector("#airText").innerHTML =
                `미세: <span style="color:${pm10Color}">${pm10Grade}</span> 초미세: <span style="color:${pm25Color}">${pm25Grade}</span>`;
        })
        .catch(err => {
            console.error("날씨 또는 미세먼지 정보 불러오기 실패", err);
            document.querySelector("#weatherText").textContent = "날씨 불러오기 실패";
            document.querySelector("#airText").textContent = "공기질 불러오기 실패";
        });
}

// 호출
getWeather(city);
