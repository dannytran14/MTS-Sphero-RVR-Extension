
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
namespace MTS_Sphero_Rover {
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
    //% block
    export function Sonar_Pick_Up(): void {
    }
}
