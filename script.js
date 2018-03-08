var svgc = document.getElementById("one");

var drawCircle = function(x,y,e){
    var n = 0;
    var c = {
	circle: document.createElementNS("http://www.w3.org/2000/svg", "circle"),
	col: 0,
	cx: function(){
	    this.circle.setAttribute("cx",x)
	},
	cy: function(){
	    this.circle.setAttribute("cy",y)
	},
	radius: function(){
	    this.circle.setAttribute("r",10)
	},
	clear: function(e){
	    svgc.removeChild(this.circle),
	    drawCircle(Math.random()*490,Math.random()*490),
	    e.stopPropagation()
	},
	color: function(e){
	    this.setAttribute("fill","red"),
	    c.circle.addEventListener("click",this.clear)
	    e.stopPropagation()
	},
    };
    c.cx();
    c.cy();
    c.circle.addEventListener("click", c.color);
    c.radius();
    return c;
}

var clicky = function(e){
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    var c = drawCircle(mouseX,mouseY,e);
    console.log(c.circle);
    svgc.appendChild(c.circle);
}

svgc.addEventListener("click",clicky);
