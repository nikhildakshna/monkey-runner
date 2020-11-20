
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, monkeys;
var score;

function preload(){
  
  
  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}



function setup() {
createCanvas(600,600);  
monkey = createSprite(50,500,10,10);  
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1;
g = createSprite(300,535,600,10);
FoodGroup = new Group();
monkeys = new Group(); 
obstacleGroup = new Group();
}


function draw() { 
background("");  
drawSprites();
obstacles();
bananas();  
monkey.collide(g);
monkey.velocityY = +3; 
if(keyDown("space") && monkey.y > 400){
monkey.velocityY = - 25;
monkeys.add(monkey);  
//eating bananas;
//if(foodGroup.isTouching(monkey)){
//banana.destroyEach();  
//}  

if(monkeys.isTouching(FoodGroup)){
FoodGroup.destroyEach();  
}   
} 
st = Math.ceil(frameCount/frameRate());
text("survival time:" + st,500,100);

if(monkeys.x < 0){
over();
obstacleGroup.velocityX = 0;
FoodGroup.velocityX = 0;
    
}  
}


function obstacles(){                                        
if(World.frameCount % 200 === 0){  
obstacle = createSprite(random(600,1500),500,200,200); 
obstacle.velocityX = -3;
obstacle.addImage(obstaceImage); 
obstacle.scale = 0.2;
obstacleGroup.add(obstacle);
monkeys.collide(obstacleGroup);    
}
}

function bananas(){
if(World.frameCount % 80 === 0){    
banana = createSprite(random(600,1500),random(500,400));
banana.addImage(bananaImage);
banana.velocityX = -3;
banana.scale = 0.1; 
FoodGroup.add(banana); 
}  
}

function over(){
obstacleGroup.velocityX = 0;
FoodGroup.velocityX = 0;  
}
