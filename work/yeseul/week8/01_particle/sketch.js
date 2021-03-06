var particles = [];
var numOfParticles = 100;
var currentParticleIndex = 0;

function setup() {
  createCanvas(900, 600);
  colorMode (HSB, 255);
  noStroke();

  for (var i = 0; i < numOfParticles; i++){
    particles [i] = new Particle(-100, -100, 300);
  }
}


function draw() {
  background(0);
  currentParticleIndex++;
  if (currentParticleIndex >= numOfParticles) {
    currentParticleIndex = 0;
  }
  particles[currentParticleIndex].update(mouseX, mouseY);
  for (var i = 0; i <numOfParticles; i++) {
    fill(i/numOfParticles*255, 150, 250);
    //modulo
    var index = (currentParticleIndex + i) % numOfParticles;
    particles[index].draw();
  }
}
