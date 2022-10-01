/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
const keyboardButtons = document.getElementsByClassName('key');
const phraseElementList = document.getElementById('phrase').firstElementChild;
let game = null;

startGameButton.addEventListener('click', () => {
  if (game === null) {
    game = new Game();
  } else {
    resetGame();
    game = new Game();
  }
  game.startGame();
});

keyboard.addEventListener('click', (e) => {
  game.handleInteraction(e.target.innerText);
});

function resetGame() {
  for (let key of keyboardButtons) {
    key.className = 'key';
    key.disabled = false;
  }
  phraseElementList.innerHTML = '';
}
