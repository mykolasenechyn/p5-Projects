class Player {
	constructor(){
		this.width = 40;
		this.height = this.width;
		this.x = (width/2) - this.width/2;
		this.y = height - (height/4);
	}
	
	show(){
		noStroke();
		fill(254,64,64);
		rect(this.x, this.y, this.width, this.height);
	}
}