/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Variables for handling event listeners and interaction
const startGameButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
const phraseElementList = document.getElementById('phrase').firstElementChild;
let game = null;

// Event listener on start button, begins new game, resets game elements if
// restarting from a previous game
startGameButton.addEventListener('click', () => {
  if (game !== null) {
    clearPreviousGame();
  }
  game = new Game();
  game.startGame();
});

// Event listener on the display keyboard for user selected letter to guess
keyboard.addEventListener('click', (e) => {
  game.handleInteraction(e.target.innerText);
});

//Function to enable all disabled keys on display keyboard, reset key class
// to default "key" class
function resetKeyboard() {
  const keyboardButtons = document.getElementsByClassName('key');

  for (let key of keyboardButtons) {
    key.className = 'key';
    key.disabled = false;
  }
}

// Function to remove phrase HTML from display in preparation for new game
function clearPhraseHTML() {
  phraseElementList.innerHTML = '';
}

// Function to display all heart icons as live hearts for new game
function restoreHearts() {
  const hearts = document.getElementsByClassName('tries');

  for (let heart of hearts) {
    heart.firstElementChild.src = 'images/liveHeart.png';
  }
}

// Function to reset display and game elements for a new game
function clearPreviousGame() {
  resetKeyboard();
  clearPhraseHTML();
  restoreHearts();
}
