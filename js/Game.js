/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Pre-set phrases for the game to choose from
const phrase1 = 'Hello There';
const phrase2 = 'Cowabunga Dude';
const phrase3 = 'Come with me if you want to live';
const phrase4 = 'Into the frying pan';
const phrase5 = 'I can do this all day';

// Variables to control game win or lose experience
const gameWinClass = 'win';
const gameLoseClass = 'lose';
const winMessage = 'You Did It!';
const loseMessage = 'There Was An Attempt...';
const lostHeartImg = 'images/lostHeart.png';

// Max times the player can incorrectly guess
const numOfTries = document.querySelectorAll('.tries').length;

let startOverlay = document.getElementById('overlay');

// Game object to control game variables and interactions
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

  // Hide game title screen, choose phrase to guess, and display guess phrase
  startGame() {
    startOverlay.style.visibility = 'hidden';

    this.activePhrase = this.getRandomPhrase();

    this.activePhrase.addPhraseToDisplay();
  }

  // Choose random phrase from 5 phrases
  getRandomPhrase() {
    const randomNum0to4 = Math.floor(Math.random() * 5);
    return this.phrases[randomNum0to4];
  }

  // Game disables guessed keyboard letter, show letter for correct guess,
  // remove heart for failed guess
  handleInteraction(guessedLetter) {
    const displayKeyboardKeys = document.querySelectorAll('.key');
    const guessIsCorrect = this.activePhrase.checkLetter(guessedLetter);

    for (let key of displayKeyboardKeys) {
      if (key.textContent === guessedLetter) {
        key.disabled = true;

        if (guessIsCorrect) {
          this.activePhrase.showMatchedLetter(guessedLetter);
          key.classList.add('chosen');

          if (this.checkForWin()) {
            this.gameOver(gameWinClass, winMessage);
          }
        } else {
          this.removeLife();
          key.classList.add('wrong');
        }
      }
    }
  }

  // Check if all phrases letter are revealed
  checkForWin() {
    const lettersStillHidden = document.getElementsByClassName('hide').length;
    return lettersStillHidden === 0;
  }

  // Replace live heart with lost heart img, increment missed
  // Ends game if num of misses equals or exceeds max num of tries
  removeLife() {
    let hearts = document.getElementsByClassName('tries');
    hearts[this.missed].firstElementChild.src = lostHeartImg;

    this.missed++;

    if (this.missed >= numOfTries) {
      this.gameOver(gameLoseClass, loseMessage);
    }
  }

  // End game with win or lose display and corresponding message
  gameOver(winOrLose, endGameMessage) {
    let gameOverMessageText = document.getElementById('game-over-message');

    startOverlay.style.visibility = 'visible';
    startOverlay.className = winOrLose;

    gameOverMessageText.innerText = endGameMessage;
  }
}
