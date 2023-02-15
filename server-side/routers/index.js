const Controller = require("../controllers/controllers")
const errorHandler = require("../middlewares/errorHandler")

const router = require("express").Router()

router.get("/patients", Controller.listPatients)
router.post("/patients", Controller.addPatient)
router.put("/patients", Controller.updatePatientById)
router.delete("/patients", Controller.deletePatientById)

router.use(errorHandler)

module.exports = router