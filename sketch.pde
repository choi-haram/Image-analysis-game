let img, classifier;

function preload(){
  img = loadImage('https://wikidocs.net/images/page/103155/image1_q526DTE.jpg');
  classifier = ml5.imageClassifier('MobileNet', modelReady);
}

function setup() {
  createCanvas(img.width, img.height+30);
  background(0);
  image(img, 0, 0);
}

function modelReady(){
  console.log('MobileNet 모델 불러오기 완료');
  classifier.classify(img, gotResult);
}

function gotResult(err, results){
  fill(255, 255, 0);
  textSize(24);
  text(results[0].label, 2, height-5);
}
