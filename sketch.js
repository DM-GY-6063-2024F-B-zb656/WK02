function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 10, 120);

  fill(10, 255, 255);
  strokeWeight(4);
  stroke("#1727e8")
  rect(10, 10, 400, 300, 0, 40);

  fill(300, 300, 50);
  ellipse(450, 350, 50);

  push();
  translate(440,395);
  rotate(15);
  rect(0, 0, 20);
  pop();

  ellipse(525, 425, 50);
  rect(415, 294, 20);
  rect(510, 335, 20);

  let rectX = 100;
  let rectY = 600;
  let rectD = 100;

  fill(255,60,60);
  rect(rectX, rectY, rectD);
  fill(10,255,10);
  ellipse(rectX + rectD/2, rectY + rectD/2, rectD);

  ellipse(windowWidth/2, windowHeight/2, 100);
}

function draw() {
}
