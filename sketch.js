const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(500,800);
  engine = Engine.create();
    world = engine.world;
  ground=new Ground(250,790,500,10);
 
for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
}


 for (var j = 65; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,200));
 }

 for (var j = 40; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,260));
 }

  for (var j = 65; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,330));
 }

  for (var j = 40; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,400));
 }

}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
  fill("yellow");
  text("Score:"+score,300,160);
  drawSprites();
}