import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import ChatRoom from '../app/models/ChatRoom';
import ChatRoomMessage from '../app/models/ChatRoomMessage';

require('dotenv').config();

const models = [ChatRoom, ChatRoomMessage];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(process.env.DB_URL, {
      dialect: 'mysql',
      define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
      },
    });
    models
    .map(model => model.init(this.connection))
    .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();