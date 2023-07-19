
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

const whyScraptel=[
    {
        id: "1",
        name : "Weight Accuracy",
        imgSrc :"/images/icons/balance.png",
        matter :"Our weighing instruments undergo regular calibration and verification processes to maintain their accuracy and reliability.",
        hiddenMatter :"Our commitment to weight accuracy extends to providing consistent and reliable measurements.",
    },
    {
        id: "2",
        name : "Efficient Communication",
        imgSrc :"/images/icons/conversation.png",
        matter :"We prioritize clear and timely communication with our clients. Our Communication will be at trained level. Our commitment ",
        hiddenMatter :"to open communication ensures that our clients feel valued and engaged throughout the collaboration.",
    },
    {
        id: "3",
        name : "Long-term Vision",
        imgSrc :"/images/icons/telescope.png",
        matter :"Our services are designed with a long-term perspective in mind. We strive to contribute to our clients' sustained growth and ",
        hiddenMatter :"success, fostering a partnership that extends beyond immediate projects to create a lasting impact.",
    },
    {
        id: "4",
        name : "Customer Support",
        imgSrc :"/images/icons/customer-service.png",
        matter :"Our dedicated customer support team is always ready to assist clients with any concerns or issues they may have. We are co",
        hiddenMatter :"mitted to providing prompt and helpful support, ensuring a seamless experience and complete satisfaction.",
    },
    {
        id: "5",
        name : "Continuous Improvement",
        imgSrc :"/images/icons/growth.png",
        matter :"We constantly seek opportunities for improvement to enhance the value we provide to our clients. Through ongoing evaluation, fe",
        hiddenMatter :"edback, and adaptation, we ensure that our services remain relevant and effective in an ever-evolving business landscape.",
    },
    {
        id: "6",
        name : "Tailored Solutions",
        imgSrc :"/images/icons/bulb.png",
        matter :"We understand that each client is unique, and we strive to provide customized services that align with their specific needs an ",
        hiddenMatter :" goals. Our team works closely with clients to develop tailored solutions that address their business challenges effectively.",
    },

]

const howSimpleIsIt = [
    {
        id: "1",
        name: "Step-1",
        imgSrc :"/images/icons/link.png",
        matter:"Connect with Us Effortlessly.",
    },
    {
        id: "2",
        name: "Step-2",
        imgSrc :"/images/icons/deal.png",
        matter:"Making the Perfect Deal Simplified.",
    },
    {
        id: "3",
        name: "Step-3",
        imgSrc :"/images/icons/truck.png",
        matter:"Sell Your Scrap with Ease.",
    },

]

const abouts = [
    {
        id: "1",
        name: "commodi itaque et! Tenetur.",
        matter:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. A at nobis neque facere, iste namnesciunt velit ex consequatur explicabo et labore vel saepe est adipisci, praesentium repudiandae eum ipsam qui ducimus illum iure deserunt. Neque necessitatibus sint autem consectetur ",
    },
    {
        id: "2",
        name: "commodi itaque et! Tenetur.",
        matter:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. A at nobis neque facere, iste namnesciunt velit ex consequatur explicabo et labore vel saepe est adipisci, praesentium repudiandae eum ipsam qui ducimus illum iure deserunt. Neque necessitatibus sint autem consectetur ",
    },
    {
        id: "3",
        name: "commodi itaque et! Tenetur.",
        matter:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. A at nobis neque facere, iste namnesciunt velit ex consequatur explicabo et labore vel saepe est adipisci, praesentium repudiandae eum ipsam qui ducimus illum iure deserunt. Neque necessitatibus sint autem consectetur ",
    },

]