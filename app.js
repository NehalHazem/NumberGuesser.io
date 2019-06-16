// Games Value 
let min = 1,
    max = 10,
    winningNum = getRandomNum(),
    guessesLeft = 3;
    
// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'), 
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

// Assign max & min in UI
minNum.textContent = min;
maxNum.textContent = max;

// getRandomNum Function
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}

// Button EventListener for sumitting the guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    
    // Validation
    if(isNaN(guess) || guess < min || guess > max) {
        isGameOver(`Please enter a number between ${min} and ${max}`, false, '#ce0083', '');
    } else if (guess === winningNum) {
        isGameOver(`correct, YOU WIN!`, true, '#0080bd', guess);
        guessBtn.value = 'Play Again';
    } else {
        guessesLeft -= 1;
        if(guessesLeft === 0) {
            isGameOver(`YOU LOST, the correct guess was ${winningNum}!`, true, '#ce0083', '');
            guessBtn.value = 'Play Again';
        } else if(guessesLeft === 1) {
            isGameOver(`wrong guess, one guess left`, false, '#ce0083', '');
        } else if (guessesLeft === 2) {
            isGameOver(`wrong guess, two guesses left`, false, '#ce0083', '');
        }
    }
})

// setMessage Function
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

// Game Function
function isGameOver(msg, disable, color, value) {
    setMessage(msg, color);
    guessInput.disabled = disable;
    guessInput.style.borderColor = color;
    guessInput.value = value;
}

// Button EventListener for play again
guessBtn.addEventListener('mousedown', function(e) {
    if(e.target.value === 'Play Again') {
        location.reload();
    }
})