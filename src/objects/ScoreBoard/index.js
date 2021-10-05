import PlayerId from "../../components/PlayerId";

function ScoreBoard() {
    return /*html*/`
        <header class="score-board">
            ${PlayerId("Player1")}
            ${PlayerId("Player2")}
        </header>
    `
}

export default ScoreBoard;