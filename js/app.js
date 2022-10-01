/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameButton = document.getElementById('btn__reset');
const keyboardButtons = document.getElementById('qwerty');
let game = null;

startGameButton.addEventListener('click', () => {
  game = new Game();
  game.startGame();
});

keyboardButtons.addEventListener('click', (e) => {
  game.handleInteraction(e.target.innerText);
});
