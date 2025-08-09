document.querySelector('#translation').addEventListener('change', (e) => {
    // alert('test');

    const selectedLang = e.target.value;

    if (selectedLang === 'ko') {
        alert('한국어로 변경합니다.');
    } else if (selectedLang === 'en') {
        alert('switching to English.');
    }

    const textData = {
        ko: {
            greeting: "아이디와 비밀번호 입력을 통해 로그인 하세요.",
        },
        en: {
            greeting: "Log in using your ID and password.",
        }
    };

    document.querySelector('.logo p').textContent = textData[selectedLang].greeting;
});

document.querySelector('#user_login').addEventListener('click', () => {
    const userId = document.querySelector('#userId').value;
    const userPw = document.querySelector('#userPw').value;

    if (userId === '') {
        alert('아이디를 입력해주세요.');
        return;
    } else if (userPw === '') {
        alert('비밀번호를 입력해주세요.');
        return;
    }
    alert(`${userId}님 로그인 되었습니다.`);
    localStorage.setItem('isLoggedIn', 'true');
    location.href = 'index.html';
});