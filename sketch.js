var mario;
var luigi;
var wario;
var toad;

var current_model;
const MARIO = 0;
const LUIGI = 1;
const WARIO = 2;
const TOAD = 3;

var rot_pos;

function preload(){
	mario = loadModel('assets/mario.obj');
	luigi = loadModel('assets/Luigi.obj')
	wario = loadModel('assets/wario.obj')
	toad = loadModel('assets/Toad.obj')
}

function setup(){
	createCanvas(768, 768, WEBGL);
	rot_pos = 0;
	current_model = 0;
}

function draw(){
	background(0);
	lights();
	if(keyIsDown(LEFT_ARROW)){
		++rot_pos;
	}
	if(keyIsDown(RIGHT_ARROW)){
		--rot_pos;
	}

	camera(cos(rot_pos/10)*500, -20, sin(rot_pos/10)*500,//pos
	       0, -20, 0,//look at
               0, 1, 0);//up vector

	switch(current_model){
		case MARIO:
			draw_metal_model(mario, 0, 100, 0, 1, -1, 1);
			break;
		case LUIGI:
			draw_metal_model(luigi, 0, 100, 0, 6, -6, 6);
			break;
		case WARIO:
			draw_metal_model(wario, 0, 100, 0, 70, -70, 70);
			break;
		case TOAD:
			draw_metal_model(toad, 0, 100, 0, 1, -1, 1);
			break;
				
	}
	draw_glass_case();
}


function draw_metal_model(obj, x, y, z, sx, sy, sz){
	push();
		noStroke();
		let brit= 160;
		specularMaterial(brit, brit, brit);
		shininess(60);
		translate(x, y, z);
		scale(sx, sy, sz);
		model(obj);
	pop();
}

function draw_glass_case(){
	push();
		noStroke();
		specularMaterial(120, 120, 255, 80);
		cylinder(150, 250);
		translate(0, -250/2, 0);
		sphere(150);
	pop();

	push();
		noStroke();
		fill(101, 67, 33);//brown
		translate(0, 250/2, 0);
		cylinder(200, 40);
	pop();
}

function keyPressed(){
	switch(key){
		case '1':
			current_model = MARIO;
			break;	
		case '2':
			current_model = LUIGI;
			break;	
		case '3':
			current_model = WARIO;
			break;	
		case '4':
			current_model = TOAD;
			break;	
	}
}
