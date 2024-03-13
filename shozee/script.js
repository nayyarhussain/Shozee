let blankHmtl = "";

const cardItem = document.querySelector(".card-item");

let products = [
  {
    img: "img/product (10).jpg",
    name: "Sneakers",
    price: "$170",
  },
  {
    img: "img/product (9).jpg",
    name: "Sneakers",
    price: "$120",
  },
  {
    img: "img/product (8).jpg",
    name: "Sneakers",
    price: "$110",
  },
  {
    img: "img/product (7).jpg",
    name: "Sneakers",
    price: "$90",
  },
  {
    img: "img/product (6).jpg",
    name: "Sneakers",
    price: "$150",
  },
  {
    img: "img/product (5).jpg",
    name: "Sneakers",
    price: "$250",
  },
  {
    img: "img/product (4).jpg",
    name: "Sneakers",
    price: "$450",
  },
  {
    img: "img/product (3).jpg",
    name: "Perfume",
    price: "$1450",
  },
  {
    img: "img/product (2).jpg",
    name: "Perfume",
    price: "$1150",
  },
  {
    img: "img/product (1).jpg",
    name: "Perfume",
    price: "$2150",
  },
 
];

const printProduct = () => {
  products.forEach((value, index) => {
    blankHmtl += `<div class="item">
    <div class="add-card">
        <h2 data-set = "${index}" class ="add-to-card">+</h2>
    </div>
    <div class="img-con">
        <img src="${value.img}" alt="">
        
    </div>

    <div class="about-img">
        <h2>${value.name}<img src="img/5star rating.jpg" alt=""></h2> 
        <p>Price <span>${value.price}</span></p>
    </div>
</div> `;
  });

  cardItem.innerHTML = blankHmtl;
};


printProduct();


// products printed

let addedInCard = document.querySelector(".added-in-card");
let addedItem  = document.querySelector(".added-item");

cardItem.addEventListener("click",(e) => {
  let blankArr = [];
  console.log(blankArr)

  if(e.target.classList.contains("add-to-card")){
    blankArr.push(products[e.target.dataset.set])
    
  }
  blankArr.forEach((value,idx) => {
    console.log(idx)
    addedInCard.innerHTML += ` <div class="added-in-card-item">

    <div class="card-img">
        <img src="${value.img}" alt="">
    </div>
    <div class="card-detail">
        <h2>${value.name}</h2>
        <p>Price <span>${value.price}</span></p>
    </div>
    <div class="added"><a href="products.html?id=${idx}">+</a></div>
</div>`


  })
  addedItem.classList.add("js-after")
  addedInCard.style.display = "none"
})



let num = 0;

addedItem.addEventListener("click", () => {
  if(num == 0) {

    addedInCard.style.display = "block"
    num = 1;
  } else if(num == 1){
    addedInCard.style.display = "none"
     num = 0;
  }

})


const userAccount = document.querySelector(".user-account")
const userBox = document.querySelector(".user-box")
console.log(userBox)
console.log(userAccount)



if(window.innerWidth <= "582"){

    userBox.innerHTML= `<img class="user"src="img/Nayyar.jfif">`
    console.log("width <= 582px ")
    console.log(userAccount)
    console.log("resizingg..")
  
} else if(window.innerWidth > "582"){
  userBox.innerHTML = `<button class="user-account"><img class="user" src="img/Nayyar.jfif" alt="" /> Nayyar</button> `
}




