
function preload() {
    bgImg=loadImage("images/garden.png")
    cat1Img=loadAnimation("images/cat1.png")
    cat2Img=loadAnimation("images/cat2.png","images/cat3.png")
    cat3Img=loadAnimation("images/cat4.png")
    mouse1Img=loadAnimation("images/mouse1.png")
    mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3Img=loadAnimation("images/mouse4.png")
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(700,600)
    cat.addAnimation("catsleeping",cat1Img)
    cat.scale=0.2
    mouse=createSprite(200,600)
    mouse.addAnimation("mousestanding",mouse1Img)
    mouse.scale=0.15
    //create tom and jerry sprites here

}

function draw() {

    background(bgImg);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("catlast",cat3Img)
        cat.changeAnimation("catlast")
        cat.x=300
        cat.scale=0.2
        mouse.addAnimation("mouselast",mouse3Img)
        mouse.changeAnimation("mouselast")
        mouse.scale=0.15
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
       cat.velocityX=-5
       cat.addAnimation("catrunning",cat2Img)
       cat.changeAnimation("catrunning")
       mouse.addAnimation("mouseteasing",mouse2Img)
       mouse.changeAnimation("mouseteasing")


    }

  //For moving and changing animation write code here


}
