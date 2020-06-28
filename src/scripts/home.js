class Home {
  constructor() {

  }

  draw() {
    this._background();
    this._text();
    this._button();
  }

  _background() {
    image(backgroundHome, 0, 0, width, height);
  }

  _text() {
    textAlign(CENTER);
    textFont(fontHome);
    textSize(50);
    text('As aventuras de', width/2, height / 3);
    textSize(150);
    text('Hipsta', width/2, (height / 5) * 3);
  }

  _button() {
    button.y = (height / 7) * 5;
    button.draw();
  }
}
