import productCard from "./productCards.js"

let productList = document.getElementById('cards');

let products = [
    {
        img: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-1.png?raw=true"
    },
    {
        img: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-2.png?raw=true"
    },
    {
        img: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-3.png?raw=true"
    }
]

for(let i = 0; i<products.length; i++){
    productList.innerHTML += productCard(products[i]);
}
