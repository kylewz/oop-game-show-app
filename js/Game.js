/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const phrase1 = 'Hello There';
const phrase2 = 'Cowabunga Dude';
const phrase3 = 'Come with me if you want to live';
const phrase4 = 'Forgiveness is divine but never pay full price for late pizza';
const phrase5 = 'I can do this all day';

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
    let startOverlay = document.getElementById('overlay');
    startOverlay.style.visibility = 'hidden';

    this.activePhrase = this.getRandomPhrase();

    this.activePhrase.addPhraseToDisplay();
  }

  getRandomPhrase() {
    const randomNum0to4 = Math.floor(Math.random() * 5);
    return this.phrases[randomNum0to4];
  }
}
