const World = Matter.World    //Universe
const Bodies = Matter.Bodies  //sun,moon,solar systems, planets, etc
const Engine = Matter.Engine  //Rules

var world, objects, engine



function setup() {
  createCanvas(400,400);
  
  engine = Engine.create()        //Creating my engine
  world = engine.world; 

  var options = {
    isStatic:false
  }

  objects = Bodies.rectangle(50,100,60,60, options);
  World.add(world,objects)

  var option = {
    isStatic:true
  }
  
  ground = Bodies.rectangle(200,390,400,1, option);
  World.add(world,ground)


  console.log(objects.position.x);
}

function draw() {
  background("yellow");
  Engine.update(engine);
  rectMode(CENTER)  
  rect(objects.position.x,objects.position.y,50,50)
  rect(ground.position.x, ground.position.y, 400, 1)
  drawSprites();
}



