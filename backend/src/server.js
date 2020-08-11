import app from './app';
import http from 'http';
import ChatRoom from './app/models/ChatRoom';
import ChatRoomMessage from './app/models/ChatRoomMessage';

app.listen(3333);

/**
 * Criar servidor HTTP
 */
const server = http.createServer(app);
const io = require("socket.io")(server);

io.on("connection", socket => {
  socket.on("join", async room => {
    socket.join(room);
    // io.emit envia o evento para todos os usuários (broadcasting)
    io.emit("roomJoined", room);
  });

  /**
   * Application listen connect from clients 
   */
  socket.on("message", async data => {
    const { chatRoomName, autor, mensagem } = data;
    
    const chatRoom = await ChatRoom.findAll({
      where: {
        name: chatRoomName
      },
    });

    const chatRoomId = chatRoom[0].id;

    const chatMessage = await ChatRoomMessage.create({
      chatRoomId,
      autor,
      messagem: mensagem,
    });
    io.emit("novaMensagem", chatMessage);
  });
});




