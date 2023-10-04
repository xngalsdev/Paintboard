const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

/**
 * 집 그리기
 */

// 굵기
ctx.lineWidth = 10;

// 벽
ctx.strokeRect(75, 140, 150, 110);

// 문
ctx.fillRect(130, 190, 40, 60);

// 지붕
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();