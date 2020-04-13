/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // init game class with phrases
// import the game class
// import User from './user.js'
// this needs to be an array that is of the phrase class
 let gamePhrases = ["two birds one stone", "when in Rome", "two peas in a pod", "a piece of cake","the early bird gets the worm"];

const game = new Game(gamePhrases);
game.createPhrases(gamePhrases);


const reset_btn = document.getElementById("btn__reset");
reset_btn.addEventListener("click", () => {game.startGame()});

// get the div that contains the keyboard
const myBoard = document.getElementById("qwerty");
// get a live node list of the buttons [0] is actually the start button
// but this works
const keyboard = document.getElementsByTagName("button");
// add event listeners to the keyboard
// start at 1 because the start button makes up 0th index
for (let i = 1; i < keyboard.length; i++) {
  keyboard[i].addEventListener("click", () => {game.handleInteraction(keyboard[i].innerText, i)})
}

