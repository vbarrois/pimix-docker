'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PlaylistSongs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playlistid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Playlists',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      index: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      songid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Songs',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
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
    return queryInterface.dropTable('PlaylistSongs')
  }
}
