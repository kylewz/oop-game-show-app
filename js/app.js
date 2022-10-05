/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
const keyboardButtons = document.getElementsByClassName('key');
const phraseElementList = document.getElementById('phrase').firstElementChild;
let game = null;

startGameButton.addEventListener('click', () => {
  if (game !== null) {
    clearPreviousGame();
  }
  game = new Game();
  game.startGame();
});

keyboard.addEventListener('click', (e) => {
  game.handleInteraction(e.target.innerText);
});

function resetKeyboard() {
  for (let key of keyboardButtons) {
    key.className = 'key';
    key.disabled = false;
  }
}

function clearPhraseHTML() {
  phraseElementList.innerHTML = '';
}

function restoreHearts() {
  const hearts = document.getElementsByClassName('tries');

  for (let heart of hearts) {
    heart.firstElementChild.src = 'images/liveHeart.png';
  }
}

function clearPreviousGame() {
  resetKeyboard();
  clearPhraseHTML();
  restoreHearts();
}
