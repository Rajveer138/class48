var enemy=[];
var boy;
var bullet = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
boy = new Boy();
for(var i = 0;i<10;i++){
   enemy.push(new Enemy())
}
   

}
function keyPressed(){
  if(keyCode===68){
    boy.setRotation(0.1);
  }else if(keyCode===65){
    boy.setRotation(-0.1);
  }
  else if(keyCode===32){
     bullet.push( new Bullet(boy.pos,boy.heading));
    
  }
}

function draw() {
  background(0);  
  //boy.pos.x = mouseX;
  //boy.pos.y = mouseY;
for(var j = 0;j<bullet.length;j++){
  bullet[j].display();
  bullet[j].fire();
}

  for(var j=0;j<enemy.length;j++){
    enemy[j].display();
    enemy[j].update();
    enemy[j].edges();
  }
  //console.log(boy);
  /*if(frameCount%60===0){
    var enemy = createSprite(random(0,windowWidth),random(0,windowHeight),10,10);
    enemy.velocityX=-2;
    enemy.velocityY=-5;
    enemy.shapeColor = "white";
   
  }*/

  boy.display();
  boy.turn();
 
  drawSprites();
}


function keyReleased(){
  boy.setRotation(0);
}
//function mouseMoved(){
  //console.log("inside function")
  //boy.turn(0.01);
  
//}
