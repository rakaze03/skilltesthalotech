const Controller = require("../controllers/controllers")
const errorHandler = require("../middlewares/errorHandler")

const router = require("express").Router()

router.get("/patients", Controller.listPatients)
router.get("/babies", Controller.listBabies)
router.post("/patients", Controller.addPatient)
router.post("/babies/:id", Controller.addBaby)
router.put("/patients/:id", Controller.updatePatientById)
router.delete("/patients/:id", Controller.deletePatientById)

router.use(errorHandler)

module.exports = router