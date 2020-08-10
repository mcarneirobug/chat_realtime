import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

require('dotenv').config();

const models = [];

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
    models.map(model => model.init(this.connection));
  }
}

export default new Database();