class map{
    constructor(x,y,w,h){
        var options ={
            isStatic: true
    }
this.body = Bodies.rectangle(x,y,w,h,options);
this.w = w;
this.h = h;
World.add(world,this.body);
//this.image = loadImage("")
    }
   display(){
   rectMode(CENTER);
   var pos = this.body.position;
   rect(pos.x, pos.y, this.w, this.h)
   } 
}