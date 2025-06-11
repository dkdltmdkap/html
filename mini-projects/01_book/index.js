var bookImg; // 상품이미지
        var featured; // 강력추천
        var bookTitles, hardcover, copy; // 제목, 양장, 복사
        var author, date; // 저자, 날짜
        var price, discount, pointImg, point; // 가격, 할인, 포인트 이미지, 포인트
        var sales, review, star, star_num, starSlide; // 판매지수, 회원리뷰, 별점, 별점 숫자, 화살표
        var orders; // 주문 도착예정일
        var tag1, tag2, tag3, tag4, tag5;
        var used_items, ebook; // 중고상품, eBook

        bookImg = 'img/pic.png';

        featured = '강력추천';

        bookTitles = '[도서] <span>어린 왕자</span>';
        hardcover = '[ 양장 ]';
        copy = 'img/duplication.png';

        author = '앙투안 드 생텍쥐페리 <span>저/</span>황현산 <span>역</span>';
        date = '2015년 10월';

        price = '<span>10,620</span>원';
        discount = '(10% 할인)';
        pointImg = 'img/point_img.png';
        point = '590원';

        sales = '판매지수 84,969';
        review = '회원리뷰(153건)';
        star = 'img/star.png';
        star_num = '9.4';
        starSlide = 'img/drop-down.png';

        orders = '&nbsp;내일(6/14, 화)&nbsp;';

        tag1 = '#tvN비밀독서단추천도서';
        tag2 = '#안사면0원사면영원';
        tag3 = '#같이펀딩에나온책';
        tag4 = '20세기고전';
        tag5 = '책읽아웃';

        used_items = '57개';
        ebook = '6,300원';

document.querySelector('#bookImg').src = bookImg;
document.querySelector('.featured').innerHTML = featured;
document.querySelector('.bookTitles').innerHTML = bookTitles;
document.querySelector('.hardcover').innerHTML = hardcover;
document.querySelector('#copyImg').src = copy;
document.querySelector('.author').innerHTML = author;
document.querySelector('.date').innerHTML = date;
document.querySelector('.price').innerHTML = price;
document.querySelector('.discount').innerHTML = discount;
document.querySelector('#pointImg').src = pointImg;
document.querySelector('.point').innerHTML = point;
document.querySelector('.sales').innerHTML = sales;
document.querySelector('.review').innerHTML = review;
var star = document.querySelector('.star');
for (let i=0; i<5; i++) {
        let starImg = document.createElement('img');
        star.classList.add('starImg');
        star.appendChild(starImg);
        starImg.src = 'img/star.png';
}
console.log(star);
document.querySelector('.star_num').innerHTML = star_num;
document.querySelector('#starSlide').src = starSlide;
document.querySelector('.orders').innerHTML = orders;
document.querySelector('.tag1').innerHTML = tag1;
document.querySelector('.tag2').innerHTML = tag2;
document.querySelector('.tag3').innerHTML = tag3;
document.querySelector('.tag4').innerHTML = tag4;
document.querySelector('.tag5').innerHTML = tag5;
document.querySelector('#used_items').innerHTML = used_items;
document.querySelector('#ebook').innerHTML = ebook;