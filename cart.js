let cartProducts=JSON.parse(localStorage.getItem("cart"));
let quantityOfproducts=parseInt(localStorage.getItem("quantity"));
let noProduct=document.querySelector(".no-products");
function check(){
    let q=parseInt(localStorage.getItem("quantity"));
    if(q===0){
        console.log("meh nahi ja raha");
        noProduct.style.display="block";
    }
    else{
        noProduct.style.display="none";
    }
}






