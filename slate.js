var esvg = document.getElementById("vimage");
var clear = document.getElementById("clear");


function erase(event) {
    ctx.clearRect(0, 0, 800, 800); //clear entire canvas field
    ctx.closePath();
    ctx.beginPath();
}
var prevX = -1;
var prevY = -1;

function circle(event) {
    var x = event.offsetX;     // Get the horizontal coordinate
    var y = event.offsetY;     // Get the vertical coordinate
    //<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
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
	console.log(prevX);
	console.log(x);
	console.log(prevY);
	console.log(y);
	prevX = x;
	prevY = y;
	esvg.appendChild(c);
	esvg.appendChild(d);
    }

}

clear.addEventListener("click", erase);
esvg.addEventListener("click", circle);


