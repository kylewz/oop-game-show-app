/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    let phraseLettersArray = this.phrase.split('');
    console.log(phraseLettersArray);

    const phraseElementList =
      document.getElementById('phrase').firstElementChild;
  }
}
