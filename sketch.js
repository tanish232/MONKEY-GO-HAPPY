
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score=0;
var ground;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

createCanvas(600,200);

monkey= createSprite(50,180,20,50)
monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;  

ground= createSprite(400,200,1200,10)
ground.x=ground.width/2;

foodGroup= new Group();

obstacleGroup=new Group();
}

function draw() {

background("white");

ground.velocityX=-4;
  
if(ground.x<0){
ground.x=ground.width/2;
} 

stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate());
text("survivalTime: "+ survivalTime,100,50);
  
if(keyDown("space")&& monkey.y>161) {
monkey.velocityY =-12; 
}
  
monkey.velocityY= monkey.velocityY+0.5 ; 

food();

stones();
  
monkey.collide(ground);
  
drawSprites();
  
}

function food(){
if(frameCount%80===0){
banana = createSprite(580,50,20,20);
banana.y=Math.round(random(80,120));
banana.addImage("food image",bananaImage);
banana.scale=0.1;
banana.velocityX=-4;
banana.lifetime=200;
foodGroup.add(banana);
}
}

function stones(){
if(frameCount%300===0){
obstacle=createSprite(200,180,20,50);
obstacle.addImage("stone image",obstacleImage);
obstacle.velocityX=-4;
obstacle.scale=0.1;
obstacle.lifetime=200;
obstacleGroup.add(obstacle);
}
}





