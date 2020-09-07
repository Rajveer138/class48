class Bullet {
    constructor(boyPos,boyAngle) {
      this.pos = createVector(boyPos.x,boyPos.y);
      this.velocity = p5.Vector.fromAngle(boyAngle);
      this.velocity.mult(5);
    }
    display(){
      push();
      stroke(240);
      strokeWeight(2);
      point(this.pos.x,this.pos.y);
      pop();
    }
    fire(){
      this.pos.add(this.velocity);
    }
}        
  