import { User } from '../model/user';

const _users = new Array<User>();

const getUsers = () => {
	return _users;
};

const addUser = (user: User) => {
	_users.push(user);
};

const isUserExist = (user: User) => {
	return !!_users.find(userEl => userEl.username === user.username);
};

const findUser = (user: User) => {
	return _users.find(userEl => userEl.username === user.username);
};

const removeUser = (user: User) => {
	const index = _users.indexOf(user);
	if (index > -1) {
		_users.splice(index, 1);
	}
};

const logoutUser = (user: User) => {
	const index = _users.indexOf(user);
	_users[index].tokenId = '';
};

const isUserLoggedIn = (user: User) => {
	const foundedUser = findUser(user);
	return foundedUser && foundedUser.tokenId !== '';
};

export default {
	getUsers,
	addUser,
	isUserExist,
	findUser,
	logoutUser,
	isUserLoggedIn,
	removeUser,
};
