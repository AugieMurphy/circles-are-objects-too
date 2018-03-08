var svgc = document.getElementById("one");

var drawCircle = function(x,y){
    var c = {circle: document.createElementNS("http://www.w3.org/2000/svg", "circle"),
	     cx: function(){this.circle.setAttribute("cx",x)},
	     cy: function(){this.circle.setAttribute("cy",y)},
	     radius: function(){this.circle.setAttribute("r",10)}
	    };
    return c;
}

var clicky = function(e){
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    var c = drawCircle(mouseX,mouseY);
    c.cx();
    c.cy();
    c.radius();
    svgc.appendChild(c.circle);
}

svgc.addEventListener("click",clicky);
