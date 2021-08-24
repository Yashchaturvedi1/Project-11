var ship, shipImg1
var sea , seaImg1

function preload(){
seaImg = loadImage("sea.png");

shipImg1 = loadAnimation("ship-1.png", "ship-2.png","ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
 
  //creating a sea sprite
  sea = createSprite(300,150,400,20);
  sea.addImage("sea", seaImg);
  sea.x = sea.width /2;
  sea.velocityX = -4;
  sea.scale=1;
// creating a ship sprite
  ship = createSprite(100,300,50,50);
  ship.addAnimation("ship", shipImg1);
  ship.scale= 0.1;
}

function draw() {
  background(220);
 //code to reset the background
 if (sea.x < 0) {
   sea.x = sea.width /2;
 }

 
  drawSprites();
}