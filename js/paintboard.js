const canvas = document.querySelector("canvas");
//그림을 그릴 때 사용할 붓
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

/**
 * 집 그리기
 */

// Set line width
ctx.lineWidth = 10;

// Wall
ctx.strokeRect(75, 140, 150, 110);

// Door
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();