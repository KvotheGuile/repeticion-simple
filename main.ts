function Count (num: number) {
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(num * index)
    }
}
function Faces () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Sad)
        basic.showIcon(IconNames.Asleep)
        basic.showIcon(IconNames.Surprised)
        basic.showIcon(IconNames.Happy)
    }
}
input.onButtonPressed(Button.A, function () {
    Count(1)
    Faces()
})
input.onButtonPressed(Button.B, function () {
    Count(2)
    Faces()
})
let random = 0
for (let i = 0; i <= random; i++) {
    basic.showNumber(i)
    for (let index = 0; index < i; index++) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        basic.pause(150)
    }
}
