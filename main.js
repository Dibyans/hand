Prediction1 = "";
Prediction2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>'
    });
}
console.log("ml5 version",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6HcO-a0Qi/model.json',modelLoaded);

function modelLoaded(){
    console.log("model Loaded!!!")
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "the first prediction is"+ Prediction1;
    speak_data_2 = "and the second prediction is"+ Prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}