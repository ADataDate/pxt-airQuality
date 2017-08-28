/**
* Mary West @ SparkFun Electronics 
* Ryan Mortenson https://github.com/ryanjmortenson
* August 25, 2017
* https://github.com/ADataDate/pxt-CCS811

* Development environment specifics:
* Written in Microsoft Makecode
* Tested with a SparkFun weather:bit, CCS811 sensor for micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions 
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


/**
 * Functions to operate the CCS811
 */

//% color=#33acff icon="\u27BE"
namespace airQuality {
	
	//CCS811 Addresses
	const ccsAddr = 0x5B
	const ccsStatus = 0x00
	const ccsMeas = 0x01
	const ccsAlg = 0x02
	const ccsRaw = 0x03
	const ccsEnv = 0x05
	const ccsNtc = 0x06
	const ccsThres = 0x10
	const ccsBase = 0x11
	const ccsHi = 0x20 
	const ccsHv = 0x21 
	const ccsBoot = 0x23
	const ccsAppv = 0x24
	const ccsErr = 0xE0
	const ccsApps = 0xF4 
	const ccsReset = 0xFF
	
  
	/**
     * Writes a value to a register on the CCS811 Air Quality Sensor
     */
    function writeCCSReg(reg: number, val: number): void {
        pins.i2cWriteNumber(ccsAddr, reg << 8 | val, NumberFormat.Int16BE)
    }
	
	/**
     * Reads a value from a register on the CCS811 Air Quality Sensor
     */
    function readCCSReg(reg: number, format: NumberFormat) {
        pins.i2cWriteNumber(ccsAddr, reg, NumberFormat.UInt8LE, false)
        let val = pins.i2cReadNumber(ccsAddr, format, false)
        return val
    }
}
