var garden
var jerryOne,jerryTwo,jerryThree,jerryFour,jerryImage
var tomOne,tomTwo,tomThree,tomFour,tomImage
function preload() {
    //load the images here

garden=loadImage(garden.png)
jerryImage=loadImage(jerryOne.png)
jerryImage=loadImage(jerryTwo.png)
jerryImage=loadImage(jerryThree.png)
jerryImage=loadImage(jerryFour.png)
tomImage=loadImage(tomOne.png)
tomImage=loadImage(tomTwo.png)
tomImage=loadImage(tomThree.png)
tomImage=loadImage(tomFour.png)

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(200,300,50,50)
tom.addImage("tom",tomImage)
garden=createSprite(300,300,50,50)
garden.addImage("garden")
}

function draw() {

    background(0,0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left_arrow")){
    cat.velocityY=-5 

}
