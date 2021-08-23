var backgroundImg, spacecraft1, spacecraft2, spacecraft3, spacecraft4, issImg

var iss, spacecraft

var hasDocked = false

function setup() {
  createCanvas(800,400);
  
  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale = 0.4;


  spacecraft = createSprite(285,240);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale = 0.15
}

function preload(){
   backgroundImg=loadImage("Docking-undocking/spacebg.jpg")
   spacecraft1=loadImage("Docking-undocking/spacecraft1.png")
   spacecraft2=loadImage("Docking-undocking/spacecraft2.png")
   spacecraft3=loadImage("Docking-undocking/spacecraft3.png")
   spacecraft4=loadImage("Docking-undocking/spacecraft4.png")
   issImg=loadImage("Docking-undocking/iss.png")


}


function draw() {
  background(backgroundImg);  

  if(!hasDocked){
    spacecraft.x= spacecraft.x + random(-1,1);

    if(keyDown("UP_ARROW")){
      spacecraft.addImage(spacecraft1)
      spacecraft.y = spacecraft.y-2;
    }
      if(keyDown("DOWN_ARROW")){
        spacecraft.addImage(spacecraft2)
        spacecraft.y = spacecraft.y+2;
      }

      if(keyDown("LEFT_ARROW")){
        spacecraft.addImage(spacecraft3)
        spacecraft.x = spacecraft.x-2;
      }

      if(keyDown("RIGHT_ARROW")){
        spacecraft.addImage(spacecraft4)
        spacecraft.x = spacecraft.x+2;
      }
    
  }
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("White")
    text("Docking Succesful!", 200, 300)
  }
  drawSprites();

}
