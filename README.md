# airQuality

![SparkFun Air Quality Breakout - CCS811](https://www.sparkfun.com/products/14193) 

This package adds functionality to the weather:bit board sold by SparkFun.

To use this package, go to https://makecode.microbit.org, click ``Add Package`` and search for: https://github.com/ADataDate/pxt-airQuality in the search bar. 

### ~

This package is still under development and subject to changes. 

### ~


### Usage 

* The CCS811 Air Quality Sensor can be directly mated to the matching pins (I2C) of thr weather:bit for micro:bit system. 
* I2C is set up so the user neds to start the device, then read the data. 
* The CCS811 sensor takes 20 minutes to burn-in or get meaningful data.
* The TVOCs are presented as number between 0ppb to 1187ppb. 
* The eCO2 (equivalent CO2) is presented as a number between 400ppm to 8192ppm. 


### Micro:bit Pins Used 

The following micro:bit pins are used for weather, atmospheric and aquaponics monitoring:  

* ``P19`` --  I2C - SCL
* ``P20`` --  I2C - SDA 

### CCS811 Start Function 

The first block in the AirQuality package is the |CCS811 Start| block. At the start of any program which will use the air quality sensor place the |CCS811 Start| block in a 
"Forever" block above the rest of your code.

### Air Quality Data
 
The CCS811 air quality sensors communicates via I2C. The data returned as a number can be stored in a variable, displayed on the 5x5 LED Matrix or sent serially to OpenLog. 
* ``|CCS811 Start|``block sets the CCS811 sensor into APP MODE - basically turns it on and ready to transmit data
* ``|Read eCO2|``block reads the equivalent CO2 and can be any number between 400ppm and 8182ppm. 
* ``|Read TVOCs|``block reads the total organic volatile compounds and can be any number between 0ppb to 1187ppb. 
 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* ``|Device Error|``block is used while troubleshooting otherwise don't use it. It will return a number corresponding to a specific error on the CCS811.
* ``|Device Status|``block is used while troubleshooting otherwise don't use it. 
* ``|HWID|``block is used to test the most basic read on the I2C line. Use if you are having probelms establishing communication. 

### Example Project:
The following project will read the eCO2 and TVOCs data and then display it on the 5x5 LED matrix. 

```blocks
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
```


## License

MIT

## Supported targets

* for PXT/microbit

```package
airQuality=github:ADataDate/pxt-airQuality
```
