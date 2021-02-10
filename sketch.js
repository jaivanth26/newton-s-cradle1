const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground1,bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(700,50,1400,20);
	bob1=new Bob(860,550)
	bob2=new Bob(780,550)
	bob3=new Bob(700,550)
	bob4=new Bob(620,550)
	bob5=new Bob(540,550)
	rope1=new Rope(bob1.body,ground1.body,79*2,0);
	rope2=new Rope(bob2.body,ground1.body,39*2,0);
	rope3=new Rope(bob3.body,ground1.body,-3*2,0);
	rope4=new Rope(bob4.body,ground1.body,-45*2,0);
    rope5=new Rope(bob5.body,ground1.body,-85*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-100,y:-100}); } 
} 




