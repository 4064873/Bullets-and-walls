var bullet,wall
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);
 thickness=random(22,83) 
 speed=random(223,321)
 weight=random(30,52)
 bullet = createSprite(200,200,50,10);
  wall = createSprite(1200,200,thickness,height/2);
  bullet.shapeColor = "white";
  wall.shapeColor = (80,80,80);
  bullet.debug = true;
  wall.debug= true;

}

function draw() {
  background(0);  
 bullet.velocityX = speed;
 if(hasCOllided(bullet,wall)) {
   bullet.velocityX=0;
   var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)
   if(damage>10){
     wall.shapeColor=color(255,0,0)
   }
   if(damage<10) {
     wall.shapeColor=color(0,255,0);
   }
 }
  drawSprites();
}

function hasCOllided(Lbullet, Lwall) {
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true
  }
  return false;
}