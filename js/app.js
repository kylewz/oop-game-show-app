/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameButton = document.getElementById('btn__reset');
let game = null;

startGameButton.addEventListener('click', () => {
  game = new Game();
  game.startGame();
});
