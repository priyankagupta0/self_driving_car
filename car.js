
class Car {
    // constructor is a special method of a class for creating and initializing an object instance of that class
    //these are the properties of the car
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed=0;
        this.accelerations=0.2;
        this.maxspeed=3;
        this.friction=0.02;

        this.angle=0;
        this.controls = new Controls();
    }
    // => means event here is function. basically function(event), but by doing this, 'this' stops reffering to the constructor

    update(){
        if(this.controls.forward){
            this.speed+=this.accelerations;
        }
        if (this.controls.reverse) {
            this.speed-=this.accelerations;
        }
        if (this.speed>this.maxspeed){
            this.y=this.maxspeed;
        } 
        if(this.speed<-this.maxspeed/2){
            this.speed=-this.maxspeed/2;
        }
        if(this.speed>0){
            this.speed-=this.friction;
        }
        if(this.speed<0){
            this.speed+=this.friction;
        }

        if(Math.abs(this.speed)<this.friction){
            this.speed=0;
        }
        this.y-=this.speed;
        // left and right controls.

        if(this.controls.left){
            this.angle-=0.03;
        }
        if(this.controls.right){
            this.angle+=0.03;
        }
    }

    draw(ctx) {
        // rotation for angle
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle)
        ctx.beginPath();
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );
        ctx.fill();
        ctx.restore(); 
    }

}