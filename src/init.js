import game, { handleUserAction } from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

async function init() {
  console.log("starting game");

  initButtons(handleUserAction);

  let nextTimetoTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimetoTick <= now) {
      game.tick();
      nextTimetoTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame);
}

init();
