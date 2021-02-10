class Bob  {
    constructor(x,y)   {
        var options = {
            isStatic: true,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5,
        }
        
        this.body = Bodies.circle(x,y,23,options);
        
    
        
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            fill("pink");
            ellipseMode(RADIUS);
            ellipse(0,0,40,40,);
            pop();
        }

}