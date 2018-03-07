class Poi{
  constructor(x,y,r,color,label){
    this.x = x;
    this.y = y;
    this.r = r || 20;
    this.color = color || "#ff00100";
    this.label = label || "";
  }
  draw(){
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x,this.y,this.r,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.font = "30px Arial";
    context.fillText(this.label,this.x-15,this.y-25);
    context.closePath();
  }
  drag(){
    let drag = false;
    let xMouse,yMouse,dx,dy,distance;
    addEventListener('mousedown',(evt)=>{
      let rect = canvas.getBoundingClientRect();
      xMouse = evt.clientX - rect.left;
      yMouse = evt.clientY - rect.top;
      dx = xMouse - this.x;
      dy = yMouse - this.y;
      distance = Math.sqrt(dx*dx+dy*dy);
      if (distance<=this.r && !drag)
      {
        drag = true;
      }
      else
      {
        drag = false;
      }
    });

    canvas.addEventListener('mousemove',(evt)=>{
    if(drag){
        let rect = canvas.getBoundingClientRect();
        xMouse= evt.clientX - rect.left;
        yMouse = evt.clientY - rect.top;
        dx = xMouse - this.x;
        dy = yMouse - this.y;
        this.x = xMouse;
        this.y = yMouse;
      }
    });
  }
  distance(B){
    let dx =  B.x - this.x;
    let dy = B.y - this.y;
    return Math.sqrt(dx*dx + dy*dy);
  }
  setToVector(v){
    this.x = v.dx;
    this.y = v.dy;
  }
}
