let player;
let cbX = 300;
let speed = 1;
let direction = -1; 
let conveyorStroke;
let packages = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	player = new Player();
	conveyorStroke = color(214,214,70);
	packages.push(new Package());
	packages.push(new Package());
}

function draw() {
	background(52,16,59);
	// Conveyor
	conveyor();
	packages.forEach((package, i)=>{
		package.show();
		if(package.x < package.width*i+1){
			package.speed = 0;
		}
	});
	
	
	player.show();
}

function conveyor(){
	
	push();
	
	fill(33,10,38);
	rect(0,(height/2)-40,width,80);
	fill(28);
	rect(0,(height/2)-25,width,50);
	stroke(conveyorStroke);
	strokeWeight(1);
	line(cbX,(height/2)-25,cbX,((height/2)-25)+50);
	
	if(cbX < -5){
		direction = 1;
		conveyorStroke = color(28);
	} else if(cbX > width+5){
		direction = -1;
		conveyorStroke = color(214,214,70);
	}

	cbX += speed*direction;
	pop();
}