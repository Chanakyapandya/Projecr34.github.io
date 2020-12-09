

class Sling {

    constructor(bodyA,pointB){
    
    var options = {
    
    bodyA : bodyA,
    pointB : pointB,
    length : 220,
    angularStiffness : 1,
    stiffness : 1
    
    
    }
    
    this.sling = Constraint.create(options);
    this.pointB = pointB;
    this.pointX = bodyA.x;
    this.pointY = bodyA.y - 250;
    World.add(world,this.sling)
    
    
    
    
    }
    
    display(){
    
    var pointA = this.sling.pointA.position;
    var pointB = this.pointB;
    
    push()
    strokeWeight(3);
    line(pointB.x,pointB.y,pointA.x,pointA.y);
    
    pop();
    
    
    
    
    
    }
    
    }
    
    
    