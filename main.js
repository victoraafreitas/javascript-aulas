import ProductCard from "./ProductCards.js";

let productList = document.getElementById('product-list');


let products = [
    {
        name: "IPHONE 14",
        price: "2.990,00"
    },
    {
        name: "Nokia",
        price: "3.990,00"
    }
]

for(let i=0; i<products.length; i++){
    productList.innerHTML += ProductCard(products[i]);
}

