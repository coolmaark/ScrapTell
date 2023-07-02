
const products = [
    {
        id: "Coppers",
        name: "Copper",
        price: 50,
        imgSrc: "/images/sellImg/copper0.png",
    },
    {
        id: "Brass",
        name: "Brass",
        price: 700,
        imgSrc: "/images/sellImg/Brass0.png",
    },
    {
        id: "Aluminium",
        name: "Aluminium",
        price: 90,
        imgSrc: "/images/sellImg/aluminium0.png",
    },
    {
        id: "Circuit",
        name: "Circuit",
        price: 80,
        imgSrc: "/images/sellImg/circuit0.png",
    },
    {
        id: "Wire",
        name: "Wire",
        price: 30,
        imgSrc: "/images/sellImg/wire0.png",
    },
    {
        id: "Fridges",
        name: "Fridges",
        price: 70,
        imgSrc: "/images/sellImg/Fridge0.png",
    },
    {
        id: "Batteries",
        name: "Batteries",
        price: 700,
        imgSrc: "/images/sellImg/Battery0.png",
    },
    {
        id: "Paper",
        name: "Paper",
        price: 50,
        imgSrc: "/images/sellImg/book0.png",
    },
    {
        id: "Phones",
        name: "Phones",
        price: 30,
        imgSrc: "/images/Smart Phones.png",
    },

]


const categories = {
    Coppers:[

        {
            id: "Copper1",
            name: "Copper abc",
            price: 50,
            imgSrc: "/images/sellImg/copper0.png",
        },
        {
            id: "Copper2",
            name: "Copper ban",
            price: 80,
            imgSrc: "/images/sellImg/copper1.png",
        },
        {
            id: "Copper3",
            name: "Copper jar",
            price: 30,
            imgSrc: "/images/sellImg/copper2.png",
        },
        {
            id: "Copper4",
            name: "Copper car",
            price: 30,
            imgSrc: "/images/sellImg/copper4.png",
        },
        
    ],
    Brass:[

        {
            id: "br1",
            name: "Brass abc",
            price: 50,
            imgSrc: "/images/sellImg/Brass1.png",
        },
        {
            id: "br2",
            name: "Brass ban",
            price: 80,
            imgSrc: "/images/sellImg/Brass2.png",
        },
        {
            id: "br3",
            name: "Brass jar",
            price: 30,
            imgSrc: "/images/sellImg/Brass3.png",
        },
        {
            id: "br4",
            name: "Brass car",
            price: 30,
            imgSrc: "/images/sellImg/Brass4.png",
        }
    ],
    Aluminium:[

        {
            id: "alu1",
            name: "Aluminium abc",
            price: 50,
            imgSrc: "/images/sellImg/aluminium1.png",
        },
        {
            id: "alu2",
            name: "Aluminium ban",
            price: 80,
            imgSrc: "/images/sellImg/aluminium2.png",
        },
        {
            id: "alu3",
            name: "Aluminium jar",
            price: 30,
            imgSrc: "/images/sellImg/aluminium3.png",
        },
        {
            id: "alu4",
            name: "Aluminium car",
            price: 30,
            imgSrc: "/images/sellImg/aluminium4.png",
        }
    ],
    Circuit:[

        {
            id: "cir1",
            name: "Circuit abc",
            price: 50,
            imgSrc: "/images/sellImg/circuit1.png",
        },
        {
            id: "cir2",
            name: "Circuit ban",
            price: 80,
            imgSrc: "/images/sellImg/circuit2.png",
        },
        {
            id: "cir3",
            name: "Circuit jar",
            price: 30,
            imgSrc: "/images/sellImg/circuit3.png",
        },
        {
            id: "cir4",
            name: "Circuit car",
            price: 30,
            imgSrc: "/images/sellImg/circuit4.png",
        }
    ],
    Wire:[

        {
            id: "wire1",
            name: "Wire abc",
            price: 50,
            imgSrc: "/images/sellImg/wire1.png",
        },
        {
            id: "wire2",
            name: "Wire ban",
            price: 80,
            imgSrc: "/images/sellImg/wire2.png",
        },
        {
            id: "wire3",
            name: "Wire jar",
            price: 30,
            imgSrc: "/images/sellImg/wire3.png",
        },
        {
            id: "wire4",
            name: "Wire car",
            price: 30,
            imgSrc: "/images/sellImg/wire4.png",
        },
    ],
    Fridges:[

        {
            id: "fridges1",
            name: "Fridges abc",
            price: 50,
            imgSrc: "/images/sellImg/fridge0.png",
        },
        {
            id: "fridges2",
            name: "Fridges ban",
            price: 80,
            imgSrc: "/images/sellImg/fridge1.png",
        },
        {
            id: "fridges3",
            name: "Fridges jar",
            price: 30,
            imgSrc: "/images/sellImg/fridge0.png",
        },
        {
            id: "fridges4",
            name: "Fridges car",
            price: 30,
            imgSrc: "/images/sellImg/fridge1.png",
        },
    ],
    Batteries:[

        {
            id: "batteries1",
            name: "Batteries abc",
            price: 50,
            imgSrc: "/images/sellImg/battery1.png",
        },
        {
            id: "batteries2",
            name: "Batteries ban",
            price: 80,
            imgSrc: "/images/sellImg/battery2.png",
        },
        {
            id: "batteries3",
            name: "Batteries jar",
            price: 30,
            imgSrc: "/images/sellImg/battery3.png",
        },
        {
            id: "batteries4",
            name: "Batteries car",
            price: 30,
            imgSrc: "/images/sellImg/battery4.png",
        },
    ],
    Paper:[

        {
            id: "paper1",
            name: "Paper abc",
            price: 50,
            imgSrc: "/images/sellImg/battery1.png",
        },
        {
            id: "paper2",
            name: "Paper ban",
            price: 80,
            imgSrc: "/images/sellImg/battery2.png",
        },
        {
            id: "paper3",
            name: "Paper jar",
            price: 30,
            imgSrc: "/images/sellImg/battery3.png",
        },
        {
            id: "paper4",
            name: "Paper car",
            price: 30,
            imgSrc: "/images/sellImg/battery4.png",
        },
    ],
    Phones:[

        {
            id: "phones1",
            name: "Phones abc",
            price: 50,
            imgSrc: "/images/sellImg/battery1.png",
        },
        {
            id: "phones2",
            name: "Phones ban",
            price: 80,
            imgSrc: "/images/sellImg/battery2.png",
        },
        {
            id: "phones3",
            name: "Phones jar",
            price: 30,
            imgSrc: "/images/sellImg/battery3.png",
        },
        {
            id: "phones4",
            name: "Phones car",
            price: 30,
            imgSrc: "/images/sellImg/battery4.png",
        },
    ],  
};

// for (let copper of categories.coppers) {
//     const categoryElement = document.querySelector(".category-grp");
//     function renderCategory() {
//             // console.log(category.imgSrc);
//             categoryElement.innerHTML += `
//                 <div class="col-md-6 col-lg-3 py-3">
//                 <div class="card why-scraptel-card">
//                     <img src="${copper.imgSrc}" class="why-scraptel-icon" alt="...">
//                     <div class="card-body read-more-container">
//                         <h4 class="card-title">${copper.name}</h4>
//                         <h3 class="card-price">${copper.price}</h3>

//                     </div>
//                 </div>

//                 </div>
//             `
//     }
//     renderCategory();
// }