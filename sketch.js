function setup() {
  createCanvas(800,400);
 fixrect= createSprite(400, 200, 50, 50);
 movrect= createSprite(40, 200, 50, 50);
 fixrect.shapeColor="blue";
 movrect.shapeColor="red";
 fixrect.debug=true;
 movrect.debug=true;
}

function draw() {
  background(255,255,255);  
  movrect.x=mouseX;
  movrect.y=mouseY;
  isTouching();
  drawSprites();
}

function isTouching(){
  if(fixrect.x-movrect.x<fixrect.width/2+movrect.width/2&&fixrect.y-movrect.y<fixrect.height/2+movrect.height/2){
    fixrect.shapeColor="orange";
    movrect.shapeColor="teal";
      }
      else {
        fixrect.shapeColor="blue";
        movrect.shapeColor="red";
      }
}