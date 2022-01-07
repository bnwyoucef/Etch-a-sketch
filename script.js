const myCanvas = document.querySelector('#etch-a-sketch');
const ctx = myCanvas.getContext('2d');
ctx.lineWidth = 10;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.beginPath(); // to start drawing
const { width, height } = myCanvas; //get the height and width of the canvas
const x = Math.floor(Math.random() * width); //set the x value between 0 and width
const y = Math.floor(Math.random() * height); //set the y value between 0 and height
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
        console.log(event.key);
    }
}