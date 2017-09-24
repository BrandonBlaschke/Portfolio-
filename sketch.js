var mailIcon;

//Later to add ability for all icons to pop in and out

//Caculating the different variables for the effect
var target, vel;
var width, height;
var drag;
var strength;

var resizeIcon = false;

function setup() {

  //Get the mail icon and add to variable
  mailIcon = select('#icon');

  //When mouse is over or out of icon change the size
  mailIcon.mouseOver(newSizeTrue);
  mailIcon.mouseOut(newSizeFalse);

  width = 40;
  height = 25;
  target = 0;
  vel = 0;

  drag = .82;
  strength = 0.2;
}

function draw() {

  //If we can resize then the target size will change
  if (resizeIcon) {
    target = 50;
  } else {
    target = 40;
  }

  //Create the force for effect
  var forceWidth = target - width;
  forceWidth *= strength;

  var forceHeight = target - height;
  forceHeight *= strength;

  //Mul by drag and add by force to get new Velocity
  vel *= drag;
  vel += forceWidth;

  //Add velocity to new radius
  width += vel;
  height += vel;

  //Apply new width and height
  mailIcon.style("width", width + "px");
  mailIcon.style("height", height + "px");
}

function newSizeTrue() {
  resizeIcon = true;
}

function newSizeFalse() {
  resizeIcon = false;
}
