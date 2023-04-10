// canvas is our road
const canvas = document.getElementById("myCanvas");
canvas.width = 200;

// now lets assume we have a car and to show it on the road we need to have a drawing context.
const ctx = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50); //x,y,width,height
animate();

function animate() {
    car.update();
    canvas.height = window.innerHeight;

    car.draw(ctx);

    requestAnimationFrame(animate);
    // this calls the function animate again and again giving the illusion of movement.
}