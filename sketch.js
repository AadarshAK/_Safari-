var backI, backS;
var x1=0,x2;
var scrollSpeed=2,offSetX=0;
var hunter, hunterS, appleI,appleS;
var bananaS,bananaI
var orangeI,orangeS
var watermelonI,watermelonS
var Fruits,FruitG
var arrowS,arrowI,arrowG;
var score=0;
var bisonS,bisonI
var tigerI,tigerS
var monkeyS,monkeyI;
var rubyS,rubyI,rubyG;
var as,ai,ag,al=2;
var ts,ti,tg;
var o2=100;
var ei,es,eg;

function preload(){
   backI=loadImage("img/forest1_edited.jpg");
   hunter=loadImage("img/hunter.png");
   //hunter.resize(20,20);
   appleI=loadImage("img/apple.png");
   bananaI = loadImage("img/banana.png")
   orangeI = loadImage("img/orange.png");
   watermelonI = loadImage("img/watermelon.png")
   arrowI = loadImage("img/arrow.png")
   bisonI = loadImage("img/bison.png")
   bisonI.resize(120,50)   
   monkeyI = loadImage("img/monkey.png")
   tigerI = loadImage("img/tiger.png")
   tigerI.resize(120,70)
   rubyI=loadImage("img/ruby.png");
   ti=loadImage("img/tree.png");
   
}

function setup(){
   createCanvas(1780,800);

   hunterS=createSprite(250,425,20,20);
   hunterS.addImage(hunter);
   //hunter.scale=0.1234

   arrowG=new Group();
   FruitG=new Group();
   rubyG=new Group();
   ag=new Group();
   tg=new Group();
   eg=new Group();
}

function draw(){
   background("white");

   image(backI,offSetX,0,width,height);
   image(backI,offSetX+width,0,width,height);

   
   offSetX--;

   if(offSetX <= -width){
      offSetX=0;
   }

   if(keyDown("s")){
      spawnArrow();
   }

   if(arrowG.isTouching(FruitG)){
      FruitG.destroyEach();
      arrowG.destroyEach();
      score+=10;
   }

   if(arrowG.isTouching(rubyG)){
      rubyG.destroyEach();
      rubyG.destroyEach();
      arrowG.destroyEach();
      score+=10;
   }

   if(al===1){
      ag.destroyEach();
      hunterS.destroy();
      FruitG.destroyEach();
      rubyG.destroyEach();
      textSize(32);
      fill("red");
      text("Game Over",width/2,height/2);
   }

   if(arrowG.isTouching(ag)){
      arrowG.destroyEach();
      al-=1;
   }
   
   if(arrowG.isTouching(tg)){
      arrowG.destroyEach();
      tg.destroyEach();
      o2-=10;
   }

   if(o2<=30){
      al=1;
   }

   if(arrowG.isTouching(eg)){
      eg.destroyEach();
      score+=5;
   }

   if(eg.isTouching(hunterS)){
      al=1
      eg.destroyEach();
   }

   spawnFruits();
   spawnTrees();
   drawSprites();

   textSize(32);
   fill("green");
   text("Score : "+score,width/2-50,100);
   text("Oxygen : "+o2,width/4,100);
}

function spawnFruits(){
   if(frameCount%250===0){
      Fruits=createSprite(width+20,Math.round(random(200,300)),20,20);
      Fruits.velocityX=-2;
      Fruits.scale=0.25;

      var fruitRand=Math.round(random(1,4));

      switch(fruitRand){
         case 1 : Fruits.addImage(appleI);
         break;
         
         case 2 : Fruits.addImage(orangeI);
         break;

         case 3 : Fruits.addImage(bananaI);
         break;

         case 4 : Fruits.addImage(watermelonI);
      }
      FruitG.add(Fruits);
   }

   if(frameCount%450===0){
      rubyS=createSprite(width+50,Math.round(random(300,400)),20,20);
      rubyS.addImage(rubyI);
      rubyS.velocityX=-5;
      rubyS.scale=0.25;
      rubyG.add(rubyS);
   }
   
   if(frameCount%650===0){//650
      as=createSprite(width+80,455,20,20);
      as.velocityX=-6;
      

      var animalRand=Math.round(random(1,3));

      switch(animalRand){
         
         case 1 : as.y=455+100;
         as.addImage(bisonI);
         
         break;
         
         case 2 : as.y=455+30;
         as.addImage(monkeyI);
         break;

         case 3 : as.y=455+100; 
         as.addImage(tigerI);
      }
      ag.add(as);
   }
   }


function spawnArrow(){
   arrowS=createSprite(250,Math.round(random(200,300)),20,20);
   arrowS.addImage(arrowI);
   arrowS.velocityX=8;
   arrowG.add(arrowS);
   console.log(arrowS.x)
   arrowG.setLifetimeEach(1780/9)
}

function spawnTrees(){
   if(frameCount%700===0){
      ts=createSprite(width+50,480,40,70);
      ts.addImage(ti);
      ts.velocityX=-5;
      tg.add(ts);
   }

   if(frameCount%350===0){
      es=createSprite(width+50,480,40,80);
      es.addImage(ei);
      es.velocityX=-5;
      eg.add(es);
   }
}