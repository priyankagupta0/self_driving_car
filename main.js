// canvas is our road
const canvas= document.getElementById("myCanvas");

canvas.height= window.innerHeight;
canvas.width=200;

// now lets assume we have a car and to show it on the road we need to have a drawing context.
const ctx = canvas.getContext("2d");
const car=new Car(100,100,30,50); //x,y,width,height
car.draw(ctx);