import ChatRoomMessage from "../models/ChatRoomMessage";
import ChatRoom from "../models/ChatRoom";

class ChatRoomMessageController {
  async store(req, res) {}

  async index(req, res) {
    try {
      const chatRoomName = req.params.chatRoomName;
      
      const chatRooms = await ChatRoom.findAll({
        where: { name: chatRoomName }
      });

      const chatRoomId = chatRooms[0].id;
      const messages = await ChatRoomMessage.findAll({
        where: { chatRoomId },
      });

      res.json(messages);

    } catch(error) {
      res.send([]);
    }
  }

}

export default new ChatRoomMessageController();
