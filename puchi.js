var mode = 0;

//MODE:
//0 -> black
//1 -> bright
//2 -> white
//b(16777216)

var img; //create an empty variable to later, assign values

function preload(){
  img = loadImage("assets/perfect.jpg");
}

function draw(){
  image(img, 0, 0);
}