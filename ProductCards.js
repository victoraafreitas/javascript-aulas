export default function ProductCard(props){
    return `
    <div class="card">
        <img src="https://m.media-amazon.com/images/I/41rfDU6FGqL._AC_SL1000_.jpg">
        <div>
            <h1>${props.name}</h1>
            <h2>128GB Meia-noite</h2>
            <span>R$ 3.479,00</span>
            <button>Comprar</button>
        </div>
    </div>
    `
}