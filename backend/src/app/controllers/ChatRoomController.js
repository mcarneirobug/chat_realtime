import ChatRoom from "../models/ChatRoom";

class ChatRoomController {

  async index(req, res) {
    await ChatRoom.findAll().then(
      chat => {
        return res.status(201).json({
          chat
        });
      })
      .catch(err => {
        console.log("ERRO: " + err);
      });
  }

  async store(req, res) {

    const chatRoomExist = await ChatRoom.findOne({
      where: { name: req.body.name }
    });

    if(chatRoomExist) {
      return res.status(200).json({
        error: "ChatRoom já existe."
      });
    }

    const chatRoom = await ChatRoom.create({
      name: req.body.name
    });

    return res.json(chatRoom);
  }

}

export default new ChatRoomController();
