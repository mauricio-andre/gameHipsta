class Game {
  constructor() {
    this.index = 0;
    this.mapa = tape.levels[currentLevel].mapa;
  }

  setup() {
    const settingsHero = tape.heroes[currentHero];
    score = new Score();
    background = new Background(gameBackground[currentLevel], 3);
    life = new Life(settingsHero.maxLives, settingsHero.initialLives);

    tape.levels[currentLevel].enemies.forEach((settingsEnemy, index) => {
      const enemy = new Enemy(imageEnemies[currentLevel][index], settingsEnemy);
      enemies.push(enemy);
    });

    hero = new Hero(imageHeroes[currentHero], settingsHero);
  }

  reset() {
    const currentLine = this.mapa[this.index];
    const enemy = enemies[currentLine.enemy];
    enemy.reset();
    this.index = 0;
    currentLevel = 0;
    score.reset();
    life.reset();
    hero.reset();
    loop();
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      hero.jump();
    }
  }

  draw() {
    background.show();
    background.move();
    score.show();
    score.addScore();

    life.draw();

    hero.show();
    hero.applyGravity();

    const currentLine = this.mapa[this.index];
    const enemy = enemies[currentLine.enemy];
    enemy.speed = currentLine.speed;
    enemy.show();
    enemy.move();

    if (enemy.x < -enemy.width) {
      this.index += 1;
      enemy.aparece();
      if (this.index >= this.mapa.length) {
        this.index = 0;
      }
    }

    if (hero.checkCollision(enemy)) {
      life.dropLife();
      hero.becomeInvincible();
      if (life.lives === 0) {
        image(imagemGameOver, width/2 -200, height/3);
        const buttonReload = new Button(
          'Tentar novamente',
          width/2 -200,
          height/3 + 100,
          'game'
        );
        buttonReload.draw();
        noLoop();
      }
    }
  }
}
