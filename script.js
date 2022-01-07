const myCanvas = document.querySelector('#etch-a-sketch');
const ctx = myCanvas.getContext('2d');
ctx.lineWidth = 10;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
const CHANGE_VALUE = 10;
let hue = 142;
ctx.strokeStyle = `hsl(${hue}, 100%,50%)`;
ctx.beginPath(); // to start drawing
const { width, height } = myCanvas; //get the height and width of the canvas
let x = Math.floor(Math.random() * width); //set the x value between 0 and width
let y = Math.floor(Math.random() * height); //set the y value between 0 and height
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
/**
 * listen for the keys
 */
window.addEventListener('keydown', handleArrows);

function handleArrows(event) {
    if (event.key.includes('Arrow')) {
        event.preventDefault();
        draw(event.key);
        console.log(event.key);
    }
}
//handle keys
function draw(key) {
    hue += 5;
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    switch (key) {
        case 'ArrowUp':
            y -= CHANGE_VALUE;
            break;
        case 'ArrowDown':
            y += CHANGE_VALUE;
            break;
        case 'ArrowLeft':
            x -= CHANGE_VALUE;
            break;
        case 'ArrowRight':
            x += CHANGE_VALUE;
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

//clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, width, height);
    myCanvas.classList.add('shake');
    myCanvas.addEventListener('animationend', function() {
        myCanvas.classList.remove('shake');
    }, { once: true });
}

const clearBtn = document.querySelector('.shake');
clearBtn.addEventListener('click', clearCanvas);