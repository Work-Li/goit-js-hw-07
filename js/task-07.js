const controlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


const  resizes = (event) => {
    textEl.style.fontSize = event.target.value + 'px';
   
};

controlEl.addEventListener('input', resizes);