/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    let phraseCharactersArray = this.phrase.split('');
    const whiteSpace = /\s/;
    console.log(phraseCharactersArray);

    const phraseElementList =
      document.getElementById('phrase').firstElementChild;

    let phraseDisplayHTML = '';

    for (const char of phraseCharactersArray) {
      if (whiteSpace.test(char)) {
        phraseDisplayHTML += `<li class="space">${char}</li>`;
      } else {
        phraseDisplayHTML += `<li class="hide letter ${char}">${char}</li>`;
      }
    }

    phraseElementList.insertAdjacentHTML('beforeend', phraseDisplayHTML);
  }

  checkLetter(guessedLetter) {
    return this.phrase.includes(guessedLetter);
  }

  showMatchedLetter(guessedLetter) {
    let matchedLetters = document.getElementsByClassName(guessedLetter);

    for (let letter of matchedLetters) {
      letter.classList.replace('hide', 'show');
    }
  }
}
