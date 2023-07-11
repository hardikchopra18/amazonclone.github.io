check();
let cardContainer=document.querySelector(".js-card-container");


function showProductCards(){
  check();
  let carthtml=``;
    for(let i=0;i<cartProducts.length;i++){
        carthtml+=`<div class="selected-product">
        <div class="delivery-date">delivery date:Monday,june19</div>
        <div class="product">
          <div class="selected-product-img">
            <img src="${cartProducts[i].image}" alt="image" />
          </div>
          <div class="selected-product-desc">
            <div class="selected-product-name">
              ${cartProducts[i].name}
            </div>
            <div class="selected-product-price">$${cartProducts[i].price}</div>
            <div class="selected-product-quantity">
              quantity:
              <span class="selected-product-q">${cartProducts[i].quantity}</span>
              <div class="selelected-product-update-option">
                <span  class="js-delete-cart" >update</span>
                <span class="js-delete-cart" data-name="${cartProducts[i].name}">delete</span>
              </div>
            </div>
          </div>
          <div class="selected-product-delivery-date">
            <h6>choose delivery option:</h6>
            <div class="option1">
              <input id="opt1" type="radio" name="delivery-opt" />
              <label for="opt1"
                >tuesday,june27
                <span class="product-delivery-charges"
                  >Free shipping</span
                ></label
              >
            </div>
            <div class="option2">
              <input id="opt2" type="radio" name="delivery-opt" />
              <label for="opt2"
                >wednesday,june28
                <span class="product-delivery-charges"
                  ><span class="extra-delivery-charges">$4.99</span
                  >-shipping</span
                ></label
              >
            </div>
            <div class="option3">
              <input id="opt3" type="radio" name="delivery-opt" />
              <label for="opt3"
                >thursday,june29
                <span class="product-delivery-charges"
                  ><span class="extra-delivery-charges">$9.99</span
                  >-shipping</span
                ></label
              >
            </div>
          </div>
        </div>
      </div>`
    }
    cardContainer.innerHTML=carthtml;
    document.querySelectorAll(".head-quantity").forEach((elem)=>{
    elem.innerHTML=cartProducts.length;
});

let totalPrice=0;
for(let i=0;i<cartProducts.length;i++){
 totalPrice+=parseFloat(cartProducts[i].price)*parseInt(cartProducts[i].quantity);
}
document.querySelector(".js-price-products").innerHTML=`$${totalPrice.toFixed(2)}`;
}
showProductCards();


document.querySelectorAll(".js-delete-cart").forEach((btn)=>{
    btn.addEventListener("click",()=>{
      for(let i=0;i<cartProducts.length;i++){
        
        if(cartProducts[i].name===btn.dataset.name){                
          quantityOfproducts-=cartProducts[i].quantity;
          cartProducts.splice(i,1);
          localStorage.removeItem("quantity");
          localStorage.setItem("quantity",quantityOfproducts);
          localStorage.removeItem("cart");
          localStorage.setItem("cart",JSON.stringify(cartProducts));
          check();
          console.log("hogya");
          showProductCards();
          }

        }      
    })
})


document.querySelector(".js-delete-cart").addEventListener("click",()=>{
  window.location.href="amazon.html";
})









