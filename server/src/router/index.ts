import express from 'express';
import loginRouter from './login/login-route';
const mainRouter = express.Router();

mainRouter.use('/login', loginRouter);

export default mainRouter;
