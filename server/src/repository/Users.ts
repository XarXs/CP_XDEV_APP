import { User } from "../model/user";

const _users = new Array<User>;

const getUsers = () => {
    return _users;
}

const addUser = (user: User) => {
    _users.push(user);
}

const removeUser = (user: User) => {
    const index = _users.indexOf(user);
    if (index > -1) {
        _users.splice(index, 1);
    }
}
export default {
    getUsers,
    addUser,
    removeUser
}


