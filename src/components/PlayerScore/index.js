import "./style.css"

function PlayerScore(points = 0) {
    return /*html*/`
        <ol data-points="${points}">
            <li class="one">Um</li>
            <li class="two">Dois</li>
            <li class="three">Três</li>
        </ol>
    `
}

export default PlayerScore