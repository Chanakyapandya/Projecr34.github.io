class Pendulum {

    constructor(x,y,r){
    
    var options = {
    
    restitution : 1,
    friction : 0,
    frictionAir : 0.0,
    inertia : Infinity,
    slop: 1
    
    
    }
    
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    World.add(world,this.body)
    
    
    
    
    }
    
    display(){
    
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push()
    translate(pos.x,pos.y);
    rotate(angle);
    stroke("blue");
    strokeWeight(5);
    ellipse(0,0,this.r,this.r);
    
    pop();
    
    
    
    
    
    }
    
    }