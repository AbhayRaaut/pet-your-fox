import { ICONS } from "./constants";

const toggleHighlighted = (icon, show) =>
  document
    .querySelector(`.${ICONS[icon]}-icon`)
    .classList.toggle("highlighted", show);

export default function initButtons(handleUserAction) {
  let selelctedIcon = 0;

  function buttonClick({ target }) {
    if (target.classList.contains("left-btn")) {
      toggleHighlighted(selelctedIcon, false);
      selelctedIcon = (2 + selelctedIcon) % ICONS.length;
      toggleHighlighted(selelctedIcon, true);
    } else if (target.classList.contains("right-btn")) {
      toggleHighlighted(selelctedIcon, false);
      selelctedIcon = (1 + selelctedIcon) % ICONS.length;
      toggleHighlighted(selelctedIcon, true);
    } else {
      handleUserAction(ICONS[selelctedIcon]);
    }
  }
  document.querySelector(".buttons").addEventListener("click", buttonClick);
}
