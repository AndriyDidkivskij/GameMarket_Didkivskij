console.log("GameMarket")
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {
    // Завантажуємо фотографію
    this.load.image('me', 'assets/me.jpg');
}

function create() {
    // Додаємо фотографію на сцену за допомогою add.image
    var photo = this.add.image(400, 300, 'me');

    // Ресайзимо фотографію до відповідного розміру
    photo.setScale(0.5); // Змінюйте значення, якщо потрібно
}

