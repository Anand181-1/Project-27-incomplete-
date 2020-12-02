
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope;
var bobDiameter = 100;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,350)
	bobObject1 = new Bob(400, 300, 50);
	rope = new Rope(bobObject1.body, roof.body, -bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  roof.display();
  bobObject1.display();
  line.display();
 
}



