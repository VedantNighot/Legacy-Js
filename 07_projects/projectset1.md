# Projects related to DOM

## Project link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code 

## project 1

```javascript
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector('body');
    buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
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
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
    }
  });
});
```