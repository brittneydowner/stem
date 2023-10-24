for (let index = 0; index < 4; index++) {
    music.play(music.stringPlayable("C5 A - E C - D - ", 120), music.PlaybackMode.UntilDone)
    led.plotBarGraph(
    1,
    2,
    true
    )
    led.setBrightness(21)
}
