document.querySelector('#leftBtn').addEventListener('click', () => {
    var clickLeftMove = document.querySelector('#leftMove').value;
    console.log('clickLeftMove : ' + clickLeftMove);

    var fishLeftMove = Number(clickLeftMove);
    console.log('fishLeftMove : ' + fishLeftMove);

    var fixedLeftFish = document.querySelector('.wrap img');
    fixedLeftFish.style.left = '50px';
    fixedLeftFish.style.transition = 'none';
    console.log('fixedLeftFish : ' + fixedLeftFish);

    const newLeft = Math.min(50 + fishLeftMove, 750);
    setTimeout(() => {
        fixedLeftFish.style.transition = 'all 1s';
        fixedLeftFish.style.left = `${newLeft}px`;
        if (50 + fishLeftMove > 800) {
            alert('최대 750까지 이동할 수 있습니다.');
        }
        document.querySelector('.moves #leftMove ').value = '';
    }, 0);
});

document.querySelector('#topBtn').addEventListener('click', () => {
    var clickTopMove = document.querySelector('#topMove').value;
    console.log('clickTopMove : ' + clickTopMove);

    var fishTopMove = Number(clickTopMove);
    console.log('fishTopMove : ' + fishTopMove);

    var fixedTopFish = document.querySelector('.wrap img');
    fixedTopFish.style.bottom = '50px';
    fixedTopFish.style.transition = 'none';
    console.log('fixedTopFish : ' + fixedTopFish);

    const newTop = Math.min(50 + fishTopMove, 500);
    setTimeout(() => {
        fixedTopFish.style.transition = 'all 1s';
        fixedTopFish.style.bottom = `${newTop}px`;
        if (50 + fishTopMove > 550) {
            alert('최대 500까지 이동할 수 있습니다.');
        }
        document.querySelector('.moves #topMove ').value = '';
    }, 0);
});

document.querySelector('#btn2').addEventListener('click', () => {
    document.querySelector('.wrap img').style.transition = 'all 1s';
    document.querySelector('.wrap img').style.left = '750px';
});

document.querySelector('#btn3').addEventListener('click', () => {
    document.querySelector('.wrap img').style.transition = 'all 1s';
    document.querySelector('.wrap img').style.left = '50px';
    document.querySelector('.wrap img').style.top = '477px';
});

var posX = 10;
var posY = 80;
var fish = document.querySelector('.wrap img');
document.querySelector('.arr p:nth-child(1)').addEventListener('click', () => {
    if (posY < 10) {
        fish.style.top = '0';
    } else {
        posY -= 5;
        fish.style.top = posY + '%';
    }
});
document.querySelector('.arr p:nth-child(2)').addEventListener('click', () => {
    if (70 < posY) {
        fish.style.top = '477px';
    } else {
        posY += 5;
        fish.style.top = posY + '%';
    }
});
document.querySelector('.arr p:nth-child(3)').addEventListener('click', () => {
    if (posX < 10) {
        fish.style.left = '50px';
    } else {
        posX -= 5;
        fish.style.left = posX + '%';
    }
});
document.querySelector('.arr p:nth-child(4)').addEventListener('click', () => {
    if (70 < posX) {
        fish.style.left = '730px';
    } else {
        posX += 5;
        fish.style.left = posX + '%';
    }
});