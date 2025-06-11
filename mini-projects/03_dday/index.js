// 상단바 시간
var nowTime = new Date();
var hours = nowTime.getHours();
var minutes = nowTime.getMinutes();
// console.log(hours, minutes);
if (minutes >= 9) {
    document.querySelector('.top_bar li').innerHTML = `${hours + '&nbsp;:&nbsp;' + minutes}`;
} else if (minutes < 10) {
    document.querySelector('.top_bar li').innerHTML = `${hours + '&nbsp;:&nbsp;' + '0' + minutes}`;
}

// 현재 날짜
var nowDate = new Date();
var nowYear = nowDate.getFullYear();
var nowMonth = nowDate.getMonth() + 1;
var nowDay = nowDate.getDate();

if (nowDate.getMonth() >= 9) {
    document.querySelector('.test h4').innerHTML = `${nowYear}년 ${nowMonth}월 ${nowDay}일`;
} else if (nowDate.getMonth() < 10) {
    document.querySelector('.test h4').innerHTML = `${nowYear}년 0${nowMonth}월 ${nowDay}일`;
}

// 연애를 시작한 날짜 클릭하면 출력하기
document.querySelector('#btn').addEventListener('click', () => {
    var date = document.querySelector('#date').value;
    console.log('date : ' + date);

    // 연애 시작한 날짜
    var startDate = new Date(date);
    console.log('startDate : ' + startDate);

    // html로 출력한뒤 날짜 입력칸과 버튼은 안보이도록
    document.querySelector('h3').innerHTML = `${date}일 부터 연애중`;
    document.querySelector('#date').style.display = 'none';
    document.querySelector('#btn').style.display = 'none';

    // 현재 날짜 - 연애 시작한 날짜
    var diff = nowDate - startDate;
    // 밀리초를 일(day)로 변경
    var days = Math.floor(diff / ((1000 * 60 * 60 * 24)));
    console.log('days : ' + days);
    document.querySelector('h1').innerHTML = `연애한지 ${days}일 째❤️`;
    document.querySelector('h1').style.flex = 'flex';
});

// 플레이리스트 추가, 수정, 기타 아이콘 선택의 경우
var menuList = document.querySelector('.menuList');
var playlist = document.querySelector('.playlist_menu');
var edit = document.querySelector('.edit_menu');
var etc = document.querySelector('.etc_menu');

// 메뉴바를 누르면 메뉴 리스트들이 출력
document.querySelector('#menu img').addEventListener('click', () => {
    if (menuList.style.display == 'none') {
        menuList.style.display = 'flex';
        playlist.style.display = 'none';
        edit.style.display = 'none';
        etc.style.display = 'none';
    } else if (menuList.style.display = 'flex') {
        menuList.style.display = 'none';
    }
});

document.querySelector('.play img').addEventListener('click', () => {

    if (playlist.style.display == 'none') {
        playlist.style.display = 'flex';
        edit.style.display = 'none';
        etc.style.display = 'none';
        menuList.style.display = 'none';
    } else if (playlist.style.display = 'flex') {
        playlist.style.display = 'none';
    }
});
document.querySelector('.edit img').addEventListener('click', () => {

    if (edit.style.display == 'none') {
        edit.style.display = 'block';
        playlist.style.display = 'none';
        etc.style.display = 'none';
        menuList.style.display = 'none';
    } else if (edit.style.display = 'flex') {
        edit.style.display = 'none';
    }
});
document.querySelector('.etc img').addEventListener('click', () => {

    if (etc.style.display == 'none') {
        etc.style.display = 'flex';
        playlist.style.display = 'none';
        edit.style.display = 'none';
        menuList.style.display = 'none';
    } else if (etc.style.display = 'flex') {
        etc.style.display = 'none';
    }
});