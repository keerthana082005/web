const canvas=document.getElementById('sketchPad');
const ctx=canvas.getContext('2d');

let drawing=false;
let currentColor='#000000'
ctx.strokeStyle=currentColor;

canvas.addEventListener('mousedown',()=>{
    drawing=true;
    ctx.beginPath();
});

canvas.addEventListener('mouseup',()=>{
    drawing=false;
    ctx.beginPath();
});

canvas.addEventListener('mousemove',(event)=>{
    if(!drawing) return;
    ctx.lineWidth=3;
    ctx.lineCap='round';
    ctx.strokeStyle=currentColor;
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.offsetX,event.offsetY);
});

document.getElementById('redBtn').addEventListener('click',()=>{
    currentColor='#ff0000';
    ctx.strokeStyle=currentColor;
    document.getElementById('currentColor').textContent='Red';
});

document.getElementById('blueBtn').addEventListener('click',()=>{
    currentColor='#0000ff';
    ctx.strokeStyle=currentColor;
    document.getElementById('currentColor').textContent='Blue';
});

document.getElementById('greenBtn').addEventListener('click',()=>{
    currentColor='##008000';
    ctx.strokeStyle=currentColor;
    document.getElementById('currentColor').textContent='Green';
});

document.getElementById('eraserBtn').addEventListener('click',()=>{
    currentColor='#ffffff';
    ctx.strokeStyle=currentColor;
    document.getElementById('currentColor').textContent='Eraser (White)';
});

document.getElementById('clearBtn').addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle='#ffffff';
    ctx.fillRect(0,0,canvas.width,canvas.height);
});

document.getElementById('currentColor').textContent='Black';
