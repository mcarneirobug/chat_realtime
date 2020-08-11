import Sequelize, { Model } from 'sequelize';

class ChatRoom extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING
      }, 
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.ChatRoomMessage, {
      foreignKey: "chat_room_id",
      as: "ChatRoomMessage",
      sourceKey: "id",
    });
  }
}

export default ChatRoom;