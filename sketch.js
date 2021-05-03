
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinobj;
var paperobj;
var groundobj;

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustbinobj = new Dustbin(1200, 650);
	paperobj = new Paper(200, 450, 40);
	groundobj = new ground(width/2, 670, width, 20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbinobj.display();
  paperobj.display();
  groundobj.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(paperobj.body, paperobj.body.position,{x:85, y:-85})
	}
}






