var wall, bullet;
var speed,weight,thickness;

function setup() {
  createCanvas(1200,1200);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  wall=createSprite(1100, 200, thickness, 100);
  wall.shapeColor="blue";
 

  bullet=createSprite(50,200,40,20);
  bullet.shapeColor="purple";
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  console.log(thickness);
  if (hasCollided(bullet,wall)){
      bullet.velocityX=0;
      var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
      console.log(damage);

      if (damage>=10){
        wall.shapeColor="red";
      }
      else {
        wall.shapecolor="green";
      }
  }

  drawSprites();
}
function hasCollided(ibullet,iwall){
  var bulletRightEdge=ibullet.x+ibullet.width;
  var wallLeftEdge=iwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}