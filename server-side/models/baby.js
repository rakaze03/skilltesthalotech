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
      type: DataTypes.STRING,
      allowNull: false,
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
      type: DataTypes.STRING,
      allowNull: false,
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
      type: DataTypes.STRING,
      allowNull: false,
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