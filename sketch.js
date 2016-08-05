var myRed = 55;
var myGreen = 25;
var myBlue = 200; 

function setup() {
  createCanvas(640,480);
  background(140,60,90)
}

function draw() {
  myBlue = myBlue-1;
  myRed = myRed+0.5
  myGreen = myGreen+2
  noStroke(); 
  fill(myRed,myGreen,myBlue);
  ellipse(mouseX,mouseY, 30,30);
  if (myRed > 255) {
    myRed=55;
  }
  if (myBlue < 1) {
    myBlue=200;
  }
    
  if (mouseIsPressed) {
    fill(140,60,90)
    ellipse(mouseX,mouseY,100,100);
  }

  
 

  
}