// tests go here; this will not be compiled when this package is used as a library
let eCO2 = 0
let TVOCs = 0
basic.forever(() => {
    TVOCs = airQuality.readTvoc()
    eCO2 = airQuality.readCo2()
    basic.showString("TVOC")
    basic.showNumber(TVOCs)
    basic.pause(1000)
    basic.showString("eCO2")
    basic.showNumber(eCO2)
    basic.pause(1000)
})
airQuality.appStart()