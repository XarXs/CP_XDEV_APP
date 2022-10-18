import express from 'express';
import loginController from './login-controller';

const loginRouter = express.Router();

loginRouter.post('/', loginController.loginAddUser);

export default loginRouter;
