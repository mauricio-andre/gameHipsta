class Life {
  constructor(total, initial) {
    this.total = total;
    this.initial = initial;
    this.lives = this.initial;

    this.width = 25;
    this.height = 20;
    this.xInitial = 20;
    this.y = 20;
  }

  reset() {
    this.lives = this.initial;
  }

  draw() {
    for (let i = 1; i <= this.lives; i++) {
      const marginLeft = i * 10;
      const x = this.xInitial * i;
      image(imageLife, x + marginLeft, this.y, this.width, this.height);
    }
  }

  addLife() {
    if (this.lives <= this.total) {
      this.lives += 1;
    }
  }

  dropLife() {
    this.lives -= 1;
  }
}
