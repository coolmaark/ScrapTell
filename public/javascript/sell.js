let itemAdded = [];
start();

// Start Function
function start() {
    addEvents();
}
// Add Events
function addEvents() {
    let cartRemove_btns = document.querySelectorAll(".cart-remove");
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


// Update Function
function update() {
    addEvents();
    updateTotal();
}




// Handle Event Functions

function handle_addCartItem() {
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSrc = this.parentElement.parentElement.querySelector(".product-img").src;
    // console.log(title,price);

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
    let cartBoxElement = CartBoxComponent(title, price,imgSrc);
    
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
    // let totalItemsInCartEl = document.querySelector(".total-items-in-cart");
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-price");
    let total = 0;
    // let totalItems=0;
    cartBoxes.forEach((cartBoxes) => {
        let priceElement = cartBoxes.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("Rs.", ""));
        let quantity = cartBoxes.querySelector(".cart-quantity").value;
        total += price * quantity;
        // totalItems +=1;
    });
    
    // 2 decimal points
    total = total.toFixed(2);

    totalElement.innerHTML = "Rs." + total;
    // totalItemsInCartEl.innerHTML = totalItems;
}

// HTML Component

function CartBoxComponent(title, price,imgSrc) {
    return `
    <div class="cart-box">
        <img src="${imgSrc}" alt=""  class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
                <input type="number" value="1" class="cart-quantity">
            </div>
            <i class="bi bi-trash-fill cart-remove"></i>
        </div>`;

}


// adding products to sell page
const productElement = document.querySelector(".product-row");
function renderProducts() {
    products.forEach((product) => {
        const id = product.id;
        productElement.innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6 py-3" style="display:flex; justify-content:center;align-items:center;">
                <div class="card cat-items">
                    <img src="${product.imgSrc}" alt="${product.name}" class="product-img">
                    <div class="cart-body">
                        <h3 class="product-title">${product.name}</h3>
                    </div>
                    <button class="basket" onclick="openCategory('${product.id}')">Categories</button>
                </div>
            </div>
        `
    });
}
renderProducts();


// pop up for categories and rendering
function openCategory(id) {
    document.body.classList.add("active-popup");
    // document.getElementsByClassName("active-popup").style.zIndex=2;
    // document.getElementsByClassName("popup").style.zIndex=1;
    // document.addEventListener("click",()=>{
    //     popup.classList.add("active");
    // });
    const categoryElement = document.querySelector(".category-row");
    categoryElement.innerHTML = "";
    for (let item of categories[id]) {
        function renderCategory() {
                categoryElement.innerHTML += `
                    <div class="col-lg-3 col-md-4 col-sm-6 py-3 "style="display:flex; justify-content:center;align-items:center;">
                        <div class="card cat-items">
                            <img src="${item.imgSrc}" alt="${item.name}" class="product-img">
                            <div class="card-body">
                                <h4 class="product-title">${item.name}</h4>
                                <h3 class="product-price">${item.price}</h3> 
                                <button class="add-to-cart basket" onclick="start()">Sell Us
                                    <i class="bi bi-cart-plus-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
            renderCategory();
    }
}


$(".close-btn").click(function() {
    document.body.classList.remove("active-popup");
});

//Closing the pop up when clicked outside of pop up
window.onclick = (event) => {
    if(!event.target.matches(".open-cat")) {
        if(document.body.classList.contains("active-popup")) {
            document.body.classList.remove("active-popup");
            }
    }
}
document.body.addEventListener("click", event => event.stopPropagation());
