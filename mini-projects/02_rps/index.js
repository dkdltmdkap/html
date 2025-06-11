let user = null;

let computer = ['가위', '바위', '보'];
let computer_random = computer[parseInt(Math.random() * 3)];
console.log('computer_random : ' + computer_random);

let buttons = document.querySelectorAll('.btn');
console.log('buttons : ', buttons);

let resultBtn = document.querySelector('#resultBtn');
let resetBtn = document.querySelector('#resetBtn');

buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        // alert('클릭');
        user = button.innerText;
        console.log('user : ', user);
    });
});

// 결과보기 버튼
resultBtn.addEventListener('click',()=>{
    if (!['가위', '바위', '보'].includes(user)) {
        alert('가위 바위 보 중 하나를 눌러주세요.');
        return;
    }
    let msg = `<p>사용자 : ${user}</p> <p>컴퓨터 : ${computer_random}</p>`;
    
    if (user == computer_random) {
        msg += '<p>비겼음</p>';
    } else if (
        (user == '가위' && computer_random == '바위') ||
        (user == '바위' && computer_random == '보') ||
        (user == '보' && computer_random == '가위')
    ) {
        msg += '<p>패배</p>';
    } else {
        msg += '<p>승리</p>';
    }
    console.log('msg : ', msg);
    
    document.querySelector('h1:nth-child(1)').style.display = 'none';
    document.querySelector('h1:nth-child(2)').style.display = 'block';
    document.querySelector('.wrap').style.margin = '30px auto';
    document.querySelector('#scissors').style.display = "none";
    document.querySelector('#rock').style.display = "none";
    document.querySelector('#beam').style.display = "none";
    resultBtn.style.display = 'none';
    resetBtn.style.display = 'block';
    document.querySelector('.result').innerHTML = msg;
});
// 다시하기 버튼
resetBtn.addEventListener('click',()=>{
    user = null;
    computer_random = computer[parseInt(Math.random() * 3)];
    document.querySelector('h1:nth-child(1)').style.display = 'block';
    document.querySelector('h1:nth-child(2)').style.display = 'none';
    document.querySelector('.wrap .btn').style.display = 'flex';
    document.querySelector('#scissors').style.display = "block";
    document.querySelector('#rock').style.display = "block";
    document.querySelector('#beam').style.display = "block";
    resultBtn.style.display = 'block';
    resetBtn.style.display = 'none';
    document.querySelector('.result').innerHTML = '';
});