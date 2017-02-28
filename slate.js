var esvg = document.getElementById("vimage");
var clear = document.getElementById("clear");


function erase(event) {
    while (esvg.lastChild) {
	esvg.removeChild(esvg.lastChild);
    }
    prevX = -1;
}
var prevX = -1;
var prevY = -1;

function circle(event) {
    var x = event.offsetX;     // Get the horizontal coordinate
    var y = event.offsetY;     // Get the vertical coordinate
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    var d = document.createElementNS("http://www.w3.org/2000/svg","line");
    if (prevX < 0){
	c.setAttribute("cx",x);
	c.setAttribute("cy",y);
	c.setAttribute("r","10");
	c.setAttribute("fill","#00f0fa");
	prevX = x;
	prevY = y;
	esvg.appendChild(c);
    }
    else {
	c.setAttribute("cx",x);
	c.setAttribute("cy",y);
	c.setAttribute("r","10");
	c.setAttribute("fill","#00f0fa");
	d.setAttribute("x1",prevX);
	d.setAttribute("y1",prevY);
	d.setAttribute("x2",x);
	d.setAttribute("y2",y);
	d.setAttribute("stroke","black");
	prevX = x;
	prevY = y;
	esvg.appendChild(c);
	esvg.appendChild(d);
    }

}

clear.addEventListener("click", erase);
esvg.addEventListener("click", circle);


