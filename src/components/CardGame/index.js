import "./style.css"

function CardGame(icone = "alura-pixel", alt = "Logo da Alura") {
    return`
    <article class="card-game">
        <img src="images/${icone}.png" alt="${alt}">
    </article>
    `;
}

export default CardGame;