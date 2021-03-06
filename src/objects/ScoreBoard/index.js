import ArrowDown from "../../components/ArrowDown";
import PlayerId from "../../components/PlayerId";
import PlayerScore from "../../components/PlayerScore";
import VsPlayer from "../../components/VsPlayer";
import "./style.css";

function ScoreBoard() {
    return /*html*/`
        <header class="score-board">
            ${ArrowDown(2)}
            ${PlayerId("Player1")}
            ${PlayerScore(3)}
            ${VsPlayer()}
            ${PlayerScore(2)}
            ${PlayerId("Player2")}
        </header>
    `
}

export default ScoreBoard;