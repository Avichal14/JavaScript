# Projects Related to DOM

## Project link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-q56zk4?file=1-colorChanger%2Fchaiaurcode.js,index.html)

# Solution Code

## Project 1
```Javascript
console.log("Avical");

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```


## Project 2 

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // display in result
    if (bmi < 18.6) {
      results.innerHTML = `${bmi} -> Under Weight`;
    } else if (bmi > 24.9) {
      results.innerHTML = `${bmi} -> Over Weight`;
    } else {
      results.innerHTML = `${bmi} -> Normal Range`;
    }
    
  }
});

```


## Project 3 
```javascript

const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML= date.toLocaleTimeString();
}, 1000);

```

## Project 4 
```javascript

```