'use strict';
/*console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

let secretno = Math.trunc(Math.random() * 20) + 1; //random number between 0-20+1 to avoid zero
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof g);
  //Its type is string, needs to be converted to a number

  if (!guess) {
    //if there is no guess by player
    //document.querySelector('.message').textContent = 'No number guessed!';
    displayMessage('No number guessed!');
  } else if (guess === secretno) {
    //when player wins
    document.querySelector('.number').textContent = secretno;
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#006400';
    document.querySelector('.number').style.width = '30 rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretno) {
    //when guess is too high or too low
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretno ? 'Too high!' : 'Too low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = '0';
      document.querySelector('body').style.backgroundColor = '#8B0000';
    }
  } /*else if (guess < secretno) {
    //when guess is too low
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = '0';
      document.querySelector('body').style.backgroundColor = '#8B0000';
    }
  }*/
});

//game again
document.querySelector('.again').addEventListener('click', function () {
  //anonymous function handler
  score = 20;
  secretno = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';
});
