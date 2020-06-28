function mousePressed() {
  getAudioContext().resume();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  frameRate(40);
  createCanvas(windowWidth, windowHeight);
  gameSound[currentLevel].loop();
  game = new Game();
  home = new Home();
  button = new Button('Iniciar', width/2, height/2, 'game');
  game.setup();
  scenes = {
    game,
    home,
  };
}

function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  scenes[currentScene].draw();
}
