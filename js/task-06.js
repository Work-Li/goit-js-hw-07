const inputEl = document.querySelector('#validation-input');

const makeValidationOfInput = (event) => {
 const dataLength = event.currentTarget.dataset.length;
   
        if (event.currentTarget.value.length === Number(dataLength)) {
            event.currentTarget.classList.remove('invalid');
            event.currentTarget.classList.add('valid');
        } else {
            event.currentTarget.classList.remove('valid');    
            event.currentTarget.classList.add('invalid');
        };

}; 

inputEl.addEventListener('change', makeValidationOfInput)