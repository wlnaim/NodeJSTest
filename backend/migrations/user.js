'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('user', {
            user_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            first_name: {
                type: Sequelize.STRING
            },
            last_name: {
                type: Sequelize.STRING
            },
            birthday: {
                type: Sequelize.DATETIME
            },
            password: {
                type: Sequelize.STRING
            },
            gender_id: {
                type: Sequelize.INTEGER
            }
        });
   },
   down: (queryInterface, Sequelize) => {
       return queryInterface.dropTable('user');
   }
};