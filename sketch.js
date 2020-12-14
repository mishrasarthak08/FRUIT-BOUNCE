const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var loadingpage;
var background1;
var stars = 0;
var form;
var gamestate ;
var level = 1;

function preload()
{

}

function setup() {
	createCanvas(800, 600);
gamestate = 0;

	engine = Engine.create();
	world = engine.world;

  loadingpage = new Loadingpage(800,600,800,600);
  background1 = new Background(800,600,800,600)
form = new Form();




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  if (gamestate===1){
    background1.display();
 form.display();
  }
  if (gamestate===0){
  loadingpage.display();
  
 
  }
 
  
 if (gamestate===2){
      subform = new Subform();
      subform.display();
 }
}




