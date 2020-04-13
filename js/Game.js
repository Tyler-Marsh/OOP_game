/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// game needs an array of phrases to use in the game


class Game {
  constructor() {
    this.phrases = [];
    this.missed = 0;
    this.activePhrase = null;
  }

  // create a method to instantiate an array of the Phrase class object suppled to the class

  createPhrases(arrayOfPhrases) {
    arrayOfPhrases.forEach(phrase => {
      this.phrases.push(new Phrase(phrase));
    });
  }

  
  getRandomPhrase() {
    return this.phrases[(Math.floor(Math.random() * this.phrases.length))]
  }

  
  startGame() {
    // clear the keyboard
    for (let i = 1; i < keyboard.length; i++) {
      keyboard[i].className = "key";
      keyboard[i].disabled = false;
    }
    this.activePhrase = this.getRandomPhrase();
    document.getElementById("overlay").style.display = "none";
    this.activePhrase.addPhraseToDisplay();
    // if this logic is in gameOver the overlay start button
    // clicking may trigger another button
    // reset the keyboard
    // class = key
    // enabled = true
   
  }

  removeLife() {
    // attach the img tag to a variable
    // incase more img tags want to be added later
    let life = document.querySelector('ol');
    let hearts = life.getElementsByTagName('img');
    for (let i = hearts.length - 1; i >= 0; i--) {
      if ( /live/.test(hearts[i].src)) {
        hearts[i].src = "images/lostHeart.png";
        this.missed += 1
        break
      }
    }
    if (this.missed === 5) {
      this.gameOver("lose", "Sorry, you lost.")
    }
  }

  checkForWin() {
    // capture the hidden phrase to iterate over
    // checking to see if all classes are show OR space
    // thus seeing if a player won
    let newCapture = document.getElementById("phrase");
    newCapture = newCapture.getElementsByTagName('li');
    for (let i = 0; i < newCapture.length; i++) {
      if (! /show|space/g.test(newCapture[i].className)) {
        return false;
      }
    }
    this.gameOver("win", "Congratulations, You won!")
  }

  gameOver(winLoss, message) {
    // when the game is over 
    // display correct screen and message
    document.getElementById("overlay").className = winLoss;
    document.getElementById("game-over-message").textContent = message;
    document.getElementById("overlay").style.display = 'flex';
    // remove the old phrase
    // the next game will have clean slate
    let forLetters = document.querySelector("#phrase ul");
    // borrowed inspiration from stack overflow on
    // a clean way to delete the letters displayed
    while (forLetters.firstChild) {
      forLetters.removeChild(forLetters.firstChild)
    }
    // reset the hearts
    // same code to assign variables as 
    let life = document.querySelector('ol');
    let hearts = life.getElementsByTagName('img');
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].src = "images/liveHeart.png"
    }
    this.missed = 0;
  }

  // handle logic method

  handleInteraction(letter, index) {
    if(this.activePhrase.checkLetter(letter)) {
      this.activePhrase.showMatchedLetter(letter);
      keyboard[index].disabled = true;
      keyboard[index].className = 'chosen';
      this.checkForWin();
    }
    else {
      this.removeLife();
      keyboard[index].disabled = true;
      keyboard[index].className = 'wrong';
    }
  }
}