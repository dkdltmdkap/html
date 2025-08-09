// document.querySelector('#logOut').addEventListener('click', (e) => {
//     const isLoggedIn = localStorage.getItem('isLoggedIn');

//     if (isLoggedIn === 'true') {
//         e.preventDefault();
//         if (confirm('로그아웃 하시겠습니까?')) {
//             localStorage.removeItem('isLoggedIn');
//             alert('로그아웃 되었습니다.');
//             location.href = 'index.html';
//         }
//     } else if (isLoggedIn === 'false') {
//         e.preventDefault();
//         confirm('로그인 하시겠습니까?')
//         location.href = 'login.html';
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const logOut = document.querySelector('#logOut');

    if (logOut) {
        logOut.addEventListener('click', (e) => {
            const isLoggedIn = localStorage.getItem('isLoggedIn');

            if (isLoggedIn === 'true') {
                e.preventDefault();
                if (confirm('로그아웃 하시겠습니까?')) {
                    localStorage.removeItem('isLoggedIn');
                    alert('로그아웃 되었습니다.');
                    location.href = 'index.html';
                }
            } else {
                // 로그인 안된 상태
                e.preventDefault();
                location.href = 'login.html';
            }
        });
    }
});