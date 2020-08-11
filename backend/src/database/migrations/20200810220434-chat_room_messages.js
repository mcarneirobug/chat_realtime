'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.createTable('chat_room_messages', { 
       id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true, 
       },
       autor: {
         type: Sequelize.STRING,
         allowNull: false,
         unique: true,
       },
       messagem: {
        type: Sequelize.STRING,
        allowNull: true,
       },
       chat_room_id: {
        type: Sequelize.INTEGER
       },
       created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: queryInterface => {
     return queryInterface.dropTable('chat_room_messages');
  },
};
