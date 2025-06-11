var front_coin = document.querySelector('#front_coin');
var back_coin = document.querySelector('#back_coin');
var front = document.querySelector('#front');
var back = document.querySelector('#back');
var start_btn = document.querySelector('#start_btn');
var replay_btn = document.querySelector('#replay_btn');
var result_txt = document.querySelector('.result h2');
var userChoice = null;

front.addEventListener('click', ()=>{
    // alert('앞을 누르셨습니다!');
    userChoice = 0;
    front.style.width = '84px';
    front.style.height = '84px';
    front.style.backgroundColor = 'black';
    front.style.color = 'white';
    back.style.width = '80px';
    back.style.height = '80px';
    back.style.backgroundColor = 'lightgray';
    back.style.color = 'black';
    result_txt.innerHTML = '앞';
    console.log('앞 : ' + userChoice);
});
back.addEventListener('click', ()=>{
    // alert('뒤를 누르셨습니다!');
    userChoice = 1;
    back.style.width = '84px';
    back.style.height = '84px';
    back.style.backgroundColor = 'black';
    back.style.color = 'white';
    front.style.width = '80px';
    front.style.height = '80px';
    front.style.backgroundColor = 'lightgray';
    front.style.color = 'black';
    result_txt.innerHTML = '뒤';
    console.log('뒤 : ' + userChoice);
});

start_btn.addEventListener('click', ()=>{
    // alert('게임 시작');
    console.log('userChoice : ' + userChoice);

    if (userChoice == null) {
            alert('버튼을 눌러주세요!');
            return;
    }

    front_coin.classList.add('spin');
    back_coin.classList.add('spin');

    setTimeout(()=>{
        var result = Math.floor(Math.random()*2);
        console.log('result : ' + result);
        front_coin.classList.remove('spin');
        back_coin.classList.remove('spin');
        switch(result) {
            case 0:
                // alert('앞');
                front_coin.style.display = 'block';
                back_coin.style.display = 'none';
                break;
            case 1:
                // alert('뒤');
                front_coin.style.display = 'none';
                back_coin.style.display = 'block';
                break;
        }
        replay_btn.style.display = 'block';
        start_btn.style.display = 'none';
        // 삼항 연산자 사용
        if (userChoice == result) {
            result_txt.innerHTML = (result == 0? '앞' : '뒤') + '<br>맞추셨습니다!';
        } else {
            result_txt.innerHTML = (result == 0? '앞' : '뒤') + '<br>틀리셨습니다';
        }
        console.log('userChoice : ' + userChoice);
    }, 100);
});
replay_btn.addEventListener('click', ()=>{
    // alert('다시하기');
    
    replay_btn.style.display = 'none';
    start_btn.style.display = 'block';
    result_txt.innerHTML = '';
    userChoice = null;
    front.style.width = '80px';
    front.style.height = '80px';
    front.style.backgroundColor = 'lightgray';
    front.style.color = 'black';
    back.style.width = '80px';
    back.style.height = '80px';
    back.style.backgroundColor = 'lightgray';
    back.style.color = 'black';
});