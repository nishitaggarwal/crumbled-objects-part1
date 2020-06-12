const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var paper,slingshot
var box1,box2,box3
var d1,d2,d3
var ground ;



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  // paper = new Paper(200,100,30,30)

 

 // d1  =  new Box(600,200,10,50)
 // d2  =  new Box(640,225,80,10)
  //d3  =  new Box(680,200,10,50)
 // paper  =  createSprite(200,100,30,30)

  //slingShot = new SlingShot(paper.body,{x:200,y:100})
  ground = new Ground(400,230,800,1)



paper1 = createSprite(200,200,20,20)
d1 = createSprite(600,200,10,50)
d2 = createSprite(640,225,80,10)
d3 = createSprite(680,200,10,50)

paper1.shapeColor = "red";

d1.shapeColor = "green"
d2.shapeColor = "green"

d3.shapeColor = "green"


}

function draw() {
  background(255,255,255);
  Engine.update(engine);


 // slingShot.display();
 // paper.display();


//d1.display();
//d2.display();
//d3.display();


 //   if(paper1.isTouching("d1")){
  //  paper1.velocityX = 0
  //  paper1.velocityY = 0
    //}


//     if(paper1.isTouching("d2")){
 //       paper1.velocityX = 0
 //       paper1.velocityY = 0
   //     }

paper1.bounceOff(d1)


textSize(10)
//fill(red)

text("pls clean the area",500,150)


paper1.collide(d2)

text ("hurrah !! you are the cleanest person in the whole world",200,100)


paper1.bounceOff(d3)
 
text("press the arrows to drag the waste in the bin",600,100)

  
 // if(paper1.isTouching("d3")){
 //   paper1.velocityX = 0
  //  paper1.velocityY = 0
   // }
      
ground.display();

  drawSprites();
}

//   function mouseDragged(){

 // Matter.Body.setPosition(paper.body,{ x:mouseX,y:mouseY})
  
  
  //}
  
function mouseReleased(){

//  slingShot.fly()
 // paper.velocityX = 2
  //paper.velocityY = -2
  
  }

  
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
   //  Matter.Body.setStatic(packageBody,false);
  // slingshot.attach(bird.body);

  paper1.velocityX = 0
  paper1.velocityY =  2
   }

   if (keyCode === LEFT_ARROW) {
    //  Matter.Body.setStatic(packageBody,false);
   // slingshot.attach(bird.body);
   paper1.velocityX = -2
   paper1.velocityY = 0
    }
    if (keyCode === UP_ARROW) {
      //  Matter.Body.setStatic(packageBody,false);
     // slingshot.attach(bird.body);
     paper1.velocityX = 0
     paper1.velocityY = -2
      }
      if (keyCode === RIGHT_ARROW) {
        //  Matter.Body.setStatic(packageBody,false);
       // slingshot.attach(bird.body);
       paper1.velocityX = 2
       paper1.velocityY = 0
        }
 }
