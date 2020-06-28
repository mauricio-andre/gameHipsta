class Animation {
  constructor(image, x, variationY, objectWidth, objectHeight, widthSprite, heightSprite, colsSprite, framesSprite) {
    this.image = image;
    this.x = x;
    this.variationY = variationY;
    this.y = height - objectHeight - this.variationY;
    this.width = objectWidth;
    this.height = objectHeight;
    this.widthSprite = widthSprite;
    this.heightSprite = heightSprite;
    this.currentFrame = 0;

    let count = 0;
    let xSprite = 0;
    let ySprite = 0;
    const matrix = [];
    while(matrix.length < framesSprite) {
      matrix.push([xSprite, ySprite]);
      xSprite += widthSprite;
      count += 1;
      if (count >= colsSprite) {
        count = 0;
        xSprite = 0;
        ySprite += heightSprite;
      }
    }

    this.matrix = matrix;
  }

  show() {
    image(
      this.image,
      this.x,
      this.y,
      this.width,
      this.height,
      this.matrix[this.currentFrame][0],
      this.matrix[this.currentFrame][1],
      this.widthSprite,
      this.heightSprite
    );

    this.animate();
  }

  animate() {
    this.currentFrame += 1;
    if (this.currentFrame >= this.matrix.length) {
      this.currentFrame = 0;
    }
  }
}
