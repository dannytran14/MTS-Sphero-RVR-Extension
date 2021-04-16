function _31 () {
    if (MTS_Sphero_RVR.Husky_Locate()) {
        sphero.setAllLeds(0, 255, 0)
    }
}
function _13 () {
    MTS_Sphero_RVR.Move_Fast()
    for (let index = 0; index < 3; index++) {
        MTS_Sphero_RVR.Move_Forward_With_Heading(90)
    }
}
function _33 () {
    while (MTS_Sphero_RVR.Husky_Locate()) {
        MTS_Sphero_RVR.Rotate()
    }
    MTS_Sphero_RVR.Husky_Centre()
    MTS_Sphero_RVR.Move_Slow()
}
function _21 () {
    while (!(MTS_Sphero_RVR.Sonar_Object_Detected())) {
        MTS_Sphero_RVR.Move_Fast()
    }
    MTS_Sphero_RVR.Move_Slow()
    MTS_Sphero_RVR.Stop()
}
function _22 () {
    sphero.setAllLeds(0, 0, 255)
    while (!(MTS_Sphero_RVR.Sonar_Object_Detected())) {
    	
    }
    sphero.setAllLeds(255, 0, 0)
    MTS_Sphero_RVR.Move_Forward_With_Heading(180)
}
function _11 () {
    MTS_Sphero_RVR.Move_Fast()
    MTS_Sphero_RVR.Move_Backward()
}
function _32 () {
    if (MTS_Sphero_RVR.Husky_Locate()) {
        MTS_Sphero_RVR.Husky_Centre()
    }
    MTS_Sphero_RVR.Move_Slow()
}
input.onButtonPressed(Button.B, function () {
    _22()
})
function _12 () {
    MTS_Sphero_RVR.Move_Fast()
    MTS_Sphero_RVR.Move_Forward_With_Heading(90)
    sphero.setAllLeds(255, 0, 0)
}
