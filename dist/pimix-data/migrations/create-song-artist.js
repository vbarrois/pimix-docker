'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SongArtists', {
      song_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Songs',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      artist_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Artists',
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
    }, {
      uniqueKeys: {
        actions_unique: {
          fields: ['song_id', 'artist_id']
        }
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SongArtists')
  }
}
