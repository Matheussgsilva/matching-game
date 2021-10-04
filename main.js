import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import PlayerId from "./src/components/PlayerId";
import BoardGame from "./src/objects/BoardGame";

const $root = document.querySelector("#root")
const $htmlBoardGame = BoardGame(6)
const $htmlPlayerId = PlayerId(2)


$root.insertAdjacentHTML("beforeend", $htmlPlayerId + $htmlBoardGame)