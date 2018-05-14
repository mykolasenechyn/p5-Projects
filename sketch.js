let dots = [];

let isSelecting = false;

function setup() {
	createCanvas(windowWidth, windowHeight);
	dots.push(new Dot(50,50));
	dots.push(new Dot(100,50));
	dots.push(new Dot(150,50));
	dots.push(new Dot(200,50));
	dots.push(new Dot(50,100));
	dots.push(new Dot(100,100));
	dots.push(new Dot(150,100));
	dots.push(new Dot(200,100));
}

function draw() {
	background(255);
	
	dots.forEach((dot,i)=>{
		dot.show()
	});
	
}

function mousePressed(){
	dots.forEach((dot,i)=>{
		dot.select(mouseX, mouseY);
	});
}

class Dot {
	constructor(_x,_y){
		this.x = _x;
		this.y = _y;
		this.r = 20;
		this.colr = color(246,64,64);
		this.connection = false;
		this.cx = null;
		this.cy = null;
		this.selected = false;
	}
	
	show(){
		if(this.connection){
			fill(this.colr);
		} else {
			noFill();
		}
		
		strokeWeight(4);
		stroke(this.colr);
		ellipse(this.x, this.y, this.r);
		
		if(this.selected){
			line(this.x, this.y, mouseX, mouseY);
		}
		
		if(this.connection && this.cx && this.cy){
			line(this.x,this.y,this.cx, this.cy);
		}
		
	}
	
	select(_mx,_my){
		let d = dist(this.x, this.y, _mx, _my);
		
		if(!isSelecting){
			if(d < this.r-10){
				if(!this.selected){
					this.selected = true;
					isSelecting = true;
				}
			}
		} else {
			if(d < this.r-10 && this.selected == false){
				dots.forEach((dot,i)=>{
					if(dot.selected){
						dot.connect(this.x, this.y);
						dot.connection = true;
						this.connection = true;
						dot.selected = false;
						isSelecting = false;
					}
				});
			}
		}
		
	}
	
	
	connect(_otherX, _otherY){
		this.cx = _otherX;
		this.cy = _otherY;
	}
	
}