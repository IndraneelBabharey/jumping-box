var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var topEdge,rightEdge,leftEdge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(110, 570, 180, 30)
    surface1.shapeColor = "green"
    surface2 = createSprite(300, 570, 180, 30)
    surface2.shapeColor = "orange"
    surface3 = createSprite(490, 570, 180, 30)
    surface3.shapeColor = "blue"
    surface4 = createSprite(680, 570, 180, 30)
    surface4.shapeColor = "red"
    

    rightEdge = createSprite(800, 300, 5, 600)
    leftEdge = createSprite(1, 300, 5, 600)
    topEdge = createSprite(400, 1, 800, 5)



    //create box sprite and give velocity
    box = createSprite(600, 200, 30, 30)
    box.velocityY = 3
    box.velocityX = 7

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    createEdgeSprites()
   box.bounceOff(topEdge)
   box.bounceOff(rightEdge)
   box.bounceOff(leftEdge)

 


    //add condition to check if box touching surface and make it box



    if(box.isTouching(surface1)&& box.bounceOff(surface1)){
    
        box.shapeColor = "green"}

    if(box.isTouching(surface2)&& box.bounceOff(surface2)){
    
        box.shapeColor = "orange"}

    if(box.isTouching(surface3 )&& box.bounceOff(surface3)){
    
        box.shapeColor = "blue"}

    if(box.isTouching(surface4)&& box.bounce0ff(surface4)){
    
        box.shapeColor = "red"}




if(surface2.isTouching(box)){
   box.shapeColor = "orange"
   box.velocityX = 0
   
   
}
    
    drawSprites()
}
    