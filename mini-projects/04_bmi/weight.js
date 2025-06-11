document.querySelector('#btn').addEventListener('click', ()=>{
    let name = document.querySelector('#name').value;
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    console.log('name : ' + name+ ' / height : ' + height + ' / weight : ' + weight);

    if (name == '') {
        alert('이름을 입력해주세요');
        document.querySelector('#name').focus();
        return;
    } else if (height == '') {
        alert('키를 입력해주세요.');
        document.querySelector('#height').focus();
        return;
    } else if (weight == '') {
        alert('몸무게를 입력해주세요.');
        document.querySelector('#weight').focus();
        return;
    }

    var normal_weight = (height - 100) * 0.9;
    console.log('정상 체중 : ' + normal_weight);

    var plus_weight;
    var minus_weight;
    if (normal_weight < weight) {
        // 체중이 초과일 때
        plus_weight = (normal_weight - weight);
        console.log('초과 체중 : ' + (-plus_weight));
    } else if (normal_weight > weight) {
        // 체중 미만일 때
        minus_weight = (weight - normal_weight);
        console.log('체중 미만 : ' + minus_weight);
    }

    var plusOrMinus = (normal_weight < weight) ? `초과체중 ${-plus_weight}kg` : `체중미만 ${-minus_weight}kg`;
    console.log(plusOrMinus);

    var texture = document.querySelector('.texture_form');
    texture.innerHTML = `${name}님의 키는 ${height}이고, 몸무게는 ${weight}이므로 <br> 결과는? <br> ${plusOrMinus}`;

    document.querySelector('#btn').style.display = 'none';
    document.querySelector('#replay').style.display = 'block';
});

document.querySelector('#replay').addEventListener('click', ()=>{
    document.querySelector('#name').value = '';
    document.querySelector('#height').value = '';
    document.querySelector('#weight').value = '';

    var texture = document.querySelector('.texture_form');
    texture.innerHTML = '';

    document.querySelector('#btn').style.display = 'block';
    document.querySelector('#replay').style.display = 'none';
});