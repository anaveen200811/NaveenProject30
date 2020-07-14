class Block {
  constructor(x, y, width, height,angle) {
    var options = {
        'restitution':0.4,
        'friction':0.9,
         //'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.visiblity = 255;
    this.height = height;
    this.x=x;
    this.y = y;
    World.add(world,this.body);
  }
  display(){
    if(this.body.speed<3) {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }else{
     World.remove(world,this.body);
     push();
     this.visiblity = this.visiblity-5;
     tint(255,this.visiblity);
   // image(this.image,this.body.position.x,this.body.position.y, width, height);
     rect(0, 0, this.width, this.height);
     pop();
    }
  }
};
