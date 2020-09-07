class Boy {
    constructor() {
      

      this.pos = createVector(width/2,height/2);
      this.side = 20;
      this.heading = 0;
      this.rotation = 0;
      //this.velocity = p5.Vector.fromAngle(angle);
    } 
    display(){
      ///this.pos.x = mouseX;
      ///this.pos.y = mouseY;
      push();
      noFill();
      stroke(255);
      translate(this.pos.x,this.pos.y);
      angleMode(RADIANS);
      rotate(this.heading+PI/2);
      triangle(this.side,this.side,0,-this.side,-this.side,this.side);
      pop();
    }
    turn(){     
      this.heading+=this.rotation;
     // this.heading+=angle;
    }
    setRotation(angle){
      this.rotation = angle;
    }
    
  }