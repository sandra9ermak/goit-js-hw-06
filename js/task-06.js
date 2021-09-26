const inputText = document.querySelector('input#validation-input');

inputText.addEventListener('blur', () => {
inputText.classList.remove('valid','invalid');

    if (inputText.value.length === Number(inputText.dataset.length)) {
        inputText.classList.add('valid');
    } else inputText.classList.add('invalid');
})