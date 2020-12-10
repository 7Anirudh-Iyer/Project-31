class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.img = loadImage("sprites/smoke.png")

    this.arr = []
  }

  display() {
    super.display();

    if(this.body.velocity.x>10){
    var pos = [this.body.position.x,this.body.position.y]
    this.arr.push(pos)

    }
    for(var i=0;i<this.arr.length;i=i+1){
      ellipse(this.arr[i][0],this.arr[i][1],10)
  
  }

      
  }
}
