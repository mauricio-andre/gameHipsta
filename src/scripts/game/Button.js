class Button {
  constructor(text, x, y, scene) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.scene = scene;
    this.button = createButton(this.text);
    this.button.addClass('botao-tela-inicial');
    this.button.mousePressed(() => {
      game.reset();
      this._changeScene();
    });
  }

  draw() {
    this.button.position(this.x, this.y);
    this.button.center('horizontal');
  }

  _changeScene() {
    currentScene = this.scene;
    this.button.remove();
  }
}
