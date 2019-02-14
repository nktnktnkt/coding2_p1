let counter = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(6);
}

function draw() {
	background(255);
	Moon(width/2, height/2, 200, 0, 30);
	Moon(width/4, height/4, 100, 30, 30);
	Moon(width/1.25, height/1.25, 50, -10, 30);
}

function Moon(posX, posY, scale, rotation, phases) {
	push();
	translate(posX, posY);
	rotate(radians(rotation));
	
	let increment = 360/phases;
	counter = counter + increment;
	
	let cycle = radians(counter % 360);
	if(cycle < radians(90)){
		orbit = false;
	}else if(cycle > radians(270)){
		orbit = false;
	}else{
		orbit = true;
	}	
	
	//display orbiter behind
	if(orbit == true){
	orbiter(cycle, scale, 255, true);
	}
	
	//draw pulsating circles
	noStroke();
	for(let i = 5; i > 0; i--){
		fill(45*i, 45*i);
		ellipse(0,0,abs(cos(radians(counter + (i*i*i) % 360))* ((scale*2) - (i*i))));
		
	}
	
	//draw central circle
	fill(0);
	ellipse(0,0,scale,scale);
	
	
	//display orbiter in front
	if(orbit == false){
	orbiter(cycle, scale, 255, true);
	}
	
	orbiter(cycle,scale/2,0, false);
	pop();
	

 }
 
 //draw orbiter
 function orbiter(cyc, scale, color, on) {
	stroke(5);
	fill(color);
	beginShape();
	vertex(0,-scale);
	bezierVertex(sin(cyc)*(scale*1.35), -scale, sin(cyc)*(scale*1.35), scale, 0, scale);
	endShape(CLOSE);
	if(on == true){
			ellipse(sin(cyc)*(scale*1.35), 0, scale*.1,scale*.1);
	}
 }
 
  function windowResized() {
 	resizeCanvas(windowWidth, windowHeight);
 }