import express from 'express';
import routes from '../routes';
import { home, serch } from '../controllers/videoController';
import { getJoin, postJoin, login, logout } from '../controllers/userController';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, serch);

export default globalRouter;