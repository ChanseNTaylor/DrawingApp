"use strict";
const ctx = document.getElementsByClassName("canvas")[0].getContext("2d");

const clearToColor = (colorStr = "white") =>
{
    ctx.fillStyle = colorStr;
    ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
}

clearToColor();
