import CardFrontBack from "../../components/CardFrontBack";
import "./style.css";


function BoardGame(amountCard) {
    const $htmlCardFrontBack = CardFrontBack()
    const $htmlContent = $htmlCardFrontBack.repeat(amountCard)

    return `
        <section class="board-game">
            ${$htmlContent}
        </section>
    `
}

export default BoardGame;