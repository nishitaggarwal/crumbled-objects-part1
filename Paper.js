class Paper{
    constructor(x, y, width, height, angle) {
        var options = {

           'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       this.image = loadImage("5crushedpaper.jpg");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
     //   this.body.position.x = mouseX;

     if(this.body.x === 620){
     this.body.visible = false
     }
       //  this.body.position.y = mouseY;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}