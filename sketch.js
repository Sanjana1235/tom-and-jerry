var catimg, cat, mouseimg, mouse
var bg, bgimg






function preload() {
    //load the images here
    bgimg = loadImage("images/garden.png")
    catimg1 = loadImage("images/cat1.png")
    mouseimg1 = loadImage("images/mouse1.png")
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png")
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(200,600,20,20)
    cat = createSprite(800,600,20,20)
    cat.debug = true
    mouse.debug = true
}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide

    mouse.addImage(mouseimg1)
    mouse.scale = 0.10
    cat.addImage(catimg1)
    cat.scale = 0.2
    
    if(cat.x - mouse.x < cat.width/2 + mouse.width/2 
        && mouse.x - cat.x < cat.width/2 + mouse.width/2 ){
        cat.addAnimation("happy", catimg1)
        cat.changeAnimation("happy")
        mouse.addAnimation("Happy",mouseimg1) 
        mouse.changeAnimation("Happy")
        cat.velocityX = 0

    }


    keyPressed();
    drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here
    
    
    if (keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseteasing", mouseimg2)
        mouse.changeAnimation("mouseteasing")
        mouse.frameDelay = 25
        cat.addAnimation("walking", catimg2)
        cat.changeAnimation("walking")
        cat.velocityX = -5

        
        

    }
    


}











