"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     
    */

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "long1",
          lastName: "nguyen1",
          email: "longnguyen1@gmail.com",
          age: 11,
          createdAt: '0000-00-00 00:00:00'
        },
        {
          firstName: "long2",
          lastName: "nguyen2",
          email: "longnguyen2@gmail.com",
          age: 22,
          createdAt: '0000-00-00 00:00:00'

        },
        {
          firstName: "long3",
          lastName: "nguyen3",
          email: "longnguyen3@gmail.com",
          age: 33,
          createdAt: '0000-00-00 00:00:00'

        },
      ],
      {   timestamps: false }
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
