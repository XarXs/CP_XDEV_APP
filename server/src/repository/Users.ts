import { User } from "../model/user";

const _users = new Array<User>;

exports.getUsers = () => {
    return _users;
}

exports.addUser = (user: User) => {
    _users.push(user);
}

exports.removeUser = (user: User) => {
    const index = _users.indexOf(user);
    if (index > -1) {
        _users.splice(index, 1);
    }
}
