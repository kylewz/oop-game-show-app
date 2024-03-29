/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Phrase class to handle adding a phrase to display, check for matched letters
// with user guess, and show matched letters in display
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  // Add a phrase to the browser display, differentiate between characters
  // and whitespace, phrase letters hidden by default
  addPhraseToDisplay() {
    let phraseCharactersArray = this.phrase.split('');
    const whiteSpace = /\s/;

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

  // Check that a guessed letter is in a phrase
  checkLetter(guessedLetter) {
    return this.phrase.includes(guessedLetter);
  }

  // Show a matched letter in the phrase
  showMatchedLetter(guessedLetter) {
    let matchedLetters = document.getElementsByClassName(guessedLetter);

    for (let letter of matchedLetters) {
      letter.classList.replace('hide', 'show');
    }
  }
}
