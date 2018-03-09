// SVG Container
var svgc = document.getElementById("one");

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
    var c = drawCircle(mouseX, mouseY);
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
