class Enemy extends Animation {
  constructor(image, settings) {
    super(
      image,
      width - settings.width,
      settings.variationY,
      settings.objectWidth,
      settings.objectHeight,
      settings.widthSprite,
      settings.heightSprite,
      settings.colsSprite,
      settings.framesSprite
    );

    this.speed = settings.speed;
    this.x = width;
  }

  reset() {
    this.x = width;
  }

  move() {
    this.x -= this.speed;
  }

  aparece() {
    this.x = width;
  }
}
