import PlayerId from "../../components/PlayerId";
import "./style.css";

function ScoreBoard() {
    return /*html*/`
        <header class="score-board">
            ${PlayerId("Player1")}
            ${PlayerId("Player2")}
        </header>
    `
}

export default ScoreBoard;