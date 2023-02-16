'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.hasMany(models.Baby, {
        foreignKey: "PatientId"
      })
    }
  }
  Patient.init({
    motherName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Mother name is required",
        },
        notNull: {
          msg: "Mother name is required",
        },
      },
    },
    motherAge: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Mother age is required",
        },
        notNull: {
          msg: "Mother age is required",
        },
      },
    },
    gestationalAge: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Gestational age is required",
        },
        notNull: {
          msg: "Gestational age is required",
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};