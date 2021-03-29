
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#000000 icon=""
namespace MTS_Sphero_RVR {
    /**
     * TODO: describe your function here
     */
    //% block
    export function Move_Arm_In(): void {
        servos.P1.setAngle(0);
    }

    /**
     * TODO: describe your function here
     */
    //% group="MTS_HuskyLens"
    //% blockGap=8
    //% block
    export function Husky_Centre(): void {
        let position : number;
        while (position < 140 || position > 180) {
            huskylens.request();
            position = huskylens.readeBox_index(1, 1, Content1.xCenter);
            sphero.resetYaw();
            if (position > 180) {
                sphero.drive(0, 25);
            } else {
                sphero.drive(0, -25);
            }
            basic.pause(300);
        }
    }

    /**
     * TODO: describe your function here
     */
    //% group="MTS_Sonar"
    //% blockGap=8
    //% block
    export function Sonar_Pick_Up(): boolean {
        if (grove.measureInCentimeters(DigitalPin.P1) <= 8) {
        return true;
    }
    return false;
    }

    /**
     * TODO: describe your function here
     */
    //% block
    //% group="MTS_Gripper"
    //% blockGap=8
    export function Close_Gripper(): void {
        servos.P0.setAngle(180);
    }

    /**
     * TODO: describe your function here
     */
    //% group="MTS_Movement"
    //% blockGap=8
    //% block
    export function Move_Fast(): void {
        sphero.drive(40, 0)
        basic.pause(100)
    }

    /**
     * TODO: describe your function here
     */
    //% group="MTS_Arm_Control"
    //% blockGap=8
    //% block
    export function Move_Arm_Out(): void {
        servos.P1.setAngle(90)
    }

    /**
     * TODO: describe your function here
     */
    //% block
    export function Initialise(): void {
        huskylens.initI2c()
        huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
    }
    /**
     * TODO: describe your function here
     */
    //% group="MTS_Movement"
    //% blockGap=8
    //% block
    export function Move_Slow () {
        sphero.drive(10, 0)
        basic.pause(100)
    }

    /**
     * TODO: describe your function here
     */
    //% block
    //% group="MTS_HuskyLens"
    //% blockGap=8
    export function Husky_Locate () : boolean {
        let position: number;
        huskylens.request();
        position = huskylens.readeBox_index(1, 1, Content1.xCenter);
        if (position == -1) {
            return false
        } else {
            return true
        }
    }
    /**
     * TODO: describe your function here
     */
    //% block
    //% group="MTS_Sonar"
    //% blockGap=8
    export function Sonar_Activate (): boolean {
    if (grove.measureInCentimeters(DigitalPin.P1) < 25) {
        return true
    }
    return false
    }
    /**
     * TODO: describe your function here
     */
    //% group="MTS_Arm_Control"
    //% blockGap=8
    //% block
    export function Open_Gripper () {
        servos.P0.setAngle(0)
    }

    /**
     * TODO: describe your function here
     */
    //% group="MTS_Movement"
    //% blockGap=8
    //% block
    export function Rotate () {
        sphero.resetYaw()
        sphero.drive(0, 40)
        basic.pause(100)
    }
    /**
     * TODO: describe your function here
     */
    //% block

    /**
     * TODO: describe your function here
     */
    //% block
    
    /**
     * TODO: describe your function here
     */
    //% block
    
    /**
     * TODO: describe your function here
     */
    //% block
}


