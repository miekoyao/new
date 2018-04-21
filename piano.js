var context = new AudioContext;

var oct1 = [32.7032, 34.6478, 36.7081, 38.8909, 41.2034, 43.6535, 46.2493, 48.9994, 51.9131, 55.0000, 58.2705, 61.7354];
var oct2 = [65.4064, 69.2957, 73.4162, 77.7817, 82.4069, 87.3071, 92.4986, 97.9989, 103.826, 110.000, 116.541, 123.471];
var oct3 = [130.813, 138.591, 146.832, 155.563, 164.814, 174.614, 184.997, 184.997, 207.652, 220.000, 233.082, 246.942];
var oct4 = [261.626, 277.183, 293.665, 311.127, 329.628, 349.228, 369.994, 391.995, 415.305, 440.000, 466.164, 493.883];
var oct5 = [523.251, 554.365, 587.330, 622.254, 659.255, 698.456, 	739.989, 783.991, 830.609, 880.000, 932.328, 987.767];
var oct6 = [1046.50, 1108.73, 1174.66, 1244.51, 1318.51, 1396.91, 1479.98, 1567.98, 1661.22, 1760.00, 1864.66, 1975.53];

var keyC = document.getElementById("0");
var keyCsharp = document.getElementById("1");
var keyD = document.getElementById("2");
var keyDsharp = document.getElementById("3");
var keyE = document.getElementById("4");
var keyF = document.getElementById("5");
var keyFsharp = document.getElementById("6");
var keyG = document.getElementById("7");
var keyGsharp = document.getElementById("8");
var keyA = document.getElementById("9");
var keyAsharp = document.getElementById("10");
var keyB = document.getElementById("11");

var dropDown = document.getElementById("octaveDropdown");
var dropValue = dropDown.options[dropDown.selectedIndex].value;


var buttons = document.getElementsByClassName("button");
for (i=0;i<buttons.length;i++){
  buttons[i].addEventListener("click", key); 
  buttons[i].addEventListener("mouseover", hover); 
  buttons[i].addEventListener("mouseout", notHover); 
}

function key(){     
  playSound(parseInt(this.id));
  
};    

function playSound(note){
  time = context.currentTime;
  dropValue = dropDown.options[dropDown.selectedIndex].value;
  oscillator = context.createOscillator();
  oscillator.frequency.value = parseInt(window[dropValue][note]);
  oscillator.connect(context.destination);
  oscillator.start(time);
  oscillator.stop(time+0.7);  
}

function hover(){
  if (this.className == "white button"){
    this.style.backgroundColor = "#ededed";
  }
  if (this.className == "black button"){
    this.style.backgroundColor = "#1c1c1c";
  }
}
function notHover(){
  if (this.className == "white button"){
    this.style.backgroundColor = "#ffffff";
  }
  if (this.className == "black button"){
    this.style.backgroundColor = "#000000";
  }
}