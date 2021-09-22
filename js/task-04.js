const refs = {
    decrementEl: document.querySelector('[data-action="decrement"]'),
    incrementEl: document.querySelector('[data-action="increment"]'),
    counterValueEl: document.querySelector('#value'),
};


let counterValue = 0;


const increment = () => { 
    counterValue += 1;
    refs.counterValueEl.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    refs.counterValueEl.textContent = counterValue;
};

refs.decrementEl.addEventListener('click', decrement);
refs.incrementEl.addEventListener('click', increment);
