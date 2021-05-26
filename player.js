class player{
    constructor(x,y){
        var options ={
            isStatic: true
    }
this.body = Bodies.rectangle(x,y,20,20,options);
this.w = 20;
this.h = 20;
World.add(world,this.body);
//this.image = loadImage("")
    }
   display(){
   rectMode(CENTER);
   var pos = this.body.position;
   push();
   translate(pos.x, pos.y);
   rotate(this.body.angle)
   rect(0, 0, this.w, this.h)
   pop();
   } 
}
