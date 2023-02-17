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
    genderBaby: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["Male", "Female"],
      defaultValue: "Male",
      validate: {
        notEmpty: {
          msg: "Gender baby is required",
        },
        notNull: {
          msg: "Gender baby is required",
        },
      },
    },
    babyLength: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Baby length is required",
        },
        notNull: {
          msg: "Baby length is required",
        },
        min: {
          args: 1,
          msg: "Baby length minimum is 20cm"
        },
        isNumeric: {
          msg: "Wrong input type in baby length"
        }
      },
    },
    babyWeight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Baby weight is required",
        },
        notNull: {
          msg: "Baby weight is required",
        },
        min: {
          args: 1,
          msg: "Baby weight minimum is 1 kg"
        },
        isNumeric: {
          msg: "Wrong input type in baby weight"
        }
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Born date is required",
        },
        notNull: {
          msg: "Born date is required",
        },
      },
    },
    partusProcess: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["Normal", "Caesar", "Waterbirth"],
      defaultValue: "Normal",
      validate: {
        notEmpty: {
          msg: "Partus process is required",
        },
        notNull: {
          msg: "Partus Process is required",
        },
      },
    },
    birthStatus: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["Healthy", "Disable", "Death"],
      defaultValue: "Healthy",
      validate: {
        notEmpty: {
          msg: "Birth status is required",
        },
        notNull: {
          msg: "Birth status is required",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Baby',
  });
  return Baby;
};