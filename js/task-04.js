const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

buttonDecrement.addEventListener('click', event => { 
    value.textContent = --counterValue;
})

buttonIncrement.addEventListener('click', event => {
    value.textContent = ++counterValue;
})