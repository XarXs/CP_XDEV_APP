import express from 'express';
import loginRouter from "./login/login-route";
const mainRouter = express.Router();

mainRouter.use('/login', loginRouter);

export default mainRouter;

/**
 * zastąpic require importami
 * zastąpić module.exports - export default
 * zastąpić module.exports.foo = export foo
 */
