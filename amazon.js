let hamburgerbtn=document.querySelector(".shipment-responsive");
let hamburgerMenu=document.querySelector(".hamburger-menu");
let navigation=document.querySelector(".navigation-bar");
function hamburger(){
   if(navigation.style.height!="150px"){
       navigation.style.height="150px";
       hamburgerbtn.style.top="14%";
       hamburgerMenu.style.display="block";
    }
    else{
        navigation.style.height="65px";
        hamburgerbtn.style.top="33%"; 
        hamburgerMenu.style.display="none";
    } 
}
hamburgerbtn.addEventListener("click",hamburger);




// ******************************prodcuts*****************************
const simpleproducts=[
    {
     image:'./images/p-1.jpg',
     name:'black and gray atheletic socks-6',
     price:'10.90',
     stars:'./images/r-1.png',
     ratings:87
    },
    {
    image:'./images/p-2.jpg',
    name:'Intermediate Size Basketball',
    price:'20.95',
    stars:'./images/r-2.png',
    ratings:127
    },
    {
    image:'./images/p-3.jpg',
    name:'Adults Plain Cotton T-Shirt - 2 Pack',
    price:'7.99',
    stars:'./images/r-1.png',
    ratings:56
    },
    {
    image:'./images/p-4.jpg',
    name:'2 Slot Toaster - Black',
    price:'18.99',
    stars:'./images/r-5.png',
    ratings:2197
    },
    {
    image:'./images/p-5.jpg',
    name:'6 Piece White Dinner Plate Set',
    price:'20.67',
    stars:'./images/r-2.png',
    ratings:37
    },
    {
    image:'./images/p-6.webp',
    name:'6-Piece Nonstick, Carbon Steel Oven Bakeware',
    price:'34.99',
    stars:'./images/rating-45.png',
    ratings:175
    },
    {
    image:'./images/p-7.jpg',
    name:`Women's Chiffon Beachwear Cover Up - Black`,
    price:'20.70',
    stars:'./images/rating-45.png',
    ratings:235
    },
    {
    image:'./images/p-8.jpg',
    name:`Ultra Soft Tissue 2-Ply - 18 Box`,
    price:'23.74',
    stars:'./images/r-2.png',
    ratings:99
    },
    {
    image:'./images/p-9.webp',
    name:`Straw Lifeguard Sun Ha`,
    price:'22.00',
    stars:'./images/r-2.png',
    ratings:215
    },
    {
    image:'./images/p-10.webp',
    name:`Blackout Curtains Set 4-Pack - Beige`,
    price:'45.99',
    stars:'./images/rating-45.png',
    ratings:215
    },
    {
    image:'./images/p-11.jpg',
    name:`Bathroom Bath Rug Mat 20 x 31 Inch - Grey`,
    price:'12.50',
    stars:'./images/rating-45.png',
    ratings:119
    },
    {
    image:'./images/p-12.webp',
    name:`Sterling Silver Sky Flower Stud Earrings`,
    price:'17.99',
    stars:'./images/rating-45.png',
    ratings:52
    },
    {
     image:'./images/p-13.webp',
     name:`Straw Lifeguard Sun Ha`,
     price:'22.00',
     stars:'./images/r-2.png',
     ratings:215
    },
    {
    image:'./images/p-14.webp',
    name:`Non-Stick Cookware Set, Pots, Pans and Utensils - 15`,
    price:'67.97',
    stars:'./images/rating-45.png',
    ratings:511
    }
];

















// ***************************cards-generation*********************

let htmlcode='';
let crdContainer=document.querySelector(".cards-container");
function makecards(){
    for(let i=0;i<simpleproducts.length;i++){
        htmlcode+=`
   <div class="card-items">
        <div class="product-image">
          <img src="${simpleproducts[i].image}" alt="socks">
        </div>
        <div class="description">
          <p class="desc-name-quant">${simpleproducts[i].name}</p>
          <div class="ratings">
            <img class="stars" src="${simpleproducts[i].stars}">
            <span class="reviews-cnt">${simpleproducts[i].ratings}</span>
          </div>
          <div class="price">$${simpleproducts[i].price}</div>
          <div class="product-quantity">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <button data-name="${simpleproducts[i].name}" data-img="${simpleproducts[i].image}" data-ratings="${simpleproducts[i].ratings}"
          data-price="${simpleproducts[i].price}"
          data-stars="${simpleproducts[i].stars}"
          class="add-to-cart">Add to cart</button>
          </div>
          </div>
          `   
        }
      crdContainer.innerHTML=htmlcode;  
}
makecards();


// **************************demo****************



let btns=document.querySelectorAll(".add-to-cart");
// console.log(btns);
btns.forEach((button)=>{
  button.addEventListener("click",()=>{
    
    // *************adding product to cart******
    
    //***********checking quantity**************
    let flag=false;
     let productsearch=button.dataset.name;
     for(let i=0;i<cartProducts.length;i++){
        if(productsearch===cartProducts[i].name){
          flag=true;
          cartProducts[i].quantity+=1;
          break;
        }
     }

     if(!flag){
      cartProducts.push({
        name:`${button.dataset.name}`,
        image:`${button.dataset.img}`,
        ratings:`${button.dataset.ratings}`,
        price:`${button.dataset.price}`,
        stars:`${button.dataset.stars}`,
        quantity:1
      })
     }
    
      for(let i=0;i<cartProducts.length;i++){
      quantityOfproducts+=cartProducts[i].quantity;
    }
    document.querySelector("#quantity-display-cart").innerHTML=quantityOfproducts;
    localStorage.setItem("quantity",quantityOfproducts);
    quantityOfproducts=0;
    localStorage.removeItem("cart");
    localStorage.setItem("cart",JSON.stringify(cartProducts));
    
  });
})


document.querySelector("#quantity-display-cart").innerHTML=quantityOfproducts;
document.querySelector(".js-responsive-quantity").innerHTML=quantityOfproducts;



    


