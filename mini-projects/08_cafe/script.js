const cart = new Map();

document.querySelectorAll('aside > div').forEach(item => {
    item.addEventListener('click', () => {
        const name = item.dataset.name;
        const price = parseInt(item.dataset.price);
        console.log(`name : ${name}, price : ${price}`);

        addToCart(name, price);
    });
});

function addToCart(name, price) {
    if (cart.has(name)) {
        cart.set(name, {
            price,
            quantity: cart.get(name).quantity + 1
        });
    } else {
        cart.set(name, { price, quantity: 1 });
    }
    renderCart();
}

function addFromCart(name) {
    if (cart.has(name)) {
        const current = cart.get(name);
        console.log(`current : ${current}`);

        cart.set(name, {
            price: current.price,
            quantity: current.quantity + 1
        });
        renderCart();
    };
};

function removeFromCart(name) {
    if (cart.has(name)) {
        const current = cart.get(name);
        console.log(`current : ${current}`);

        if (current.quantity > 1) {
            cart.set(name, {
                price: current.price,
                quantity: current.quantity - 1
            });
        } else {
            console.log(`current : ${current}`);
            cart.delete(name);
        };
        renderCart();
    };
};

function renderCart() {
    const cartList = document.getElementById('cart');
    const totalBox = document.getElementById('total');

    cartList.innerHTML = '';
    total = 0;

    cart.forEach((item, name) => {
        const li = document.createElement('li');
        const itemTotal = item.price * item.quantity;
        console.log(`itemTotal : ${itemTotal}`);

        li.innerHTML = `${name} : ${item.quantity}개 = ${itemTotal.toLocaleString()}원
        <button class='plus'>+</button>
        <button class='minus'>-</button>
        <button class='delete'>삭제</button>`;

        li.querySelector('.plus').addEventListener('click', () => addFromCart(name));
        li.querySelector('.minus').addEventListener('click', () => removeFromCart(name));
        li.querySelector('.delete').addEventListener('click', () => {
            cart.delete(name);
            renderCart();
        });
        cartList.appendChild(li);

        total += itemTotal;
    });
    totalBox.textContent = `총 합계 : ${total.toLocaleString()}원`;
};