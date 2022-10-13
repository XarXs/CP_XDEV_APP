import { Socket } from "socket.io/dist/socket";
import { Server } from "https";

const socketIo = require('socket.io');
const users = require('../../repository/Users');

const getApiAndEmit = (socket: Socket) => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit('FromAPI', response);
};

module.exports = {
    getIo: (server: Server) => {
        const io = socketIo(server);

        let interval: NodeJS.Timer | undefined;

        const onConnect = (socket: Socket) => {
            console.log("A user connected");
            const user = {
                username: "username",
                userId: socket.id
            }
            users.addUser(user);

            socket.emit('socket:currentUsers', users.getUsers());
            socket.broadcast.emit('socket:newUser', users.getUsers()[socket.id]);

            if (interval) {
                clearInterval(interval);
            }
            interval = setInterval(() => getApiAndEmit(socket), 1000)
        }

        io.on('connection', onConnect);
        return io;
    }
};
