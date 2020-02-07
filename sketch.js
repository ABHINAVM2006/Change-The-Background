
var r = 0;
var g = 50;
var b=255;

function setup(){
  createCanvas(1500,1500);
   
}


function draw(){
  background(mouseY,mouseX,0);
  drawSprites();
  fill(255,200,0);
   ellipse(mouseX,mouseY,50,50);  
}