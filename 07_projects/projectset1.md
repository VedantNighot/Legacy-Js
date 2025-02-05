# Projects related to DOM

## Project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1 (Color Scheme Switcher)

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
    results.innerHTML = (weight / ((height * height) / 1000)).toFixed(2);
  }
});
```
## project 3 (BMI Calculator)
