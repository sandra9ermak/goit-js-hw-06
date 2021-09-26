const nameInput = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

nameInput.addEventListener('input', event => {
    output.textContent = event.currentTarget.value;

    if (event.currentTarget.value.length === 0) output.textContent = "Anonymous";
})