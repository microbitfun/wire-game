// Start with 10 lives and countdown is 40000 milliseconds. (40 seconds)
basic.showIcon(IconNames.Heart)
game.setLife(10)
game.startCountdown(40000)
basic.forever(function () {
    // Test if you touch the iron wire with your iron eye. Then you will loose 1 live.
    if (input.pinIsPressed(TouchPin.P1)) {
        music.playTone(523, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Sad)
        game.removeLife(-1)
        basic.pause(200)
    }
    // Test if you touch the last coffee cup. Then you win.
    if (input.pinIsPressed(TouchPin.P2)) {
        music.playMelody("E D G F B A C5 B ", 120)
        basic.showIcon(IconNames.Happy)
        basic.showString("Won")
    }
})
