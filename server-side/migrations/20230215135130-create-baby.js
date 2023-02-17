'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Babies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PatientId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Patients",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      genderBaby: {
        type: Sequelize.ENUM,
        values: ["Male", "Female"],
        allowNull: false,
        defaultValue: "Male"
      },
      babyLength: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      babyWeight: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      partusProcess: {
        type: Sequelize.ENUM,
        values: ["Normal", "Caesar", "Waterbirth"],
        allowNull: false,
        defaultValue: "Normal"
      },
      birthStatus: {
        type: Sequelize.ENUM,
        values: ["Healthy", "Disable", "Death"],
        allowNull: false,
        defaultValue: "Healthy"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Babies');
  }
};