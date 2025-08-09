let popup_open = document.querySelector('.menu_bar_img img');
let popup_close = document.querySelector('.popup_close img');
let nav_list = document.querySelector('.nav_list');

popup_open.addEventListener('click', () => {
    popup_open.style.display = 'none';
    nav_list.style.display = 'block';
    popup_close.style.display = 'block';
});

popup_close.addEventListener('click', () => {
    popup_open.style.display = 'block';
    nav_list.style.display = 'none';
    popup_close.style.display = 'none';
});


document.querySelector('.dd').addEventListener('click', () => {
    const sub = document.querySelector('.dd .sub');

    if (sub.style.display === 'none' || sub.style.display === '') {
        sub.style.display = 'block';
    } else {
        sub.style.display = 'none';
    }
});

document.querySelector('.brand').addEventListener('click', () => {
    const sub = document.querySelector('.brand .sub');

    if (sub.style.display === 'none' || sub.style.display === '') {
        sub.style.display = 'block';
    } else {
        sub.style.display = 'none';
    }
});

document.querySelector('.store_bar').addEventListener('click', () => {
    const sub = document.querySelector('.store_bar .sub');

    if (sub.style.display === 'none' || sub.style.display === '') {
        sub.style.display = 'block';
    } else {
        sub.style.display = 'none';
    }
});

document.querySelector('.menu_bar').addEventListener('click', () => {
    const sub = document.querySelector('.menu_bar .sub');

    if (sub.style.display === 'none' || sub.style.display === '') {
        sub.style.display = 'block';
    } else {
        sub.style.display = 'none';
    }
});

document.querySelector('.nutrition_bar').addEventListener('click', () => {
    const sub = document.querySelector('.nutrition_bar .sub');

    if (sub.style.display === 'none' || sub.style.display === '') {
        sub.style.display = 'block';
    } else {
        sub.style.display = 'none';
    }
});

document.querySelector('.event_bar').addEventListener('click', () => {
    const sub = document.querySelector('.event_bar .sub');

    if (sub.style.display === 'none' || sub.style.display === '') {
        sub.style.display = 'block';
    } else {
        sub.style.display = 'none';
    }
});

document.querySelector('.online_bar').addEventListener('click', () => {
    const sub = document.querySelector('.online_bar .sub');

    if (sub.style.display === 'none' || sub.style.display === '') {
        sub.style.display = 'block';
    } else {
        sub.style.display = 'none';
    }
});