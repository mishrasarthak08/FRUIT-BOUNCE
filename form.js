class Form{
    constructor(){
        this.play = createButton("PLAY");
        this.currency = createElement("h3");
    }
    display(){
         this.play.position(400,250); 
        this.currency.html("stars : "+stars);
        this.currency.position(700,50);
        
        this.play.mousePressed(()=>{
            gamestate = 2;
        
            this.play.hide();
            
        });
    }
}