const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');

const onRenderDiv = () => {
    const amount = inputEl.value;
    createBoxes(amount);
};

const randomColor = () => {
    return Math.round(Math.random() * 100) + '%';
}

const createBoxes = (amount) => {
    const boxes = [];
    const boxSize = 30;
    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');
        
        box.style.width = boxSize + 10 * i + 'px';
        box.style.height = boxSize + 10 * i + 'px';
        box.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

        boxes.push(box);
        console.log(boxes);
    }

    boxesEl.append(...boxes);
};

const destroyBoxes = () => {
    inputEl.value = ''; 
    boxesEl.replaceChildren();
};

renderRef.addEventListener('click', onRenderDiv);
destroyRef.addEventListener('click', destroyBoxes);


