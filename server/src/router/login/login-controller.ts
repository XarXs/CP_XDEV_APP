import users from '../../repository/Users';
import * as crypto from 'crypto';

const loginAddUser = async (req: any, res: any) => {
	try {
		const { username, password } = req.body;
		const tokenId = crypto.createHash('sha1').update(username).digest('hex');
		const newUser = {
			tokenId: tokenId,
			username: username,
			password: password,
		};
		const response = {
			result: {},
		};
		let code = 200;

		if (users.isUserExist(newUser)) {
			const existUser = users.findUser(newUser);
			if (existUser && existUser.password === newUser.password) {
				if (!users.isUserLoggedIn(newUser)) {
					response.result = {
						tokenId: tokenId,
						message: '',
						code: code,
					};
				} else {
					code = 400;
					response.result = {
						message: 'user already logged in',
						code: code,
					};
				}
			} else {
				code = 400;
				response.result = {
					message: 'wrong password',
					code: code,
				};
			}
		} else {
			users.addUser(newUser);
			response.result = {
				tokenId: tokenId,
				message: '',
				code: code,
			};
		}

		res.json(response).status(code);
	} catch (err: any) {
		res.send(err).status(500);
	}
};

export default { loginAddUser };
