class Background{
    constructor(x , y, width, height){
 this.body = Bodies.rectangle(x,y,width,height);
 this.width = width;
 this.height = height;
 this.play = createButton("PLAY");
 this.image = loadImage("IMAGES/Background.png");
 World.add(world,this.body);
    }
    display(){
var pos = this.body.position;
push();
imageMode(CENTER);
image(this.image, 400, 300, this.width, this.height);
pop();

    }
}