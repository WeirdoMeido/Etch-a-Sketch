let canvas = document.querySelector('.container');
let color = "black";


function fillCanvas(size) {
    let canvas = document.querySelector('.container');
    let squares = canvas.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let amount = size * size

    for (let i = 0; i < amount; i++) {
        let canDiv = document.createElement('div');
        canDiv.id = 'r' + i;
        canDiv.className = 'pixelDiv';
        canDiv.style.border = '1px dotted grey'
        canDiv.addEventListener('mouseover', colorBrush);
        canvas.appendChild(canDiv);
    }
}

fillCanvas(16);


function resizeCanvas(input) {
let canvasSize = parseInt(input);
    if (canvasSize < 2) {
        let alertMessage = document.querySelector('.warning');
        alertMessage.textContent = 'Introduce a number greater than 2';
    } else if (canvasSize > 100) {
        let alertMessage = document.querySelector('.warning');
        alertMessage.textContent = 'Introduce a number smaller than 100';   
    } else if (typeof(canvasSize) !== 'number' || canvasSize === NaN){
        let alertMessage = document.querySelector('.warning');
        alertMessage.textContent = 'Thats an invalid number'; 
    }
        else {
            let alertMessage = document.querySelector('.warning');
            alertMessage.textContent = ''; 
            fillCanvas(canvasSize);
    }
}


/// BRUSH FUNCTIONS///

function ereaseCanvas() {
    let blankCanvas = document.querySelectorAll('.pixelDiv');

    blankCanvas.forEach((element) => element.style.backgroundColor = "white");
}

function colorBrush() {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color
    }
}

function changeBrush(currentColor) {
   color = currentColor;
}