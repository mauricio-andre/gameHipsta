function preload() {
  tape = loadJSON('./tape/tape.json', (data) => {
    data.levels.forEach((level, index) => {
      gameSound.push(loadSound(level.gameSound));
      gameBackground.push(loadImage(level.gameBackground));

      imageEnemies[index] = [];
      level.enemies.forEach(enemy => {
        imageEnemies[index].push(loadImage(enemy.urlImage));
      });
    });

    data.heroes.forEach(hero => {
      imageHeroes.push(loadImage(hero.urlImage));
      jumpSound.push(loadSound(hero.jumpSound));
    });
  });

  imageLife = loadImage('../assets/images/utilities/heart.png');
  imagemGameOver = loadImage('../assets/images/utilities/game-over.png');
  backgroundHome = loadImage('../assets/images/scenes/home/home.png');
  fontHome = loadFont('../assets/fonts/TheWildBreathOfZelda.otf');
}
