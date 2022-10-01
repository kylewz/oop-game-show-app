/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const phrase1 = 'Hello There';
const phrase2 = 'Cowabunga Dude';
const phrase3 = 'Come with me if you want to live';
const phrase4 = 'Forgiveness is divine but never pay full price for late pizza';
const phrase5 = 'I can do this all day';
const gameWinClass = 'win';
const gameLoseClass = 'lose';
const winMessage = 'You Did It!';
const loseMessage = 'There Was An Attempt...';
const lostHeartImg = 'images/lostHeart.png';
const numOfTries = document.querySelectorAll('.tries').length;
let startOverlay = document.getElementById('overlay');

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase(phrase1),
      new Phrase(phrase2),
      new Phrase(phrase3),
      new Phrase(phrase4),
      new Phrase(phrase5),
    ];
    this.activePhrase = null;
  }

  startGame() {
    startOverlay.style.visibility = 'hidden';

    this.activePhrase = this.getRandomPhrase();

    this.activePhrase.addPhraseToDisplay();
  }

  getRandomPhrase() {
    const randomNum0to4 = Math.floor(Math.random() * 5);
    return this.phrases[randomNum0to4];
  }

  handleInteraction(guessedLetter) {
    const displayKeyboardKeys = document.querySelectorAll('.key');
    const guessIsCorrect = this.activePhrase.checkLetter(guessedLetter);

    for (let key of displayKeyboardKeys) {
      if (key.textContent === guessedLetter) {
        key.disabled = true;
        key.classList.add('chosen');

        if (guessIsCorrect) {
          this.activePhrase.showMatchedLetter(guessedLetter);

          if (this.checkForWin()) {
            this.gameOver(gameWinClass, winMessage);
          }
        } else {
          this.removeLife();
        }
      }
    }
  }

  checkForWin() {
    const lettersStillHidden = document.getElementsByClassName('hide').length;
    return lettersStillHidden === 0;
  }

  removeLife() {
    let hearts = document.querySelectorAll('.tries');
    hearts[this.missed].firstElementChild.src = lostHeartImg;

    this.missed++;

    if (this.missed >= numOfTries) {
      this.gameOver(gameLoseClass, loseMessage);
    }
  }

  gameOver(winOrLose, endGameMessage) {
    let gameOverMessageText = document.getElementById('game-over-message');

    startOverlay.style.visibility = 'visible';
    startOverlay.classList.replace('start', winOrLose);

    gameOverMessageText.innerText = endGameMessage;
  }
}
