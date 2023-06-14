
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', function () {
        nav.classList.add("active");
    });
}

const close = document.getElementById('close');
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove("active");
    });
}

// Cart

const cartIcon = document.querySelector("#cart-icon");
const mobileCartIcon = document.querySelector("#mobile-cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
    cart.classList.add("active");
});

mobileCartIcon.addEventListener("click", () => {
    cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cart.classList.remove("active");
});


// Location in Cart
    const hidden = document.querySelector(".deliver");

    let want = knowLocation();
    let newLocation = document.createElement("div");
    newLocation.innerHTML = want;

    const radioId1 = document.querySelector("#want-transport");
    const radioId2 = document.querySelector("#no-transport");

    let delivery = hidden.querySelector(".hidden-location1");
    radioId1.addEventListener("click", ()=> {
        delivery.appendChild(newLocation);
    });

    radioId2.addEventListener("click", ()=> {
        delivery.appendChild(newLocation).remove();
    });




function knowLocation() {
    return `
    <div class="location">
        <i class="bi bi-geo-alt"></i>
        <label for="loc"><a href="address.html">Enter your area pin code</a></label>
    </div>
    <div class="quantity-label-input">
        <input class="qty" type="number" placeholder="ex:500018">
        <button type="submit">Apply</button>
    </div>`;
}


const parentContainer = document.querySelector('.read-more-container');
parentContainer.addEventListener("click", event => {
    const current = event.target;
    const isReadMoreBtn = current.className.includes('read-more-btn');
    if (!isReadMoreBtn)
        return;
    const currentText = event.target.parentNode.querySelector('.read-more-text');
    currentText.classList.toggle('read-more-text--show');
    current.textContent = current.textContent.includes('Read More') ?
        "Read Less" : "Read More...";
});


