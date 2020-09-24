class Box{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            density:0.4,
            friction:0.3,
        }
        this.body=Bodies.rectangle(x,y,40,40,options);
        this.width=40;
        this.height=40;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
       // push();
       // translate(this.body.position.x,this.body.position.y);
       // angleMode(RADIANS);
       // rotate(this.body.angle);
     
 
     strokeWeight(3);
     fill("blue");
     rectMode(CENTER);
     rect(pos.x,pos.y,this.width,this.height);
    // pop();
    }
 
 
 }