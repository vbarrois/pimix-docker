'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      filepath: {
        type: Sequelize.STRING,
        allowNull: false
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      album: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bitrate: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      duration: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      samplerate: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      size: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ino: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      birth: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Songs')
  }
}
