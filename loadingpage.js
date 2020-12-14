class Loadingpage{
    constructor(x , y, width, height){
 this.body = Bodies.rectangle(x,y,width,height);
 this.width = width;
 this.height = height;
 this.play = createButton("PLAY");
 this.image = loadImage("IMAGES/Gamelogo.png");
 World.add(world,this.body);
    }
    display(){
var pos = this.body.position;
push();
imageMode(CENTER);
image(this.image, 400, 300, this.width, this.height);
pop();
this.play.position(500,100); 
    this.play.mousePressed(()=>{
       gamestate = 1;
  
       this.play.hide();
       this.body.hide();
       
    
    
});
    }
}