import Sequelize, { Model } from 'sequelize';

class ChatRoomMessage extends Model {
  static init(sequelize) {
    super.init(
      {
        autor: Sequelize.STRING,
        messagem: Sequelize.STRING
      }, 
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(
      models.ChatRoom, {
        foreignKey: "chat_room_id",
        as: "ChatRoom",
        targetKey: "id"
      });
  }
}

export default ChatRoomMessage;