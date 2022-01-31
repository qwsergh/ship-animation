var sea ,ship ;
var Sea , ship1;

function preload(){
sea=loadImage("sea.png");
 ship=loadAnimation("ship-1.png","ship-3.png","ship-4.png") ;
 
}

function setup(){
  createCanvas(400,400);
  
  var Sea=createSprite(400,200);
  Sea.addImage(sea);
  Sea.scale=0.3;
  
  Sea.velocityX=-1;
  
var  Ship1=createSprite(100,200,40,40);
  Ship1.addAnimation("ship1",ship);
  Ship1.scale=0.3;
}

function draw() {
 background("blue");
 
  drawSprites();
}