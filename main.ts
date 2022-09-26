let current_temperature = 0
// Created by: John Hanekom
// Date: September 26th, 2022
// 
// This program says the temperature every second
basic.forever(function () {
    current_temperature = input.temperature()
    basic.showNumber(current_temperature)
    basic.pause(1000)
    basic.clearScreen()
})
