var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d2b4284f-fe64-4b4a-8d87-81b58834f72b","77ddc667-9e85-4b05-8d2c-3ef0fb98c933","b16c59a8-bb88-4d36-bc8d-5305672d8707","875d8528-b0a7-499e-a4db-dd5a6e6debce","942b3258-e5df-4c29-bb48-60cc01fc9d69"],"propsByKey":{"d2b4284f-fe64-4b4a-8d87-81b58834f72b":{"name":"quadra","sourceUrl":"assets/api/v1/animation-library/gamelab/4cK4OL0TYp17v4XpNg9ICEQ_SgSA7nCh/category_backgrounds/sports_basketballhalf2.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"4cK4OL0TYp17v4XpNg9ICEQ_SgSA7nCh","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4cK4OL0TYp17v4XpNg9ICEQ_SgSA7nCh/category_backgrounds/sports_basketballhalf2.png"},"77ddc667-9e85-4b05-8d2c-3ef0fb98c933":{"name":"aluno","sourceUrl":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png","frameSize":{"x":136,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png"},"b16c59a8-bb88-4d36-bc8d-5305672d8707":{"name":"basketball","sourceUrl":"assets/api/v1/animation-library/gamelab/lJ_EH4DV2ueKL_rNgl9vTVZREP_YfLJf/category_sports/basketball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"lJ_EH4DV2ueKL_rNgl9vTVZREP_YfLJf","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lJ_EH4DV2ueKL_rNgl9vTVZREP_YfLJf/category_sports/basketball.png"},"875d8528-b0a7-499e-a4db-dd5a6e6debce":{"name":"soccerball","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"},"942b3258-e5df-4c29-bb48-60cc01fc9d69":{"name":"volleyball","sourceUrl":"assets/api/v1/animation-library/gamelab/JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G/category_sports/volleyball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G/category_sports/volleyball.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var quadra = createSprite(200,200);
quadra.setAnimation("quadra");

var aluno = createSprite(200,350);
aluno.setAnimation("aluno");
aluno.scale =.2;

var basketball = createSprite(20,130);
basketball.setAnimation("basketball");
basketball.scale =.1;

var soccerball = createSprite(380,200);
soccerball.setAnimation("soccerball");
soccerball.scale =.1;

var volleyball = createSprite(20,250);
volleyball.setAnimation("volleyball")
volleyball.scale =.1

var trave = createSprite(200,0,100,20);
trave.shapeColor = "white"

basketball.setVelocity(8,0);
soccerball.setVelocity(-6,0);
volleyball.setVelocity(8,0);


createEdgeSprites();

function draw() {
  

 

basketball.bounceOff(edges);
soccerball.bounceOff(edges);
volleyball.bounceOff(edges);
aluno.bounceOff(edges);
 
 
if (keyDown("w")) {
   aluno.y = aluno.y -4;
 }
  if (keyDown("s")) {
   aluno.y = aluno.y +4;
 }
 if (keyDown("d")) {
   aluno.x = aluno.x +4;
 }
 if (keyDown("a")) {
   aluno.x = aluno.x -4;
 }
 
 if (aluno.isTouching(basketball) || aluno.isTouching(soccerball) || aluno.isTouching(volleyball)) {
  aluno.x = 200
  aluno.y = 350
  playSound("assets/category_sports/One_Whistle_SFX.mp3")

 }
 if (aluno.isTouching(trave)) {
   playSound("assets/category_alerts/playful_quirky_positive_game_cue_1.mp3")
 }
 

  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
