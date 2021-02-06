const mw = Matter.World;
const me = Matter.Engine;
const mb = Matter.Bodies;

var engine, world;
var g;
var b;

function setup() {
  createCanvas(400,400);
  engine = me.create();
  world = engine.world;
  var options = {
    isStatic:true
  }
  g = mb.rectangle(0, 390, 400, 20, options); 
  mw.add(world, g);
 

  var option = {
    restitution:1.5
  }
  b = mb.circle(200, 200, 20, option);
  mw.add(world, b);

}
  

function draw() {
  background("orange");
  me.update(engine);  
  rect(g.position.x, g.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(b.position.x, b.position.y, 20, 20);
  //rectMode(CENTER);
  //rect(200, 200, 90, 50);
  drawSprites();
}



