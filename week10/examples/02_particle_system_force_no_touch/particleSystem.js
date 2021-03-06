function ParticleSystem() {

  this.setup = function () {
    this.particles = [];
  }

  this.addParticle = function (x, y, amt) {
    //console.log( "adding" );
    for (var i=0; i<amt; i++) {
      var p = new Particle();
      p.setup(createVector(x, y));
      this.particles.push(p);
      var randomForce = createVector((Math.random() - 0.5), (Math.random() - 0.5));
      randomForce.mult(2.0);
      p.applyForce(randomForce);
    }

  }

  this.dontTouch = function () {
    var counter = 0;
    for (var i = 0; i<this.particles.length; i++) {
      var iP = this.particles[i];
      for (var j = this.particles.length-1; j > i; j--) {
        var jP = this.particles[j];
        var distance = iP.pos.dist(jP.pos);
        if (distance < iP.size) {
          var f1 = iP.pos.copy().sub(jP.pos).mult(0.001);
          var f2 = iP.pos.copy().sub(jP.pos).mult(-0.001);
          iP.applyForce(f1);
          jP.applyForce(f2);
          //iP.applyForce(f.mult(-1));
          //console.log( "length: " + this.particles.length + " i: " + i + " j: " + j );
          //console.log( "distance: " + distance);
        }
        //
        //counter++;
      }

    }
    //console.log("how many? " + counter);
  }

  this.draw = function () {
    //var gravity = createVector(0.0, 0.05);

    for (var i = 0; i < this.particles.length; i++) {
      var p = this.particles[i];
      if (p.isDead) {
        this.particles.splice(i, 1);
      } else {
        //p.applyForce(gravity);
        p.update();
        p.draw();

      }
    }
    this.dontTouch();
  }

}
