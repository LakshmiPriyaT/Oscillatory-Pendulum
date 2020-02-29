class Bob{
    constructor(x,y,radius){
        var options={
            //'force': {x: 2, y: 0},
            'density': 0.01,
            'frictionAir': 0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.width = radius;
        this.height = radius;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        fill("orange");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.width, this.height);
    }
}