let img, classifier;

function preload(){
  img = loadImage('data:image/jpeg;base64,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');
  classifier = ml5.imageClassifier('MobileNet', modelReady);
}

function setup() {
  // ????????? ????????????
  createCanvas(img.width, img.height+130);
  background(200,0,200);//?????????
  image(img, 0, 0);
  
  input = createInput();
  input.position(20,300);//??? ????????? ??????

  button = createButton('submit');
  button.position(input.x + input.width, 300);//?????? ??????
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is this animal');
  greeting.position(20,input.height+220);//?????? ??????
}

function modelReady(){
  console.log('MobileNet ?????? ???????????? ??????');
  classifier.classify(img, gotResult);
}

function gotResult(err, results){
  fill(255, 255, 0);
  textSize(24);
  text(results[0].label, 2, height-5);
  zz = results[0].label;
  console.log(results);
}

let a;

let input, button, greeting, zz;//zz??? ???

function greet() {
  var name = input.value();
  if(zz === name){
  greeting.html('right answer!');//????????????
  input.value('');
  }else{
  greeting.html('wrong answer..');//????????????
  input.value('');
  }

}
