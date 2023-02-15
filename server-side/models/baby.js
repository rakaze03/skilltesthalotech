'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Baby extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Baby.belongsTo(models.Patient, {
        foreignKey: "PatientId"
      })
    }
  }
  Baby.init({
    PatientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Patient id is required",
        },
        notNull: {
          msg: "Patient id is required",
        },
      },
    },
    genderBaby: DataTypes.STRING,
    babyLength: DataTypes.FLOAT,
    babyWeight: DataTypes.FLOAT,
    birthStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Baby',
  });
  return Baby;
};