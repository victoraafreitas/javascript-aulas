export default function ProductCard(props) {
    return `
        <div class="card-botao">
            <div class="text-center">
                <img src= ${props.img}
                    class="rounded" alt="...">
                <button>Comprar</button>
            </div>
        </div>
    `
}