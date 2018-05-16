class Package {
  constructor(){
    this.width = 30;
    this.height = this.width;
    this.x = width/2;
    this.y = (height/2)-this.height/2;
    this.speed = 1;
    this.direction = -1;
  }
  
  show(){
    fill(255);
    rect(this.x, this.y, this.width, this.height);
    
    this.x += this.speed * this.direction;
  }
}