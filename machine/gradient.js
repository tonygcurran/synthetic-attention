var r, g, b, w, ralpha, balpha, galpha, wiggle1, wiggle2;
 


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  noCursor();

  createCanvas(windowWidth, windowHeight); 


ralpha = random(0,255);
galpha = random(0, 255);
balpha = random(0, 255);

wiggle1 = random(5,height/4);
  wiggle2 = random(5,height/4);
  wiggle3 = random(5,height/4);

  gx1 = random(0, width)
  gy1 = random(0, height);
  gx2 = random(0, width)
  gy2 = random(0, height);
  gx3 = random(0, width)
  gy3 = random(0, height);
  gx4 = random(0, width)
  gy4 = random(0, height);
  gx5 = random(0, width)
  gy5 = random(0, height);
  gx6 = random(0, width)
  gy6 = random(0, height);
  gx7 = random(0, width)
  gy7 = random(0, height);
  gx8 = random(0, width)
  gy8 = random(0, height);
  gx9 = random(0, width)
  gy9 = random(0, height);
  gx10 = random(0, width)
  gy10 = random(0, height);
  gx11 = random(0, width)
  gy11 = random(0, height);
  gx12 = random(0, width)
  gy12 = random(0, height);
  
  bx1 = random(0, width)
  by1 = random(0, height);
  bx2 = random(0, width)
  by2 = random(0, height);
  bx3 = random(0, width)
  by3 = random(0, height);
  bx4 = random(0, width)
  by4 = random(0, height);
  bx5 = random(0, width)
  by5 = random(0, height);
  bx6 = random(0, width)
  by6 = random(0, height);
  bx7 = random(0, width)
  by7 = random(0, height);
  bx8 = random(0, width)
  by8 = random(0, height);
  bx9 = random(0, width)
  by9 = random(0, height);
  bx10 = random(0, width)
  by10 = random(0, height);
  bx11 = random(0, width)
  by11 = random(0, height);
  bx12 = random(0, width)
  by12 = random(0, height);

  rx1 = random(0, width)
  ry1 = random(0, height);
  rx2 = random(0, width)
  ry2 = random(0, height);
  rx3 = random(0, width)
  ry3 = random(0, height);
  rx4 = random(0, width)
  ry4 = random(0, height);
  rx5 = random(0, width)
  ry5 = random(0, height);
  rx6 = random(0, width)
  ry6 = random(0, height);
  rx7 = random(0, width)
  ry7 = random(0, height);
  rx8 = random(0, width)
  ry8 = random(0, height);
  rx9 = random(0, width)
  ry9 = random(0, height);
  rx10 = random(0, width)
  ry10 = random(0, height);
  rx11 = random(0, width)
  ry11 = random(0, height);
  rx12 = random(0, width)
  ry12 = random(0, height);

 
r = color(255, 0, 0, ralpha);
b = color(0, 0, 255, balpha);
g = color(0,255,0, galpha);
//w = color(255)
//blendMode(MULTIPLY);
}

function draw() {


//var ralpha = random(0,255);
//var galpha = random(0,255);
//var balpha += 1;
//var r = color(255, 0, 0 ralpha);
//var g = color(0, 255, 0, galpha);
  frameRate(90);
var b = color(0, 0, 255, balpha);
var rw = color(255,0,0,0);
var gw = color(0,255,0,0);


blendMode(SCREEN);
fill(255);
rect(-1, -1, windowWidth+1, windowHeight+1);
blendMode(MULTIPLY);

setGradientG(gw, g);

setGradientR(rw, r);
//blendMode(NORMAL);
fill(b);
rect(-1000, -1000, windowWidth+10000, windowHeight+10000);



//blendMode(NORMAL);

ralpha = ralpha + random(-2, 2);
balpha = balpha + random(-2, 2);
//galpha = galpha + random(-2, 2);
//ralpha = ralpha + 5;
if (ralpha >= 255) {
ralpha = ralpha - 100;
}

if (ralpha <= 5) {
ralpha = ralpha + 100;
}
if (galpha >= 255) {
galpha = galpha - 100;
}

if (galpha <= 5) {
galpha = galpha + 100;
}

if (balpha >= 250) {
balpha = balpha -100;
}
if (balpha <= 5) {
balpha = balpha + 100;
}
 blendMode(NORMAL)

  wiggle1 += random(-1,1);
  wiggle2 += random(-1,1);
  wiggle3 += random(-1,1);
  

 // background(255,0,0);

  strokeWeight(wiggle1);
  
  stroke(0,255,0);
strokeWeight(wiggle2);


noFill();
beginShape();
curveVertex(gx1, gy1);
curveVertex(gx2, gy2);
curveVertex(gx3, gy3);
curveVertex(gx4, gy4);
curveVertex(gx5, gy5);
curveVertex(gx6, gy6);
curveVertex(gx7, gy7);
curveVertex(gx8, gy8);
curveVertex(gx9, gy9);
curveVertex(gx10, gy10);
curveVertex(gx11, gy11);
curveVertex(gx12, gy12);
endShape();
  
  stroke(0,0,255);
  strokeWeight(wiggle1);
  noFill();
beginShape();
curveVertex(bx1, by1);
curveVertex(bx2, by2);
curveVertex(bx3, by3);
curveVertex(bx4, by4);
curveVertex(bx5, by5);
curveVertex(bx6, by6);
curveVertex(bx7, by7);
curveVertex(bx8, by8);
curveVertex(bx9, by9);
curveVertex(bx10, by10);
curveVertex(bx11, by11);
curveVertex(bx12, by12);
endShape();

stroke(255,0,0);
  strokeWeight(wiggle3);
  noFill();
beginShape();
curveVertex(rx1, ry1);
curveVertex(rx2, ry2);
curveVertex(rx3, ry3);
curveVertex(rx4, ry4);
curveVertex(rx5, ry5);
curveVertex(rx6, ry6);
curveVertex(rx7, ry7);
curveVertex(rx8, ry8);
curveVertex(rx9, ry9);
curveVertex(rx10, ry10);
curveVertex(rx11, ry11);
curveVertex(rx12, ry12);
endShape();
  
  gx1 += random(-5, 5);
  gy1 += random(-5, 5);
  gx2 += random(-5, 5);
  gy2 += random(-5, 5);
  gx3 += random(-5, 5);
  gy3 += random(-5, 5);
  gx4 += random(-5, 5);
  gy4 += random(-5, 5);
  gx5 += random(-5, 5);
  gy5 += random(-5, 5);
  gx6 += random(-5, 5);
  gy6 += random(-5, 5);
  gx7 += random(-5, 5);
  gy7 += random(-5, 5);
  gx8 += random(-5, 5);
  gy8 += random(-5, 5);
  gx9 += random(-5, 5);
  gy9 += random(-5, 5);
  gx10 += random(-5, 5);
  gy10 += random(-5, 5);
  gx11 += random(-5, 5);
  gy11 += random(-5, 5);
  gx12 += random(-5, 5);
  gy12 += random(-5, 5);
  
  bx1 += random(-5, 5);
  by1 += random(-5, 5);
  bx2 += random(-5, 5);
  by2 += random(-5, 5);
  bx3 += random(-5, 5);
  by3 += random(-5, 5);
  bx4 += random(-5, 5);
  by4 += random(-5, 5);
  bx5 += random(-5, 5);
  by5 += random(-5, 5);
  bx6 += random(-5, 5);
  by6 += random(-5, 5);
  bx7 += random(-5, 5);
  by7 += random(-5, 5);
  bx8 += random(-5, 5);
  by8 += random(-5, 5);
  bx9 += random(-5, 5);
  by9 += random(-5, 5);
  bx10 += random(-5, 5);
  by10 += random(-5, 5);
  bx11 += random(-5, 5);
  by11 += random(-5, 5);
  bx12 += random(-5, 5);
  by12 += random(-5, 5);

  rx1 += random(-5, 5);
  ry1 += random(-5, 5);
  rx2 += random(-5, 5);
  ry2 += random(-5, 5);
  rx3 += random(-5, 5);
  ry3 += random(-5, 5);
  rx4 += random(-5, 5);
  ry4 += random(-5, 5);
  rx5 += random(-5, 5);
  ry5 += random(-5, 5);
  rx6 += random(-5, 5);
  ry6 += random(-5, 5);
  rx7 += random(-5, 5);
  ry7 += random(-5, 5);
  rx8 += random(-5, 5);
  ry8 += random(-5, 5);
  rx9 += random(-5, 5);
  ry9 += random(-5, 5);
  rx10 += random(-5, 5);
  ry10 += random(-5, 5);
  rx11 += random(-5, 5);
  ry11 += random(-5, 5);
  rx12 += random(-5, 5);
  ry12 += random(-5, 5);
  

}

function setGradientR(rw, r){

noFill();
for (var y = 0; y < windowHeight; y++) {
//var ralpha = random(0, 255);
r = color(255, 0, 0, ralpha)
var intery = map(y, 0, windowHeight, 0, 1);
var r1 = lerpColor(rw, r, intery);
stroke(r1);
strokeWeight(1);
line(0, y, windowWidth, y);
//ralpha = ralpha + random(-1, 1);
//ralpha += 50;
//ralpha = 1000;
}
}

function setGradientG(gw, g){
	noFill();
//var galpha = random (0, 255);
g = color(0, 255, 0, galpha);
for (var x = 0; x < windowWidth; x++) {
var interx = map(x, 0, windowWidth, 1, 0);
var g1 = lerpColor(g, gw, interx);
stroke(g1);
strokeWeight(1);
line(x, 0, x, windowHeight);
//galpha = galpha + random(-1, 1);
}

  
}
function mousePressed() {
    let fs = fullscreen();
    fullscreen(!fs);
  }



