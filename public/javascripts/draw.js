"use strict";
const canvas = document.getElementsByClassName("canvas")[0];

if(canvas.getContext("2d"))
{
    let x;
    let y;
    let drag = false;
    const ctx = canvas.getContext("2d");

    const clearToColor = (colorStr = "white") =>
    {
        ctx.fillStyle = colorStr;
        ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    }

    const resizeCanvas = (width, height) =>
    {
        canvas.width = width;
        canvas.height = height;
    }

    canvas.addEventListener("mousedown", () =>
    {
        drag = true;

        ctx.beginPath();
        ctx.moveTo(x, y);
    });

    canvas.addEventListener("mousemove", evt =>
    {
        y = evt.y - canvas.offsetTop;
        x = evt.x - canvas.offsetLeft;

        if(drag)
        {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    });

    canvas.addEventListener("mouseup", evt => { drag = false; });

    resizeCanvas(800, 500);
    clearToColor();
}
else
{
    window.alert("Your browser does not support the canvas element.");
}
