const mainRouter = express.Router();

mainRouter.use('/login', loginRouter);

module.exports = mainRouter;
