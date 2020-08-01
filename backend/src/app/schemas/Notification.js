/*
Diferença entre o schema do mongo pro model do sequelize
no model os dados são entruturados, todos tem as mesmas colunas de informações
já no mongo os dados não precisam ter necessariamente as mesmas colunas de infromações,
além disso no mongo não há migration então dá pra mexer no banco qundo quiser
*/

import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Number,
      required: true,
    },
    read: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    // controla os campos updated e created
    timestamps: true,
  }
);

export default mongoose.model('Notification', NotificationSchema);
