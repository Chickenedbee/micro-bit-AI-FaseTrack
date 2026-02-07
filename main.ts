PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Face)
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 180)
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S2, 180)
let I = 0
let J = 0
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.checkFace()) {
        if (PlanetX_AILens.faceData(PlanetX_AILens.Facestatus.X) < 90) {
            I += -2
        }
        if (PlanetX_AILens.faceData(PlanetX_AILens.Facestatus.X) > 150) {
            I += 2
        }
        if (PlanetX_AILens.faceData(PlanetX_AILens.Facestatus.Y) > 150) {
            J += -2
        }
        if (PlanetX_AILens.faceData(PlanetX_AILens.Facestatus.Y) < 90) {
            J += 2
        }
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 180 + I)
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S2, 180 + J)
    }
})
