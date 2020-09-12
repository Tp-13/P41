class Umbrella{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("images/UmbrellaBoy.png");
        World.add(world, this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    }
}