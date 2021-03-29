function Sonar_Pick_Up () {
    if (grove.measureInCentimeters(DigitalPin.P1) <= 8) {
        return 1
    }
    return 0
}
function Husky_Centre () {
    while (position < 140 || position > 180) {
        huskylens.request()
        position = huskylens.readeBox_index(1, 1, Content1.xCenter)
        sphero.resetYaw()
        if (position > 180) {
            sphero.drive(0, 25)
        } else {
            sphero.drive(0, -25)
        }
        basic.pause(300)
    }
}
function Close_Gripper () {
    servos.P0.setAngle(180)
}
function Move_Fast () {
    sphero.drive(40, 0)
    basic.pause(100)
}
function Move_Arm_Out () {
    servos.P1.setAngle(90)
}
function Initialise () {
    huskylens.initI2c()
    huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
    return
}
function Move_Slow () {
    sphero.drive(10, 0)
    basic.pause(100)
}
function Husky_Locate () {
    huskylens.request()
    position = huskylens.readeBox_index(1, 1, Content1.xCenter)
    if (position == -1) {
        return 0
    } else {
        return 1
    }
}
function Sonar_Activate () {
    if (grove.measureInCentimeters(DigitalPin.P1) < 25) {
        return 1
    }
    return 0
}
function Open_Gripper () {
    servos.P0.setAngle(0)
}
function Rotate () {
    sphero.resetYaw()
    sphero.drive(0, 40)
    basic.pause(100)
}
let position = 0
Initialise()
basic.forever(function () {
	
})
basic.forever(function () {
    while (Husky_Locate() == 0) {
        Rotate()
    }
    Husky_Centre()
    Open_Gripper()
    while (Sonar_Activate() == 0) {
        Move_Fast()
    }
    while (Sonar_Pick_Up() == 0) {
        Move_Slow()
    }
    Close_Gripper()
    basic.pause(5000)
})
