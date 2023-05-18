'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Jobs",[
      {
        name:"Front end Developer",
        salary:456,
        experience:5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Front end Developer",
        salary:456,
        experience:5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Designer Developer",
        salary:456,
        experience:5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Q&A Developer",
        salary:456,
        experience:5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Tester Developer",
        salary:456,
        experience:5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Backend end Developer",
        salary:456,
        experience:5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Jobs", null, {});
  }
};
