// var kor = Number(prompt('국어 점수는?'));
// var eng = Number(prompt('영어 점수는?'));
// var math = Number(prompt('수학 점수는?'));
// console.log(`점수 : ${kor}, ${eng}, ${math}`);

let count = 1;

document.querySelector('#save').addEventListener('click', ()=>{
    const korInput = document.querySelector('#kor');
    const engInput = document.querySelector('#eng');
    const mathInput = document.querySelector('#math');

    let kor = korInput.value;
    let eng = engInput.value;
    let math = mathInput.value;
    // console.log(typeof kor, typeof eng, typeof math);
    // console.log(`국어 점수 : ${kor}, 영어 점수 : ${eng}, 수학 점수 : ${math}`);

    if (kor === '' || eng === '' || math === '') {
        alert('점수를 입력하세요.');
        return;
    }

    kor = Number(kor);
    eng = Number(eng);
    math = Number(math);
    console.log(typeof kor, typeof eng, typeof math);

    var total = (kor + eng + math);
    var avg = (total / 3).toFixed(2);
    // console.log(`총점 : ${total}, 평균 : ${avg}`);
    
    function grade(avg) {
        if (avg >= 90) {
            return '수';
        } else if (avg >= 80) {
            return '우';
        } else if (avg >= 70) {
            return '미';
        } else if (avg >= 60) {
            return '양';
        } else if (avg >= 50) {
            return '가';
        } else {
            return '가 이하'; // 혹시라도 평균이 50 미만이면 이걸 추가해줘
        }
    }

    console.log('학점 : ' + grade(avg));

    if ((0<=kor && kor<=100) && (0<=eng && eng<=100) && (0<= math && math<=100)) {
        console.log(`국어 점수 : ${kor}, 영어 점수 : ${eng}, 수학 점수 : ${math}`);

        // var str = `<ul>
        //             <li>순번</li>
        //             <li>국어</li>
        //             <li>영어</li>
        //             <li>수학</li>
        //             <li>총점</li>
        //             <li>평균</li>
        //         </ul>`;

        // str += `<ul><li>${count}</li><li>${kor}</li> <li>${eng}</li> <li>${math}</li> <li>${total}</li> <li>${avg}</li></ul>`;
        // document.querySelector('main').innerHTML = str;
        
        // ul 생성
        var newUl = document.createElement('ul');
        
        // 문서의 main에 ul을 추가
        document.querySelector('main').appendChild(newUl);

        const data = [count++, kor, eng, math, total, avg, grade(avg)];
        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            newUl.appendChild(li);
        });

        // input 초기화
        korInput.value = '';
        engInput.value = '';
        mathInput.value = '';

        // 국어 input에 포커스 이동
        korInput.focus();
    }
    else {
        alert('0점 ~ 100점까지만 입력 가능합니다.');
        return;
    }
});