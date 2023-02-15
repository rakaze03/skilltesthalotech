const { Patient, Baby, sequelize } = require("../models/index")

class Controller {
    static async listPatients (req, res, next) {
        try {
            let patients = await Patient.findAll({
                attributes: ["id", "motherName", "motherAge", "gestationalAge", "date", "partusProcess"],
                include: {
                    model: Baby,
                    attributes: ["PatientId", "genderBaby", "babyLength", "babyWeight", "birthStatus"]
                }
            })
            res.status(200).json(patients)
        } catch (err) {
            next(err)
        }
    }

    static async listBabies (req, res, next) {
        try {
            let babies = await Baby.findAll({
                attributes: ["PatientId", "genderBaby", "babyLength", "babyWeight", "birthStatus"],
                include: {
                    model: Patient,
                    attributes: ["motherName", "motherAge", "gestationalAge", "date", "partusProcess"]
                }
            })
            res.status(200).json(babies)
        } catch (err) {
            next(err)
        }
    }

    static async addPatient (req, res, next) {
        const t = await sequelize.transaction()
        try {
          let { motherName, motherAge, gestationalAge, date, partusProcess, genderBaby1, babyLength1, babyWeight1, birthStatus1, genderBaby2, babyLength2, babyWeight2, birthStatus2} = req.body
          let patient = await Patient.create(
            {
            motherName, motherAge, gestationalAge, date, partusProcess
            },
            { transaction: t}
          )
          let baby = await Baby.bulkCreate(
            [
                {
                    PatientId: patient.id,
                    genderBaby: genderBaby1,
                    babyLength: babyLength1,
                    babyWeight: babyWeight1,
                    birthStatus: birthStatus1
                },
                {
                    PatientId: patient.id,
                    genderBaby: genderBaby2,
                    babyLength: babyLength2,
                    babyWeight: babyWeight2,
                    birthStatus: birthStatus2
                }
            ],
            { transaction: t}
          )
         await t.commit()
         res.status(201).json({patient, baby})
        } catch (err) {
            next(err)
            await t.rollback()
        }
    }

    static async updatePatientById (req, res, next) {
        try {  
        let { id } = req.params;
        let { motherName, motherAge, gestationalAge, date, partusProcess} = req.body
        let patient = await Patient.update(
            {
            motherName, motherAge, gestationalAge, date, partusProcess
            },
            {
            where: {
                id: id
                }
            }
            )
        res.status(201).json({
            message: `Patient with id ${id} has been updated`
        })
        } catch (err) {
            next(err)
        }

    }

    static async deletePatientById (req, res, next) {
        try {
            let { id } = req.params
            if (!id) {
                throw { name: "NOT_FOUND"}
            }
            let patient = await Patient.findByPk(id)
            if (!patient) {
                throw { name: "NOT_FOUND"}
            }
            await Patient.destroy({
                where: {
                    id,
                }
            })
            res.status(200).json({
                message: `Data ${patient.motherName} success to delete`
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller