let distance = 0
basic.showIcon(IconNames.Duck)
Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
Tinybit.RGB_Car_Program().show()
Tinybit.RGB_Car_Program().clear()
basic.forever(function () {
    distance = Tinybit.Ultrasonic_Car()
    if (distance < 5) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 5)
    } else if (distance >= 5 && distance < 20) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
    }
})
basic.forever(function () {
    distance = Tinybit.Ultrasonic_Car()
    if (distance < 5) {
        Tinybit.RGB_Car_Big2(0, 0, 255)
    } else if (distance >= 5 && distance < 20) {
        Tinybit.RGB_Car_Big2(0, 255, 0)
    } else {
        Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
    }
})
basic.forever(function () {
    distance = Tinybit.Ultrasonic_Car()
    if (distance < 5) {
        basic.showArrow(ArrowNames.North)
    } else if (distance >= 5 && distance < 20) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.clearScreen()
    }
})
