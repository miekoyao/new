var context = new AudioContext;
var oscillator = context.createOscillator();
oscillator.frequency.value = 800;
oscillator.connect(context.destination);
//oscillator.start(0);

var oct1arr = [32.7032, 34.6478, 36.7081, 38.8909, 41.2034, 43.6535, 46.2493, 48.9994, 51.9131, 55.0000, 58.2705, 61.7354];