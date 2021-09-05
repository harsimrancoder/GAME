const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var score=0
var bg,bg2,form,system,code,security;

var bg,textbox;
var bgimg;
var canvas;
var girl,sleeping;
var gameState = 0
var bubbleimg
var girl2,girlimg;
var tunnel,tunnleimg
var walking,walkingimg
var house,houseimg
var girlshock,shockedimg
var inside1,inside1img
var inside2,inside2img
var shockedgirl,girl2img
var shadow,black
var inside3,inside3img
var door,dooring;
var door2,door321img
var rooms,roomsimg
var opendoor,bg2
var papers,papersimg
var secretpapers,secretpapersimg
var item,itemimg
var blur,blurimg
var girlveiw,girlsideveiw
var computercode,computercodeimg
var info,infoimg
var cafe,cafeimg
var bye,byeimg
var thankimg,you


function preload(){

bgimage= loadAnimation("images/img1.gif","images/img2.gif","images/img3.gif","images/img4.gif","images/img5.gif","images/img6.gif","images/img7.gif","images/img8.gif","images/img9.gif","images/img10.gif","images/img11.gif","images/img12.gif","images/img13.gif","images/img14.gif")
sleeping=loadImage("images/sleeping.gif")
bubbleimg=loadImage("images/bubble.png")
girlimg=loadImage("images/girl.jpg")
tunnelimg=loadImage("images/room.jpg")
walkingimg = loadAnimation("images/1.gif","images/2.gif","images/3.gif","images/4.gif","images/5.gif","images/4.gif","images/3.gif","images/2.gif","images/1.gif")
houseimg=loadImage("images/house.jpg")
shockedimg=loadImage("images/shocked girl.png")
inside1img=loadImage("images/inside1.jpg")
inside2img=loadImage("images/inside2.jpg")
girl2img=loadImage("images/shocked_2.png")
black=loadImage("images/black.jpg")
inside3img=loadImage("images/inside3.jpg")
doorimg=loadImage("images/door.jpg")
door321img=loadImage("images/door 321.jpg")
bg2=loadImage("images/opendoor.jpg")
roomsimg=loadImage("images/rooms.jpg")
papersimg=loadImage("images/papers.jpg")
secretpapersimg=loadImage("images/secretpapers.jpg")
itemimg=loadImage("images/item.jpg")
blurimg=loadImage("images/blur.jpeg")
girlsideveiw=loadImage("images/anime.jpg")
computercodeimg=loadImage("images/computercode.jpg")
infoimg=loadImage("images/info.jpg")
cafeimg=loadImage("images/cafe.jpg")
byeimg=loadImage("images/bye.jpg")
thankimg=loadImage("images/thank you.jpg")

}




function setup(){
    canvas = createCanvas(1000,550);
    engine = Engine.create();
    world = engine.world;
    system = new System()
    security = new Security()
    
    bg=createSprite(500,275)
    bg.addAnimation("a",bgimage)
    bg.scale = 2;
    bg.visible = true;

    textbox = createSprite(500,500,700,80)
    textbox.shapeColor = "black";
    textbox.visible = true;

    girl = createSprite(500,275);
    girl.addImage(sleeping);
    girl.visible = false;
    girl.scale=4.5;

    textbox1 = createSprite(650,100,630,90)
    textbox1.shapeColor = "black";
    textbox1.visible = false;

    girl2 = createSprite(500,275);
    girl2.addImage(girlimg);
    girl2.visible = false;
    girl2.scale=0.5;

    textbox2 = createSprite(650,500,670,90)
    textbox2.shapeColor = "black";
    textbox2.visible = false;

    tunnel=createSprite(500,275,)
    tunnel.addImage(tunnelimg);
    tunnel.visible=false;
    tunnel.scale=3
   
    textbox3 = createSprite(650,100,600,90)
    textbox3.shapeColor = "black";
    textbox3.visible = false;

    
    walking=createSprite(999,275)
    walking.addAnimation("walk",walkingimg)
    walking.visible = false
    walking.scale = 0.6
    walking.velocityX = -2.5;
   
    textbox4 = createSprite(650,100,600,90)
    textbox4.shapeColor = "black";
    textbox4.visible = false;

    house = createSprite(500,275);
    house.addImage(houseimg);
    house.visible = false;
    house.scale = 4.5;
   
    girlshock = createSprite(200,375);
    girlshock.addImage(shockedimg);
    girlshock.visible = false;

    textbox5 = createSprite(600,500,700,90)
    textbox5.shapeColor = "white";
    textbox5.visible = false;

    inside1=createSprite(500,200,100,90)
    inside1.addImage(inside1img);
    inside1.visible=false;
    inside1.scale = 3.5;
    textbox6 = createSprite(600,500,700,90)
    textbox6.shapeColor = "white";
    textbox6.visible = false;
    
    inside2=createSprite(500,170,100,90)
    inside2.addImage(inside2img);
    inside2.visible=false;
    inside2.scale = 1.5;
    textbox7 = createSprite(600,500,700,90)
    textbox7.shapeColor = "white";
    textbox7.visible = false;

    inside3=createSprite(500,170,100,90)
    inside3.addImage(inside3img);
    inside3.visible=false;
    inside3.scale = 1.5;
    textbox8 = createSprite(600,500,700,90)
    textbox8.shapeColor = "white";
    textbox8.visible = false;

    shadow=createSprite(500,170,200,90)
    shadow.addImage(black);
    shadow.visible=false;
    shadow.scale = 2.5;

    

    shockedgirl=createSprite(205,300)
    shockedgirl.addImage(girl2img);
    shockedgirl.visible=false;
   shockedgirl.scale = 0.5;
    textbox9 = createSprite(600,500,700,90)
    textbox9.shapeColor = "white";
    textbox9.visible = false;

   

    door=createSprite(310,270,102,90)
    door.addImage(doorimg);
    door.visible=false;
   door.scale = 3.7;
   door2=createSprite(500,255,90,90)
    door2.addImage(door321img);
    door2.visible=false;
   door2.scale = 3.5;

   opendoor=createSprite(500,255,90,90)
   opendoor.addImage(bg2);
opendoor.visible=false;
   opendoor.scale = 0.7;
    
   //rooms=createSprite(305,300,110,90)
    //rooms.addImage(roomsimg)
    //rooms.visible=false;
    rooms=createSprite(500,294,120,90)
    rooms.addImage(roomsimg);
    rooms.visible=false;
    rooms.scale=1.5
   
    papers=createSprite(500,294,120,90)
    papers.addImage(papersimg);
    papers.visible=false;
    papers.scale=1.5

    secretpapers=createSprite(500,294,120,90)
    secretpapers.addImage(secretpapersimg);
    secretpapers.visible=false;
    secretpapers.scale=1

    item=createSprite(500,294,120,90)
    item.addImage(itemimg);
    item.visible=false;
    item.scale=1.9
    
    blur=createSprite(500,294,120,90)
    blur.addImage(blurimg);
    blur.visible=false;
    blur.scale=3

    computercode=createSprite(500,294,120,90)
    computercode.addImage(computercodeimg)
    computercode.visible=false;
    computercode.scale=1.5;

    info=createSprite(500,272,120,90)
    info.addImage(infoimg)
    info.visible=false;
    info.scale=0.3

    you=createSprite(500,299,120,90)
    you.addImage(thankimg)
    you.visible=false;
    you.scale=1.2

    bye=createSprite(500,294,120,90)
    bye.addImage(byeimg)
    bye.visible=false;
    bye.scale=0.3

    cafe=createSprite(500,289,120,90)
    cafe.addImage(cafeimg)
    cafe.visible=false;
    
   
    girlveiw=createSprite(500,294,120,90)
    girlveiw.addImage(girlsideveiw);
    girlveiw.visible=false;
    girlveiw.scale=1.3;

    textbox10 = createSprite(600,500,700,90)
    textbox10.shapeColor = "white";
    textbox10.visible = false;
    

   //girlshock.scale = 0.5;
    // bubble = createSprite(500,275);
    // bubble.addImage(bubbleimg);
    // bubble.visible = false;
    // bubble.scale=1;  
    
    

    textbox11=createSprite(600,500,700,90)
    textbox11.shapeColor="white";
    textbox11.visible=false
}

function draw(){
   if(gameState ===0){
    background(0);
    drawSprites();
    security.hide();
    //clear();
    textSize(15)
    fill("white");
    text("Today is a rainy day and the sky is dark.The clouds seems very heavy and  the wind is strong.",200,490)
    text("This is the first time raining this HARD in this area as i recently shiffted here. ",200,510)
    textSize(16)
    fill("red");
    text("Press S to continue",669,527)

    if(keyDown("S")){
        gameState = 1;
    }

}

    if(gameState === 1){
        background(0);
        bg.visible = false;
        textbox.visible = false;
        girl.visible = true;
        textbox1.visible = true;
        drawSprites();

    textSize(15)
    fill("white");
    text("I usually like this kind of weather, but today I can not enjoy the weather because.. ",360,80)
    text("i am working on my company spy mission.I don't know how but I unfortunatly felt ASLEEP...",360,100)    
    textSize(16);
    fill("red");
    text("Press E to continue",800,130)

    if(keyDown("E")){
        gameState = 2;
    }
    }
    if(gameState === 2){
        background(0);
        girl.visible = false;
        textbox1.visible = false;
        girl2.visible = true;
        textbox2.visible = true;
        drawSprites();

    textSize(15)
    fill("white");
    text("OH SORRY, I am Hana. I am working in sy agency.This company mostly work on spy missions. ",325,480)
    text("this time we have to find a secret paper and i am the incharge this time  ",325,500)    
    textSize(16);
    fill("red");
    text("Press A to continue",800,530)

    if(keyDown("A")){
        gameState = 3;
    }
    }
    if(gameState === 3){
        background(0);
        girl2.visible = false;
        textbox2.visible = false;
        tunnel.visible = true;
        walking.visible = true;
        textbox3.visible = true;
        drawSprites();

    textSize(15)
    fill("white");
    text("OHH.. I automatically felt like I was walking in a dark tunnle. ",360,80)
    text("I still kept walking even though I don't want to..   when I reached the end ...",360,100)    
    textSize(16);
    fill("red");
   

    if(walking.x <-10){
        gameState = 4;
    }
    
}
if(gameState ===4){
    background(0);
    drawSprites();
    girl2.visible = false;
    textbox2.visible = false;
    tunnel.visible = false;
    walking.visible = false;
    textbox3.visible = false;
    textbox5.visible = true;
    house.visible = true;
    girlshock.visible =  true;

    
    textSize(15)
    fill("black");
    text("I saw a black big house.it had some lights on and some dim,everywhere was dark.the sky",255,500)
    text("was filled with darkness. I want to run but I could not move...",255,515)
    textSize(16)
    fill("red");
    text("Press W to continue",669,530)

    if(keyDown("W")){
        gameState = 5;
    }

 
}

if(gameState ===5){
    background(0);
    drawSprites();
    textbox5.visible = false;
    house.visible = false;
    inside1.visible=true;
    girlshock.visible = true ;
    textbox6.visible = true;
   
    
    textSize(15)
    fill("black");
    text("I started walking inside and kept walking,every where was dark and dusty",255,500)
    text("I was lost somewhere...I want to leave this place as fast as possible.",255,515)
    textSize(16)
    fill("red");
    text("Press R to continue",669,530)

    if(keyDown("R")){
        gameState = 6;
    }
}
    if(gameState ===6){
        background(0);
        drawSprites();
        textbox6.visible = false;
        inside1.visible = false;
        girlshock.visible = true ;
        inside2.visible=true;
       textbox7.visible = true;
       
        
        textSize(15)
        fill("black");
        text("but I could not control myself. ",255,500)
        text("I was still going inside in shock..",255,515)
        textSize(16)
        fill("red");
        text("Press Q to continue",669,530)
    
        if(keyDown("Q")){
            gameState = 7;
        }
    
}
if(gameState ===7){
    background(0);
    drawSprites();
    textbox6.visible = false;
    inside1.visible = false;
   
    inside2.visible=false;
    inside3.visible=true;
    girlshock.visible = true ;
    textbox8.visible = true;
    
  
    
    textSize(15)
    fill("black");
    text("I kept going inside and inside without knowing  ",255,500)
    text("I was still in confused situation and saw....",255,515)
    textSize(16)
    fill("red");
    text("Press Z to continue",669,530)

    if(keyDown("Z")){
        gameState = 8;
    }

}
if(gameState ===8){
    background(0);
    drawSprites();
    textbox6.visible = false;
    inside3.visible = false;
    girlshock.visible = false ;
    
    shockedgirl.visible=true;
   textbox9.visible = true;
   shadow.visible=true;
   
    
    textSize(15)
    fill("black");
    text("I saw a shodow of a person standing  ",255,500)
    text("I was so scared that I froze where I was...I wanted to shout for help.. no voice came out of my mouth",255,515)
    textSize(16)
    fill("red");
    text("Press T to continue",669,530)

    if(keyDown("T")){
        gameState = 9;
    }
}
if(gameState ===9){
    background(0);
    drawSprites();
    textbox6.visible = false;
    inside3.visible = false;
    girlshock.visible = false ;
    
    shockedgirl.visible=false;
   textbox9.visible = false;
   shadow.visible=false;
door.visible= true;
   textbox10.visible=true;
   
   
    textSize(15)
    fill("black");
    text("I run as fast as possible and reached to a door and it as lock.  ",255,500)
    text("I felt like the shadow was coming closer,now you can only help me to OPEN THE DOOR..",255,515)
    textSize(16)
    fill("red");
    text("click on the door nob",669,530)

    if(mousePressedOver(door)){
        gameState = 10;
    }
}
if(gameState ===10){
    background(0);
    
    drawSprites();
    textbox6.visible = false;
    textbox5.visible = false;
    textbox7.visible = false;
    textbox8.visible = false;
    inside3.visible = false;
    girlshock.visible = false ;
    
    shockedgirl.visible=false;
   textbox9.visible = false;
   shadow.visible=false;
door.visible= false;
   textbox10.visible=false;
   door2.visible=true;
   
   clues();
   security.display();
   security.show();
 textSize(20)
 fill("white")
 text("Score: "+score,450,50)
if(score===3){
    gameState=11
}

  
  
  }

if(gameState ===11){
    background(0);
    drawSprites();
    
    door2.visible=false;
   rooms.visible=false;
   textbox10.visible=true;
   textbox11.visible=false; 
   opendoor.visible=true;
   security.hide() 
   
    textSize(15)
    fill("black");
    text("THANK YOU, the door is open... ",255,500)
    text("and I am inside the room. i can see ",255,515)
    textSize(16)
    fill("red");
     text("Press D to continue",669,530)

    if(keyDown("D")){
        gameState = 12;
    }
}
if(gameState===12){
    background(0);
    drawSprites();
    door2.visible=false;
   rooms.visible=false;
   textbox10.visible=true;
   textbox11.visible=false; 
   bg2.visible=false;
   rooms.visible=true;

   textSize(15)
   fill("black");
   text("burnt furniture everywhere.Broken things are scatered  ",255,500)
   text("it was difficult to go in the rooms... ",255,515)
   textSize(16)
   fill("red");
    text("Press G to continue",669,530)

   if(keyDown("G")){
       gameState = 13;
   }
   
}
if(gameState===13){
    background(0);
    drawSprites();
    door2.visible=false;
   rooms.visible=false;
   textbox10.visible=true;
   textbox11.visible=false; 
   opendoor.visible=false;
   secretpapers.visible=true;

   textSize(15)
   fill("black");
   text("I  am inside a room which has little light  ",255,500)
   text("and here I see a  bag.. ",255,515)
   textSize(16)
   fill("red");
    text("Press V to continue",669,530)

   if(keyDown("V")){
       gameState = 14;
   }
   }
   if(gameState===14){
    background(0);
    drawSprites();
    secretpapers.visible=false;
   rooms.visible=false;
   textbox10.visible=true;
   textbox11.visible=false; 
   item.visible=true;

   textSize(15)
   fill("black");
   text("when I opened the bag I saw some papers,took them in my hand.. when I saw carfully,  ",255,500)
   text("I found out they are the secrt papers that our company is finding...  ",255,515)
   textSize(16)
   fill("red");
    text("Press F to continue",669,540)

   if(keyDown("F")){
       gameState = 15;
   }
   }
   if(gameState===15){
    background(0);
    drawSprites();
   item.visible=false;
   textbox10.visible=true;
   textbox11.visible=false; 
   blur.visible=true;

   textSize(15)
   fill("black");
   text("but the next moment every thing started getting blur ",255,500)
   text("I could not see any thing ",255,515)
   textSize(16)
   fill("red");
    text("Press B to continue",669,530)

   if(keyDown("B")){
       gameState = 16;
   }
   }
   if(gameState===16){
    background(0);
    drawSprites();
   item.visible=false;
   textbox10.visible=true;
   textbox11.visible=false; 
   blur.visible=false;
   girlveiw.visible=true;


   textSize(15)
   fill("black");
   text("I was breathing very fast ...  ",255,500)
   text("then I noticed that I was in my room and I was seeing a dream. ",255,515)
   textSize(16)
   fill("red");
    text("Press X to continue",669,530)

   if(keyDown("X")){
       gameState = 17;
   }
   }
   if(gameState===17){
    background(0);
    drawSprites();
   item.visible=false;
   textbox10.visible=true;
   textbox11.visible=false; 
  computercode.visible=true;
   girlveiw.visible=false;


   textSize(15)
   fill("black");
   text(" i started to find the information about the place  ",255,500)
   text(" i collected as many evidences.... ",255,515)
   textSize(16)
   fill("red");
    text("Press Y to continue",669,530)

   if(keyDown("Y")){
       gameState = 18;
   }
   }
   if(gameState===18){
    background(0);
    drawSprites();
   item.visible=false;
   textbox10.visible=true;
  computercode.visible=false;
  info.visible=true;


   textSize(15)
   fill("black");
   text(" next day i gave a presentation in my office   ",255,500)
   text(" after a few days... ",255,515)
   textSize(16)
   fill("red");
    text("Press U to continue",669,530)

   if(keyDown("U")){
       gameState = 19;
   }
   }
   if(gameState===19){
    background(0);
    drawSprites();
   item.visible=false;
   textbox10.visible=true;
  computercode.visible=false;
  info.visible=false;
cafe.visible=true

   textSize(15)
   fill("black");
   text(" I got the news that my project was succesfull ",255,500)
   text(" and i got a prmotion..I AM SOOO HAPPY  ",255,515)
   textSize(16)
   fill("red");
    text("Press N to continue",669,530)

   if(keyDown("N")){
       gameState = 20;
   }
   }
   if(gameState===20){
    background(0);
    drawSprites();
   item.visible=false;
   textbox10.visible=true;
  cafe.visible=false
  you.visible=true;

   textSize(15)
   fill("black");
   text(" THANK YOU. for your help.. ",255,500)
   text(" bye, I will leave  ",255,515)
   textSize(16)
   fill("red");
    text("Press J to continue",669,530)

   if(keyDown("J")){
       gameState = 21;
   }
   }
   if(gameState===21){
    background(0);
    drawSprites();
   item.visible=false;
   textbox10.visible=true;
  cafe.visible=false;
   bye.visible=true;
   you.visible=false;

   textSize(15)
   fill("black");
   text(" be helthy ",255,500)
   text(" and happy ",255,515)
   textSize(16)
   fill("red");
    text("BYE",669,530)

  
   }
   






}
