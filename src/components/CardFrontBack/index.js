import CardGame from "../CardGame";

function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame('html', 'Logo do HTML')}
        </article>
    `
}

export default CardFrontBack;