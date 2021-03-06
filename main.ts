input.onButtonPressed(Button.A, function () {
    jokalaria.move(-1)
})
input.onButtonPressed(Button.B, function () {
    jokalaria.move(1)
})
let meteorito: game.LedSprite = null
let jokalaria: game.LedSprite = null
jokalaria = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(1200)
    meteorito = game.createSprite(randint(0, 4), 0)
    meteorito.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        meteorito.move(1)
    }
    if (meteorito.isTouching(jokalaria)) {
        game.gameOver()
        basic.showString("GAME OVER")
    } else {
        meteorito.delete()
        game.addScore(1)
    }
})
