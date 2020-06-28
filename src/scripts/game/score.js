class Score {
  constructor() {
    this.value = 0;
  }

  reset() {
    this.value = 0;
  }

  show() {
    textAlign(RIGHT);
    fill('#fff')
    textSize(50);
    text(parseInt(this.value), width - 30, 50);
  }

  addScore() {
    this.value += .1;
  }
}
