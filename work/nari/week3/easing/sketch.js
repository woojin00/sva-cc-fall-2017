var circleX;
var circleY;
var targetX;
var targetY;

function setup() {
  createCanvas(600, 400);
  circleX = width/2;
  circleY = height/2;
  targetX = circleX;
  targetY = circleY;
}


function draw() {
  background(200);

  var circleSize = 50;
  fill(40,50,200);

  if (mouseIsPressed) {
    targetX = mouseX;
    targetY = mouseY;
  }

  var xDiff = targetX - circleX;
  var yDiff = targetY - circleY;
  var speed = 0.6;

  circleX = circleX + xDiff * speed;
  circleY = targetY + yDiff * speed;

  ellipse(circleX, circleY, circleSize, circleSize);
}
