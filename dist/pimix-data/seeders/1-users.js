'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        login: 'root',
        name: 'Pimix Admin',
        password: '$2a$10$kNo0vLXMVFlMuz3v.yqjzegchG3.DAD956y3PSBZmSlmezfqP8EKa',
        rights: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
