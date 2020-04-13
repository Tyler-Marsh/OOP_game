/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toString().toLowerCase();
   }

   // genPhrase = generated phrase from the random phrase game method
   addPhraseToDisplay() {
    let phraseUl = document.querySelector('#phrase ul');
    let letter = null;
    for (let i = 0; i < this.phrase.length; i++) {
      letter = document.createElement('li')
      letter.innerText = this.phrase.charAt(i);
      this.phrase.charAt(i) === ' ' ? letter.className = 'space' : letter.className = `hide letter ${this.phrase.charAt(i)}`
      phraseUl.appendChild(letter);
    }
  }

  checkLetter(letter) {
    // check to see if there is a letter match
    for (let i = 0; i < this.phrase.length; i++){
      if (letter === this.phrase[i]) {
        // if atleast 1 match return to reveal
        return true
      }
    }
    // false if no matches
    return false;
  }

  showMatchedLetter(letter) {
    // attach the hidden on screen phrase to variable
    let forLetters = document.getElementById('phrase');
    // make a live nodelist out of the letters
    let uncover = forLetters.getElementsByTagName('li');
    // loop through to reveal all matches with the letter param
    for (let i = 0; i < uncover.length; i++) {
      if (uncover[i].textContent === letter) {
        uncover[i].className = `show letter ${letter}`}
      }
    }
  }