var hasDocked=false;
function preload(){
  bg = loadImage("space.jpg")
  sc1 = loadImage("spacecraft1.png")
  sc2 = loadImage("spacecraft2.png")
  sc3= loadImage(" spacecraft3.png")
  sc4 = loadImage("spacecraft4.png")
  iss=loadImage("iss.png")
}
function setup() {
  createCanvas(600,350);
  spacecraft = createSprite(285, 240 );
  spacecraft.addImage(sc1)
  spacecraft.scale=0.15;
  iss_sprite=createSprite(330,130)
  iss_sprite.addImage(iss)
  iss_sprite.scale=0.25
}

function draw() {
  background(bg); 
  if(!hasDocked){
 spacecraft.x =spacecraft.x + random(-1,1);
  console.log(spacecraft.x)
 if(keyDown("LEFT_ARROW")){
   spacecraft.x=spacecraft.x-2;
   spacecraft.addImage(sc3)
 }
 if(keyDown("RIGHT_ARROW")){
  spacecraft.x=spacecraft.x+2;
  spacecraft.addImage(sc4)
}
if(keyDown("DOWN_ARROW")){
  spacecraft.y=spacecraft.y+2;
  spacecraft.addImage(sc1)
}
if(keyDown("UP_ARROW")){
  spacecraft.y=spacecraft.y-2;
  spacecraft.addImage(sc2)
}}
  if(spacecraft.y<=(iss_sprite.y+70) && spacecraft.x <=(iss_sprite.x-10)){
    hasDocked=true;
    textSize(25);
    fill ("white")
    text("DOCKED SUCCESSFUL",200,300)
  }
  drawSprites();
} 
