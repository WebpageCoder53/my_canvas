canvas = document.getElementById("myCanvas");
color = "red";
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);
canvas.addEventListener("mouseleave", my_mouseleave);
canvas.addEventListener("mouseup", my_mouseup);
canvas.addEventListener("mousemove", my_mousemove);

function my_mousedown(e) {
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;

    mouseEvent="mousedown";
}

function my_mouseleave(e) {
    mouseEvent="mouseleave";
}

function my_mouseup(e) {
    mouseEvent="mouseup";
}

function my_mousemove(e) {
    current_mouseX = e.clientX - canvas.offsetLeft;
    current_mouseY = e.clientY - canvas.offsetTop;
    
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y:");
        console.log(last_mouseX + ", " + last_mouseY);
        ctx.moveTo(last_mouseX, last_mouseY);

        console.log("Current position of x and y:");
        console.log(current_mouseX + ", " + current_mouseY);
        ctx.lineTo(current_mouseX, current_mouseY);
        ctx.stroke();
    }
    last_mouseX = current_mouseX;
    last_mouseY = current_mouseY;
}


function circle(mouse_x, mouse_y) {
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
ctx.stroke();

}