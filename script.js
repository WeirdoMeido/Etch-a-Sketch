let canvas = document.querySelector('.container');
let color = "black";

for (let i = 0; i < 256; i++) {
    let canDiv = document.createElement('div');
    canDiv.id = 'r' + i;
    canDiv.className = 'pixelDiv';
    canDiv.addEventListener('mouseover', colorBrush);
    canvas.appendChild(canDiv);
}

function ereaseCanvas() {
    let blankCanvas = document.querySelectorAll('.pixelDiv');

    blankCanvas.forEach((div) => div.style.backgroundColor = "white");
}

function colorBrush() {
    this.style.backgroundColor = color
}

function changeBrush(currentColor) {
 color = currentColor;
}