const inputEl = document.querySelector('#validation-input');

const makeValidationOfInput = (event) => {

    // Map( e =>
        if (inputEl.value.length <= Number(inputEl.dataset.length)) {
            inputEl.classList.add('#validation-input.valid')
        } 
        inputEl.classList.add('#validation-input.invalid');

//         )
 } 

inputEl.addEventListener('change', makeValidationOfInput)