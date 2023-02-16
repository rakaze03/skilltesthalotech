const { Patient, Baby, sequelize } = require("../models/index")

class Controller {
    static async listPatients (req, res, next) {
        try {
            let patients = await Patient.findAll({
                attributes: ["id", "motherName", "motherAge", "gestationalAge"],
                include: {
                    model: Baby,
                    attributes: ["PatientId", "genderBaby", "babyLength", "babyWeight", "date", "partusProcess", "birthStatus"]
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
                attributes: ["PatientId", "genderBaby", "babyLength", "babyWeight", "date", "partusProcess", "birthStatus"],
                include: {
                    model: Patient,
                    attributes: ["motherName", "motherAge", "gestationalAge"]
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
          let { motherName, motherAge, gestationalAge } = req.body
          let patient = await Patient.create(
            {
            motherName, motherAge, gestationalAge
            },
            { transaction: t}
          )
         await t.commit()
         res.status(201).json({message: `Data patient ${motherName} has been added`})
        } catch (err) {
            next(err)
            await t.rollback()
        }
    }

    static async addBaby (req, res, next) {
        const t = await sequelize.transaction()
        try {
            let { id } = req.params
            if (!id) {
                throw { name: "NOT_FOUND"}
            }
            let patient = await Patient.findByPk(id)
            let { genderBaby, babyLength, babyWeight, date, partusProcess, birthStatus } = req.body
            let baby = await Baby.create(
            {
                PatientId: patient.id,
                genderBaby,
                babyLength,
                babyWeight,
                date,
                partusProcess,
                birthStatus
            },
            { transaction: t}
            )
            await t.commit()
            res.status(201).json({ message: `Data baby from ${patient.motherName} has been added`})
        } catch (err) {
            console.log(err)
            next(err)
            await t.rollback()
        }
    }

    static async updatePatientById (req, res, next) {
        try {  
        let { id } = req.params;
        let { motherName, motherAge, gestationalAge } = req.body
        let patient = await Patient.update(
            {
            motherName, motherAge, gestationalAge
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