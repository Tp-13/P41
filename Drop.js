class Drop{
    constructor(x,y){
        options = {
            friction:0.1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }

    update(){}

    display(){
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius, this.radius);
    }
}