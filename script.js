const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let a = new Vector(100,400);
let b = new Vector(500,100);
let c = new Vector(100,400);

let vel = new Vector(0,0);

let A = new Poi(a.dx, a.dy, 10);
let B = new Poi(b.dx, b.dy, 10);
let C = new Poi(c.dx, c.dy, 10);


function loop(){
  //requestAnimationFrame(loop);
  context.clearRect(0,0,800,450);
  C.setToVector(c);
  vel.difVector(c,b);

  vel.r = 1;
  c.add(vel);
  console.log(c);

  A.draw();
  B.draw();
  C.draw();

  a.draw(context,A.x,A.y,1);
  b.draw(context,B.x,B.y,1);


  /*if(C.distance(B)<2){
    vel.r = 1;
  }else{
    vel.draw(context,C.x,C.y,50);
  }*/
}

loop();
