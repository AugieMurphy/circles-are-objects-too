// SVG Container
var svgc = document.getElementById("one");

<<<<<<< HEAD
// Clear button
var clearB = document.getElementById("clear");

// Circle Object
var drawCircle = function (x, y) {
    // Circle
    var c = {
        // Circle element
        circle: document.createElementNS("http://www.w3.org/2000/svg", "circle"),
        // Sets cx
        cx: function () {
            this.circle.setAttributeNS(null, "cx", x)
        },
        // Sets cy
        cy: function () {
            this.circle.setAttributeNS(null, "cy", y)
        },
        // Sets radius
        radius: function () {
            this.circle.setAttributeNS(null, "r", 10)
        },
        // Sets fill
        black: function () {
            this.circle.setAttributeNS(null, "fill", "black");
        },
        // Calls the above
        setup: function () {
            this.cx();
            this.cy();
            this.radius();
            this.black();
            this.circle.addEventListener('click', this.mods, true);
        },
        // If the color is black, change color. Else remove and add a circle to a random location
        mods: function (e) {
            if (this.getAttributeNS(null, "fill") == "black") {
                this.setAttributeNS(null, "fill", genRanColor());
            } else {
                svgc.removeChild(this);
                rX = Math.random() * svgc.getAttribute("width");
                rY = Math.random() * svgc.getAttribute("height");
                var newC = drawCircle(rX, rY);
                svgc.appendChild(newC.circle);
            }
            e.stopPropagation();
        }
    };
    c.setup();
=======
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
>>>>>>> b5f8d39a53264d9d35f6ce05f3f9f9b70640db70
    return c;
};

// Generates a random hexcode color
var genRanColor = function () {
    var colorgen = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    return colorgen;
};

// SVG Container callback function
var clicky = function (e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
<<<<<<< HEAD
    var c = drawCircle(mouseX, mouseY);
=======
    var c = drawCircle(mouseX,mouseY,e);
    console.log(c.circle);
>>>>>>> b5f8d39a53264d9d35f6ce05f3f9f9b70640db70
    svgc.appendChild(c.circle);
};

// Clear button callback function
var clearSVG = function () {
    while (svgc.firstChild) {
        svgc.removeChild(svgc.firstChild);
    }
};

svgc.addEventListener("click", clicky);
clearB.addEventListener("click", clearSVG);
