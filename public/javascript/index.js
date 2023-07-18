
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const parentContainer = document.querySelector('.read-more-container');
const howItWorks = document.querySelector('.how-simple-is-it');
const ourStoryDes= document.querySelector('.our-story-des');
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
function windowOpenMaps(){
    window.open("https://goo.gl/maps/9bLLLCHm5iwstz297");
}
function windowOpenWA(){
    window.open("https://wa.me/+918142031786")
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
    const seeproductElement = document.querySelector(".owl-carousel");
    function seeProducts() {
        products.forEach((product) => {
            const id = product.id;
            seeproductElement.innerHTML += `
            <div class="item">
                <div class="card card-tel">
                    <div class="card-body" id="plan">
                        <img src="${product.imgSrc}" alt="" height="200px">
                        <hr>
                        <h3>${product.name}</h3>
                        <button onclick="windowOpen()">Categories</button>
                    </div>
                </div>
            </div>
            `
        });
    }
    seeProducts();
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
function windowOpen(){
    window.open("/Sell","_self");
}

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
    function readMore(){
        whyScraptel.forEach((wst) => {
            const id = wst.id;
            parentContainer.innerHTML += `
            <div class="col-md-6 col-lg-4 py-3 ">
                    <div class="card why-scraptel-card">
                        <img src="${wst.imgSrc}" class="why-scraptel-icon" alt="...">
                        <div class="card-body">
                            <h4 class="card-title">${wst.name}</h4>
                            <p class="card-text">${wst.matter}<span class="read-more-text">${wst.hiddenMatter}</span></p>
                            <span class="read-more-btn">Read More...</span>
                        </div>
                    </div>
                </div>
            `
        });
    }
    readMore();
    function howSimple(){
        howSimpleIsIt.forEach((howSimpleIs) => {
            const id = howSimpleIs.id;
            howItWorks.innerHTML += `
                <div class="col-sm-12 col-md-4 py-3">
                    <div class="card why-scraptel-card">
                        <div class="card-body">
                            <h4 class="card-title">${howSimpleIs.name}</h4>
                            <img src="${howSimpleIs.imgSrc}" width="100%" class="how-simple-is-it-icon" alt="...">
                            <p class="card-text">${howSimpleIs.matter}</p>
                        </div>
                    </div>
            </div>
            `
        });
    }
    howSimple();

function ourStory(){
    ourStoryDes.innerHTML +=`
    <p>At <b>SCRAPTEL </b>, our passion for sustainability led us to become scrap buyers with a
        purpose.
        With utmost
        politeness and professionalism, we set out on a journey to transform scrap into valuable
        resources.
    </p>

<p> Driven by our commitment to environmental stewardship, we saw an opportunity to make a
    difference.
    By
    removing wastage and unlocking the hidden potential of scrap, we create sustainable
    solutions
    that
    benefit
    both our partners and the planet.</p>

<p class="our-story-p"> Through transparent and respectful relationships, we have built a reputation for
    trust and
    reliability. Our
    team's expertise and innovative mindset enable us to optimize resources and minimize
    environmental
    impact,
    shaping a greener future. </p>

<p class="our-story-p"> Join us in our story as we continue to reshape sustainability through the power
    of scrap.
    Together,
    we can
    create a brighter and more sustainable world, one scrap at a time.</p>
    `
}
ourStory();
