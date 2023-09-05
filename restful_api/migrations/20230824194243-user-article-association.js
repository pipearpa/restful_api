'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Articles', 
    {fields: ['userId'], type: 'foreign key', 
    name: 'user-article-association',
    references: {table: 'users', field:'id'}
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Articles', 'user-article-association');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
