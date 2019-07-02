let game = new Game()

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT)
    canvas.parent("game-board")
}

function draw() {
    game.draw()
}

