const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground;
var ball
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }
  var ball_options={
restitution:1.0
  }
  ground=Bodies.rectangle(200,390,400,10,options);
  World.add(world,ground);
  ball=Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipse(ball.position.x,ball.position.y,20,20);

}