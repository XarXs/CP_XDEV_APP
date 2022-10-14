const loginRouter = express.Router();
const loginController = require('./login-controller');

loginRouter.post('/', loginController.loginAddUser);

module.exports = loginRouter;
