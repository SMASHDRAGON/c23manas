
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
;
	//Create the Bodies Here.
dustbin= new Dustbin (1200,677);
paper= new Paper(200,450,20,20);
ground = new Ground (width/2 ,height ,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
background(0);
dustbin.display();
paper.display();
ground.display();
 

 
  drawSprites();
 
}
function keyPressed(){
if (keyCode === UP_ARROW ){
Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-30});
}

}


