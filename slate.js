var esvg = document.getElementById("vimage");
var clear = document.getElementById("clear");


function erase(event) {
    ctx.clearRect(0, 0, 800, 800); //clear entire canvas field
    ctx.closePath();
    ctx.beginPath();
}

function circle(event) {
    var x = event.offsetX;     // Get the horizontal coordinate
    var y = event.offsetY;     // Get the vertical coordinate
    
    /*ctx.lineTo(x,y);
    ctx.moveTo(x+10,y);
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.moveTo(x,y);
    ctx.fill();
    ctx.stroke();*/
    <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx","200");
    c.setAttribute("cy","200");
    c.setAttribute("r","10");
    c.setAttribute("fill","#00f0fa");
    esvg.appendChild(c);
}

clear.addEventListener("click", erase);
esvg.addEventListener("click", circle);


