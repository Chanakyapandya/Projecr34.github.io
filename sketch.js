
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

//var engine;
//var world;
//var canvas;
var mConstraint;

function preload()
{
	
}

function setup() {
	



  var canvas = createCanvas(windowWidth/2,windowHeight/1.5);

  engine = Engine.create();
  world = engine.World;
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  
let options = {

mouse: canvasmouse

}


  mConstraint = MouseConstraint.create(engine,options);
World.add(world,mConstraint);





//create bodies 

pendulum = new Pendulum(200,300,50);

pendulum2 = new Pendulum(260,300,50);


pendulum3= new Pendulum(320,300,50);


pendulum4 = new Pendulum(380,300,50);


pendulum5 = new Pendulum(440,300,50);


//ropes
rope1 = new Sling(pendulum.body,{x:200,y:200});
rope2 = new Sling(pendulum.body,{x:260,y:200});
rope3 = new Sling(pendulum.body,{x:320,y:200});
rope4 = new Sling(pendulum.body,{x:380,y:200});
rope5 = new Sling(pendulum.body,{x:440,y:200});

}

function draw(){
background("black");

Engine.update(engine);


pendulum.display();
pendulum2.display();
pendulum3.display();
pendulum4.display();
pendulum5.display();



rope1.dislay();
rope2.dislay();
rope3.dislay();
rope4.dislay();
rope5.dislay();


}


function mouseDragged(){

Matter.Body.setPosition(pendulum.body,{x:mouseX,y:mouseY});


}