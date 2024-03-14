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
    img: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
    name: "Sneakers",
    price: "$1450",
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/hoka-zinal-13085-1643565794.jpg?crop=1.00xw:0.752xh;0,0.115xh&resize=1200:*",
    name: "Sneakers",
    price: "$1150",
  },
  {
    img: "https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=90&crop=false",
    name: "Sneakers",
    price: "$2150",
  },
  {
    img : "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/l/d/6/6-iy440-elevarse-white-original-imagnz4b65neasdn.jpeg?q=90&crop=false",
    name: "Sneakers",
    price: "$1150",
  },
  {
    img: "https://img.freepik.com/free-photo/multi-colored-sports-shoe-blue-backdrop-design-generated-by-ai_188544-19749.jpg",
    name: "Sneakers",
    price: "$5050",
  },
  {
    img: "https://www.barkershoes.com/cdn/shop/collections/8I5A5326_600x375_crop_center.jpg?v=1618574799",
    name: "Sneakers",
    price: "$9220",
  },
  {
    img : "https://static01.nyt.com/images/2022/03/17/us/08xpsatan-shoe/merlin_186039729_cdb846bf-dc3f-49cf-8552-e3992140338b-videoSixteenByNineJumbo1600.jpg",
    name: "Sneakers",
    price: "$7213",
  },
  {
    img :"https://www.rancourtandcompany.com/cdn/shop/files/DSC03534_13a535e2-ab49-47b1-9074-67a275241760_300x.jpg?v=1709228663",
    name: "Sneakers",
    price: "$7213",
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
    <div class="added">+</div>
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




