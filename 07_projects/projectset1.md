# Projects related to DOM

## Project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);

    // IF ELSE STATEMENT

    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = 'gray';
    // } else if (e.target.id === 'white') {
    //   body.style.backgroundColor = 'white';
    // } else if (e.target.id === 'blue') {
    //   body.style.backgroundColor = 'blue';
    // } else {
    //   body.style.backgroundColor = 'yellow';
    // }

    // SWITCH CASES

    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "white":
        body.style.backgroundColor = "white";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
    }
  });
});
```

## project 2 (BMI Calculator)

```JavaScript
const form = document.querySelector('form');

// this usecase will give you empty values

// const height = parseInt(document.querySelector('#height'));
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `${height} is not valid Height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `${weight} is not valid Weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi} Its an Under Weight</span>`;
    } else if (bmi > 18.6 || bmi < 24.9) {
      results.innerHTML = `<span>${bmi} Its in a normal Range</span>`;
    } else {
      results.innerHTML = `<span>${bmi} Its an Overweight</span>`;
    }
    // show the results
  }
});

```

## project 3 (Digital Clock)

```JavaScript
    document.querySelector('#clock');
    setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## project 4 (Guess the number)

```JavaScript
    let random_number = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number above 0');
  } else if (guess > 100) {
    alert('please enter a number less then 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      cleanUpGuess(guess);
      displayMessage(`Game Over . Random Number was ${random_number}`);
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  //
  if (guess === random_number) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < random_number) {
    displayMessage(`Number is too Low`);
  } else if (guess > random_number) {
    displayMessage(`Number is too High`);
  }
}
function cleanUpGuess(guess) {
  //
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGame = document.querySelector('#newGame');
  newGame.addEventListener('click', (e) => {
    random_number = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute(`disabled`);
    startOver.removeChild(p);
    playGame = true;
  });
}
```
## project 5 (Unlimited Colors)
```JavaScript
  const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;

const startChaningColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChaningColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

console.log(randomColor(randomColor()));
```
## project 6 (Keyboard)
```Javascript
const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class="color">
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
    <th>Key pressed</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
`;
});
```