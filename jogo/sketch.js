const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var vidas = 3
function preload(){
 fundo = loadImage("./assests/BG.png")
  plataforma1 = loadImage("./assests/plat1-removebg-preview.png")
chao1 = loadImage("./assests/1.png")
chao2 = loadImage("./assests/2.png")
chao3 = loadImage("./assests/3.png")
terra1 = loadImage("./assests/4.png")
terra2 = loadImage("./assests/5.png")
terra3 = loadImage("./assests/6.png")
caixa = loadImage("./assests/Crate.png")
plat = loadImage("./assests/plat1-removebg-preview.png")



}
 
 
function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();

  world = engine.world;

 

 chaostart = createSprite(65, 600, 100, 100)
 chaostart.addImage(chao1)

 chaomid = createSprite(193, 600, 100, 100)
 chaomid.addImage(chao2)
 chaomid = createSprite(321, 600, 100, 100)
 chaomid.addImage(chao2)


 chaoend = createSprite(449, 600, 100, 100)
 chaoend.addImage(chao3)
 
 terrastart = createSprite(65, 728, 100, 100)
 terrastart.addImage(terra1)
 terrastart = createSprite(65, 856, 100, 100)
 terrastart.addImage(terra1)

 terramid = createSprite(193, 728, 100, 100)
 terramid.addImage(terra2)
 terramid = createSprite(193, 856, 100, 100)
 terramid.addImage(terra2)

 terramid = createSprite(321, 728, 100, 100)
 terramid.addImage(terra2)
 terramid = createSprite(321, 856, 100, 100)
 terramid.addImage(terra2)
 
 terraend = createSprite(449, 728, 100, 100)
 terraend.addImage(terra3)
 terraend = createSprite(449, 856, 100, 100)
 terraend.addImage(terra3)

 plataforma = createSprite(100, 480, 100, 100)
 plataforma.addImage(plat)

 solo = createSprite(100,460, 100, 8 )
  solo.visible = true
 
  solo2 = createSprite(270, 540, 500, 10)
  solo2.visible = true


deco = createSprite(40, 500, 100, 100)
deco.addImage(caixa)



personagem = createSprite(550, 480, 100, 100);
personagem.debug = true









 

 
}
 
 
function draw() {
 background(fundo)



drawSprites()
if(keyIsDown(87)){
  personagem.y = personagem.y + -5
  }

if(keyIsDown(83)){
personagem.y = personagem.y + 5
}
if(keyIsDown(65)){
  personagem.x = personagem.x + -5
  }
  if(keyIsDown(68)){
    personagem.x = personagem.x + 5
    }

    if(keyDown('space')){
  personagem.velocityY = personagem.velocityY - 10
    }
    personagem.velocityY = personagem.velocityY +0.5

  personagem.collide(solo)
 
textSize(30)
text("Vidas = " + vidas , width/2 + -800, height/2 + -400 )
text.size = 10000


// if(personagem.collide(vilao)){
// vidas = vidas -1 
//    }


  
    

}
 

