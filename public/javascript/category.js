
const products = [
    {
        id: "Copper",
        name: "Copper",
        price: 40,
        imgSrc: "/images/sellImg/copper1.png",
    },
    {
        id: "Aluminium",
        name: "Aluminium",
        price: 90,
        imgSrc: "/images/sellImg/Aluminium0.png",
    },
    {
        id: "Fridges",
        name: "Fridges",
        price: 70,
        imgSrc: "/images/sellImg/Fridge0.png",
    },
    {
        id: "Brass",
        name: "Brass",
        price: 700,
        imgSrc: "/images/sellImg/Brass0.png",
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
        id: "Phones",
        name: "Phones",
        price: 30,
        imgSrc: "/images/Smart Phones.png",
    },

]


// const categories = {
//     coppers:[

//         {
//             id: "Copper1",
//             name: "Copper abc",
//             price: 50,
//             imgSrc: "/images/sellImg/copper1.png",
//         },
//         {
//             id: "Copper2",
//             name: "Copper ban",
//             price: 80,
//             imgSrc: "/images/sellImg/copper2.png",
//         },
//         {
//             id: "Copper3",
//             name: "Copper jar",
//             price: 30,
//             imgSrc: "/images/sellImg/copper3.png",
//         },
//         {
//             id: "Copper4",
//             name: "Copper car",
//             price: 30,
//             imgSrc: "/images/sellImg/copper4.png",
//         }
//     ],
//     aluminium:[

//         {
//             id: "alu1",
//             name: "Aluminium abc",
//             price: 50,
//             imgSrc: "/images/sellImg/aluminium0.png",
//         },
//         {
//             id: "alu2",
//             name: "Aluminium ban",
//             price: 80,
//             imgSrc: "/images/sellImg/aluminium0.png",
//         },
//         {
//             id: "alu3",
//             name: "Aluminium jar",
//             price: 30,
//             imgSrc: "/images/sellImg/aluminium0.png",
//         },
//         {
//             id: "alu4",
//             name: "Aluminium car",
//             price: 30,
//             imgSrc: "/images/sellImg/aluminium0.png",
//         }
//     ]
        
// };

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