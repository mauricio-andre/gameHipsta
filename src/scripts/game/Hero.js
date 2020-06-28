class Hero extends Animation {
  constructor(image, settings) {
    super(
      image,
      settings.initialX,
      settings.variationY,
      settings.objectWidth,
      settings.objectHeight,
      settings.widthSprite,
      settings.heightSprite,
      settings.colsSprite,
      settings.framesSprite
    );

    this.InitialY = height - settings.objectHeight - this.variationY;
    this.y = this.InitialY;
    this.jumps = 0;
    this.gravity = 3;
    this.jumpSpeed = 0;
    this.jumpLimit = settings.jumpLimit;
    this.jumpHeight = -settings.jumpHeight;
    this.invincible = false;
  }

  reset() {
    this.jumps = 0;
    this.y = this.InitialY;
    this.invincible = false;
  }

  jump() {
    if (this.jumps < this.jumpLimit) {
      this.jumps += 1;
      this.jumpSpeed = this.jumpHeight;
      jumpSound[currentHero].play();
    }
  }

  applyGravity() {
    this.y += this.jumpSpeed;
    this.jumpSpeed += this.gravity;

    if (this.y > this.InitialY) {
      this.jumps = 0;
      this.y = this.InitialY;
    }
  }

  becomeInvincible() {
    this.invincible = true;
    setTimeout(() => {
      this.invincible = false;
    }, 1000);
  }

  checkCollision(enemy) {
    if (this.invincible) {
      return false;
    }

    const precision = .7;
    const collided = collideRectRect(
      this.x + (this.width * .2),
      this.y + (this.height * .2),
      this.width * precision,
      this.height * precision,
      enemy.x + (enemy.width * .2),
      enemy.y + (enemy.height * .2),
      enemy.width * precision,
      enemy.height * precision
    );

    return collided;
  }
}
