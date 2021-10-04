import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import PlayerId from "./src/components/PlayerId";
import BoardGame from "./src/objects/BoardGame";

const $root = document.querySelector("#root")


$root.insertAdjacentHTML("beforeend", `
    ${PlayerId("Player1")}
    ${PlayerId("Player2")}
    ${BoardGame(6)}
`)