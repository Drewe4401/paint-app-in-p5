var brush;

function setup() {
  createCanvas(windowWidth, windowHeight);
  brush = color(50);
}

function draw() {
  if (mouseIsPressed) {
    if (mouseX <= 22) {
      if (mouseY <= 20) {
        brush = color(255, 0, 0);
      } else if (mouseY <= 40) {
        brush = color(255, 165, 0);
      } else if (mouseY <= 60) {
        brush = color(255, 255, 0);
      } else if (mouseY <= 80) {
        brush = color(144, 238, 144);
      } else if (mouseY <= 100) {
        brush = color(0, 204, 255);
      } else if (mouseY <= 120) {
        brush = color(0, 0, 255);
      } else if (mouseY <= 140) {
        brush = color(255, 0, 255);
      } else if (mouseY <= 160) {
        brush = color(101, 67, 33);
      } else if (mouseY <= 180) {
        brush = color(255);
      } else if (mouseY <= 200) {
        brush = color(0);
      } else if (mouseY <= 220) {
        background(255);
      }
    }
    stroke(brush);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  strokeWeight(1);
  stroke(255);
  fill(255, 0, 0); //red
  rect(2, 0, 20, 20);
  fill(255, 165, 0); //orange
  rect(2, 20, 20, 20);
  fill(255, 255, 0); //yellow
  rect(2, 40, 20, 20);
  fill(144, 238, 144); //green
  rect(2, 60, 20, 20);
  fill(0, 204, 255); // light blue
  rect(2, 80, 20, 20);
  fill(0, 0, 255); //blue
  rect(2, 100, 20, 20);
  fill(255, 0, 255); //magenta
  rect(2, 120, 20, 20);
  fill(101, 67, 33); //brown
  rect(2, 140, 20, 20);
  fill(255); //white
  rect(2, 160, 20, 20);
  fill(0); //black
  rect(2, 180, 20, 20);

  // Erase button
  fill(200);
  rect(2, 220, 20, 20);
  fill(0);
  textSize(12);
  text('E', 6, 234);
}
