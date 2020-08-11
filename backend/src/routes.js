import { Router } from 'express';
import ChatRoomMessageController from './app/controllers/ChatRoomMessageController';
import ChatRoomController from './app/controllers/ChatRoomController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Server running...' });
});

routes.get('/chatrooms', ChatRoomController.index);
routes.post('/chatroom', ChatRoomController.store);

/**
 * Obtém as mensagems para uma determinada sala
 * de chat pelo nome da sala
 */
routes.get('/chatroom/messages/:chatRoomName', ChatRoomMessageController.index);

export default routes;