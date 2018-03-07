class Vector{
  constructor(dx,dy){
    this._dx = dx;
    this._dy = dy;
    this._r;
    this._angle;
  }

  get dx(){
    return this._dx;
  }

  get dy(){
    return this._dy
  }

  set dx(newDx){
    this._dx = newDx;
    this._r = Math.sqrt(this.dx*this.dx + this.dy*this.dy);
    this._angle = Math.atan2(this.dy,this.dx);
  }

  set dy(newDy){
    this._dy = newDy;
    this._r = Math.sqrt(this.dx*this.dx + this.dy*this.dy);
    this._angle = Math.atan2(this.dy,this.dx);
  }

  get r(){
     return Math.sqrt(this.dx*this.dx + this.dy*this.dy);
  }

  set r(newR){
    this._r = newR;
    this._dx = this._r*Math.cos(this._angle);
    this._dy = this.r*Math.sin(this._angle);
  }

  get angle(){
    return Math.atan2(this.dy,this.dx);
  }

  set angle(newAngel){
    this._angle = newAngel;
    this._dx = this._r*Math.cos(this._angle);
    this._dy = this.r*Math.sin(this._angle);
  }

  draw(context,x,y,scale){
    let h = 4;
    let ah = 10;
    let aw = 10;
    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(this.angle);
    context.moveTo(0,0);
    context.lineTo(0,h);
    context.lineTo(this._r*scale-aw,h);
    context.lineTo(this._r*scale-aw,ah);
    context.lineTo(this._r*scale,0);
    context.lineTo(this._r*scale-aw,-ah);
    context.lineTo(this._r*scale-aw,-h);
    context.lineTo(0,-h);
    //context.lineTo(100,0);
    context.stroke();
    context.closePath();
    context.restore();
  }

  add(vector){
    this.dx += vector.dx;
    this.dy += vector.dy;
  }

  scalairProduct(num){
    this.dx = this.dx * num;
    this.dy = this.dy * num;
  }

  sumVectors(a,b){
    this.dx = a.dx + b.dx;
    this.dy = a.dy + b.dy;
  }
  difVector(a,b){
    this.dx = b.dx - a.dx;
    this.dy = b.dy - a.dy;
  }
}
