'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Genres',
      'state',
      {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    );

  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Genres',
      'state'
    );
  }
}