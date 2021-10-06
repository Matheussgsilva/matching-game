import PlayerId from "../../components/PlayerId";
import PlayerScore from "../../components/PlayerScore";
import "./style.css";

function ScoreBoard() {
    return /*html*/`
        <div class="arrow-down"><img src="../../images/IconArrowDown.png"></div>
        <header class="score-board">
            ${PlayerId("Player1")}
            ${PlayerScore()}
            <p>vs</p>
            ${PlayerId("Player2")}
            ${PlayerScore()}
        </header>
    `
}

export default ScoreBoard;