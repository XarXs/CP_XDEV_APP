import users from '../../repository/Users';

const loginAddUser = async (req: any, res: any) => {
    try {
        const {username, password} = req.body;
        users.addUser({username, password});
        res.json({}).status(200);
    } catch (err: any) {
        res.send(err).status(500);
    }
};

export default {loginAddUser};
