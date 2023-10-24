const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
/* 랜덤 색상
const colors = [
    "red","orange","yellow","green","blue","purple","black"
]*/
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
let isPainting = false;
const colorOptions = Array.from(document.getElementsByClassName("color-option"));


canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

function onMouseMove(event){
    if (isPainting){
        ctx.lineTo(event.offsetX,event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX,event.offsetY);
}

function onMouseDown(event){
    isPainting = true;
}

function onMouseUp(event){
    isPainting = false;
}

function cancleDraw(){
    isPainting = false;
    ctx.beginPath();
}

function LineWidth(evnet){
    ctx.lineWidth = (event.target.value);
}

function onClickchangeColor(event){
    ctx.strokeStyle = event.target.dataset.color;
}

function changeColor(event){
    colorvalue = event.target.value;
    ctx.strokeStyle = colorvalue;

}

canvas.addEventListener("mousemove",onMouseMove);
canvas.addEventListener("mousedown",onMouseDown);
canvas.addEventListener("mouseup",onMouseUp);
canvas.addEventListener("mouseleave",cancleDraw);

lineWidth.addEventListener("change",LineWidth);
color.addEventListener("change",changeColor);

colorOptions.forEach((color) =>
    color.addEventListener("click",onClickchangeColor));

/* 마우스를 움직일 때 선 그리기
function drawline(event){
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.strokeStyle = colors[Math.floor(Math.random()*colors.length)];
    ctx.stroke();
}

canvas.addEventListener("mousemove",drawline);*/


/* 클릭할 떄 선 그리기
function drawline(event){
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.strokeStyle = colors[Math.floor(Math.random()*colors.length)];
    ctx.stroke();
}

canvas.addEventListener("click",drawline); */
