basic.forever(function () {
    if (input.temperature() > 22) {
        basic.showString("calor")
    } else {
        basic.showString("fred")
    }
})
basic.forever(function () {
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() < 50) {
        music.play(music.stringPlayable("G F G A - F E D ", 120), music.PlaybackMode.UntilDone)
    } else {
        music.stopAllSounds()
    }
})
