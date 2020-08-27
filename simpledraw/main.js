function setup() {
  createCanvas(1300, 700);
  angleMode(DEGREES);
  background(127);
}

// returns a color for each value of the 2d plane
function get_color(x, y) {
    // you can choose the function for each component
    var r = x * 255 / width;
    var g = y * 255 / height;
    var b = (x+y) * 255 / (width+height)^2;
    return color(r, g, b);
}

function draw() {

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX;// - width / 2;
    let my = mouseY;// - height / 2;
    let pmx = pmouseX;// - width / 2;
    let pmy = pmouseY;// - height / 2;

    if (mouseIsPressed) {
        let sw = 20;
        strokeWeight(sw);
        let c = get_color(mx, my);
        stroke(c);
        line(mx, my, pmx, pmy);
    }
  }
}
