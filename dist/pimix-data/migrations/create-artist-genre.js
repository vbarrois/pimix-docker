'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ArtistGenres', {
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
      genre_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Genres',
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
          fields: ['artist_id', 'genre_id']
        }
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ArtistGenres')
  }
}
