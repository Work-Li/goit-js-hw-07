const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const handler = (event) => {
    if (inputEl.value != '') {
        outputEl.textContent = event.currentTarget.value;
    } else {
    outputEl.textContent = 'незнакомец';
    };

};

inputEl.addEventListener('input', handler);