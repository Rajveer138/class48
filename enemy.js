class Enemy{
   constructor(){
      this.radius = random(10,20);
      this.pos = createVector(random(width),random(height));
      this.velocity = p5.Vector.random2D();
      this.velocity.mult(5);
   }
   display(){
    push();
    translate(this.pos.x,this.pos.y);
    stroke(225);
    noFill();
    ellipse(0,0,2*this.radius,2*this.radius);
    pop();
 }
 update(){
   this.pos.add(this.velocity);
  }
  edges(){
    if(this.pos.x>width+this.radius){
       this.pos.x = -this.radius
    }
    else if(this.pos.x<-this.radius){
       this.pos.x =width+this.radius
    }
    if(this.pos.y>height+this.radius){
      this.pos.y = -this.radius
   }
   else if(this.pos.y<-this.radius){
      this.pos.y =height+this.radius
   }
  }
}
