import { User } from "../model/user";
import { SocketId } from "socket.io-adapter";

const _users = new Map<SocketId, User>;

exports.getUsers = () => {
    return _users;
}

exports.addUser = (user: User) => {
    _users.set(user.userId, user);
}

exports.removeUser = (user: User) => {
    _users.delete(user.userId);
}