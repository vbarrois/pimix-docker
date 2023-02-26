'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return Promise.all(
      [
        queryInterface.addColumn(
          'Artists',
          'spotifyId',
          {
            type: Sequelize.STRING,
            allowNull: true
          }
        ),
        queryInterface.addColumn(
          'Artists',
          'popularity',
          {
            type: Sequelize.INTEGER,
            allowNull: true
          }
        ),
        queryInterface.addColumn(
          'Artists',
          'followers',
          {
            type: Sequelize.INTEGER,
            allowNull: true
          }
        )
      ]
    )
  },

  down: function(queryInterface, Sequelize) {
    return Promise.all(
      [
        queryInterface.removeColumn(
          'Artists',
          'spotifyId'
        ),
        queryInterface.removeColumn(
          'Artists',
          'popularity'
        ),
        queryInterface.removeColumn(
          'Artists',
          'followers'
        )
      ]
    )
  }
}