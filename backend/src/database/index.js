import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, File, Appointment];
class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  // responsavel pela conexão com o banco de dados postgres
  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  // responsavel pela conexão com o banco de dados MongoDB
  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/gobarber',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        // não sei qoue é esse, mas deu um erro quando não passei
        useUnifiedTopology: true,
      }
    );
  }
}

export default new Database();
