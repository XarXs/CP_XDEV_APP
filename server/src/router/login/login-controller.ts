const users = require('../../repository/Users');

const loginAddUser = async (req: any, res: any) => {
    try {
        console.log(req);
        console.log(req.body);
        const {username, password} = req.body;
        users.addUser({username, password});
        res.json({}).status(200);
    } catch (err: any) {
        res.send(err).status(500);
    }
};

module.exports = {
    loginAddUser
}
