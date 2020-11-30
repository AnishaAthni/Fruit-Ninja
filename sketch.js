var s, si
var f, f1,f2, f3, f4, fg
var m, mi, mg
var score=0
var gameOverImage
var gamestate="p"
var ks, gos
function preload(){
  si=loadImage("sword.png")
 f1=loadImage("fruit1.png")
  f2=loadImage("fruit2.png")
  f3=loadImage("fruit3.png")
  f4=loadImage("fruit4.png")
  mi=loadAnimation("alien1.png","alien2.png")
  gameOverImage=loadImage("gameover.png")
  ks=loadSound("knifeSwooshSound.mp3")
  gos=loadSound("gameover.mp3")
}
function setup(){
  createCanvas (600,600)
  
  s=createSprite(200,100,20,30)
  s.addImage(si)
  s.scale=0.7
  
  fg=new Group();
mg= new Group();
}

function draw(){
  background("lightblue")
  text("score"+score,500,50)
  if(gamestate==="p"){
    
  
  s.x=World.mouseX
  s.y=World.mouseY
  fruits();
  monster()
  if(s.isTouching(fg)){
    ks.play()
    fg.destroyEach()
    score=score+2 
  }
  if (s.isTouching(mg)){
    gamestate="e"
    gos.play()
    
  }} 
  
  if(gamestate==="e"){
    mg.destroyEach()
    fg.destroyEach()
    mg.setVelocityXEach(0)
    fg.setVelocityXEach(0)
    s.x=300
    s.y=300
    s.addImage(gameOverImage)
  }

  drawSprites();

}
function fruits(){
  if(frameCount%80===0){
    f=createSprite(600,200,20,20)
    f.velocityX=-4
    f.y= random(50,350)
    var z= Math.round(random(1,4))
    switch(z){
      case 1: f.addImage(f1)
        break
        case 2:f.addImage(f2)
        break
        case 3:f.addImage(f3)
       break
        case 4:f.addImage(f4) 
        break 
        default: break 
    }
        var a=Math.round(random(1,2))
        if(a===1){
          f.x=0
          f.velocityX=4
        }
        else if (a===2){
          f.x=600
          f.velocityX=-4
        }
        f.scale=0.2
        f.lifetime=200
        fg.add(f)
  }
}
  
  function monster(){
    if(frameCount%150===0){
      m=createSprite(400,200,20,20)
      m.y=random(50,350)
      m.addAnimation("moving",mi)
      m.velocityX=-4
      var a=Math.round(random(1,2))
        if(a===1){
          m.x=0
          m.velocityX=4
        }
        else if (a===2){
          m.x=600
          m.velocityX=-4
        }
      m.lifetime=200
      mg.add(m)
      
    }
  }