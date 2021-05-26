const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var o1;
var p1;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  o1 = new map(100,100,50,25);
  p1 = new player(100,50);
  
}

function draw() {
  background("green");  
  Engine.update(engine);
  o1.display();
  p1.display();
  
}