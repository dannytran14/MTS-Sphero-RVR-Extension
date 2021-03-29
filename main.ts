function Sonar () {
    if (grove.measureInCentimeters(DigitalPin.P1) < 25) {
        return 2
    } else if (grove.measureInCentimeters(DigitalPin.P1) < 25) {
        return 1
    } else {
        return 0
    }
}
function RVR_Movement () {
    sphero.drive(50, 0)
    basic.pause(100)
    sphero.drive(50, 90)
    sphero.setAllLeds(255, 0, 0)
}
function Collision_Avoidance () {
    if (true) {
    	
    } else {
    	
    }
}
basic.forever(function () {
	
})
