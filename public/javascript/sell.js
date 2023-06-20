// if (document.readyState == "loading") {
//     document.addEventListener("DOMContentLoaded", start);
// } else {
    start();
// }



// Start Function
function start() {
    addEvents();

}


// Update Function
function update() {
    addEvents();
    updateTotal();
}

// Add Events
function addEvents() {
            let cartRemove_btns = document.querySelectorAll(".cart-remove");
        console.log(cartRemove_btns);
            cartRemove_btns.forEach((btn) => {
                btn.addEventListener("click", handle_removeCartItem);
            });
            
            // Change Quantity of item
            let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
            cartQuantity_inputs.forEach(input => {
                input.addEventListener("change", handle_changeItemQuantity);
            });
            
            // Adding Items to Cart
            let addCart_btns = document.querySelectorAll(".basket");
            addCart_btns.forEach(btn => {
                btn.addEventListener("click", handle_addCartItem);
            });
}


// Handle Event Functions
let itemAdded = [];
function handle_addCartItem() {
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSrc = product.querySelector(".product-img").src;
    // console.log(title,price,imgSrc);

    let newToAdd = {
        title,
        price,
        imgSrc,
    };
     
    // Handling item already exist
    if(itemAdded.find(el => el.title == newToAdd.title)) {
        alert(title + " already Exist in the cart");
        return;
    }else {
        itemAdded.push(newToAdd);
    }

    // Add Product to Cart
    let cartBoxElement = CartBoxComponent(title, price, imgSrc);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);

    update();
}

function handle_removeCartItem() {
    this.parentElement.remove();
    itemAdded = itemAdded.filter(el=> el.title != this.parentElement.querySelector('.cart-product-title').innerHTML);

    update();
}

function handle_changeItemQuantity() {
    if(isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    this.value = Math.floor(this.value);
    update();
}

// Update & Render
function updateTotal() {
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-price");
    let total = 0;
    cartBoxes.forEach((cartBoxes) => {
        let priceElement = cartBoxes.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("Rs.", ""));
        let quantity = cartBoxes.querySelector(".cart-quantity").value;
        total += price * quantity;
    });
    
    // 2 decimal points
    total = total.toFixed(2);

    totalElement.innerHTML = "Rs." + total;
}

// HTML Component

function CartBoxComponent(title, price, imgSrc) {
    return `
    <div class="cart-box">
        <img src=${imgSrc} alt=""  class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
                <input type="number" value="1" class="cart-quantity">
            </div>
            <i class="bi bi-trash-fill cart-remove"></i>
        </div>`;

}


// pop up for categories


$(".open-cat").click(function() {
    document.body.classList.add("active-popup");
});

$(".close-btn").click(function() {
        document.body.classList.remove("active-popup");
});




// Sell Button Clicked

// let noOfCards = document.querySelectorAll(".pro").length;
// function openCart() {
//     const sysCartId = document.querySelector("#cart-icon");
//     for(let i=0; i<noOfCards; ++i) {
//         document.querySelectorAll(".open-cart")[i].addEventListener("click", ()=> {
//             sysCartId.classList.add("active");
//         });
//     }
// }

// Card Click

// for(let i=0; i<noOfCards; ++i) {
//     let imgSrc = document.querySelectorAll(".pro")[i];
//     imgSrc.addEventListener("click", function() {
//         window.location.href = "../html/product.html";
//     });
// }

// sending data to cart page

// for(let i=0; i<noOfCards; ++i) {
//     let img = document.querySelectorAll(".cart")[i];
//     img.addEventListener("click",function() {
    //         let imgUrl = document.querySelectorAll(".pro")[i].childNodes[1].src;
    //         let title = document.querySelectorAll(".pro")[i].childNodes[3].childNodes[0].nextElementSibling.innerHTML;
    //         let price = document.querySelectorAll(".pro")[i].childNodes[3].childNodes[2].nextElementSibling.innerHTML;
        
//         localStorage.setItem("imgUrl", imgUrl);
//         localStorage.setItem("title", title);
//         localStorage.setItem("price", price);
//     });
// }